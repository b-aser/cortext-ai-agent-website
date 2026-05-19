import { Button } from "@/components/ui/Button";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-forest py-24 lg:py-32">
      {/* Decorative glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 0%, rgba(245,158,11,0.18), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
        <p className="mb-5 text-[0.7rem] uppercase tracking-[0.22em] text-cream/55">
          ● Get Started
        </p>
        <h2 className="font-serif text-[2.8rem] leading-[1.02] tracking-[-0.025em] text-cream sm:text-[4rem] lg:text-[5rem]">
          Smarter agents. Faster workflows. <span className="italic text-cream/85">Less work for you.</span>
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button variant="cream" size="lg">
            Build your agent
          </Button>
          <Button variant="outline" size="lg">
            Talk to sales
          </Button>
        </div>

        <p className="mt-6 text-[0.78rem] italic text-cream/55">
          ● 30-Day Free Trial &nbsp; ● No Credit Card &nbsp; ● Cancel Anytime
        </p>
      </div>
    </section>
  );
}
