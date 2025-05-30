const IntermediateScreen = ({ onContinue }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-2xl font-bold mb-6">You're All Set!</h1>
      <p className="text-center max-w-md text-gray-600 mb-8">
        Your personalized plan is ready. Let’s get started on the next step of your journey!
      </p>
      <button
        onClick={onContinue}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Continue
      </button>
    </div>
  );
};

export default IntermediateScreen;
