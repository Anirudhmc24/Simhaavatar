'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Watermark from '../components/watermark';
import { TEAM } from '../lib/tokens';

const VALUES = [
  {
    title: 'Authentic Craft',
    desc: 'Every piece is sourced from third-generation Mysore silversmiths and temple jewellers. No machine-stamped replicas — only hand-wrought heritage.',
  },
  {
    title: 'Rental First',
    desc: 'Why spend ₹2–5 lakhs on a piece worn once? Our rental model lets you wear the best for a fraction of the price — sustainably and accessibly.',
  },
  {
    title: 'Styled for Men',
    desc: "India's bridal jewellery market ignores the groom. Simhaavatar exists solely for men — styled, fitted, and delivered to you.",
  },
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh', color: '#F8F3E8', position: 'relative' }}>
      
      {/* 1. Global Watermark (Persistent in bottom-right) */}
      <Watermark isPersistent={true} />

      <Header />
      
      <main style={{ paddingTop: 80, position: 'relative', zIndex: 10 }}>

        {/* ── HERO ── */}
        <section style={{
          position: 'relative', padding: '120px 40px 80px', textAlign: 'center',
          borderBottom: '1px solid rgba(212,175,55,0.06)',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 70%)',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(212,175,55,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(212,175,55,0.03) 1px,transparent 1px)', backgroundSize: '64px 64px', pointerEvents: 'none' }} />
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 8, color: '#D4AF37', textTransform: 'uppercase', marginBottom: 18 }}>Our Story</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 8vw, 84px)', fontWeight: 700, color: '#F8F3E8', lineHeight: 1, marginBottom: 20, textTransform: 'uppercase' }}>THE HOUSE OF SIMHAAVATAR</h1>
          <div style={{ width: 60, height: 2, background: '#D4AF37', margin: '0 auto 24px', opacity: 0.6 }} />
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontStyle: 'italic', color: 'rgba(255,255,255,0.45)', maxWidth: 600, margin: '0 auto', lineHeight: 1.8 }}>
            Rooted in the golden craft traditions of the Vijayanagara Empire.
          </p>
        </section>

        {/* ── BRAND STORY ── */}
        <section style={{ maxWidth: 1000, margin: '0 auto', padding: '100px 40px', textAlign: 'center' }}>
          <div style={{ marginBottom: 120 }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 24, letterSpacing: 4, color: '#D4AF37', opacity: 0.6, textTransform: 'uppercase', marginBottom: 32 }}>The Origin</p>
            
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 20, lineHeight: 2.1, color: 'rgba(255,255,255,0.7)', fontStyle: 'italic', marginBottom: 40 }}>
              <strong style={{ color: '#F8F3E8', fontStyle: 'normal', fontSize: 24, display: 'block', marginBottom: 20 }}>
                Simhaavatar was founded on a single belief: that every man deserves to wear the jewellery of kings — not just own it. 
              </strong>
              Mysore's Vijayanagara heritage is the richest tradition of masculine gold craft in India.
            </p>

            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, lineHeight: 2, color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', marginBottom: 32, maxWidth: 850, margin: '0 auto 32px' }}>
              The Ganda Berunda, the Baju Band, the Rudraksha Kanthi — these are not merely ornaments. They are <em style={{ color: '#D4AF37' }}>statements of identity</em>, worn by warriors, priests, and kings for centuries.
            </p>

            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, lineHeight: 2, color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', maxWidth: 850, margin: '0 auto' }}>
              We make this heritage accessible through curated rental — so the modern groom, the classical performer, and the film director can all dress in authentic temple gold, without the cost of ownership.
            </p>
          </div>

          {/* ── CORE PHILOSOPHY ── */}
          <div style={{ marginTop: 120, marginBottom: 120 }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 6, color: '#D4AF37', opacity: 0.5, textTransform: 'uppercase', marginBottom: 48 }}>
              Core Philosophy
            </p>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: 20, 
            }}>
              {VALUES.map((v) => (
                <div key={v.title} style={{
                  padding: '48px 24px',
                  background: 'rgba(212,175,55,0.02)',
                  border: '1px solid rgba(212,175,55,0.08)',
                  borderRadius: 2, 
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  textAlign: 'center'
                }}
                  onMouseEnter={(e) => { 
                    e.currentTarget.style.background = 'rgba(212,175,55,0.05)'; 
                    e.currentTarget.style.borderColor = 'rgba(212,175,55,0.2)'; 
                    e.currentTarget.style.transform = 'translateY(-5px)'; 
                  }}
                  onMouseLeave={(e) => { 
                    e.currentTarget.style.background = 'rgba(212,175,55,0.02)'; 
                    e.currentTarget.style.borderColor = 'rgba(212,175,55,0.08)'; 
                    e.currentTarget.style.transform = 'translateY(0)'; 
                  }}
                >
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: '#F8F3E8', marginBottom: 16, textTransform: 'uppercase' }}>
                    {v.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, fontStyle: 'italic' }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── TEAM ── */}
          <div style={{ marginTop: 120, marginBottom: 120 }}>
            <p style={{ 
              fontFamily: 'var(--font-mono)', 
              fontSize: 10, 
              letterSpacing: 6, 
              color: '#D4AF37', 
              opacity: 0.5, 
              textTransform: 'uppercase', 
              textAlign: 'center', 
              marginBottom: 48 
            }}>
              The Team
            </p>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: 20 
            }}>
              {TEAM.map((member) => (
                <div key={member.name} style={{ textAlign: 'center' }}>
                  <div style={{ 
                    width: 60, height: 60, borderRadius: '50%', 
                    border: '1px solid rgba(212, 175, 55, 0.4)', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', 
                    margin: '0 auto 16px',
                    fontFamily: 'var(--font-display)', color: '#D4AF37', 
                    fontSize: 20,
                    background: 'rgba(212, 175, 55, 0.03)'
                  }}>
                    {member.initial}
                  </div>
                  <p style={{ 
                    fontFamily: 'var(--font-display)', 
                    fontSize: 18, 
                    color: '#F8F3E8', 
                    marginBottom: 4,
                    textTransform: 'uppercase'
                  }}>
                    {member.name}
                  </p>
                  <p style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: 8, 
                    letterSpacing: 3, 
                    color: '#D4AF37', 
                    opacity: 0.5, 
                    textTransform: 'uppercase' 
                  }}>
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div style={{ marginTop: 60, borderTop: '1px solid rgba(212,175,55,0.1)', paddingTop: 80 }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontStyle: 'italic', color: '#F8F3E8', marginBottom: 40 }}>
              Ready to wear the jewellery of kings?
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
              <a href="/" style={{ padding: '18px 40px', background: '#D4AF37', borderRadius: 2, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 4, color: '#050505', textDecoration: 'none', fontWeight: 700 }}>VIEW COLLECTIONS</a>
              <a href="/contact" style={{ padding: '18px 40px', border: '1px solid #D4AF37', borderRadius: 2, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 4, color: '#D4AF37', textDecoration: 'none' }}>ENQUIRE NOW</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}