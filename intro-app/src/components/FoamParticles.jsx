import { forwardRef, useImperativeHandle, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

const FoamParticles = forwardRef(function FoamParticles({ tier }, ref) {
  const rootRef = useRef(null);
  const canvasRef = useRef(null);
  const waveRef = useRef(null);
  const rafRef = useRef(null);
  const particles = useRef([]);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }, []);

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [resize]);

  const burst = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    const count = tier === "lite" ? 36 : 100;

    particles.current = Array.from({ length: count }, () => ({
      x: w / 2 + (Math.random() - 0.5) * w * 0.6,
      y: h * 0.75 + (Math.random() - 0.5) * 40,
      vx: (Math.random() - 0.5) * 2.6,
      vy: -Math.random() * 3.2 - 1.2,
      r: Math.random() * 4.5 + 1.5,
      life: 1,
      decay: 0.014 + Math.random() * 0.016,
    }));

    const start = performance.now();
    const maxDuration = 1300;

    const step = (now) => {
      const elapsed = now - start;
      ctx.clearRect(0, 0, w, h);
      particles.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.06;
        p.life -= p.decay;
        if (p.life <= 0) return;
        ctx.globalAlpha = Math.max(p.life, 0) * 0.85;
        ctx.fillStyle = "#F0E4C7";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      particles.current = particles.current.filter((p) => p.life > 0);
      if (elapsed < maxDuration && particles.current.length) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        ctx.clearRect(0, 0, w, h);
      }
    };
    rafRef.current = requestAnimationFrame(step);
  }, [tier]);

  useImperativeHandle(ref, () => ({
    buildTimeline() {
      const tl = gsap.timeline();
      tl.call(() => burst(), null, 0);
      tl.fromTo(
        waveRef.current,
        { yPercent: 100 },
        { yPercent: 0, duration: 0.9, ease: "power2.inOut" },
        0.15
      );
      tl.to(waveRef.current, { yPercent: -100, duration: 0.7, ease: "power2.in" }, 0.95);
      return tl;
    },
    fadeOut(duration = 0.3) {
      return gsap.to(rootRef.current, { autoAlpha: 0, duration });
    },
  }));

  return (
    <div className="db-foam-layer" ref={rootRef}>
      <canvas className="db-foam-canvas" ref={canvasRef} />
      <svg
        ref={waveRef}
        className="db-wave-wipe"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="#E3CFA0"
          d="M0,160 C240,240 480,80 720,120 C960,160 1200,280 1440,200 L1440,320 L0,320 Z"
        />
        <path
          fill="#F0E4C7"
          d="M0,200 C240,120 480,260 720,200 C960,140 1200,220 1440,180 L1440,320 L0,320 Z"
          opacity="0.9"
        />
      </svg>
    </div>
  );
});

export default FoamParticles;
