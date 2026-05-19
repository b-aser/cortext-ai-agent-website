"use client";

import { CarTaxiFront, HouseIcon, ArrowRightIcon, CirclePlay , VideoPlayIcon} from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen overflow-hidden pb-16 pt-28 sm:pt-32 lg:pt-36 paper-grain"
    >
      {/* Soft warm radial */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(70% 60% at 60% 0%, rgba(245,224,194,0.35) 0%, rgba(245,240,232,0) 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        

        {/* Centered headline */}
        <div className="relative mx-auto max-w-5xl text-center">
          

          <h1 className="fade-up d2 leading-[0.88] tracking-[-0.035em] text-forest">
            <span className="block font-medium text-[5rem] sm:text-[7rem] md:text-[8rem] lg:text-[10rem] tracking-tighter">
              DESIGN OF
            </span>
            <span className="relative mt-2 inline-block">
              <span
                className="relative z-10 italic text-forest"
                style={{ fontFamily: "var(--font-caveat), cursive", fontWeight: 700 }}
              >
                <span className="text-[5rem] sm:text-[7rem] md:text-[8rem] lg:text-[10rem] leading-none">
                  Head
                </span>
              </span>
              {/* Hand-drawn underline */}
              <svg
                aria-hidden
                viewBox="0 0 480 60"
                className="hand-underline absolute -bottom-3 left-1/2 -translate-x-1/2 w-[110%] max-w-none text-forest"
                fill="none"
              >
                <path
                  d="M10 38 C 80 8, 180 60, 250 28 S 420 6, 470 32"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M30 48 C 110 26, 220 56, 300 36 S 440 22, 460 44"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.5"
                />
              </svg>
            </span>
          </h1>
        </div>

        {/* Two-column lower band */}
        <div className="relative mt-10 grid grid-cols-1 items-start gap-12 lg:mt-20 lg:grid-cols-12">
          {/* Left: copy + CTAs */}
          <div className="fade-up d3 lg:col-span-5">
            <p className="max-w-md text-[1rem] leading-relaxed text-forest/70">
              Crafting smart solutions in lot&apos;s with moments therefore
              revolutionizing efficiency and innovation.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                variant="primary"
                leading={<SparkIcon className="h-3.5 w-3.5" />}
              >
                Build your agent
              </Button>
              <Button size="lg" variant="ghost">
                Request a demo
              </Button>
            </div>

            
          </div>

          {/* Right: 3D floating visual cluster */}
          <div className="relative lg:col-span-7 hidden md:block">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function SparkIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 2L13.6 9.4L21 11L13.6 12.6L12 20L10.4 12.6L3 11L10.4 9.4L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto h-[460px] w-full max-w-[680px]">
      
      {/* Support Chart card */}
      <div className="absolute right-0 top-12 z-10 w-[330px] fade-up d4">
        <div className="bg-gradient-to-b from-black/60 to-black/5 border-2 border-white/15 rounded-2xl p-4">
            <video src="/Video/demo.mp4" className="w-full h-full bg-transparent" autoPlay muted loop></video>
            
                <CirclePlay  className="bg-white/30 rounded-full border border-white/5 h-10 w-10 text-white/70 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            
            <div className="flex flex-col w-full h-full mt-2">
                <span className="text-sm">
                    Understanding the course of acne and how to treat it
                </span>
                <p className="text-xs flex flex-row items-center gap-1 mt-1"> Read more <ArrowRightIcon className="h-3.5 w-3.5" /></p>
            </div>
        </div>
      </div>

      
    </div>
  );
}
