import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BusinessBenefits from "./components/BusinessBenefits/BusinessBenefits";
import EverythingNeeded from "./components/EverythingNeeded/EverythingNeeded";
import Process from "./components/Process/Process";
import DomainCTA from "./components/DomainCTA/DomainCTA";
import Pricing from "./components/Pricing/Pricing";
import FAQ from "./components/FAQ/FAQ";
import FinalCTA from "./components/FinalCTA/FinalCTA";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F7] font-sans">
      <Navbar />
      <Hero />
      <BusinessBenefits />
      <EverythingNeeded />
      <Process />
      <DomainCTA />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;