import HeroSection from './Hero'
import AboutTrueSun from './AboutHm'
import WhatWeDo from './WhatWeDo'
// import SolarProjectShowcase from './SolarProjectShowcase'
import SolarFAQ from './SolarFAQ'
// import SolarForEveryone from './SolarForEveryone'
import ServicesSection from './ServicesSection'
import SimpleReviewSection from './SolarInstallationReviews'
import Scroll from './PartnersSection'
import SolarCalculatorSection from './SolarCalculatorSection'
import TruesunStats from './TruesunStats'
import RecentProjectsSection from './RecentProjectsSection'

const HomeMain = () => {
    return (
        <>
            <HeroSection />
            <SolarCalculatorSection />
            <TruesunStats />
            <AboutTrueSun />
            <Scroll />
            <RecentProjectsSection/>
            <ServicesSection />
            <WhatWeDo />
            {/* <SolarForEveryone /> */}
            {/* <SolarProjectShowcase /> */}
            <SimpleReviewSection />
            <SolarFAQ />
        </>
    )
}

export default HomeMain

