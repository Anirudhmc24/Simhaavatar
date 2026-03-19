'use client'
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Watermark({ isPersistent = true }) {
  const { scrollY } = useScroll();

  const opacity = useTransform(
    scrollY, 
    [0, 500], 
    isPersistent ? [0.15, 0.15] : [0.25, 0] 
  );

  return (
    <>
      <style jsx>{`
        @keyframes holoFlicker {
          0%, 100% { filter: brightness(1) contrast(1); }
          5% { filter: brightness(1.8) contrast(1.2) saturate(1.5); }
          7% { filter: brightness(1) contrast(1); }
        }
        .holo-seal {
          animation: holoFlicker 12s linear infinite;
        }
      `}</style>

      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'min(30vw, 160px)', // Desktop 30vw, Mobile max 160px
        zIndex: 5, 
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>

        <motion.div
          className="holo-seal"
          style={{
            opacity,
            width: '100%',
            mixBlendMode: 'screen',
            filter: 'drop-shadow(0 0 40px rgba(212, 175, 55, 0.2))',
          }}
          animate={{
            rotateY: [-5, 5, -5],
            scale: [0.95, 1, 0.95],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img
            src="/assets/lion-watermark.png" 
            alt="Simhaavatar Royal Seal" 
            style={{ 
              width: '100%', height: 'auto', display: 'block',
              maskImage: 'radial-gradient(circle, black 30%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 80%)'
            }} 
          />
        </motion.div>

        <div style={{ 
          marginTop: '15px',
          fontFamily: 'var(--font-mono)', 
          fontSize: '7px', 
          letterSpacing: '5px', 
          color: '#D4AF37', 
          opacity: 0.3,
          textTransform: 'uppercase'
        }}>
          Authentic Heritage
        </div>
      </div>
    </>
  );
}