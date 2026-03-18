'use client'
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Watermark({ isPersistent = false }) {
  const { scrollY } = useScroll();

  // Opacity: Subtle (15%) on landing, even fainter (8%) when scrolling
  const opacity = useTransform(
    scrollY, 
    [0, 800], 
    isPersistent ? [0.08, 0.08] : [0.15, 0] 
  );

  return (
    <div style={{
      position: 'fixed',
      bottom: '-10%', // Positioned at the bottom
      left: '50%',
      transform: 'translateX(-50%)', // Centered horizontally
      width: '85vw', // Massive scale
      maxWidth: '1200px',
      zIndex: -1, // Sits behind all content
      pointerEvents: 'none',
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      <motion.div
        style={{
          opacity,
          mixBlendMode: 'screen', // MAGIC: Removes the black background box
          filter: 'drop-shadow(0 0 80px rgba(212, 175, 55, 0.25))', // Golden Glow
        }}
        // Cinematic slow sway
        animate={{
          rotateY: [-5, 5, -5],
          y: [0, -20, 0]
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
            width: '100%', 
            height: 'auto', 
            display: 'block',
            // Radial mask to fade the edges into the background
            maskImage: 'radial-gradient(circle, black 30%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 85%)'
          }} 
        />
      </motion.div>
    </div>
  );
}