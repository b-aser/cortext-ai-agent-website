import Image from "next/image";

const COLUMNS = [
  {
    title: "Quick Links",
    links: ["Home", "About", "Service", "Our Features", "Blog"],
  },
  {
    title: "Our Services",
    links: [
      "Conversational AI Agents",
      "Autonomous AI Agents",
      "Image generator AI Agents",
      "Decision-Making AI Agents",
      "Help",
    ],
  },
  {
    title: "Follow Us",
    links: ["Facebook", "Instagram", "LinkedIn", "Telegram"],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-cream pt-20 paper-grain ">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 -mb-24">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:gap-14">
          {/* Brand blurb */}
          <div className="col-span-2 md:col-span-1">
            <a href="#top" className="group flex items-center gap-2.5">
                      
                        <Image src={"/ai-model.png"} alt="Cortexa" width={35} height={35}/>
                      
                      <span className="text-[1.15rem] font-extrabold tracking-tight text-forest">
                        Cortexa
                      </span>
                    </a>
            <p className="mt-4 max-w-xs text-[0.85rem] leading-relaxed text-forest/65">
              Cortexa helps teams build, deploy, and scale AI agents with an
              editorial-grade workflow — without the cookie-cutter aesthetic.
            </p>
          </div>

          {/* Three link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-forest/45">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[0.88rem] text-forest/75 transition-colors hover:text-forest"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-12 grid grid-cols-1 gap-6 border-t border-forest/8 pt-8 md:grid-cols-2">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-forest/45">
              Contact
            </p>
            <p className="mt-3 text-[0.88rem] text-forest/75">
              House 15/A, Road 27, Dhanmondi,
              <br /> Dhaka 1209, Bangladesh
            </p>
            <p className="mt-2 text-[0.88rem] text-forest/75">880 XXX XXX XXX</p>
            <a
              href="mailto:info@cortexa.com"
              className="mt-1 inline-block text-[0.88rem] text-forest underline underline-offset-4 decoration-forest/30 hover:decoration-forest"
            >
              info@cortexa.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative mt-6 flex flex-col items-start justify-between gap-3 border-t border-forest/8 pt-4 text-[0.78rem] text-forest/55 md:flex-row md:items-center">
          <p>© 2026 Cortexa. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-forest">Privacy Policy</a>
            <a href="#" className="hover:text-forest">Terms &amp; Condition</a>
          </div>
        </div>
      </div>

      {/* Giant watermark word */}
      <div
        aria-hidden
        className="pointer-events-none relative overflow-hidden flex mx-auto justify-center"
      >
        <p
          className="select-none uppercase font-semibold tracking-[-0.03em] leading-none text-forest/6 text-[18vw]"
        >
          cortexa
        </p>
      </div>
    </footer>
  );
}
