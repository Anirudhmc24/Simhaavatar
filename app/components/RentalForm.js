'use client';
import { useState, useEffect } from 'react';

export default function RentalForm({ look, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const accent = look?.accent || '#D4AF37';

  return (
    <div 
      onClick={onClose} 
      style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(20px)' }}
    >
      <div 
        onClick={(e) => e.stopPropagation()} 
        style={{ background: '#0A0A0A', border: `1px solid ${accent}40`, padding: 50, width: 450, position: 'relative', borderRadius: 8 }}
      >
        <button 
          onClick={(e) => { e.stopPropagation(); onClose(); }} // FIXED X BUTTON
          style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', color: 'white', fontSize: 24, cursor: 'pointer' }}
        >✕</button>

        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: accent, marginBottom: 10 }}>BOOK YOUR LOOK</h3>
        <p style={{ color: 'white', opacity: 0.5, marginBottom: 30 }}>{look?.title || 'Personalized'}</p>
        
        <input placeholder="NAME" style={{ width: '100%', padding: 15, marginBottom: 15, background: '#111', border: '1px solid #222', color: 'white' }} />
        <button style={{ width: '100%', padding: 18, background: accent, color: 'black', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
          CONFIRM VIA WHATSAPP
        </button>

        <button 
          onClick={(e) => { e.stopPropagation(); onClose(); }} // FIXED CANCEL BUTTON
          style={{ width: '100%', marginTop: 15, background: 'none', border: 'none', color: 'gray', cursor: 'pointer' }}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
}