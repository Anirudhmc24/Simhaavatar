'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledTotal = (winScroll / height) * 100;
      
      setScrollProgress(scrolledTotal);
      setScrolled(winScroll > 60);
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'collection', label: 'Looks' },
    { id: 'about', label: 'About' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style jsx>{`
        .nav-link { 
          position: relative; 
          background: none; 
          border: none; 
          cursor: pointer; 
          color: rgba(255, 255, 255, 0.4); 
          transition: color 0.3s ease; 
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 8px 0;
        }
        .nav-link:hover { color: #D4AF37 !important; }
        .nav-line { 
          position: absolute; 
          bottom: 0; 
          left: 50%; 
          width: 0; 
          height: 1px; 
          background: #D4AF37; 
          opacity: 0; 
          transform: translateX(-50%); 
          transition: all 0.3s ease; 
        }
        .nav-link:hover .nav-line { width: 100%; opacity: 1; }
      `}</style>

      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500, height: 72, padding: '0 60px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(5,4,2,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,175,55,0.1)' : 'none',
        transition: 'all 0.5s ease',
      }}>
        {/* ── SCROLL PROGRESS BAR ── */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, 
          height: '2px', background: '#D4AF37', 
          width: `${scrollProgress}%`, transition: 'width 0.1s ease-out'
        }} />

        <div onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, letterSpacing: 6, color: '#F8F3E8', fontWeight: 700 }}>SIMHAAVATAR</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: 4, color: '#D4AF37', opacity: 0.7, marginTop: 4 }}>MYSORE · EST. 2019</div>
        </div>

        <nav style={{ display: 'flex', gap: 32 }}>
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => scrollToSection(link.id)} 
              className="nav-link"
            >
              {link.label}
              <div className="nav-line" />
            </button>
          ))}
        </nav>

        <button 
          onClick={() => scrollToSection('contact')}
          style={{ 
            padding: '12px 28px', border: '1px solid rgba(212,175,55,0.4)', borderRadius: 2, 
            fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 3, color: '#D4AF37', 
            background: 'transparent', cursor: 'pointer', textTransform: 'uppercase' 
          }}
        >
          Book a Look
        </button>
      </header>
    </>
  );
}