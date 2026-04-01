import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import TeamPage from "./pages/About/TeamPage";
import TestimonialsPage from "./pages/Testimonials/TestimonialsPage";

import ScrollToTop from "./components/ScrollToTop"; // 👈 ADD THIS

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* 👈 ADD THIS */}

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ourteam" element={<TeamPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<TestimonialsPage />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
