import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const subject = `I need help growing my business through digital marketing - ${formData.message.slice(0, 50)}`;

      const body = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}

Message:
${formData.message}

----------------------
Sent via website contact form (HB GrowthSyncro Growth Partner)
`;

      window.location.href = `mailto:hbgrowthsyncro@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      setSubmitStatus("success");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        window.location.reload();
      }, 1200);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } fontFinally: {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 sm:px-10 bg-slate-50 text-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Contact HB GrowthSyncro</h2>
          <p className="text-slate-600 mt-2">Let's discuss how we can help your business get more customers.</p>
        </div>

        {/* Contact Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <a
            href="mailto:hbgrowthsyncro@gmail.com"
            className="p-4 bg-white border border-slate-200 rounded-2xl flex items-center gap-3 shadow-sm hover:border-blue-600 transition"
          >
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold">@</div>
            <div>
              <p className="text-xs text-slate-500 font-semibold uppercase">Email Us</p>
              <p className="text-sm font-bold text-slate-800">hbgrowthsyncro@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+918080224138"
            className="p-4 bg-white border border-slate-200 rounded-2xl flex items-center gap-3 shadow-sm hover:border-emerald-600 transition"
          >
            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center font-bold">📞</div>
            <div>
              <p className="text-xs text-slate-500 font-semibold uppercase">Call Us</p>
              <p className="text-sm font-bold text-slate-800">+91 8080224138</p>
            </div>
          </a>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-3.5 border border-slate-200 rounded-xl text-sm"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-3.5 border border-slate-200 rounded-xl text-sm"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3.5 border border-slate-200 rounded-xl text-sm"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3.5 border border-slate-200 rounded-xl text-sm resize-none"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition shadow-md"
          >
            {isSubmitting ? "Opening Mail..." : "Send Message"}
          </button>

          {submitStatus === "success" && (
            <p className="p-3 bg-emerald-50 text-emerald-700 text-xs rounded-lg border border-emerald-200">
              Mail app opened. Please click send in your email client.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;