import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'visible' | 'fadeOut'>('visible');

  useEffect(() => {
    // After the 2s load animation finishes, wait a brief moment then fade out
    const fadeTimer = setTimeout(() => setPhase('fadeOut'), 2400);
    // After fade-out completes (700ms), signal parent
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
        backgroundColor: '#1a1f35', /* Midnight Indigo */
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
          background: 'radial-gradient(circle, rgba(240,231,213,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Architectural grid lines – decorative */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(to right, rgba(240,231,213,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(240,231,213,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
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
        {/* Logo */}
        <div
          style={{
            width: '96px',
            height: '96px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '1.5px solid rgba(240,231,213,0.2)',
            boxShadow: '0 0 40px rgba(240,231,213,0.08), 0 8px 32px rgba(0,0,0,0.6)',
            animation: 'preloaderLogoFade 0.9s cubic-bezier(0.4,0,0.2,1) forwards',
          }}
        >
          <img
            src="/images/logo.jpg"
            alt="Griha Kaaj Construction Logo"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Company name */}
        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
              letterSpacing: '-0.02em',
              color: '#F0E7D5', /* Vanilla Cream */
              margin: 0,
              lineHeight: 1.1,
              animation: 'preloaderTextFade 1s 0.2s cubic-bezier(0.4,0,0.2,1) both',
            }}
          >
            GRIHA KAAJ
          </p>
          <p
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: 'clamp(0.65rem, 1.5vw, 0.8rem)',
              letterSpacing: '0.35em',
              color: 'rgba(240,231,213,0.45)',
              margin: '6px 0 0',
              textTransform: 'uppercase',
              animation: 'preloaderTextFade 1s 0.4s cubic-bezier(0.4,0,0.2,1) both',
            }}
          >
            Construction
          </p>
        </div>

        {/* Divider line */}
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, rgba(240,231,213,0.3), transparent)',
            animation: 'preloaderTextFade 1s 0.6s cubic-bezier(0.4,0,0.2,1) both',
          }}
        />

        {/* Loading bar container */}
        <div style={{ width: '200px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Track */}
          <div
            style={{
              width: '100%',
              height: '1px',
              backgroundColor: 'rgba(240,231,213,0.12)',
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
                background: 'linear-gradient(to right, rgba(240,231,213,0.4), #F0E7D5)',
              }}
            />
          </div>

          {/* Label */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6rem',
              letterSpacing: '0.3em',
              color: 'rgba(240,231,213,0.3)',
              textTransform: 'uppercase',
              textAlign: 'center',
              margin: 0,
              animation: 'preloaderTextFade 1s 0.8s cubic-bezier(0.4,0,0.2,1) both',
            }}
          >
            16 Years of Precision Engineering
          </p>
        </div>
      </div>

      {/* Keyframes injected inline so the component is self-contained */}
      <style>{`
        @keyframes preloaderLogoFade {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes preloaderTextFade {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};
