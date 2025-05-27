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
      <div className="absolute bottom-14 right-10 transform -translate-x-1/2 text-sm font-medium text-gray-700">
        {progress}%
      </div>
      <div className="absolute bottom-10 left-0 w-full px-10">
        <div className="h-1.5 w-full bg-gray-300 rounded-md overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-100 ease-linear rounded-md"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </>
  );
}
