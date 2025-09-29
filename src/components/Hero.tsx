import { useEffect, useState } from "react";
import { BlurhashCanvas } from "react-blurhash";
import { getAssetPath } from "@/lib/utils";

const Hero = () => {
  const [isPortrait, setIsPortrait] = useState<boolean>(false);

  useEffect(() => {
    const update = () => {
      setIsPortrait(window.innerWidth < 540);
    };
    
    update();
    
    window.addEventListener("resize", update);
    
    return () => window.removeEventListener("resize", update);
  }, []);

  const imageSrc = isPortrait ? getAssetPath("dikey.jpg") : getAssetPath("yatay.jpg");
  const blurHash = isPortrait ? "LcHx$%ofD%j[h2oeWBaz4.WC%Mjt" : "LYGIv3t7E1WXcuofRjjt9GWCtRjs";

  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  return (
    <section id="home" className="pt-28 bg-white">
      <div className="w-full relative">
        {!imageLoaded && (
          <div className="w-full h-full absolute inset-0">
            <BlurhashCanvas
              hash={blurHash}
              width={typeof window !== 'undefined' ? window.innerWidth : 800}
              height={isPortrait ? 680 : 600}
              punch={1}
            />
          </div>
        )}
        <img
          src={imageSrc}
          alt="Hero"
          className={`w-full ${isPortrait ? 'object-cover' : 'object-contain'} ${imageLoaded ? '' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          style={{ 
            height: isPortrait ? '680px' : '60vh',
            maxHeight: isPortrait ? '680px' : '800px',
            minHeight: isPortrait ? '680px' : '400px'
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
