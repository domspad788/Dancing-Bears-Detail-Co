import { forwardRef, useImperativeHandle, useRef } from "react";
import gsap from "gsap";

const WORD = "Dancing Bears Detail Co.";

const LogoReveal = forwardRef(function LogoReveal(_, ref) {
  const rootRef = useRef(null);
  const markRef = useRef(null);
  const wordRef = useRef(null);
  const lineRef = useRef(null);

  useImperativeHandle(ref, () => ({
    buildTimeline() {
      const tl = gsap.timeline();
      tl.fromTo(
        markRef.current,
        { scale: 0, rotate: -25, opacity: 0 },
        { scale: 1, rotate: 0, opacity: 1, duration: 0.7, ease: "back.out(1.6)" },
        0
      )
        .fromTo(
          wordRef.current.querySelectorAll(".db-word-char"),
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.035, ease: "power3.out" },
          0.3
        )
        .fromTo(
          lineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.5, ease: "power2.out", transformOrigin: "left center" },
          0.6
        );
      return tl;
    },
    fadeOut(duration = 0.5) {
      return gsap.to(rootRef.current, { autoAlpha: 0, duration, ease: "power1.inOut" });
    },
  }));

  return (
    <div className="db-logo-reveal" ref={rootRef}>
      <svg ref={markRef} className="db-logo-mark" viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r="52" fill="#C1552C" />
        <circle cx="30" cy="26" r="14" fill="#3E6482" />
        <circle cx="90" cy="26" r="14" fill="#3E6482" />
        <circle cx="60" cy="68" r="34" fill="#D9A441" />
        <circle cx="47" cy="60" r="5" fill="#2A1B12" />
        <circle cx="73" cy="60" r="5" fill="#2A1B12" />
        <ellipse cx="60" cy="76" rx="10" ry="7" fill="#2A1B12" />
      </svg>
      <div className="db-logo-word" ref={wordRef} aria-label={WORD}>
        {WORD.split("").map((ch, i) => (
          <span className="db-word-char" key={i}>
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </div>
      <div className="db-logo-line" ref={lineRef} />
    </div>
  );
});

export default LogoReveal;
