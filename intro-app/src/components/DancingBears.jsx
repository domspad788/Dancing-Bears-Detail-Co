import { forwardRef, useImperativeHandle, useRef } from "react";
import gsap from "gsap";

function Bear({ bearRef, color, armLRef, armRRef, legLRef, legRRef, flip }) {
  return (
    <svg
      ref={bearRef}
      className="db-bear"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      viewBox="0 0 160 200"
      aria-hidden="true"
    >
      <ellipse cx="80" cy="140" rx="42" ry="50" fill={color} />
      <circle cx="80" cy="60" r="38" fill={color} />
      <circle cx="48" cy="30" r="14" fill={color} />
      <circle cx="112" cy="30" r="14" fill={color} />
      <circle cx="80" cy="66" r="16" fill="#F3E9D2" />
      <circle cx="70" cy="55" r="4" fill="#2A1D12" />
      <circle cx="90" cy="55" r="4" fill="#2A1D12" />
      <ellipse cx="80" cy="70" rx="6" ry="4" fill="#2A1D12" />
      <g ref={armLRef} style={{ transformOrigin: "50px 105px" }}>
        <ellipse cx="35" cy="130" rx="14" ry="34" fill={color} />
      </g>
      <g ref={armRRef} style={{ transformOrigin: "110px 105px" }}>
        <ellipse cx="125" cy="130" rx="14" ry="34" fill={color} />
      </g>
      <g ref={legLRef} style={{ transformOrigin: "60px 175px" }}>
        <ellipse cx="58" cy="190" rx="16" ry="22" fill={color} />
      </g>
      <g ref={legRRef} style={{ transformOrigin: "100px 175px" }}>
        <ellipse cx="102" cy="190" rx="16" ry="22" fill={color} />
      </g>
    </svg>
  );
}

const DancingBears = forwardRef(function DancingBears({ tier }, ref) {
  const rootRef = useRef(null);
  const bear1 = useRef(null);
  const bear2 = useRef(null);
  const a1l = useRef(null),
    a1r = useRef(null),
    l1l = useRef(null),
    l1r = useRef(null);
  const a2l = useRef(null),
    a2r = useRef(null),
    l2l = useRef(null),
    l2r = useRef(null);

  useImperativeHandle(ref, () => ({
    buildTimeline() {
      const tl = gsap.timeline();
      const bears = tier === "lite" ? [bear1] : [bear1, bear2];

      bears.forEach((b, i) => {
        tl.fromTo(
          b.current,
          { y: 60, opacity: 0, scale: 0.7 },
          { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" },
          0.1 + i * 0.15
        );
      });

      const dance = (arms, legs, start) => {
        arms.forEach((armRef, i) => {
          tl.to(
            armRef.current,
            { rotate: i === 0 ? -32 : 32, duration: 0.28, repeat: 3, yoyo: true, ease: "sine.inOut" },
            start
          );
        });
        legs.forEach((legRef, i) => {
          tl.to(
            legRef.current,
            { y: -6, duration: 0.28, repeat: 3, yoyo: true, ease: "sine.inOut" },
            start
          );
        });
      };

      dance([a1l, a1r], [l1l, l1r], 0.5);
      if (tier !== "lite") dance([a2l, a2r], [l2l, l2r], 0.65);

      bears.forEach((b) => {
        tl.to(b.current, { y: -10, duration: 0.3, repeat: 3, yoyo: true, ease: "sine.inOut" }, 0.5);
      });

      return tl;
    },
    fadeOut(duration = 0.4) {
      return gsap.to(rootRef.current, { autoAlpha: 0, duration, ease: "power1.inOut" });
    },
  }));

  return (
    <div className="db-bears" ref={rootRef}>
      <Bear bearRef={bear1} color="#7A5233" armLRef={a1l} armRRef={a1r} legLRef={l1l} legRRef={l1r} />
      {tier !== "lite" && (
        <Bear
          bearRef={bear2}
          color="#5A3B22"
          armLRef={a2l}
          armRRef={a2r}
          legLRef={l2l}
          legRRef={l2r}
          flip
        />
      )}
    </div>
  );
});

export default DancingBears;
