import './App.css'
import SolarFooter from './component/Footer'
import HomeMain from './component/home/HomeMain'
import Navbar from './component/Navbar'
// import WhatsAppChatbot from './component/WhatsAppChatbot'

function App() {

  return (
    <>
      <Navbar />
      <HomeMain/>
      <SolarFooter/>
      {/* <WhatsAppChatbot  /> */}
    </>
  )
}

export default App
