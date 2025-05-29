const ReactionTemplate = ({
  question,
  options,
  selectedOption,
  onOptionSelect,
  isLoading,
  showResponseReceived,
}) => {
  return (
    <div className="py-6 space-y-8">
      {/* Question */}
      <div className="text-center">
        <h2 className="text-[1.25rem] font-[600] leading-[1.5rem] tracking-[-0.024em]">
          {question}
        </h2>
      </div>

      {/* Emoji Options */}
      <div className="space-y-6">
        <div className="flex w-full items-stretch md:gap-3 flex-row gap-1 text-center">
          {options.map((option, index) => (
            <button
              key={option.id}
              onClick={() => onOptionSelect(option.id)}
              disabled={isLoading}
              className={`relative flex w-full items-center rounded-[15px] border px-4 py-3.5 text-left transition-all duration-200 active:scale-[0.99] text-[1.0625rem] leading-[1.375rem] tracking-[-0.016em] justify-start ${
                selectedOption === option.id
                  ? "border-[#243AB9] bg-[#243AB9] shadow-lg"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <span className="mx-auto">{option.text}</span>
            </button>
          ))}
        </div>

        {/* Labels */}
        <div className="flex justify-between items-center px-2 text-sm text-gray-500">
          <span>Strongly disagree</span>
          <span>Strongly agree</span>
        </div>
      </div>

      {/* Loading Animation */}
      {isLoading && (
        <div className="flex justify-center mt-8">
          <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin duration-500"></div>
        </div>
      )}

      {/* Response Message */}
      {showResponseReceived && (
        <div className="flex justify-center mt-8">
          <p className="text-gray-500 text-sm">Response received</p>
        </div>
      )}
    </div>
  );
};

export default ReactionTemplate;