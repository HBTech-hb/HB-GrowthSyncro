import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Helper function to safely get the API key
  const getApiKey = () => {
    if (typeof process !== "undefined" && process.env?.REACT_APP_WEB3FORMS_KEY) {
      return process.env.REACT_APP_WEB3FORMS_KEY;
    }
    try {
      if (import.meta?.env?.VITE_WEB3FORMS_KEY) {
        return import.meta.env.VITE_WEB3FORMS_KEY;
      }
    } catch (e) {
      // Ignored
    }
    return "4585591c-a8e7-4576-8a06-2f1d2dcac379";
  };

  const handleCloseAndReload = () => {
    setShowPopup(false);
    window.location.reload();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const apiKey = getApiKey();

      const payload = new FormData();
      payload.append("access_key", apiKey);
      payload.append(
        "subject",
        `New Lead from HB GrowthSyncro : ${formData.firstName} ${formData.lastName}`
      );
      payload.append("from_name", `${formData.firstName} ${formData.lastName}`);
      payload.append("email", formData.email);
      payload.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setShowPopup(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });

        // Automatically reload the page after 3 seconds
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        console.error("Web3Forms Response Error:", data);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 sm:px-10 bg-slate-50 text-slate-900 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4 border border-blue-100">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Contact HB GrowthSyncro
          </h2>
          <p className="text-slate-600 mt-2 text-base max-w-2xl mx-auto leading-relaxed">
            Have questions regarding web architecture, local SEO rankings, or custom development? Send us a message or reach out directly.
          </p>
        </div>

        {/* Contact Links & Location Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <a
            href="mailto:hbgrowthsyncro@gmail.com"
            aria-label="Send an email to HB GrowthSyncro"
            className="p-4 bg-white border border-slate-200 rounded-2xl flex items-center gap-3 shadow-sm hover:border-blue-600 transition"
          >
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold">
              @
            </div>
            <div>
              <p className="text-xs text-slate-500 font-semibold uppercase">Email Us</p>
              <p className="text-sm font-bold text-slate-800 break-all">hbgrowthsyncro@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+918080224138"
            aria-label="Call HB GrowthSyncro phone number"
            className="p-4 bg-white border border-slate-200 rounded-2xl flex items-center gap-3 shadow-sm hover:border-emerald-600 transition"
          >
            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center font-bold">
              📞
            </div>
            <div>
              <p className="text-xs text-slate-500 font-semibold uppercase">Call Us</p>
              <p className="text-sm font-bold text-slate-800">+91 8080224138</p>
            </div>
          </a>

          <div className="p-4 bg-white border border-slate-200 rounded-2xl flex items-center gap-3 shadow-sm">
            <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center font-bold">
              📍
            </div>
            <div>
              <p className="text-xs text-slate-500 font-semibold uppercase">Location</p>
              <p className="text-sm font-bold text-slate-800">Maharashtra, India</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Briefly describe your project or requirements..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3.5 border border-slate-200 rounded-xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold rounded-xl transition shadow-md cursor-pointer disabled:cursor-not-allowed text-sm uppercase tracking-wider"
          >
            {isSubmitting ? "Sending Message..." : "Send Message"}
          </button>

          {/* Error Notification */}
          {submitStatus === "error" && (
            <p className="p-3 bg-rose-50 text-rose-700 text-sm rounded-lg border border-rose-200 text-center font-medium">
              Oops! Something went wrong. Please try again or reach out to us directly via WhatsApp or phone.
            </p>
          )}
        </form>

        {/* Business Hours Information */}
        <div className="mt-8 text-center text-xs text-slate-400">
          <p>Operating Hours: Monday – Saturday, 9:00 AM – 7:00 PM IST</p>
          <p className="mt-1">Inquiries received outside operational hours are addressed on the next business day.</p>
        </div>
      </div>

      {/* Thank You Pop-up Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl border border-slate-100 transform transition-all scale-100">
            {/* Success Check Icon */}
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 font-bold">
              ✓
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Your inquiry has been received successfully. Our team will review your project details and get back to you shortly.
            </p>

            <button
              type="button"
              onClick={handleCloseAndReload}
              className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition shadow-md cursor-pointer text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;