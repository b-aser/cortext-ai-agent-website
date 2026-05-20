import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "cream" | "outlineCream" | "dark" | "outline";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium tracking-[-0.005em] transition-all duration-300 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream focus-visible:ring-forest/40";

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[0.95rem]",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-forest text-cream hover:bg-forest-mid shadow-[0_10px_30px_-10px_rgba(28,61,15,0.6)] hover:-translate-y-0.5",
  ghost:
    "text-forest underline underline-offset-4 decoration-forest/40 hover:decoration-forest decoration-[1.5px]",
  cream:
    "bg-cream text-forest hover:bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)] hover:-translate-y-0.5",
  outlineCream:
    "border border-forest text-forest hover:bg-forest hover:text-cream hover:-translate-y-0.5",
  outline:
    "border border-cream/60 text-cream hover:bg-forest hover:text-cream hover:-translate-y-0.5",
  dark:
    "bg-[#111] text-white hover:bg-black hover:-translate-y-0.5",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  leading?: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  leading,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      {leading}
      {children}
    </button>
  );
}
