import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  asLift?: boolean;
};

export function Card({ asLift = true, className = "", children, ...rest }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-forest/12 bg-white/40 backdrop-blur-sm ${asLift ? "lift" : ""} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
