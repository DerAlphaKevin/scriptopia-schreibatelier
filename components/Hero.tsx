
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 text-center bg-[#faf4e1]">
      <div className="max-w-3xl w-full flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/images/logo/logo.png" 
            alt="Scriptopia Schreibatelier Logo" 
            className="max-w-sm md:max-w-xl h-auto"
          />
        </div>

        <div className="space-y-6 mt-12">
          <h2 className="text-xl md:text-2xl font-garamond italic text-gray-700 tracking-wide">
            Handgefertigte Journal Cover
          </h2>
          
          <div className="inline-block border border-black/20 px-6 py-2 rounded-full mt-4">
            <p className="text-sm font-light tracking-[0.2em] uppercase">Bald geht es los</p>
          </div>

          <p className="max-w-xl mx-auto text-gray-600 font-light leading-relaxed px-4">
            Wir arbeiten gerade an unseren handgefertigten Schätzen. 
            Bald findest du hier einzigartige Journal Covers, die deine Reisen und Gedanken begleiten.
          </p>
        </div>

        <div className="mt-16 animate-bounce">
          <svg className="w-6 h-6 text-black/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};
