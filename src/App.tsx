import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import SolarFooter from "./component/Footer";
import HomeMain from "./component/home/HomeMain";
import MainAbout from "./component/abouus/MainAbout";
// import RooftopMain from "./component/Service/RooftopSolar/RooftopMain";
import ConsultingMain from "./component/Service/Consulting/ConsultingMain";
import WhatsAppDockPro from "./component/WhatsAppChatbot";
// import CommercialMain from "./component/Service/RooftopSolar/Commercial/CommercialMain";
import Residentialmain from "./component/Service/RooftopSolar/Residential/Residentialmain";
import CarbonFootprintingmain from "./component/Service/Consulting/Carbon-Footprinting/CarbonFootprintingmain";
import Projectsmain from "./component/Projects/Projectsmain";
import MainCI from "./component/Service/RooftopSolar/C&I/MainC&I";
import SolarfinanceMain from "./component/Solar-finance/Solar-financeMain";
import Careersmain from "./component/Careers/Careersmain";
import ContactUsMain from "./component/ContactUs/ContactUsMain";
import LeadPopup from "./component/LeadPopup";





function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Routes>
        {/* Home & Main */}
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<MainAbout />} />

        {/* Top-level Services */}
        {/* <Route path="/services" element={<Services />} /> */}

        {/* Rooftop Solar Children */}
        {/* <Route path="/services/rooftop" element={<RooftopMain />} /> */}
        <Route path="/services/rooftop/C&I" element={<MainCI/>} />
        <Route path="/services/rooftop/residential" element={<Residentialmain/>} />

        {/* Consulting Children */}
        <Route path="/services/consulting" element={<ConsultingMain />} />
        <Route path="/services/consulting/Carbon-Footprinting" element={<CarbonFootprintingmain/>} />
   

        {/* Other Main Pages */}
        <Route path="/Solar-finance" element={<SolarfinanceMain/>}/>
        <Route path="/projects" element={<Projectsmain />} />
        <Route path="/careers" element={<Careersmain/>} />
        <Route path="/contact" element={<ContactUsMain />} />
      </Routes>
      <SolarFooter />
      <WhatsAppDockPro/>
      <LeadPopup/>
    </BrowserRouter>

  );
}

export default App;
