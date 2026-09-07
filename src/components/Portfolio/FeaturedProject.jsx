import React from "react";

const FeaturedProject = ({ project, onViewModal }) => {
  if (!project) return null;

  return (
    <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 lg:p-12 mb-16 sm:mb-24 shadow-xl border border-slate-800">
      <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
        {/* Featured Image Container */}
        <div className="w-full lg:w-1/2 min-h-[260px] sm:min-h-[340px] bg-slate-900 rounded-2xl overflow-hidden relative border border-slate-800">
          <img
            src={project.image}
            alt={project.business_name || project.businessName}
            // Removed loading="lazy" & added high priority to fix the 10s browser intervention delay
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Featured Content Details */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/50 px-3 py-1 rounded-full">
                Featured Case Study
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {project.industry}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              {project.business_name || project.businessName}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              {project.title || project.description}
            </p>

            {/* Metrics Highlight */}
            {project.result && (
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 mb-6">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Key Result Delivered
                </span>
                <p className="text-sm font-medium text-emerald-400">
                  {project.result}
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => onViewModal(project)}
              className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition duration-200 text-center"
            >
              Read Full Case Study
            </button>

            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold text-sm rounded-xl transition border border-slate-800 text-center"
              >
                Visit Live Site ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;