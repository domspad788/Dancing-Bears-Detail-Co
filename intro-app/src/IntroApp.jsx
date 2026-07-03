import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useReducedMotion } from "./hooks/useReducedMotion";
import { useDeviceTier } from "./hooks/useDeviceTier";
import CloudSky from "./components/CloudSky";
import LogoReveal from "./components/LogoReveal";
import DancingBears from "./components/DancingBears";
import FoamParticles from "./components/FoamParticles";

function dispatchComplete(root) {
  root?.dispatchEvent(new CustomEvent("db-intro-complete", { bubbles: true }));
}

export default function IntroApp() {
  const reduced = useReducedMotion();
  const tier = useDeviceTier();
  const rootRef = useRef(null);
  const overlayRef = useRef(null);
  const cloudRef = useRef(null);
  const logoRef = useRef(null);
  const bearsRef = useRef(null);
  const foamRef = useRef(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const root = rootRef.current;

    if (reduced) {
      const tl = gsap.timeline({
        onComplete: () => {
          setDone(true);
          dispatchComplete(root);
        },
      });
      tl.to(overlayRef.current, { autoAlpha: 0, duration: 0.6, delay: 0.5, ease: "power1.inOut" });
      return () => tl.kill();
    }

    const master = gsap.timeline({
      paused: true,
      onComplete: () => {
        setDone(true);
        dispatchComplete(root);
      },
    });

    master.add(cloudRef.current.buildTimeline(), 0);
    master.add(logoRef.current.buildTimeline(), tier === "lite" ? 0.4 : 0.6);
    master.add(bearsRef.current.buildTimeline(), tier === "lite" ? 1.4 : 1.9);
    master.add(foamRef.current.buildTimeline(), tier === "lite" ? 2.6 : 3.4);

    const fadeStart = tier === "lite" ? 3.6 : 4.6;
    master.add(logoRef.current.fadeOut(0.4), fadeStart);
    master.add(bearsRef.current.fadeOut(0.4), fadeStart);
    master.add(cloudRef.current.fadeOut(0.5), fadeStart + 0.1);
    master.to(overlayRef.current, { autoAlpha: 0, duration: 0.5, ease: "power1.inOut" }, fadeStart + 0.3);

    master.play();

    return () => master.kill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced, tier]);

  if (done) return null;

  return (
    <div className="db-intro-root" ref={rootRef}>
      <div className="db-intro-overlay" ref={overlayRef}>
        <CloudSky ref={cloudRef} tier={tier} reduced={reduced} />
        <LogoReveal ref={logoRef} />
        {!reduced && (
          <>
            <DancingBears ref={bearsRef} tier={tier} />
            <FoamParticles ref={foamRef} tier={tier} />
          </>
        )}
      </div>
    </div>
  );
}
