import React, { useMemo, useState, useEffect, useRef } from "react";
import {
  FiSearch,
  FiClock,
  FiTag,
  FiMessageSquare,
  FiBookOpen,
  FiArrowLeft,
  FiChevronRight,
} from "react-icons/fi";

const WHATSAPP_NUMBER = "918080224138";

// =========================================================
// CLEAN, MOBILE-SAFE & AUTO-HIDING ADSENSE COMPONENT
// =========================================================
const AdSense = ({
  slot = "3135331154",
  style = { display: "block", textAlign: "center", width: "100%" },
  format = "auto",
  layout = "",
  responsive = "true",
}) => {
  const [isFilled, setIsFilled] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    let timeoutId;

    const pushAd = () => {
      try {
        if (window && window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } else {
          timeoutId = setTimeout(pushAd, 300);
        }
      } catch (e) {
        console.error("AdSense Push Error: ", e);
      }
    };

    pushAd();

    // Dynamically check if AdSense delivers a filled ad
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-ad-status"
        ) {
          const status = mutation.target.getAttribute("data-ad-status");
          if (status === "filled") {
            setIsFilled(true);
          } else if (status === "unfilled") {
            setIsFilled(false);
          }
        }
      });
    });

    if (containerRef.current) {
      const insElement = containerRef.current.querySelector("ins.adsbygoogle");
      if (insElement) {
        observer.observe(insElement, { attributes: true });
      }
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [slot]);

  return (
    <div
      ref={containerRef}
      className={`w-full overflow-hidden text-center transition-all duration-300 ${
        isFilled
          ? "my-6 min-h-[150px] p-3 bg-white rounded-2xl border border-slate-200 shadow-sm block"
          : "hidden"
      }`}
    >
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-6666747759149644"
        data-ad-slot={slot}
        data-ad-format={format}
        {...(layout ? { "data-ad-layout": layout } : {})}
        data-full-width-responsive={responsive}
      />
    </div>
  );
};

