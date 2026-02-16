
import React from 'react';

export const AboutMe: React.FC = () => {
  return (
    <section id="ueber-mich" className="py-24 px-6 bg-white/50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-[4/5] bg-[#d5c5b5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-xl">
            <img 
              src="/images/profile/profile.jpeg" 
              alt="Artisan at work" 
              className="w-full h-full object-cover opacity-90 mix-blend-multiply"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-scriptopia-beige rounded-full border border-black/10 flex items-center justify-center text-center p-4 transform rotate-12">
            <p className="font-serif text-sm italic">Mit Liebe handgemacht</p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl mb-4">Über mich</h2>
            <div className="w-16 h-1 bg-black/10 rounded-full"></div>
          </div>
          
          <div className="space-y-4 text-gray-700 font-light leading-relaxed">
            <p>
              Willkommen im Scriptopia Schreibatelier. Ich bin die kreative Seele hinter diesen handgefertigten Buchhüllen. 
              Papier war für mich schon immer mehr als nur ein Schreibuntergrund – es ist ein Speicher für Erinnerungen, Skizzen und Träume.
            </p>
            <p>
              In meiner kleinen Werkstatt entstehen Travelers Notebooks, die nicht nur funktional sind, sondern eine eigene Geschichte erzählen. 
              Jedes Stück ist ein Unikat, sorgfältig ausgewählt und verarbeitet, um dich auf deinen Wegen zu begleiten.
            </p>
            <p className="font-garamond italic text-xl">
              „Ein leeres Blatt ist der Anfang eines neuen Abenteuers.“
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
