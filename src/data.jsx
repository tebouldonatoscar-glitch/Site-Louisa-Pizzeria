// ─────────────────────────────────────────────────────────────
// Chez Louisa · données du site
// ─────────────────────────────────────────────────────────────

const MENU_READY = true;
const MENU_PDF_URL = "assets/menu-chez-louisa.pdf";

// Images locales (livrées par l'équipe Louisa)
const IMG = {
  illustration: "assets/illustration-louisa.webp",
  logo: "assets/logo-louisa.webp",
  logoMark: "assets/logo-mark-pink.webp",
  salad: "assets/louisa-salad.webp",
  dessert: "assets/louisa-dessert.webp",
  pizzaBoard: "assets/pizza-1.webp",       // Pizza légumes / oignons rouges
  pizzaSpicy: "assets/pizza-2.webp",       // Pizza chorizo-basilic
  pizzaSlice: "assets/pizza-3.webp",       // Part de pizza tenue à la main
  facade:     "assets/louisa-facade.webp", // Devanture du restaurant
  boxes:      "assets/louisa-boxes.webp",  // Boîtes pizza rayées Louisa
};

const BADGES = [
  { label: "Pizzeria Premium", tone: "red" },
  { label: "Bar à Vins", tone: "blue" },
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
      { name: "Cannoli", price: 8, desc: "Cannoli siciliens, ricotta sucrée, pépites de chocolat.", tags: ["vege"] },
      { name: "Café Gourmand", price: 9, desc: "Expresso et trio de mini-douceurs maison.", tags: ["vege"] },
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
  reservation: "https://bookings.zenchef.com/results?rid=386258&pid=1001",
  ubereats: "https://www.ubereats.com/store-browse-uuid/04e2a8ae-4871-52a3-b935-7fba529752d3?diningMode=DELIVERY",
  maps:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("13 Rue Garnier Pagès, Fort-de-France 97200, Martinique"),
  instagram: "https://www.instagram.com/chezlouisa_fwi",
};

Object.assign(window, {
  MENU_READY, MENU_PDF_URL, IMG, BADGES, MENU, WINES, BASES_NOTE, CONTACT,
});
