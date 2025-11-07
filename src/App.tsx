import "./App.css";
import { Navigate } from "react-router-dom"
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import SolarFooter from "./component/Footer";
import HomeMain from "./component/home/HomeMain";
import MainAbout from "./component/abouus/MainAbout";
import RooftopMain from "./component/Service/RooftopSolar/RooftopMain";
import ConsultingMain from "./component/Service/Consulting/ConsultingMain";
import WhatsAppDockPro from "./component/WhatsAppChatbot";
import CommercialMain from "./component/Service/RooftopSolar/Commercial/CommercialMain";

// Placeholder pages for main and nested service sections
function Services() {
  return <div className="pt-24 p-6 text-center text-gray-800">Services Page</div>;
}

function Industrial() {
  return <div className="pt-24 p-6 text-center text-gray-800">Industrial Solar Solutions</div>;
}
function Residential() {
  return <div className="pt-24 p-6 text-center text-gray-800">Residential Solar Systems</div>;
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
     <HashRouter>

      <Navbar />
      <Routes>
        {/* Home & Main */}
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<MainAbout />} />

        {/* Top-level Services */}
        <Route path="/services" element={<Services />} />

        {/* Rooftop Solar Children */}
        <Route path="/services/rooftop" element={<RooftopMain />} />
        <Route path="/services/rooftop/commercial" element={<CommercialMain />} />
        <Route path="/services/rooftop/industrial" element={<Industrial />} />
        <Route path="/services/rooftop/residential" element={<Residential />} />

        {/* Consulting Children */}
        <Route path="/services/consulting" element={<ConsultingMain />} />
        {/* <Route path="/services/consulting/feasibility" element={<Feasibility />} />
        <Route path="/services/consulting/finance" element={<ProjectFinance />} />
        <Route path="/services/consulting/om" element={<OMAdvisory />} /> */}

        {/* Other Main Pages */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <SolarFooter />
      <WhatsAppDockPro
        // enable/disable the whole feature
        autoOpenEnabled={true}
        // open only once per browser session
        autoOpenOncePerSession={true}
        // open after 3s (set undefined/0 to disable just this trigger)
        autoOpenDelayMs={3000}
        // also open on exit-intent (desktop)
        autoOpenOnExitIntent={true}
        // or open after user scrolls halfway down the page
        autoOpenOnScrollPercent={50}
        // or open after 12s idle
        autoOpenOnIdleMs={12000}
      />
    </HashRouter>

  );
}

export default App;