const blogs = [
  {
    id: "why-is-my-laptop-so-slow-2026",
    title:
      "Why Is My Laptop So Slow? 10 Reasons It Feels Slower Than It Used To — And What You Can Do",
    author: "HB GrowthSyncro",
    date: "August 10, 2026",
    category: "Technology",
    readTime: "8 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80",
    gridImages: {
      laptop:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
      storage:
        "https://images.unsplash.com/photo-1650526573230-8f8dfb89e509?q=80&w=1000&auto=format&fit=crop",
      ram:
        "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80",
      coolingCleaning:
        "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80",
    },
    affiliateLinks: {
      laptop: "https://link.amazon/B09seWvYF",
      storage: "https://link.amazon/B0hCzeAbo",
      ram: "https://link.amazon/B0fbodpFz",
      coolingCleaning: [
        "https://link.amazon/B03iGNLS9",
        "https://link.amazon/B04hAdcRl",
      ],
    },
    gridLabels: {
      laptop: "Recommended Laptop",
      storage: "NVMe & SATA SSD Options",
      ram: "Laptop RAM Options",
      coolingCleaning: "Cooling & Cleaning Essentials",
    },
    excerpt:
      "Your laptop may not be ready for the trash yet. Before spending money on a new machine, understand what's actually slowing it down, which upgrades can help, and when replacing the laptop finally makes sense.",
    content: `
<p class="mb-5 text-slate-700 leading-relaxed">
There is a frustrating moment almost every laptop owner eventually experiences:
the machine that once felt fast suddenly feels like it is fighting you.
Applications take longer to open, browser tabs hesitate, startup feels endless,
and even simple tasks begin to feel unnecessarily slow.
</p>
<p class="mb-5 text-slate-700 leading-relaxed">
  Before you decide that your laptop is finished, stop and diagnose the problem.
  A slow computer does not automatically mean you need a new computer.
  Sometimes the solution is as simple as cleaning up storage, reducing startup
  applications, upgrading RAM, moving from an HDD to an SSD, or improving airflow.
</p>

<div class="my-8 p-6 bg-slate-900 text-slate-100 rounded-2xl border-l-4 border-blue-500 shadow-md">
  <p class="text-base font-medium italic">
    "The right upgrade is not the one with the biggest specification. It's the one that fixes the problem you actually have."
  </p>
</div>

<h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6 border-b border-slate-100 pb-3">
  10 Reasons Your Laptop May Feel Slow
</h3>

<h4 class="text-xl font-bold text-slate-900 mt-6 mb-3">
  1. Too Many Applications Start With Windows
</h4>

<p class="text-slate-600 leading-relaxed mb-4">
  Many applications configure themselves to launch automatically when your
  laptop starts. Cloud storage tools, messaging applications, update utilities
  and other background programs can consume system resources before you even
  open your first application.
</p>

<p class="text-slate-600 leading-relaxed">
  If your laptop feels especially slow immediately after turning it on,
  review your startup applications and disable programs you do not need
  running automatically.
</p>

<div class="my-6 p-5 bg-blue-50 border border-blue-100 rounded-2xl">
  <p class="text-sm text-blue-900">
    <strong>Try this first:</strong>
    Open your operating system's startup application settings and identify
    programs that do not need to launch every time you start the computer.
  </p>
</div>

<h4 class="text-xl font-bold text-slate-900 mt-8 mb-3">
  2. Your Storage Drive Is Almost Full
</h4>

<p class="text-slate-600 leading-relaxed mb-4">
  That "almost full" storage warning deserves attention. Operating systems
  and applications need working space for temporary files, updates and other
  operations.
</p>

<p class="text-slate-600 leading-relaxed">
  Check your storage before buying hardware. Remove applications you no longer
  use, clean unnecessary files and move large personal files when appropriate.
</p>

<div class="my-6 p-5 bg-emerald-50 border border-emerald-100 rounded-2xl">
  <p class="text-sm text-emerald-900">
    <strong>Buying decision:</strong>
    If your storage is simply full, cleanup may solve the problem.
    If you are still using an old mechanical hard drive, an SSD upgrade
    may provide a much bigger improvement.
  </p>
</div>

<div class="my-8 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
  <div class="aspect-[16/8] overflow-hidden bg-slate-100">
    <img
      src="https://images.unsplash.com/photo-1650526573230-8f8dfb89e509?q=80&w=1000&auto=format&fit=crop"
      alt="NVMe and SATA SSD storage upgrade"
      class="w-full h-full object-cover"
      loading="lazy"
    />
  </div>

  <div class="p-6">
    <span class="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3">
      Storage Upgrade
    </span>
    <h4 class="text-xl font-bold text-slate-900 mb-2">
      NVMe & SATA SSD Upgrades
    </h4>
    <p class="text-sm text-slate-600 leading-relaxed mb-4">
      If your laptop supports an SSD upgrade, moving from an older HDD
      to solid-state storage can significantly improve startup times,
      application launches and everyday responsiveness.
    </p>
    <a
      href="https://link.amazon/B0hCzeAbo"
      target="_blank"
      rel="noopener noreferrer sponsored"
      class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm transition-colors shadow-sm"
    >
      <span>Check NVMe & SATA SSD Options</span>
      →
    </a>
  </div>
</div>

<h4 class="text-xl font-bold text-slate-900 mt-8 mb-3">
  3. You Don't Have Enough RAM For Your Workload
</h4>

<p class="text-slate-600 leading-relaxed mb-4">
  RAM helps your computer keep active applications and data readily available.
  If your normal workflow includes many browser tabs, office applications,
  video calls, design software or development tools at the same time,
  memory can become a limitation.
</p>

<p class="text-slate-600 leading-relaxed">
  The answer is not automatically "buy as much RAM as possible."
  Check your actual memory usage first. If your laptop supports a RAM upgrade
  and memory is consistently close to its limit, additional RAM may be a
  sensible upgrade.
</p>

<div class="my-8 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
  <div class="aspect-[16/8] overflow-hidden bg-slate-100">
    <img
      src="https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80"
      alt="Laptop RAM memory upgrade"
      class="w-full h-full object-cover"
      loading="lazy"
    />
  </div>

  <div class="p-6">
    <span class="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3">
      Memory Upgrade
    </span>
    <h4 class="text-xl font-bold text-slate-900 mb-2">
      Laptop RAM Upgrade
    </h4>
    <p class="text-sm text-slate-600 leading-relaxed mb-4">
      If your laptop is frequently running out of available memory,
      a compatible RAM upgrade may improve multitasking and reduce
      slowdowns caused by memory pressure.
    </p>
    <a
      href="https://link.amazon/B0fbodpFz"
      target="_blank"
      rel="noopener noreferrer sponsored"
      class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm transition-colors shadow-sm"
    >
      <span>Check Compatible Laptop RAM</span>
      →
    </a>
  </div>
</div>

<h4 class="text-xl font-bold text-slate-900 mt-8 mb-3">
  4. You're Still Using an Old HDD
</h4>

<p class="text-slate-600 leading-relaxed mb-4">
  One of the biggest everyday performance differences can come from replacing
  an older mechanical hard drive with a compatible solid-state drive.
</p>

<p class="text-slate-600 leading-relaxed">
  An SSD can make startup, application launches and everyday file operations
  feel considerably more responsive compared with an older mechanical drive.
</p>

<a
  href="https://link.amazon/B0hCzeAbo"
  target="_blank"
  rel="noopener noreferrer sponsored"
  class="inline-flex items-center gap-2 mt-5 px-5 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm transition-colors shadow-sm"
>
  <span>Check Compatible SSD Options</span>
  →
</a>

<h4 class="text-xl font-bold text-slate-900 mt-8 mb-3">
  5. Your Laptop Is Getting Too Hot
</h4>

<p class="text-slate-600 leading-relaxed mb-4">
  Heat can affect sustained performance. Modern laptops can reduce performance
  when temperatures become too high in order to protect the hardware.
</p>

<p class="text-slate-600 leading-relaxed">
  Blocked vents, dust, poor airflow and demanding workloads can all contribute
  to heat. If your laptop becomes unusually hot, loud or slow during demanding
  tasks, investigate cooling before assuming the processor is simply too weak.
</p>

<div class="my-8 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
  <div class="aspect-[16/8] overflow-hidden bg-slate-100">
    <img
      src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80"
      alt="Laptop cooling and cleaning"
      class="w-full h-full object-cover"
      loading="lazy"
    />
  </div>

  <div class="p-6">
    <span class="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3">
      Cooling & Cleaning
    </span>
    <h4 class="text-xl font-bold text-slate-900 mb-2">
      Laptop Cooling & Cleaning Essentials
    </h4>
    <p class="text-sm text-slate-600 leading-relaxed mb-5">
      Dust buildup and restricted airflow can contribute to higher temperatures.
      Keeping vents and cooling areas clean, together with appropriate airflow,
      can help your laptop maintain stable performance during demanding tasks.
    </p>
    <div class="flex flex-wrap gap-3">
      <a
        href="https://link.amazon/B03iGNLS9"
        target="_blank"
        rel="noopener noreferrer sponsored"
        class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm transition-colors shadow-sm"
      >
        <span>Cleaning Product</span>
        →
      </a>
      <a
        href="https://link.amazon/B04hAdcRl"
        target="_blank"
        rel="noopener noreferrer sponsored"
        class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors shadow-sm"
      >
        <span>Cooling Product</span>
        →
      </a>
    </div>
  </div>
</div>

<h4 class="text-xl font-bold text-slate-900 mt-8 mb-3">
  6. Your Browser Has Become a Heavy Workload
</h4>

<p class="text-slate-600 leading-relaxed mb-4">
  A modern browser can become one of the most demanding applications on your
  computer when you combine dozens of tabs, web applications, video streams
  and browser extensions.
</p>

<p class="text-slate-600 leading-relaxed">
  Close tabs you no longer need and review your extensions. If performance
  improves immediately, your browser workload may be part of the problem.
</p>

<h4 class="text-xl font-bold text-slate-900 mt-8 mb-3">
  7. Background Processes Are Consuming Resources
</h4>

<p class="text-slate-600 leading-relaxed mb-4">
  Cloud synchronization, software updates, security scans and other background
  processes can temporarily consume CPU, memory, storage or network resources.
</p>

<p class="text-slate-600 leading-relaxed">
  Open your system's Task Manager or Activity Monitor and look for applications
  using unusually high amounts of CPU, memory or disk resources.
</p>

<h4 class="text-xl font-bold text-slate-900 mt-8 mb-3">
  8. Your Laptop Has Not Changed — Your Workload Has
</h4>

<p class="text-slate-600 leading-relaxed mb-4">
  This is one of the easiest problems to overlook.
</p>

<p class="text-slate-600 leading-relaxed">
  A laptop that felt fast when you purchased it may feel inadequate several
  years later because applications have become more demanding, your files have
  grown larger, or your workflow has expanded.
</p>

<div class="my-6 p-6 bg-slate-50 rounded-2xl border border-slate-200">
  <p class="text-slate-900 font-semibold mb-2">
    Ask yourself:
  </p>
  <p class="text-slate-600 leading-relaxed">
    "Is this laptop actually slow, or is it simply no longer powerful enough
    for what I need to do today?"
  </p>
</div>

<h4 class="text-xl font-bold text-slate-900 mt-8 mb-3">
  9. Software Problems Can Look Like Hardware Problems
</h4>

<p class="text-slate-600 leading-relaxed mb-4">
  Not every slowdown requires new hardware. Software conflicts, unnecessary
  applications, outdated drivers and unusual system processes can all affect
  performance.
</p>

<p class="text-slate-600 leading-relaxed">
  Keep your operating system and important software appropriately updated.
  Remove applications you no longer need and investigate unusual behavior
  before purchasing replacement hardware.
</p>

<h4 class="text-xl font-bold text-slate-900 mt-8 mb-3">
  10. Your Laptop Really May Be Ready For Replacement
</h4>

<p class="text-slate-600 leading-relaxed mb-4">
  Sometimes the honest answer is replacement.
</p>

<p class="text-slate-600 leading-relaxed">
  If your laptop has limited upgrade options, insufficient performance,
  poor battery life and struggles with the software you depend on every day,
  spending money on several small upgrades may not make financial sense.
</p>

<h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6 border-b border-slate-100 pb-3">
  What Should You Upgrade First?
</h3>

<div class="overflow-x-auto mb-8">
  <table class="w-full text-sm border-collapse">
    <thead>
      <tr class="bg-slate-900 text-white">
        <th class="text-left p-4">Problem</th>
        <th class="text-left p-4">First Thing To Check</th>
        <th class="text-left p-4">Possible Solution</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-slate-200">
        <td class="p-4">Very slow startup</td>
        <td class="p-4">Storage type</td>
        <td class="p-4">SSD upgrade</td>
      </tr>
      <tr class="border-b border-slate-200">
        <td class="p-4">Too many tabs / apps</td>
        <td class="p-4">RAM usage</td>
        <td class="p-4">RAM upgrade if supported</td>
      </tr>
      <tr class="border-b border-slate-200">
        <td class="p-4">Very hot laptop</td>
        <td class="p-4">Temperature / airflow</td>
        <td class="p-4">Cleaning and cooling improvements</td>
      </tr>
      <tr class="border-b border-slate-200">
        <td class="p-4">Storage almost full</td>
        <td class="p-4">Storage settings</td>
        <td class="p-4">Cleanup or larger drive</td>
      </tr>
      <tr>
        <td class="p-4">Everything feels outdated</td>
        <td class="p-4">Age and specifications</td>
        <td class="p-4">Compare replacement laptops</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="my-8 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
  <div class="aspect-[16/8] overflow-hidden bg-slate-100">
    <img
      src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80"
      alt="Modern laptop"
      class="w-full h-full object-cover"
      loading="lazy"
    />
  </div>

  <div class="p-6">
    <span class="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3">
      Laptop Upgrade
    </span>
    <h4 class="text-xl font-bold text-slate-900 mb-2">
      Recommended Laptop Option
    </h4>
    <p class="text-sm text-slate-600 leading-relaxed mb-4">
      If your current laptop is no longer suitable for your workload,
      compare the specifications, RAM, storage, processor and upgradeability
      before making a replacement decision.
    </p>
    <a
      href="https://link.amazon/B09seWvYF"
      target="_blank"
      rel="noopener noreferrer sponsored"
      class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm transition-colors shadow-sm"
    >
      <span>Check This Laptop on Amazon</span>
      →
    </a>
  </div>
</div>

<h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6">
  The Simple Buying Rule
</h3>

<p class="text-slate-700 leading-relaxed mb-4">
  Don't buy a new laptop simply because your current laptop feels slow.
  First identify what is causing the slowdown.
</p>

<p class="text-slate-700 leading-relaxed mb-4">
  If one inexpensive upgrade fixes the bottleneck, upgrading can be the smarter
  choice. If several major components are limiting your experience at the same
  time, replacement may provide better long-term value.
</p>

<div class="my-8 p-6 bg-blue-600 text-white rounded-2xl shadow-xl">
  <h4 class="text-xl font-bold mb-3">
    Before You Spend Money
  </h4>
  <p class="text-blue-100 leading-relaxed">
    Check your storage, RAM usage, startup applications, background processes
    and temperatures first. Five minutes of diagnosis can prevent an unnecessary
    purchase.
  </p>
</div>

<h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6">
  Final Verdict
</h3>

<p class="text-slate-700 leading-relaxed mb-4">
  A slow laptop is not automatically a dead laptop. In many cases, the right
  maintenance or targeted upgrade can extend its useful life.
</p>

<p class="text-slate-700 leading-relaxed">
  The smartest purchase is the one that solves your specific bottleneck.
  Diagnose first, compare second, and spend third.
</p>

<div class="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200">
  <p class="text-xs text-slate-500 leading-relaxed">
    <strong>Affiliate Disclosure:</strong>
    Some links in this article may be affiliate links. If you purchase through
    an affiliate link, HB GrowthSyncro may earn a commission at no additional
    cost to you. We recommend choosing products based on your actual needs,
    compatibility and budget.
  </p>
</div>
`,
  },
  {
    id: "modern-wardrobe-grooming-essentials-2026",
    title:
      "The Upgrade Matrix: 5 Style & Self-Care Essentials Every Working Professional Needs",
    author: "HB GrowthSyncro",
    date: "August 10, 2026",
    category: "Tech & Lifestyle",
    readTime: "6 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    gridImages: {
      clothing:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80",
      watch:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=600&q=80",
      grooming:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      footwear:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
    },
    excerpt:
      "An actionable guide to building a versatile wardrobe, clean grooming routine and practical everyday setup without overspending.",
    content: `
  <p class="mb-5 text-slate-700 leading-relaxed">
    Your professional appearance does not need to be expensive to be effective.
    What matters more is whether the things you own fit your routine, work well
    together and make everyday life easier.
  </p>

  <p class="mb-5 text-slate-700 leading-relaxed">
    Whether you work in an office, run a business, attend meetings, work remotely
    or spend your day on video calls, a few carefully selected essentials can
    remove unnecessary daily decisions.
  </p>

  <div class="my-8 p-6 bg-slate-900 text-slate-100 rounded-2xl border-l-4 border-blue-500">
    <p class="text-base font-medium italic">
      "The goal isn't to own more. The goal is to own the things you repeatedly need."
    </p>
  </div>

  <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6">
    5 High-Impact Essentials
  </h3>

  <h4 class="text-xl font-bold text-slate-900 mt-6 mb-3">
    1. Versatile Workwear
  </h4>

  <p class="text-slate-600 leading-relaxed mb-4">
    A few well-fitting shirts, polos or simple professional outfits can cover
    a surprisingly large number of situations.
  </p>

  <p class="text-slate-600 leading-relaxed">
    Neutral colours such as navy, white, charcoal and olive are easy to combine
    with trousers, jeans and other everyday clothing.
  </p>

  <a
    href="YOUR_CLOTHING_AFFILIATE_LINK"
    target="_blank"
    rel="noopener noreferrer sponsored"
    class="inline-flex items-center gap-2 mt-4 px-5 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm"
  >
    Shop Workwear Options →
  </a>

  <h4 class="text-xl font-bold text-slate-900 mt-8 mb-3">
    2. A Simple Everyday Watch
  </h4>

  <p class="text-slate-600 leading-relaxed mb-4">
    A simple watch can complement professional and casual clothing without
    requiring constant attention.
  </p>

  <p class="text-slate-600 leading-relaxed">
    Look for a design that matches most of your wardrobe instead of choosing
    something that only works with one outfit.
  </p>

  <a
    href="YOUR_WATCH_AFFILIATE_LINK"
    target="_blank"
    rel="noopener noreferrer sponsored"
    class="inline-flex items-center gap-2 mt-4 px-5 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm"
  >
    Explore Everyday Watches →
  </a>

  <h4 class="text-xl font-bold text-slate-900 mt-8 mb-3">
    3. A Simple Grooming Routine
  </h4>

  <p class="text-slate-600 leading-relaxed mb-4">
    You do not need a bathroom full of products. A simple routine built around
    cleansing, moisturising and appropriate sun protection may be easier to
    maintain consistently.
  </p>

  <a
    href="YOUR_GROOMING_AFFILIATE_LINK"
    target="_blank"
    rel="noopener noreferrer sponsored"
    class="inline-flex items-center gap-2 mt-4 px-5 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm"
  >
    Explore Grooming Essentials →
  </a>

  <h4 class="text-xl font-bold text-slate-900 mt-8 mb-3">
    4. Comfortable Footwear
  </h4>

  <p class="text-slate-600 leading-relaxed mb-4">
    If you spend long hours walking, commuting or standing, comfort should be
    part of your purchasing decision rather than an afterthought.
  </p>

  <p class="text-slate-600 leading-relaxed">
    Look for footwear appropriate for your actual environment and choose fit
    and comfort before appearance alone.
  </p>

  <a
    href="YOUR_FOOTWEAR_AFFILIATE_LINK"
    target="_blank"
    rel="noopener noreferrer sponsored"
    class="inline-flex items-center gap-2 mt-4 px-5 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm"
  >
    View Comfortable Footwear →
  </a>

  <h4 class="text-xl font-bold text-slate-900 mt-8 mb-3">
    5. A Small Daily-Carry Setup
  </h4>

  <p class="text-slate-600 leading-relaxed">
    A useful bag, charging cable, power bank, notebook, headphones and other
    frequently used accessories can remove small frustrations from your day.
  </p>

  <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6">
    What Should You Buy First?
  </h3>

  <div class="my-6 p-6 bg-slate-50 rounded-2xl border border-slate-200">
    <p class="text-slate-700 leading-relaxed mb-3">
      <strong>Need to look more professional?</strong> Start with versatile clothing.
    </p>
    <p class="text-slate-700 leading-relaxed mb-3">
      <strong>Spend all day walking?</strong> Prioritise comfortable footwear.
    </p>
    <p class="text-slate-700 leading-relaxed mb-3">
      <strong>Attend meetings frequently?</strong> Choose simple accessories that
      complement multiple outfits.
    </p>
    <p class="text-slate-700 leading-relaxed">
      <strong>Want a simpler routine?</strong> Buy fewer products that you will
      actually use consistently.
    </p>
  </div>

  <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-6">
    Final Thought
  </h3>

  <p class="text-slate-700 leading-relaxed">
    The best personal upgrade is rarely the most expensive one. Choose products
    that solve a repeated problem, fit your lifestyle and remain useful long
    after the excitement of buying them disappears.
  </p>

  <div class="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200">
    <p class="text-xs text-slate-500 leading-relaxed">
      <strong>Affiliate Disclosure:</strong> Some links in this article may be
      affiliate links. If you purchase through them, we may earn a commission
      at no additional cost to you.
    </p>
  </div>
`,
  },
  {
    id: "developer-creator-playbook-2026",
    title:
      "The 2026 Developer & Creator Playbook: Building Modern Websites & Staying Sharp",
    author: "HB GrowthSyncro",
    date: "August 8, 2026",
    category: "Tech & Lifestyle",
    readTime: "6 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Discover why modern websites need speed, analytics and mobile-first design, along with practical tools that help developers and creators stay productive.",
    content: `
  <p class="mb-5 text-slate-700 leading-relaxed">
    Building a website today is very different from simply putting a few pages
    online. Visitors expect fast loading, clear navigation, mobile-friendly
    layouts and an obvious reason to stay.
  </p>

  <p class="mb-5 text-slate-700 leading-relaxed">
    At the same time, developers and creators need reliable hardware and tools
    that allow them to work efficiently without constantly fighting their setup.
  </p>

  <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">
    Why Your Business Needs a Fast Website
  </h3>

  <h4 class="text-lg font-semibold text-slate-900 mt-4 mb-2">
    Instant Trust & Credibility
  </h4>

  <p class="mb-4 text-slate-700 leading-relaxed">
    A clean, responsive website can make a business appear more established and
    easier to trust. Slow pages, confusing navigation and outdated layouts can
    create unnecessary friction.
  </p>

  <h4 class="text-lg font-semibold text-slate-900 mt-6 mb-2">
    Analytics & Measurement
  </h4>

  <p class="mb-4 text-slate-700 leading-relaxed">
    Analytics tools can help businesses understand where visitors come from,
    which pages they use and where potential customers leave the website.
  </p>

  <h4 class="text-lg font-semibold text-slate-900 mt-6 mb-2">
    Continuous Lead Capture
  </h4>

  <p class="mb-4 text-slate-700 leading-relaxed">
    Contact forms, click-to-call buttons and WhatsApp integrations can give
    visitors multiple ways to start a conversation.
  </p>

  <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">
    The Developer Workstation
  </h3>

  <p class="mb-4 text-slate-700 leading-relaxed">
    Coding, testing, designing and researching often require long hours at a
    desk. A sensible workstation can make those hours more comfortable.
  </p>

  <h4 class="text-lg font-semibold text-slate-900 mt-6 mb-2">
    Laptop & Monitor
  </h4>

  <p class="mb-4 text-slate-700 leading-relaxed">
    Prioritise the processor, RAM, storage and display quality according to the
    software you actually use rather than simply buying the highest specification.
  </p>

  <a
    href="YOUR_LAPTOP_AFFILIATE_LINK"
    target="_blank"
    rel="noopener noreferrer sponsored"
    class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm"
  >
    Check Developer Laptop Options →
  </a>

  <h4 class="text-lg font-semibold text-slate-900 mt-8 mb-2">
    Ergonomic Accessories
  </h4>

  <p class="mb-4 text-slate-700 leading-relaxed">
    A comfortable chair, suitable desk height, external keyboard, mouse and
    monitor position can make long work sessions easier to manage.
  </p>

  <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">
    Final Thoughts
  </h3>

  <p class="mb-4 text-slate-700 leading-relaxed">
    A successful online presence is not just about launching a website. It is
    about combining speed, usability, useful content, analytics and a workflow
    that lets you keep improving.
  </p>

  <div class="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200">
    <p class="text-xs text-slate-500 leading-relaxed">
      <strong>Affiliate Disclosure:</strong> Some links in this article may be
      affiliate links. If you purchase through them, we may earn a commission
      at no additional cost to you.
    </p>
  </div>
`,
  },
  {
    id: "choose-website-developer",
    title:
      "How to Choose the Best Website Developer for Your Local Business in 2026",
    author: "HB GrowthSyncro",
    date: "August 5, 2026",
    category: "Web Development",
    readTime: "5 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Not all websites make money. Learn the crucial technical and business factors to check before hiring a website developer.",
    content: `
  <p class="mb-5 text-slate-700 leading-relaxed">
    Getting a website developed for your business is an investment. The cheapest
    option is not always the least expensive option in the long run.
  </p>

  <p class="mb-5 text-slate-700 leading-relaxed">
    A website that looks attractive but loads slowly, performs poorly on mobile
    devices or gives visitors no clear way to contact you can become an expensive
    brochure instead of a business tool.
  </p>

  <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">
    1. Mobile-First Responsiveness
  </h3>

  <p class="mb-4 text-slate-700 leading-relaxed">
    Your website should work properly on phones, tablets and desktops.
    Navigation, buttons, forms, images and text should remain easy to use
    regardless of screen size.
  </p>

  <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">
    2. Website Speed
  </h3>

  <p class="mb-4 text-slate-700 leading-relaxed">
    Large images, unnecessary scripts and poorly implemented features can
    increase loading times. Ask how the developer plans to optimise performance.
  </p>

  <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">
    3. Conversion-Focused Design
  </h3>

  <p class="mb-4 text-slate-700 leading-relaxed">
    Your website should make the next step obvious. Depending on the business,
    that could be calling, sending a WhatsApp message, booking an appointment,
    submitting an enquiry or purchasing a product.
  </p>

  <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">
    4. SEO-Friendly Structure
  </h3>

  <p class="mb-4 text-slate-700 leading-relaxed">
    A website should have sensible page structure, crawlable content, descriptive
    titles, useful internal links and a technical foundation that supports search.
  </p>

  <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">
    5. Ownership & Future Support
  </h3>

  <p class="mb-4 text-slate-700 leading-relaxed">
    Before signing a contract, understand who owns the domain, hosting,
    source code, design assets and analytics accounts. Also ask what happens
    when you need changes later.
  </p>

  <div class="my-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
    <h4 class="font-bold text-blue-900 mb-2">
      Quick checklist
    </h4>
    <p class="text-blue-800 text-sm leading-relaxed">
      Ask about mobile responsiveness, speed, SEO, conversion tracking,
      ownership, security, backups and ongoing maintenance.
    </p>
  </div>

  <div class="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200">
    <p class="text-xs text-slate-500 leading-relaxed">
      <strong>HB GrowthSyncro:</strong> If you are comparing website development
      options for your business, evaluate the entire system rather than choosing
      only by the initial price.
    </p>
  </div>
`,
  },
  {
    id: "google-maps-top-3",
    title:
      "How to Improve Your Google Maps Visibility and Get More Local Leads",
    author: "HB GrowthSyncro",
    date: "August 3, 2026",
    category: "Local SEO",
    readTime: "7 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "A practical local SEO guide covering Google Business Profile optimisation, reviews, local relevance and the signals that can help businesses improve visibility.",
    content: `
  <p class="mb-5 text-slate-700 leading-relaxed">
    When someone searches for a nearby service, appearing prominently in local
    search results can put your business in front of people who already have
    buying intent.
  </p>

  <p class="mb-5 text-slate-700 leading-relaxed">
    Local SEO is not simply about adding keywords to a business description.
    It involves making your business information accurate, useful and consistent
    while building genuine local relevance.
  </p>

  <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">
    Complete Your Business Profile
  </h3>

  <p class="mb-4 text-slate-700 leading-relaxed">
    Use the most appropriate business category, keep your contact information
    accurate and make sure your opening hours are maintained.
  </p>

  <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">
    Use High-Quality Business Photos
  </h3>

  <p class="mb-4 text-slate-700 leading-relaxed">
    Real photographs can help potential customers understand what your business
    looks like and what experience they can expect.
  </p>

  <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">
    Build Genuine Reviews
  </h3>

  <p class="mb-4 text-slate-700 leading-relaxed">
    Encourage real customers to leave honest feedback. Do not manufacture
    reviews or pressure customers into posting misleading experiences.
  </p>

  <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">
    Create Useful Local Content
  </h3>

  <p class="mb-4 text-slate-700 leading-relaxed">
    Publish useful pages and articles that answer questions your local customers
    actually ask. Connect those pages through sensible internal links.
  </p>

  <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">
    Measure Calls and Enquiries
  </h3>

  <p class="mb-4 text-slate-700 leading-relaxed">
    Rankings are useful, but the ultimate goal for many local businesses is
    qualified calls, messages, bookings and enquiries.
  </p>

  <div class="mt-8 p-6 bg-blue-600 text-white rounded-2xl">
    <h4 class="font-bold text-xl mb-2">
      Local SEO Is A Long-Term Asset
    </h4>
    <p class="text-blue-100 leading-relaxed">
      Focus on useful information, accurate business details, genuine customer
      experiences and a website that makes contacting your business easy.
    </p>
  </div>
`,
  },
  {
    id: "whatsapp-lead-funnel",
    title:
      "Why WhatsApp Can Be a Powerful Alternative to Traditional Contact Forms",
    author: "HB GrowthSyncro",
    date: "August 1, 2026",
    category: "Lead Generation",
    readTime: "5 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Learn how strategically placed WhatsApp conversations can reduce friction and help businesses respond to website visitors faster.",
    content: `
  <p class="mb-5 text-slate-700 leading-relaxed">
    A contact form asks a visitor to type information, submit it and then wait
    for a response. For some businesses that works perfectly. For others,
    especially businesses that already communicate with customers through
    WhatsApp, there may be a simpler path.
  </p>

  <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">
    Reduce The Number of Steps
  </h3>

  <p class="mb-4 text-slate-700 leading-relaxed">
    A clearly labelled WhatsApp button can give a visitor a direct way to ask
    a question without navigating through multiple pages.
  </p>

  <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">
    Set The Right Expectations
  </h3>

  <p class="mb-4 text-slate-700 leading-relaxed">
    Tell visitors what will happen after they start a conversation. For example,
    you can explain whether someone will respond during business hours and what
    information they should provide.
  </p>

  <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">
    Don't Replace Every Form
  </h3>

  <p class="mb-4 text-slate-700 leading-relaxed">
    WhatsApp is not automatically better for every business. Complex enquiries,
    detailed applications and structured information may still be better handled
    through forms.
  </p>

  <div class="my-8 p-6 bg-emerald-50 border border-emerald-100 rounded-2xl">
    <h4 class="font-bold text-emerald-900 mb-2">
      Better approach
    </h4>
    <p class="text-emerald-800 leading-relaxed">
      Give visitors the communication method that best matches the type of
      question they are trying to ask.
    </p>
  </div>

  <h3 class="text-xl font-bold text-slate-900 mt-8 mb-3">
    Final Thought
  </h3>

  <p class="mb-4 text-slate-700 leading-relaxed">
    A good lead funnel is not about adding more buttons. It is about removing
    unnecessary friction between a visitor's question and the answer they need.
  </p>
`,
  },
];

