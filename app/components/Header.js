'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  if (!mounted) return null;

  return (
    <>
      <style jsx>{`
        header { 
          position: fixed; top: 0; left: 0; right: 0; z-index: 500; 
          display: flex; align-items: center; justify-content: space-between;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* ── BRANDING LOGIC ── */
        .desktop-brand { display: block; }
        .mobile-brand { display: none; }

        .brand-text {
          font-family: var(--font-display), serif;
          font-weight: 900;
          text-transform: uppercase;
          color: #D4AF37;
          line-height: 1;
        }

        .nav-link { 
          background: none; border: none; cursor: pointer; 
          color: rgba(255, 255, 255, 0.6); font-family: var(--font-mono), monospace;
          font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
          transition: all 0.3s ease;
        }
        .nav-link:hover { color: #D4AF37; transform: scale(1.1); }
        
        .cta-button {
          padding: 12px 30px; border: 1px solid rgba(212, 175, 55, 0.5); 
          border-radius: 2px; font-family: var(--font-mono), monospace; 
          font-size: 9px; letter-spacing: 3px; color: #D4AF37; 
          background: transparent; cursor: pointer; text-transform: uppercase;
          transition: all 0.4s ease;
        }

        /* ── MOBILE OVERRIDES ── */
        @media (max-width: 768px) {
          header { padding: 0 20px !important; height: 70px !important; background: rgba(5, 4, 2, 0.98) !important; }
          
          .desktop-brand { display: none !important; } /* Hide Text */
          .mobile-brand { display: block !important; }  /* Show Logo */
          
          .desktop-nav { display: none !important; }
          .cta-button { padding: 8px 15px !important; font-size: 8px !important; }
        }
      `}</style>

      <header style={{
        height: scrolled ? '70px' : '100px', 
        padding: '0 60px',
        background: scrolled ? 'rgba(5, 4, 2, 0.98)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.15)' : 'none',
      }}>
        {/* Progress Bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, height: '2px', 
          background: 'linear-gradient(90deg, #D4AF37, #F8F3E8)', 
          width: `${scrollProgress}%`, transition: 'width 0.1s ease-out'
        }} />

        {/* Branding Container */}
        <div onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
          
          {/* DESKTOP: TEXT ONLY */}
          <div className="desktop-brand">
            <div className="brand-text" style={{ 
              fontSize: scrolled ? '20px' : '26px', 
              letterSpacing: scrolled ? '6px' : '8px' 
            }}>
              Simhaavatar
            </div>
          </div>

          {/* MOBILE: LOGO ONLY */}
          <div className="mobile-brand">
            <img 
              src="/assets/header-logo.png" 
              alt="Simhaavatar Logo" 
              style={{ height: '32px', width: 'auto', mixBlendMode: 'screen' }} 
            />
          </div>
          
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '30px' }}>
          {['home', 'collection', 'about', 'faq'].map((id) => (
            <button key={id} onClick={() => scrollToSection(id)} className="nav-link">
              {id}
            </button>
          ))}
        </nav>

        <button onClick={() => scrollToSection('contact')} className="cta-button">
          Book a Look
        </button>
      </header>
    </>
  );
}