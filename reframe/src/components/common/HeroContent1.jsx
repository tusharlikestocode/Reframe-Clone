export default function HeroContent1() {
  return (
    <div className="h-screen  flex flex-col items-center justify-center px-4 py-8 text-center">
      {/* Bottle Image */}
      <img
        src="/image.png"
        alt="hero-image"
        className="w-64 sm:w-72 md:w-80 lg:w-72 mb-6  pt-14"
      />

      {/* Headline */}
   
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 lg:w-1/2 ">
        See how fast you can take control of your drinking with Reframe
      </h2>

      {/* Subheadline */}
      <p className="text-sm sm:text-base  text-gray-700">
        Personalized plan tailored to your age
      </p>
      
      

      {/* App Store Badge */}
      <img
        src="/App of the Day APP Store.png"
        alt="Apple App of the Day"
        className="w-40 sm:w-48 md:w-56 mb-8"
      />

      
    </div>
  );
}
