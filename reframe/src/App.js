import React, { useState, useEffect } from 'react';
import HeroImage from '../src/assets/image.png';
import Appoftheday from '../src/assets/App of the Day APP Store.png';

export default function App() {
  const [progress, setProgress] = useState(0);
  const [showNextContent, setShowNextContent] = useState(false);

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 30);
      return () => clearInterval(interval);
    } else {
      const timeout = setTimeout(() => {
        setShowNextContent(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  if (showNextContent) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <h1 className="text-2xl font-bold">Welcome to the Next Content! 🎉</h1>
      </div>
    );
  }

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center relative px-10">
      <div className="text-center">
        <div className="flex justify-center mb-10">
          <img className="w-4/5" src={HeroImage} alt="hero-image" />
        </div>
        <p className="font-sans text-md mb-4">
          <strong className="text-xl">
            See how fast you can take control of your drinking with Reframe
          </strong>
          <br />
          Personalized plan tailored to your age
        </p>
        <div className="flex justify-center">
          <img src={Appoftheday} className="w-3/5" alt="apple app of the day" />
        </div>
      </div>

      {/* Progress text */}
      <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-700">
        Loading... {progress}%
      </div>

      {/* Loading bar */}
      <div className="absolute bottom-10 left-0 w-full px-10">
        <div className="h-1.5 w-full bg-gray-300 rounded-md overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-100 ease-linear rounded-md"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
