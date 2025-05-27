
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Artists from "@/components/Artists";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Events />
      <Artists />
      <Contact />
    </div>
  );
};

export default Index;
