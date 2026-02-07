import "./Services.css";
import ServicesDetails from "./ServicesDetails";
import OurServises_1 from '../../assets/images/OurServises/OurServises_1.png';

const Services = () => {
  return (
    <section className="services-page">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>
          Delivering comprehensive financial consultancy solutions for loans, government subsidies, 
          and insurance to empower your business growth and success.
        </p>
      </div>
      
      {/* Uncomment below to add full-width image section */}
      {/* 
      <div className="services-image-section">
        <img 
          src={OurServises_1} 
          alt="Professional Financial Services"
          className="services-full-image"
        />
      </div> 
      */}
      
      <ServicesDetails />
    </section>
  );
};

export default Services;