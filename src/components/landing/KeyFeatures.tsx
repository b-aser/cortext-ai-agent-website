import { ArrowRight, ArrowRightIcon, Settings, Settings2Icon } from "lucide-react";
import Image from "next/image";

const FEATURES = [
  {
    title: "Task Automation",
    desc: "AI-powered chatbots and virtual assistants that engage users via text or voice.",
    chips: ["ChatGPT", "Makawa", "Thokomade"],

    image: "/dashboard.webp",
  },
  {
    title: "Smart Responses",
    desc: "AI-powered interfaces and chat responses that engage users via text or voice.",
    chips: ["Reply", "Suggest", "Tone"],
    image: "/dashboard.webp",
  },
  {
    title: "Analytics & Insights",
    desc: "Tracks interactions and provides performance or usage reports and data analytics.",
    chips: ["Funnel", "Cohort", "Live"],
    image: "/dashboard.webp",
  },
];

export function KeyFeatures() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 text-center">
          <h2 className="mx-auto max-w-3xl font-sans text-[2.4rem] leading-[1.05] tracking-[-0.05em] text-forest sm:text-[3.2rem] lg:text-[3.6rem]">
            Key features to automate scale{" "}
            <span className="inline-grid h-[1.5em] w-[1.5em] translate-y-[-0.05em] place-items-center rounded-full bg-red-dot align-middle text-[0.5em]">
              <Settings className="text-white" size={30} />
            </span>{" "}
            your business
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className={`group relative flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1`}
            >


              {/* Visual block */}
              <div className="relative overflow-hidden rounded-t-2xl ">
                <Image src={f.image} alt={f.title} width={300} height={300} className="w-full h-full object-cover" />
              </div>

              <div className="p-4">

                <h3 className="text-[1.1rem] font-semibold text-forest">{f.title}</h3>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-forest/65">
                  {f.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {f.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-white px-2.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-wider text-forest/65"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className="mt-5 inline-flex justify-between items-center w-full text-[0.75rem] font-medium text-forest underline underline-offset-[5px] decoration-forest/40 hover:decoration-forest"
                >
                  Learn more <ArrowRightIcon size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

