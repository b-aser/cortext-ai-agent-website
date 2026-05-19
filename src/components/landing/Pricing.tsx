import { Button } from "@/components/ui/Button";

type Plan = {
  name: string;
  price: string;
  blurb: string;
  features: { label: string; active: boolean }[];
  popular?: boolean;
};

const FEATURES = [
  "Basic AI chatbot",
  "1 integration (website or Slack)",
  "Up to 500 interactions/month",
  "Advanced AI handling",
  "Enterprise ERP integrations",
  "Email & chat support",
];

const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "$19",
    blurb: "Get started with AI agents at no cost.",
    features: FEATURES.map((label, i) => ({ label, active: i < 3 })),
  },
  {
    name: "Growth",
    price: "$29",
    blurb: "Get started with AI agents at no cost.",
    features: FEATURES.map((label, i) => ({ label, active: i < 4 })),
  },
  {
    name: "Pro",
    price: "$59",
    blurb: "Get started with AI agents at no cost.",
    features: FEATURES.map((label) => ({ label, active: true })),
    popular: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-white overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 text-center">
          <p className="mb-4 text-[0.7rem] uppercase tracking-[0.22em] text-forest/45">
            ● Pricing
          </p>
          <h2 className="mx-auto max-w-3xl font-serif text-[2.4rem] leading-[1.05] tracking-[-0.02em] text-forest sm:text-[3.2rem] lg:text-[3.6rem]">
            Choose a plan that fits{" "}
            <span className="inline-grid h-[1.05em] w-[1.05em] translate-y-[-0.05em] place-items-center rounded-full bg-green-accent align-middle text-[0.55em] text-white">
              $
            </span>{" "}
            your pricing need
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {PLANS.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan }: { plan: Plan }) {
  const dark = plan.popular;
  return (
    <article
      className={`relative flex flex-col rounded-2xl gap-3 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(28,61,15,0.55)] ${
        dark
          ? "border-forest bg-forest text-cream"
          : "border-forest/10 bg-cream text-forest"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 right-7 rounded-full border border-cream/20 bg-cream px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-forest shadow-sm">
          Popular
        </span>
      )}

      <p className={`text-[1.05rem] font-semibold ${dark ? "text-cream" : "text-forest"}`}>
        {plan.name}
      </p>
      <p className={`mt-1 text-[0.8rem] ${dark ? "text-cream/65" : "text-forest/60"}`}>
        {plan.blurb}
      </p>

      <div className="mt-6 flex items-end gap-1">
        <span className="text-[2.6rem] font-medium  leading-none tabular-nums">
          {plan.price}
        </span>
        <span className={`pb-1 text-[0.85rem] ${dark ? "text-cream/65" : "text-forest/55"}`}>
          /month
        </span>
      </div>

      <p
        className={`mt-6 text-[0.7rem] font-medium uppercase tracking-[0.18em] ${
          dark ? "text-cream/55" : "text-forest/45"
        }`}
      >
        Features:
      </p>

      <ul className="mt-3 space-y-2.5">
        {plan.features.map((f) => (
          <li key={f.label} className="flex items-center gap-2.5 text-[0.85rem]">
            <span
              className={`grid h-4 w-4 place-items-center rounded-full ${
                f.active
                  ? "bg-green-accent text-white"
                  : dark
                    ? "bg-cream/15 text-cream/35"
                    : "bg-forest/8 text-forest/35"
              }`}
            >
              <svg viewBox="0 0 12 12" className="h-2 w-2 fill-current" aria-hidden>
                <path d="M4.5 8.2L2.3 6l-.9.9 3.1 3.1 6.4-6.4-.9-.9z" />
              </svg>
            </span>
            <span
              className={
                f.active
                  ? dark
                    ? "text-cream"
                    : "text-forest"
                  : dark
                    ? "text-cream/35 line-through decoration-cream/30"
                    : "text-forest/35 line-through decoration-forest/25"
              }
            >
              {f.label}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button
          variant={dark ? "cream" : "dark"}
          size="lg"
          className="w-full"
        >
          Get Started
        </Button>
      </div>
    </article>
  );
}
