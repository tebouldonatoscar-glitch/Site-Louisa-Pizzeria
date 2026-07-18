// ─────────────────────────────────────────────────────────────
// Page Accueil · titre en haut, illustration centrée dessous
// ─────────────────────────────────────────────────────────────
function HomeMenuPreview({ go }) {
  const cats = [
    ...MENU.map((m) => ({ id: m.id, name: m.name, range: m.range, items: m.items })),
    { id: "vins", name: "Bar à Vins", wines: true },
  ];
  const [active, setActive] = useState(MENU[0].id);
  const cur = cats.find((c) => c.id === active) || cats[0];
  return (
    <section className="relative mx-3 max-w-6xl overflow-hidden rounded-[2.5rem] px-6 py-14 sm:mx-auto sm:px-12 sm:py-20" style={{ background: "radial-gradient(125% 85% at 50% 50%, rgb(var(--ink)) 38%, rgb(var(--red) / 0.14) 100%)" }}>
      <Reveal>
        <div className="text-center">
          <h2 className="mx-auto max-w-3xl text-5xl italic leading-[1.0] tracking-tight text-red sm:text-6xl" style={{ fontFamily: '"DM Serif Display", serif' }}>
            Le menu<br />
            <span className="not-italic font-display mt-1 inline-block rounded-2xl px-4 py-1.5 text-white" style={{ background: "rgb(var(--cream) / 0.94)" }}>en un coup d'œil.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/85">
            Choisissez une catégorie · les plats apparaissent juste en dessous.
          </p>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {cats.map((c) => (
            <button key={c.id} onClick={() => setActive(c.id)}
              className={"rounded-full px-5 py-2.5 text-sm font-semibold transition-all " +
                (active === c.id
                  ? "bg-red text-ink shadow-glow-red"
                  : "border border-line text-muted hover:border-red/40 hover:text-cream")}>
              {c.name}
            </button>
          ))}
        </div>
      </Reveal>

      <div key={active} className="page-enter mt-10">
        {cur.wines ? (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {WINES.map((w) => (
              <div key={w.label} className={`flex flex-col rounded-2xl border p-5 ${toneMap[w.tone]}`}>
                <span className="font-display text-xl font-bold">{w.label}</span>
                <span className="mt-1 text-sm text-muted">{w.note}</span>
              </div>
            ))}
          </div>
        ) : (
          <>
            <p className="mb-6 text-center font-mono text-sm text-pink">{cur.range}</p>
            <div className="grid gap-3 md:grid-cols-2">
              {cur.items.map((it, i) => <DishCard key={it.name} item={it} idx={i} />)}
            </div>
          </>
        )}
      </div>

      <div className="mt-10 text-center">
        <Btn tone="red" onClick={() => go("carte")}>
          Voir toute la carte <IconArrow size={18} className="transition-transform group-hover:translate-x-1" />
        </Btn>
      </div>
    </section>
  );
}

