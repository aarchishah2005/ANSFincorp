import Hero from "./Hero";
import WhyUs from "./WhyUs";
import ServicesOverview from "./ServicesOverview";
import Testimonials from "./Testimonials";
import LogoScroller from "./LogoScroller";
import GrowthPartenerLogoScroller from "./GrowthPartenerLogoScroller";


const Home = () => {
  return (
    <>
      <Hero />
      <WhyUs />
      <ServicesOverview />
      <LogoScroller/>
      <Testimonials />
      <GrowthPartenerLogoScroller/>
    </>
  );
};

export default Home;
