import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';

export const Datenschutz: React.FC = () => {
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
          
          <h1 className="text-5xl font-serif mb-8">Datenschutz</h1>
          
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif mb-4">1. Datenschutz auf einen Blick</h2>
              <div className="space-y-4 font-light">
                <p>
                  Diese Datenschutzerklärung klärt Sie gemäß den Anforderungen der EU-Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG) über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten auf dieser Website auf.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4">2. Verantwortliche Stelle</h2>
              <p className="font-light">
                Verantwortliche Stelle für die Datenverarbeitung ist:<br />
                <br />
                Scriptopia Schreibatelier<br />
                Theresa Fleischhauer<br />
                Flurstr. 4<br />
                57076 Siegen<br />
                E-Mail: <a href="mailto:theresa@scriptopia-schreibatelier.de" className="underline hover:text-black/60">theresa@scriptopia-schreibatelier.de</a><br />
                Telefon: <a href="tel:017639950413" className="underline hover:text-black/60">+49 176 39950413</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4">3. Erfassung und Verarbeitung von Daten</h2>
              <div className="space-y-4 font-light">
                <div>
                  <h3 className="font-serif mb-2">Server-Logdatei</h3>
                  <p>
                    Der Hoster unserer Website erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien. Dies sind beispielsweise:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Browsertyp und Browserversion</li>
                    <li>Verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                  </ul>
                </div>
                <p>
                  Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Daten werden gelöscht, sobald sie für die Zwecke der Erhebung nicht mehr erforderlich sind.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4">4. Kontaktformulare</h2>
              <div className="space-y-4 font-light">
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4">5. Ihre Rechte</h2>
              <div className="space-y-4 font-light">
                <p>
                  Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Recht auf Auskunft</li>
                  <li>Recht auf Berichtigung</li>
                  <li>Recht auf Löschung („Recht auf Vergessenwerden")</li>
                  <li>Recht auf Einschränkung der Verarbeitung</li>
                  <li>Recht auf Datenübertragbarkeit</li>
                  <li>Recht auf Widerspruch</li>
                </ul>
                <p className="mt-4">
                  Kontaktieren Sie uns unter der oben angegebenen Adresse oder E-Mail-Adresse für die Geltendmachung Ihrer Rechte.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4">6. Datensicherheit</h2>
              <p className="font-light">
                Wir treffen technische und organisatorische Maßnahmen, um Ihre Daten vor Manipulation, Verlust, Zerstörung und vor Zugriff unberechtigter Personen zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4">7. Änderungen dieser Datenschutzerklärung</h2>
              <p className="font-light">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie immer den aktuellen rechtlichen Anforderungen entspricht. Die jeweils aktualisierte Fassung finden Sie auf unserer Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4">8. Kontakt</h2>
              <p className="font-light">
                Bei Fragen zum Datenschutz oder zur Geltendmachung Ihrer Rechte kontaktieren Sie uns unter:<br />
                <a href="mailto:theresa@scriptopia-schreibatelier.de" className="underline hover:text-black/60">theresa@scriptopia-schreibatelier.de</a> oder <a href="tel:017639950413" className="underline hover:text-black/60">+49 176 39950413</a>
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
