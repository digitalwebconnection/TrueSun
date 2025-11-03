import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Stagger text/CTA elements
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08, // Subtle stagger for KPI cards
            delayChildren: 0.8,    // Start showing stats after main content appears
        },
    },
};

type Crumb = { label: string; href?: string };
type KPI = { value: string; label: string };
type CTA = { label: string; href?: string };

interface AboutHeroProps {
    breadcrumbs?: Crumb[];
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    primaryCta?: CTA;
    secondaryCta?: CTA;
    stats?: KPI[];
    backgroundUrl?: string;
}

function AboutHeroV2({
    eyebrow = "ABOUT US: THE FUTURE OF SOLAR",
    title = "Driving Global Change with Sustainable Energy.",
    subtitle = "Our mission is to empower communities worldwide by providing accessible, reliable, and innovative renewable energy technology.",
    primaryCta = { label: "Explore Our Technology", href: "#tech" },
    secondaryCta = { label: "View Sustainability Report", href: "#report" },
    stats = [
        { value: "15+", label: "Years in Industry" },
        { value: "5GW", label: "Capacity Installed" },
        { value: "100%", label: "Certified Green Energy" },
        { value: "18", label: "Global Offices" },
        { value: "99.9%", label: "Uptime Reliability" },
        { value: "ISO", label: "Certified Quality" },
    ],
    backgroundUrl = "https://waaree.com/wp-content/uploads/2025/07/Solar-panels-online-scaled.jpg",
}: AboutHeroProps) {

    return (
        <section className="relative overflow-hidden flex items-center bg-gray-900">
            {/* Background Image and Gradient Overlay */}
            <div className="absolute inset-0">
                <img
                    src={backgroundUrl}
                    alt="Sustainable energy background"
                    className="h-full w-full object-cover opacity-30 sm:opacity-50"
                    onError={(e) => {
                        e.currentTarget.src = 'https://placehold.co/1920x1080/000/fff?text=Placeholder+Image';
                        e.currentTarget.onerror = null;
                    }}
                />
                <div className="absolute inset-0 bg-linear-to-br from-black/80 via-black/80 to-blue-950/60" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-28 sm:px-6 lg:px-8 z-10">
                {/* Content Section */}
                <motion.div
                    className="text-white max-w-5xl"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* Eyebrow */}
                    <motion.p
                        className="text-base font-semibold tracking-wider uppercase text-blue-400"
                        variants={itemVariants}
                    >
                        {eyebrow}
                    </motion.p>

                    {/* Title */}
                    <motion.h1
                        className="mt-2 text-5xl font-extrabold tracking-tight sm:text-7xl leading-tight"
                        variants={itemVariants}
                    >
                        {title}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="mt-6 max-w-3xl text-xl text-gray-200"
                        variants={itemVariants}
                    >
                        {subtitle}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        className="mt-10 flex flex-col sm:flex-row gap-4"
                        variants={itemVariants}
                    >
                        <a
                            href={primaryCta.href}
                            className="rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-[1.02]"
                        >
                            {primaryCta.label}
                        </a>
                        <a
                            href={secondaryCta.href}
                            className="rounded-full border border-white/40 px-8 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10"
                        >
                            {secondaryCta.label}
                        </a>
                    </motion.div>
                </motion.div>

                {/* Stats Section - Animated & Dimensional */}
                <motion.div
                    className="mt-16 relative p-6 bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10"
                    initial="hidden"
                    animate="visible"
                    variants={statsContainerVariants}
                >
                    <div className="grid grid-cols-2 gap-y-8 gap-x-6 lg:grid-cols-6">
                        {stats.map((kpi, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="text-center"
                            >
                                <div className="text-4xl font-extrabold text-blue-300 leading-none">
                                    {kpi.value}
                                </div>
                                <div className="mt-1 text-sm font-medium uppercase tracking-wider text-gray-400">
                                    {kpi.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

// Main App component to render the Hero
export default function App() {
    // Note: The 'motion' package must be available in the environment 
    // for this component to run correctly.
    return (
        <div className=" bg-gray-900 font-sans">
            <AboutHeroV2 />

        </div>
    );
}
