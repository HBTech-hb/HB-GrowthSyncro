import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { projectsData as staticProjects } from "../data/projectsData";

// Utility: Canvas-based WebP compression and scaling for uploaded files
const compressAndConvertToWebP = (file, maxWidth = 1200, quality = 0.8) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const scale = Math.min(1, maxWidth / img.width);

        canvas.width = img.width * scale;
        canvas.height = img.height * scale;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error("Image compression failed"));
              return;
            }
            const cleanName = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
            const webpFile = new File(
              [blob],
              `${cleanName}.webp`,
              { type: "image/webp" }
            );
            resolve(webpFile);
          },
          "image/webp",
          quality
        );
      };
      img.onerror = (err) => reject(err);
    };
    reader.onerror = (err) => reject(err);
  });
};

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [migrating, setMigrating] = useState(false);

  // Toggle between "file" or "url" upload modes
  const [imageMode, setImageMode] = useState("file"); 
  const [imageFile, setImageFile] = useState(null);
  const [imageUrlInput, setImageUrlInput] = useState("");

  const [formData, setFormData] = useState({
    business_name: "",
    industry: "",
    title: "",
    description: "",
    problem: "",
    solution: "",
    result: "",
    timeline: "",
    website: "",
    services: "",
    featured: false,
  });

  const createSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const fetchProjects = async () => {
    setFetching(true);
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) console.error("Error fetching projects:", error);
    else setProjects(data || []);
    setFetching(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let finalImageUrl = "";

      // 1. Process local file upload with WebP compression
      if (imageMode === "file") {
        if (!imageFile) throw new Error("Please select a local image file to upload.");

        const compressedWebP = await compressAndConvertToWebP(imageFile);
        const fileName = `${Date.now()}-${compressedWebP.name}`;
        const filePath = `projects/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("project-images")
          .upload(filePath, compressedWebP, { contentType: "image/webp" });

        if (uploadError) throw uploadError;

        const { data: urlData } = supabase.storage
          .from("project-images")
          .getPublicUrl(filePath);

        finalImageUrl = urlData.publicUrl;
      } 
      // 2. Use direct external image URL
      else {
        if (!imageUrlInput.trim()) throw new Error("Please enter a valid image URL.");
        finalImageUrl = imageUrlInput.trim();
      }

      const servicesArray = formData.services
        ? formData.services.split(",").map((s) => s.trim())
        : [];

      const generatedSlug = `${createSlug(formData.business_name)}-${Date.now()}`;

      const { error: insertError } = await supabase.from("projects").insert([
        {
          slug: generatedSlug,
          business_name: formData.business_name,
          industry: formData.industry,
          title: formData.title,
          description: formData.description,
          problem: formData.problem,
          solution: formData.solution,
          result: formData.result,
          timeline: formData.timeline,
          website: formData.website,
          featured: formData.featured,
          services: servicesArray,
          image: finalImageUrl,
        },
      ]);

      if (insertError) throw insertError;

      alert("Project published successfully!");
      setFormData({
        business_name: "",
        industry: "",
        title: "",
        description: "",
        problem: "",
        solution: "",
        result: "",
        timeline: "",
        website: "",
        services: "",
        featured: false,
      });
      setImageFile(null);
      setImageUrlInput("");
      fetchProjects();
    } catch (err) {
      alert(`Error adding project: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;

    const { error } = await supabase.from("projects").delete().eq("id", id);
    if (error) alert(`Error deleting project: ${error.message}`);
    else fetchProjects();
  };

  return (
    <div className="space-y-10">
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Upload New Project</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="business_name"
              placeholder="Business Name (e.g. Apex Legal)"
              value={formData.business_name}
              onChange={handleChange}
              required
              className="p-3 border rounded-xl w-full text-sm outline-blue-500"
            />
            <input
              type="text"
              name="industry"
              placeholder="Industry (e.g. Legal Services)"
              value={formData.industry}
              onChange={handleChange}
              required
              className="p-3 border rounded-xl w-full text-sm outline-blue-500"
            />
          </div>

          <input
            type="text"
            name="title"
            placeholder="Project Headline Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="p-3 border rounded-xl w-full text-sm outline-blue-500"
          />

          <textarea
            name="description"
            placeholder="Short Overview Description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            required
            className="p-3 border rounded-xl w-full text-sm outline-blue-500"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <textarea
              name="problem"
              placeholder="Client Problem / Challenge"
              value={formData.problem}
              onChange={handleChange}
              rows="2"
              className="p-3 border rounded-xl w-full text-sm outline-blue-500"
            />
            <textarea
              name="solution"
              placeholder="Solution Provided"
              value={formData.solution}
              onChange={handleChange}
              rows="2"
              className="p-3 border rounded-xl w-full text-sm outline-blue-500"
            />
            <textarea
              name="result"
              placeholder="Metrics Delivered / Result"
              value={formData.result}
              onChange={handleChange}
              rows="2"
              className="p-3 border rounded-xl w-full text-sm outline-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="timeline"
              placeholder="Timeline (e.g. 4 Weeks)"
              value={formData.timeline}
              onChange={handleChange}
              className="p-3 border rounded-xl w-full text-sm outline-blue-500"
            />
            <input
              type="url"
              name="website"
              placeholder="Website URL (https://...)"
              value={formData.website}
              onChange={handleChange}
              className="p-3 border rounded-xl w-full text-sm outline-blue-500"
            />
            <input
              type="text"
              name="services"
              placeholder="Services (Comma separated: Web Design, SEO)"
              value={formData.services}
              onChange={handleChange}
              className="p-3 border rounded-xl w-full text-sm outline-blue-500"
            />
          </div>

          <div className="flex items-center gap-3 py-2">
            <input
              type="checkbox"
              id="featured"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 rounded cursor-pointer"
            />
            <label htmlFor="featured" className="text-sm font-medium text-slate-700 cursor-pointer">
              Set as Featured Showcase Banner?
            </label>
          </div>

          {/* IMAGE SOURCE TYPE TOGGLE */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Project Cover Image Source
            </label>

            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700 cursor-pointer">
                <input
                  type="radio"
                  name="imageMode"
                  value="file"
                  checked={imageMode === "file"}
                  onChange={() => setImageMode("file")}
                  className="text-blue-600"
                />
                Upload File (Local Drive)
              </label>

              <label className="flex items-center gap-2 text-sm font-medium text-slate-700 cursor-pointer">
                <input
                  type="radio"
                  name="imageMode"
                  value="url"
                  checked={imageMode === "url"}
                  onChange={() => setImageMode("url")}
                  className="text-blue-600"
                />
                Direct Image Link (URL)
              </label>
            </div>

            {/* Input option based on mode */}
            {imageMode === "file" ? (
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files[0])}
                  required={imageMode === "file"}
                  className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-slate-900 file:text-white hover:file:bg-blue-600 cursor-pointer"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  Local uploads will be auto-compressed into lightweight WebP format.
                </p>
              </div>
            ) : (
              <div>
                <input
                  type="url"
                  placeholder="Paste hosted image URL (e.g. https://images.unsplash.com/...)"
                  value={imageUrlInput}
                  onChange={(e) => setImageUrlInput(e.target.value)}
                  required={imageMode === "url"}
                  className="p-3 border rounded-xl w-full text-sm outline-blue-500 bg-white"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  Supports hosted links from Unsplash, Imgur, Cloudinary, or external servers.
                </p>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm transition shadow-sm"
          >
            {loading ? "Processing & Publishing..." : "Publish Project"}
          </button>
        </form>
      </div>

      {/* Existing projects listing table */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <h3 className="text-xl font-bold text-slate-800 mb-4">Existing Database Projects</h3>

        {fetching ? (
          <p className="text-sm text-slate-500">Loading projects...</p>
        ) : projects.length === 0 ? (
          <p className="text-sm text-slate-500">No projects uploaded yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-100 text-slate-800 font-semibold border-b">
                <tr>
                  <th className="p-3">Cover</th>
                  <th className="p-3">Business</th>
                  <th className="p-3">Title</th>
                  <th className="p-3">Featured</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {projects.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="p-3">
                      <div className="w-12 h-12 rounded-lg bg-slate-900 overflow-hidden flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.business_name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="p-3 font-semibold text-slate-800">{item.business_name}</td>
                    <td className="p-3">{item.title}</td>
                    <td className="p-3">
                      {item.featured ? (
                        <span className="bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-semibold">
                          Yes
                        </span>
                      ) : (
                        <span className="text-slate-400 text-xs">No</span>
                      )}
                    </td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="px-3 py-1 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-lg text-xs font-semibold transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}