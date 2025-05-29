import React, { useEffect, useState } from 'react';

export default function LoadingBar({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 30);
      return () => clearInterval(interval);
    } else {
      const timeout = setTimeout(() => {
        onComplete(); // trigger callback to show next content
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <>
      <div className="fixed bottom-14 right-4 sm:right-10 lg:right-[37%] text-xs sm:text-sm font-medium text-gray-700">
        {progress}%
      </div>

      <div className="fixed bottom-10 lg:w-[430px] w-full px-4 pt-2">
        <div className="h-2 bg-gray-300 rounded-md overflow-hidden w-full">
          <div
            className="h-full bg-blue-600 transition-all duration-100 ease-linear rounded-md"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </  >
  );
}
