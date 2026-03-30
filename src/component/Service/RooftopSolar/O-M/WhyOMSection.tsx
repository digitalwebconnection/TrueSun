
export default function WhyOMSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="mb-10 text-center">
          <h4 className="text-sm tracking-widest text-[#FC763A] font-semibold mb-3">
            WHY O&M FROM TRUESUN
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Protecting Your Solar Investment
          </h2>
        </div>

        {/* Flow Layout */}
        <div className="relative border-l-2 border-[#1D3F84]/20 pl-8 space-y-16">
          
          {/* Item 1 */}
          <div className="relative">
            <div className="absolute -left-[42px] top-1 w-6 h-6 bg-[#FC763A] rounded-full"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              EPC Experts Who Know Your System
            </h3>
            <p className="text-gray-600 leading-relaxed">
              As a full-service Solar EPC company, we designed and built systems like yours. 
              Our O&M team uses the same engineering depth — nobody knows rooftop solar better.
            </p>
          </div>

          {/* Item 2 */}
          <div className="relative">
            <div className="absolute -left-[42px] top-1 w-6 h-6 bg-[#FC763A] rounded-full"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Maximise Energy Yield
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Even minor soiling or component degradation can cut output significantly. 
              Our proactive maintenance ensures your panels always generate at optimal capacity.
            </p>
          </div>

          {/* Item 3 */}
          <div className="relative">
            <div className="absolute -left-[42px] top-1 w-6 h-6 bg-[#FC763A] rounded-full"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Warranty & Compliance Protection
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Regular documented maintenance helps you stay compliant with warranty requirements 
              and avoid costly claim rejections due to negligence.
            </p>
          </div>

          {/* Item 4 */}
          <div className="relative">
            <div className="absolute -left-[42px] top-1 w-6 h-6 bg-[#FC763A] rounded-full"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Local Presence, Swift Response
            </h3>
            <p className="text-gray-600 leading-relaxed">
              With technicians positioned close to your site, we ensure fast dispatch and 
              minimal downtime whenever a fault is detected or reported.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}