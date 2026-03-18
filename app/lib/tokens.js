// ── DESIGN TOKENS ──────────────────────────────────────────
export const COLORS = {
  obsidian:    '#0B0B0B',
  void:        '#050505',
  mysoreGold:  '#D4AF37',
  antiqueGold: '#C8960C',
  shineGold:   '#F5E27A',
  ivory:       '#F8F3E8',
  parchment:   '#E8DFC8',
  ashBlue:     '#08090F',
  stagePurple: '#9B7FE8',
  rudra:       '#3D1A1A',
  voidBlack:   '#0A0A0A'
};

export const FONTS = {
  display: 'Cormorant Garamond, serif',
  serif: 'IM Fell English, serif',
  mono: 'JetBrains Mono, monospace',
};

// ── LOOK DATA ───────────────────────────────────────────────
export const LOOKS = [
  {
    id: 'maharaja',
    label: '01',
    title: 'Maharaja',
    subtitle: 'Groom & Grandeur',
    kannada: 'ಮಹಾರಾಜ',
    piece: 'Ganda Berunda Kanthi Necklace',
    description: 'The double-headed eagle necklace — symbol of sovereignty. Worn by Vijayanagara kings, reborn for the modern groom.',
    bg: '#0D0900',
    accent: '#D4AF37',
    textColor: '#F8F3E8',
    modelType: 'kanthi',
    cameraPos: [0, 0, 5],
    lightIntensity: 3.5,
    envPreset: 'sunset',
    interaction: 'Scroll-triggered 360° pendant zoom',
    rentalFrom: '₹4,800',
  },
  {
    id: 'yoddha',
    label: '02',
    title: 'Yoddha',
    subtitle: 'Warrior & Bold',
    kannada: 'ಯೋಧ',
    piece: 'Narasimha Baju Band (Armlet)',
    description: "The broad armlet of warriors. Narasimha's ferocity captured in structured gold — worn at the bicep, never forgotten.",
    bg: '#06080E',
    accent: '#FFD700',
    textColor: '#E8E8E8',
    modelType: 'armlet',
    cameraPos: [0, 0, 4.5],
    lightIntensity: 4,
    envPreset: 'city',
    interaction: 'Mouse-hover explosion assembly view',
    rentalFrom: '₹3,200',
  },
  {
    id: 'dharma',
    label: '03',
    title: 'Dharma',
    subtitle: 'Spiritual & Traditional',
    kannada: 'ಧರ್ಮ',
    piece: 'Gold-capped Rudraksha Lingam Kanthi',
    description: 'Gold-capped Rudraksha beads cradling a Lingam locket. Each bead a prayer, each link a connection to the eternal.',
    bg: '#120A00',
    accent: '#C4832A',
    textColor: '#E8DFC8',
    modelType: 'rudraksha',
    cameraPos: [0, 0, 4],
    lightIntensity: 2,
    envPreset: 'dawn',
    interaction: 'Meditative slow-parallax float',
    rentalFrom: '₹2,100',
  },
  {
    id: 'samskriti',
    label: '04',
    title: 'Samskriti',
    subtitle: 'Heritage & Minimalist',
    kannada: 'ಸಂಸ್ಕೃತಿ',
    piece: 'Kasina Coin Ring / Thick Kada',
    description: 'One ring. No noise. The Kasina coin ring in 22K gold — old money confidence, worn in silence.',
    bg: '#F5F0E8',
    accent: '#8B6914',
    textColor: '#1A1209',
    modelType: 'ring',
    cameraPos: [0, 0, 3.5],
    lightIntensity: 2.5,
    envPreset: 'warehouse',
    interaction: 'Slow orbital rotation — pure presence',
    rentalFrom: '₹1,400',
  },
  {
    id: 'kalakaar',
    label: '05',
    title: 'Kalakaar',
    subtitle: 'Artist & Performer',
    kannada: 'ಕಲಾಕಾರ',
    piece: 'Karna Kundala & Headgear Accents',
    description: 'Stage-born jewellery for the performer. Ear-chains that catch every light, headgear that commands every entrance.',
    bg: '#070410',
    accent: '#9B7FE8',
    textColor: '#E8E0F8',
    modelType: 'earchain',
    cameraPos: [0, 0, 5],
    lightIntensity: 5,
    envPreset: 'night',
    interaction: 'Dynamic stage-lighting shadow play',
    rentalFrom: '₹2,800',
  },
];

export const STUDIO_HOURS = [
  { day: 'Monday',    time: '9:00 AM – 8:00 PM' },
  { day: 'Tuesday',   time: '9:00 AM – 8:00 PM' },
  { day: 'Wednesday', time: '9:00 AM – 8:00 PM' },
  { day: 'Thursday',  time: '9:00 AM – 8:00 PM' },
  { day: 'Friday',    time: '9:00 AM – 8:00 PM' },
  { day: 'Saturday',  time: '9:00 AM – 9:00 PM' },
  { day: 'Sunday',    time: '10:00 AM – 6:00 PM' },
];

export const FAQ_DATA = [
  {
    category: 'Rental & Booking',
    items: [
      { q: 'How far in advance should I book?', a: '7–10 days for weddings.' },
      { q: 'Security deposit?', a: 'Typically 50% of market value, fully refunded.' }
    ],
  },
  // ... rest of your FAQ items
];

export const TEAM = [
  { initial: 'A', name: 'Aniruddh MC',  role: 'Founder & Creative Director' },
  { initial: 'C', name: 'Chandana S', role: 'Head of Styling' },
  { initial: 'N', name: 'Nandan MC',   role: 'Master Craftsman & QC' },
];

export function buildWhatsAppLink(name = '', event = '', looks = []) {
  const msg = `Hi Simhaavatar! I'm ${name}, interested in renting jewellery for ${event || 'an event'}. Looking at: ${looks.length ? looks.join(', ') : 'your collection'}.`;
  return `https://wa.me/919632838185?text=${encodeURIComponent(msg)}`;
}