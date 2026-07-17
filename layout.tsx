"use client";

import { useEffect, useRef, useState } from "react";
import { galleryJobs, type GalleryJob, type GalleryPhoto } from "./gallery-data";

function GalleryCardMedia({ media }: { media: GalleryPhoto }) {
  if (media.mediaType === "video") {
    return (
      <video
        src={media.src}
        poster={media.poster}
        width={media.width ?? 540}
        height={media.height ?? 960}
        muted
        loop
        playsInline
        preload="metadata"
        data-hover-preview
      />
    );
  }

  return <img src={media.src} alt="" width={media.width ?? 1050} height={media.height ?? 1400} loading="lazy" />;
}

function stopCardPreviews(card: HTMLButtonElement) {
  card.querySelectorAll<HTMLVideoElement>("video[data-hover-preview]").forEach((video) => {
    video.pause();
    video.currentTime = 0;
  });
}

function playCardPreviews(card: HTMLButtonElement) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  card.querySelectorAll<HTMLVideoElement>("video[data-hover-preview]").forEach((video) => {
    void video.play().catch(() => undefined);
  });
}

export function GalleryJobs() {
  const [activeJob, setActiveJob] = useState<GalleryJob | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const returnFocusRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (activeJob && dialog && !dialog.open) {
      dialog.showModal();
      dialog.querySelector<HTMLButtonElement>("[data-gallery-close]")?.focus();
    }
  }, [activeJob]);

  function openJob(job: GalleryJob, trigger: HTMLButtonElement) {
    stopCardPreviews(trigger);
    returnFocusRef.current = trigger;
    setActiveJob(job);
  }

  function closeJob() {
    dialogRef.current?.close();
  }

  function handleClosed() {
    setActiveJob(null);
    returnFocusRef.current?.focus();
  }

  return (
    <>
      <div className="gallery-jobs-grid" aria-label="Completed detailing jobs">
        {galleryJobs.map((job) => {
          const cover = job.pairs[0];

          return (
            <article className={`gallery-job${job.photoAspect === "landscape" ? " landscape-gallery-job" : ""}`} key={job.id}>
              <button
                className="gallery-job-card"
                type="button"
                onClick={(event) => openJob(job, event.currentTarget)}
                onMouseEnter={(event) => playCardPreviews(event.currentTarget)}
                onMouseLeave={(event) => stopCardPreviews(event.currentTarget)}
                aria-haspopup="dialog"
              >
                <span className="gallery-card-bar">
                  <b>{job.dateLabel}</b>
                  <span aria-hidden="true">{job.videoReel ? "HOVER TO PLAY" : "✦ ✦ ✦"}</span>
                </span>
                <span className="gallery-card-preview" aria-hidden="true">
                  <span className="comparison-frame before-frame">
                    <span className="comparison-label">BEFORE</span>
                    <GalleryCardMedia media={cover.before} />
                  </span>
                  <span className="comparison-frame after-frame">
                    <span className="comparison-label">AFTER</span>
                    <GalleryCardMedia media={cover.after} />
                  </span>
                </span>
                <span className="gallery-card-copy">
                  <strong>{job.title}</strong>
                  <span>{job.vehicle} · {job.service}</span>
                  <small>{job.countLabel ?? `${job.pairs.length} ${job.pairs.length === 1 ? "matching view" : "matching views"}`}</small>
                  <span className="gallery-card-open">OPEN THIS JOB »</span>
                </span>
              </button>
            </article>
          );
        })}
      </div>

      <dialog
        className={`gallery-job-dialog${activeJob?.photoAspect === "landscape" ? " landscape-gallery-dialog" : ""}`}
        ref={dialogRef}
        aria-labelledby={activeJob ? `${activeJob.id}-dialog-title` : undefined}
        onClose={handleClosed}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) closeJob();
        }}
      >
        {activeJob && (
          <div className="gallery-dialog-shell">
            <div className="gallery-dialog-bar">
              <span>DETAILING RESULTS</span>
              <button
                type="button"
                className="gallery-dialog-close"
                onClick={closeJob}
                aria-label="Close job details"
                data-gallery-close
              >
                ×
              </button>
            </div>

            <div className="gallery-dialog-body">
              <div className="gallery-dialog-heading">
                <div>
                  <p className="gallery-dialog-date">{activeJob.dateLabel}</p>
                  <h2 id={`${activeJob.id}-dialog-title`}>{activeJob.title}</h2>
                  <p className="gallery-dialog-meta">{activeJob.vehicle} · {activeJob.service}</p>
                </div>
                <p className="gallery-dialog-summary">{activeJob.summary}</p>
              </div>

              {activeJob.videoReel ? (
                <div className="gallery-video-reels">
                  {(["before", "after"] as const).map((stage) => (
                    <section className={`gallery-video-reel ${stage}-video-reel`} key={stage} aria-labelledby={`${activeJob.id}-${stage}-reel-title`}>
                      <div className="gallery-pair-title">
                        <span>{stage === "before" ? "START" : "FINISH"}</span>
                        <h3 id={`${activeJob.id}-${stage}-reel-title`}>{stage.toUpperCase()} REEL</h3>
                      </div>
                      <div className="gallery-video-grid">
                        {activeJob.videoReel?.[stage].map((clip, index) => (
                          <figure className="gallery-video-clip" key={clip.src}>
                            <div className="gallery-photo-label">{stage.toUpperCase()} {String(index + 1).padStart(2, "0")}</div>
                            <video
                              src={clip.src}
                              poster={clip.poster}
                              controls
                              muted
                              playsInline
                              preload="metadata"
                              aria-label={clip.alt}
                            />
                            <figcaption>{clip.label}</figcaption>
                          </figure>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              ) : (
                <div className="gallery-pairs">
                  {activeJob.pairs.map((pair, index) => (
                  <section className="gallery-pair-row" key={pair.id} aria-labelledby={`${activeJob.id}-${pair.id}-title`}>
                    <div className="gallery-pair-title">
                      <span>PAIR {String(index + 1).padStart(2, "0")}</span>
                      <h3 id={`${activeJob.id}-${pair.id}-title`}>{pair.angle}</h3>
                    </div>
                    <div className="gallery-pair-media">
                      <figure className="gallery-pair-photo before-photo">
                        <div className="gallery-photo-label">BEFORE</div>
                        <img src={pair.before.src} alt={pair.before.alt} width={pair.before.width ?? 1050} height={pair.before.height ?? 1400} loading="lazy" />
                        <figcaption>Before the detail</figcaption>
                      </figure>
                      <figure className="gallery-pair-photo after-photo">
                        <div className="gallery-photo-label">AFTER</div>
                        <img src={pair.after.src} alt={pair.after.alt} width={pair.after.width ?? 1050} height={pair.after.height ?? 1400} loading="lazy" />
                        <figcaption>After the detail</figcaption>
                      </figure>
                    </div>
                  </section>
                  ))}
                </div>
              )}

              <div className="gallery-dialog-actions">
                <a className="y2k-button" href="/services#package-options">BOOK YOUR DETAIL »</a>
                <button type="button" className="gallery-dialog-done" onClick={closeJob}>BACK TO ALL JOBS</button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
