
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Events />
      <Footer />
    </div>
  );
};

export default Index;
