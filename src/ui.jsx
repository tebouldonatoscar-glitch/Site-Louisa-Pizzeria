// ─────────────────────────────────────────────────────────────
// Composants UI partagés
// ─────────────────────────────────────────────────────────────
const { useState, useEffect, useRef, useCallback } = React;

// Image gourmande avec repli élégant (placeholder rayé + légende mono)
function Img({ src, alt, label, className = "", imgClass = "object-cover" }) {
  const [err, setErr] = useState(false);
  return (
    <div className={"relative overflow-hidden bg-panel " + className}>
      {!err && (
        <img
          src={src} alt={alt}
          onError={() => setErr(true)}
          loading="lazy"
          className={"h-full w-full transition-transform duration-[1200ms] ease-out " + imgClass}
        />
      )}
      {err && (
        <div className="placeholder-stripes absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted/80 px-4 text-center">
            {label || alt || "photo"}
          </span>
        </div>
      )}
    </div>
  );
}

const toneMap = {
  red: "text-red border-red/40 bg-red/10",
  pink: "text-red border-red/30 bg-pink/25",
  blue: "text-blue border-blue/40 bg-blue/10",
  green: "text-green border-green/40 bg-green/10",
};

function Badge({ label, tone = "red" }) {
  return (
    <span className={"inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-semibold tracking-wide " + (toneMap[tone] || toneMap.red)}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {label}
    </span>
  );
}

// Bouton · variantes solide / contour / fantôme
function Btn({ children, onClick, href, variant = "solid", tone = "red", className = "", target, ...rest }) {
  const base =
    "cursor-pizza group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold tracking-wide transition-all duration-300 active:scale-[0.97]";
  const styles = {
    solid: `bg-${tone} text-ink shadow-glow-${tone} hover:brightness-110 hover:-translate-y-0.5`,
    outline: `border-2 border-${tone} text-${tone} hover:bg-${tone} hover:text-ink hover:-translate-y-0.5`,
    ghost: "text-cream/80 hover:text-cream",
  };
  const cls = `${base} ${styles[variant]} ${className}`;
  if (href) return <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} onClick={onClick} className={cls} {...rest}>{children}</a>;
  return <button onClick={onClick} className={cls} {...rest}>{children}</button>;
}

// Apparition douce · entrée immédiate avec délai facultatif (sans IO pour fiabilité)
// variant: "fade" (défaut), "tilt" (rotation -6°), "tilt-r" (rotation +7°)
function Reveal({ children, className = "", delay = 0, variant = "fade", as: Tag = "div" }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setVis(true));
    return () => cancelAnimationFrame(id);
  }, []);
  const base = variant === "tilt" ? "reveal-tilt" : variant === "tilt-r" ? "reveal-tilt-r" : "reveal";
  return (
    <Tag ref={ref} style={{ transitionDelay: delay + "ms" }}
      className={`${base} ${vis ? "reveal-in" : ""} ${className}`}>
      {children}
    </Tag>
  );
}

// Petit eyebrow / kicker
function Kicker({ children, tone = "red" }) {
  return (
    <span className={`inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.32em] text-${tone}`}>
      <span className={`h-px w-8 bg-${tone}`} />
      {children}
    </span>
  );
}

function DietTag({ tag }) {
  const map = {
    vege: { t: "Végé", tone: "green", icon: true },
    vegan: { t: "Vegan", tone: "green", icon: true },
    signature: { t: "Signature", tone: "pink", icon: false },
    spicy: { t: "Relevé", tone: "red", icon: false },
  };
  const m = map[tag];
  if (!m) return null;
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${toneMap[m.tone]}`}>
      {m.icon && <IconLeaf size={11} sw={2.4} />}
      {m.t}
    </span>
  );
}

// ── Logo ──────────────────────────────────────────────────────
function Logo({ onClick, compact }) {
  return (
    <button onClick={onClick} className="group ml-2 flex items-center gap-4 text-left sm:ml-6 lg:ml-10">
      <span className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-full bg-pink/30 transition-transform group-hover:rotate-[-6deg] sm:h-16 sm:w-16">
        <img src={IMG.logo} alt="Logo Chez Louisa" className="h-[3.25rem] w-[3.25rem] object-contain sm:h-[3.75rem] sm:w-[3.75rem]" />
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block font-display text-2xl tracking-tight text-red sm:text-3xl">Chez Louisa</span>
          <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.3em] text-muted">Pizzeria & Vins · Garnier Pagès</span>
        </span>
      )}
    </button>
  );
}

// ── Bouton téléchargement du menu ─────────────────────────────
function MenuDownloadBtn({ variant = "outline", tone = "pink", className = "", onToast }) {
  const handle = (e) => {
    if (!MENU_READY) {
      e.preventDefault();
      onToast && onToast("Le menu PDF arrive très bientôt · il sera téléchargeable ici 📄");
    }
  };
  return (
    <Btn
      href={MENU_READY ? MENU_PDF_URL : undefined}
      target={MENU_READY ? "_blank" : undefined}
      onClick={handle}
      variant={variant} tone={tone} className={className}
      download={MENU_READY ? "" : undefined}
    >
      <IconDownload size={18} />
      Télécharger le menu
    </Btn>
  );
}

// ── Toasts ────────────────────────────────────────────────────
function useToasts() {
  const [toasts, setToasts] = useState([]);
  const push = useCallback((msg) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((t) => [...t, { id, msg }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3800);
  }, []);
  return { toasts, push };
}

function ToastStack({ toasts }) {
  return (
    <div className="fixed bottom-6 left-1/2 z-[80] flex w-[min(92vw,440px)] -translate-x-1/2 flex-col gap-2">
      {toasts.map((t) => (
        <div key={t.id} className="toast-in rounded-2xl border border-line bg-panel/95 px-5 py-3.5 text-sm text-cream shadow-2xl backdrop-blur">
          {t.msg}
        </div>
      ))}
    </div>
  );
}

Object.assign(window, {
  Img, Badge, Btn, Reveal, Kicker, DietTag, Logo, MenuDownloadBtn, useToasts, ToastStack, toneMap,
});
