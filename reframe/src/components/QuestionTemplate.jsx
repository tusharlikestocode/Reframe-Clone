const QuestionTemplate = ({
  question,
  options,
  selectedOption,
  onOptionSelect,
  isLoading,
  showResponseReceived,
}) => {
  return (
    <div className="py-6 space-y-6">
      <h2 className="text-[1.25rem] font-[600] leading-[1.5rem] tracking-[-0.024em]">
        {question}
      </h2>

      <div className="space-y-4">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onOptionSelect(option.id)}
            disabled={isLoading}
            className={`relative flex w-full items-center rounded-[15px] border px-4 py-3.5 text-left transition-all duration-200 active:scale-[0.99] text-[1.0625rem] leading-[1.375rem] tracking-[-0.016em] option-button justify-start ${
              selectedOption === option.id
                ? "text-white border-[#243AB9]"
                : "bg-theme-secondary text-theme-secondary-foreground"
            }`}
            style={
              selectedOption === option.id ? { backgroundColor: "#243AB9" } : {}
            }
          >
            <span>{option.text}</span>
          </button>
        ))}
      </div>

      {/* Loading Animation */}
      {isLoading && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin duration-500"></div>
        </div>
      )}

      {/* Response Message */}
      {showResponseReceived && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <p className="text-gray-500 text-sm">Response received</p>
        </div>
      )}
    </div>
  );
};

export default QuestionTemplate;