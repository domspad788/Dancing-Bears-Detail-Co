import Link from "next/link";

export function SiteHeader() {
  return (
    <>
      <div className="top-strip" aria-label="Mobile detailing. Serving the Greater Capital Region since 2026. Quality you can trust.">
        <div className="top-strip-track" aria-hidden="true">
          <span className="top-strip-message"><b>MOBILE DETAILING</b><em>SERVING THE GREATER CAPITAL REGION SINCE 2026</em><strong>QUALITY YOU CAN TRUST</strong></span>
          <span className="top-strip-message"><b>MOBILE DETAILING</b><em>SERVING THE GREATER CAPITAL REGION SINCE 2026</em><strong>QUALITY YOU CAN TRUST</strong></span>
        </div>
      </div>
      <header className="site-header">
        <Link href="/" className="brand" aria-label="Dancing Bears Detail Co. home">
          <img className="header-logo" src="/dancing-bears-header-v2.png" alt="Dancing Bears Detail Co." />
        </Link>
      </header>
      <nav aria-label="Main navigation">
        <Link href="/">HOME</Link>
        <Link href="/services">SERVICES</Link>
        <Link href="/gallery">BEFORE / AFTER</Link>
        <Link href="/book">CONTACT</Link>
        <Link href="/about">ABOUT US</Link>
      </nav>
      <Link className="y2k-suds-rail" href="/book" aria-label="Book Now">
        <div className="y2k-suds-track">
          <strong>BOOK NOW!</strong><span>✦</span><strong>BOOK NOW!</strong><span>✦</span><strong>BOOK NOW!</strong><span>✦</span><strong>BOOK NOW!</strong><span>✦</span>
          <strong>BOOK NOW!</strong><span>✦</span><strong>BOOK NOW!</strong><span>✦</span><strong>BOOK NOW!</strong><span>✦</span><strong>BOOK NOW!</strong><span>✦</span>
        </div>
      </Link>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <img className="footer-logo" src="/dancing-bears-footer-logo.png" alt="Dancing Bears Detail Co." />
      <p>© 2026 DANCING BEARS DETAIL CO.<br /><a href="tel:+15183312299">(518) 331-2299</a> · <a href="mailto:info@dancingbearsdetailco.com">EMAIL</a> · <a href="https://www.instagram.com/dancingbearsdetailco" target="_blank" rel="noreferrer">@DANCINGBEARSDETAILCO</a><br /><a href="https://www.dancingbearsdetailco.com">WWW.DANCINGBEARSDETAILCO.COM</a></p>
    </footer>
  );
}
