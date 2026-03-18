'use client';
import Link from 'next/link';
import JewelCanvas from './components/JewelCanvas';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh', background: '#050505',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '40px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.2 }}>
        <JewelCanvas modelType="kanthi" accent="#D4AF37" style={{ width: '100%', height: '100%' }} />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 7, color: '#D4AF37', opacity: 0.6, textTransform: 'uppercase', marginBottom: 20 }}>
          404 — Page Not Found
        </p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px,10vw,120px)', fontWeight: 600, color: '#F8F3E8', lineHeight: 1, marginBottom: 16 }}>
          Lost, Warrior?
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontStyle: 'italic', color: 'rgba(255,255,255,0.35)', marginBottom: 40, lineHeight: 1.8 }}>
          Even the Ganda Berunda needs a map sometimes.<br />Let us guide you back.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ padding: '14px 32px', background: '#D4AF37', border: 'none', borderRadius: 4, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 5, color: '#050505', textDecoration: 'none', textTransform: 'uppercase' }}>
            Back to Portfolio
          </Link>
          <Link href="/contact" style={{ padding: '14px 32px', background: 'transparent', border: '1px solid rgba(212,175,55,0.4)', borderRadius: 4, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 5, color: '#D4AF37', textDecoration: 'none', textTransform: 'uppercase' }}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
