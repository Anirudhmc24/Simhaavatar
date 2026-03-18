'use client';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FAQ_DATA } from '../lib/tokens';

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div style={{
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      overflow: 'hidden',
    }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', padding: '20px 0',
          background: 'transparent', border: 'none', cursor: 'pointer',
          gap: 16, textAlign: 'left',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-serif)', fontSize: 18,
          color: isOpen ? '#D4AF37' : '#F8F3E8',
          lineHeight: 1.4, flex: 1,
          transition: 'color 0.25s',
        }}>{item.q}</span>
        <span style={{
          width: 28, height: 28, borderRadius: '50%',
          border: `1px solid ${isOpen ? '#D4AF37' : 'rgba(212,175,55,0.25)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 12, color: '#D4AF37', flexShrink: 0,
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'all 0.3s',
          background: isOpen ? 'rgba(212,175,55,0.1)' : 'transparent',
        }}>▾</span>
      </button>

      <div style={{
        maxHeight: isOpen ? 400 : 0,
        overflow: 'hidden',
        transition: 'max-height 0.35s ease',
      }}>
        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: 14,
          color: 'rgba(255,255,255,0.5)', lineHeight: 1.9,
          paddingBottom: 20,
        }}
          dangerouslySetInnerHTML={{ __html: item.a.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#D4AF37;font-weight:500">$1</strong>') }}
        />
      </div>
    </div>
  );
}

export default function FAQPage() {
  // Track open item per category: { categoryIdx: itemIdx | null }
  const [openItems, setOpenItems] = useState({});

  const toggle = (catIdx, itemIdx) => {
    setOpenItems((prev) => {
      const key = `${catIdx}-${itemIdx}`;
      return { ...prev, [key]: !prev[key] };
    });
  };

  return (
    <>
      <Header />
      <main style={{ paddingTop: 64 }}>

        {/* Hero */}
        <section style={{
          padding: '80px 40px 52px', textAlign: 'center',
          borderBottom: '1px solid rgba(212,175,55,0.06)',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.06) 0%, transparent 55%)',
        }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 7, color: '#D4AF37', opacity: 0.6, textTransform: 'uppercase', marginBottom: 18 }}>
            Common Questions
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,6vw,70px)', fontWeight: 600, color: '#F8F3E8', lineHeight: 1, marginBottom: 8 }}>
            Frequently Asked
          </h1>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4vw,52px)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(212,175,55,0.65)', letterSpacing: 6, marginBottom: 22 }}>
            Questions
          </h1>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 15, fontStyle: 'italic', color: 'rgba(255,255,255,0.35)', maxWidth: 460, margin: '0 auto', lineHeight: 1.8 }}>
            Everything you need to know before booking your Simhaavatar look.
          </p>
        </section>

        {/* FAQ Grid */}
        <section style={{ maxWidth: 860, margin: '0 auto', padding: '60px 40px 100px' }}>
          {FAQ_DATA.map((category, catIdx) => (
            <div key={category.category} style={{ marginBottom: 56 }}>
              {/* Category label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 5, color: '#D4AF37', opacity: 0.55, textTransform: 'uppercase', margin: 0 }}>
                  {category.category}
                </p>
                <div style={{ flex: 1, height: 1, background: 'rgba(212,175,55,0.1)' }} />
              </div>

              {/* Items */}
              {category.items.map((item, itemIdx) => (
                <FAQItem
                  key={itemIdx}
                  item={item}
                  isOpen={!!openItems[`${catIdx}-${itemIdx}`]}
                  onToggle={() => toggle(catIdx, itemIdx)}
                />
              ))}
            </div>
          ))}

          {/* Still have questions CTA */}
          <div style={{
            marginTop: 32, padding: '40px', textAlign: 'center',
            background: 'rgba(212,175,55,0.03)',
            border: '1px solid rgba(212,175,55,0.1)',
            borderRadius: 14,
          }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: '#F8F3E8', marginBottom: 8 }}>
              Still have questions?
            </p>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 14, fontStyle: 'italic', color: 'rgba(255,255,255,0.38)', marginBottom: 24, lineHeight: 1.8 }}>
              Our team is available 7 days a week. We typically reply within 15 minutes on WhatsApp.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <button
                onClick={() => window.open('https://wa.me/919999999999?text=Hi! I have a question about Simhaavatar.')}
                style={{ padding: '12px 28px', background: '#D4AF37', border: 'none', borderRadius: 8, fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 4, color: '#050505', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#F5E27A'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#D4AF37'; }}
              >
                💬 WhatsApp Us
              </button>
              <a href="/contact" style={{ padding: '12px 28px', background: 'transparent', border: '1px solid rgba(212,175,55,0.4)', borderRadius: 8, fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 4, color: '#D4AF37', textTransform: 'uppercase', cursor: 'pointer', textDecoration: 'none', transition: 'all 0.2s', display: 'inline-block' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(212,175,55,0.06)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
              >
                Contact Us →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
