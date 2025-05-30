import { useEffect, useState } from "react";
import { Lock } from "lucide-react";

const CheckIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM17.197 9.197C17.4899 8.9041 17.4899 8.42923 17.197 8.13634C16.9041 7.84344 16.4292 7.84344 16.1363 8.13634L10 14.2727L7.86366 12.1363C7.57077 11.8434 7.0959 11.8434 6.803 12.1363C6.51011 12.4292 6.51011 12.9041 6.803 13.197L9.46967 15.8637C9.76256 16.1566 10.2374 16.1566 10.5303 15.8637L17.197 9.197Z"
      fill="currentColor"
      className="text-[hsl(231,67.4%,43.3%)]"
    />
  </svg>
);

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect width="20" height="20" fill="#70C18A" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.6525 7.96556L10 3L8.34752 7.96556H3L7.32624 11.0344L5.67376 16L10 12.9311L14.3262 16L12.8813 11.658L11 12L16.1934 8.53774L17 7.96556H11.6525Z"
      fill="white"
    />
  </svg>
);

const TestimonialCard = ({ name, text }) => (
  <div className="flex flex-col gap-4 border border-black/10 bg-white px-4 py-6 shadow-sm md:flex-1">
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-0.5">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <StarIcon key={i} />
          ))}
      </div>
      <div className="font-[560] text-[1.0625rem] leading-[1.375rem] tracking-[-0.016em]">
        {name}
      </div>
    </div>
    <div className="text-[1.0625rem] leading-[1.375rem] tracking-[-0.016em]">
      {text}
    </div>
  </div>
);

const TestimonialsSection = ({ testimonials }) => (
  <div
    className="mx-auto flex w-full max-w-md flex-col md:max-w-[676px] lg:max-w-[1000px]"
    style={{ padding: "32px 16px 16px" }}
  >
    <div className="flex flex-col gap-5">
      <div className="text-center text-[1.25rem] font-[600] leading-[1.5rem] tracking-[-0.024em]">
        Why Users Love Reframe
      </div>
      <div className="flex flex-col gap-3 md:flex-row">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} name={t.name} text={t.text} />
        ))}
      </div>
    </div>
  </div>
);

