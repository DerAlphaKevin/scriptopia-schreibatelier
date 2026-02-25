
import React from 'react';

export const Availability: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#8b7d6f] text-white relative">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl">Wo du mich findest</h2>
          <p className="text-white/60 font-garamond italic text-xl">Scriptoria kommt bald zu dir</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="p-8 border border-white/20 rounded-2xl hover:bg-white/5 transition-colors cursor-default">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif">Online Shop</h3>
            </div>
            <p className="text-white/70 font-light">
              Demnächst eröffne ich meinen eigenen <strong>Shop</strong>. Dort kannst du bequem von zu Hause aus stöbern und bestellen.
            </p>
          </div>

          <div className="p-8 border border-white/20 rounded-2xl hover:bg-white/5 transition-colors cursor-default">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif">Märkte & Events</h3>
            </div>
            <p className="text-white/70 font-light">
              Ich liebe den persönlichen Austausch! Du findest mich bald auf regionalen Kunsthandwerkermärkten und Design-Messen.
            </p>
          </div>
        </div>

        <div className="pt-8">
          <p className="text-white/40 text-sm tracking-widest uppercase mb-6">Folge mir auf meiner Reise</p>
          <div className="flex justify-center gap-8 flex-wrap">
            <a href="https://www.instagram.com/scriptoria.schreibatelier?igsh=MWNkcjl0ZGdpYWl3Ng==" className="hover:text-scriptopia-beige transition-colors">Instagram</a>
            <a href="https://de.pinterest.com/scriptoriaSchreibatelier/" className="hover:text-scriptopia-beige transition-colors">Pinterest</a>
            <a href="mailto:theresa@scriptopia-schreibatelier.de" className="hover:text-scriptopia-beige transition-colors">Email</a>
            <a href="https://www.tiktok.com/@scriptoriaschreibatelier" className="hover:text-scriptopia-beige transition-colors">TikTok</a>
          </div>
        </div>
      </div>
    </section>
  );
};
