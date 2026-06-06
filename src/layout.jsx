// ─────────────────────────────────────────────────────────────
// Layout : Navbar (fixe) + menu mobile + Footer
// ─────────────────────────────────────────────────────────────
const NAV = [
  { id: "accueil", label: "Accueil" },
  { id: "carte", label: "La Carte" },
  { id: "coupe", label: "Coupe du Monde 2026" },
  { id: "contact", label: "Contact" },
];

function Navbar({ page, go, onToast }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const status = useOpenStatus();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [page]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={"fixed inset-x-0 top-0 z-50 transition-all duration-500 " +
        (scrolled || open
          ? "bg-ink/90 backdrop-blur-xl border-b border-line"
          : "bg-gradient-to-b from-ink/70 to-transparent border-b border-transparent")}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8 sm:py-6">
          <Logo onClick={() => go("accueil")} />

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => go(n.id)}
                className={"relative rounded-full px-4 py-2 text-[14px] font-semibold transition-colors " +
                  (page === n.id ? "text-cream" : "text-muted hover:text-cream")}>
                {n.label}
                {page === n.id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-red" />
                )}
              </button>
            ))}
            {status && (
              <span className={"ml-2 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold " +
                (status.open ? "border-green/30 bg-green/10 text-green" : "border-cream/15 bg-cream/5 text-muted")}>
                <span className={"h-1.5 w-1.5 rounded-full " + (status.open ? "animate-pulse bg-green" : "bg-muted")} />
                {status.label}
              </span>
            )}
          </nav>

          <div className="mr-2 flex items-center gap-2 sm:mr-6 lg:mr-10">
            <div className="hidden sm:block">
              <MenuDownloadBtn onToast={onToast} className="!px-5 !py-2.5 !text-[13px]" />
            </div>
            <button onClick={() => setOpen((o) => !o)}
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-cream lg:hidden"
              aria-label="Menu">
              {open ? <IconX /> : <IconMenu />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile plein écran (scrollable) */}
      <div className={"fixed inset-0 z-40 lg:hidden transition-all duration-500 " +
        (open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0")}>
        <div className="absolute inset-0 bg-ink/97 backdrop-blur-xl" onClick={() => setOpen(false)} />
        <div className="relative flex h-full flex-col overflow-y-auto px-8 pb-12 pt-28">
          <nav className="flex flex-col gap-1">
            {NAV.map((n, i) => (
              <button key={n.id} onClick={() => go(n.id)}
                style={{ transitionDelay: open ? i * 60 + 80 + "ms" : "0ms" }}
                className={"reveal " + (open ? "reveal-in " : "") +
                  "flex items-center justify-between border-b border-line py-5 text-left font-display text-3xl font-extrabold tracking-tight " +
                  (page === n.id ? "text-red" : "text-cream")}>
                {n.label}
                <IconArrowUR size={26} />
              </button>
            ))}
          </nav>
          <div className="mt-10">
            <MenuDownloadBtn onToast={onToast} variant="solid" tone="red" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
}

function Footer({ go, onToast }) {
  const status = useOpenStatus();
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs font-script text-2xl leading-tight text-pink">
              Pizzas de qualité, Bar à Vins et beaucoup d'amour&nbsp;!
            </p>
          </div>
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">Navigation</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.id}>
                  <button onClick={() => go(n.id)} className="text-cream/80 transition-colors hover:text-red">{n.label}</button>
                </li>
              ))}
              <li>
                {MENU_READY ? (
                  <a href={MENU_PDF_URL} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cream/80 transition-colors hover:text-pink">
                    <IconDownload size={15} /> Menu (PDF)
                  </a>
                ) : (
                  <button onClick={() => onToast && onToast("Le menu PDF arrive très bientôt 📄")}
                    className="inline-flex items-center gap-2 text-cream/80 transition-colors hover:text-pink">
                    <IconDownload size={15} /> Menu (PDF)
                  </button>
                )}
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">Nous trouver</h4>
            <ul className="mt-4 space-y-3 text-sm text-cream/80">
              <li className="flex gap-2.5"><IconPin size={17} className="mt-0.5 shrink-0 text-blue" /> {CONTACT.address}</li>
              <li className="flex gap-2.5"><IconPhone size={17} className="shrink-0 text-blue" /> {CONTACT.phoneDisplay}</li>
              {status && (
                <li className="flex items-center gap-2">
                  <span className={"h-2 w-2 shrink-0 rounded-full " + (status.open ? "animate-pulse bg-green" : "bg-red/50")} />
                  <span className={"text-sm font-semibold " + (status.open ? "text-green" : "text-red/80")}>{status.label}</span>
                </li>
              )}
              <li className="flex gap-3 pt-1">
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-line transition-colors hover:border-pink hover:text-pink"><IconInstagram size={18} /></a>
                {CONTACT.whatsapp && <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-line transition-colors hover:border-green hover:text-green"><IconWhatsapp size={18} /></a>}
                <a href={CONTACT.maps} target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-line transition-colors hover:border-blue hover:text-blue"><IconPin size={18} /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-center text-xs text-muted sm:flex-row sm:text-left">
          <span>© {new Date().getFullYear()} Chez Louisa · Fort-de-France, Martinique.</span>
          <span className="flex items-center gap-1.5">Fait avec <IconHeart size={13} className="text-red" fill="currentColor" /> au cœur de la Rue Colorée</span>
        </div>
      </div>
    </footer>
  );
}

// ── Barre d'action mobile (sticky bas, hors desktop) ─────────
function MobileActionBar() {
  const cols = CONTACT.whatsapp ? "grid-cols-3" : "grid-cols-2";
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/95 backdrop-blur-xl shadow-[0_-8px_24px_rgba(0,0,0,0.06)] md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <div className={"mx-auto grid max-w-md divide-x divide-line " + cols}>
        <a href={"tel:" + CONTACT.phoneTel}
          className="flex flex-col items-center justify-center gap-1 py-3 text-red transition-colors active:bg-red/10">
          <IconPhone size={20} />
          <span className="text-[11px] font-bold uppercase tracking-wider">Appeler</span>
        </a>
        {CONTACT.whatsapp && (
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 py-3 text-green transition-colors active:bg-green/10">
            <IconWhatsapp size={20} />
            <span className="text-[11px] font-bold uppercase tracking-wider">WhatsApp</span>
          </a>
        )}
        <a href={CONTACT.maps} target="_blank" rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-red transition-colors active:bg-red/10">
          <IconPin size={20} />
          <span className="text-[11px] font-bold uppercase tracking-wider">Itinéraire</span>
        </a>
      </div>
    </div>
  );
}

function FloatingWhatsApp() {
  if (!CONTACT.whatsapp) return null;
  const url = CONTACT.whatsapp + "?text=Bonjour+Chez+Louisa+%F0%9F%8D%95+Je+souhaite+commander+%C3%A0+emporter+!";
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      aria-label="Contacter par WhatsApp"
      className="fixed bottom-[80px] right-4 z-[60] grid h-14 w-14 place-items-center rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95 md:bottom-6"
      style={{ backgroundColor: "#25D366" }}>
      <IconWhatsapp size={26} className="text-white" style={{ color: "white" }} />
    </a>
  );
}

Object.assign(window, { NAV, Navbar, Footer, MobileActionBar, FloatingWhatsApp });
