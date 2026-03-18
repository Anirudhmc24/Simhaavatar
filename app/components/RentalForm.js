'use client';
import { useState, useEffect } from 'react';

export default function RentalForm({ look, onClose }) {
  const [form, setForm] = useState({
    name: '', phone: '', event: '', date: '', duration: '1',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && onClose) onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Prevent body scroll while modal open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = true;
    if (!form.phone.trim()) e.phone = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    const msg = `Hi Simhaavatar! I'm ${form.name} and I'd like to book the ${look?.title || ''} look${form.event ? ` for ${form.event}` : ''}${form.date ? ` on ${form.date}` : ''} for ${form.duration} day(s). My phone: ${form.phone}.`;
    window.open(`https://wa.me/919632838185?text=${encodeURIComponent(msg)}`);
    setSubmitted(true);
  };

  const accent = look?.accent || '#D4AF37';

  const base = {
    display: 'block', width: '100%', padding: '12px 16px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(212,175,55,0.2)',
    borderRadius: 8, color: '#F0EAD8',
    fontFamily: 'var(--font-sans)', fontSize: 13,
    outline: 'none', boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  };

  return (
    /* Backdrop — click outside to close */
    <div
        onClick={() => onClose && onClose()}      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(0,0,0,0.88)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Modal box — stop click propagating to backdrop */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'rgba(14,10,5,0.98)',
          border: `1px solid ${accent}30`,
          borderRadius: 16, padding: '44px 40px',
          width: 460, maxWidth: '90vw',
          maxHeight: '90vh', overflowY: 'auto',
          position: 'relative',
        }}
      >
        {/* X button top-right */}
        <button
          onClick={() => onClose && onClose()}
          style={{
            position: 'absolute', top: 16, right: 16,
            width: 32, height: 32, borderRadius: '50%',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.15)',
            color: 'rgba(255,255,255,0.5)',
            fontSize: 16, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
        >✕</button>

        {!submitted ? (
          <>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: accent, marginBottom: 4 }}>
              Book Your Look
            </h3>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: 4, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: 28 }}>
              {look?.title} — {look?.piece}
            </p>

            {/* Name */}
            <div style={{ marginBottom: 16 }}>
              <label style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: 4, color: accent, opacity: 0.55, textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
                Your Name *
              </label>
              <input
                style={{ ...base, borderColor: errors.name ? 'rgba(255,80,80,0.6)' : 'rgba(212,175,55,0.2)' }}
                placeholder="Rajesh Kumar"
                value={form.name}
                onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: false }); }}
                onFocus={(e) => { e.target.style.borderColor = accent; }}
                onBlur={(e) => { e.target.style.borderColor = errors.name ? 'rgba(255,80,80,0.6)' : 'rgba(212,175,55,0.2)'; }}
              />
            </div>

            {/* Phone */}
            <div style={{ marginBottom: 16 }}>
              <label style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: 4, color: accent, opacity: 0.55, textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
                Phone / WhatsApp *
              </label>
              <input
                style={{ ...base, borderColor: errors.phone ? 'rgba(255,80,80,0.6)' : 'rgba(212,175,55,0.2)' }}
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: false }); }}
                onFocus={(e) => { e.target.style.borderColor = accent; }}
                onBlur={(e) => { e.target.style.borderColor = errors.phone ? 'rgba(255,80,80,0.6)' : 'rgba(212,175,55,0.2)'; }}
              />
            </div>

            {/* Event */}
            <div style={{ marginBottom: 16 }}>
              <label style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: 4, color: accent, opacity: 0.55, textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
                Event Type
              </label>
              <input
                style={base}
                placeholder="Wedding, Photoshoot, Dance Performance..."
                value={form.event}
                onChange={(e) => setForm({ ...form, event: e.target.value })}
                onFocus={(e) => { e.target.style.borderColor = accent; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(212,175,55,0.2)'; }}
              />
            </div>

            {/* Date + Duration */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 90px', gap: 12, marginBottom: 28 }}>
              <div>
                <label style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: 4, color: accent, opacity: 0.55, textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
                  Event Date
                </label>
                <input
                  type="date"
                  style={base}
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  onFocus={(e) => { e.target.style.borderColor = accent; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(212,175,55,0.2)'; }}
                />
              </div>
              <div>
                <label style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: 4, color: accent, opacity: 0.55, textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
                  Days
                </label>
                <input
                  type="number" min="1" max="14"
                  style={base}
                  value={form.duration}
                  onChange={(e) => setForm({ ...form, duration: e.target.value })}
                  onFocus={(e) => { e.target.style.borderColor = accent; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(212,175,55,0.2)'; }}
                />
              </div>
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              style={{
                width: '100%', padding: '15px', marginBottom: 12,
                background: accent, border: 'none', borderRadius: 8,
                fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 5,
                color: '#070504', textTransform: 'uppercase', cursor: 'pointer',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
            >
              Send via WhatsApp →
            </button>

            {/* Cancel */}
            <button
              onClick={() => onClose && onClose()}
              style={{
                width: '100%', padding: '12px',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 8,
                fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 4,
                color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase',
                cursor: 'pointer', transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.3)'; }}
            >
              Cancel
            </button>
          </>
        ) : (
          /* Success state */
          <div style={{ textAlign: 'center', padding: '32px 0' }}>
            <div style={{ fontSize: 52, marginBottom: 20 }}>🦁</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 30, color: accent, marginBottom: 10 }}>
              ಸ್ವಾಗತ, {form.name}!
            </h3>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 15, fontStyle: 'italic', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, marginBottom: 28 }}>
              WhatsApp has opened with your inquiry.<br />
              The Simhaavatar team will confirm<br />
              your booking within 2 hours.
            </p>
            <button
              onClick={() => onClose && onClose()}
              style={{
                padding: '12px 32px',
                background: 'transparent',
                border: `1px solid ${accent}55`,
                borderRadius: 40,
                fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 4,
                color: accent, cursor: 'pointer', textTransform: 'uppercase',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = `${accent}15`; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
