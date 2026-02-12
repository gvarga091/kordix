import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { Navigation } from './Navigation';
import { useEffect } from 'react';

export function Legal() {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation activeSection="legal" />
      
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {language === 'hu' ? (
            <div className="space-y-12">
              <section>
                <h1 className="text-4xl font-bold mb-8 uppercase tracking-wider">Impresszum</h1>
                <div className="grid md:grid-cols-2 gap-8 text-gray-300">
                  <div className="space-y-4">
                    <p><span className="text-gray-500 block text-xs uppercase tracking-widest">Szolgáltató neve</span> <strong className="text-white">Varga Gergő E.V.</strong></p>
                    <p><span className="text-gray-500 block text-xs uppercase tracking-widest">Székhely</span> <strong className="text-white">3257 Bükkszenterzsébet, Szabadság út 180.</strong></p>
                    <p><span className="text-gray-500 block text-xs uppercase tracking-widest">Adószám</span> <strong className="text-white">91548616-1-30</strong></p>
                    <p><span className="text-gray-500 block text-xs uppercase tracking-widest">Nyilvántartási szám</span> <strong className="text-white">61385478</strong></p>
                  </div>
                  <div className="space-y-4">
                    <p><span className="text-gray-500 block text-xs uppercase tracking-widest">Email</span> <strong className="text-white">gergo@kordix.hu</strong></p>
                    <p><span className="text-gray-500 block text-xs uppercase tracking-widest">Telefon</span> <strong className="text-white">+36 70 566 8606</strong></p>
                    <p><span className="text-gray-500 block text-xs uppercase tracking-widest">Tevékenység</span> <strong className="text-white">Számítógépes programozás (m.n.s.)</strong></p>
                  </div>
                </div>
              </section>

              <section className="pt-12 border-t border-gray-900">
                <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider">Tárhelyszolgáltató</h2>
                <div className="text-gray-300 space-y-2">
                  <p><strong>BlazeArts Kft. (Forpsi.hu)</strong></p>
                  <p>Székhely: 6000 Kecskemét, Városház utca 8.</p>
                  <p>Email: admin@forpsi.hu</p>
                  <p>Web: www.forpsi.hu</p>
                </div>
              </section>

              <section className="pt-12 border-t border-gray-900">
                <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider">Adatkezelési Tájékoztató (Rövidítve)</h2>
                <div className="text-gray-400 prose prose-invert max-w-none">
                  <p>A weboldalon található kapcsolatfelvételi űrlap használatával Ön önkéntesen adja meg személyes adatait (név, email cím). Ezen adatokat kizárólag a kapcsolatfelvétel és az ajánlatadás céljából kezeljük, harmadik félnek nem adjuk át.</p>
                  <p>Az adatkezelés jogalapja az Ön hozzájárulása. Az adatokat a kapcsolat lezárásáig vagy az Ön törlési kérelméig tároljuk.</p>
                </div>
              </section>
            </div>
          ) : (
            <div className="space-y-12">
              <section>
                <h1 className="text-4xl font-bold mb-8 uppercase tracking-wider">Legal Notice</h1>
                <div className="grid md:grid-cols-2 gap-8 text-gray-300">
                  <div className="space-y-4">
                    <p><span className="text-gray-500 block text-xs uppercase tracking-widest">Provider Name</span> <strong className="text-white">Varga Gergő E.V.</strong></p>
                    <p><span className="text-gray-500 block text-xs uppercase tracking-widest">Registered Office</span> <strong className="text-white">3257 Bükkszenterzsébet, Szabadság út 180, Hungary</strong></p>
                    <p><span className="text-gray-500 block text-xs uppercase tracking-widest">Tax ID</span> <strong className="text-white">91548616-1-30</strong></p>
                    <p><span className="text-gray-500 block text-xs uppercase tracking-widest">Registration No.</span> <strong className="text-white">61385478</strong></p>
                  </div>
                  <div className="space-y-4">
                    <p><span className="text-gray-500 block text-xs uppercase tracking-widest">Email</span> <strong className="text-white">gergo@kordix.hu</strong></p>
                    <p><span className="text-gray-500 block text-xs uppercase tracking-widest">Phone</span> <strong className="text-white">+36 70 566 8606</strong></p>
                    <p><span className="text-gray-500 block text-xs uppercase tracking-widest">Primary Activity</span> <strong className="text-white">Computer programming</strong></p>
                  </div>
                </div>
              </section>

              <section className="pt-12 border-t border-gray-900">
                <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider">Hosting Provider</h2>
                <div className="text-gray-300 space-y-2">
                  <p><strong>BlazeArts Kft. (Forpsi.hu)</strong></p>
                  <p>Address: 6000 Kecskemét, Városház utca 8, Hungary</p>
                  <p>Email: admin@forpsi.hu</p>
                  <p>Web: www.forpsi.hu</p>
                </div>
              </section>

              <section className="pt-12 border-t border-gray-900">
                <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider">Privacy Policy (Summary)</h2>
                <div className="text-gray-400 prose prose-invert max-w-none">
                  <p>By using the contact form on this website, you voluntarily provide your personal data (name, email address). We process this data solely for the purpose of contacting you and providing a quote. We do not pass it on to third parties.</p>
                  <p>The legal basis for processing is your consent. Data is stored until the communication is concluded or until you request its deletion.</p>
                </div>
              </section>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}
