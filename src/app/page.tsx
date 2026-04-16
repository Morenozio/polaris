import Link from 'next/link';
import ProductsSlider from '@/components/ProductsSlider';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <span className="label-sm uppercase tracking-[0.1em] text-outline mb-4 block font-semibold text-[10px]">Established 2013</span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-primary font-headline">
              Trusted Chemical Raw Material Distributor in Indonesia.
            </h1>
            <p className="text-lg text-secondary max-w-xl mb-10 leading-relaxed font-light">
              We provide high-quality chemical solutions for various industrial sectors across Indonesia, ensuring precision in supply chain and logistics since 2013.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold tracking-tight hover:opacity-90 transition-all flex items-center gap-2">
                Contact Us <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link href="/products" className="border border-outline/20 text-primary px-8 py-4 rounded-lg font-bold tracking-tight hover:bg-surface-container-low transition-all">
                View Products
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-container rounded-xl overflow-hidden shadow-2xl">
              <img 
                className="w-full h-full object-cover" 
                alt="Modern industrial warehouse with high racking systems and bright clinical lighting reflecting off polished concrete floors" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOde1gg3GVudtmRf4XjLE4NiAmiqhBFjCd8URDPpGI2ByL3rphiqcgPTHsrMpSwouU8Lxv_misCNtiXXKiQ54GV5yHcaRtcAreeQEy85NqJQRTD3CPv0LxWuaohT7wk8jdOcRKwyNayaaDfG7VzzkK9pHHK76SNLoN7DL6kPPtsNh6oaDI20NYIel87gyWUX5VQ_JPLiP_shVAfpRL-vwQ-HSYpcolg-1T6g2oHGpirhA8v8KxzZHVqrSBCBAOKJwEdG9TgE2s0mQ"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl rounded-lg hidden lg:block">
              <p className="text-2xl font-bold font-headline text-black">11+ Years</p>
              <p className="text-xs text-secondary uppercase tracking-widest font-bold">Industry Expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Slider Section */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="label-sm uppercase tracking-widest text-outline text-[10px] mb-2 block font-bold">Catalog</span>
              <h2 className="text-4xl font-bold tracking-tighter font-headline text-black">Raw Material Portfolio</h2>
            </div>
            <Link className="text-sm font-bold border-b-2 border-primary pb-1 text-black hover:text-outline transition-colors" href="/products">View All Products</Link>
          </div>
        </div>
        <ProductsSlider />
      </section>

      {/* Our Portfolio (Partners) Section */}
      <section className="py-24 px-8 bg-surface-container-low border-y border-outline/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="label-sm uppercase tracking-widest text-outline text-[10px] mb-2 block font-bold">Global Network</span>
            <h2 className="text-4xl font-bold tracking-tighter font-headline text-black">Our Global Partners</h2>
            <div className="w-12 h-1 bg-primary mx-auto mt-6"></div>
          </div>
          <div className="bg-white rounded-2xl p-12 shadow-sm border border-outline/5">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-12 gap-y-12 items-center justify-items-center">
              {[1,2,3,4,5,6,7,8,9,10,11].map((n) => (
                <div key={n} className="w-full flex justify-center px-4">
                  <img
                    alt={`Partner ${n}`}
                    className="max-h-14 w-auto object-contain"
                    src={`/partners/partner-${n}.png`}
                  />
                </div>
              ))}
            </div>
          </div>
          <p className="text-center mt-12 text-sm text-secondary font-light">Collaborating with industry leaders to provide superior chemical solutions.</p>
        </div>
      </section>

      {/* Company Strength Section */}
      <section className="py-16 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-surface-container-lowest rounded-lg border-l-2 border-primary">
              <span className="material-symbols-outlined text-3xl mb-4 text-primary">location_on</span>
              <h3 className="text-xl font-bold mb-2 font-headline text-black">Strategic Location</h3>
              <p className="text-sm text-secondary font-light">Optimized distribution centers located in key industrial hubs across Indonesia.</p>
            </div>
            <div className="p-8 bg-surface-container-lowest rounded-lg border-l-2 border-primary">
              <span className="material-symbols-outlined text-3xl mb-4 text-primary">inventory_2</span>
              <h3 className="text-xl font-bold mb-2 font-headline text-black">Reliable Supply Chain</h3>
              <p className="text-sm text-secondary font-light">Consistent material availability through robust partnerships with global manufacturers.</p>
            </div>
            <div className="p-8 bg-surface-container-lowest rounded-lg border-l-2 border-primary">
              <span className="material-symbols-outlined text-3xl mb-4 text-primary">fact_check</span>
              <h3 className="text-xl font-bold mb-2 font-headline text-black">Wide Product Range</h3>
              <p className="text-sm text-secondary font-light">Comprehensive portfolio catering to diverse technical specifications and industrial needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 px-8 bg-surface-container-high">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="label-sm uppercase tracking-widest text-outline text-[10px] mb-2 block font-bold">Sectors</span>
          <h2 className="text-4xl font-bold tracking-tighter font-headline text-black">Industries We Serve</h2>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-outline/10">
          <div className="bg-surface-container-high p-12 hover:bg-surface-container-lowest transition-colors group">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-white" style={{fontVariationSettings: "'FILL' 1"}}>layers</span>
            </div>
            <h3 className="text-xl font-bold mb-3 tracking-tight font-headline text-black">Plastics</h3>
            <p className="text-sm text-secondary font-light">Raw materials for injection molding, extrusion, and sustainable polymer compounding.</p>
          </div>
          <div className="bg-surface-container-high p-12 hover:bg-surface-container-lowest transition-colors group">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-white" style={{fontVariationSettings: "'FILL' 1"}}>tire_repair</span>
            </div>
            <h3 className="text-xl font-bold mb-3 tracking-tight font-headline text-black">Rubber</h3>
            <p className="text-sm text-secondary font-light">High-quality fillers and vulcanizing agents for automotive and industrial rubber parts.</p>
          </div>
          <div className="bg-surface-container-high p-12 hover:bg-surface-container-lowest transition-colors group">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-white" style={{fontVariationSettings: "'FILL' 1"}}>oil_barrel</span>
            </div>
            <h3 className="text-xl font-bold mb-3 tracking-tight font-headline text-black">Lubricants</h3>
            <p className="text-sm text-secondary font-light">Base oils and performance additives for high-friction industrial machinery and engines.</p>
          </div>
          <div className="bg-surface-container-high p-12 hover:bg-surface-container-lowest transition-colors group">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-white" style={{fontVariationSettings: "'FILL' 1"}}>face</span>
            </div>
            <h3 className="text-xl font-bold mb-3 tracking-tight font-headline text-black">Cosmetics</h3>
            <p className="text-sm text-secondary font-light">Skin-safe surfactants, emollients, and active ingredients for personal care products.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto bg-primary rounded-xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-on-primary-container mb-8 tracking-tighter font-headline">
              Looking for a reliable chemical supplier?
            </h2>
            <p className="text-on-primary/60 max-w-xl mx-auto mb-12 text-lg font-light">
              Join our network of over 200+ industrial partners who trust Polaris for their critical raw material needs.
            </p>
            <div className="flex flex-col gap-4 justify-center items-center">
              <Link href="/contact" className="bg-white text-black px-10 py-4 rounded-lg font-bold hover:bg-stone-200 transition-colors inline-block text-center w-full sm:w-auto">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
