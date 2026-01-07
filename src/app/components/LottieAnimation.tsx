"use client";

import Lottie from "lottie-react";

const LottieAnimation = ({ animationData }: { animationData: any }) => {
  return <Lottie animationData={animationData} loop={true} className="w-[130%] md:w-[85%] h-auto max-h-[60vh] md:max-h-[90vh] object-contain mt-[-30%] md:mt-0 mb-[-10%] md:mb-0 relative z-30" />;
};

export default LottieAnimation;
