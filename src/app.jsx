// ─────────────────────────────────────────────────────────────
// App · navigation, transitions, modal admin, toasts
// ─────────────────────────────────────────────────────────────
function AdminModal({ action, onClose }) {
  if (!action) return null;
  return (
    <div className="fixed inset-0 z-[90] grid place-items-center p-5" role="dialog">
      <div className="absolute inset-0 bg-cream/60 backdrop-blur-sm toast-in" onClick={onClose} />
      <div className="relative w-[min(94vw,460px)] rounded-3xl border border-line bg-panel p-8 shadow-2xl modal-pop">
        <button onClick={onClose} className="absolute right-5 top-5 text-muted hover:text-cream"><IconX size={20} /></button>
        <span className="grid h-12 w-12 place-items-center rounded-xl border border-red/40 bg-red/10 text-red"><IconStar size={22} /></span>
        <h3 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-cream">{action}</h3>
        <p className="mt-3 text-cream/75">
          Cette action fait partie de l'espace équipe. La fonctionnalité sera connectée à vos outils
          (pitch, réseaux sociaux, administration) lors de la mise en production.
        </p>
        <Btn tone="red" className="mt-6 w-full" onClick={onClose}>Compris</Btn>
      </div>
    </div>
  );
}

function App() {
  const [page, setPage] = useState(() => (window.location.hash || "#accueil").slice(1));
  const [admin, setAdmin] = useState(null);
  const { toasts, push } = useToasts();
  const [anim, setAnim] = useState("page-enter");
  const [tweaks, setTweak] = useTweaks();

  const go = useCallback((p) => {
    if (p === page) { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    setPage(p);
    window.location.hash = p;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [page]);

  // ré-anime à chaque changement de page
  useEffect(() => {
    setAnim("");
    const id = requestAnimationFrame(() => setAnim("page-enter"));
    return () => cancelAnimationFrame(id);
  }, [page]);

  useEffect(() => {
    const onHash = () => setPage((window.location.hash || "#accueil").slice(1));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const pages = {
    accueil: <HomePage go={go} onToast={push} onAdmin={setAdmin} />,
    carte: <CartePage onToast={push} />,
    coupe: <CoupePage go={go} />,
    contact: <ContactPage onToast={push} />,
  };

  return (
    <div className="min-h-screen bg-ink">
      <Navbar page={page} go={go} onToast={push} />
      <main key={page} className={anim}>
        {pages[page] || pages.accueil}
      </main>
      <Footer go={go} onToast={push} />
      <MobileActionBar />
      <AdminModal action={admin} onClose={() => setAdmin(null)} />
      <ToastStack toasts={toasts} />
      <TweaksPanel tweaks={tweaks} set={setTweak} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
