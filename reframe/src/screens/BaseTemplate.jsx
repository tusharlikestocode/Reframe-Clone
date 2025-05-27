import { Sprout } from "lucide-react";
import BackButton from "../common/BackButton";
import QuestionTemplate from "../common/QuestionTemplate";
import { useState } from "react";
import questionsData from "../../data/questions.json";

const BaseTemplate = () => {
  const [questions, setQuestions] = useState(questionsData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isComplete, setIsComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showResponseReceived, setShowResponseReceived] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleOptionSelect = (optionId) => {
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
  };

  if (questions.length === 0) return null;

  if (isComplete) {
    return (
      <div className="w-[448px] px-4 h-[546px] flex flex-col items-center justify-center">
        <div className="text-center space-y-6">
          <Sprout className="w-16 h-16 mx-auto text-green-600" />
          <h2 className="text-2xl font-bold text-gray-800">
            Questionnaire Complete!
          </h2>
          <p className="text-gray-600">
            Thank you for completing all {questions.length} questions.
          </p>
          <button
            onClick={handleRestart}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[448px] px-4 h-full">
      {/* Header */}
      <div className="flex items-center w-[416px] h-[52px] justify-between bg-white">
        <BackButton
          onClick={handleBackButton}
          disabled={currentQuestionIndex === 0 || isLoading}
        />
        <h1 className="text-lg font-semibold">Reframe</h1>
        <div className="w-8" />
      </div>

      {/* Progress Bar */}
      <div className="w-[416px] bg-white mb-2">
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

      {/* Main Content */}
      <QuestionTemplate
        question={currentQuestion.question}
        options={currentQuestion.options}
        selectedOption={answers[currentQuestion.id]}
        onOptionSelect={handleOptionSelect}
        isLoading={isLoading}
        showResponseReceived={showResponseReceived}
      />
    </div>
  );
};

export default BaseTemplate;