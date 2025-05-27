import React, { useState } from 'react';
import HeroContent from './components/HeroContent1';
import LoadingBar from './components/LoadingBar';

export default function App() {
  const [showNextContent, setShowNextContent] = useState(false);

  const handleComplete = () => {
    setShowNextContent(true);
  };

  if (showNextContent) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <h1 className="text-2xl font-bold">Welcome to the Next Content! 🎉</h1>
      </div>
    );
  }

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center relative px-10">
      <HeroContent />
      {/* <LoadingBar onComplete={handleComplete} /> */}
    </div>
  );
}
