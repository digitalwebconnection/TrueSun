import "./App.css";
import { Routes, Route } from "react-router-dom";
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
import BlogDetails from "./component/blog/BlogDetails";
import PrivacyPolicy from "./component/PrivacyPolicy";
import OM from "./component/Service/RooftopSolar/O-M/OM";
import BESS from "./component/Service/RooftopSolar/BESS/BESS";
import Subsidy from "./component/Service/RooftopSolar/Subsidy/Subsidy";
import SFC from "./component/Service/RooftopSolar/SFS/SFS";

function AppInner() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>

        <Route path="/" element={<HomeMain />} /> {/* Home Page Path Is / */}
        <Route path="/about" element={<MainAbout />} />{/* About Us Page  */}
        <Route path="/services" element={<ServiceMain />} /> {/* Service Main page  */}
        <Route path="/services/rooftop/C&I" element={<MainCI />} />{/* In Service Page Rooftop Section C&I Page */}
        <Route path="/services/rooftop/residential" element={<Residentialmain />} /> {/* In Service Page Rooftop Section Residential Page */}
        <Route path="/services/rooftop/O&M" element={<OM />} /> 
        <Route path="/services/rooftop/BESS" element={<BESS />} />
        <Route path="/services/rooftop/Subsidy" element={<Subsidy />} />
        <Route path="/services/rooftop/Solar-Finance-Solutions" element={<SFC/>} />
        <Route path="/services/consulting" element={<ConsultingMain />} />
        <Route path="/services/consulting/Carbon-Footprinting" element={<CarbonFootprintingmain />} />
        <Route path="/Solar-finance" element={<SolarfinanceMain />} />
        <Route path="/projects" element={<Projectsmain />} />
        <Route path="/careers" element={<Careersmain />} />
        <Route path="/Knowledgwe" element={<BlogMain />} />
        <Route path="/Knowledgwe/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<ContactUsMain />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />

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
