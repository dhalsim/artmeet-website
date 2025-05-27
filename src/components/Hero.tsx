import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "hero" });
  
  return (
    <section id="home" className="min-h-screen pt-24 flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-orange-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-400/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          {t('ArtMeet 2025')}
          <span className="block text-orange-400 text-4xl md:text-6xl mt-2">
            {t('Art Festival 2025')}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in delay-300">
          {t('Where contemporary art meets social consciousness. Join us for three days of powerful exhibitions, thought-provoking talks, and transformative experiences.')}
        </p>
        
        <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center animate-fade-in delay-500">
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            {t('Explore Events')}
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-purple-900 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            {t('Get Tickets')}
          </Button>
        </div>
        
        <div className="mt-12 text-sm opacity-75 animate-fade-in delay-700">
          {t('September 15-17, 2024 • Downtown Cultural District')}
        </div>
      </div>
    </section>
  );
};

export default Hero;
