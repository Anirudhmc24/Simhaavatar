'use client';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { STUDIO_HOURS, LOOKS, buildWhatsAppLink } from '../lib/tokens';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const inputStyle = {
  display: 'block', width: '100%', padding: '12px 16px',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(212,175,55,0.18)',
  borderRadius: 8, color: '#F0EAD8',
  fontFamily: 'var(--font-sans)', fontSize: 13,
  outline: 'none', resize: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s',
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', event: '', date: '', looks: [], message: '', source: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const todayName = DAYS[new Date().getDay()];

  const toggleLook = (label) => {
    setForm((f) => ({
      ...f,
      looks: f.looks.includes(label) ? f.looks.filter((l) => l !== label) : [...f.looks, label],
    }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = true;
    if (!form.phone.trim()) e.phone = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    const msg = `Hi Simhaavatar! I'm ${form.name}. I'm interested in renting jewellery for: ${form.event || 'an event'}. Looks: ${form.looks.length ? form.looks.join(', ') : 'open to suggestions'}. ${form.message ? 'Notes: ' + form.message : ''} Phone: ${form.phone}.`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(msg)}`);
    setSubmitted(true);
  };

  const contactCards = [
    { icon: '💬', title: 'WhatsApp', value: '+91 99999 99999', hint: 'Fastest — we reply in minutes', href: 'https://wa.me/919999999999' },
    { icon: '📞', title: 'Phone Call', value: '+91 99999 99999', hint: 'Mon–Sat, 9 AM – 8 PM IST', href: 'tel:+919999999999' },
    { icon: '✉️', title: 'Email', value: 'hello@simhaavatar.com', hint: 'For detailed enquiries & quotes', href: 'mailto:hello@simhaavatar.com' },
    { icon: '📍', title: 'Showroom', value: 'Chamundi Hills Road, Mysore', hint: 'Appointments preferred', href: null },
  ];

  return (
    <>
      <Header />
      <main style={{ paddingTop: 64 }}>

        {/* Hero */}
        <section style={{
          position: 'relative', padding: '80px 40px 56px', textAlign: 'center',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 60%)',
          borderBottom: '1px solid rgba(212,175,55,0.06)',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(212,175,55,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(212,175,55,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 7, color: '#D4AF37', opacity: 0.6, textTransform: 'uppercase', marginBottom: 18 }}>Get In Touch</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,6vw,72px)', fontWeight: 600, color: '#F8F3E8', lineHeight: 1, marginBottom: 6 }}>Contact Us</h1>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(16px,2vw,24px)', fontStyle: 'italic', color: 'rgba(212,175,55,0.6)', letterSpacing: 6, marginBottom: 20 }}>We Reply Within 2 Hours</p>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 15, fontStyle: 'italic', color: 'rgba(255,255,255,0.35)', maxWidth: 500, margin: '0 auto', lineHeight: 1.8 }}>
            Reach us by WhatsApp, call, or fill the form — we&apos;ll help you find your perfect look.
          </p>
        </section>

        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.35fr', maxWidth: 1100, margin: '0 auto' }}>

          {/* LEFT — Contact info */}
          <div style={{ padding: '52px 44px', borderRight: '1px solid rgba(212,175,55,0.07)' }}>

            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: 5, color: '#D4AF37', opacity: 0.5, textTransform: 'uppercase', marginBottom: 18 }}>Direct Channels</p>
            {contactCards.map((card) => (
              <div
                key={card.title}
                onClick={() => card.href && window.open(card.href)}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: 14,
                  padding: '14px 16px', marginBottom: 12,
                  background: 'rgba(212,175,55,0.03)',
                  border: '1px solid rgba(212,175,55,0.08)',
                  borderRadius: 10,
                  cursor: card.href ? 'pointer' : 'default',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={(e) => { if (card.href) { e.currentTarget.style.background = 'rgba(212,175,55,0.07)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.2)'; e.currentTarget.style.transform = 'translateX(3px)'; }}}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(212,175,55,0.03)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.08)'; e.currentTarget.style.transform = 'translateX(0)'; }}
              >
                <div style={{ width: 38, height: 38, borderRadius: 8, background: 'rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>{card.icon}</div>
                <div>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: 14, color: '#F8F3E8', marginBottom: 2 }}>{card.title}</p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#D4AF37', opacity: 0.75, letterSpacing: 1 }}>{card.value}</p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 10, color: 'rgba(255,255,255,0.28)', marginTop: 2 }}>{card.hint}</p>
                </div>
              </div>
            ))}

            {/* Hours */}
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: 5, color: '#D4AF37', opacity: 0.5, textTransform: 'uppercase', marginTop: 36, marginBottom: 16 }}>Studio Hours</p>
            {STUDIO_HOURS.map((h) => {
              const isToday = h.day === todayName;
              return (
                <div key={h.day} style={{ display: 'flex', justifyContent: 'space-between', padding: '9px 0', borderBottom: '1px solid rgba(212,175,55,0.05)' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: isToday ? '#D4AF37' : 'rgba(255,255,255,0.42)', fontWeight: isToday ? 500 : 400, display: 'flex', alignItems: 'center', gap: 8 }}>
                    {h.day}
                    {isToday && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 7, letterSpacing: 2, padding: '2px 8px', background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: 20, color: '#D4AF37' }}>TODAY</span>}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#D4AF37', opacity: 0.68 }}>{h.time}</span>
                </div>
              );
            })}

            {/* Socials */}
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: 5, color: '#D4AF37', opacity: 0.5, textTransform: 'uppercase', marginTop: 36, marginBottom: 14 }}>Follow Our Work</p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {['📸 Instagram', '▶ YouTube', '📘 Facebook'].map((s) => (
                <button key={s} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 2, color: 'rgba(255,255,255,0.45)', cursor: 'pointer', textTransform: 'uppercase', transition: 'all 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#D4AF37'; e.currentTarget.style.color = '#D4AF37'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; }}
                >{s}</button>
              ))}
            </div>
          </div>

          {/* RIGHT — Inquiry form */}
          <div style={{ padding: '52px 44px', background: 'rgba(12,8,4,0.4)' }}>
            {!submitted ? (
              <>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: '#F8F3E8', marginBottom: 6 }}>Send an Inquiry</h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'rgba(255,255,255,0.35)', lineHeight: 1.8, marginBottom: 28 }}>
                  Tell us about your event — we&apos;ll send a personal jewellery recommendation and quote within 2 hours.
                </p>

                {/* Name + Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 16 }}>
                  {[['name','Your Name *','Rajesh Kumar'], ['phone','Phone / WhatsApp *','+91 98765 43210']].map(([field, label, ph]) => (
                    <div key={field}>
                      <label style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: 4, color: '#D4AF37', opacity: 0.5, textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>{label}</label>
                      <input
                        style={{ ...inputStyle, borderColor: errors[field] ? 'rgba(255,80,80,0.6)' : 'rgba(212,175,55,0.18)' }}
                        placeholder={ph} value={form[field]}
                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                        onFocus={(e) => { e.target.style.borderColor = 'rgba(212,175,55,0.5)'; }}
                        onBlur={(e) => { e.target.style.borderColor = errors[field] ? 'rgba(255,80,80,0.6)' : 'rgba(212,175,55,0.18)'; }}
                      />
                    </div>
                  ))}
                </div>

                {/* Event + Date */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 16 }}>
                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: 4, color: '#D4AF37', opacity: 0.5, textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Event Type</label>
                    <select style={{ ...inputStyle, cursor: 'pointer', appearance: 'none', background: 'rgba(20,12,4,0.8)' }}
                      value={form.event} onChange={(e) => setForm({ ...form, event: e.target.value })}>
                      <option value="">Select occasion...</option>
                      {['Wedding — Groom', 'Wedding — Baarat', 'Photoshoot / Portfolio', 'Classical Dance', 'Drama / Theatre', 'Festival', 'Film / Commercial', 'Other'].map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: 4, color: '#D4AF37', opacity: 0.5, textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Event Date</label>
                    <input type="date" style={inputStyle} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(212,175,55,0.5)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(212,175,55,0.18)'; }}
                    />
                  </div>
                </div>

                {/* Look chips */}
                <div style={{ marginBottom: 16 }}>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: 4, color: '#D4AF37', opacity: 0.5, textTransform: 'uppercase', display: 'block', marginBottom: 10 }}>Looks You're Interested In</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {[...LOOKS.map((l) => l.title), 'Not Sure — Help Me'].map((label) => (
                      <button key={label}
                        onClick={() => toggleLook(label)}
                        style={{
                          padding: '6px 14px',
                          background: form.looks.includes(label) ? 'rgba(212,175,55,0.12)' : 'transparent',
                          border: `1px solid ${form.looks.includes(label) ? '#D4AF37' : 'rgba(212,175,55,0.2)'}`,
                          borderRadius: 40, fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: 2,
                          color: form.looks.includes(label) ? '#D4AF37' : 'rgba(212,175,55,0.5)',
                          cursor: 'pointer', textTransform: 'uppercase', transition: 'all 0.2s',
                        }}>{label}</button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: 16 }}>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: 4, color: '#D4AF37', opacity: 0.5, textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Message / Special Requests</label>
                  <textarea rows={3} style={inputStyle} placeholder="Budget range, specific pieces, delivery location, neck size..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(212,175,55,0.5)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(212,175,55,0.18)'; }}
                  />
                </div>

                {/* How did you hear */}
                <div style={{ marginBottom: 24 }}>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: 4, color: '#D4AF37', opacity: 0.5, textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>How did you hear about us?</label>
                  <select style={{ ...inputStyle, cursor: 'pointer', appearance: 'none', background: 'rgba(20,12,4,0.8)' }} value={form.source} onChange={(e) => setForm({ ...form, source: e.target.value })}>
                    <option value="">Select...</option>
                    {['Instagram', 'Google Search', 'Friend / Family Referral', 'Wedding Photographer', 'Event Planner', 'YouTube', 'Other'].map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>

                <button onClick={handleSubmit} style={{ width: '100%', padding: '15px', background: '#D4AF37', border: 'none', borderRadius: 8, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 5, color: '#050505', textTransform: 'uppercase', cursor: 'pointer', marginBottom: 12, transition: 'all 0.25s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#F5E27A'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#D4AF37'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >Send Inquiry →</button>

                <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '0 0 12px' }}>
                  <div style={{ flex: 1, height: 1, background: 'rgba(212,175,55,0.1)' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: 3, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>or reach us instantly</span>
                  <div style={{ flex: 1, height: 1, background: 'rgba(212,175,55,0.1)' }} />
                </div>

                <button onClick={() => window.open(buildWhatsAppLink(form.name, form.event, form.looks))}
                  style={{ width: '100%', padding: '13px', background: 'transparent', border: '1px solid rgba(37,211,102,0.3)', borderRadius: 8, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 4, color: '#25D366', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'all 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(37,211,102,0.06)'; e.currentTarget.style.borderColor = 'rgba(37,211,102,0.6)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(37,211,102,0.3)'; }}
                ><span>💬</span> Continue on WhatsApp</button>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <div style={{ fontSize: 52, marginBottom: 20 }}>🦁</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: '#D4AF37', marginBottom: 10 }}>ಸ್ವಾಗತ, {form.name}!</h3>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic', color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, marginBottom: 28 }}>
                  Your inquiry has been received.<br />
                  The Simhaavatar team will contact you<br />
                  within <strong style={{ color: '#D4AF37' }}>2 hours</strong> via WhatsApp.
                </p>
                <button onClick={() => setSubmitted(false)} style={{ padding: '12px 32px', background: 'transparent', border: '1px solid rgba(212,175,55,0.4)', borderRadius: 40, fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 4, color: '#D4AF37', cursor: 'pointer', textTransform: 'uppercase' }}>
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Map placeholder */}
        <div style={{ padding: '0 40px 80px', maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ height: 260, background: 'linear-gradient(135deg,rgba(12,8,4,0.9),rgba(20,14,6,0.9))', border: '1px solid rgba(212,175,55,0.1)', borderRadius: 14, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.05) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
            <span style={{ fontSize: 32 }}>📍</span>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: '#F8F3E8', textAlign: 'center', lineHeight: 1.6 }}>Chamundi Hills Road<br />Mysore, Karnataka 570 010</p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: 5, color: '#D4AF37', opacity: 0.5, textTransform: 'uppercase' }}>Showroom & Fitting Studio</p>
            <button onClick={() => window.open('https://maps.google.com/?q=Mysore+Karnataka')} style={{ padding: '9px 24px', border: '1px solid rgba(212,175,55,0.4)', borderRadius: 40, fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 3, color: '#D4AF37', cursor: 'pointer', background: 'transparent', textTransform: 'uppercase', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(212,175,55,0.08)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
            >Open in Google Maps ↗</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
