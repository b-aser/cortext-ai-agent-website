"use client";

import { BarChart, Rocket, Sparkle, Target } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    no: "01",
    title: "Define",
    desc: "Set AI agent purpose supporting automation, analytics or a chatbot for instant customer assistance.",
    icon: <Target size={30} />,
  },
  {
    no: "02",
    title: "Deploy",
    desc: "Integrate your AI agent with websites, apps, and messaging platforms connect with WhatsApp, Slack.",
    icon: <Rocket size={30} />,
  },
  {
    no: "03",
    title: "Customize",
    desc: "Train your AI with set workflows, and fine-tune responses personalize tone, FAQs, and industry.",
    icon: <Sparkle size={30} />,
  },
  {
    no: "04",
    title: "Optimize",
    desc: "Monitor performance, analyze data, and improve AI responses use insights to refine accuracy and enhance.",
    icon: <BarChart size={30} />,
  },
];

function StepCard({ step }: { step: (typeof STEPS)[0] }) {
  return (
    <article className="flex flex-col max-w-md mx-auto gap-4 justify-center group relative overflow-hidden rounded-2xl border border-white/10 bg-black/70 p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_50px_-25px_rgba(0,0,0,0.4)]">
      <div className="flex items-start justify-between">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-white">
          {step.icon}
        </span>
        <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-white/40">
          {step.no}
        </span>
      </div>

      <h3 className="mt-5 text-[1.1rem] font-semibold text-white">
        {step.title}
      </h3>
      <p className="mt-2 text-[0.85rem] leading-relaxed text-white/80">
        {step.desc}
      </p>

      {/* Hover glow accent */}
      <span
        aria-hidden
        className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white/0 transition-colors duration-700 group-hover:bg-white/10"
      />
    </article>
  );
}


export function Workflow() {


  return (
    // <section id="workflow" className="relative overflow-hidden pt-24 pb-16 bg-cream-dark">
    //   <Image src="/hand.png" width={580} height={500} alt="hand-keyboard" className="absolute top-100  md:inset-0 m-auto z-0 " />
    //   <div className="mx-auto max-w-7xl lg:px-10 my-30">
    //     <div className="grid grid-cols-1 items-center">

    //       <div className="lg:col-span-12">
    //         <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
    //           {STEPS.map((step, i) => (
    //             <article
    //               key={step.no}
    //               className={`group relative overflow-hidden rounded-2xl border border-forest/12 bg-black/50 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_25px_50px_-25px_rgba(28,61,15,0.4)] ${i === 1+2 ? "sm:translate-y-4" : ""
    //                 } ${i === 3 ? "sm:-translate-y-4" : ""}`}
    //             >
    //               <div className="flex items-start justify-between">
    //                 <span className="grid h-10 w-10 place-items-center rounded-xl text-white text-base">
    //                   {step.icon}
    //                 </span>
    //                 <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-white">
    //                   {step.no}
    //                 </span>
    //               </div>
    //               <h3 className="mt-5 text-[1.1rem] font-semibold text-white">
    //                 {step.title}
    //               </h3>
    //               <p className="mt-2 text-[0.85rem] leading-relaxed text-white">
    //                 {step.desc}
    //               </p>

    //               <span
    //                 aria-hidden
    //                 className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-amber-accent/0 transition-colors duration-700 group-hover:bg-amber-accent/10"
    //               />
    //             </article>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section id="workflow" className="relative pt-24 pb-16 max-w-6xl mx-auto my-20">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 p-4 relative">

        <Image src="/hand.png" width={680} height={500} alt="hand-keyboard" className="absolute top-100  md:inset-0 m-auto z-0 " />
        {/* Empty top-left cell */}
        <div className="invisible hidden md:block" />

        {/* Deploy — top right */}
        <StepCard step={STEPS[0]} />

        {/* Define — bottom left */}
        <StepCard step={STEPS[1]} />

        {/* Customize — bottom middle */}
        <StepCard step={STEPS[2]} />

        {/* Optimize — bottom right */}
        <StepCard step={STEPS[3]} />

        {/* Empty bottom-left placeholder to push Optimize to col 2 */}
        <div className="invisible hidden md:block" />
      </div>
    </section>

  );
}
