import HeroSection from './Hero'
import AboutTrueSun from './AboutHm'
import WhatWeDo from './WhatWeDo'
import SolarProjectShowcase from './SolarProjectShowcase'
import SolarFAQ from './SolarFAQ'
import SolarForEveryone from './SolarForEveryone'
import ServicesSection from './ServicesSection'
import SimpleReviewSection from './SolarInstallationReviews'
import Scroll from './PartnersSection'

const HomeMain = () => {
    return (
        <>
            <HeroSection />
            <AboutTrueSun />
            <Scroll />
            <ServicesSection />
            <WhatWeDo />
            <SolarForEveryone />
            <SolarProjectShowcase />
            <SimpleReviewSection />
            <SolarFAQ />
        </>
    )
}

export default HomeMain