const categories = [
  "All",
  "Web Development",
  "Local SEO",
  "Lead Generation",
  "Technology",
  "Tech & Lifestyle",
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeArticle, setActiveArticle] = useState(null);

  const filteredBlogs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return blogs.filter((blog) => {
      const searchableText = `
        ${blog.title}
        ${blog.excerpt}
        ${blog.category}
        ${blog.content}
      `.toLowerCase();

      const matchesSearch =
        query === "" || searchableText.includes(query);

      const matchesCategory =
        selectedCategory === "All" ||
        blog.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleSelectArticle = (post) => {
    setActiveArticle(post);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleBackToBlogs = () => {
    setActiveArticle(null);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const createWhatsAppLink = (title) => {
    const message = `Hi HB GrowthSyncro, I have questions about the article: "${title}"`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
  };

  const relatedArticles = activeArticle
    ? blogs
        .filter(
          (blog) =>
            blog.id !== activeArticle.id &&
            blog.category === activeArticle.category
        )
        .slice(0, 3)
    : [];

  return (
    <section className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {activeArticle ? (
          /* =========================================================
             SINGLE ARTICLE VIEW (RESPONSIVE GRID)
             ========================================================= */
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_240px] gap-8 items-start">
            {/* LEFT STICKY AD (Hidden on Mobile) */}
            <aside className="hidden lg:block sticky top-8 self-start w-full">
              <AdSense
                key={`left-${activeArticle.id}`}
                slot="3135331154"
                format="vertical"
              />
            </aside>

            {/* MAIN ARTICLE CONTENT */}
            <article className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm max-w-4xl mx-auto w-full">
              <button
                onClick={handleBackToBlogs}
                className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 text-sm font-semibold transition cursor-pointer"
              >
                <FiArrowLeft className="w-4 h-4" />
                Back to Blogs
              </button>

              <div>
                <div className="mb-5">
                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                    <FiTag className="w-3 h-3" />
                    {activeArticle.category}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
                  {activeArticle.title}
                </h1>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-500 mb-8">
                  <span>
                    By{" "}
                    <strong className="text-slate-800">
                      {activeArticle.author}
                    </strong>
                  </span>
                  <span>•</span>
                  <span>{activeArticle.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-slate-600 font-medium">
                    <FiClock className="w-3.5 h-3.5" />
                    {activeArticle.readTime}
                  </span>
                </div>
              </div>

              <div className="mb-8 rounded-3xl overflow-hidden aspect-[16/9] w-full border border-slate-100 shadow-lg bg-slate-100">
                <img
                  src={activeArticle.imageUrl}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {activeArticle.gridImages && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
                  {Object.entries(activeArticle.gridImages).map(
                    ([key, image]) => (
                      <div
                        key={key}
                        className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100"
                      >
                        <img
                          src={image}
                          alt={`${key} related to ${activeArticle.title}`}
                          loading="lazy"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />

                        <div className="absolute bottom-2 left-2">
                          <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold uppercase tracking-wider">
                            {key}
                          </span>
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}

              <div className="mb-10 p-6 sm:p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm">
                <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-medium">
                  {activeArticle.excerpt}
                </p>
              </div>

              {/* IN-ARTICLE AD UNIT */}
              <AdSense
                slot="4436678220"
                format="fluid"
                layout="in-article"
              />

              <div
                className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-base sm:text-lg mt-6"
                dangerouslySetInnerHTML={{
                  __html: activeArticle.content,
                }}
              />

              {/* SECOND IN-ARTICLE AD UNIT */}
              <AdSense
                slot="4436678220"
                format="fluid"
                layout="in-article"
              />

              <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-600/20">
                <span className="inline-block text-xs font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full mb-4">
                  HB GrowthSyncro
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
                  Need Help Turning Your Website Into A Growth Tool?
                </h3>

                <p className="text-blue-100 leading-relaxed mb-6 max-w-2xl">
                  HB GrowthSyncro helps businesses build modern websites, improve
                  search visibility and create practical lead-generation systems.
                </p>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    `Hi HB GrowthSyncro, I read your article "${activeArticle.title}" and would like to discuss my business website.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-blue-600 hover:bg-slate-100 font-bold text-sm transition shadow-md"
                >
                  <FiMessageSquare className="w-4 h-4" />
                  Discuss Your Project on WhatsApp
                </a>
              </div>

              {relatedArticles.length > 0 && (
                <div className="mt-14">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                        Keep Reading
                      </span>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                        Related Articles
                      </h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedArticles.map((post) => (
                      <article
                        key={post.id}
                        className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group"
                      >
                        <button
                          onClick={() => handleSelectArticle(post)}
                          className="w-full text-left cursor-pointer"
                        >
                          <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                            <img
                              src={post.imageUrl}
                              alt={post.title}
                              loading="lazy"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>

                          <div className="p-5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                              {post.category}
                            </span>

                            <h4 className="text-lg font-bold text-slate-900 mt-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                              {post.title}
                            </h4>

                            <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-slate-500">
                              Read Article
                              <FiChevronRight className="w-3 h-3" />
                            </span>
                          </div>
                        </button>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={handleBackToBlogs}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 text-sm font-semibold transition cursor-pointer"
                >
                  <FiArrowLeft className="w-4 h-4" />
                  Back to All Articles
                </button>

                <a
                  href={createWhatsAppLink(activeArticle.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition shadow-md shadow-emerald-600/20"
                >
                  <FiMessageSquare className="w-4 h-4" />
                  Discuss Article on WhatsApp
                </a>
              </div>
            </article>

            {/* RIGHT STICKY AD (Hidden on Mobile) */}
            <aside className="hidden lg:block sticky top-8 self-start w-full">
              <AdSense
                key={`right-${activeArticle.id}`}
                slot="3810182216"
                format="auto"
              />
            </aside>
          </div>
        ) : (
          /* =========================================================
             BLOG LISTING PAGE (RESPONSIVE GRID)
             ========================================================= */
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_240px] gap-8 items-start">
            {/* LEFT STICKY AD CONTAINER */}
            <aside className="hidden lg:block sticky top-8 self-start w-full">
              <AdSense
                key="listing-left"
                slot="3135331154"
                format="vertical"
              />
            </aside>

            {/* MAIN BLOG INDEX AREA */}
            <div className="space-y-12 max-w-4xl mx-auto w-full">
              <div className="text-center">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4 border border-blue-100">
                  Growth Insights & Guides
                </span>

                <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Our <span className="text-blue-600">Blogs</span>
                </h1>

                <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
                  Practical technology guides, SEO strategies, web development
                  insights and buying advice designed to help you make better
                  decisions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />

                  <input
                    type="text"
                    placeholder="Search articles on technology, SEO, websites..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                        selectedCategory === cat
                          ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                          : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-500">
                  Showing{" "}
                  <strong className="text-slate-800">
                    {filteredBlogs.length}
                  </strong>{" "}
                  article
                  {filteredBlogs.length !== 1 ? "s" : ""}
                </p>

                {(searchQuery || selectedCategory !== "All") && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All");
                    }}
                    className="text-sm text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
                  >
                    Clear filters
                  </button>
                )}
              </div>

              {filteredBlogs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredBlogs.map((post) => (
                    <article
                      key={post.id}
                      className="bg-white rounded-[24px] border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        <button
                          onClick={() => handleSelectArticle(post)}
                          className="w-full aspect-[16/9] overflow-hidden bg-slate-100 cursor-pointer relative text-left"
                        >
                          <img
                            src={post.imageUrl}
                            alt={post.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />

                          <span className="absolute top-4 left-4 inline-flex items-center gap-1 text-xs font-bold text-blue-600 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                            <FiTag className="w-3 h-3" />
                            {post.category}
                          </span>
                        </button>

                        <div className="p-6">
                          <div className="flex items-center justify-between text-xs font-medium text-slate-400 mb-3">
                            <span>{post.date}</span>

                            <span className="flex items-center gap-1">
                              <FiClock className="w-3.5 h-3.5" />
                              {post.readTime}
                            </span>
                          </div>

                          <button
                            onClick={() => handleSelectArticle(post)}
                            className="text-left cursor-pointer"
                          >
                            <h2 className="text-xl font-bold text-slate-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                              {post.title}
                            </h2>
                          </button>

                          <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>

                      <div className="px-6 pb-6 pt-0 flex items-center gap-3">
                        <button
                          onClick={() => handleSelectArticle(post)}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-sm cursor-pointer"
                        >
                          <FiBookOpen className="w-3.5 h-3.5" />
                          <span>Read Article</span>
                        </button>

                        <a
                          href={createWhatsAppLink(post.title)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-xs transition-colors"
                        >
                          <FiMessageSquare className="w-3.5 h-3.5" />
                          <span>Discuss</span>
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="max-w-2xl mx-auto text-center py-16 px-6 bg-white rounded-3xl border border-slate-200">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                    <FiSearch className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    No articles found
                  </h3>

                  <p className="text-slate-500 mt-2 leading-relaxed">
                    Try searching for another technology, SEO, web development or
                    business topic.
                  </p>

                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All");
                    }}
                    className="mt-6 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm cursor-pointer"
                  >
                    Show All Articles
                  </button>
                </div>
              )}

              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                  HB GrowthSyncro
                </span>

                <h2 className="text-2xl sm:text-3xl font-extrabold mt-2">
                  Have A Website Or SEO Question?
                </h2>

                <p className="text-slate-400 mt-3 max-w-2xl mx-auto leading-relaxed">
                  Talk with HB GrowthSyncro about websites, SEO, local visibility
                  and digital growth strategies for your business.
                </p>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    "Hi HB GrowthSyncro, I found your blog and would like to discuss my website and SEO requirements."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition"
                >
                  <FiMessageSquare className="w-4 h-4" />
                  Talk on WhatsApp
                </a>
              </div>
            </div>

            {/* RIGHT STICKY AD CONTAINER */}
            <aside className="hidden lg:block sticky top-8 self-start w-full">
              <AdSense
                key="listing-right"
                slot="3810182216"
                format="auto"
              />
            </aside>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;