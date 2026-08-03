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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Contact HB GrowthSyncro
          </h2>
          <p className="text-slate-600 mt-2">
            Let's discuss how we can help your business get more customers.
          </p>
        </div>

        {/* Contact Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <a
            href="mailto:hbgrowthsyncro@gmail.com"
            className="p-4 bg-white border border-slate-200 rounded-2xl flex items-center gap-3 shadow-sm hover:border-blue-600 transition"
          >
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold">
              @
            </div>
            <div>
              <p className="text-xs text-slate-500 font-semibold uppercase">Email Us</p>
              <p className="text-sm font-bold text-slate-800">hbgrowthsyncro@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+918080224138"
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
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3.5 border border-slate-200 rounded-xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold rounded-xl transition shadow-md cursor-pointer disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending Message..." : "Send Message"}
          </button>

          {/* Error Notification */}
          {submitStatus === "error" && (
            <p className="p-3 bg-rose-50 text-rose-700 text-sm rounded-lg border border-rose-200 text-center font-medium">
              Oops! Something went wrong. Please try again or reach out to us directly.
            </p>
          )}
        </form>
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
              Your message has been sent successfully. We will get back to you shortly.
            </p>

            <button
              onClick={handleCloseAndReload}
              className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition shadow-md"
            >
              Close
            </button>
            {/* <p className="text-xs text-slate-400 mt-3">Reloading page automatically...</p> */}
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;