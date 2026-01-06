"use client";

import Lottie from "lottie-react";

const LottieAnimation = ({ animationData }: { animationData: any }) => {
  return <Lottie animationData={animationData} loop={true} className="w-[85%] h-auto max-h-[90vh] object-contain" />;
};

export default LottieAnimation;
