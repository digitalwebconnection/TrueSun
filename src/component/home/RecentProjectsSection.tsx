import LeadPopup from "../../component/LeadPopup";
import {  useState } from "react";

const projects = [
  {
    id: 1,
    title: "Premium Residential Rooftop",
    type: "Residential · 6 kW",
    location: "Bandra West, Mumbai",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYqiNewu6Eg_z4ifGbqSXn6l9Tq2mWftlW3w&s",
  },
  {
    id: 2,
    title: "High-Rise Apartment Tower",
    type: "High-Rise · 80 kW",
    location: "Lower Parel, Mumbai",
    image: "https://5.imimg.com/data5/UA/HD/UR/SELLER-61697786/solar-power-plant-of-auo-tainan-site-750-491-80-s-500x500.jpg",
  },
  {
    id: 3,
    title: "Industrial Factory Roof",
    type: "Industrial · 250 kW",
    location: "Navi Mumbai, Maharashtra",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbFAGQLZ1-KVfPFsMc_tOuoMHKHDVItwm3IQ&s",
  },
  {
    id: 4,
    title: "Business Hotel & Resort",
    type: "Hotel · 120 kW",
    location: "Goa, India",
    image: "https://www.shutterstock.com/image-photo/rooftop-technology-solar-cell-panel-260nw-2512475745.jpg",
  },
  {
    id: 5,
    title: "Corporate Office Building",
    type: "Commercial · 60 kW",
    location: "BKC, Mumbai",
    image: "https://cpimg.tistatic.com/10349112/b/4/02-60-KW-Commercial-Solar-Plant..jpg",
  },
  {
    id: 6,
    title: "Carbon Offset Solar Project",
    type: "Carbon Project · MW Scale",
    location: "Rajasthan, India",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFCoLH8TqT55-9oXC0YQYmzqzZgdgxOn6oA&s",
  },
];

export default function RecentProjectsSection() {
    const [openLeadPopup, setOpenLeadPopup] = useState(false);
  return (
    <section className="relative py-16 lg:py-20 bg-linear-to-b from-white via-[#FFF8F0] to-white">
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-64 max-w-5xl rounded-full bg-orange-100/40 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-orange-500 mb-2">
              Our Work
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900">
              See How TrueSun Turns{" "}
              <span className="bg-linear-to-r from-[#FF8A3C] to-[#FFB347] bg-clip-text text-transparent">
                Roofs Into Power Plants
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl">
              From residential rooftops to large commercial complexes, these are
              some of the real projects where TrueSun is helping customers cut
              their power bills and move towards cleaner energy.
            </p>
          </div>

          {/* small trust badge */}
          <div className="inline-flex items-center gap-3 rounded-2xl border border-orange-200 bg-white/80 px-4 py-3 shadow-sm">
            <div className="h-9 w-9 rounded-full bg-linear-to-br from-[#FF8A3C] to-[#FFB347] flex items-center justify-center text-white text-xs font-semibold">
              50+
            </div>
            <div className="text-xs sm:text-sm">
              <p className="font-semibold text-slate-900">
                Completed Solar Installations
              </p>
              <p className="text-slate-500">Residential · Commercial · Industrial</p>
            </div>
          </div>
        </div>

        {/* Grid of projects */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-3xl bg-white border border-orange-500 shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
            >
              {/* image */}
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                  loading="lazy"
                />
                {/* category badge */}
                <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/55 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{project.type}</span>
                </div>
              </div>

              {/* content */}
              <div className="p-4 sm:p-5">
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-500 flex items-center gap-1.5">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-linear-to-r from-[#FF8A3C] to-[#FFB347]" />
                  {project.location}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xs text-slate-500">
                    Real project photo · Installed by TrueSun
                  </p>
                  <button className="text-[11px] font-medium text-orange-600 group-hover:text-orange-700 inline-flex items-center gap-1">
                    View details
                    <span className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA under grid */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            Want to see what solar could look like on your roof?
          </p>
          <div className="flex flex-wrap gap-3">
         <button
            onClick={() => setOpenLeadPopup(true)}
            className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#FF8A3C] to-[#FFB347] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-300/50 transition hover:shadow-lg hover:brightness-105"
          >
            Book a Free Site Visit
          </button>
          </div>
        </div>
      </div>

      {/* Popup Mount */}
      {openLeadPopup && (
        <LeadPopup onClose={() => setOpenLeadPopup(false)} />
      )}
    </section>
  );
}
