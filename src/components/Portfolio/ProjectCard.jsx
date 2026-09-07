import React from "react";

const ProjectCard = ({ project, onViewModal }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      {/* Edge-to-Edge Image Container (No Padding, Pure Cover) */}
      <div className="w-full h-56 sm:h-64 bg-slate-100 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.business_name || project.businessName}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
              {project.industry}
            </span>
            {project.timeline && (
              <span className="text-xs text-slate-400 font-medium">
                {project.timeline}
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-1">
            {project.business_name || project.businessName}
          </h3>

          <p className="text-slate-600 text-sm mb-4 line-clamp-2">
            {project.title || project.description}
          </p>
        </div>

        <div>
          {/* Services Tags */}
          {project.services && project.services.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.services.slice(0, 3).map((service, index) => (
                <span
                  key={index}
                  className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded"
                >
                  {service}
                </span>
              ))}
              {project.services.length > 3 && (
                <span className="text-[11px] font-medium text-slate-400 px-1 py-0.5">
                  +{project.services.length - 3} more
                </span>
              )}
            </div>
          )}

          <button
            onClick={() => onViewModal(project)}
            className="w-full py-2.5 px-4 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800 text-xs font-semibold rounded-xl transition-colors duration-200 text-center"
          >
            View Case Study
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;