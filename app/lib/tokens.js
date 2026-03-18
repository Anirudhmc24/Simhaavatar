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
    description:
      'The double-headed eagle necklace — symbol of sovereignty. Worn by Vijayanagara kings, reborn for the modern groom.',
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
    description:
      "The broad armlet of warriors. Narasimha's ferocity captured in structured gold — worn at the bicep, never forgotten.",
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
    description:
      'Gold-capped Rudraksha beads cradling a Lingam locket. Each bead a prayer, each link a connection to the eternal.',
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
    description:
      'One ring. No noise. The Kasina coin ring in 22K gold — old money confidence, worn in silence.',
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
    description:
      'Stage-born jewellery for the performer. Ear-chains that catch every light, headgear that commands every entrance.',
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

// ── STUDIO HOURS ────────────────────────────────────────────
export const STUDIO_HOURS = [
  { day: 'Monday',    time: '9:00 AM – 8:00 PM' },
  { day: 'Tuesday',   time: '9:00 AM – 8:00 PM' },
  { day: 'Wednesday', time: '9:00 AM – 8:00 PM' },
  { day: 'Thursday',  time: '9:00 AM – 8:00 PM' },
  { day: 'Friday',    time: '9:00 AM – 8:00 PM' },
  { day: 'Saturday',  time: '9:00 AM – 9:00 PM' },
  { day: 'Sunday',    time: '10:00 AM – 6:00 PM' },
];

// ── FAQ DATA ────────────────────────────────────────────────
export const FAQ_DATA = [
  {
    category: 'Rental & Booking',
    items: [
      {
        q: 'How far in advance should I book?',
        a: 'We recommend booking at least 7–10 days before your event for weddings, and 3–5 days for photoshoots. During peak wedding season (Nov–Feb), book 3–4 weeks ahead.',
      },
      {
        q: 'What is included in the rental price?',
        a: 'The rental price includes the complete jewellery set, cleaning & polishing before delivery, and a branded storage box. Security deposit is separate and fully refunded on return.',
      },
      {
        q: 'Can I try pieces before confirming?',
        a: 'Yes — visit our Mysore showroom for a fitting appointment. We also offer a curated lookbook WhatsApp session so you can see pieces styled on real grooms before deciding.',
      },
      {
        q: 'What is the security deposit?',
        a: 'The security deposit is typically 50% of the piece\'s market value, refunded within 24 hours of receiving the jewellery back in original condition. Deposits range ₹5,000–₹25,000 depending on the look.',
      },
      {
        q: 'Can I rent for multiple days?',
        a: 'Absolutely. Multi-day rentals get a 15% discount from Day 2 onwards — perfect for week-long wedding functions like Haldi, Sangeet, and the main ceremony.',
      },
    ],
  },
  {
    category: 'Jewellery & Care',
    items: [
      {
        q: 'Is the jewellery real gold?',
        a: 'Our collection features high-quality gold-plated brass, 22K gold-finished pieces, and select solid silver with gold coating. All pieces are temple-grade quality — indistinguishable from solid gold in photos.',
      },
      {
        q: 'What if a piece gets damaged?',
        a: 'Minor wear is expected and covered. Accidental damage is assessed case-by-case — we are reasonable. We ask that you avoid contact with water, perfume, and sweat. Each piece comes with care instructions.',
      },
      {
        q: 'How is hygiene maintained?',
        a: 'Every piece is ultrasonically cleaned, sanitised, and polished after each rental. Pieces are sealed in branded pouches and only opened at delivery.',
      },
      {
        q: 'Can I get a custom piece made?',
        a: 'We offer bespoke commissions for customers who want to own a specific design. Lead time is 4–6 weeks. Contact us for a custom quote — we work with master craftsmen in Mysore.',
      },
    ],
  },
  {
    category: 'Delivery & Logistics',
    items: [
      {
        q: 'Do you deliver outside Mysore?',
        a: 'Yes — we deliver across Karnataka (Bengaluru, Mangaluru, Hubballi) via insured courier. For high-value sets, we send a team member in person. Nationwide delivery is available for film and commercial projects.',
      },
      {
        q: 'How is the jewellery packaged?',
        a: 'Each look is packed in a Simhaavatar branded black velvet box with individual cushioned compartments, care instructions, and a tamper-evident seal.',
      },
      {
        q: 'What is the return process?',
        a: 'We provide a prepaid return courier label with every rental. Simply repack in the original box and drop at your nearest courier point within 24 hours of your event.',
      },
      {
        q: 'Is there a delivery fee?',
        a: 'Free delivery and pickup within Mysore city limits. For Bengaluru and other cities, a flat ₹500 insured courier fee applies each way.',
      },
    ],
  },
];

// ── TEAM ────────────────────────────────────────────────────
export const TEAM = [
  { initial: 'A', name: 'Arjun Mysore',  role: 'Founder & Creative Director' },
  { initial: 'P', name: 'Priya Nagaraj', role: 'Head of Styling' },
  { initial: 'R', name: 'Ravi Shetty',   role: 'Master Craftsman & QC' },
];

// ── HELPERS ─────────────────────────────────────────────────
export function buildWhatsAppLink(name = '', event = '', looks = []) {
  const msg = `Hi Simhaavatar! I'm ${name}, interested in renting jewellery for ${event || 'an event'}. Looking at: ${looks.length ? looks.join(', ') : 'your collection'}.`;
  return `https://wa.me/919632838185?text=${encodeURIComponent(msg)}`;
}
