'use client';
import { useState, useEffect } from 'react';
import JewelCanvas from './JewelCanvas';
import RentalForm from './RentalForm';

export default function LookModal({ look, onClose }) {
  const [rentalOpen, setRentalOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!look) return null;
  const isLight = look.bg.startsWith('#F') || look.bg.startsWith('#E');

  return (
    <>
      <div style={{
        position: 'fixed', inset: 0, zIndex: 800,
        display: 'flex',
        background: `${look.bg}f5`,
        backdropFilter: 'blur(16px)',
        animation: 'fadeIn 0.3s ease',
      }}>
        {/* Left — 3D scene */}
        <div style={{ flex: '1 1 60%', position: 'relative' }}>
          <JewelCanvas modelType={look.modelType} accent={look.accent} style={{ width: '100%', height: '100%' }} />

          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: 24, right: 24,
              width: 40, height: 40, borderRadius: '50%',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.18)',
              color: 'rgba(255,255,255,0.6)',
              fontSize: 18, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
              zIndex: 10,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = look.accent; e.currentTarget.style.color = look.accent; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
          >✕</button>
        </div>

        {/* Right — info panel */}
        <div style={{
          flex: '0 0 360px',
          padding: '56px 36px',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          borderLeft: `1px solid ${look.accent}18`,
          background: isLight ? 'rgba(245,240,230,0.92)' : 'rgba(8,5,2,0.88)',
          backdropFilter: 'blur(32px)',
          overflowY: 'auto',
        }}>
          <div>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 5,
              color: look.accent, opacity: 0.55, textTransform: 'uppercase', marginBottom: 8,
            }}>{look.label} / 05 — {look.kannada}</p>

            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 52, fontWeight: 600,
              color: look.textColor, lineHeight: 1.0, marginBottom: 6,
            }}>{look.title}</h2>

            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 5,
              color: look.accent, textTransform: 'uppercase', marginBottom: 22,
            }}>{look.subtitle}</p>

            <div style={{ height: 1, background: `linear-gradient(90deg,${look.accent}55,transparent)`, marginBottom: 22 }} />

            <p style={{
              fontFamily: 'var(--font-serif)', fontSize: 16, lineHeight: 1.85,
              fontStyle: 'italic',
              color: isLight ? '#3D2800' : 'rgba(255,255,255,0.55)',
              marginBottom: 30,
            }}>{look.description}</p>

            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: 4, color: look.accent, opacity: 0.45, textTransform: 'uppercase', marginBottom: 5 }}>
              Signature Piece
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: look.textColor, marginBottom: 20 }}>
              {look.piece}
            </p>

            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: 4, color: look.accent, opacity: 0.45, textTransform: 'uppercase', marginBottom: 5 }}>
              Interaction Mode
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: look.accent, letterSpacing: 1, marginBottom: 20 }}>
              {look.interaction.toUpperCase()}
            </p>
          </div>

          <div>
            {/* Price */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 600, color: look.accent }}>
                {look.rentalFrom}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: look.textColor, opacity: 0.4, letterSpacing: 2 }}>
                / DAY
              </span>
            </div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: look.textColor, opacity: 0.3, letterSpacing: 1, marginBottom: 24 }}>
              Free delivery in Mysore · Security deposit applicable
            </p>

            <button
              onClick={() => setRentalOpen(true)}
              style={{
                width: '100%', padding: '15px', marginBottom: 12,
                background: look.accent, border: 'none', borderRadius: 8,
                fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 5,
                color: isLight ? '#0B0B0B' : '#050505',
                textTransform: 'uppercase', cursor: 'pointer',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.88'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >Book This Look →</button>

            <button
              onClick={() => window.open(`https://wa.me/919999999999?text=${encodeURIComponent(`Hi! I'm interested in the ${look.title} look — ${look.piece}.`)}`)}
              style={{
                width: '100%', padding: '13px',
                background: 'transparent',
                border: `1px solid ${look.accent}44`,
                borderRadius: 8,
                fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 4,
                color: look.accent, textTransform: 'uppercase', cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = `${look.accent}10`; e.currentTarget.style.borderColor = look.accent; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = `${look.accent}44`; }}
            >💬 Ask on WhatsApp</button>
          </div>
        </div>
      </div>

      {rentalOpen && (
        <RentalForm look={look} onClose={() => setRentalOpen(false)} />
      )}
    </>
  );
}
