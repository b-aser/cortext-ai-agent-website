const BRANDS = [
  "mindst",
  "Resenc",
  "goody",
  "Whop",
  "smartca",
  "Telepor",
  "homebo",
  "stedi",
  "Flatfile",
  "11Eleven",
  "waverio",
  "aromix",
  "martino",
  "Virogan",
];

export function Marquee() {
  return (
    <section
      aria-label="Trusted partners"
      className="relative overflow-hidden border-y border-cream/15 bg-forest text-cream"
    >
      <div className="flex animate-marquee whitespace-nowrap py-6 will-change-transform">
        {[...BRANDS, ...BRANDS].map((name, i) => (
          <span
            key={i}
            className="mx-10 flex shrink-0 items-center gap-2.5 text-[1.05rem] tracking-tight text-cream/90"
          >
            <BrandIcon idx={i} />
            <span className="font-medium">{name}</span>
          </span>
        ))}
      </div>

      {/* Edge fades */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-24"
        style={{
          background:
            "linear-gradient(to right, var(--forest), rgba(28,61,15,0))",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-24"
        style={{
          background:
            "linear-gradient(to left, var(--forest), rgba(28,61,15,0))",
        }}
      />
    </section>
  );
}

function BrandIcon({ idx }: { idx: number }) {
  const shapes = [
    <svg key="a" viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M12 2L2 22h20L12 2z" />
    </svg>,
    <svg key="b" viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <circle cx="12" cy="12" r="8" />
    </svg>,
    <svg key="c" viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="3" />
    </svg>,
    <svg key="d" viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M12 2l3 6 7 1-5 4 1 7-6-3-6 3 1-7-5-4 7-1 3-6z" />
    </svg>,
    <svg key="e" viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="2" />
    </svg>,
  ];
  return shapes[idx % shapes.length];
}
