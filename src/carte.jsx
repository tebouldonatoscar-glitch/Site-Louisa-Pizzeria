// ─────────────────────────────────────────────────────────────
// Page La Carte · menu interactif (filtres sans rechargement)
// ─────────────────────────────────────────────────────────────
function DishCard({ item, idx }) {
  return (
    <Reveal delay={Math.min(idx, 6) * 50}
      className="group relative flex items-start justify-between gap-4 rounded-2xl border border-line bg-panel/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red/50 hover:bg-panel/80">
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="font-display text-xl font-bold tracking-tight text-cream transition-colors group-hover:text-red">
            {item.name}
          </h4>
          {(item.tags || []).map((t) => <DietTag key={t} tag={t} />)}
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.desc}</p>
      </div>
      <div className="shrink-0 text-right">
        <span className="font-display text-2xl font-extrabold text-cream">{item.price}<span className="text-base text-pink">€</span></span>
      </div>
    </Reveal>
  );
}

function CartePage({ onToast }) {
  const [cat, setCat] = useState("all");
  const [vegOnly, setVegOnly] = useState(false);

  const cats = [{ id: "all", name: "Toutes" }, ...MENU.map((m) => ({ id: m.id, name: m.name }))];
  const sections = MENU
    .filter((s) => cat === "all" || s.id === cat)
    .map((s) => ({
      ...s,
      items: vegOnly ? s.items.filter((i) => (i.tags || []).some((t) => t === "vege" || t === "vegan")) : s.items,
    }))
    .filter((s) => s.items.length > 0);

  return (
    <div className="pt-28">
      {/* En-tête */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Kicker tone="red">La Carte</Kicker>
            <h1 className="mt-4 font-display text-5xl font-extrabold tracking-tight text-cream sm:text-6xl">
              Bonne pioche.
            </h1>
            <p className="mt-3 max-w-lg text-cream/70">
              Pizzas servies entières avec ciseaux à table. Bases artisanales au choix sur chaque pizza.
            </p>
          </div>
          <MenuDownloadBtn onToast={onToast} variant="outline" tone="pink" />
        </div>
      </section>

      {/* Filtres collants */}
      <div className="sticky top-[68px] z-30 mt-2 border-b border-line bg-ink/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-5 py-3.5 sm:px-8">
          {cats.map((c) => (
            <button key={c.id} onClick={() => setCat(c.id)}
              className={"rounded-full px-4 py-2 text-[13px] font-semibold transition-all " +
                (cat === c.id ? "bg-red text-ink shadow-glow-red" : "border border-line text-muted hover:text-cream")}>
              {c.name}
            </button>
          ))}
          <div className="ml-auto">
            <button onClick={() => setVegOnly((v) => !v)}
              className={"inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold transition-all " +
                (vegOnly ? "bg-green text-ink" : "border border-line text-muted hover:text-cream")}>
              <IconLeaf size={15} /> Végé & Vegan
            </button>
          </div>
        </div>
      </div>

      {/* Sections */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        {sections.length === 0 && (
          <p className="py-20 text-center text-muted">Aucun plat ne correspond à ce filtre.</p>
        )}
        <div className="space-y-16">
          {sections.map((s) => (
            <div key={s.id}>
              <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-3">
                <h2 className="font-display text-3xl font-extrabold tracking-tight text-cream">{s.name}</h2>
                <span className="font-mono text-sm text-pink">{s.range}</span>
              </div>
              {s.blurb && <p className="mb-6 max-w-2xl text-muted">{s.blurb}</p>}
              <div className="grid gap-3 md:grid-cols-2">
                {s.items.map((it, i) => <DishCard key={it.name} item={it} idx={i} />)}
              </div>

              {/* Bloc Bar à vins intégré à Dolce & Boissons */}
              {s.id === "dolce" && (
                <Reveal className="mt-8 rounded-2xl border border-line bg-gradient-to-br from-panel/60 to-ink p-7">
                  <div className="flex items-center gap-3">
                    <IconWine size={22} className="text-blue" />
                    <h3 className="font-display text-2xl font-extrabold text-cream">Le Bar à Vins</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted">Sélection rigoureuse · au verre dès 6€ · à la bouteille dès 24€.</p>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {WINES.map((w) => (
                      <span key={w.label} className={`inline-flex flex-col rounded-xl border px-4 py-2 ${toneMap[w.tone]}`}>
                        <span className="text-sm font-bold">{w.label}</span>
                        <span className="text-[11px] font-normal text-muted">{w.note}</span>
                      </span>
                    ))}
                  </div>
                </Reveal>
              )}
            </div>
          ))}
        </div>

        {/* Note bases artisanales */}
        <Reveal className="mt-16 flex items-start gap-4 rounded-2xl border border-pink/30 bg-pink/5 p-6">
          <IconSparkle size={22} className="mt-0.5 shrink-0 text-pink" />
          <p className="text-cream/85">
            <span className="font-bold text-pink">Note : </span>{BASES_NOTE}
          </p>
        </Reveal>
      </section>
    </div>
  );
}

Object.assign(window, { CartePage, DishCard });
