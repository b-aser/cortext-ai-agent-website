"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const NAV_LINKS = ["Features", "Pricing", "Resources", "Help", "Contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F5F0E8]/85 backdrop-blur-md shadow-[0_1px_0_rgba(28,61,15,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="group flex items-center gap-2.5">
          
            <Image src={"/ai-model.png"} alt="Cortexa" width={35} height={35}/>
          
          <span className="text-[1.15rem] font-extrabold tracking-tight text-forest">
            Cortexa
          </span>
        </a>

        <div className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-forest/50 bg-transparent px-5 py-2.5 text-[0.85rem] shadow-[0_8px_24px_-12px_rgba(28,61,15,0.18)]">
            {NAV_LINKS.map((label) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase()}`}
                  className="rounded-full px-3 py-1.5 text-forest/80 transition-colors hover:underline hover:text-forest"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#signin"
            className="text-[0.9rem] text-forest/80 transition-colors hover:text-forest"
          >
            Sign In
          </a>
          <Button size="md" variant="primary">
            Get Started
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-forest/15 bg-white/60 backdrop-blur md:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-full bg-forest transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-[1.5px] w-full bg-forest transition-transform ${
                open ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-500 ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul className="mx-6 mb-4 rounded-2xl border border-forest/10 bg-white/80 p-2 backdrop-blur-md">
          {NAV_LINKS.map((label) => (
            <li key={label}>
              <a
                href={`#${label.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-2.5 text-[0.95rem] text-forest/85 hover:bg-forest/5"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="mt-2 flex gap-2 px-2 pb-1">
            <a
              href="#signin"
              className="flex-1 rounded-full border border-forest/15 py-2 text-center text-[0.85rem] text-forest/80"
            >
              Sign In
            </a>
            <Button size="md" variant="primary" className="flex-1">
              Get Started
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
