
const MidwayScreen = ({ onContinue }) => {
  return (
    <div className="w-full lg:w-[448px] px-4 h-full lg:h-[546px] flex flex-col items-center justify-center text-center space-y-6 lg:pt-24">
      <img  src="https://runwayer.ams3.cdn.digitaloceanspaces.com/images/Aspect/Frame%20469461.png" class="object-contain"/>
      <h2 className="text-2xl font-bold text-gray-800">You are in good hands!</h2>
      
      <p className="text-gray-600">
        Empowering thousands to wake up refreshed and energized through personalized support
      </p>
      <button
        onClick={onContinue}
        className="px-6 py-3 lg:w-[400px] w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Continue
      </button>
    </div>
  );
};

export default MidwayScreen;
