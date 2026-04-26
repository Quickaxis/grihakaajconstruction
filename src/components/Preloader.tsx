import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'visible' | 'fadeOut'>('visible');

  useEffect(() => {
    const fadeTimer = setTimeout(() => setPhase('fadeOut'), 2400);
    const doneTimer = setTimeout(() => onComplete(), 3100);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#003E3E', /* Cyprus */
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 700ms cubic-bezier(0.4,0,0.2,1)',
        opacity: phase === 'fadeOut' ? 0 : 1,
        pointerEvents: phase === 'fadeOut' ? 'none' : 'all',
      }}
    >
      {/* Subtle radial glow behind logo */}
      <div
        style={{
          position: 'absolute',
          width: '480px',
          height: '480px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(243,246,247,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Main content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Company name */}
        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.05em',
              color: '#F3F6F7', /* Cloud White */
              margin: 0,
              lineHeight: 1.1,
              animation: 'preloaderTextFade 1s 0.2s cubic-bezier(0.4,0,0.2,1) both',
            }}
          >
            TORA DEVELOPERS
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
              fontWeight: 500,
              letterSpacing: '0.5em',
              color: 'rgba(243,246,247,0.45)',
              margin: '8px 0 0',
              textTransform: 'uppercase',
              animation: 'preloaderTextFade 1s 0.4s cubic-bezier(0.4,0,0.2,1) both',
            }}
          >
            Upper Assam
          </p>
        </div>

        {/* Loading bar container */}
        <div style={{ width: '240px', display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
          {/* Track */}
          <div
            style={{
              width: '100%',
              height: '1px',
              backgroundColor: 'rgba(243,246,247,0.12)',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {/* Fill */}
            <div
              className="animate-load-bar"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, rgba(243,246,247,0.4), #F3F6F7)',
              }}
            />
          </div>

          {/* Label */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              color: 'rgba(243,246,247,0.3)',
              textTransform: 'uppercase',
              textAlign: 'center',
              margin: 0,
              animation: 'preloaderTextFade 1s 0.8s cubic-bezier(0.4,0,0.2,1) both',
            }}
          >
            8 Years of Excellence in Plotting
          </p>
        </div>
      </div>

      <style>{`
        @keyframes preloaderTextFade {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};
