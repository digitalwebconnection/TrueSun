
const ContactHero = () => {
    return (
        <section className="relative overflow-hidden text-white py-20">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <img
                    src="https://solarsmart.co.in/wp-content/uploads/2025/03/New-Project.png" // 🔁 Changed image path to reflect an industrial/engineering focus
                    alt="Creasun Energy industrial solar contact background"
                    className="h-full w-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-[#050814]/70" />
            </div>

            {/* Content */}
            <div className="relative max-w-5xl  px-6 ">
                {/* Badge - Specific to the Contact Page */}
                <div className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/15 text-xs tracking-wide uppercase mb-6">
                    Contact Creasun Energy
                </div>

                {/* Heading - Emphasizing the Engineering/Savings Hook */}
                <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
                    Let's Start Your <span className="text-sky-400">Solar Project</span> with an
                    <span className="block bg-linear-to-r from-sky-300 via-cyan-300 to-emerald-300 text-transparent bg-clip-text mt-1">
                        Engineering-First Approach
                    </span>
                </h1>

                {/* Subtext - Clear Scope and Value Proposition */}
                <p className="text-slate-200 mt-6 max-w-2xl  text-base sm:text-lg leading-relaxed">
                    Whether you need a **data-driven analysis for industrial savings** or a
                    reliable rooftop system, our engineering team provides clear guidance and
                    guarantees systems that perform.
                </p>

                {/* CTA Buttons - Clear Next Steps */}
                <div className="flex flex-wrap  gap-4 mt-10">
                    <a
                        className="bg-sky-500 text-white font-semibold px-7 py-3 rounded-full shadow-xl shadow-sky-500/30 hover:bg-sky-600 transition"
                    >
                        Get a Free Project Analysis
                    </a>

                    <a
                        href="tel:+919999999999" // 🔁 replace with Creasun's real number
                        className="border border-white/25 bg-white/5 px-7 py-3 rounded-full text-white hover:border-emerald-300 hover:text-emerald-300 transition"
                    >
                        Call Our Experts Now
                    </a>
                </div>


            </div>

            {/* SVG Bottom Wave - Seamless transition to the next section */}
            <div className="absolute bottom-0 left-0 w-full leading-none pointer-events-none">
                <svg
                    viewBox="0 0 1440 120"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-20 sm:h-[100px] "
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,64 C180,110 360,120 540,96 C720,72 900,16 1080,16 C1260,16 1350,40 1440,64 L1440,120 L0,120 Z"
                        fill="#ffffff"
                    />
                </svg>
            </div>
        </section>
    );
};

export default ContactHero;