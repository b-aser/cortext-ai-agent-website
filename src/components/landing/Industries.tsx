"use client";

import { useState } from "react";

const TABS = [
  {
    id: "ecom",
    label: "E-Commerce & Retail",
    desc: "Shopping experiences within AI-powered cases recommendations and support.",
    metric: { label: "Conversions", value: "+38%" },
    bars: [40, 65, 30, 78, 52, 95, 70],
  },
  {
    id: "support",
    label: "Customer Support",
    desc: "Always-on agents that triage tickets, draft replies, and escalate gracefully.",
    metric: { label: "Tickets resolved", value: "+72%" },
    bars: [50, 70, 45, 85, 60, 90, 80],
  },
  {
    id: "finance",
    label: "Finance & Banking",
    desc: "Compliant AI for KYC, fraud detection, and personalized banking insights.",
    metric: { label: "Cost saved", value: "−41%" },
    bars: [35, 55, 75, 48, 88, 64, 72],
  },
];

export function Industries() {
  const [active, setActive] = useState(TABS[0].id);
  const current = TABS.find((t) => t.id === active) ?? TABS[0];

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
          {/* Left: dark industries card with 3D shapes */}
          <div className="relative overflow-hidden rounded-3xl bg-forest p-7 lg:col-span-6 lg:p-10">
            {/* 3D cubes top-right */}
            <Cubes />

            <ul className="relative z-10 mt-44 space-y-4">
              {TABS.map((t) => {
                const isActive = t.id === active;
                return (
                  <li key={t.id}>
                    <button
                      onClick={() => setActive(t.id)}
                      className={`group flex w-full items-center justify-between text-left font-serif text-[1.6rem] leading-none tracking-tight transition-all sm:text-[2rem] ${
                        isActive ? "text-cream" : "text-cream/40 hover:text-cream/70"
                      }`}
                    >
                      <span>{t.label}</span>
                      <span
                        className={`ml-3 inline-block h-[1px] origin-right transition-all duration-500 ${
                          isActive ? "w-12 bg-cream" : "w-0 bg-cream/0"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Bottom: mini description + chart */}
            <div className="relative z-10 mt-10 flex items-end justify-between gap-4 border-t border-cream/10 pt-6">
              <div className="max-w-[58%]">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cream/55">
                  {current.label}
                </p>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-cream/75">
                  {current.desc}
                </p>
              </div>

              <div className="w-[38%] rounded-xl bg-cream/8 p-3 backdrop-blur">
                <div className="mb-1 flex items-center justify-between text-[0.6rem] uppercase tracking-wider text-cream/55">
                  <span>{current.metric.label}</span>
                  <span className="text-green-accent">{current.metric.value}</span>
                </div>
                <div className="flex h-12 items-end gap-1">
                  {current.bars.map((h, i) => (
                    <span
                      key={`${active}-${i}`}
                      className="flex-1 origin-bottom rounded-sm bg-cream/70"
                      style={{
                        height: `${h}%`,
                        animation: `barGrow 0.7s ${i * 0.05}s cubic-bezier(0.16,1,0.3,1) backwards`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: testimonials */}
          
        </div>
      </div>
    </section>
  );
}



function Cubes() {
  // 3D-looking cube stack drawn in CSS — no images needed
  return (
    <div
      aria-hidden
      className="absolute right-2 top-2 h-44 w-56 select-none"
      style={{ perspective: 800 }}
    >
      <div className="relative h-full w-full animate-bob-3d" style={{ transformStyle: "preserve-3d" }}>
        {/* white cube back */}
        <span
          className="absolute right-12 top-2 h-24 w-24 rounded-md bg-[#F1EBDE]"
          style={{
            transform: "rotateX(20deg) rotateY(-22deg)",
            boxShadow:
              "inset -8px -8px 0 rgba(0,0,0,0.06), 0 30px 50px -25px rgba(0,0,0,0.45)",
          }}
        />
        {/* orange cube */}
        <span
          className="absolute right-2 top-16 h-24 w-24 rounded-md bg-[#E0552E]"
          style={{
            transform: "rotateX(16deg) rotateY(-20deg) rotateZ(8deg)",
            boxShadow:
              "inset -10px -10px 0 rgba(0,0,0,0.18), 0 30px 50px -25px rgba(224,85,46,0.6)",
          }}
        />
        {/* small white cube */}
        <span
          className="absolute right-24 top-20 h-16 w-16 rounded-md bg-[#F8F2E5]"
          style={{
            transform: "rotateX(22deg) rotateY(-26deg)",
            boxShadow:
              "inset -7px -7px 0 rgba(0,0,0,0.07), 0 18px 30px -18px rgba(0,0,0,0.4)",
          }}
        />
      </div>
    </div>
  );
}
