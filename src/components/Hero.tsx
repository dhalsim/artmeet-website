import { useState, useRef } from "react";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <section id="home" className="pt-28 bg-white">
      <div className="w-full relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
            <svg
              className="animate-spin h-12 w-12 text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        )}
        <video
          ref={videoRef}
          src="/DJI_20251003150742_0538_D_small.mov"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full object-contain"
          onLoadedData={handleVideoLoad}
          onCanPlay={handleVideoLoad}
        />
      </div>
    </section>
  );
};

export default Hero;