import LandingPageSection from "../../Components/LandingPageSection/LandingPageSection";
import Navbar from "../../Components/Navbar/Navbar";
import "./LandingPage.scss";
const LandingPage = () => {
  return (
    <div className="leading-normal tracking-normal text-white">
      <Navbar />
      <LandingPageSection />
    </div>
  );
};

export default LandingPage;

