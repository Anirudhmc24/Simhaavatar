'use client';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Watermark from '../components/watermark';
import { FAQ_DATA, COLORS } from '../lib/tokens';

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div style={{ borderBottom: '1px solid rgba(212,175,55,0.08)' }}>
      <button onClick={onToggle} style={{
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '30px 0', background: 'transparent', border: 'none', cursor: 'pointer', gap: 20
      }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: isOpen ? COLORS.mysoreGold : '#F8F3E8', flex: 1 }}>{item.q}</span>
        <span style={{ color: COLORS.mysoreGold }}>{isOpen ? '−' : '+'}</span>
      </button>
      <div style={{ maxHeight: isOpen ? 400 : 0, opacity: isOpen ? 1 : 0, overflow: 'hidden', transition: '0.4s' }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: 'rgba(255,255,255,0.5)', paddingBottom: 30, fontStyle: 'italic' }}
           dangerouslySetInnerHTML={{ __html: item.a.replace(/\*\*(.*?)\*\*/g, `<strong style="color:${COLORS.mysoreGold}">$1</strong>`) }} />
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState({});
  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh', position: 'relative' }}>
      <Watermark isPersistent={true} />
      <Header />
      {/* paddingTop: 160 clears the large fixed header */}
      <main style={{ paddingTop: 160, position: 'relative', zIndex: 10 }}>
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '0 40px 120px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: COLORS.mysoreGold, textAlign: 'center', letterSpacing: 8, marginBottom: 20 }}>SUPPORT</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 8vw, 80px)', textAlign: 'center', color: '#F8F3E8', marginBottom: 80 }}>FAQ</h1>
          {FAQ_DATA.map((category, catIdx) => (
            <div key={catIdx} style={{ marginBottom: 60 }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: COLORS.mysoreGold, opacity: 0.5, marginBottom: 20 }}>{category.category}</p>
              {category.items.map((item, i) => (
                <FAQItem key={i} item={item} isOpen={!!openItems[`${catIdx}-${i}`]} onToggle={() => setOpenItems({...openItems, [`${catIdx}-${i}`]: !openItems[`${catIdx}-${i}`]})} />
              ))}
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}