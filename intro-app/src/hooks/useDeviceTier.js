import { useState, useEffect } from "react";

/**
 * Cheap runtime heuristic for how much animation budget a device can afford.
 * "full"  — desktop / capable hardware: all layers, all particles.
 * "lite"  — small viewport or low core count: fewer clouds/particles, shorter timeline.
 */
export function useDeviceTier() {
  const compute = () => {
    if (typeof window === "undefined") return "full";
    const mobile = window.matchMedia("(max-width: 680px)").matches;
    const lowPower = (navigator.hardwareConcurrency || 8) <= 4;
    return mobile || lowPower ? "lite" : "full";
  };

  const [tier, setTier] = useState(compute);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 680px)");
    const onChange = () => setTier(compute());
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return tier;
}
