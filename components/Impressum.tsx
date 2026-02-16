import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';

export const Impressum: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-[#faf4e1] relative overflow-x-hidden">
        <div className="max-w-4xl mx-auto py-24 px-6">
          <Link to="/" className="inline-block mb-8 hover:opacity-60 transition-opacity">
            <img 
              src="/images/logo/logo.png" 
              alt="Scriptopia Logo" 
              className="max-w-[100px] h-auto"
            />
          </Link>
          
          <h1 className="text-5xl font-serif mb-8">Impressum</h1>
          
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="font-light space-y-2">
                <div>Scriptopia Schreibatelier</div>
                <div>Theresa Fleischhauer</div>
                <div>Flurstr. 4</div>
                <div>57076 Siegen</div>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4">Kontakt</h2>
              <p className="font-light">
                <div>E-Mail: <a href="mailto:theresa@scriptopia-schreibatelier.de" className="underline hover:text-black/60">theresa@scriptopia-schreibatelier.de</a></div>
                <div>Telefon: <a href="tel:017639950413" className="underline hover:text-black/60">+49 176 39950413</a></div>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4">Haftung für Inhalte</h2>
              <p className="font-light">
                Die Inhalte dieser Website werden mit großer Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4">Haftung für Links</h2>
              <p className="font-light">
                Wir sind nicht verantwortlich für fremde Inhalte, auf die wir mittels Links hinweisen. Der Inhalt verlinkter Seiten liegt in der Verantwortung der jeweiligen Anbieter.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4">Urheberrecht</h2>
              <p className="font-light">
                Alle Inhalte dieser Website (Texte, Bilder, Grafiken) sind urheberrechtlich geschützt. Eine Vervielfältigung, Bearbeitung oder Weitergabe ist ohne ausdrückliche Genehmigung nicht gestattet.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
