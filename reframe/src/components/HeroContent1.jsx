import React from 'react';
import HeroImage from '../../src/assets/image.png';
import Appoftheday from '../../src/assets/App of the Day APP Store.png';

export default function HeroContent1() {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-10">
        <img className="w-1/2" src={HeroImage} alt="hero-image" />
      </div>
      <p className="font-inter text-md mb-4">
        <strong className="text-xl">
          See how fast you can take control of your drinking with Reframe
        </strong>
        <br />
        Personalized plan tailored to your age
      </p>
      <div className="flex justify-center">
        <img src={Appoftheday} className="w-1/2" alt="apple app of the day" />
      </div>
    </div>
  );
}
