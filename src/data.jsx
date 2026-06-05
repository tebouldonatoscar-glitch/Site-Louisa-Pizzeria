// ─────────────────────────────────────────────────────────────
// Chez Louisa · données du site
// ─────────────────────────────────────────────────────────────

const MENU_READY = true;
const MENU_PDF_URL = "assets/menu-chez-louisa.pdf";

// Images locales (livrées par l'équipe Louisa)
const IMG = {
  illustration: "assets/illustration-louisa.png",
  logo: "assets/logo-louisa.png",
  pizzaBoard: "assets/pizza-1.png",       // Pizza légumes / oignons rouges
  pizzaSpicy: "assets/pizza-2.png",       // Pizza chorizo-basilic
  pizzaSlice: "assets/pizza-3.png",       // Part de pizza tenue à la main
  facade:     "assets/louisa-facade.png", // Devanture du restaurant
  boxes:      "assets/louisa-boxes.png",  // Boîtes pizza rayées Louisa
};

const BADGES = [
  { label: "Pizzeria Premium", tone: "red" },
  { label: "Bar à Vins", tone: "blue" },
  { label: "Ouvert fin 2024", tone: "pink" },
  { label: "Options Végé & Vegan", tone: "green" },
];

// ── La Carte ──────────────────────────────────────────────────
const MENU = [
  {
    id: "classiques",
    name: "Pizzas Classiques",
    range: "14€ – 19€",
    blurb: "La base napolitaine, généreuse et servie entière · ciseaux à table.",
    items: [
      { name: "Margherita", price: 14, desc: "Sauce tomate Louisa, fiordilatte, basilic frais.", tags: ["vege"] },
      { name: "Rita", price: 15, desc: "Tomate, mozzarella, jambon supérieur, origan." },
      { name: "Rosa", price: 15, desc: "Crème, mozzarella, tomates cerises confites, roquette.", tags: ["vege"] },
      { name: "Calzona", price: 17, desc: "Chausson garni : jambon, champignons, mozzarella, œuf." },
      { name: "Dalia", price: 17, desc: "Chèvre, miel local, noix, mozzarella.", tags: ["vege", "signature"] },
      { name: "Giulia", price: 18, desc: "Les 4 fromages, crème, mozzarella.", tags: ["vege"] },
      { name: "Gustosa", price: 18, desc: "Tomate, mozzarella, chorizo doux, poivrons grillés.", tags: ["spicy"] },
      { name: "Louisa", price: 16, desc: "Légumes du marché grillés, pesto, mozzarella.", tags: ["vege", "signature"] },
      { name: "Veganina", price: 17, desc: "Sauce tomate, légumes rôtis, mozzarella végétale.", tags: ["vegan"] },
    ],
  },
  {
    id: "premium",
    name: "Pizzas Premium",
    range: "22€ – 25€",
    blurb: "Produits d'exception, créations signature de la maison.",
    items: [
      { name: "Tartuffata", price: 25, desc: "Crème de truffe, champignons, copeaux de truffe.", tags: ["signature"] },
      { name: "Bianca", price: 23, desc: "Crème fraîche, saumon fumé, aneth, citron." },
      { name: "Valentina", price: 24, desc: "Marlin fumé local, crème de giraumon, oignons rouges.", tags: ["signature"] },
      { name: "Mila", price: 23, desc: "Crevettes sautées à l'ail, tomates cerises, persillade." },
      { name: "Carla", price: 25, desc: "Magret de canard fumé, figues, miel, roquette.", tags: ["signature"] },
    ],
  },
  {
    id: "alternativo",
    name: "Alternativo",
    range: "9€ – 18€",
    blurb: "Pour celles et ceux qui veulent sortir de la pizza.",
    items: [
      { name: "Panuozzo", price: 16, desc: "Sandwich napolitain chaud, charcuterie & mozzarella." },
      { name: "Salade Chèvre Miel", price: 14, desc: "Mesclun, chèvre chaud, miel, noix.", tags: ["vege"] },
      { name: "Cesaria", price: 15, desc: "César revisitée, poulet grillé, copeaux de parmesan." },
      { name: "Veggie", price: 9, desc: "Salade de légumes croquants du marché.", tags: ["vege", "vegan"] },
      { name: "Pâte Truffe", price: 18, desc: "Pâtes fraîches, crème de truffe, parmesan.", tags: ["vege"] },
      { name: "Pesto", price: 14, desc: "Pâtes fraîches au pesto maison, pignons.", tags: ["vege"] },
    ],
  },
  {
    id: "dolce",
    name: "Dolce & Boissons",
    range: "8€ – 10€",
    blurb: "La douceur finale · et la sélection du Bar à Vins.",
    items: [
      { name: "Panacotta Louisa", price: 8, desc: "Panna cotta vanille, coulis de fruits locaux.", tags: ["vege"] },
      { name: "Tiramisu Louisa", price: 9, desc: "Tiramisu maison, café, cacao.", tags: ["vege"] },
      { name: "Felicita", price: 10, desc: "Pizza dessert Nutella-banane, sucre glace.", tags: ["vege", "signature"] },
    ],
  },
];

