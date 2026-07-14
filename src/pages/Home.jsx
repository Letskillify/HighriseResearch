import React from 'react';
import HeroSection from '../Components/home/HeroSection';
import About from '../Components/home/About';
import StatsSection from '../Components/home/StatsSection';
import ServicesSection from '../Components/home/ServicesSection';
;
import TrustSection from '../Components/home/TrustSection';
import { TestTube } from 'lucide-react';
import Testimonials from '../Components/home/Testemonials';
import PaymentSection from '../Components/home/Payment';
import Contact from '../Components/home/Contact';

const Home = () => {
  return (
    <main className="bg-[#f7f7f5] text-[#111827]">
      <HeroSection />
      <About />
      <ServicesSection />
      <TrustSection /> 
      {/* <Testimonials/> */}
      <PaymentSection/>
      <Contact/>
       {/*
      <WhyChooseUs />
      <ProjectsPreview />
      */}
    </main>
  );
};

export default Home;

