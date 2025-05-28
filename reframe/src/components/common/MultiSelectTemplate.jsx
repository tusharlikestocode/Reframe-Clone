const MultiSelectTemplate = ({
  question,
  options,
  selectedOptions = [],
  onOptionsSelect,
  onContinue,
  isLoading,
  showResponseReceived,
}) => {
  const handleOptionToggle = (optionId) => {
    const newSelectedOptions = selectedOptions.includes(optionId)
      ? selectedOptions.filter((id) => id !== optionId)
      : [...selectedOptions, optionId];

    onOptionsSelect(newSelectedOptions);
  };

  return (
    <div className="relative py-6 space-y-6">
      <h2 className="text-[1.25rem] font-[600] leading-[1.5rem] tracking-[-0.024em]">
        {question}
      </h2>

      <div className="space-y-4">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleOptionToggle(option.id)}
            disabled={isLoading}
            className={`relative flex w-full items-center justify-between rounded-[15px] border px-4 py-3.5 text-left transition-all duration-200 active:scale-[0.99] text-[1.0625rem] leading-[1.375rem] tracking-[-0.016em] ${
              selectedOptions.includes(option.id)
                ? "bg-theme-secondary text-theme-secondary-foreground border-[#243AB9]"
                : "bg-theme-secondary text-theme-secondary-foreground border-gray-200"
            }`}
          >
            <span className="w-[85%]">{option.text}</span>

            {/* Square Checkbox */}
            <div
              className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-200 ${
                selectedOptions.includes(option.id)
                  ? "bg-[#243AB9] border-[#243AB9]"
                  : "border-gray-300 bg-white"
              }`}
            >
              {selectedOptions.includes(option.id) && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20,6 9,17 4,12"></polyline>
                </svg>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Helper Text */}
      <p className="text-gray-500 text-sm text-center">
        You can select multiple options.
      </p>

      {/* Continue Button */}
      <button
        onClick={onContinue}
        disabled={isLoading || selectedOptions.length === 0}
        className={` w-full py-4 rounded-[15px] text-white font-medium text-[1.0625rem] transition-all duration-200 active:scale-[0.99] ${
          isLoading || selectedOptions.length === 0
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-[#243AB9] hover:bg-[#1e2f9e]"
        }`}
      >
        {isLoading ? "Loading..." : "Continue"}
      </button>

      {isLoading && (
        <div className="flex justify-center mt-8">
          <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin duration-500"></div>
        </div>
      )}

      {showResponseReceived && (
        <div className="flex justify-center mt-8">
          <p className="text-gray-500 text-sm">Response received</p>
        </div>
      )}
    </div>
  );
};

export default MultiSelectTemplate;