import React from "react";
// Assuming you have Lucide icons installed (npm install lucide-react)
import { Zap, Sun, Award, Handshake, MapPin, Briefcase, Clock, HardHat, FileText, Phone, CheckCircle, Mail,  Users } from "lucide-react";

// --- Design Constants ---
const brandBlue = "#031E6C";
const brandYellow = "#F5B835";
const brandLight = "#F9FAFC"; // Very light off-white/grey

// --- Data (Unchanged) ---
const perks = [
  {
    icon: <Sun className="h-5 w-5" />,
    title: "Work on real solar impact",
    body: "Design and deliver rooftop and utility projects that reduce carbon footprints for homes, industries, and institutions.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Growth in a fast-moving industry",
    body: "Solar is growing rapidly in India. At TrueSun, you work on modern tech, tools, and processes that keep you ahead.",
  },
  {
    icon: <Award className="h-5 w-5" />,
    title: "Ownership & responsibility",
    body: "We believe in giving people clear goals, real responsibility, and the support to make decisions with confidence.",
  },
];

const values = [
  {
    icon: <Handshake className="h-5 w-5" />,
    title: "Customer-first",
    body: "We listen, educate, and always recommend what is right for the client—not just what is easy to sell.",
  },
  {
    icon: <HardHat className="h-5 w-5" />,
    title: "Safety & quality",
    body: "From design to installation, safety, standards, and quality of work always come before shortcuts.",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Transparency",
    body: "Open communication, clear documentation, and honest timelines—internally and with customers & vendors.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Team before ego",
    body: "We celebrate wins together and fix issues together. No blame culture—only solutions.",
  },
];

const openings = [
  {
    title: "Solar Design Engineer",
    location: "Ahmedabad, Gujarat",
    type: "Full-time · On-site",
    experience: "2–4 years",
    summary:
      "Handle rooftop and small utility-scale solar plant designs using tools like PVsyst, AutoCAD, and Helioscope.",
    points: [
      "Prepare technical feasibility reports & layouts",
      "Coordinate with sales & site teams for accurate designs",
      "Optimize generation, structure, and cost for each project",
    ],
  },
  {
    title: "Solar Sales Executive (Rooftop)",
    location: "Ahmedabad / Nearby Cities",
    type: "Full-time · Field + Office",
    experience: "1–3 years",
    summary:
      "Generate and close residential and small commercial solar leads, conduct site visits, and maintain strong client relationships.",
    points: [
      "Meet homeowners, business owners, and societies for solar proposals",
      "Explain subsidies, ROI, and technical basics in simple language",
      "Coordinate with design & execution teams for smooth handovers",
    ],
  },
  {
    title: "Project Site Engineer",
    location: "Multiple project locations",
    type: "Full-time · On-site",
    experience: "1–3 years",
    summary:
      "Lead on-ground execution of solar projects, coordinating installation teams, vendors, and quality checks.",
    points: [
      "Supervise installation teams and ensure adherence to drawings",
      "Maintain site reports, photos, and daily work logs",
      "Ensure safety practices are followed at every site",
    ],
  },
];

const steps = [
  {
    icon: <FileText className="h-6 w-6" style={{ color: brandBlue }} />,
    step: "01",
    title: "Share your profile",
    body: "Send us your updated resume, past work (if any), and a short note on why you want to work in solar.",
  },
  {
    icon: <Phone className="h-6 w-6" style={{ color: brandBlue }} />,
    step: "02",
    title: "Intro call",
    body: "Our HR / hiring team will schedule a quick call to understand your experience, interests, and expectations.",
  },
  {
    icon: <CheckCircle className="h-6 w-6" style={{ color: brandBlue }} />,
    step: "03",
    title: "Technical & culture fit",
    body: "Depending on the role, there may be a small assignment, technical round, or a meeting with the department head.",
  },
  {
    icon: <Mail className="h-6 w-6" style={{ color: brandBlue }} />,
    step: "04",
    title: "Offer & onboarding",
    body: "If we’re a mutual fit, we share the offer, onboarding plan, and your first 30–60–90 day roadmap.",
  },
];

// --- Component ---

