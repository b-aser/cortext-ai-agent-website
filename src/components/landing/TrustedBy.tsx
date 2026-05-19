"use client"

import { useEffect, useRef, useState } from "react";

const TRUST_BRANDS = ["waverio", "aromix", "martino", "Virogan"];

function CountUp({
    target,
    suffix = "",
    className = "",
}: {
    target: number;
    suffix?: string;
    className?: string;
}) {
    const [val, setVal] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const fired = useRef(false);

    useEffect(() => {
        if (!ref.current) return;
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting && !fired.current) {
                        fired.current = true;
                        const start = performance.now();
                        const dur = 1400;
                        const tick = (now: number) => {
                            const p = Math.min(1, (now - start) / dur);
                            const eased = 1 - Math.pow(1 - p, 3);
                            setVal(Math.round(target * eased));
                            if (p < 1) requestAnimationFrame(tick);
                        };
                        requestAnimationFrame(tick);
                    }
                });
            },
            { threshold: 0.5 },
        );
        io.observe(ref.current);
        return () => io.disconnect();
    }, [target]);
    return (
        <span ref={ref} className={`count-up ${className}`}>
            {val}
            {suffix}
        </span>
    );

}

export function TrustedBy() {
    return (
        <div className="bg-linear-to-t from-cream to-white py-5">
            <div className="mx-auto w-full lg:px-10 pt-30 max-w-7xl">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="flex flex-col text-[0.85rem] text-forest/70 pb-5">
                        <span className="font-serif text-forest text-lg flex gap-2 items-center">
                            Trusted by more than {" "}
                            <CountUp
                                target={10}
                                suffix="k+"
                                className="font-semibold text-forest"
                            />
                        </span>
                        <span>customers worldwide</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-forest/55">
                        {TRUST_BRANDS.map((b) => (
                            <span
                                key={b}
                                className="flex items-center gap-1.5 text-[0.95rem]"
                            >
                                <span className="h-2.5 w-2.5 rounded-sm bg-forest/40" />
                                {b}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}