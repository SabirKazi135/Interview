import { useState } from "react";
import Timer from "./Timer";

function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-6">
      <button
        onClick={() => setShowTimer(!showTimer)}
        className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
      >
        {showTimer ? "Unmount Timer" : "Mount Timer"}
      </button>

      {showTimer && <Timer />}
    </div>
  );
}

export default App;