const CareerWithTruesun: React.FC = () => {
  return (
    <div className=" bg-slate-50 text-slate-900">

      {/* ===== WHY WORK WITH TRUESUN (PERKS) ===== */}
      <section
        id="life-at-truesun"
        className="py-8 sm:py-10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: brandYellow }}>
              Your Career Benefits
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Grow with the Sun
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-xl transition duration-300 shadow-black/30 hover:shadow-2xl hover:scale-[1.02] ring-2 ring-slate-600/40"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-slate-800 shadow-inner" style={{ color: brandBlue, backgroundColor: brandYellow + "20" }}>
                    {perk.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 pt-1">
                  {perk.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {perk.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="mx-auto max-w-7xl border-slate-200" />

      {/* ===== VALUES ===== */}
      <section className="py-16 sm:py-10" style={{ backgroundColor: brandBlue }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: brandYellow }}>
              Our Culture & Foundation
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              The TrueSun Way
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {values.map((val) => (
              <div
                key={val.title}
                className="flex flex-col gap-3 rounded-xl bg-white/30 p-5 ring-1 ring-white/10 backdrop-blur-sm transition hover:bg-white/10"
              >
                <div className="h-8 w-8 text-center" style={{ color: brandYellow }}>
                    {val.icon}
                </div>
                <h3 className="text-base font-bold text-white pt-1">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-200">{val.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="mx-auto max-w-7xl border-slate-200" />

      {/* ===== OPEN ROLES ===== */}
      <section
        id="open-roles"
        className="py-8 sm:py-10"
        style={{ backgroundColor: brandLight }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Current Opportunities
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Join Our Team
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-slate-600">
                Don&apos;t see a perfect role? Send your profile to <span className="font-semibold text-slate-800">careers@truesun.in</span> for future consideration.
            </p>
          </div>

          <div className="space-y-6">
            {openings.map((job) => (
              <div
                key={job.title}
                className="flex flex-col gap-5 rounded-2xl border border-slate-800/40 shadow-blac/30 bg-white p-6 shadow-xl transition duration-300 hover:shadow-2xl md:flex-row md:items-center md:justify-between"
              >
                <div className="max-w-xl">
                  <h3 className="text-xl font-bold text-slate-900">
                    {job.title}
                  </h3>
                  
                  {/* Job Tags */}
                  <div className="mt-2 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
                    <span className="flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-200">
                      <MapPin className="h-3 w-3 text-slate-500" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-200">
                      <Briefcase className="h-3 w-3 text-slate-500" /> {job.type}
                    </span>
                    <span className="flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-200">
                      <Clock className="h-3 w-3 text-slate-500" /> Exp: {job.experience}
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-slate-700 font-medium">
                    {job.summary}
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-600">
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex w-full flex-col items-start gap-3 md:w-56 md:items-end">
                  <a 
                    href={`mailto:careers@truesun.in?subject=Application - ${job.title} - TrueSun`}
                    className="w-full rounded-full bg-slate-800 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-slate-700 md:w-auto"
                  >
                    Apply for this role
                  </a>
                  <p className="text-xs text-slate-500 md:text-right">
                    We will review your application within 5 working days.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <hr className="mx-auto max-w-7xl border-slate-800" />

      {/* ===== HIRING PROCESS ===== */}
      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Your Journey
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Our Simple Hiring Process
            </h2>
          </div>

          <div className="relative grid gap-8 md:grid-cols-4">
            {/* The vertical connector line for desktop */}
            <div className="absolute top-0 bottom-0 left-0 hidden w-full md:block">
                <div className="h-1 w-full absolute top-12 left-0 right-0" style={{ backgroundColor: brandYellow + "80" }} />
            </div>

            {steps.map((s) => (
              <div
                key={s.step}
                className="relative flex flex-col gap-2 rounded-2xl bg-white p-5 pt-10 shadow-lg ring-1 ring-slate-600/40 md:pt-16"
              >
                {/* Step Circle with Icon */}
                <div 
                    className="absolute -top-3 left-1/2 -translate-x-1/2 md:-top-6 md:left-auto md:translate-x-0 h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center border-4 z-10" 
                    style={{ borderColor: brandYellow, backgroundColor: brandLight }}
                >
                    {s.icon}
                </div>
                
                {/* Step Number Badge */}
                <p
                  className="text-xs font-bold tracking-[0.16em] absolute top-2 right-4 rounded-full px-2 py-0.5"
                  style={{ color: brandBlue, backgroundColor: brandYellow + "30" }}
                >
                  STEP {s.step}
                </p>
                
                <h3 className="text-lg font-bold text-slate-900 mt-2">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerWithTruesun;