import './Home.css';
import WelcomeSection from "../components/WelcomeSection.jsx";
import AbouteSection from "../components/AbouteSection.jsx";
import PortfolioSection from "../components/PortfolioSection.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import TeamSection from "../components/TeamSection.jsx";
import CostumerSection from "../components/CostumerSection.jsx";
import GallerySection from "../components/GallerySection.jsx";
import ContactSection from "../components/ContactSection.jsx";

const Home = () => {
  return (
  <div>
    <WelcomeSection />
    <AbouteSection />
    <PortfolioSection />
    <ServicesSection />
    <TeamSection />
    <CostumerSection />
    <section>
      <GallerySection /> 
    </section>
    <ContactSection />
    {/* Services Section */}

  </div>
)};

export default Home;

