// ButtonInput.jsx
const inputBt = ({ name, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
      >
        {name}
      </button>
    );
  };
  