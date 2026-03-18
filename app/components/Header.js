'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '/#bento', label: 'Looks' },
    { href: '/contact', label: 'Contact' },
    { href: '/about', label: 'About' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 500,
      height: 64,
      padding: '0 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(5,4,2,0.94)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(212,175,55,0.12)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      {/* Brand */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <div style={{
          width: 32, height: 32, borderRadius: '50%',
          border: '1.5px solid #D4AF37',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14, color: '#D4AF37',
        }}>𒀭</div>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 17, letterSpacing: 3, color: '#F8F3E8', lineHeight: 1 }}>
            SIMHAAVATAR
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 7, letterSpacing: 5, color: '#D4AF37', opacity: 0.55 }}>
            MYSORE · EST. 2019
          </div>
        </div>
      </Link>

      {/* Nav */}
      <nav style={{ display: 'flex', gap: 28 }}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 9,
              letterSpacing: 3,
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: pathname === link.href ? '#D4AF37' : 'rgba(255,255,255,0.5)',
              transition: 'color 0.2s',
              borderBottom: pathname === link.href ? '1px solid #D4AF37' : '1px solid transparent',
              paddingBottom: 2,
            }}
            onMouseEnter={(e) => e.target.style.color = '#D4AF37'}
            onMouseLeave={(e) => e.target.style.color = pathname === link.href ? '#D4AF37' : 'rgba(255,255,255,0.5)'}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* CTA */}
      <Link
        href="/contact"
        style={{
          padding: '8px 20px',
          border: '1px solid rgba(212,175,55,0.5)',
          borderRadius: 40,
          fontFamily: 'var(--font-mono)',
          fontSize: 9,
          letterSpacing: 3,
          color: '#D4AF37',
          textDecoration: 'none',
          textTransform: 'uppercase',
          transition: 'all 0.25s',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = '#D4AF37'; e.currentTarget.style.color = '#0B0B0B'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#D4AF37'; }}
      >
        Book a Look
      </Link>
    </header>
  );
}
