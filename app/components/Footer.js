'use client';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid rgba(212,175,55,0.08)',
      padding: '48px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      background: 'var(--void)',
      flexWrap: 'wrap',
      gap: 24,
    }}>
      
    <div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: '#D4AF37', letterSpacing: 3, marginBottom: 4 }}>
          SIMHAAVATAR
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8, color: 'rgba(255,255,255,0.22)', letterSpacing: 5 }}>
          MYSORE, KARNATAKA · © 2025
        </div>
      </div>

      {/* ── SCROLL TO TOP BUTTON ── */}
      <button 
        onClick={scrollToTop}
        style={{ 
          width: '56px',
          height: '56px',
          border: '1px solid rgba(212, 175, 55, 0.3)', 
          borderRadius: '50%', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent', 
          cursor: 'pointer',
          transition: 'all 0.4s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#D4AF37';
          e.currentTarget.style.background = 'rgba(212, 175, 55, 0.05)';
          e.currentTarget.style.transform = 'translateY(-8px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5">
          <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <nav style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
        {[
          { href: '/', label: 'Portfolio' },
          { href: '/contact', label: 'Contact' },
          { href: '/about', label: 'About' },
          { href: '/faq', label: 'FAQ' },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 8,
              letterSpacing: 3,
              color: 'rgba(255,255,255,0.25)',
              textDecoration: 'none',
              textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => e.target.style.color = '#D4AF37'}
            onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.25)'}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* ── COPYRIGHT BAR ── */}
      <div style={{ 
        width: '100%', 
        maxWidth: '1200px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        paddingTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        fontFamily: 'var(--font-mono)',
        fontSize: '9px',
        letterSpacing: '1px',
        color: 'rgba(255,255,255,0.2)',
        textTransform: 'uppercase'
      }}>
      </div>
    </footer>
  );
}