// Bar à vins (présenté à part, sans prix inventés)
const WINES = [
  { label: "Rouges", note: "Côtes-du-Rhône, Bordeaux, Chianti", tone: "red" },
  { label: "Blancs", note: "Sancerre, Chardonnay, Pinot Grigio", tone: "pink" },
  { label: "Rosés", note: "Provence, frais et fruités", tone: "pink" },
  { label: "Bières locales", note: "Lorraine, Carib & artisanales", tone: "blue" },
  { label: "Softs", note: "Limonades & jus de fruits du pays", tone: "blue" },
];

const BASES_NOTE =
  "Bases artisanales au choix : Sauce Tomate Louisa, Crème de Giraumon Louisa (spécialité locale), ou Crème Fraîche.";

// ── Coupe du Monde 2026 · pizzas édition limitée ─────────────
const WORLDCUP_PIZZAS = [
  {
    name: "La Bleue",
    flag: "🇨🇵",
    country: "France",
    desc: "Crème fraîche, mozzarella, gorgonzola, poulet boucaé, oignons rouges.",
    tone: "blue",
  },
  {
    name: "La Furia",
    flag: "🇪🇸",
    country: "Espagne",
    desc: "Sauce tomate Louisa, mozzarella, chorizo, poivrons frais, huile pimentée maison.",
    tone: "red",
    tags: ["spicy"],
  },
  {
    name: "La Seleção",
    flag: "🇧🇷",
    country: "Brésil",
    desc: "Crème de giraumon Louisa, mozzarella, maïs, poivrons verts, basilic frais.",
    tone: "green",
    tags: ["signature"],
  },
  {
    name: "La Lusitania",
    flag: "🇵🇹",
    country: "Portugal",
    desc: "Sauce tomate Louisa, mozzarella, chorizo, oignons rouges, tomates cerises, olives noires.",
    tone: "red",
  },
  {
    name: "L'Albiceleste",
    flag: "🇦🇷",
    country: "Argentine",
    desc: "Sauce tomate Louisa, mozzarella, double portion de poulet boucaé, oignons rouges, sauce chimichurri maison.",
    tone: "blue",
    tags: ["signature"],
  },
];

// ── Coupe du Monde 2026 ───────────────────────────────────────
const OFFERS = [
  {
    name: "Match du soir",
    price: "24€",
    unit: "/ pers.",
    highlight: false,
    perks: ["1 pizza au choix", "1 boisson (vin, bière ou soft)", "Ambiance écran géant"],
  },
  {
    name: "Pack Supporters",
    price: "55€",
    unit: "pour 2",
    highlight: true,
    badge: "Recommandé",
    perks: ["2 pizzas au choix", "1 bouteille de vin au choix", "1 dessert Dolce au choix"],
  },
  {
    name: "Tablée Louisa",
    price: "99€",
    unit: "pour 4",
    highlight: false,
    perks: ["4 pizzas au choix", "2 bouteilles au choix", "Apéro de bienvenue offert"],
  },
];

// ── Contact ───────────────────────────────────────────────────
const CONTACT = {
  address: "13 Rue Garnier Pagès, Fort-de-France 97200, Martinique",
  hours: [
    { d: "Mardi – Vendredi", h: "12h00 – 23h30" },
    { d: "Samedi", h: "18h00 – 23h30" },
    { d: "Dimanche & Lundi", h: "Fermé", closed: true },
  ],
  phoneDisplay: "05 96 54 96 50",
  phoneTel: "+596596549650",
  whatsapp: "https://wa.me/596596549650",
  maps:
    "https://www.google.com/maps/place/2+2+Louisa/@14.6040599,-61.0714455,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgMCw07Lu7QE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAPNQkAHOgLN75UJC-Cvhy1tGiDlJs5XC5uamOEPOAKzyRyLF74G-VmtFu3RNY4qDuC9ZK5JtMfv5GEOkJsp0CI69v7CgiSGRRGmLVnkwdrM8YWBJl4cRxUzZOQhaDe66HTNKwRwDeB40jA%3Dw203-h152-k-no!7i4096!8i3072!4m9!3m8!1s0x8c6aa7002ac5a77d:0x16f1202cc9990cb3!8m2!3d14.6040599!4d-61.0714455!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11wv3ls8ws?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D",
  instagram: "https://www.instagram.com/chezlouisa_fwi5",
};

Object.assign(window, {
  MENU_READY, MENU_PDF_URL, IMG, BADGES, MENU, WINES, BASES_NOTE, OFFERS, WORLDCUP_PIZZAS, CONTACT,
});
