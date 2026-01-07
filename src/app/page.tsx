import Image from "next/image";
import LottieAnimation from "./components/LottieAnimation";
import weddingAnimation from "../assets/Wedding.json";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row w-full min-h-screen md:h-full relative overflow-y-auto md:overflow-hidden">
      {/* Background Video */}
      {/* Background Video - Desktop */}
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
      >
        <source src="/Animation_Motion_Graphic.mp4" type="video/mp4" />
      </video>
      {/* Content Side (Left on Desktop, Top on Mobile - Arch) */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 md:p-16 z-[10] relative text-center md:rounded-tr-[50vw] md:rounded-br-none max-md:rounded-bl-[30vw] max-md:rounded-br-[30vw] order-1 md:order-none">
        <h2 className="font-body text-xl tracking-[0.2rem] uppercase text-[#90A4AE] mb-4 -mr-[0.2rem]">Save the Date</h2>
        
        <h1 className="font-heading text-[3.5rem] md:text-[5rem] text-[#78909C] leading-[1.1] mb-6">
          <span>Nahas</span>
          <span className="text-[3rem] my-2 text-[#B0BEC5] block">&</span>
          <span>Nihala</span>
        </h1>

        <p className="max-w-[400px] mx-auto mb-10 text-base leading-relaxed text-[#546E7A]">
          We joyfully invite you to join us as we celebrate the beginning of our new journey together.
          Your presence will mean so much to us on this special day.
        </p>

        <div className="mb-8">
          <div className="text-2xl font-semibold text-[#37474F] uppercase tracking-widest mb-2">Sunday | 26 January 2025</div>
          <div className="text-[1.2rem] text-[#546E7A] mb-2">Reception 4 to 7 pm</div>
          <div className="text-lg text-[#78909C]">HM Hall kidangazhi</div>
        </div>

        {/* Floral Decoration - Bottom Left (of Arch) */}

      </div>

      {/* Visual Side (Right on Desktop, Bottom on Mobile) */}
      <div className="flex-1 relative flex justify-center items-end overflow-hidden z-[50] max-md:flex-[0.8] max-md:w-full max-md:order-2 max-md:min-h-[40vh] order-2 md:order-none pb-8 md:pb-0">
         <LottieAnimation animationData={weddingAnimation} />
         {/* Floral Decoration - Top Right */}
      </div>
    </main>
  );
}
