// ─────────────────────────────────────────────────────────────
// Page Coupe du Monde 2026 · édition pizzas pays
// ─────────────────────────────────────────────────────────────
function CountryPizzaCard({ p, idx }) {
  return (
    <Reveal delay={idx * 80}
      className={`group relative flex flex-col rounded-[1.75rem] border border-line bg-panel/30 p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-${p.tone}/40 hover:bg-panel/70`}>
      <div className="text-5xl leading-none">{p.flag}</div>
      <h3 className="mt-4 font-display text-3xl tracking-tight text-red">{p.name}</h3>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">{p.country}</p>
      <p className="mx-auto mt-5 max-w-xs text-cream/80 leading-relaxed">{p.desc}</p>
      {p.tags && (
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {p.tags.map((t) => <DietTag key={t} tag={t} />)}
        </div>
      )}
    </Reveal>
  );
}

function CoupePage({ go }) {
  return (
    <div className="pt-28">
      {/* Hero festif */}
      <section className="relative overflow-hidden">
        <div className="deco-halo pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-pink/50 blur-[130px]" />
        <div className="deco-halo pointer-events-none absolute right-0 top-32 h-72 w-72 rounded-full bg-red/30 blur-[130px]" />
        <div className="deco-halo pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-green/30 blur-[130px]" />
        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 sm:py-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-green/15 px-5 py-2.5 text-sm font-bold text-green">
              <IconCalendar size={16} /> 11 juin → 19 juillet 2026
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mx-auto mt-7 max-w-3xl text-[clamp(3rem,9vw,6.5rem)] italic leading-[0.9] tracking-tight text-red" style={{ fontFamily: '"DM Serif Display", serif' }}>
              La Coupe du Monde<br />
              <span className="not-italic font-display text-ink">se vit Chez Louisa</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-xl font-script text-3xl text-green sm:text-4xl">
              5 pizzas pour 5 pays<span className="text-red">.</span>
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mx-auto mt-5 max-w-xl text-lg text-cream/80">
              Une édition limitée pendant la compétition · chaque pizza inspirée d'un grand pays du foot.
              <span className="text-red"> Grande soirée finale le 19 juillet&nbsp;!</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pizzas pays · grille centrée */}
      <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WORLDCUP_PIZZAS.map((p, i) => <CountryPizzaCard key={p.name} p={p} idx={i} />)}
        </div>
        <Reveal className="mt-10 text-center text-sm text-muted">
          Édition limitée · disponibles tout au long de la compétition · selon arrivage.
        </Reveal>
      </section>

      {/* Bandeau finale */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-green p-10 text-center sm:p-14">
            <div className="deco-halo pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-red/40 blur-[80px]" />
            <div className="deco-halo pointer-events-none absolute -bottom-10 left-10 h-40 w-40 rounded-full bg-pink/50 blur-[80px]" />
            <div className="relative">
              <IconTrophy size={42} className="mx-auto text-pink" />
              <h2 className="mt-4 text-5xl italic tracking-tight text-red sm:text-6xl" style={{ fontFamily: '"DM Serif Display", serif' }}>
                Soirée Finale<br />
                <span className="not-italic font-display text-ink">19 juillet</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-ink/80">
                Réservez votre tablée pour vivre la finale dans la meilleure ambiance de Fort-de-France.
                Les places partent vite&nbsp;!
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Btn tone="red" href={"tel:" + CONTACT.phoneTel}>Commander maintenant</Btn>
                <Btn variant="outline" tone="red" onClick={() => go("carte")}>Voir la carte</Btn>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

Object.assign(window, { CoupePage, CountryPizzaCard });
