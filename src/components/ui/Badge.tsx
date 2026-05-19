type BadgeProps = {
  children: React.ReactNode;
  dotColor?: string;
  className?: string;
};

export function Badge({ children, dotColor = "bg-green-accent", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/70 px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-forest/70 backdrop-blur ${className}`}
    >
      <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${dotColor}`}>
        <span className={`absolute inset-0 rounded-full ${dotColor} animate-pulse-dot`} />
      </span>
      {children}
    </span>
  );
}
