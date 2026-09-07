// src/components/Portfolio/PortfolioSection.jsx
import React, { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function PortfolioSection() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data && data.length > 0) {
        const mappedData = data.map((item) => ({
          id: item.id,
          businessName: item.business_name,
          industry: item.industry,
          title: item.title,
          description: item.description,
          problem: item.problem,
          solution: item.solution,
          result: item.result,
          services: item.services || [],
          timeline: item.timeline,
          website: item.website,
          image: item.image,
          featured: item.featured,
        }));
        setProjects(mappedData);
      }
      setLoading(false);
    };

    loadProjects();
  }, []);

  if (loading) {
    return <div className="py-20 text-center text-slate-400">Loading portfolio...</div>;
  }

  return (
    <section className="py-20 px-6 sm:px-10 max-w-7xl mx-auto font-poppins">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onViewModal={(p) => setSelectedProject(p)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}