import { Mail, MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | PT Polaris Multi Dimensi',
  description: 'Get in touch with PT Polaris Multi Dimensi for high-quality chemical raw materials. Located in Tangerang, Indonesia.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20 bg-surface">
      
      <header className="bg-surface-container-low py-20 border-b border-outline/10 text-center px-8">
        <div className="max-w-4xl mx-auto">
          <span className="label-sm uppercase tracking-widest text-outline text-[11px] mb-4 block font-bold">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 font-headline text-black dark:text-white">Contact Our Team</h1>
          <p className="text-lg text-secondary font-light max-w-2xl mx-auto">
            Our technical sales and logistics teams are ready to assist you bridging your raw material requirements.
          </p>
        </div>
      </header>

      <main className="py-24 px-8 max-w-5xl mx-auto w-full">
        
        <h2 className="text-3xl font-bold font-headline mb-12 text-black text-center">Office Details</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface-container-lowest border border-outline/10 p-8 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow ring-1 ring-[#25D366]/20">
            <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366] flex-shrink-0 p-2">
              <img src="/whatsapp.png" alt="WhatsApp" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-black font-headline mb-0.5 text-[#25D366]">Ary Rahmansyah</h3>
              <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">Business Development Manager</p>
              <p className="text-secondary font-light mb-3 text-sm italic">Direct support for inquiries and strategic partnerships.</p>
              <a 
                href="https://wa.me/6281277335701?text=Hello%20Ary,%20I%20would%20like%20to%20inquire%20about%20chemical%20raw%20materials%20from%20PT%20Polaris." 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg font-bold text-black hover:text-[#25D366] transition-colors inline-flex items-center gap-2"
              >
                +62 812 7733 5701
                <span className="text-[10px] bg-[#25D366] text-white px-2 py-0.5 rounded-full uppercase tracking-tighter">WA Available</span>
              </a>
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-outline/10 p-8 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-black font-headline mb-2">Headquarters &amp; Logistics Hub</h3>
              <p className="text-secondary font-light">Jalan Millenium Raya Blok J6 No. 2,</p>
              <p className="text-secondary font-light">Millenium Industrial Estate, Tigaraksa, Cikupa,</p>
              <p className="text-secondary font-light">Tangerang, Banten, Indonesia 15710</p>
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-outline/10 p-8 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-black font-headline mb-2">Email Directory</h3>
              <p className="text-secondary font-light mb-1"><strong>Sales:</strong> ary@polaris.co.id</p>
              <p className="text-secondary font-light"><strong>Inquiries:</strong> info@polaris-multidimensi.com</p>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest border border-outline/10 p-8 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
              <Clock size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-black font-headline mb-2">Business Hours</h3>
              <p className="text-secondary font-light">Monday - Friday: 08:30 - 17:00 WIB</p>
              <p className="text-secondary font-light">Saturday &amp; Sunday: Closed</p>
            </div>
          </div>
        </div>

      </main>

      {/* Map block */}
      <section className="bg-surface-container-low border-t border-outline/10 h-96 w-full relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15862.618698944588!2d106.4947!3d-6.2168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e42008f7f509935%3A0xbcc0eeb04e104e7b!2sMillenium%20Industrial%20Estate!5e0!3m2!1sen!2sid!4v171327!5m2!1sen!2sid" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Polaris Headquarters Location"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        ></iframe>
      </section>

    </div>
  );
}
