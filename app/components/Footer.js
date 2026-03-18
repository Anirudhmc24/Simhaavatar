'use client';
import Link from 'next/link';

export default function Footer() {
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

      <div style={{ fontFamily: 'var(--font-serif)', fontSize: 13, color: 'rgba(255,255,255,0.2)', fontStyle: 'italic' }}>
        Royal Heritage meets High-Tech Minimalism
      </div>
    </footer>
  );
}
