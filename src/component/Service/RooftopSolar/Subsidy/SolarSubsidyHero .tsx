const SolarSubsidyHero = () => {
    return (
        <section className="relative w-full h-[620px] flex items-center text-white">

            {/* Background Image */}
            <img
                src="https://ornatesolar.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-24-at-11.46.55.webp"
                alt="Rooftop Solar India"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative max-w-5xl   px-4 md:px-15 ">

                {/* Top Tag */}
                <div className="inline-block bg-[#FC763A] px-4 py-1 rounded-full text-sm font-medium mb-4">
                    Govt Scheme 2026
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                    Rooftop Solar Subsidy in India (2026)
                </h1>

                {/* Sub Heading */}
                <p className="mt-4 text-lg md:text-xl text-gray-200">
                    Save on electricity bills & switch to clean energy with government support
                </p>

                {/* Description */}
                <p className="mt-6 text-sm md:text-base text-gray-300  ">
                    The Government of India is accelerating solar adoption through the PM Surya Ghar: Muft Bijli Yojana,
                    focused primarily on individual households, while RWAs and Group Housing Societies benefit under separate provisions.
                    These initiatives aim to reduce electricity costs, promote clean energy, and enable energy independence across India.
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 ">

                    <button className="px-8 py-3 bg-[#FC763A] rounded-full font-semibold hover:scale-105 transition">
                        Apply for Subsidy
                    </button>

                    <button className="px-8 py-3 border border-white rounded-full font-semibold hover:bg-white hover:text-black transition">
                        Learn More
                    </button>

                </div>

            </div>
        </section>
    );
};

export default SolarSubsidyHero;