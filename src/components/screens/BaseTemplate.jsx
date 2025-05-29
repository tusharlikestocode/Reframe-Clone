// BaseTemplate.jsx
import { Sprout } from "lucide-react";
import BackButton from "../common/BackButton";
import SingleSelectTemplate from "../common/SingleSelectTemplate";
import MultiSelectTemplate from "../common/MultiSelectTemplate";
import MidwayScreen from "../common/MidwayScreen";
import { useState } from "react";
import questionsData from "../../data/questions.json";
import FinalLoadingScreen from "../common/FinalLoadingScreen";

const BaseTemplate = () => {
  const [questions, setQuestions] = useState(questionsData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isComplete, setIsComplete] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showResponseReceived, setShowResponseReceived] = useState(false);
  const [hasSeenMidwayScreen, setHasSeenMidwayScreen] = useState(false);
  const halfwayIndex = Math.floor(questions.length / 2);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleBackButton = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setIsLoading(false);
      setShowResponseReceived(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsComplete(false);
    setIsLoading(false);
    setShowResponseReceived(false);
    setHasSeenMidwayScreen(false);
  };

  const handleSingleSelect = (optionId) => {
    const newAnswers = {
      ...answers,
      [currentQuestion.id]: optionId,
    };
    setAnswers(newAnswers);
    setIsLoading(true);
    setShowResponseReceived(false);

    setTimeout(() => {
      setIsLoading(false);
      setShowResponseReceived(true);

      setTimeout(() => {
        setShowResponseReceived(false);
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setIsComplete(true);
        }
      }, 500);
    }, 500);
  };

  const handleMultiSelectContinue = (selected) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: selected }));
    setIsLoading(true);
    setShowResponseReceived(false);

    setTimeout(() => {
      setIsLoading(false);
      setShowResponseReceived(true);

      setTimeout(() => {
        setShowResponseReceived(false);
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setIsComplete(true);
        }
      }, 500);
    }, 500);
  };

  if (questions.length === 0) return null;

  if (isComplete) {
    return (
      <FinalLoadingScreen/>
    );
  }

  return (
    <div className=" w-full lg:w-[448px] px-4 min-h-screen flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="flex items-center w-full lg:w-[416px] h-[52px] justify-between bg-white">
        <BackButton
          onClick={handleBackButton}
          disabled={currentQuestionIndex === 0 || isLoading}
        />
        <h1 className="text-lg font-semibold">Reframe</h1>
        <div className="w-8" />
      </div>

      {/* Progress Bar */}
      <div className="w-full lg:w-[416px] bg-white mb-2">
        <div className="w-full bg-gray-200 rounded-full h-1">
          <div
            className="h-1 rounded-full transition-all duration-300"
            style={{ width: `${progress}%`, backgroundColor: "#243AB9" }}
          ></div>
        </div>
      </div>

      {currentQuestionIndex === halfwayIndex && !hasSeenMidwayScreen ? (
        <MidwayScreen
          onContinue={() => {
            setHasSeenMidwayScreen(true);
            setCurrentQuestionIndex(currentQuestionIndex + 1);
          }}
        />
      ) : currentQuestion.type === "single" ? (
        <SingleSelectTemplate
          question={currentQuestion.question}
          options={currentQuestion.options}
          selectedOption={answers[currentQuestion.id]}
          onOptionSelect={handleSingleSelect}
          isLoading={isLoading}
          showResponseReceived={showResponseReceived}
        />
      ) : (
        <MultiSelectTemplate
          question={currentQuestion.question}
          options={currentQuestion.options}
          selectedOptions={answers[currentQuestion.id] || []}
          onOptionsSelect={(selected) =>
            setAnswers((prev) => ({ ...prev, [currentQuestion.id]: selected }))
          }
          onContinue={() => {
            setIsLoading(true);
            setShowResponseReceived(false);

            setTimeout(() => {
              setIsLoading(false);
              setShowResponseReceived(true);

              setTimeout(() => {
                setShowResponseReceived(false);
                if (currentQuestionIndex < questions.length - 1) {
                  setCurrentQuestionIndex(currentQuestionIndex + 1);
                } else {
                  setIsComplete(true);
                }
              }, 500);
            }, 500);
          }}
          isLoading={isLoading}
          showResponseReceived={showResponseReceived}
        />
      )}
    </div>
  );
};

export default BaseTemplate;
