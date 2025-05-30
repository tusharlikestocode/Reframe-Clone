import { useState } from "react";
import FinalLoadingScreen from "../screens/FinalLoadingScreen";
import IntermediateScreen from "../screens/IntermediateScreen";
import PaywallScreen from "../screens/PaywallScreen"
const FinalFlowWrapper = () => {
  const [screen, setScreen] = useState("loading"); // "loading" | "intermediate" | "paywall"

  const goToNextScreen = () => {
    if (screen === "loading") setScreen("intermediate");
    else if (screen === "intermediate") setScreen("paywall");
  };

  return (
    <>
      {screen === "loading" && (
        <FinalLoadingScreen onComplete={goToNextScreen} />
      )}
      {screen === "intermediate" && (
        <IntermediateScreen onContinue={goToNextScreen} />
      )}
      {screen === "paywall" && <PaywallScreen />}
    </>
  );
};

export default FinalFlowWrapper;
