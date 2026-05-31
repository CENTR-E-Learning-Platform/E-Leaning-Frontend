import Hero from "../Components/Hero";
import StatsBar from "../Components/StatsBar";
import FeaturesSection from "../Components/FeaturesSection";
import HowItWorks from "../Components/HowItWorks";
import SubjectsSection from "../Components/SubjectsSection";
import TestimonialsSection from "../Components/TestimonialsSection";
import CTASection from "../Components/CTASection";
import Footer from "../Components/Footer";

const LandingPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <StatsBar />
      <FeaturesSection />
      <HowItWorks />
      <SubjectsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;
