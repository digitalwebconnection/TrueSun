
export default function ProcessAndPlans() {
  return (
    <section className="bg-[#F8FAFC] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h4 className="text-[#FC763A] font-semibold tracking-widest mb-3">
            HOW IT WORKS
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Our Service Process
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Simple, transparent, and designed to maximise your solar performance.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          
          {[
            {
              step: "STEP / 01",
              title: "Site Assessment",
              desc: "We conduct a thorough evaluation of your existing rooftop solar system to understand its capacity, condition, and specific requirements.",
            },
            {
              step: "STEP / 02",
              title: "Plan Selection",
              desc: "Based on your needs and budget, we recommend the most suitable O&M plan — Preventive or Comprehensive — with a customised service schedule.",
            },
            {
              step: "STEP / 03",
              title: "Scheduled Servicing",
              desc: "Our certified technicians perform planned maintenance visits as per the agreed schedule, covering all tasks defined in your selected plan.",
            },
            {
              step: "STEP / 04",
              title: "Reporting & Review",
              desc: "After every service visit, you receive a detailed report. We continuously track system performance and provide insights to maximise your ROI.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <p className="text-sm text-[#FC763A] font-semibold mb-2">
                {item.step}
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Plan Comparison */}
        <div className="bg-white  overflow-hidden">
          
          <div className="p-8 border-b">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
              Plan Comparison
            </h3>
          </div>

          <div className="grid md:grid-cols-3 text-center">
            
            {/* Feature Column */}
            <div className="bg-gray-50 p-6 font-semibold text-gray-700">
              <p className="mb-6 text-xl font-bold text-gray-900  ">Features</p>
              <p className="mb-4">Routine Maintenance</p>
              <p className="mb-4">System Monitoring</p>
              <p className="mb-4">Fault Detection</p>
              <p className="mb-4">Repairs Included</p>
              <p className="mb-4">Performance Reports</p>
            </div>

            {/* Preventive Plan */}
            <div className="p-6 border-l">
              <h4 className="text-xl font-bold mb-6 text-gray-900">
                Preventive Plan
              </h4>
              <p className="mb-4">✔️</p>
              <p className="mb-4">✔️</p>
              <p className="mb-4">✔️</p>
              <p className="mb-4 text-red-500">✖️</p>
              <p className="mb-4">✔️</p>

              <button className="mt-6 border px-4 py-2 rounded-lg hover:bg-[#FC763A] hover:text-white transition">
                Choose Plan
              </button>
            </div>

            {/* Comprehensive Plan */}
            <div className="p-6 border-l bg-[#1D3F84] text-white">
              <h4 className="text-xl font-bold mb-6">
                Comprehensive Plan
              </h4>
              <p className="mb-4">✔️</p>
              <p className="mb-4">✔️</p>
              <p className="mb-4">✔️</p>
              <p className="mb-4">✔️</p>
              <p className="mb-4">✔️</p>

              <button className="mt-6 bg-[#FC763A] text-white px-4 py-2 rounded-lg  transition">
                Get Started
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}