import React, { useEffect, useState } from 'react';

export const FadeIn: React.FC<{
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}> = ({ children, delay = 0, duration = 1000, className = '' }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`${shouldAnimate ? 'animate-fade-in' : 'opacity-0'} ${className}`}
      style={{
        animationDuration: `${duration}ms`,
        animationDelay: '0ms' // Handled by state
      }}
    >
      {children}
    </div>
  );
};

export const AnimatedHeading: React.FC<{
  text: string;
  className?: string;
}> = ({ text, className = '' }) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const lines = text.split(/\\n|\n/);
  let globalCharCount = 0;

  return (
    <div className={className}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block overflow-hidden">
          {line.split(' ').map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
              {word.split('').map((char) => {
                const delay = globalCharCount * 30;
                globalCharCount++;
                return (
                  <span
                    key={globalCharCount}
                    className={`inline-block opacity-0 ${startAnimation ? 'animate-char' : ''}`}
                    style={{
                      animationDelay: `${delay}ms`,
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
};
