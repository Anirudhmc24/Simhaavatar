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

  if (!mounted) return null;

  return (
    <>
      <style jsx>{`
        .nav-link { 
          position: relative; 
          background: none; 
          border: none; 
          cursor: pointer; 
          color: rgba(255, 255, 255, 0.6); 
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); 
          transform: scale(1);
          display: inline-block;
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 8px 0;
        }
        .nav-link:hover { 
          color: #D4AF37 !important; 
          transform: scale(1.1); /* Refined from 1.5 to 1.1 */
          letter-spacing: 3px;
        }
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

        .cta-button {
          padding: 12px 30px; 
          border: 1px solid rgba(212, 175, 55, 0.5); 
          border-radius: 2px; 
          font-family: var(--font-mono), monospace; 
          font-size: 9px; 
          letter-spacing: 3px; 
          color: #D4AF37; 
          background: transparent; 
          cursor: pointer; 
          text-transform: uppercase;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform: scale(1);
        }
        .cta-button:hover {
          background: rgba(212, 175, 55, 0.1);
          border-color: #D4AF37;
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.2);
        }
      `}</style>

      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500, 
        height: scrolled ? '70px' : '100px', 
        padding: '0 60px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(5, 4, 2, 0.98)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.15)' : 'none',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        
        <div style={{
          position: 'absolute', bottom: 0, left: 0, height: '2px', 
          background: 'linear-gradient(90deg, #D4AF37, #F8F3E8)', 
          width: `${scrollProgress}%`, transition: 'width 0.1s ease-out'
        }} />

        <div onClick={() => scrollToSection('home')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', cursor: 'pointer' }}>
          <img 
            src="/assets/header-logo.png" 
            alt="Simhaavatar" 
            style={{ 
              height: scrolled ? '32px' : '44px', 
              width: 'auto',
              mixBlendMode: 'screen',
              filter: 'brightness(1.1) drop-shadow(0 0 10px rgba(212, 175, 55, 0.3))',
              transition: 'height 0.4s ease'
            }} 
          />
          <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '7px', letterSpacing: '4px', color: '#D4AF37', opacity: 0.6, marginTop: '8px', textTransform: 'uppercase' }}>
            Mysore · Est. 2019
          </div>
        </div>

        <nav style={{ display: 'flex', gap: '40px' }}>
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => scrollToSection(link.id)} className="nav-link">
              {link.label}
              <div className="nav-line" />
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