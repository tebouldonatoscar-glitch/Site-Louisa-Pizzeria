// ─────────────────────────────────────────────────────────────
// Page Mentions légales
// ─────────────────────────────────────────────────────────────
function MentionsPage() {
  return (
    <div className="pt-44">
      <section className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
        <Kicker tone="blue">Informations légales</Kicker>
        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-cream sm:text-5xl">
          Mentions légales
        </h1>
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-cream/80">
          <div>
            <h3 className="font-display text-lg font-bold text-cream">Éditeur du site</h3>
            <p className="mt-2">
              Chez Louisa · Pizzeria & Bar à Vins<br />
              {CONTACT.address}<br />
              Téléphone : {CONTACT.phoneDisplay}
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-cream">Directeur de la publication</h3>
            <p className="mt-2">Le gérant de l'établissement Chez Louisa.</p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-cream">Hébergement</h3>
            <p className="mt-2">Site hébergé par un prestataire d'hébergement web tiers.</p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-cream">Propriété intellectuelle</h3>
            <p className="mt-2">
              L'ensemble des textes, images et éléments graphiques présents sur ce site sont la propriété
              de Chez Louisa, sauf mention contraire, et ne peuvent être reproduits sans autorisation préalable.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-cream">Données personnelles</h3>
            <p className="mt-2">
              Ce site ne collecte aucune donnée personnelle en dehors des informations transmises volontairement
              via les liens de réservation, WhatsApp ou téléphone.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

window.MentionsPage = MentionsPage;
