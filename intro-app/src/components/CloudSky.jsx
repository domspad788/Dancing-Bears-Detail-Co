import { forwardRef, useImperativeHandle, useRef, useEffect } from "react";
import gsap from "gsap";

const CLOUD_SHAPES = [
  { top: "10%", left: "-12%", scale: 1, speed: 9 },
  { top: "20%", left: "38%", scale: 0.7, speed: 13 },
  { top: "6%", left: "68%", scale: 0.85, speed: 11 },
  { top: "34%", left: "8%", scale: 0.6, speed: 15 },
  { top: "28%", left: "82%", scale: 0.5, speed: 12 },
  { top: "3%", left: "48%", scale: 0.9, speed: 10 },
];

const CloudSky = forwardRef(function CloudSky({ tier, reduced }, ref) {
  const rootRef = useRef(null);
  const cloudRefs = useRef([]);
  const tweens = useRef([]);

  const count = tier === "lite" ? 3 : 6;
  const clouds = CLOUD_SHAPES.slice(0, count);

  useEffect(() => {
    tweens.current.forEach((t) => t.kill());
    tweens.current = [];
    if (reduced) return undefined;

    cloudRefs.current.slice(0, count).forEach((el, i) => {
      if (!el) return;
      const conf = clouds[i];
      tweens.current.push(
        gsap.to(el, {
          x: "+=50",
          duration: conf.speed,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        })
      );
    });

    return () => {
      tweens.current.forEach((t) => t.kill());
      tweens.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced, tier]);

  useImperativeHandle(ref, () => ({
    buildTimeline() {
      const tl = gsap.timeline();
      tl.fromTo(
        rootRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power1.out" },
        0
      );
      return tl;
    },
    fadeOut(duration = 0.6) {
      return gsap.to(rootRef.current, { opacity: 0, duration, ease: "power1.inOut" });
    },
  }));

  return (
    <div className="db-cloud-sky" ref={rootRef}>
      {clouds.map((c, i) => (
        <svg
          key={i}
          ref={(el) => (cloudRefs.current[i] = el)}
          className="db-cloud"
          style={{ top: c.top, left: c.left, transform: `scale(${c.scale})` }}
          viewBox="0 0 200 100"
          aria-hidden="true"
        >
          <ellipse cx="60" cy="60" rx="55" ry="32" fill="#F0E4C7" />
          <ellipse cx="110" cy="45" rx="45" ry="38" fill="#F0E4C7" />
          <ellipse cx="150" cy="62" rx="42" ry="28" fill="#F0E4C7" />
          <ellipse cx="90" cy="70" rx="70" ry="26" fill="#F0E4C7" />
        </svg>
      ))}
    </div>
  );
});

export default CloudSky;
