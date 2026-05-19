import { Button } from "@/components/ui/Button";

const NODES = [
  { name: "LINE", x: 18, y: 18, color: "#06C755", letter: "L" },
  { name: "Slack", x: 78, y: 14, color: "#4A154B", letter: "S" },
  { name: "Twist", x: 50, y: 32, color: "#1F92E8", letter: "T" },
  { name: "Shopify", x: 16, y: 82, color: "#7AB55C", letter: "♥" },
  { name: "Zapier", x: 82, y: 78, color: "#FF4F00", letter: "Z" },
  { name: "Webflow", x: 50, y: 86, color: "#146EF5", letter: "W" },
];

export function Integrations() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-42">
      <div className="mx-auto flex max-w-7xl justify-center items-center gap-12 px-6  lg:px-10">
        {/* Left text */}
        <div className="flex flex-col items-center justify-center">
         
          <h2 className=" text-center text-[2.2rem] leading-[1.05] tracking-[-0.02em] text-forest sm:text-[3rem]">
            Integration with your
            <br />
            favorite tools
          </h2>
          <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-forest/65 text-center">
            Unleash the power of AI within Novai. Upgrade your productivity with
            Novai, the open AI Agent integration.
          </p>
          <div className="mt-7 flex justify-center">
            <Button variant="outlineCream" size="lg">
              Get started
            </Button>
          </div>
        </div>


      </div>
    </section>
  );
}
