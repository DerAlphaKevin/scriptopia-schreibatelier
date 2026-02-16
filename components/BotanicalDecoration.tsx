
import React from 'react';

export const BotanicalDecoration: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Top Left */}
      <svg className="absolute -top-10 -left-10 w-64 h-64 text-black opacity-[0.03] transform -rotate-12" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50,10 C60,40 20,60 10,90 C40,70 60,80 90,50 C70,40 80,10 50,10 Z" />
      </svg>
      
      {/* Bottom Right */}
      <svg className="absolute top-1/2 -right-20 w-80 h-80 text-black opacity-[0.03] transform rotate-45" viewBox="0 0 100 100" fill="currentColor">
        <path d="M20,20 Q50,0 80,20 Q100,50 80,80 Q50,100 20,80 Q0,50 20,20" />
        <path d="M50,50 L50,100" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>

      {/* Middle Floating */}
      <div className="absolute top-[30%] left-[5%] animate-float opacity-[0.05]">
        <svg className="w-32 h-32 text-black" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M10,50 Q30,10 50,50 T90,50" />
          <path d="M50,20 L50,80" />
          <circle cx="50" cy="50" r="10" />
        </svg>
      </div>

      {/* Another Leaf */}
      <div className="absolute bottom-[10%] right-[10%] animate-float opacity-[0.04]" style={{ animationDelay: '-3s' }}>
        <svg className="w-48 h-48 text-black" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50,10 C50,10 80,30 50,90 C20,30 50,10 50,10 Z" />
        </svg>
      </div>
    </div>
  );
};
