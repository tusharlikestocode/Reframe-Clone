import { useEffect, useState } from "react";
import BackButton from "../common/BackButton";
import Harvardlogo from "../../assets/Harvard_University_coat_of_arms.svg.png"
const FinalLoadingScreen = ({onComplete}) => {
  const [progressStages, setProgressStages] = useState([0, 0, 0, 0, 0]);
  const [currentStage, setCurrentStage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalStep, setModalStep] = useState(null);
  const [pauseLoading, setPauseLoading] = useState(false);

  const handleNextStage = () => {
    setCurrentStage((prev) => prev + 1);
  };

  const startLoading = (stage) => {
    let value = 0;
    const interval = setInterval(() => {
      if (pauseLoading) {
        clearInterval(interval);
        return;
      }
      
      value += 2;
      setProgressStages((prev) => {
        const updated = [...prev];
        updated[stage] = Math.min(value, 100);
        return updated;
      });
      
      if (value >= 100) {
        clearInterval(interval);
        if (stage === 2 || stage === 3) {
          setPauseLoading(true);
          setModalStep(stage);
          setShowModal(true);
        } else if (stage < 4) {
          handleNextStage();
        }
      }
    }, 30);
    
    return interval;
  };

  const handleModalOption = () => {
    setShowModal(false);
    setModalStep(null);
    setPauseLoading(false);
    handleNextStage();
  };

  useEffect(() => {
    let interval;
    if (currentStage <= 4) {
      interval = startLoading(currentStage);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentStage, pauseLoading]);

  // Dialog Component
  const Dialog = ({ open, children }) => {
    if (!open) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
        {children}
      </div>
    );
  };

  const DialogContent = ({ children, className = "" }) => {
    return (
      <div className={`bg-white p-6 rounded-lg shadow-lg w-4/5 max-w-md ${className}`}>
        {children}
      </div>
    );
  };

  const DialogHeader = ({ children }) => <div className="mb-4">{children}</div>;
  const DialogTitle = ({ children, className = "" }) => <h2 className={`text-xl font-bold ${className}`}>{children}</h2>;

    return (
    <div className="w-full lg:w-[448px] px-4 min-h-screen flex flex-col justify-between overflow-y-auto">
      <div>
        <div className="flex items-center w-full lg:w-[416px] h-[52px] justify-between bg-white">
          <BackButton disabled onClick={() => {}} />
          <h1 className="text-lg font-semibold">Reframe</h1>
          <div className="w-8" />
        </div>

        <div className="w-full lg:w-[416px] bg-white mb-2">
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div
              className="h-1 rounded-full transition-all duration-300"
              style={{ width: `100%`, backgroundColor: "#243AB9" }}
            ></div>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-center my-6">Building personalized plan!</h2>

        <div className="space-y-4">
          {["Identifying Your Triggers...", "Understanding Your Motivation...", "Creating Your Support Plan...", "Setting Achievable Goals...", "Building Your Healthier Future..."].map((label, index) => (
            <div key={index} className="relative">
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm font-medium text-gray-700">{label}</p>
                {progressStages[index] === 100 && <span className="text-green-500">✅</span>}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressStages[index]}%`, backgroundColor: "#243AB9" }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={showModal}>
          <DialogContent className="text-center">
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold">
                {modalStep === 2 ? "What do you crave?" : modalStep === 3 ? "Want help in setting SMART goals?" : ""}
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={handleModalOption}
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-blue-700 hover:text-white"
              >
                {modalStep === 2 ? "Freedom" : modalStep === 3 ? "Yes" : ""}
              </button>
              <button
                onClick={handleModalOption}
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-blue-700 hover:text-white"
              >
                {modalStep === 2 ? "Routine" : modalStep === 3 ? "No" : ""}
              </button>
            </div>
          </DialogContent>
        </Dialog>

        <div className="bg-white shadow-lg rounded-2xl p-6 mt-8 max-w-xl mx-auto animate-fade-in">
          <div className="flex flex-row justify-center items-center space-x-6">
            <p className="text-sm text-justify text-gray-600 max-w-xs">
              Approach certified by Harvard Medical School. Complies with requirements of healthcare professionals and providers.
            </p>
            <img src={Harvardlogo} alt="Harvard Medical School" className="w-20 h-20" />
          </div>
        </div>
      </div>

      {progressStages.every(stage => stage === 100) && (
        <div className="w-full py-4 flex justify-center  mt-6 bg-white">
          <button
            onClick={onComplete}
            className="px-6 w-[440px] py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default FinalLoadingScreen;