
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-scriptopia-beige border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-4">
          <img 
            src="/images/logo/logo.png" 
            alt="Scriptopia Logo" 
            className="max-w-[120px] h-auto"
          />
        </div>
        
        <div className="text-xs text-gray-400 font-light">
          © {new Date().getFullYear()} Scriptoria Schreibatelier. Alle Rechte vorbehalten.
        </div>

        <div className="flex gap-6 text-sm text-gray-600 font-light">
          <Link to="/impressum" className="hover:text-black transition-colors">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-black transition-colors">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
};
