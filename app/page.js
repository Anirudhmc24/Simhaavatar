'use client'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import JewelCanvas from './components/JewelCanvas'
import Watermark from './components/watermark' 
import RentalForm from './components/RentalForm'
import Footer from './components/Footer'
import { COLORS, LOOKS, FAQ_DATA, TEAM } from './lib/tokens'
import Loader from './components/Loader'

export default function InfiniteScrollPage() {
  const [activeLook, setActiveLook] = useState(LOOKS[0])
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    occasion: 'General Inquiry', 
    date: '' 
  })

  useEffect(() => {
    setMounted(true)
    
    // ── VVIP ENTRANCE TIMER ──
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    const handleScroll = () => {
      const scrollPos = window.scrollY
      const vh = window.innerHeight
      
      // Update CSS Variable for Parallax
      document.documentElement.style.setProperty('--scroll-y', `${scrollPos}px`)
      
      setShowBackToTop(scrollPos > vh * 0.5)

      const collectionIndex = Math.floor((scrollPos - vh + vh/2) / vh)
      if (LOOKS[collectionIndex]) {
        setActiveLook(LOOKS[collectionIndex])
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [activeLook])

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const myNumber = "919632838185"; 
    const message = `*SIMHAAVATAR CONCIERGE REQUEST*\n-------------------------------\n*Client:* ${formData.name}\n*Contact:* ${formData.phone}\n*Occasion:* ${formData.occasion}\n*Date:* ${formData.date}\n-------------------------------\nHello, I am interested in a private viewing of the collection. Please advise on availability.`;
    window.open(`https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Shared Styles
  const headingStyle = { fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', color: COLORS.ivory, lineHeight: 0.85, letterSpacing: '-0.02em' };
  const monoLabelStyle = { fontFamily: 'var(--font-mono)', fontSize: 10, color: COLORS.mysoreGold, letterSpacing: 6, textTransform: 'uppercase', opacity: 0.8 };
  const inputGroup = { display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' };
  const labelStyle = { fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'rgba(212, 175, 55, 0.6)', letterSpacing: '2px', textTransform: 'uppercase' };
  const inputStyle = { background: 'transparent', border: 'none', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', padding: '10px 0', color: '#FFFFFF', fontFamily: 'var(--font-mono)', fontSize: '14px', outline: 'none', borderRadius: 0 };

  if (!mounted) return null;

  return (
    <div style={{ background: COLORS.voidBlack, color: COLORS.ivory, overflowX: 'hidden', position: 'relative' }}>
      
      {/* ── THE ENTRANCE ── */}
      <Loader isLoading={loading} />

      <style jsx global>{`
        /* Global Reset for Horizontal Stability */
        html, body {
          overflow-x: hidden;
          position: relative;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        @keyframes floatDust { 0% { bottom: -10vh; } 100% { bottom: 110vh; } }
        
        .gold-dust { 
          position: absolute; 
          background: #D4AF37; 
          border-radius: 50%; 
          pointer-events: none; 
          z-index: 1; 
          will-change: transform; 
        }
        
        /* ── MOBILE RESPONSIVENESS ENGINE ── */
        @media (max-width: 768px) {
          .hero-title { font-size: 44px !important; letter-spacing: 5px !important; line-height: 1.1 !important; }
          .section-padding { padding: 80px 6% !important; }
          .jewel-layer { width: 100vw !important; opacity: 0.35 !important; right: 0 !important; }
          
          /* ── MOBILE TOP-CENTER LOGO FIX ── */
          .massive-logo-container {
            top: 80px !important;
            right: auto !important;
            left: 50% !important;
            bottom: auto !important;
            transform: translateX(-50%) !important;
            width: 240px !important;
            opacity: 0.3 !important;
            z-index: 1 !important;
          }

          .grid-responsive { grid-template-columns: 1fr !important; gap: 20px !important; }
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── LAYER 1: PARALLAX GOLD DUST ── */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none', overflow: 'hidden' }}>
        {[...Array(30)].map((_, i) => {
          const depth = Math.random() * 0.7 + 0.1; 
          return (
            <div key={`dust-${i}`} className="gold-dust" style={{
                width: (depth * 5 + 2) + 'px', height: (depth * 5 + 2) + 'px',
                left: (Math.random() * 100) + 'vw',
                animation: `floatDust ${15 + Math.random() * 25}s linear infinite`,
                animationDelay: `-${Math.random() * 20}s`,
                opacity: depth + 0.1,
                transform: `translateY(calc(var(--scroll-y) * -${depth * 0.25}))`,
                filter: `blur(${depth * 1.5}px)`,
              }} 
            />
          )
        })}
      </div>

      <Header />
      <Watermark isPersistent={true} />

      {/* ── MASSIVE LOGO (CENTERS TOP ON MOBILE) ── */}
      <div className="massive-logo-container" style={{ 
        position: 'fixed', 
        top: '-20px', 
        right: '-40px', 
        zIndex: 100, 
        pointerEvents: 'none', 
        filter: 'drop-shadow(0 0 30px rgba(212, 175, 55, 0.3))', 
        opacity: 0.8 
      }}>
        <img 
          src="/assets/logo.png" 
          alt="Simhaavatar Logo Backdrop" 
          style={{ 
            width: 'clamp(280px, 35vw, 600px)', 
            height: 'auto', 
            mixBlendMode: 'screen',
            display: 'block'
          }} 
        />
      </div>

      {/* ── LAYER 3: FIXED 3D JEWELRY ── */}
      <div className="jewel-layer" style={{ position: 'fixed', top: 0, right: 0, width: '55vw', height: '100vh', zIndex: 0, pointerEvents: 'none', opacity: activeLook ? 1 : 0.8, transition: 'opacity 1.5s ease', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <JewelCanvas accent={activeLook ? activeLook.accent : COLORS.mysoreGold} />
      </div>

      {/* ── LAYER 10: CONTENT ── */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        
        {/* HERO */}
        <section id="home" className="section-padding" style={{ height: '100vh', display: 'flex', alignItems: 'center', padding: '0 8%' }}>
          <div style={{ maxWidth: 800 }}>
            <p style={{ ...monoLabelStyle, marginBottom: 24 }}>Mysore · Est. 2019</p>
            <h1 className="hero-title" style={{ ...headingStyle, fontSize: 'clamp(52px, 8.5vw, 115px)', marginBottom: 48 }}>
              Royal <br /> Heritage <br /> 
              <span style={{ color: COLORS.mysoreGold, fontStyle: 'italic', fontWeight: 300, letterSpacing: 10 }}>Handcrafted</span> <br /> 
              Jewellery For Men
            </h1>
            <button 
              onClick={() => document.getElementById('collection').scrollIntoView({behavior:'smooth'})} 
              style={{ padding: '22px 56px', background: COLORS.mysoreGold, color: COLORS.voidBlack, fontFamily: 'var(--font-mono)', fontWeight: 900, fontSize: 12, letterSpacing: 5, border: 'none', borderRadius: 2, cursor: 'pointer' }}
            >
              EXPLORE COLLECTION
            </button>
          </div>
        </section>

        {/* COLLECTION */}
        <div id="collection">
          {LOOKS.map((look, i) => (
            <section key={look.id} className="section-padding" style={{ height: '100vh', display: 'flex', alignItems: 'center', padding: '0 8%' }}>
              <div style={{ maxWidth: 650 }}>
                <span style={{ ...monoLabelStyle, color: look.accent }}>{look.kannada} / 0{i + 1}</span>
                <h2 style={{ ...headingStyle, fontSize: 'clamp(44px, 7vw, 92px)', margin: '16px 0' }}>{look.title}</h2>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: 'rgba(255,255,255,0.5)', marginBottom: 48, fontStyle: 'italic', lineHeight: 1.8 }}>{look.description}</p>
                <button 
                  onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})} 
                  style={{ padding: '20px 60px', background: look.accent, color: COLORS.voidBlack, border: 'none', borderRadius: 2, fontFamily: 'var(--font-mono)', fontWeight: '900', letterSpacing: 4, cursor: 'pointer' }}
                >
                  BOOK A LOOK
                </button>
              </div>
            </section>
          ))}
        </div>

        {/* ABOUT */}
        <section id="about" className="section-padding" style={{ padding: '160px 8%', background: 'rgba(5,5,5,0.95)', backdropFilter: 'blur(10px)' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ ...monoLabelStyle, marginBottom: 20 }}>Our Story</p>
            <h2 style={{ ...headingStyle, fontSize: 'clamp(40px, 5vw, 72px)', marginBottom: 60 }}>The House of Simhaavatar</h2>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 22, lineHeight: 1.8, fontStyle: 'italic', color: 'rgba(255,255,255,0.8)', marginBottom: 100 }}>
              Simhaavatar was founded on a single belief: that every man deserves to wear the jewellery of kings. 
              Rooted in Mysore’s heritage, we make temple gold accessible for the modern man.
            </p>
            <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 140 }}>
              {['Authentic Craft', 'Rental First', 'Styled for Men'].map((title) => (
                <div key={title} style={{ padding: '60px 30px', border: '1px solid rgba(212,175,55,0.12)', background: 'rgba(212,175,55,0.02)', borderRadius: 2 }}>
                  <h3 style={{ color: COLORS.mysoreGold, marginBottom: 15, fontFamily: 'var(--font-display)', fontSize: 22 }}>{title}</h3>
                </div>
              ))}
            </div>
            <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
              {TEAM.map((member) => (
                <div key={member.name}>
                  <div style={{ width: 64, height: 64, border: `1px solid ${COLORS.mysoreGold}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: COLORS.mysoreGold, fontFamily: 'var(--font-display)', fontSize: 24 }}>{member.initial}</div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 20, textTransform: 'uppercase' }}>{member.name}</h4>
                  <p style={{ ...monoLabelStyle, fontSize: 8, marginTop: 4 }}>{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section-padding" style={{ padding: '120px 8%', background: '#080808' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <p style={{ ...monoLabelStyle, textAlign: 'center', marginBottom: 20 }}>Concierge</p>
            <h2 style={{ ...headingStyle, fontSize: 42, textAlign: 'center', marginBottom: 80 }}>Common Questions</h2>
            {FAQ_DATA.map((category, catIdx) => (
              <div key={catIdx} style={{ marginBottom: 60 }}>
                <p style={{ ...monoLabelStyle, fontSize: 10, marginBottom: 32, opacity: 0.5 }}>{category.category}</p>
                {category.items.map((item, i) => (
                  <div key={i} style={{ borderBottom: '1px solid rgba(212,175,55,0.1)', overflow: 'hidden' }}>
                    <button 
                      onClick={() => setOpenFaq(openFaq === `${catIdx}-${i}` ? null : `${catIdx}-${i}`)}
                      style={{ width: '100%', padding: '30px 0', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                    >
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: openFaq === `${catIdx}-${i}` ? COLORS.mysoreGold : COLORS.ivory }}>{item.q}</span>
                      <span style={{ color: COLORS.mysoreGold }}>{openFaq === `${catIdx}-${i}` ? '−' : '+'}</span>
                    </button>
                    {openFaq === `${catIdx}-${i}` && (
                      <p style={{ paddingBottom: 30, fontFamily: 'var(--font-serif)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontSize: 16 }}>{item.a}</p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section-padding" style={{ padding: '150px 8%', background: COLORS.voidBlack, textAlign: 'center' }}>
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <h2 style={{ ...headingStyle, fontSize: '42px', marginBottom: '12px' }}>Book a Look</h2>
            <p style={{ ...monoLabelStyle, fontSize: '10px', marginBottom: '60px' }}>Private Concierge</p>

            <form onSubmit={handleWhatsApp} style={{ display: 'grid', gap: '35px' }}>
              <div style={inputGroup}><label style={labelStyle}>Full Name</label><input type="text" required style={inputStyle} onChange={(e) => setFormData({...formData, name: e.target.value})} /></div>
              <div style={inputGroup}><label style={labelStyle}>WhatsApp Number</label><input type="tel" required placeholder="+91" style={inputStyle} onChange={(e) => setFormData({...formData, phone: e.target.value})} /></div>
              <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={inputGroup}><label style={labelStyle}>Occasion</label>
                  <select style={inputStyle} onChange={(e) => setFormData({...formData, occasion: e.target.value})}>
                    <option value="General Inquiry">Select...</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Photoshoot">Photoshoot</option>
                  </select>
                </div>
                <div style={inputGroup}><label style={labelStyle}>Preferred Date</label><input type="date" style={inputStyle} onChange={(e) => setFormData({...formData, date: e.target.value})} /></div>
              </div>
              <button type="submit" style={{ marginTop: '20px', padding: '22px', background: COLORS.mysoreGold, color: COLORS.voidBlack, border: 'none', borderRadius: 2, fontFamily: 'var(--font-mono)', fontWeight: '900', letterSpacing: 5, cursor: 'pointer', textTransform: 'uppercase' }}>Confirm via WhatsApp</button>
            </form>
          </div>
        </section>

      </div>
      <Footer />
      {isFormOpen && <RentalForm look={activeLook} onClose={() => setIsFormOpen(false)} />}
    </div>
  )
}