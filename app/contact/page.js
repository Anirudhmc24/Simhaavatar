'use client';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Watermark from '../components/watermark';
import { STUDIO_HOURS, LOOKS } from '../lib/tokens';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const inputStyle = {
  display: 'block', width: '100%', padding: '16px 20px',
  background: 'rgba(255,255,255,0.02)',
  border: '1px solid rgba(212,175,55,0.12)',
  borderRadius: 4, color: '#F0EAD8',
  fontFamily: 'var(--font-sans)', fontSize: 14,
  outline: 'none', resize: 'none',
  boxSizing: 'border-box',
  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
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
    const msg = `Hi Simhaavatar! I'm ${form.name}. Interested in: ${form.event || 'an event'}. Looks: ${form.looks.length ? form.looks.join(', ') : 'open to suggestions'}. Phone: ${form.phone}.`;
    window.open(`https://wa.me/919632838185?text=${encodeURIComponent(msg)}`);
    setSubmitted(true);
  };

  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh', color: '#F8F3E8' }}>
      <Watermark isPersistent={true} />
      <Header />

      <main style={{ paddingTop: 120 }}>
        {/* 1. HERO — Minimalist & Elevated */}
        <section style={{ textAlign: 'center', marginBottom: 120, padding: '0 20px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 8, color: '#D4AF37', textTransform: 'uppercase', marginBottom: 24 }}>Inquiries</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 8vw, 92px)', fontWeight: 700, lineHeight: 0.9, marginBottom: 32 }}>CONNECT WITH US</h1>
          <div style={{ width: 1, height: 100, background: 'linear-gradient(#D4AF37, transparent)', margin: '0 auto' }} />
        </section>

        {/* 2. DIRECT CHANNELS — Large & Spaced Out */}
        <section style={{ maxWidth: 1100, margin: '0 auto 160px', padding: '0 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 40 }}>
            {[
              { title: 'WhatsApp', value: '+91 96328 38185', href: 'https://wa.me/919632838185' },
              { title: 'Inquiries', value: 'anirudhmc@simhaavatar.com', href: 'mailto:anirudhmc@simhaavatar.com' },
              { title: 'Mysore Studio', value: 'Chamundi Hills Road', href: null }
            ].map((c) => (
              <div key={c.title} style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 4, color: '#D4AF37', opacity: 0.5, marginBottom: 12, textTransform: 'uppercase' }}>{c.title}</p>
                {c.href ? (
                  <a href={c.href} style={{ textDecoration: 'none', color: '#F8F3E8', fontFamily: 'var(--font-display)', fontSize: 24, transition: 'color 0.3s' }}
                    onMouseEnter={(e) => e.target.style.color = '#D4AF37'}
                    onMouseLeave={(e) => e.target.style.color = '#F8F3E8'}>
                    {c.value}
                  </a>
                ) : (
                  <p style={{ color: '#F8F3E8', fontFamily: 'var(--font-display)', fontSize: 24, margin: 0 }}>{c.value}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 3. THE FORM — Floating Card with maximum whitespace */}
        <section style={{ maxWidth: 800, margin: '0 auto 160px', padding: '0 40px' }}>
          <div style={{ background: 'rgba(212,175,55,0.02)', border: '1px solid rgba(212,175,55,0.08)', padding: '80px 60px', borderRadius: 2 }}>
            {!submitted ? (
              <>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, textAlign: 'center', marginBottom: 12 }}>Personal Recommendations</h2>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic', color: 'rgba(255,255,255,0.4)', textAlign: 'center', marginBottom: 60 }}>
                  Share your occasion, and we will curate a look just for you.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 32 }}>
                  {[['name', 'Full Name'], ['phone', 'WhatsApp Number']].map(([f, l]) => (
                    <div key={f}>
                      <label style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#D4AF37', opacity: 0.6, marginBottom: 10, display: 'block', textTransform: 'uppercase' }}>{l}</label>
                      <input style={{ ...inputStyle, borderColor: errors[f] ? '#ff4444' : inputStyle.borderColor }} value={form[f]} onChange={(e) => setForm({ ...form, [f]: e.target.value })} />
                    </div>
                  ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 32 }}>
                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#D4AF37', opacity: 0.6, marginBottom: 10, display: 'block', textTransform: 'uppercase' }}>Occasion</label>
                    <select style={{ ...inputStyle, appearance: 'none' }} value={form.event} onChange={(e) => setForm({ ...form, event: e.target.value })}>
                      <option value="">Select Event Type</option>
                      {['Groom - Wedding', 'Photoshoot', 'Classical Performance', 'Other'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#D4AF37', opacity: 0.6, marginBottom: 10, display: 'block', textTransform: 'uppercase' }}>Event Date</label>
                    <input type="date" style={inputStyle} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
                  </div>
                </div>

                <div style={{ marginBottom: 40 }}>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#D4AF37', opacity: 0.6, marginBottom: 16, display: 'block', textTransform: 'uppercase' }}>Looks of Interest</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                    {[...LOOKS.map(l => l.title), 'Help Me Choose'].map(label => (
                      <button key={label} onClick={() => toggleLook(label)} style={{
                        padding: '10px 20px', borderRadius: 4, fontFamily: 'var(--font-mono)', fontSize: 9,
                        background: form.looks.includes(label) ? '#D4AF37' : 'transparent',
                        color: form.looks.includes(label) ? '#000' : 'rgba(212,175,55,0.6)',
                        border: '1px solid #D4AF37', cursor: 'pointer', transition: '0.3s'
                      }}>{label}</button>
                    ))}
                  </div>
                </div>

                <button onClick={handleSubmit} style={{
                  width: '100%', padding: '20px', background: '#D4AF37', border: 'none', borderRadius: 4,
                  fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 5, color: '#000', cursor: 'pointer', fontWeight: 700
                }}>SUBMIT ENQUIRY</button>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: '#D4AF37' }}>ಸ್ವಾಗತ, {form.name}</h3>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontStyle: 'italic', opacity: 0.6, marginTop: 16 }}>We have received your message. Our team will reach out within 2 hours.</p>
              </div>
            )}
          </div>
        </section>

        {/* 4. STUDIO HOURS — Minimalist Table */}
        <section style={{ maxWidth: 600, margin: '0 auto 160px', padding: '0 40px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 6, color: '#D4AF37', textAlign: 'center', marginBottom: 40, textTransform: 'uppercase' }}>Studio Hours</p>
          {STUDIO_HOURS.map((h) => (
            <div key={h.day} style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid rgba(212,175,55,0.1)' }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: h.day === todayName ? '#D4AF37' : 'rgba(255,255,255,0.5)' }}>{h.day}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#D4AF37' }}>{h.time}</span>
            </div>
          ))}
        </section>

        {/* 5. MAP SECTION — Modern Full Width
        <section style={{ padding: '0 40px 160px' }}>
          <div style={{
            height: 400, background: 'rgba(212,175,55,0.03)', border: '1px solid rgba(212,175,55,0.1)',
            borderRadius: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'
          }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 32, marginBottom: 8 }}>Chamundi Hills Road</p>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontStyle: 'italic', opacity: 0.4, marginBottom: 32 }}>Mysore, Karnataka 570 010</p>
            <button onClick={() => window.open('https://maps.google.com')} style={{
              background: 'transparent', border: '1px solid #D4AF37', color: '#D4AF37',
              padding: '14px 40px', borderRadius: 4, fontFamily: 'var(--font-mono)', fontSize: 10, cursor: 'pointer'
            }}>VIEW ON GOOGLE MAPS</button>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
}