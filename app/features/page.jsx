import Head from "next/head";
import Link from "next/link";

export default function FeaturesPage() {
  const features = [
    {
      name: "End-to-End Encrypted Chats",
      description:
        "Your conversations stay private. Messages are encrypted on your device and never stored on our servers.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      name: "Works Offline & on 2G Networks",
      description:
        "Designed for low-bandwidth regions. Core features function with minimal connectivity—ideal for rural or unstable networks.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      name: "Multilingual Support",
      description:
        "Understands and responds in 30+ languages—including Russian, Dari, Pashto, and Persian—enabling cross-cultural dialogue.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h18M3 9h18M3 13h12M3 17h10"
          />
        </svg>
      ),
    },
    {
      name: "No Account Required",
      description:
        "Start chatting instantly—no signup, no email, no tracking. Privacy by default, not an afterthought.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      name: "AI-Powered Message Encryption",
      description:
        "Send encrypted text messages via your mobile app. Your contacts decrypt them securely—no third parties can read them.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1120 9z"
          />
        </svg>
      ),
    },
    {
      name: "Lightweight & Fast",
      description:
        "Under 5MB install size. Runs smoothly on older Android devices—because powerful AI shouldn’t require expensive hardware.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 5a2 2 0 012-2h4a2 2 0 012 2v0"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <Head>
        <title>Features - NexAI | Advanced AI Chat Assistant</title>
        <meta
          name="description"
          content="Discover the powerful, privacy-focused features of NexAI: offline support, multilingual AI, encrypted messaging, and more."
        />
      </Head>

      {/* Hero */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Powerful Features,{" "}
            <span className="text-blue-600">Respectfully Built</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            Everything you need—without compromising your privacy, data, or
            device.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Ready to try NexAI?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Experience privacy-first AI that works everywhere—even where the
            internet doesn’t.
          </p>
          <div className="mt-8">
            <Link
              href="/download"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Download the App
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
