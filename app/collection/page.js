'use client'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import JewelCanvas from '../components/JewelCanvas'
import RentalForm from '../components/RentalForm'
import { COLORS, FONTS, LOOKS } from '../lib/tokens'

export default function CollectionPage() {
  const [activeLook, setActiveLook] = useState(LOOKS[0])
  const [isFormOpen, setIsFormOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight
      const index = Math.floor((window.scrollY + vh / 2) / vh)
      if (LOOKS[index] && LOOKS[index].id !== activeLook.id) {
        setActiveLook(LOOKS[index])
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeLook])

  return (
    <div style={{ background: COLORS.voidBlack, color: COLORS.ivory }}>
      <Header />

      {/* PERSISTENT 3D MODEL - Updates as you scroll */}
      <div style={{ 
        position: 'fixed', top: 0, right: '-5%', width: '65vw', height: '100vh', 
        zIndex: 0, pointerEvents: 'none', transition: 'all 1s ease' 
      }}>
        <JewelCanvas modelType={activeLook.modelType} accent={activeLook.accent} />
      </div>

      {/* SEQUENTIAL SECTIONS */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        {LOOKS.map((look, i) => (
          <section key={look.id} style={{ 
            height: '100vh', display: 'flex', alignItems: 'center', padding: '0 10%',
            opacity: activeLook.id === look.id ? 1 : 0.2,
            transition: 'opacity 0.6s ease'
          }}>
            <div style={{ maxWidth: 600 }}>
              <span style={{ fontFamily: FONTS.mono, color: look.accent, letterSpacing: 8, fontSize: 12, fontWeight: 'bold' }}>
                {look.kannada} / 0{i + 1}
              </span>
              <h2 style={{ fontFamily: FONTS.display, fontSize: 'clamp(44px, 7vw, 92px)', fontWeight: 900, margin: '16px 0', lineHeight: 0.85 }}>
                {look.title.toUpperCase()}
              </h2>
              <p style={{ fontFamily: FONTS.serif, fontSize: 20, color: 'rgba(255,255,255,0.5)', marginBottom: 40, fontStyle: 'italic', lineHeight: 1.7 }}>
                {look.description}
              </p>
              <button 
                onClick={() => setIsFormOpen(true)}
                style={{ 
                  padding: '18px 56px', background: look.accent, border: 'none', borderRadius: 2, 
                  fontFamily: FONTS.mono, fontWeight: '900', fontSize: 12, letterSpacing: 4, 
                  color: COLORS.voidBlack, cursor: 'pointer' 
                }}
              >
                ENQUIRE NOW
              </button>
            </div>
          </section>
        ))}
      </main>

      {isFormOpen && <RentalForm look={activeLook} onClose={() => setIsFormOpen(false)} />}
    </div>
  )
}