function HomePage({ go, onToast, onAdmin }) {
  return (
    <div>
      {/* ── HERO · titre en haut ── */}
      <section className="relative overflow-hidden">
        {/* Rayures décoratives sur les bords */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-10 stripes-diag opacity-90 md:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-10 stripes-diag opacity-90 md:block" />
        {/* Halos chauds */}
        <div className="deco-halo pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pink/40 blur-[110px]" />
        <div className="deco-halo pointer-events-none absolute bottom-10 right-1/4 h-64 w-64 rounded-full bg-red/20 blur-[110px]" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center gap-8 px-6 pt-32 pb-20 text-center sm:px-10">
          <Reveal>
            <div className="flex flex-col items-center gap-3">
              <span className="flex h-2.5 w-28 overflow-hidden rounded-full shadow-sm ring-1 ring-cream/10">
                <span className="flex-1 bg-green" />
                <span className="flex-1 bg-white" />
                <span className="flex-1 bg-red" />
              </span>
              <Kicker tone="red">Cucina Italiana · Garnier Pagès</Kicker>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-[clamp(4rem,13vw,10rem)] leading-[0.85] tracking-tight text-red">
              Chez
              <br />
              <span className="italic" style={{ fontFamily: '"DM Serif Display", serif' }}>Louisa</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto max-w-2xl font-script text-3xl leading-tight text-green sm:text-4xl">
              Pizzas de qualité, Bar à Vins
              <span className="text-red"> et beaucoup d'amour&nbsp;!</span>
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="flex flex-wrap justify-center gap-3">
              <Btn tone="red" href={CONTACT.reservation} target="_blank">
                <IconCalendar size={18} /> Réserver une table
              </Btn>
              <Btn variant="outline" tone="green" href={CONTACT.ubereats} target="_blank">
                <IconBike size={18} /> Livraison Uber Eats
              </Btn>
            </div>
          </Reveal>

          {/* Illustration brand sous le titre */}
          <Reveal delay={300} variant="tilt-r">
            <div className="relative mx-auto mt-6 aspect-[3/4] w-[min(78vw,300px)]">
              <div className="absolute inset-0 rounded-[2.2rem] bg-pink/55" />
              <img src={IMG.illustration} alt="Illustration Louisa · Au nom de l'amour du goût et du spiritueux"
                className="absolute inset-0 h-full w-full object-contain p-5"
                onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              <div className="deco-sticker absolute -left-4 -top-4 grid h-24 w-24 -rotate-12 place-items-center rounded-full bg-red text-center font-display text-[15px] leading-none text-ink shadow-2xl ring-4 ring-pink/60">
                <span>
                  Servies<br />entières<br /><span className="font-script text-2xl">+ ciseaux</span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={380}>
            <div className="flex items-center justify-center gap-5 text-sm text-muted">
              <span>13 Rue Garnier Pagès · Fort-de-France</span>
            </div>
          </Reveal>
        </div>

        <button onClick={() => go("carte")} className="absolute bottom-6 left-1/2 -translate-x-1/2 text-red/70 transition-colors hover:text-red">
          <IconChevron size={28} className="animate-bounce" />
        </button>
      </section>

      {/* ── BANDE RAYÉE rouge/rose avec badges ── */}
      <section className="relative">
        <div className="stripes-rouge h-3" />
        <div className="bg-panel/70">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-5 py-7 sm:px-8 sm:gap-4">
            {BADGES.map((b, i) => (
              <Reveal key={b.label} delay={i * 70}><Badge {...b} /></Reveal>
            ))}
          </div>
        </div>
        <div className="stripes-rouge h-3" />
      </section>

      {/* ── MENU INTERACTIF · aperçu de la carte ── */}
      <HomeMenuPreview go={go} />

      {/* ── LE LIEU · devanture rayée ── */}
      <section className="relative mx-auto max-w-6xl px-6 py-14 sm:px-10 sm:py-20">
        <Reveal>
          <div className="text-center">
            <Kicker tone="red">Le Lieu</Kicker>
            <h2 className="mx-auto mt-5 max-w-3xl text-5xl italic leading-[1.0] tracking-tight text-red sm:text-6xl" style={{ fontFamily: '"DM Serif Display", serif' }}>
              Reconnaissable<br />
              <span className="not-italic font-display text-ink">entre toutes.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/85">
              Une façade rayée rouge et rose au cœur de la Rue Colorée. Impossible à manquer ·
              le repère gourmand de Fort-de-France.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} variant="tilt">
          <div className="relative mx-auto mt-12 w-full max-w-3xl">
            <Img src={IMG.facade} alt="Devanture Chez Louisa · façade rayée"
              label="Devanture Louisa · Rue Colorée"
              className="aspect-[4/3] w-full rounded-[2rem] ring-2 ring-red/20" imgClass="object-cover" />
            <div className="deco-sticker absolute -right-4 -top-4 grid h-24 w-24 rotate-6 place-items-center rounded-full bg-green text-center font-script text-2xl text-ink shadow-xl ring-4 ring-pink/40">
              ciao&nbsp;!
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── PARALLAXE FAÇADE · bande immersive ── */}
      <section className="parallax-bg relative h-[60vh] min-h-[420px] w-full"
        style={{ backgroundImage: `url(${IMG.facade})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-red/30 to-ink/80" />
        <div className="relative mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-white/90">13 Rue Garnier Pagès</p>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-5 font-script text-5xl text-white drop-shadow-lg sm:text-7xl">
              Le repère pop<br />
              <span className="text-pink">de Fort-de-France</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── HIGHLIGHT STORY · authenticité des pizzas ── */}
      <section className="relative mx-auto max-w-4xl px-6 py-14 text-center sm:px-10 sm:py-20">
        <Reveal>
          <Kicker tone="red">Le savoir-faire Louisa</Kicker>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mx-auto mt-5 max-w-3xl text-5xl italic leading-[1.0] tracking-tight text-red sm:text-6xl" style={{ fontFamily: '"DM Serif Display", serif' }}>
            Une pâte qui respire,<br />
            <span className="not-italic font-display text-ink">des produits qui parlent.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-cream/85">
            Notre <strong className="text-red">pâte fermente 48 heures</strong> à froid · c'est elle qui donne
            ce moelleux fondant et cette croûte bien dorée. On la marie avec des
            <strong className="text-red"> produits frais du marché</strong>, des <strong className="text-red">fromages italiens</strong> sélectionnés
            et nos <strong className="text-red">crèmes maison</strong> (giraumon, tomate Louisa).
            La pizza arrive entière, on vous tend une paire de ciseaux · et c'est parti pour le partage.
          </p>
        </Reveal>

        <Reveal delay={220} variant="tilt-r">
          <div className="relative mx-auto mt-12 w-full max-w-md">
            <Img src={IMG.pizzaSlice} alt="Pizza Louisa tenue à la main"
              label="Pizza Louisa · pâte fermentée 48h"
              className="aspect-[4/5] w-full rounded-[2rem] hover-zoom ring-2 ring-red/15" imgClass="object-cover" />
          </div>
        </Reveal>

        <Reveal delay={280}>
          <ul className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: IconSparkle,  tone: "red",   t: "Pâte 48h",          d: "Fermentation lente à froid pour un moelleux unique." },
              { icon: IconLeaf,     tone: "green", t: "Produits du marché", d: "Légumes locaux, fromages italiens, crèmes maison." },
              { icon: IconScissors, tone: "red",   t: "Servies entières",  d: "Ciseaux à table, on partage à la napolitaine." },
              { icon: IconWine,     tone: "green", t: "Bar à vins pointu", d: "Rouges, blancs, rosés & bières locales triés sur le volet." },
            ].map((f) => (
              <li key={f.t} className="flex flex-col items-center gap-3 text-center">
                <span className={`grid h-16 w-16 place-items-center rounded-2xl border ${toneMap[f.tone]}`}>
                  <f.icon size={28} />
                </span>
                <p className="text-xl font-semibold text-ink">{f.t}</p>
                <p className="text-base leading-relaxed text-muted">{f.d}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Transition crème → rouge */}
      <div className="grad-to-red"></div>

      {/* ── À EMPORTER · boîtes rayées (section rouge) ── */}
      <section className="theme-red relative overflow-hidden">
        <div className="relative bg-panel/60">
          <div className="deco-halo pointer-events-none absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-red/20 blur-[120px]" />
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-12 sm:px-10 md:grid-cols-2 md:py-16">
            <Reveal variant="tilt">
              <div className="relative w-full">
                <Img src={IMG.boxes} alt="Boîtes Louisa rayées"
                  label="Boîtes Louisa rayées"
                  className="aspect-[4/3] w-full rounded-[2rem] ring-2 ring-red/15" imgClass="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={120} className="text-center md:text-left">
              <Kicker tone="pink">À emporter</Kicker>
              <h2 className="mt-5 text-5xl italic tracking-tight text-white sm:text-6xl" style={{ fontFamily: '"DM Serif Display", serif' }}>
                À emporter,<br />
                <span className="not-italic font-display text-pink">en mode Louisa.</span>
              </h2>
              <p className="mt-5 max-w-md text-lg text-white/90 md:max-w-none">
                Nos boîtes rayées sont devenues l'emblème du quartier. Passez les chercher
                ou appelez · vous repartez avec un peu de la Rue Colorée.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
                <Btn href={CONTACT.ubereats} target="_blank" variant="solid" tone="pink" className="!text-red">
                  <IconBike size={17} /> Commander sur Uber Eats
                </Btn>
                <Btn variant="outline" tone="pink" onClick={() => go("carte")} className="border-white text-white hover:!bg-white hover:!text-red">
                  Voir la carte
                </Btn>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── BAR À VINS (centré, section rouge suite) ── */}
      <section className="theme-red">
        <div className="mx-auto max-w-3xl px-6 py-14 text-center sm:px-10">
        <Reveal><Kicker tone="pink">Bar à Vins</Kicker></Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 font-display text-5xl tracking-tight text-white sm:text-6xl">
            On trinque<span className="italic text-pink" style={{ fontFamily: '"DM Serif Display", serif' }}> ?</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/90">
            Une sélection rigoureuse pour accompagner chaque pizza · du rouge corsé au rosé frais,
            sans oublier les bières locales et les softs du pays.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {WINES.map((w) => (
              <span key={w.label} className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                {w.label}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={260}>
          <Btn variant="outline" tone="pink" className="mt-9 border-white text-white hover:!bg-white hover:!text-red" onClick={() => go("carte")}>
            Voir la carte des vins <IconArrowUR size={17} />
          </Btn>
        </Reveal>
        </div>
      </section>

      {/* Transition rouge → crème */}
      <div className="grad-from-red"></div>

      {/* ── GALERIE · toutes les photos Louisa ── */}
      <section className="mx-auto max-w-6xl px-6 py-14 sm:px-10 sm:py-20">
        <Reveal>
          <div className="text-center">
            <Kicker tone="green">Aussi Chez Louisa</Kicker>
            <h2 className="mx-auto mt-5 max-w-3xl text-5xl italic leading-[1.0] tracking-tight text-red sm:text-6xl" style={{ fontFamily: '"DM Serif Display", serif' }}>
              La maison<br />
              <span className="not-italic font-display text-ink">en images.</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {[
            { src: IMG.pizzaSlice, label: "Pizza Louisa", tone: "red", cls: "col-span-2 row-span-2 aspect-square lg:col-span-2 lg:row-span-2" },
            { src: IMG.facade, label: "Devanture Louisa", tone: "red", cls: "aspect-square" },
            { src: IMG.pizzaBoard, label: "Pizza légumes grillés", tone: "green", cls: "aspect-square" },
            { src: IMG.salad, label: "Salade Louisa", tone: "green", cls: "aspect-square" },
            { src: IMG.dessert, label: "Dessert signature", tone: "pink", cls: "aspect-square" },
            { src: IMG.boxes, label: "Boîtes rayées Louisa", tone: "pink", cls: "col-span-2 aspect-[2/1] lg:col-span-2 lg:aspect-[2/1]" },
            { src: IMG.pizzaSpicy, label: "Pizza chorizo-basilic", tone: "red", cls: "col-span-2 aspect-[2/1] lg:col-span-2 lg:aspect-[2/1]" },
          ].map((g, i) => (
            <Reveal key={i} delay={Math.min(i, 6) * 60} className={g.cls}>
              <Img src={g.src} alt={g.label} label={g.label}
                className={`h-full w-full overflow-hidden rounded-2xl ring-2 ring-${g.tone}/15`}
                imgClass="object-cover hover:scale-[1.05] transition-transform duration-[1100ms]" />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

window.HomePage = HomePage;
window.HomeMenuPreview = HomeMenuPreview;
