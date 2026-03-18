// ============================================================
// SIMHAAVATAR — Design Tokens
// ============================================================

export const COLORS = {
  obsidian:    '#0B0B0B',
  voidBlack:   '#050505',
  mysoreGold:  '#D4AF37',
  antiqueGold: '#C8960C',
  shineGold:   '#F5E27A',
  ivory:       '#F8F3E8',
  parchment:   '#E8DFC8',
  rudra:       '#3D1A1A',
  ashBlue:     '#1A1F2E',
  dustGold:    '#8B7536',
  stagePurple: '#9B7FE8',
}

export const FONTS = {
  display: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
  serif:   "'IM Fell English', 'Garamond', serif",
  mono:    "'JetBrains Mono', 'Courier New', monospace",
  sans:    "'Montserrat', 'Helvetica Neue', sans-serif",
}

export const GLASS = {
  card: {
    background:     'rgba(11,11,11,0.65)',
    backdropFilter: 'blur(24px) saturate(180%)',
    border:         '1px solid rgba(212,175,55,0.18)',
    boxShadow:      '0 8px 64px rgba(0,0,0,0.6), inset 0 1px 0 rgba(212,175,55,0.12)',
  },
  elevated: {
    background:     'rgba(18,14,8,0.82)',
    backdropFilter: 'blur(32px) saturate(200%)',
    border:         '1px solid rgba(212,175,55,0.35)',
    boxShadow:      '0 16px 80px rgba(212,175,55,0.08), 0 0 0 1px rgba(212,175,55,0.2)',
  },
}

export const LOOKS = [
  {
    id:          'maharaja',
    label:       '01',
    title:       'Maharaja',
    subtitle:    'Groom & Grandeur',
    kannada:     'ಮಹಾರಾಜ',
    piece:       'Ganda Berunda Kanthi Necklace',
    description: 'The double-headed eagle necklace — symbol of sovereignty. Worn by Vijayanagara kings, reborn for the modern groom.',
    bg:          '#0D0900',
    accent:      '#D4AF37',
    textColor:   '#F8F3E8',
    modelType:   'kanthi',
    price:       '₹4,800',
    interaction: 'Scroll-triggered 360° pendant zoom',
    rentalFrom:  '₹4,800/day',
  },
  {
    id:          'yoddha',
    label:       '02',
    title:       'Yoddha',
    subtitle:    'Warrior & Bold',
    kannada:     'ಯೋಧ',
    piece:       'Narasimha Baju Band (Armlet)',
    description: "The broad armlet of warriors. Narasimha's ferocity captured in structured gold — worn at the bicep, never forgotten.",
    bg:          '#06080E',
    accent:      '#FFD700',
    textColor:   '#E8E8E8',
    modelType:   'armlet',
    price:       '₹3,200',
    interaction: 'Mouse-hover explosion assembly view',
    rentalFrom:  '₹3,200/day',
  },
  {
    id:          'dharma',
    label:       '03',
    title:       'Dharma',
    subtitle:    'Spiritual & Traditional',
    kannada:     'ಧರ್ಮ',
    piece:       'Gold-capped Rudraksha Lingam Kanthi',
    description: 'Gold-capped Rudraksha beads cradling a Lingam locket. Each bead a prayer, each link a connection to the eternal.',
    bg:          '#120A00',
    accent:      '#C4832A',
    textColor:   '#E8DFC8',
    modelType:   'rudraksha',
    price:       '₹2,100',
    interaction: 'Meditative slow-parallax float',
    rentalFrom:  '₹2,100/day',
  },
  {
    id:          'samskriti',
    label:       '04',
    title:       'Samskriti',
    subtitle:    'Heritage & Minimalist',
    kannada:     'ಸಂಸ್ಕೃತಿ',
    piece:       'Kasina Coin Ring / Thick Kada',
    description: 'One ring. No noise. The Kasina coin ring in 22K gold — old money confidence, worn in silence.',
    bg:          '#F5F0E8',
    accent:      '#8B6914',
    textColor:   '#1A1209',
    modelType:   'ring',
    price:       '₹1,400',
    interaction: 'Slow orbital rotation — pure presence',
    rentalFrom:  '₹1,400/day',
  },
  {
    id:          'kalakaar',
    label:       '05',
    title:       'Kalakaar',
    subtitle:    'Artist & Performer',
    kannada:     'ಕಲಾಕಾರ',
    piece:       'Karna Kundala & Headgear Accents',
    description: 'Stage-born jewellery for the performer. Ear-chains that catch every light, headgear that commands every entrance.',
    bg:          '#070410',
    accent:      '#9B7FE8',
    textColor:   '#E8E0F8',
    modelType:   'earchain',
    price:       '₹2,800',
    interaction: 'Dynamic stage-lighting shadow play',
    rentalFrom:  '₹2,800/day',
  },
]

