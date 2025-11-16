"use client";

import React, { useState, useRef, useEffect } from "react";
import { IoAddSharp } from "react-icons/io5";
import { CgOptions } from "react-icons/cg";
import { FaMicrophone } from "react-icons/fa6";
import { FaCircleArrowUp } from "react-icons/fa6";
import { FaStopCircle } from "react-icons/fa";

export default function InputsChat({
  input,
  setInput,
  callDeepSeekAPI,
  loading,
}) {
  const [isRecording, setIsRecording] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const recognitionRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      callDeepSeekAPI(e);
    }
  };

  // Request microphone permission
  const requestMicrophonePermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setHasPermission(true);

      // Initialize media recorder
      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setAudioChunks((prev) => [...prev, event.data]);
        }
      };

      recorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
        await convertSpeechToText(audioBlob);
        setAudioChunks([]);
      };

      return true;
    } catch (error) {
      console.error("Error accessing microphone:", error);
      alert(
        "Microphone permission denied. Please allow microphone access to use voice features."
      );
      setHasPermission(false);
      return false;
    }
  };

  // Convert speech to text using Web Speech API
  const convertSpeechToText = (audioBlob) => {
    if (
      !("webkitSpeechRecognition" in window) &&
      !("SpeechRecognition" in window)
    ) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput((prev) => prev + transcript);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognition.start();
  };

  // Start recording
  const startRecording = async () => {
    if (!hasPermission) {
      const granted = await requestMicrophonePermission();
      if (!granted) return;
    }

    if (mediaRecorder) {
      setAudioChunks([]);
      mediaRecorder.start();
      setIsRecording(true);
    }
  };

  // Stop recording
  const stopRecording = () => {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      setIsRecording(false);

      // Stop all tracks
      mediaRecorder.stream.getTracks().forEach((track) => track.stop());
    }

    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  // Handle microphone click
  const handleMicrophoneClick = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (mediaRecorder) {
        mediaRecorder.stream.getTracks().forEach((track) => track.stop());
      }
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [mediaRecorder]);

  return (
    <div className="bg-white h-[15%] w-[85vh] fixed bottom-0">
      <div className="flex flex-col w-full gap-3 h-3/4 shadow shadow-black/20 rounded-3xl py-4 px-3">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 h-1/2 p-2 rounded focus:outline-none text-xl overflow-y-auto"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <div className="h-1/2 w-full flex flex-row-reverse p-2 justify-between items-center gap-y-2">
          <div className="flex flex-row justify-center items-center gap-x-2">
            <div
              className={`flex justify-center items-center py-1 px-3 rounded-2xl hover:bg-gray-100 cursor-pointer ${
                isRecording ? "bg-red-100 text-red-600" : ""
              }`}
              onClick={handleMicrophoneClick}
              title={isRecording ? "Stop recording" : "Start recording"}
            >
              {isRecording ? (
                <FaStopCircle className="text-2xl animate-pulse" />
              ) : (
                <FaMicrophone className="text-2xl" />
              )}
            </div>
            <div className="flex justify-center items-center py-1 rounded-3xl hover:bg-gray-100">
              <button
                onClick={callDeepSeekAPI}
                disabled={loading}
                className="text-3xl px-3"
              >
                {loading ? "..." : <FaCircleArrowUp />}
              </button>
            </div>
          </div>
          <div className="flex gap-x-4 ">
            <div className="text-2xl px-3 rounded-2xl hover:bg-gray-100 flex justify-center items-center">
              <IoAddSharp className="text-3xl" />
            </div>
            <div className=" flex flex-row justify-center text-xl items-center px-2 rounded-2xl py-1 hover:bg-gray-100 hover:cursor-pointer">
              <CgOptions className="text-2xl" />
              <h1>tools</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1/4 flex justify-center items-center text-center text-sm">
        <p>ChatGPT can make mistakes. Check important info.</p>
        {isRecording && (
          <div className="ml-4 flex items-center text-red-600">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse mr-1"></div>
            Recording...
          </div>
        )}
      </div>
    </div>
  );
}
