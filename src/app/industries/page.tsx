import { Factory, Cog, Droplet, Sparkles, Building2 } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Industries We Serve | PT Polaris Multi Dimensi',
  description: 'Providing premium chemical solutions for Plastics, Rubber, Lubricants, and Cosmetics industries across Indonesia.',
};

export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      
      {/* Header */}
      <header className="bg-surface-container-low py-24 border-b border-outline/10 text-center px-8">
        <div className="max-w-4xl mx-auto">
          <span className="label-sm uppercase tracking-widest text-outline text-[11px] mb-4 block font-bold">Target Markets</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 font-headline text-black dark:text-white">Industries We Serve</h1>
          <p className="text-xl text-secondary font-light leading-relaxed">
            Delivering precision chemical raw materials designed to meet the rigorous specifications of manufacturing facilities nationwide.
          </p>
        </div>
      </header>

      {/* Industries Listing */}
      <main className="py-24 px-8 bg-surface">
        <div className="max-w-6xl mx-auto space-y-24">
          
          {/* Plastics */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white shadow-xl">
                  <Cog size={32} />
                </div>
                <h2 className="text-3xl font-bold font-headline text-black">Plastics &amp; Polymers</h2>
              </div>
              <p className="text-lg text-secondary font-light leading-relaxed mb-6">
                Supplying essential additives, resins, and pigments critical for the manufacturing of durable, weather-resistant, and high-performance plastic products. Our materials empower sectors ranging from construction (PVC pipes) to consumer packaging.
              </p>
              <div className="bg-surface-container-lowest border border-outline/10 rounded-lg p-6">
                <h3 className="font-bold font-headline text-black mb-3">Key Raw Materials:</h3>
                <ul className="text-secondary font-light list-disc list-inside space-y-2 marker:text-primary">
                  <li>Titanium Dioxide (Opacifiers)</li>
                  <li>PVC Resins</li>
                  <li>UV Stabilizers</li>
                  <li>Carbon Black (Masterbatch)</li>
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2 aspect-square bg-surface-container rounded-2xl flex items-center justify-center p-12 border border-outline/5 relative overflow-hidden group">
               <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
               <Factory size={120} className="text-outline/20 group-hover:scale-110 transition-transform duration-500" />
            </div>
          </section>

          {/* Rubber */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-surface-container rounded-2xl flex items-center justify-center p-12 border border-outline/5 relative overflow-hidden group">
               <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
               <Cog size={120} className="text-outline/20 group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white shadow-xl">
                  <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>tire_repair</span>
                </div>
                <h2 className="text-3xl font-bold font-headline text-black">Rubber Processing</h2>
              </div>
              <p className="text-lg text-secondary font-light leading-relaxed mb-6">
                We distribute high-grade vulcanizing agents and reinforcing fillers vital for producing high-tensile automotive tires, industrial hoses, and resilient mechanical goods capable of withstanding extreme environmental stress.
              </p>
              <div className="bg-surface-container-lowest border border-outline/10 rounded-lg p-6">
                <h3 className="font-bold font-headline text-black mb-3">Key Raw Materials:</h3>
                <ul className="text-secondary font-light list-disc list-inside space-y-2 marker:text-primary">
                  <li>Carbon Black</li>
                  <li>Stearic Acid</li>
                  <li>Accelerators & Antioxidants</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Lubricants */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white shadow-xl">
                  <Droplet size={32} />
                </div>
                <h2 className="text-3xl font-bold font-headline text-black">Industrial Lubricants</h2>
              </div>
              <p className="text-lg text-secondary font-light leading-relaxed mb-6">
                Offering advanced synthetic base oils and highly refined mineral oils that dramatically reduce friction, displace heat, and extend the operational lifespan of heavy machinery and engines in harsh operating conditions.
              </p>
              <div className="bg-surface-container-lowest border border-outline/10 rounded-lg p-6">
                <h3 className="font-bold font-headline text-black mb-3">Key Raw Materials:</h3>
                <ul className="text-secondary font-light list-disc list-inside space-y-2 marker:text-primary">
                  <li>White Mineral Oil</li>
                  <li>Poly Alpha Olefin (PAO)</li>
                  <li>Corrosion Inhibitors</li>
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2 aspect-square bg-surface-container rounded-2xl flex items-center justify-center p-12 border border-outline/5 relative overflow-hidden group">
               <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
               <Droplet size={120} className="text-outline/20 group-hover:-translate-y-4 transition-transform duration-500" />
            </div>
          </section>

          {/* Cosmetics */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-surface-container rounded-2xl flex items-center justify-center p-12 border border-outline/5 relative overflow-hidden group">
               <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
               <Sparkles size={120} className="text-outline/20 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white shadow-xl">
                  <Sparkles size={32} />
                </div>
                <h2 className="text-3xl font-bold font-headline text-black">Cosmetics &amp; Personal Care</h2>
              </div>
              <p className="text-lg text-secondary font-light leading-relaxed mb-6">
                Delivering highly purified, dermatologically safe ingredients that formulate the core structure of premium skin care, hair care, and color cosmetics. Our products ensure stability, texture consistency, and safety.
              </p>
              <div className="bg-surface-container-lowest border border-outline/10 rounded-lg p-6">
                <h3 className="font-bold font-headline text-black mb-3">Key Raw Materials:</h3>
                <ul className="text-secondary font-light list-disc list-inside space-y-2 marker:text-primary">
                  <li>White Mineral Oil (Cosmetic Grade)</li>
                  <li>Stearic Acid</li>
                  <li>Surfactants & Emollients</li>
                </ul>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* CTA */}
      <section className="bg-surface-container-low py-16 text-center px-8 border-t border-outline/10">
        <h2 className="text-3xl font-bold font-headline mb-4 text-black">Need custom technical specifications?</h2>
        <p className="text-secondary mb-8 font-light max-w-2xl mx-auto">
          Contact our technical sales team to discuss how our raw materials can be optimized for your specific manufacturing process.
        </p>
        <Link href="/contact" className="inline-block bg-primary text-white font-bold py-4 px-10 rounded-lg hover:opacity-90 transition-opacity">
          Speak to an Expert
        </Link>
      </section>

    </div>
  );
}
