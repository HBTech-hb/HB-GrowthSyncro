// src/components/Portfolio/ProjectCard.jsx
import React from "react";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import ServiceBadge from "./ServiceBadge";

const ProjectCard = React.memo(({ project, onViewModal }) => {
  if (!project) return null;

  return (
    <div className="group bg-white rounded-[24px] border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      <div>
        {/* Card Image Container */}
        <div className="relative h-56 sm:h-64 bg-slate-100 overflow-hidden">
          <img
            src={project.image}
            alt={`${project.businessName} Case Study`}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-slate-800 shadow-sm border border-white/40">
              {project.industry}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
              {project.businessName}
            </h3>
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit live website for ${project.businessName}`}
                className="p-2 text-slate-400 hover:text-blue-600 transition-colors cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              >
                <FiExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mb-6">
            {project.title}
          </p>

          {/* Service Badges */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.services?.map((service, idx) => (
              <ServiceBadge key={idx} label={service} />
            ))}
          </div>
        </div>
      </div>

      {/* Card Action */}
      <div className="px-6 pb-6 pt-2">
        <button
          type="button"
          onClick={() => onViewModal(project)}
          aria-label={`Read case study for ${project.businessName}`}
          className="w-full inline-flex items-center justify-between px-5 py-3 rounded-2xl bg-slate-50 group-hover:bg-blue-600 text-slate-800 group-hover:text-white text-sm font-semibold transition-all duration-300 cursor-pointer"
        >
          <span>View Case Study</span>
          <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;