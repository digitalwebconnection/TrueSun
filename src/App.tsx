import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import SolarFooter from "./component/Footer";
import HomeMain from "./component/home/HomeMain";
import MainAbout from "./component/abouus/MainAbout";
// import WhatsAppChatbot from './component/WhatsAppChatbot'

// Example placeholder pages

function Services() {
  return <div className="pt-24 p-6 text-center text-gray-800">Services Page</div>;
}
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
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<MainAbout/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <SolarFooter />
      {/* <WhatsAppChatbot /> */}
    </BrowserRouter>
  );
}

export default App;
