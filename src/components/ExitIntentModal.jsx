import React, { useState, useEffect } from "react";
import { FiZap, FiX, FiMessageSquare } from "react-icons/fi";

const WHATSAPP_NUMBER = "918080224138";

export default function ExitIntentModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the modal was already dismissed or converted in this session/window
    const hasBeenDismissed = sessionStorage.getItem("hb_exit_modal_shown");
    if (hasBeenDismissed) return;

    // Genuine Desktop Exit Intent (Cursor moving out through top window boundary)
    const handleMouseLeave = (e) => {
      if (e.clientY <= 5 && !sessionStorage.getItem("hb_exit_modal_shown")) {
        setIsVisible(true);
        sessionStorage.setItem("hb_exit_modal_shown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const whatsappMessage = encodeURIComponent(
    "Hi HB GrowthSyncro, I saw your special consultation offer and would like to claim my free project review."
  );

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm animate-fadeIn"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-modal-title"
    >
      <div
        className="relative w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900 p-6 sm:p-8 text-center text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close consultation modal"
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
        >
          <FiX className="w-5 h-5" />
        </button>

        {/* Icon */}
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-950/60 text-blue-400 shadow-inner">
          <FiZap className="h-7 w-7" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
          Exclusive Project Consultation
        </span>

        <h3 id="exit-modal-title" className="mt-2 text-2xl font-extrabold text-white tracking-tight">
          Ready to Scale Your Digital Growth?
        </h3>

        <p className="mt-3 text-sm text-slate-300 leading-relaxed">
          Before you go, claim a free 15-minute 1-on-1 technical website &amp; local SEO audit for your business with zero obligation.
        </p>

        {/* WhatsApp Action Link */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClose}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 py-3.5 font-bold text-white text-sm transition-colors shadow-lg shadow-blue-600/30"
        >
          <FiMessageSquare className="w-4 h-4" />
          <span>Claim Free WhatsApp Consultation</span>
        </a>

        <button
          type="button"
          onClick={handleClose}
          className="mt-4 block mx-auto text-xs text-slate-400 hover:text-slate-200 transition cursor-pointer"
        >
          No thanks, I will explore on my own
        </button>
      </div>
    </div>
  );
}