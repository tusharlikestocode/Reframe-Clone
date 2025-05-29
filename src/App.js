import BaseTemplate from "./components/screens/BaseTemplate";
import HeroContent from "./components/common/HeroContent1";
import LoadingBar from "./components//common/LoadingBar";
import { useState } from "react";

function App() {
  const [showNextContent, setShowNextContent] = useState(false);

  const handleComplete = () => {
    setShowNextContent(true);
  };

  if (showNextContent) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center font-inter">
        <BaseTemplate />
      </div>
    );
  }
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center relative px-10 pb-10">
      <HeroContent />
      <LoadingBar onComplete={handleComplete} />
    </div>
  );
}

export default App;
