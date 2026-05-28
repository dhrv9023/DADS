import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import FeaturedVideoSection from './components/FeaturedVideoSection';
import PhilosophySection from './components/PhilosophySection';
import ServicesSection from './components/ServicesSection';
import TryNowSection from './components/TryNowSection';

function App() {
  return (
    <div className="bg-black">
      <Hero />
      <AboutSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <ServicesSection />
      <TryNowSection />
    </div>
  );
}

export default App;
