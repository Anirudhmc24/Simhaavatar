'use client'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import BentoCard from './components/BentoCard'
import LookModal from './components/LookModal'
import JewelCanvas from './components/JewelCanvas'
import RentalForm from './components/RentalForm'
import { COLORS, FONTS, LOOKS } from '../lib/tokens'
import { useStore } from '../lib/store'

const BENTO_LAYOUT = [
  { id:'maharaja', colSpan:2, rowSpan:2 },
  { id:'yoddha',   colSpan:1, rowSpan:2 },
  { id:'dharma',   colSpan:1, rowSpan:1 },
  { id:'samskriti',colSpan:1, rowSpan:1 },
  { id:'kalakaar', colSpan:2, rowSpan:1 },
]

const TAGLINES = [
  'ಸಿಂಹಾವತಾರ — THE LION AVATAR',
  "Premium Men's Temple Jewellery",
  'Mysore, Karnataka · Est. 2019',
  'Rent The Jewellery of Kings',
]

const FLOW_STEPS = [
  { num:'01', label:'Land',      desc:'Cinematic hero'  },
  { num:'02', label:'Discover',  desc:'Bento look grid' },
  { num:'03', label:'Interact',  desc:'3D + details'    },
  { num:'04', label:'Customize', desc:'Mix & match'     },
  { num:'05', label:'Inquire',   desc:'Book your look'  },
]