export const STUDIO_HOURS = [
  { day: 'Monday',    time: '9:00 AM – 8:00 PM' },
  { day: 'Tuesday',   time: '9:00 AM – 8:00 PM' },
  { day: 'Wednesday', time: '9:00 AM – 8:00 PM' },
  { day: 'Thursday',  time: '9:00 AM – 8:00 PM' },
  { day: 'Friday',    time: '9:00 AM – 8:00 PM' },
  { day: 'Saturday',  time: '9:00 AM – 9:00 PM' },
  { day: 'Sunday',    time: '10:00 AM – 6:00 PM' },
]

export const FAQ_DATA = {
  'Rental & Booking': [
    { q: 'How far in advance should I book?', a: 'We recommend booking at least 7–10 days before your event for weddings, and 3–5 days for photoshoots. For peak wedding season (Nov–Feb), book 3–4 weeks ahead to guarantee your preferred look.' },
    { q: 'What is included in the rental price?', a: 'The quoted price includes the complete jewellery set, cleaning & polishing before delivery, and a branded storage box. Security deposit is separate and fully refunded on return.' },
    { q: 'Can I try pieces before confirming?', a: 'Yes — visit our Mysore showroom for a fitting appointment. We also offer a curated lookbook WhatsApp session where you can see pieces styled on real grooms before deciding.' },
    { q: 'What is the security deposit amount?', a: 'The deposit is typically 50% of the piece\'s market value, refunded within 24 hours of receiving it in original condition. Deposits range from ₹5,000 to ₹25,000 depending on the look.' },
    { q: 'Can I rent for multiple days?', a: 'Absolutely. Multi-day rentals get a 15% discount from Day 2 onwards. Perfect for week-long wedding functions like Haldi, Sangeet, and the main ceremony.' },
  ],
  'Jewellery & Care': [
    { q: 'Is the jewellery real gold?', a: 'Our collection features high-quality gold-plated brass, 22K gold-finished pieces, and select solid silver with gold coating. All pieces are temple-grade — indistinguishable from solid gold in photos.' },
    { q: 'What if a piece gets damaged?', a: 'Minor wear is expected and covered. Accidental damage is assessed case-by-case. We ask that you avoid contact with water, perfume, and sweat. Each piece comes with care instructions.' },
    { q: 'How is hygiene maintained?', a: 'Every piece is ultrasonically cleaned, sanitised, and polished after each rental. Pieces are sealed in branded pouches and only opened at delivery.' },
    { q: 'Can I get a custom piece made?', a: 'We offer bespoke commissions for customers who want to own a specific design. Lead time is 4–6 weeks. Contact us for a custom quote.' },
  ],
  'Delivery & Logistics': [
    { q: 'Do you deliver outside Mysore?', a: 'Yes — we deliver across Karnataka (Bengaluru, Mangaluru, Hubballi) via insured courier. For high-value sets, we send a team member in person. Nationwide delivery is available for film/commercial projects.' },
    { q: 'How is the jewellery packaged?', a: 'Each look is packed in a Simhaavatar branded black velvet box with individual cushioned compartments, care instructions, and a tamper-evident seal.' },
    { q: 'What is the return process?', a: 'We provide a prepaid return courier label with every rental. Simply repack in the original box and drop at your nearest courier point within 24 hours of your event.' },
    { q: 'Is there a delivery fee?', a: 'Free delivery and pickup within Mysore city limits. For Bengaluru and other cities, a flat ₹500 insured courier fee applies each way.' },
  ],
}
