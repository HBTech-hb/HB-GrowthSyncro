import { useState, useEffect } from "react";

export default function ExitIntentModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // FORCE CLEAR SESSION STORAGE FOR TESTING
    // (Remove or comment out this line once you confirm it works)
    sessionStorage.removeItem("exitModalShown");

    const triggerModal = (reason) => {
      console.log(`🚀 TRIGGERED BY: ${reason}`);
      setIsVisible(true);
    };

    // 1. DESKTOP MOUSE EXIT (Cursor moves top)
    const handleMouseLeave = (e) => {
      if (e.clientY <= 10) {
        triggerModal("Mouse Leave (Top Viewport)");
      }
    };

    // 2. TAB SWITCH / MINIMIZE
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        triggerModal("Tab Switch / Page Hidden");
      }
    };

    // 3. BACK BUTTON INTERCEPTION
    // Push state once on mount
    window.history.pushState({ modalArmed: true }, "", window.location.href);

    const handlePopState = () => {
      triggerModal("Back Button Click");
    };

    // 4. MOBILE SWIPE-UP / FAST SCROLL UP
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      if (lastScrollTop - currentScroll > 35 && currentScroll < 150) {
        triggerModal("Mobile Fast Scroll Up");
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    // Attach listeners
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("popstate", handlePopState);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* --- DEV TEST BUTTON (Temporary) --- */}
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 z-[999999] rounded-lg bg-red-600 px-3 py-2 text-xs font-bold text-white shadow-lg hover:bg-red-500"
      >
        🧪 Test Popup UI
      </button>

      {/* --- MODAL UI --- */}
      {isVisible && (
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-md"
          onClick={() => setIsVisible(false)}
        >
          <div 
            className="relative w-full max-w-md rounded-2xl border border-cyan-500/30 bg-slate-900 p-6 sm:p-8 text-center text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-xl text-slate-400 hover:text-white"
            >
              ✕
            </button>

            {/* Icon */}
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-500/30 bg-slate-800">
              <svg className="h-7 w-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              WAIT! BEFORE YOU LEAVE
            </span>

            <h3 className="mt-2 text-2xl font-extrabold text-white">
              Get 7 Days Free VIP Access
            </h3>

            <p className="mt-3 text-sm text-slate-400">
              Don't leave empty-handed. Claim an exclusive extended 7-Day All-Access Pass + free personal consultation.
            </p>

            <button 
              onClick={() => {
                alert("Offer Claimed!");
                setIsVisible(false);
              }}
              className="mt-6 w-full rounded-full bg-cyan-500 py-3.5 font-bold text-slate-950 hover:bg-cyan-400 transition-colors"
            >
              CLAIM 7-DAY VIP PASS
            </button>

            <button 
              onClick={() => setIsVisible(false)}
              className="mt-4 block mx-auto text-xs text-slate-500 hover:text-slate-400"
            >
              No thanks, I'll pass on this offer
            </button>
          </div>
        </div>
      )}
    </>
  );
}