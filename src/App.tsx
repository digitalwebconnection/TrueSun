import "./App.css";
import {  Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import SolarFooter from "./component/Footer";
import HomeMain from "./component/home/HomeMain";
import MainAbout from "./component/abouus/MainAbout";
import ConsultingMain from "./component/Service/Consulting/ConsultingMain";
import WhatsAppDockPro from "./component/WhatsAppChatbot";
import Residentialmain from "./component/Service/RooftopSolar/Residential/Residentialmain";
import CarbonFootprintingmain from "./component/Service/Consulting/Carbon-Footprinting/CarbonFootprintingmain";
import Projectsmain from "./component/Projects/Projectsmain";
import MainCI from "./component/Service/RooftopSolar/C&I/MainC&I";
import SolarfinanceMain from "./component/Solar-finance/Solar-financeMain";
import Careersmain from "./component/Careers/Careersmain";
import ContactUsMain from "./component/ContactUs/ContactUsMain";
import ServiceMain from "./component/Service/ServiceMain";
import ScrollToTop from "./component/ScrollToTop";
import BlogMain from "./component/blog/BlogMain";

function AppInner() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<MainAbout />} />
        <Route path="/services" element={<ServiceMain />} />
        <Route path="/services/rooftop/C&I" element={<MainCI />} />
        <Route path="/services/rooftop/residential" element={<Residentialmain />} />
        <Route path="/services/consulting" element={<ConsultingMain />} />
        <Route path="/services/consulting/Carbon-Footprinting" element={<CarbonFootprintingmain />} />
        <Route path="/Solar-finance" element={<SolarfinanceMain />} />
        <Route path="/projects" element={<Projectsmain />} />
        <Route path="/careers" element={<Careersmain />} />
        <Route path="/blog" element={<BlogMain />} />
        <Route path="/contact" element={<ContactUsMain />} />
      </Routes>
      <SolarFooter />
      <WhatsAppDockPro />
    </>
  );
}

// For client hydration we wrap in BrowserRouter in main.jsx (above).
// For server render, we use StaticRouter in entry-server.jsx.
// Export default as component so both server and client can import.
export default function App() {
  return <AppInner />;
}
