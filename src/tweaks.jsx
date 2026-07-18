// ─────────────────────────────────────────────────────────────
// Panneau Tweaks · 3 contrôles expressifs qui changent la sensation
// (pas de pixel-pushing : chaque option remodèle vraiment l'ambiance)
// ─────────────────────────────────────────────────────────────

const TWEAK_DEFAULTS = {
  mood: "creamy",     // creamy | sunset | rosa
  pal:  "classic",    // classic | punchy | olive
  energy: "brand",    // calme | brand | pop
};

function useTweaks() {
  const [t, setT] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("louisa.tweaks") || "{}");
      return { ...TWEAK_DEFAULTS, ...saved };
    } catch { return TWEAK_DEFAULTS; }
  });
  useEffect(() => {
    localStorage.setItem("louisa.tweaks", JSON.stringify(t));
    const r = document.documentElement;
    r.setAttribute("data-mood", t.mood);
    r.setAttribute("data-pal", t.pal);
    r.setAttribute("data-energy", t.energy);
  }, [t]);
  const set = (k, v) => setT((p) => ({ ...p, [k]: v }));
  return [t, set];
}

// Segmented radio · 3 options bien visibles
function Segmented({ label, value, options, onChange, hint }) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">{label}</p>
        {hint && <p className="text-[10px] text-muted/80 italic">{hint}</p>}
      </div>
      <div className="mt-2 grid grid-cols-3 gap-1 rounded-full bg-cream/5 p-1">
        {options.map((o) => (
          <button key={o.id} onClick={() => onChange(o.id)}
            className={"rounded-full px-2 py-2 text-[11px] font-semibold tracking-wide transition-all " +
              (value === o.id ? "bg-red text-ink shadow-glow-red" : "text-muted hover:text-ink")}>
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function TweaksPanel({ tweaks, set }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Bouton flottant */}
      <button onClick={() => setOpen((o) => !o)}
        aria-label="Tweaks"
        className="fixed bottom-5 right-5 z-[70] grid h-12 w-12 place-items-center rounded-full bg-red text-ink shadow-glow-red transition-all hover:scale-105 active:scale-95">
        {open ? <IconX /> : <IconSparkle />}
      </button>

      {/* Panneau */}
      <div className={"fixed bottom-20 right-5 z-[70] w-[min(92vw,320px)] origin-bottom-right rounded-2xl border border-line bg-ink/95 p-5 shadow-2xl backdrop-blur-xl transition-all duration-300 " +
        (open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0")}>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="font-display text-xl text-red">Tweaks</h3>
            <p className="text-[11px] text-muted">Reshapez l'ambiance Louisa.</p>
          </div>
          <span className="font-script text-2xl text-pink">ciao</span>
        </div>

        <div className="space-y-4">
          <Segmented label="Ambiance" hint="température du fond" value={tweaks.mood}
            onChange={(v) => set("mood", v)}
            options={[
              { id: "creamy", label: "Crème" },
              { id: "sunset", label: "Soleil" },
              { id: "rosa",   label: "Rosa" },
            ]} />

          <Segmented label="Palette" hint="accents brand" value={tweaks.pal}
            onChange={(v) => set("pal", v)}
            options={[
              { id: "classic", label: "Classique" },
              { id: "punchy",  label: "Punchy" },
              { id: "olive",   label: "Olive" },
            ]} />

          <Segmented label="Énergie" hint="rayures · stickers · halos" value={tweaks.energy}
            onChange={(v) => set("energy", v)}
            options={[
              { id: "calme", label: "Calme" },
              { id: "brand", label: "Brand" },
              { id: "pop",   label: "Pop" },
            ]} />
        </div>

        <button onClick={() => { localStorage.removeItem("louisa.tweaks"); set("mood","creamy"); set("pal","classic"); set("energy","brand"); }}
          className="mt-5 w-full rounded-full border border-line py-2 text-[11px] font-mono uppercase tracking-[0.2em] text-muted transition-colors hover:text-red hover:border-red/40">
          Réinitialiser
        </button>
      </div>
    </>
  );
}

Object.assign(window, { useTweaks, TweaksPanel, TWEAK_DEFAULTS });
