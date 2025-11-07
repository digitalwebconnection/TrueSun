import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import SolarFooter from "./component/Footer";
import HomeMain from "./component/home/HomeMain";
import MainAbout from "./component/abouus/MainAbout";
import RooftopMain from "./component/Service/RooftopSolar/RooftopMain";
import ConsultingMain from "./component/Service/Consulting/ConsultingMain";

// Placeholder pages for main and nested service sections
function Services() {
  return <div className="pt-24 p-6 text-center text-gray-800">Services Page</div>;
}


function Commercial() {
  return <div className="pt-24 p-6 text-center text-gray-800">Commercial Solar Systems</div>;
}
function Industrial() {
  return <div className="pt-24 p-6 text-center text-gray-800">Industrial Solar Solutions</div>;
}
function Residential() {
  return <div className="pt-24 p-6 text-center text-gray-800">Residential Solar Systems</div>;
}


function Feasibility() {
  return <div className="pt-24 p-6 text-center text-gray-800">Feasibility & DPR Consulting</div>;
}
function ProjectFinance() {
  return <div className="pt-24 p-6 text-center text-gray-800">Project Finance Advisory</div>;
}
function OMAdvisory() {
  return <div className="pt-24 p-6 text-center text-gray-800">O&M Advisory Services</div>;
}

// Other main pages
function Projects() {
  return <div className="pt-24 p-6 text-center text-gray-800">Projects Page</div>;
}
function Careers() {
  return <div className="pt-24 p-6 text-center text-gray-800">Careers Page</div>;
}
function Contact() {
  return <div className="pt-24 p-6 text-center text-gray-800">Contact Page</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Home & Main */}
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<MainAbout />} />

        {/* Top-level Services */}
        <Route path="/services" element={<Services />} />

        {/* Rooftop Solar Children */}
        <Route path="/services/rooftop" element={<RooftopMain/>} />
        <Route path="/services/rooftop/commercial" element={<Commercial />} />
        <Route path="/services/rooftop/industrial" element={<Industrial />} />
        <Route path="/services/rooftop/residential" element={<Residential />} />

        {/* Consulting Children */}
        <Route path="/services/consulting" element={<ConsultingMain/>} />
        <Route path="/services/consulting/feasibility" element={<Feasibility />} />
        <Route path="/services/consulting/finance" element={<ProjectFinance />} />
        <Route path="/services/consulting/om" element={<OMAdvisory />} />

        {/* Other Main Pages */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <SolarFooter />
    </BrowserRouter>
  );
}

export default App;
