import { useEffect, useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    console.log("Component Mounted");

    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
    //   clearInterval(intervalId);
      console.log("Component Unmounted");
    };
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold text-white text-center mb-6">
        Timer Component
      </h1>
      <p className="text-center text-blue-400">{timer}</p>
    </div>
  );
}

export default Timer;
