'use client'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import JewelCanvas from './components/JewelCanvas'
import Watermark from './components/watermark' 
import RentalForm from './components/RentalForm'
import Footer from './components/Footer'
import { COLORS, FONTS, LOOKS, FAQ_DATA, TEAM } from './lib/tokens'

export default function InfiniteScrollPage() {
  const [activeLook, setActiveLook] = useState(LOOKS[0])
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const scrollPos = window.scrollY
      const vh = window.innerHeight
      setShowBackToTop(scrollPos > vh * 0.5)

      const collectionIndex = Math.floor((scrollPos - vh + vh/2) / vh)
      if (LOOKS[collectionIndex]) {
        setActiveLook(LOOKS[collectionIndex])
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeLook])

  const headingStyle = {
    fontFamily: 'var(--font-display)',
    fontWeight: 900,
    textTransform: 'uppercase',
    color: COLORS.ivory,
    lineHeight: 0.85,
    letterSpacing: '-0.02em'
  };

  const monoLabelStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: 10,
    color: COLORS.mysoreGold,
    letterSpacing: 6,
    textTransform: 'uppercase',
    opacity: 0.8
  };

  return (
    <div style={{ background: COLORS.voidBlack, color: COLORS.ivory, overflowX: 'hidden', position: 'relative' }}>
      
      {/* ── CSS ANIMATIONS ── */}
      <style jsx global>{`
        @keyframes floatDust {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          20% { opacity: 0.3; }
          80% { opacity: 0.3; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
        .gold-dust {
          position: fixed;
          background: #D4AF37;
          border-radius: 50%;
          pointer-events: none;
          z-index: 1; 
          filter: blur(1px);
        }
      `}</style>

      {/* Gold Dust Particles */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
        {[...Array(25)].map((_, i) => (
          <div key={i} className="gold-dust" style={{
            width: (Math.random() * 2 + 1) + 'px',
            height: (Math.random() * 2 + 1) + 'px',
            left: (Math.random() * 100) + 'vw',
            bottom: '-5vh',
            animation: `floatDust ${12 + Math.random() * 18}s linear infinite`,
            animationDelay: (Math.random() * 10) + 's',
          }} />
        ))}
      </div>

      <Header />
      <Watermark isPersistent={true} />

      {/* ── PERSISTENT BACK TO TOP (Bottom Left) ── */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed', bottom: '40px', left: '40px', zIndex: 100,
          background: 'rgba(212, 175, 55, 0.05)', backdropFilter: 'blur(10px)',
          border: `1px solid ${COLORS.mysoreGold}33`, color: COLORS.mysoreGold,
          fontFamily: 'var(--font-mono)', fontSize: '10px', padding: '12px 24px',
          borderRadius: '2px', letterSpacing: '4px', cursor: 'pointer',
          opacity: showBackToTop ? 1 : 0,
          transform: showBackToTop ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: showBackToTop ? 'auto' : 'none'
        }}
      >
        TOP ↑
      </button>

      {/* ── LAYER 3: FIXED 3D JEWELRY (RIGHT ALIGNED) ── */}
      <div style={{ 
        position: 'fixed', top: 0, right: 0, width: '55vw', height: '100vh', 
        zIndex: 0, pointerEvents: 'none',
        opacity: activeLook ? 1 : 0.8, transition: 'opacity 1.5s ease-in-out',
        display: 'flex', justifyContent: 'center', alignItems: 'center'
      }}>
        {mounted && (
          <JewelCanvas 
            accent={activeLook ? activeLook.accent : COLORS.mysoreGold} 
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </div>

      {/* ── LAYER 10: CONTENT ── */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        
        {/* HERO */}
        <section id="home" style={{ height: '100vh', display: 'flex', alignItems: 'center', padding: '0 8%' }}>
          <div style={{ maxWidth: 800 }}>
            <p style={{ ...monoLabelStyle, marginBottom: 24 }}>Mysore · Est. 2019</p>
            <h1 style={{ ...headingStyle, fontSize: 'clamp(52px, 8.5vw, 115px)', marginBottom: 48 }}>
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
            <section key={look.id} style={{ height: '100vh', display: 'flex', alignItems: 'center', padding: '0 8%', background: 'rgba(5,5,5,0.05)' }}>
              <div style={{ maxWidth: 650 }}>
                <span style={{ ...monoLabelStyle, color: look.accent }}>{look.kannada} / 0{i + 1}</span>
                <h2 style={{ ...headingStyle, fontSize: 'clamp(44px, 7vw, 92px)', margin: '16px 0' }}>{look.title}</h2>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: 'rgba(255,255,255,0.5)', marginBottom: 48, fontStyle: 'italic', lineHeight: 1.8 }}>{look.description}</p>
                <button 
                  onClick={() => setIsFormOpen(true)} 
                  style={{ padding: '20px 60px', background: look.accent, color: COLORS.voidBlack, border: 'none', borderRadius: 2, fontFamily: 'var(--font-mono)', fontWeight: '900', letterSpacing: 4, cursor: 'pointer' }}
                >
                  ENQUIRE NOW
                </button>
              </div>
            </section>
          ))}
        </div>

        {/* ABOUT */}
        <section id="about" style={{ padding: '160px 8%', background: 'rgba(5,5,5,0.95)', backdropFilter: 'blur(10px)' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ ...monoLabelStyle, marginBottom: 20 }}>Our Story</p>
            <h2 style={{ ...headingStyle, fontSize: 'clamp(40px, 5vw, 72px)', marginBottom: 60 }}>The House of Simhaavatar</h2>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 22, lineHeight: 1.8, fontStyle: 'italic', color: 'rgba(255,255,255,0.8)', marginBottom: 100 }}>
              Simhaavatar was founded on a single belief: that every man deserves to wear the jewellery of kings. 
              Rooted in Mysore’s heritage, we make temple gold accessible.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 140 }}>
              {['Authentic Craft', 'Rental First', 'Styled for Men'].map((title) => (
                <div key={title} style={{ padding: '60px 30px', border: '1px solid rgba(212,175,55,0.12)', background: 'rgba(212,175,55,0.02)', borderRadius: 2 }}>
                  <h3 style={{ color: COLORS.mysoreGold, marginBottom: 15, fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: 1 }}>{title}</h3>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
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
        <section id="faq" style={{ padding: '120px 8%', background: '#080808' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <p style={{ ...monoLabelStyle, textAlign: 'center', marginBottom: 20 }}>Concierge</p>
            <h2 style={{ ...headingStyle, fontSize: 48, textAlign: 'center', marginBottom: 80 }}>Common Questions</h2>
            {FAQ_DATA.map((category, catIdx) => (
              <div key={catIdx} style={{ marginBottom: 60 }}>
                <p style={{ ...monoLabelStyle, fontSize: 10, marginBottom: 32, opacity: 0.5 }}>{category.category}</p>
                {category.items.map((item, i) => (
                  <div key={i} style={{ borderBottom: '1px solid rgba(212,175,55,0.1)', overflow: 'hidden' }}>
                    <button 
                      onClick={() => setOpenFaq(openFaq === `${catIdx}-${i}` ? null : `${catIdx}-${i}`)}
                      style={{ width: '100%', padding: '30px 0', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                    >
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: openFaq === `${catIdx}-${i}` ? COLORS.mysoreGold : COLORS.ivory }}>{item.q}</span>
                      <span style={{ color: COLORS.mysoreGold }}>{openFaq === `${catIdx}-${i}` ? '−' : '+'}</span>
                    </button>
                    {openFaq === `${catIdx}-${i}` && (
                      <p style={{ paddingBottom: 30, fontFamily: 'var(--font-serif)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontSize: 17 }}>{item.a}</p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ padding: '180px 8%', background: COLORS.voidBlack, textAlign: 'center' }}>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(44px, 7vw, 92px)', marginBottom: 24 }}>Legacy Defined.</h2>
          <button onClick={() => window.open('https://wa.me/919632838185')} style={{ padding: '22px 64px', background: COLORS.mysoreGold, color: COLORS.voidBlack, border: 'none', borderRadius: 2, fontFamily: 'var(--font-mono)', fontWeight: '900', letterSpacing: 5, cursor: 'pointer' }}>WHATSAPP CONCIERGE</button>
        </section>

      </div>
      <Footer />
      {isFormOpen && <RentalForm look={activeLook} onClose={() => setIsFormOpen(false)} />}
    </div>
  )
}