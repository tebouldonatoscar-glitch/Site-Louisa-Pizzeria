// ─────────────────────────────────────────────────────────────
// Icônes (style trait, viewBox 24, currentColor) — inspirées Lucide
// ─────────────────────────────────────────────────────────────
const Svg = ({ children, size = 22, fill = "none", sw = 2, ...p }) => (
  <svg
    width={size} height={size} viewBox="0 0 24 24" fill={fill}
    stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"
    {...p}
  >
    {children}
  </svg>
);

const IconMenu = (p) => <Svg {...p}><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></Svg>;
const IconX = (p) => <Svg {...p}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></Svg>;
const IconPhone = (p) => <Svg {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></Svg>;
const IconPin = (p) => <Svg {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></Svg>;
const IconInstagram = (p) => <Svg {...p}><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><line x1="17.5" y1="6.5" x2="17.5" y2="6.5" /></Svg>;
const IconClock = (p) => <Svg {...p}><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15.5 14" /></Svg>;
const IconScissors = (p) => <Svg {...p}><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><line x1="20" y1="4" x2="8.12" y2="15.88" /><line x1="14.47" y1="14.48" x2="20" y2="20" /><line x1="8.12" y1="8.12" x2="12" y2="12" /></Svg>;
const IconWine = (p) => <Svg {...p}><path d="M8 22h8" /><path d="M12 15v7" /><path d="M5 3h14l-1.2 6a5.8 5.8 0 0 1-11.6 0L5 3Z" /></Svg>;
const IconLeaf = (p) => <Svg {...p}><path d="M11 20A7 7 0 0 1 4 13c0-6 7-9 16-9 0 9-3 16-9 16Z" /><path d="M4 20c4-3 7-6 9-9" /></Svg>;
const IconDownload = (p) => <Svg {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></Svg>;
const IconArrow = (p) => <Svg {...p}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></Svg>;
const IconArrowUR = (p) => <Svg {...p}><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></Svg>;
const IconHeart = (p) => <Svg {...p}><path d="M19 14c1.5-1.5 3-3.4 3-5.5A4.5 4.5 0 0 0 12 5 4.5 4.5 0 0 0 2 8.5c0 2.1 1.5 4 3 5.5l7 7Z" /></Svg>;
const IconStar = (p) => <Svg {...p}><polygon points="12 2 15.1 8.6 22 9.3 17 14.1 18.2 21 12 17.6 5.8 21 7 14.1 2 9.3 8.9 8.6 12 2" /></Svg>;
const IconChevron = (p) => <Svg {...p}><polyline points="6 9 12 15 18 9" /></Svg>;
const IconWhatsapp = (p) => <Svg {...p}><path d="M3 21l1.9-5.6A8.5 8.5 0 1 1 12 21a8.5 8.5 0 0 1-4.2-1.1L3 21Z" /><path d="M8.5 9c0 4 3 6.5 6.5 6.5l1-2-2.3-1-1 1c-1-.5-2.2-1.7-2.7-2.7l1-1-1-2.3-2 .5C8 8 8.2 8.5 8.5 9Z" fill="none" /></Svg>;
const IconSparkle = (p) => <Svg {...p}><path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z" /></Svg>;
const IconTrophy = (p) => <Svg {...p}><path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" /><path d="M7 5H4v2a3 3 0 0 0 3 3" /><path d="M17 5h3v2a3 3 0 0 1-3 3" /><path d="M12 13v4" /><path d="M8 21h8" /><path d="M9 21a3 3 0 0 1 6 0" /></Svg>;
const IconCalendar = (p) => <Svg {...p}><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="16" y1="2" x2="16" y2="6" /></Svg>;

Object.assign(window, {
  IconMenu, IconX, IconPhone, IconPin, IconInstagram, IconClock, IconScissors,
  IconWine, IconLeaf, IconDownload, IconArrow, IconArrowUR, IconHeart, IconStar,
  IconChevron, IconWhatsapp, IconSparkle, IconTrophy, IconCalendar,
});