export default function HomePage() {
  const { setActiveLook } = useStore()
  const [scrolled, setScrolled]     = useState(false)
  const [taglineIdx, setTaglineIdx] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setTaglineIdx(i => (i + 1) % TAGLINES.length), 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      <Header scrolled={scrolled} />

      {/* HERO */}
      <section style={{
        position:'relative', height:'100vh',
        display:'flex', flexDirection:'column',
        alignItems:'center', justifyContent:'center',
        overflow:'hidden',
        background:`radial-gradient(ellipse at 40% 50%, ${COLORS.mysoreGold}09 0%, transparent 65%), ${COLORS.voidBlack}`,
      }}>
        <div style={{ position:'absolute', inset:0, opacity:.35 }}>
          <JewelCanvas modelType="kanthi" accent={COLORS.mysoreGold} />
        </div>
        <div style={{
          position:'absolute', inset:0, pointerEvents:'none',
          backgroundImage:`linear-gradient(${COLORS.mysoreGold}06 1px,transparent 1px),linear-gradient(90deg,${COLORS.mysoreGold}06 1px,transparent 1px)`,
          backgroundSize:'72px 72px',
        }} />

        <div style={{ position:'relative', textAlign:'center', zIndex:1, padding:'0 40px', maxWidth:900 }}>
          <p style={{
            fontFamily:FONTS.mono, fontSize:9, letterSpacing:8,
            color:COLORS.mysoreGold, opacity:.65, textTransform:'uppercase',
            marginBottom:24, animation:'fadeIn 1s ease .2s both',
          }}>
            {TAGLINES[taglineIdx]}
          </p>
          <h1 style={{ fontFamily:FONTS.display, fontSize:'clamp(48px,8vw,108px)', fontWeight:600, color:COLORS.ivory, lineHeight:1, margin:'0 0 4px', letterSpacing:2, animation:'fadeInUp .9s ease .4s both' }}>
            Royal Heritage
          </h1>
          <h1 style={{ fontFamily:FONTS.display, fontSize:'clamp(24px,4vw,52px)', fontWeight:300, fontStyle:'italic', color:`${COLORS.mysoreGold}88`, lineHeight:1, margin:'0 0 4px', letterSpacing:12, animation:'fadeInUp .9s ease .55s both' }}>
            meets
          </h1>
          <h1 style={{ fontFamily:FONTS.display, fontSize:'clamp(36px,6vw,88px)', fontWeight:600, color:COLORS.ivory, lineHeight:1, letterSpacing:2, animation:'fadeInUp .9s ease .7s both' }}>
            High-Tech Minimalism
          </h1>

          <div style={{ display:'flex', justifyContent:'center', gap:16, marginTop:48, animation:'fadeIn 1s ease 1.2s both' }}>
            <button
              onClick={() => document.getElementById('bento')?.scrollIntoView({ behavior:'smooth' })}
              style={{ padding:'14px 36px', background:COLORS.mysoreGold, border:'none', borderRadius:4, fontFamily:FONTS.mono, fontSize:10, letterSpacing:5, color:COLORS.voidBlack, textTransform:'uppercase', cursor:'pointer' }}
            >
              Explore The Looks
            </button>
            <a href="/about" style={{ padding:'14px 36px', background:'transparent', border:`1px solid ${COLORS.mysoreGold}55`, borderRadius:4, fontFamily:FONTS.mono, fontSize:10, letterSpacing:5, color:COLORS.mysoreGold, textTransform:'uppercase', textDecoration:'none' }}>
              Our Heritage
            </a>
          </div>
        </div>

        <div style={{ position:'absolute', bottom:40, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:8, animation:'pulse 2.5s ease infinite', opacity:.4 }}>
          <div style={{ width:1, height:56, background:`linear-gradient(${COLORS.mysoreGold}, transparent)` }} />
          <span style={{ fontFamily:FONTS.mono, fontSize:8, letterSpacing:4, color:COLORS.mysoreGold }}>SCROLL</span>
        </div>
      </section>

      {/* UX FLOW */}
      <section style={{ padding:'60px 40px', display:'flex', alignItems:'center', justifyContent:'center', gap:0, borderBottom:`1px solid ${COLORS.mysoreGold}08` }}>
        {FLOW_STEPS.map((step, i) => (
          <div key={step.num} style={{ display:'contents' }}>
            <div style={{ flex:1, textAlign:'center' }}>
              <div style={{ width:44, height:44, borderRadius:'50%', border:`1px solid ${COLORS.mysoreGold}35`, background:`${COLORS.mysoreGold}06`, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:FONTS.mono, fontSize:9, color:COLORS.mysoreGold, margin:'0 auto 10px' }}>{step.num}</div>
              <p style={{ fontFamily:FONTS.display, fontSize:14, color:COLORS.ivory, margin:'0 0 3px' }}>{step.label}</p>
              <p style={{ fontFamily:FONTS.sans, fontSize:10, color:'rgba(255,255,255,.28)', margin:0 }}>{step.desc}</p>
            </div>
            {i < FLOW_STEPS.length - 1 && (
              <div style={{ flex:'0 0 24px', height:1, background:`linear-gradient(90deg,${COLORS.mysoreGold}22,${COLORS.mysoreGold}66,${COLORS.mysoreGold}22)`, marginTop:-20 }} />
            )}
          </div>
        ))}
      </section>

      {/* BENTO */}
      <section id="bento" style={{ padding:'72px 40px 100px' }}>
        <p style={{ fontFamily:FONTS.mono, fontSize:9, letterSpacing:7, color:COLORS.mysoreGold, opacity:.5, textTransform:'uppercase', textAlign:'center', marginBottom:16 }}>The Five Avatars</p>
        <h2 style={{ fontFamily:FONTS.display, fontSize:'clamp(28px,5vw,60px)', color:COLORS.ivory, fontWeight:500, textAlign:'center', marginBottom:56 }}>Choose Your Look</h2>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gridTemplateRows:'340px 220px', gap:14, maxWidth:1160, margin:'0 auto' }}>
          {LOOKS.map((look) => {
            const layout = BENTO_LAYOUT.find(b => b.id === look.id)
            return (
              <div key={look.id} style={{ gridColumn:`span ${layout.colSpan}`, gridRow:`span ${layout.rowSpan}` }}>
                <BentoCard look={look} onSelect={setActiveLook} />
              </div>
            )
          })}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding:'44px 40px', borderTop:`1px solid ${COLORS.mysoreGold}12`, display:'flex', justifyContent:'space-between', alignItems:'flex-end', background:COLORS.voidBlack, flexWrap:'wrap', gap:24 }}>
        <div>
          <p style={{ fontFamily:FONTS.display, fontSize:22, color:COLORS.mysoreGold, letterSpacing:3 }}>SIMHAAVATAR</p>
          <p style={{ fontFamily:FONTS.mono, fontSize:8, color:'rgba(255,255,255,.2)', letterSpacing:5, marginTop:4 }}>MYSORE, KARNATAKA · © 2025 · ALL RIGHTS RESERVED</p>
        </div>
        <div style={{ display:'flex', gap:28 }}>
          {['about','faq','contact'].map(link => (
            <a key={link} href={`/${link}`} style={{ fontFamily:FONTS.mono, fontSize:8, letterSpacing:3, color:'rgba(255,255,255,.22)', textTransform:'uppercase', textDecoration:'none' }}>{link}</a>
          ))}
        </div>
      </footer>

      <LookModal />
      <RentalForm />
    </>
  )
}
