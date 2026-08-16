// src/components/Portfolio/FeaturedProject.jsx
import React from "react";
import { FiArrowRight, FiExternalLink, FiCalendar, FiBriefcase, FiCheckCircle } from "react-icons/fi";
import ServiceBadge from "./ServiceBadge";

const FeaturedProject = React.memo(({ project, onViewModal }) => {
  if (!project) return null;

  return (
    <div className="w-full bg-white rounded-[24px] border border-slate-200/80 shadow-xl shadow-slate-100 overflow-hidden mb-16 lg:mb-24 transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* Left Column: Media Area */}
        <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] lg:min-h-[560px] bg-slate-900 overflow-hidden group">
          <img
            src={project.image}
            alt={`${project.businessName} Case Study Showcase`}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:hidden" />
          
          <div className="absolute top-6 left-6 z-10">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-600 text-white shadow-md">
              Featured Case Study
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 lg:hidden text-white z-10">
            <p className="text-sm text-blue-300 font-medium">{project.industry}</p>
            <h3 className="text-2xl font-bold mt-1">{project.businessName}</h3>
          </div>
        </div>

        {/* Right Column: Narrative & Metrics */}
        <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-white">
          <div>
            {/* Industry & Timeline Meta */}
            <div className="hidden lg:flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                <FiBriefcase className="w-3.5 h-3.5" />
                {project.industry}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                <FiCalendar className="w-3.5 h-3.5" />
                {project.timeline}
              </span>
            </div>

            <h3 className="hidden lg:block text-3xl font-bold text-slate-900 tracking-tight leading-snug">
              {project.businessName}
            </h3>

            <p className="text-base text-slate-600 mt-3 font-normal leading-relaxed">
              {project.title}
            </p>

            {/* Problem & Solution Blocks */}
            <div className="mt-8 space-y-5">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-1">
                  The Challenge
                </p>
                <p className="text-sm text-slate-700 leading-snug">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100/60">
                <p className="text-xs uppercase tracking-wider font-bold text-blue-600 mb-1">
                  The HB GrowthSyncro Solution
                </p>
                <p className="text-sm text-slate-800 leading-snug">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Results Metric */}
            <div className="mt-6 pt-6 border-t border-slate-100">
              <div className="flex items-start gap-2.5">
                <FiCheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Measurable Result
                  </span>
                  <p className="text-sm font-semibold text-slate-900 leading-snug">
                    {project.result}
                  </p>
                </div>
              </div>
            </div>

            {/* Service Badges */}
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Services Delivered
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.services?.map((service, idx) => (
                  <ServiceBadge key={idx} label={service} />
                ))}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => onViewModal(project)}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-slate-900 text-white hover:bg-blue-600 transition-colors duration-200 shadow-md group cursor-pointer"
            >
              Read Full Case Study
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit live website for ${project.businessName}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors duration-200"
              >
                <FiExternalLink className="w-4 h-4" />
                Visit Website
              </a>
            )}
          </div>

        </div>

      </div>
    </div>
  );
});

FeaturedProject.displayName = "FeaturedProject";

export default FeaturedProject;