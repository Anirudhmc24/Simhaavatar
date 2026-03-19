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
  ];

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
        .nav-link { 
          position: relative; background: none; border: none; cursor: pointer; 
          color: rgba(255, 255, 255, 0.6); font-family: var(--font-mono), monospace;
          font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
          transition: all 0.4s ease;
        }
        .nav-link:hover { color: #D4AF37 !important; transform: scale(1.1); letter-spacing: 3px; }
        
        .cta-button {
          padding: 12px 30px; border: 1px solid rgba(212, 175, 55, 0.5); 
          border-radius: 2px; font-family: var(--font-mono), monospace; 
          font-size: 9px; letter-spacing: 3px; color: #D4AF37; 
          background: transparent; cursor: pointer; text-transform: uppercase;
          transition: all 0.4s ease;
        }
        .cta-button:hover { background: rgba(212, 175, 55, 0.1); transform: scale(1.05); }

        @media (max-width: 768px) {
          header { padding: 0 20px !important; height: 70px !important; background: rgba(5, 4, 2, 0.95) !important; }
          .desktop-nav { display: none !important; }
          .logo-subtext { display: none !important; }
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

        {/* Logo Section */}
        <div onClick={() => scrollToSection('home')} style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
          <img 
            src="/assets/header-logo.png" 
            alt="Simhaavatar" 
            style={{ height: scrolled ? '30px' : '40px', width: 'auto', mixBlendMode: 'screen', transition: 'height 0.4s ease' }} 
          />
          <div className="logo-subtext" style={{ fontFamily: 'var(--font-mono)', fontSize: '7px', letterSpacing: '4px', color: '#D4AF37', opacity: 0.6, marginTop: '8px' }}>
            MYSORE · EST. 2019
          </div>
        </div>

        {/* Navigation */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '40px' }}>
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => scrollToSection(link.id)} className="nav-link">
              {link.label}
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