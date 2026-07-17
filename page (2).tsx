import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { GalleryJobs } from "./GalleryJobs";

export default function GalleryPage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="gallery-page inner-page">
        <div className="section-kicker">★ REAL JOBS. REAL RESULTS. ★</div>
        <h1 className="page-title">BEFORE / AFTER</h1>
        <p className="page-intro">Each card is one real detailing job. Open one to see the best matching angles, with every before placed right beside its after.</p>
        <img className="floating-mascot gallery-polisher" src="/mascots/polisher-bear-cutout.png" alt="" width="1330" height="1182" aria-hidden="true" />
        <GalleryJobs />
        <img className="floating-mascot gallery-vacuum" src="/mascots/vacuum-bear-cutout.png" alt="" width="1402" height="1122" aria-hidden="true" />
        <a className="y2k-button gallery-cta" href="/services#package-options">MAKE MY CAR THE AFTER »</a>
      </section>
      <SiteFooter />
    </main>
  );
}
