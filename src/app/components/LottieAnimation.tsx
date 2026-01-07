"use client";

import Lottie from "lottie-react";

const LottieAnimation = ({ animationData, className }: { animationData: any, className?: string }) => {
  return <Lottie animationData={animationData} loop={true} className={className} />;
};

export default LottieAnimation;
