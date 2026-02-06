"use client";

import { useEffect, useRef, useState } from "react";

function parseNumber(value: string) {
  const matches = value.match(/[\d.]+/g);

  if (!matches || matches.length !== 1) {
    return { number: null, suffix: "", raw: value };
  }

  const numeric = matches[0];
  const suffix = value.replace(numeric, "");

  return { number: parseFloat(numeric), suffix, raw: value };
}

type AnimatedCounterProps = {
  value: string;
  duration?: number; // in ms
};

export function AnimatedCounter({
  value,
  duration = 1500,
}: AnimatedCounterProps) {
  const parsed = parseNumber(value);

  // ✅ Non-numeric (like 24/7) → render directly
  if (parsed.number === null) {
    return <span>{parsed.raw}</span>;
  }

  const { number, suffix } = parsed;

  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;

          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const current = number * progress;
            setDisplayValue(current);

            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [number, duration]);

  return (
    <span ref={ref}>
      {Number.isInteger(number)
        ? Math.round(displayValue).toLocaleString()
        : displayValue.toFixed(2)}
      {suffix}
    </span>
  );
}
