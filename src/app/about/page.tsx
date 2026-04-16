import Link from 'next/link';
import { Building2, TrendingUp, Presentation, MapPin } from 'lucide-react';

export const metadata = {
  title: 'About PT Polaris Multi Dimensi | Chemical Distributor',
  description: 'Learn about PT Polaris Multi Dimensi, our history since 2013, our mission, vision, and strategic logistics advantages in Indonesia.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      
      {/* Header */}
      <header className="bg-surface py-24 border-b border-outline/10 text-center">
        <div className="max-w-4xl mx-auto px-8">
          <span className="label-sm uppercase tracking-[0.15em] text-outline text-[11px] mb-4 block font-bold">Company Profile</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 font-headline text-black dark:text-white">About Us</h1>
          <p className="text-xl text-secondary font-light leading-relaxed">
            Leading the supply chain for premium industrial chemicals in Indonesia through strategic partnerships and logistical excellence since 2013.
          </p>
        </div>
      </header>

      {/* History & Core Focus */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline mb-6 text-black flex items-center gap-3">
              <Building2 className="text-primary" size={32} />
              Our History
            </h2>
            <p className="text-lg text-secondary font-light leading-relaxed mb-6">
              Established in 2013, <strong>PT Polaris Multi Dimensi</strong> began with a clear objective: to bridge the gap between global chemical manufacturers and growing industrial sectors across Indonesia.
            </p>
            <p className="text-lg text-secondary font-light leading-relaxed">
              Over the past decade, we have expanded our robust product portfolio and integrated extensive logistical networks, ensuring that our clients in the plastics, rubber, lubricants, and cosmetics sectors receive their critical raw materials consistently and safely.
            </p>
          </div>
          <div className="aspect-video bg-surface-container rounded-2xl overflow-hidden shadow-lg border border-outline/5 relative">
             <div className="absolute inset-0 bg-primary/5"></div>
             <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent"></div>
             <p className="absolute bottom-6 left-8 text-white font-headline text-2xl font-bold tracking-tight">Est. 2013, Jakarta</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-8 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface-container-lowest p-12 border-l-4 border-primary shadow-sm rounded-r-2xl h-full">
            <h2 className="text-2xl font-bold font-headline mb-6 text-black flex items-center gap-3">
              <Presentation className="text-primary" size={28} />
              Our Vision
            </h2>
            <p className="text-lg text-secondary font-light leading-relaxed">
              To be the most reliable, innovative, and preferred strategic partner in chemical raw material distribution across the Indonesian archipelago, accelerating the growth of the nation's industrial capacity.
            </p>
          </div>
          
          <div className="bg-surface-container-lowest p-12 border-l-4 border-primary shadow-sm rounded-r-2xl h-full">
            <h2 className="text-2xl font-bold font-headline mb-6 text-black flex items-center gap-3">
              <TrendingUp className="text-primary" size={28} />
              Our Mission
            </h2>
            <ul className="text-lg text-secondary font-light leading-relaxed list-disc list-inside space-y-3">
              <li>Deliver uncompromising material quality and technical standard compliance.</li>
              <li>Maintain an agile and deeply integrated logistics network.</li>
              <li>Provide superior technical support and customer satisfaction.</li>
              <li>Foster sustainable partnerships with global chemical leaders.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Logistics & Location */}
      <section className="py-24 px-8 bg-primary">
        <div className="max-w-5xl mx-auto text-center">
          <MapPin size={48} className="text-white mx-auto mb-8 opacity-80" />
          <h2 className="text-3xl md:text-5xl font-bold font-headline mb-8 text-white tracking-tighter">Strategic Logistics Infrastructure</h2>
          <p className="text-xl text-white/80 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
            Our primary distribution operations are strategically anchored in <strong>Millenium Industrial Estate, Tangerang</strong>. This geographical advantage provides unparalleled access to major toll networks and seaports, ensuring rapid deployment of chemical materials to manufacturing hubs in Greater Jakarta, West Java, and beyond.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-lg font-bold hover:bg-stone-200 transition-colors shadow-lg">
            <img src="/whatsapp.png" alt="WhatsApp" className="w-5 h-5 object-contain" />
            Connect With Our Team
          </Link>
        </div>
      </section>

    </div>
  );
}
