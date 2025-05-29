// BaseTemplate.jsx
import { Sprout } from "lucide-react";
import BackButton from "../common/BackButton";
import SingleSelectTemplate from "../common/SingleSelectTemplate";
import MultiSelectTemplate from "../common/MultiSelectTemplate";
import MidwayScreen from "../common/MidwayScreen";
import { useState } from "react";
import questionsData from "../../data/questions.json";
import FinalLoadingScreen from "../common/FinalLoadingScreen";
import ReactionTemplate from "../common/ReactionTemplate";

const BaseTemplate = () => {
  const [questions, setQuestions] = useState(questionsData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isComplete, setIsComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showResponseReceived, setShowResponseReceived] = useState(false);
  const [hasSeenMidwayScreen, setHasSeenMidwayScreen] = useState(false);
  const halfwayIndex = Math.floor(questions.length / 2);
  const [questionHistory, setQuestionHistory] = useState([0]);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleBackButton = () => {
    if (questionHistory.length > 1) {
      const newHistory = [...questionHistory];
      newHistory.pop();
      const previousIndex = newHistory[newHistory.length - 1];

      setQuestionHistory(newHistory);
      setCurrentQuestionIndex(previousIndex);
      setIsLoading(false);
      setShowResponseReceived(false);

      const newAnswers = { ...answers };
      delete newAnswers[currentQuestion.id];
      setAnswers(newAnswers);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsComplete(false);
    setIsLoading(false);
    setShowResponseReceived(false);
    setQuestionHistory([0]);
  };


  const handleOptionSelect = (optionId) => {
    const selectedOption = currentQuestion.options.find(
      (opt) => opt.id === optionId
    );
    const nextQuestionId = selectedOption.goto;

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
        if (nextQuestionId !== null) {
          const nextIndex = questions.findIndex((q) => q.id === nextQuestionId);
          if (nextIndex !== -1) {
            setCurrentQuestionIndex(nextIndex);
            setQuestionHistory((prev) => [...prev, nextIndex]);
          }
        } else {
          setIsComplete(true);
        }
      }, 500);
    }, 500);
  };



  const handleMultiSelectContinue = () => {
    const firstOption = currentQuestion.options[0];
    const nextQuestionId = firstOption.goto;

    setIsLoading(true);
    setShowResponseReceived(false);

    setTimeout(() => {
      setIsLoading(false);
      setShowResponseReceived(true);

      setTimeout(() => {
        setShowResponseReceived(false);
        if (nextQuestionId !== null) {
          const nextIndex = questions.findIndex((q) => q.id === nextQuestionId);
          if (nextIndex !== -1) {
            setCurrentQuestionIndex(nextIndex);
            setQuestionHistory((prev) => [...prev, nextIndex]);
          }
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
      <div className="w-full md:w-[448px] px-4 h-full">
      {/* Header */}
      <div className="flex items-center w-full lg:w-[416px] h-[52px] justify-between bg-white">
        <BackButton
          onClick={handleBackButton}
          disabled={questionHistory.length <= 1 || isLoading}
        />
        <h1 className="text-lg font-semibold">Reframe</h1>
        <div className="w-8" />
      </div>

      {/* Progress Bar */}
      <div className="w-full md:w-[416px] bg-white mb-2">
        <div className="w-full bg-gray-200 rounded-full h-1">
          <div
            className="h-1 rounded-full transition-all duration-300"
            style={{
              width: `${progress}%`,
              backgroundColor: "rgb(36, 58, 185)",
            }}
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
          onOptionSelect={handleOptionSelect}
          isLoading={isLoading}
          showResponseReceived={showResponseReceived}
        />
      ) : currentQuestion.type==="multi" ? (
        <MultiSelectTemplate
          question={currentQuestion.question}
          options={currentQuestion.options}
          selectedOptions={answers[currentQuestion.id] || []}
          onOptionsSelect={(selected) =>
            setAnswers((prev) => ({ ...prev, [currentQuestion.id]: selected }))
          }
          onContinue={handleMultiSelectContinue}
          isLoading={isLoading}
          showResponseReceived={showResponseReceived}
        />
      ) : currentQuestion.type === "reaction" ? (
        <ReactionTemplate
          question={currentQuestion.question}
          options={currentQuestion.options}
          selectedOption={answers[currentQuestion.id]}
          onOptionSelect={handleOptionSelect}
          isLoading={isLoading}
          showResponseReceived={showResponseReceived}
        />
      ): null
      }
    </div>
  );
};

export default BaseTemplate;
