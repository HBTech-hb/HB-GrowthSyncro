// src/components/Portfolio/portfolio.jsx
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { supabase } from "../../lib/supabase"; 
import { projectsData as staticProjects } from "../../data/projectsData"; 
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const Portfolio = () => {
  // 1. Instantly display static projects so the UI loads in 0ms
  const [projectsData, setProjectsData] = useState(staticProjects);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;

        // Merge live Supabase data with static projects in the background
        if (data && data.length > 0 && isMounted) {
          const liveProjects = data;
          // Avoid duplicate items if IDs match
          const combined = [
            ...liveProjects,
            ...staticProjects.filter(sp => !liveProjects.some(lp => lp.id === sp.id))
          ];
          setProjectsData(combined);
        }
      } catch (err) {
        console.error("Error updating portfolio projects:", err.message);
      }
    };

    fetchProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  const featuredProject = useMemo(() => {
    if (!Array.isArray(projectsData) || projectsData.length === 0) return null;
    return projectsData.find((p) => p.featured) || projectsData[0];
  }, [projectsData]);

  const gridProjects = useMemo(() => {
    if (!Array.isArray(projectsData)) return [];
    if (!featuredProject) return projectsData;
    return projectsData.filter((p) => p.id !== featuredProject.id);
  }, [projectsData, featuredProject]);

  const handleOpenModal = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  // Removed blocking 'if (loading)' spinner block!

  return (
    <section id="portfolio" className="py-20 lg:py-32 px-6 sm:px-10 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4 border border-blue-100">
            Client Growth &amp; Proven Engineering
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Real Projects. Real Businesses. <br className="hidden sm:inline" />
            <span className="text-blue-600">Measurable Digital Results.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg lg:text-xl mt-6 font-normal max-w-3xl mx-auto leading-relaxed">
            HB GrowthSyncro helps regional enterprises, healthcare facilities, and commercial retailers establish an authoritative digital presence with high-performance web architecture, technical search optimization, and direct inquiry funnels.
          </p>
        </div>

        {/* Featured Case Study Hero Card */}
        {featuredProject && (
          <FeaturedProject
            project={featuredProject}
            onViewModal={handleOpenModal}
          />
        )}

        {/* Grid Section Header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 pb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Selected Client Case Studies
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Explore how we solved technical scalability, local search rankings, and lead capture for regional businesses.
            </p>
          </div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            {gridProjects.length} Projects Documented
          </span>
        </div>

        {/* Remaining Projects Grid */}
        {gridProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewModal={handleOpenModal}
              />
            ))}
          </div>
        )}

      </div>

      {/* Interactive Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default Portfolio;