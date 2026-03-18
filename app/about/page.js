'use client';
import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JewelCanvas from '../components/JewelCanvas';
import { TEAM } from '../lib/tokens';

const VALUES = [
  {
    icon: '⚒️',
    title: 'Authentic Craft',
    desc: 'Every piece is sourced from third-generation Mysore silversmiths and temple jewellers. No machine-stamped replicas — only hand-wrought heritage.',
  },
  {
    icon: '♻️',
    title: 'Rental First',
    desc: 'Why spend ₹2–5 lakhs on a piece worn once? Our rental model lets you wear the best for a fraction of the price — sustainably and accessibly.',
  },
  {
    icon: '👑',
    title: 'Styled for Men',
    desc: "India's bridal jewellery market ignores the groom. Simhaavatar exists solely for men — styled, fitted, and delivered to you.",
  },
];

const MILESTONES = [
  { year: '2019', event: 'Simhaavatar founded in Mysore by Arjun Mysore' },
  { year: '2020', event: 'First 25 pieces curated from Devaraja Market craftsmen' },
  { year: '2021', event: 'Expanded to Bengaluru delivery — 100+ bookings' },
  { year: '2022', event: 'Film & commercial shoot partnerships begin' },
  { year: '2023', event: '500+ successful rentals across Karnataka' },
  { year: '2024', event: 'Digital portfolio launch — 5 signature looks defined' },
  { year: '2025', event: 'Nationwide shipping · Bespoke commissions open' },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 64 }}>

        {/* ── HERO ── */}
        <section style={{
          position: 'relative', padding: '80px 40px 60px', textAlign: 'center',
          borderBottom: '1px solid rgba(212,175,55,0.06)',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 58%)',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(212,175,55,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(212,175,55,0.03) 1px,transparent 1px)', backgroundSize: '64px 64px', pointerEvents: 'none' }} />
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 7, color: '#D4AF37', opacity: 0.6, textTransform: 'uppercase', marginBottom: 18 }}>Our Story</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,6vw,72px)', fontWeight: 600, color: '#F8F3E8', lineHeight: 1, marginBottom: 6 }}>The House of</h1>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,6vw,72px)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(212,175,55,0.7)', lineHeight: 1, marginBottom: 22 }}>Simhaavatar</h1>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic', color: 'rgba(255,255,255,0.35)', maxWidth: 520, margin: '0 auto', lineHeight: 1.8 }}>
            Born in Mysore, rooted in temple craft traditions that are over 400 years old.
          </p>
        </section>

        {/* ── BRAND STORY ── */}
        <section style={{ maxWidth: 1060, margin: '0 auto', padding: '72px 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center', marginBottom: 72 }}>
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: 5, color: '#D4AF37', opacity: 0.5, textTransform: 'uppercase', marginBottom: 20 }}>The Origin</p>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, lineHeight: 2, color: 'rgba(255,255,255,0.55)', fontStyle: 'italic', marginBottom: 20 }}>
                <strong style={{ color: '#F8F3E8', fontStyle: 'normal', fontSize: 20 }}>Simhaavatar was founded on a single belief:</strong>
              </p>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, lineHeight: 2, color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', marginBottom: 20 }}>
                that every man deserves to wear the jewellery of kings — not just own it. Mysore&apos;s Vijayanagara heritage is the richest tradition of masculine gold craft in India.
              </p>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, lineHeight: 2, color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', marginBottom: 20 }}>
                The Ganda Berunda, the Baju Band, the Rudraksha Kanthi — these are not merely ornaments. They are <em style={{ color: '#D4AF37' }}>statements of identity</em>, worn by warriors, priests, and kings for centuries.
              </p>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, lineHeight: 2, color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>
                We make this heritage accessible through curated rental — so the modern groom, the classical performer, the film director can all dress in authentic temple gold, without the cost of ownership.
              </p>
            </div>

            {/* Animated jewel */}
            <div style={{ borderRadius: 16, overflow: 'hidden', aspectRatio: '1', border: '1px solid rgba(212,175,55,0.12)', background: '#0D0900' }}>
              <JewelCanvas modelType="kanthi" accent="#D4AF37" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>

          {/* ── VALUES ── */}
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 5, color: '#D4AF37', opacity: 0.5, textTransform: 'uppercase', textAlign: 'center', marginBottom: 32 }}>
            What We Stand For
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 72 }}>
            {VALUES.map((v) => (
              <div key={v.title} style={{
                padding: '30px 26px',
                background: 'rgba(212,175,55,0.03)',
                border: '1px solid rgba(212,175,55,0.08)',
                borderRadius: 12, transition: 'all 0.25s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(212,175,55,0.07)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.2)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(212,175,55,0.03)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <span style={{ fontSize: 30, display: 'block', marginBottom: 16 }}>{v.icon}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: '#F8F3E8', marginBottom: 10 }}>{v.title}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'rgba(255,255,255,0.38)', lineHeight: 1.8 }}>{v.desc}</p>
              </div>
            ))}
          </div>

          {/* ── TIMELINE ── */}
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 5, color: '#D4AF37', opacity: 0.5, textTransform: 'uppercase', textAlign: 'center', marginBottom: 40 }}>
            Our Journey
          </p>
          <div style={{ maxWidth: 660, margin: '0 auto', marginBottom: 72 }}>
            {MILESTONES.map((m, i) => (
              <div key={m.year} style={{ display: 'flex', gap: 24, marginBottom: i === MILESTONES.length - 1 ? 0 : 0 }}>
                {/* Year + line */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 60, flexShrink: 0 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#D4AF37', opacity: 0.7, letterSpacing: 1 }}>{m.year}</span>
                  <div style={{ width: 1, flex: 1, background: i === MILESTONES.length - 1 ? 'transparent' : 'rgba(212,175,55,0.15)', marginTop: 8 }} />
                </div>
                {/* Dot + event */}
                <div style={{ paddingBottom: i === MILESTONES.length - 1 ? 0 : 28, display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#D4AF37', flexShrink: 0, marginTop: 3 }} />
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: 0 }}>{m.event}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── TEAM ── */}
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 5, color: '#D4AF37', opacity: 0.5, textTransform: 'uppercase', textAlign: 'center', marginBottom: 32 }}>
            The Team
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 72 }}>
            {TEAM.map((member) => (
              <div key={member.name} style={{
                padding: '28px', background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: 12, textAlign: 'center', transition: 'all 0.25s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(212,175,55,0.18)'; e.currentTarget.style.background = 'rgba(212,175,55,0.04)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
              >
                <div style={{
                  width: 68, height: 68, borderRadius: '50%',
                  border: '2px solid rgba(212,175,55,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontSize: 26, color: '#D4AF37',
                  background: 'rgba(212,175,55,0.06)',
                  margin: '0 auto 16px',
                }}>{member.initial}</div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: '#F8F3E8', marginBottom: 4 }}>{member.name}</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: 3, color: '#D4AF37', opacity: 0.5, textTransform: 'uppercase' }}>{member.role}</p>
              </div>
            ))}
          </div>

          {/* ── CTA ── */}
          <div style={{ textAlign: 'center', padding: '48px 0' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontStyle: 'italic', color: 'rgba(255,255,255,0.35)', marginBottom: 28, lineHeight: 1.8 }}>
              Ready to wear the jewellery of kings?
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 14 }}>
              <a href="/" style={{ padding: '14px 32px', background: '#D4AF37', border: 'none', borderRadius: 4, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 5, color: '#050505', textDecoration: 'none', textTransform: 'uppercase', transition: 'all 0.25s', display: 'inline-block' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#F5E27A'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#D4AF37'; }}
              >View The Looks</a>
              <a href="/contact" style={{ padding: '14px 32px', background: 'transparent', border: '1px solid rgba(212,175,55,0.4)', borderRadius: 4, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 5, color: '#D4AF37', textDecoration: 'none', textTransform: 'uppercase', transition: 'all 0.25s', display: 'inline-block' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(212,175,55,0.06)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
              >Contact Us</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
