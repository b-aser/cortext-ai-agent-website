"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Lightbulb, Rocket, MessageCircle, Bot, ImageIcon, OctagonAlert } from "lucide-react"

const AGENTS = [
  {
    title: "Conversational\nAI Agents",
    desc: "AI-powered chatbots and virtual assistants that engage users via text or voice.",
    icon: MessageCircle,
  },
  {
    title: "Autonomous\nAI Agents",
    desc: "Self-operating AI systems that make decisions and take actions independently.",
    icon: Bot,
  },
  {
    title: "Image generator\nAI Agents",
    desc: "AI models that generate content, including text, images, music, and code.",
    icon: ImageIcon,
  },
  {
    title: "Decision-Making\nAI Agents",
    desc: "Supercharge your sales with our powerful and intuitive sales platform.",
    icon: OctagonAlert,
  },
  {
    title: "Decision-Making\nAI Agents",
    desc: "Supercharge your sales with our powerful and intuitive sales platform.",
    icon: OctagonAlert,
  },
  {
    title: "Decision-Making\nAI Agents",
    desc: "Supercharge your sales with our powerful and intuitive sales platform.",
    icon: OctagonAlert,
  },
];




export function AgentTypes() {
  const [index, setIndex] = useState(0);

  const visibleCards = 4;

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % AGENTS.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + AGENTS.length) % AGENTS.length);
  };

  const displayedAgents = Array.from(
    { length: visibleCards },
    (_, i) => AGENTS[(index + i) % AGENTS.length],
  );

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-white pt-14 lg:pt-20 pb-10"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="mx-auto max-w-4xl text-center font-serif text-[2.4rem] leading-[1.05] tracking-[-0.02em] text-forest sm:text-[3.2rem] lg:text-[3.8rem]">
          Which AI Agent is{" "}
          <InlineCircle color="bg-green-accent/85" icon={<Lightbulb />} /> right for you?
          <br />
          Boost efficiency, automate tasks, and{" "}
          <InlineCircle color="bg-amber-accent" icon={<Rocket />} /> drive innovation
          today!
        </h2>

        {/* Cards */}
        <div className="relative mt-16 overflow-hidden">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {displayedAgents.map((agent, idx) => (
              <article
                key={`${agent.title}-${idx}`}
                className="group relative flex flex-col rounded-3xl  p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-cream/10 mt-4"
              >
                {/* Icon */}
                <div className="mb-5 grid h-16 w-16 place-items-center rounded-2xl  ">
                  <agent.icon className="h-10 w-10 text-forest" />
                </div>

                {/* Title */}
                <h3 className="text-[1.5rem] font-medium leading-snug text-forest">
                  {agent.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-[0.92rem] font-normal leading-relaxed text-forest/65">
                  {agent.desc}
                </p>

                {/* CTA */}
                <button className="tracking-wide mt-6 inline-flex items-center gap-2 font-medium text-forest text-xs transition-all hover:gap-3 hover:underline">
                  Explore →
                </button>
              </article>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={prevSlide}
            className="rounded-full border border-forest/10 px-5 py-2 text-sm font-medium text-forest transition hover:bg-forest hover:text-white"
          >
            Prev
          </button>

          {/* Dynamic Dots */}
          <div className="flex items-center gap-2">
            {AGENTS.map((_, dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => setIndex(dotIndex)}
                className={`h-2 rounded-full transition-all duration-300 ${index === dotIndex
                    ? "w-8 bg-forest"
                    : "w-2 bg-forest/25 hover:bg-forest/50"
                  }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="rounded-full border border-forest/10 px-5 py-2 text-sm font-medium text-forest transition hover:bg-forest hover:text-white"
          >
            Next
          </button>
        </div>

        

        
      </div>
    </section>
  );
}

function InlineCircle({ color, icon }: { color: string; icon: any }) {
  return (
    <span
      className={`mx-2 inline-grid h-[1.05em] w-[1.05em] translate-y-[-0.05em] place-items-center rounded-full ${color} text-[0.55em] align-middle`}
    >
      <span>{icon}</span>
    </span>
  );
}






