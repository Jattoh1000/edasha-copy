import React, { useEffect, useState } from "react";
import { useAuth } from "../contex/AuthContext";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0); // Initial progress value
  const {user} = useAuth()
  useEffect(() => {
    const percentage = ((user?.userAccount?.balance / 700000) * 100).toFixed(2)
    setProgress(percentage)
  },[user])

  return (
    <div className="p-6 w-[100%] mx-auto flex justify-center items-center gap-1">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-1 mb-4">
        <div
          className="bg-blue-600 h-1 rounded-full"
          style={{ width: `${progress}% ` }}
        ></div>
      </div>

      {/* Display the percentage */}
      <p className="text-center font-semibold mb-4 text-xs">{progress}%</p>
    </div>
  );
};

export default ProgressBar;
