import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export default function AboutPage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="about-page inner-page">
        <div className="about-copy">
          <div className="section-kicker">★ ABOUT THE OWNER ★</div>
          <h1 className="page-title">MEET JACK MARCHESE.</h1>
          <p>Hi, I&apos;m Jack Marchese, a 19-year-old college student and the owner of Dancing Bears Detail Co.</p>
          <p>I&apos;ve always loved cleaning cars and seeing the transformation a quality detail can make. Every vehicle is treated with care and attention to detail.</p>
          <p className="owner-thanks">We&apos;re grateful for your business and look forward to making your vehicle feel new again!</p>
          <div className="about-values"><span>WE COME TO YOU</span><span>QUALITY YOU CAN TRUST</span><span>LOCALLY OWNED</span></div>
          <a className="y2k-button" href="/services#package-options">MEET US IN YOUR DRIVEWAY »</a>
        </div>
        <div className="about-stats portal-box">
          <div className="window-title"><span>DANCING BEARS AT A GLANCE</span><b>×</b></div>
          <div className="portal-body">
            <p className="new">★ EST. 2026 ★</p>
            <div className="counter"><span>0</span><span>0</span><span>0</span><span>0</span><span>2</span><span>0</span></div>
            <small>happy cars & counting</small>
            <hr />
            <p><b>1 local owner<br />100% care &amp; attention<br />0 boring details</b></p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
