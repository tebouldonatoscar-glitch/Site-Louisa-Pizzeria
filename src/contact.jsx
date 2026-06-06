// ─────────────────────────────────────────────────────────────
// Page Contact & infos pratiques
// ─────────────────────────────────────────────────────────────
function ContactPage({ onToast }) {
  return (
    <div className="pt-28">
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <Kicker tone="blue">Contact & infos pratiques</Kicker>
          <h1 className="mt-4 font-display text-5xl font-extrabold tracking-tight text-cream sm:text-6xl">
            Passez nous voir.
          </h1>
          <p className="mt-3 max-w-lg text-cream/70">
            En plein cœur de la Rue Colorée. 100% à emporter · appelez pour préparer votre commande, surtout pendant la Coupe du Monde.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          {/* Colonne infos */}
          <div className="space-y-5">
            <Reveal className="rounded-2xl border border-line bg-panel/40 p-7">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-blue/40 bg-blue/10 text-blue"><IconPin size={22} /></span>
                <div>
                  <h3 className="font-display text-xl font-bold text-cream">Adresse</h3>
                  <p className="mt-1 text-cream/80">{CONTACT.address}</p>
                  <Btn href={CONTACT.maps} target="_blank" variant="outline" tone="blue" className="mt-4 !py-2.5 !text-[13px]">
                    <IconPin size={16} /> Ouvrir dans Google Maps
                  </Btn>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80} className="rounded-2xl border border-line bg-panel/40 p-7">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-red/40 bg-red/10 text-red"><IconClock size={22} /></span>
                <div className="w-full">
                  <h3 className="font-display text-xl font-bold text-cream">Horaires</h3>
                  <ul className="mt-3 space-y-2">
                    {CONTACT.hours.map((h) => (
                      <li key={h.d} className="flex items-center justify-between gap-4 border-b border-line/60 pb-2 last:border-0">
                        <span className="text-cream/80">{h.d}</span>
                        <span className={"font-semibold " + (h.closed ? "text-red" : "text-cream")}>{h.h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160} className="rounded-2xl border border-line bg-panel/40 p-7">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-pink/40 bg-pink/10 text-pink"><IconPhone size={22} /></span>
                <div>
                  <h3 className="font-display text-xl font-bold text-cream">Téléphone</h3>
                  <a href={"tel:" + CONTACT.phoneTel} className="mt-1 block font-display text-2xl font-extrabold text-cream transition-colors hover:text-pink">{CONTACT.phoneDisplay}</a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Colonne commande + image */}
          <div className="space-y-5">
            <Reveal className="relative overflow-hidden rounded-2xl">
              <Img src={IMG.pizzaSpicy} alt="Pizza chorizo basilic" label="Pizza Louisa au feu de bois"
                className="aspect-[16/11] w-full" imgClass="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-cream/95 via-cream/40 to-transparent p-6 pt-16">
                <p className="font-script text-3xl text-pink">…et beaucoup d'amour&nbsp;!</p>
              </div>
            </Reveal>

            <Reveal delay={100} className="rounded-2xl border border-red/30 bg-gradient-to-br from-red/10 to-panel p-7">
              <h3 className="font-display text-2xl font-extrabold text-cream">Commander à emporter</h3>
              <p className="mt-2 text-sm text-cream/75">100% à emporter · un appel ou un message WhatsApp et on prépare votre commande&nbsp;!</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Btn href={"tel:" + CONTACT.phoneTel} tone="red" className="flex-1">
                  <IconPhone size={18} /> Appeler
                </Btn>
                {CONTACT.whatsapp && (
                  <Btn href={CONTACT.whatsapp} target="_blank" variant="outline" tone="pink" className="flex-1">
                    <IconWhatsapp size={18} /> WhatsApp
                  </Btn>
                )}
              </div>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <Btn href={CONTACT.instagram} target="_blank" variant="ghost" className="flex-1 !justify-start gap-2.5 border border-line">
                  <IconInstagram size={18} className="text-pink" /> @chezlouisa_fwi
                </Btn>
                <MenuDownloadBtn onToast={onToast} variant="ghost" className="flex-1 !justify-start gap-2.5 border border-line" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

window.ContactPage = ContactPage;
