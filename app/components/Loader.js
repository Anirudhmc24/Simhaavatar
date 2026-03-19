'use client'
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000, // Above everything
            background: '#050402',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* THE PULSING LION */}
          <motion.div
            animate={{ 
              scale: [0.98, 1.05, 0.98],
              opacity: [0.6, 1, 0.6] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            style={{ width: '200px', textAlign: 'center' }}
          >
            <img 
              src="/assets/loader-website.png" 
              alt="Simhaavatar Loading" 
              style={{ width: '100%', height: 'auto', mixBlendMode: 'screen', filter: 'brightness(1.2)' }} 
            />
            
            <div style={{ 
              marginTop: '30px', 
              fontFamily: 'var(--font-mono)', 
              fontSize: '8px', 
              letterSpacing: '8px', 
              color: '#D4AF37',
              textTransform: 'uppercase'
            }}>
              Constructing the Palace
            </div>
          </motion.div>

          {/* PROGRESS LINE */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '120px' }}
            transition={{ duration: 2.5, ease: "circOut" }}
            style={{ 
              height: '1px', 
              background: '#D4AF37', 
              marginTop: '20px',
              opacity: 0.3
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}