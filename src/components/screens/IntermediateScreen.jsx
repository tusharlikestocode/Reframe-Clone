import Tick from "../../assets/tick.svg"
import Cross from "../../assets/cross.svg"

const IntermediateScreen = ({ onContinue }) => {
  return (
    <div className="w-full lg:w-[448px] px-4 min-h-screen flex flex-col justify-between">
      {/* Scrollable Content */}
      <div className="overflow-y-auto flex-grow">
        <div className="flex items-center w-full lg:w-[416px] h-[52px] justify-between bg-white">
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

        <div className="flex flex-col items-center text-center py-3">
          <div className="text-[1.25rem] font-[600] leading-[1.5rem] tracking-[-0.024em]">
            Personalized plan which actually works!
          </div>
        </div>

        {/* Before and After Section */}
        <div className="flex justify-center py-3">
          <div className="flex gap-8 justify-center max-w-full">
            {/* Before */}
            <div className="flex flex-col items-center gap-2 w-full max-w-[180px]">
              <div className="text-center text-base font-bold">Before</div>
              <div className="flex flex-col gap-2">
                {[
                  "Afternoon drinking causes irritability",
                  "Fast food replaces meals",
                  "Sleep disrupted by nightmares",
                  "Lacks coping mechanisms support",
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <img
                      className="h-6 w-6 object-contain"
                      src={Cross}
                      alt="before"
                    />
                    <div className="text-sm">{text}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="flex flex-col items-center gap-2 w-full max-w-[180px]">
              <div className="text-center text-base font-bold">After</div>
              <div className="flex flex-col gap-2">
                {[
                  "Peaceful afternoons with clarity",
                  "Nutritious meals fuel energy",
                  "Restful nights with consistency",
                  "Healthy strategies replace alcohol",
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <img
                      className="h-6 w-6 object-contain"
                      src={Tick}
                      alt="after"
                    />
                    <div className="text-sm">{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Button */}
      <div className="w-full py-4 bg-white">
        <button
          onClick={onContinue}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default IntermediateScreen;