const PaywallScreen = () => {
  const [timeLeft, setTimeLeft] = useState(300);
  const [selectedPlan, setSelectedPlan] = useState("Semiannually");

  const features = [
    "Tailored plan for homemakers seeking balance and control",
    "Improve sleep quality and reduce irritability effectively",
    "Daily tips for integrating healthier habits and focus enhancement",
  ];

  const testimonials = [
    {
      name: "Linda M.",
      text: "“Reframe has been a game-changer for me in maintaining my sober lifestyle. The personalized coaching and community support have been invaluable in helping me stay focused and productive throughout the day. I feel more empowered and in control of my choices.”",
    },
    {
      name: "Nancy B.",
      text: "“I appreciate how Reframe understands my journey. The mindfulness tools have helped me manage stress and improve my sleep quality. I love the non-judgmental space it provides, allowing me to explore healthier habits and reduce my alcohol intake.”",
    },
    {
      name: "Alex J.",
      text: "“The app keeps me on track with my goals, and I love that it doesn’t shame or judge. It’s supportive, easy to use, and packed with content that actually makes a difference in my daily habits.”",
    },
  ];

  const logos = [
    "https://runwayer.ams3.cdn.digitaloceanspaces.com/runwayer-ng/featured/4.png",
    "https://runwayer.ams3.cdn.digitaloceanspaces.com/runwayer-ng/featured/8.png",
    "https://runwayer.ams3.cdn.digitaloceanspaces.com/runwayer-ng/featured/2.png",
    "https://runwayer.ams3.cdn.digitaloceanspaces.com/runwayer-ng/featured/11.png",
    "https://runwayer.ams3.cdn.digitaloceanspaces.com/runwayer-ng/featured/13.png",
    "https://runwayer.ams3.cdn.digitaloceanspaces.com/runwayer-ng/featured/3.png",
  ];

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (secs % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const isSelected = (plan) => selectedPlan === plan;

  const planCardClasses = (plan) =>
    `border rounded-lg p-4 relative cursor-pointer transition-all duration-200 ${
      isSelected(plan) ? "border-2 border-blue-600" : "border"
    }`;

  const planCardtagClasses = (plan) =>
    `absolute -top-3 left-3 ${
      isSelected(plan) ? "bg-blue-600 text-white" : "bg-gray-300"
    } text-xs font-semibold px-2 py-1 rounded-md`;

  return (
    <div className="p-4 max-w-4xl mx-auto overflow-y-auto">
      <div className="bg-white px-4 py-3 transition-all duration-300 fixed left-0 right-0 top-0 z-10 shadow-sm">
        <div className="mx-auto flex w-full max-w-md justify-between gap-4">
          <div className="flex items-center gap-2">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-red-500"
              >
                <path
                  d="M12 4.65039C7.21996 4.65039 3.32996 8.54039 3.32996 13.3204C3.32996 18.1004 7.21996 22.0004 12 22.0004C16.78 22.0004 20.67 18.1104 20.67 13.3304C20.67 8.55039 16.78 4.65039 12 4.65039ZM12.75 13.0004C12.75 13.4104 12.41 13.7504 12 13.7504C11.59 13.7504 11.25 13.4104 11.25 13.0004V8.00039C11.25 7.59039 11.59 7.25039 12 7.25039C12.41 7.25039 12.75 7.59039 12.75 8.00039V13.0004Z"
                  className="fill-red-500"
                ></path>
                <path
                  d="M14.89 3.45H9.11001C8.71001 3.45 8.39001 3.13 8.39001 2.73C8.39001 2.33 8.71001 2 9.11001 2H14.89C15.29 2 15.61 2.32 15.61 2.72C15.61 3.12 15.29 3.45 14.89 3.45Z"
                  className="fill-red-500"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              {timeLeft > 0 && (
                <div class="text-[0.9375rem] leading-[1.25rem] tracking-[-0.012em]">
                  Discount available
                </div>
              )}
              <div className="font-[560] text-[0.9375rem] leading-[1.25rem] tracking-[-0.012em]">
                {timeLeft > 0
                  ? formatTime(timeLeft)
                  : "We saved your discount!"}
              </div>
            </div>
          </div>
          <button className="relative flex items-center justify-center rounded-[15px] border text-left transition-all duration-200 active:scale-[0.99] border-transparent w-auto px-4 py-[10px] font-[540] text-[0.9375rem] leading-[1.25rem] tracking-[-0.012em] hover:opacity-80 bg-[#243AB9] hover:bg-[#1e2f9e] text-white">
            Get offer
          </button>
        </div>
      </div>
      <div className="mx-auto flex w-full flex-col max-w-none px-4 pt-[70px]">
        <div
          className="relative flex w-full justify-center self-center bg-center bg-no-repeat bg-contain max-w-[380px] max-h-[280px] aspect-[380/280]"
          style={{
            backgroundImage:
              'url("https://runwayer.ams3.cdn.digitaloceanspaces.com/images/reframe/IMG_0639.webp")',
          }}
        />
      </div>
      <div className="mx-auto flex w-full max-w-md flex-col p-4 pb-[18px]">
        <div className="flex flex-col gap-5">
          <div className="text-[2rem] font-[600] leading-[2.25rem] tracking-[-0.024em] text-center">
            Your Personalized Plan Is Ready
          </div>
          <div className="flex flex-col gap-4 text-[1.0625rem] leading-[1.375rem] tracking-[-0.016em]">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-2">
                <div className="shrink-0">
                  <CheckIcon />
                </div>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-green-300 p-4 rounded-lg text-black font-sans mb-4">
        <p className="text-sm mb-1">Applied limited discount</p>
        <div className="flex justify-between items-center bg-white p-2 rounded-lg">
          <span className="font-bold">#may25</span>
          <span className="bg-green-600 text-white text-sm px-2 py-1 rounded-lg font-semibold">
            50% Off
          </span>
        </div>
        <p className="text-right font-semibold mt-2">
          Discount reserved for:{" "}
          <span>
            {timeLeft > 0 ? formatTime(timeLeft) : "We saved your discount"}
          </span>
        </p>
      </div>
      <h3 className="text-center font-semibold text-lg mb-2">
        Choose your plan with 50% discount
      </h3>
      <div className="bg-red-500 text-white text-center py-3 rounded-lg text-sm font-medium mb-6">
        <span className="inline-flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {timeLeft > 0
            ? `Discount available ${formatTime(timeLeft)}`
            : "We saved your discount"}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-sans">
        {/* Monthly Plan */}
        <div
          className={planCardClasses("Monthly")}
          onClick={() => setSelectedPlan("Monthly")}
        >
          <span className={planCardtagClasses("Monthly")}>MOST POPULAR</span>
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-bold">Monthly</h4>
            <input
              type="radio"
              name="plan"
              className="accent-blue-600"
              checked={isSelected("Monthly")}
              readOnly
            />
          </div>
          <p className="text-gray-500 text-sm">
            <span className="line-through">$39.99 </span> → $29.99
          </p>
          <p className="text-gray-400 line-through text-xs mt-1">$1.33</p>
          <p className="text-2xl font-bold">
            $0.99 <span className="text-sm font-normal">per day</span>
          </p>
        </div>

        {/* Quarterly Plan */}
        <div
          className={planCardClasses("Quarterly")}
          onClick={() => setSelectedPlan("Quarterly")}
        >
          <span className={planCardtagClasses("Quarterly")}>
            SEE FIRST RESULTS
          </span>
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-bold">Quarterly</h4>
            <input
              type="radio"
              name="plan"
              className="accent-blue-600"
              checked={isSelected("Quarterly")}
              readOnly
            />
          </div>
          <p className="text-gray-500 text-sm">
            <span className="line-through">$59.99 </span> → $49.99
          </p>
          <p className="text-gray-400 line-through text-xs mt-1">$0.65</p>
          <p className="text-2xl font-bold">
            $0.54 <span className="text-sm font-normal">per day</span>
          </p>
        </div>

        {/* Semiannual Plan */}
        <div
          className={planCardClasses("Semiannually")}
          onClick={() => setSelectedPlan("Semiannually")}
        >
          <span className={planCardtagClasses("Semiannually")}>
            MOST EFFECTIVE
          </span>
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-bold">Semiannually</h4>
            <input
              type="radio"
              name="plan"
              className="accent-blue-600"
              checked={isSelected("Semiannually")}
              readOnly
            />
          </div>
          <p className="text-gray-500 text-sm">
            <span className="line-through">$89.99 </span> → $69.99
          </p>
          <p className="text-gray-400 line-through text-xs mt-1">$0.49</p>
          <p className="text-2xl font-bold">
            $0.38 <span className="text-sm font-normal">per day</span>
          </p>
        </div>
      </div>
      <div className="text-center mt-4">
        <button className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg">
          Get my plan
        </button>
        <p className="text-sm text-gray-500 mt-2">Cancel anytime</p>
      </div>
      <div className="mt-6 text-center">
        <p className="font-semibold text-sm mb-2">Guaranteed safe checkout</p>
        <div className="inline-flex items-center gap-4 border rounded-lg px-4 py-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
            alt="Visa"
            className="h-6"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
            alt="Mastercard"
            className="h-6"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg"
            alt="American Express"
            className="h-6"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/57/Discover_Card_logo.svg"
            alt="Discover"
            className="h-6"
          />
        </div>
        <div className="mt-2 flex items-center justify-center text-sm text-gray-500">
          <Lock className="h-4 w-4 mr-1" />
          All transactions are secure and encrypted
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-md flex-col pt-8 px-4 pb-3">
        <div className="flex flex-col gap-5">
          <div className="text-center text-[1.25rem] font-[600] leading-[1.5rem] tracking-[-0.024em]">
            Personalized Plan Highlights
          </div>
          <div className="border border-black/10 bg-white p-2 shadow-sm">
            <div className="grid grid-cols-2 overflow-hidden">
              <div className="relative py-2 [&:nth-child(2n)>.divider-x]:hidden">
                <div className="divider-y absolute -bottom-px left-0 h-px w-full bg-black/10"></div>
                <div className="divider-x absolute bottom-2 right-0 top-2 w-px bg-black/10"></div>
                <div className="flex gap-2 px-3 py-2.5">
                  <img
                    src="https://runwayer.ams3.cdn.digitaloceanspaces.com/runwayer-ng/goals-icons/goal.svg"
                    className="h-6 w-6 object-contain"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <div className="text-xs">Your Goal</div>
                    <div className="text-sm font-semibold">
                      🌱 Continue a sober lifestyle
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative py-2 [&:nth-child(2n)>.divider-x]:hidden">
                <div className="divider-y absolute -bottom-px left-0 h-px w-full bg-black/10"></div>
                <div className="divider-x absolute bottom-2 right-0 top-2 w-px bg-black/10"></div>
                <div className="flex gap-2 px-3 py-2.5">
                  <img
                    src="https://runwayer.ams3.cdn.digitaloceanspaces.com/runwayer-ng/goals-icons/clock.svg"
                    className="h-6 w-6 object-contain"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <div className="text-xs">Age group</div>
                    <div className="text-sm font-semibold">40-49</div>
                  </div>
                </div>
              </div>
              <div className="relative py-2 [&:nth-child(2n)>.divider-x]:hidden">
                <div className="divider-y absolute -bottom-px left-0 h-px w-full bg-black/10"></div>
                <div className="divider-x absolute bottom-2 right-0 top-2 w-px bg-black/10"></div>
                <div className="flex gap-2 px-3 py-2.5">
                  <img
                    src="https://runwayer.ams3.cdn.digitaloceanspaces.com/runwayer-ng/goals-icons/level.svg"
                    className="h-6 w-6 object-contain"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <div className="text-xs">Family status</div>
                    <div className="text-sm font-semibold">Widowed</div>
                  </div>
                </div>
              </div>
              <div className="relative py-2 [&:nth-child(2n)>.divider-x]:hidden">
                <div className="divider-y absolute -bottom-px left-0 h-px w-full bg-black/10"></div>
                <div className="divider-x absolute bottom-2 right-0 top-2 w-px bg-black/10"></div>
                <div className="flex gap-2 px-3 py-2.5">
                  <img
                    src="https://runwayer.ams3.cdn.digitaloceanspaces.com/runwayer-ng/goals-icons/calendar.svg"
                    className="h-6 w-6 object-contain"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <div className="text-xs">Longest sober period</div>
                    <div className="text-sm font-semibold">A few months</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-md flex-col pt-3 px-4 pb-4.5">
        <div className="flex flex-col justify-center gap-3">
          <button className="relative text-white bg-[#243AB9] hover:bg-[#1e2f9e] flex w-full items-center justify-center rounded-[15px] border px-4 py-3.5 text-left transition-all duration-200 active:scale-[0.99] border-transparent font-[540] text-[0.9375rem] leading-[1.25rem] tracking-[-0.012em] hover:opacity-80">
            Get my plan
          </button>
        </div>
      </div>
      <div className="mx-auto flex w-full flex-col p-4">
        <div className="relative flex w-full max-w-md justify-center self-center bg-center bg-no-repeat bg-contain">
          <img
            src="https://runwayer.ams3.cdn.digitaloceanspaces.com/images/reframe/what-youll-get.webp"
            className="object-contain"
            loading="lazy"
            alt="newImage"
          />
        </div>
      </div>
      <div className="mx-auto flex w-full flex-col p-4">
        <div className="relative flex w-full max-w-md justify-center self-center bg-center bg-no-repeat bg-contain">
          <img
            src="https://runwayer.ams3.cdn.digitaloceanspaces.com/images/reframe/reframescreens.webp"
            loading="lazy"
            className="object-contain"
            alt="newImage"
          />
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-md flex-col pt-3 px-4 pb-4.5">
        <div className="flex flex-col justify-center gap-3">
          <button className="relative text-white bg-[#243AB9] hover:bg-[#1e2f9e] flex w-full items-center justify-center rounded-[15px] border px-4 py-3.5 text-left transition-all duration-200 active:scale-[0.99] border-transparent font-[540] text-[0.9375rem] leading-[1.25rem] tracking-[-0.012em] hover:opacity-80">
            Get my plan
          </button>
        </div>
      </div>
      <TestimonialsSection testimonials={testimonials} />
      {/* <div className="mx-auto flex w-full flex-col px-4 py-8">
        <div className="flex flex-col gap-4">
          <div className="px-8 pt-1 text-center text-[1.25rem] font-[600] leading-[1.5rem] tracking-[-0.024em]">
            Featured In
          </div>
          <div className="w-full px-8 pb-2 overflow-auto">
            <div
              className="flex gap-2 overflow-x-auto scrollbar-hide md:justify-center"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {logos.map((logoUrl, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="my-1 flex h-20 w-40 shrink-0 items-center justify-center border border-black/10 bg-white p-3 shadow-sm">
                    <div className="relative h-5 w-full">
                      <img
                        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full object-contain"
                        src={logoUrl}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
      <div className="mt-10 flex flex-col gap-4 rounded-[2px] bg-black/5 px-8 py-10">
        <ul className="whitespace-pre-wrap">
          <li>
            <ul className="list-disc space-y-2">
              <li>
                You’ll only be charged $49.99 for your first three months of
                full access.
              </li>
            </ul>
          </li>
          <li>
            <ul className="list-disc space-y-2">
              <li>
                Enjoy the freedom to cancel anytime. If you choose not to
                cancel, your subscription will automatically renew quarterly at
                $59.99 at the end of your first period.
              </li>
            </ul>
          </li>
          <li>
            <ul className="list-disc space-y-2">
              <li>
                Please note that partial refunds are not available, but you can
                easily manage or cancel your subscription anytime.
              </li>
            </ul>
          </li>
          <li>
            <ul className="list-disc space-y-2">
              <li>
                By completing your purchase, you agree to our{" "}
                <a
                  href="https://www.joinreframeapp.com/terms-of-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 text-[14px]"
                >
                  Terms of service
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Paymet gateway: Stripe */}
    </div>
  );
};

export default PaywallScreen;