
import { motion, type Variants } from "framer-motion";

const steps = [
  "Customer Shares Bill & Location",
  "TrueSun Does a Site Visit",
  "TrueSun Gives a Proposal",
  "Closure",
  "TrueSun Gets Approvals",
  "TrueSun Installs Plant",
  "TrueSun Maintains Plant",
  "Happy Customer",
];

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // Delay between each step
  },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "linear" } },
};

export default function CustomerJourney() {
  return (
    <section className="bg-white py-10 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h4 className="text-sm text-[#FC763A] font-semibold tracking-wide mb-2 uppercase">
            Customer Journey
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            From Inquiry to Energy Independence
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto">
            A seamless step-by-step process designed to make your solar transition smooth, efficient, and hassle-free.
          </p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-[#FC763A] mx-auto mt-4"
          />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Animated Background Line (Desktop) */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden md:block absolute top-5 left-0 w-full h-0.5 bg-gray-100 origin-left"
          />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-8 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                variants={stepVariants}
                className="relative text-center group"
              >
                {/* Step Circle */}
                <motion.div 
                  whileHover={{ scale: 1.2, backgroundColor: "#FC763A" }} // Turns yellow on hover
                  className="w-10 h-10 mx-auto flex items-center justify-center rounded-full bg-[#1D3F84] text-white font-bold z-10 relative transition-colors duration-300 shadow-lg cursor-default"
                >
                  {index + 1}
                </motion.div>

                {/* Step Text */}
                <motion.p 
                  className="mt-4 text-xs md:text-sm font-medium text-gray-700 leading-snug px-2 group-hover:text-[#1D3F84] transition-colors"
                >
                  {step}
                </motion.p>
                
                {/* Mobile Connector (visible only on small screens) */}
                <div className="md:hidden w-0.5 h-8 bg-gray-100 mx-auto my-2 last:hidden"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}