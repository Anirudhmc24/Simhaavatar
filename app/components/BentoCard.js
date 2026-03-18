'use client';
import { useState } from 'react';
import JewelCanvas from './JewelCanvas';

export default function BentoCard({ look, colSpan = 1, rowSpan = 1, onSelect }) {
  const [hovered, setHovered] = useState(false);
  const isLight = look.bg.startsWith('#F') || look.bg.startsWith('#E');

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onSelect && onSelect(look)}
      style={{
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`,
        position: 'relative',
        borderRadius: 16,
        overflow: 'hidden',
        cursor: 'pointer',
        background: look.bg,
        border: `1px solid ${hovered ? look.accent + '55' : 'rgba(255,255,255,0.04)'}`,
        boxShadow: hovered
          ? `0 20px 80px ${look.accent}22, 0 0 0 1px ${look.accent}33`
          : '0 4px 24px rgba(0,0,0,0.5)',
        transform: hovered ? 'scale(1.016) translateY(-3px)' : 'scale(1)',
        transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
      }}
    >
      {/* Canvas */}
      <div style={{ position: 'absolute', inset: 0, opacity: hovered ? 1 : 0.78, transition: 'opacity 0.4s' }}>
        <JewelCanvas modelType={look.modelType} accent={look.accent} style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: isLight
          ? `linear-gradient(180deg, rgba(245,240,232,0) 40%, rgba(245,240,232,0.96) 100%)`
          : `linear-gradient(180deg, transparent 40%, ${look.bg}f0 100%)`,
      }} />

      {/* Active border pulse */}
      {hovered && (
        <div style={{
          position: 'absolute', inset: 0, borderRadius: 16,
          border: `2px solid ${look.accent}`,
          boxShadow: `inset 0 0 30px ${look.accent}18`,
          pointerEvents: 'none',
        }} />
      )}

      {/* Top labels */}
      <span style={{
        position: 'absolute', top: 18, left: 22,
        fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 4,
        color: look.accent, opacity: 0.75, textTransform: 'uppercase',
      }}>{look.label}</span>

      <span style={{
        position: 'absolute', top: 14, right: 20,
        fontFamily: 'var(--font-serif)', fontSize: 16,
        color: look.accent, opacity: 0.38,
      }}>{look.kannada}</span>

      {/* Bottom content */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '18px 22px 22px' }}>
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: 5,
          color: look.accent, opacity: 0.72, textTransform: 'uppercase', marginBottom: 4,
        }}>{look.subtitle}</p>

        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: colSpan === 2 && rowSpan === 2 ? 36 : 22,
          fontWeight: 600, color: look.textColor, margin: '0 0 3px', lineHeight: 1.1,
        }}>{look.title}</h3>

        <p style={{
          fontFamily: 'var(--font-serif)', fontSize: 12, fontStyle: 'italic',
          color: isLight ? 'rgba(26,18,9,0.45)' : 'rgba(255,255,255,0.38)',
          margin: '0 0 10px',
        }}>{look.piece}</p>

        {hovered && (
          <button style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '6px 16px',
            background: 'transparent',
            border: `1px solid ${look.accent}66`,
            borderRadius: 40,
            fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: 3,
            color: look.accent, textTransform: 'uppercase', cursor: 'pointer',
          }}>Explore Look ›</button>
        )}
      </div>

      {/* Price */}
      <span style={{
        position: 'absolute', bottom: 20, right: 22,
        fontFamily: 'var(--font-mono)', fontSize: 10,
        color: look.accent, opacity: 0.6,
      }}>{look.rentalFrom}/day</span>
    </div>
  );
}
