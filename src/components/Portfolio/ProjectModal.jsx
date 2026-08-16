// src/components/Portfolio/ProjectModal.jsx
import React, { useEffect, useCallback } from "react";
import { FiX, FiExternalLink, FiCalendar, FiBriefcase, FiCheckCircle } from "react-icons/fi";
import ServiceBadge from "./ServiceBadge";

const ProjectModal = ({ project, onClose }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/70 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[24px] shadow-2xl border border-slate-200 overflow-y-auto flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Header */}
        <div className="sticky top-0 right-0 z-20 flex justify-end p-4 bg-gradient-to-b from-white via-white/90 to-transparent pointer-events-none">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Case Study Modal"
            className="pointer-events-auto p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-10 -mt-10">
          {/* Header Metadata */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              <FiBriefcase className="w-3.5 h-3.5" />
              {project.industry}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
              <FiCalendar className="w-3.5 h-3.5" />
              {project.timeline}
            </span>
          </div>

          <h2 id="modal-title" className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {project.businessName}
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 font-normal mt-2 leading-relaxed">
            {project.title}
          </p>

          {/* Modal Hero Image */}
          <div className="mt-6 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 max-h-[400px]">
            <img
              src={project.image}
              alt={`${project.businessName} Case Study Overview`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overview */}
          <div className="mt-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Project Overview
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              {project.description}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2">
                The Business Challenge
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                Our Strategic Execution
              </h4>
              <p className="text-sm text-slate-800 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Results Block */}
          <div className="mt-8 p-6 rounded-2xl bg-slate-900 text-white flex items-start gap-4 shadow-lg">
            <FiCheckCircle className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
                Verified Outcome &amp; ROI
              </p>
              <p className="text-base font-medium text-slate-100 leading-relaxed">
                {project.result}
              </p>
            </div>
          </div>

          {/* Implemented Services */}
          <div className="mt-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Services Delivered
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.services?.map((service, idx) => (
                <ServiceBadge key={idx} label={service} />
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            {project.website ? (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit live website for ${project.businessName}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-md"
              >
                <FiExternalLink className="w-4 h-4" />
                Visit Live Website
              </a>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Close Case Study
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;