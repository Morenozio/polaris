import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productCatalog[slug];
  
  if (!product) return { title: 'Product Not Found' };

  return {
    title: `${product.name} Supplier Indonesia | PT Polaris Multi Dimensi`,
    description: product.description,
  };
}

const productCatalog: Record<string, {name: string, description: string, benefits: string[], category: string, applications: string[]}> = {
  'white-mineral-oil': {
    name: 'White Mineral Oil',
    description: 'High purity, chemically inert mineral oil used across multiple sensitive industries. It acts as a premium base oil offering exceptional oxidation stability and non-comedogenic properties.',
    category: 'Lubricants & Cosmetics',
    benefits: ['High chemical stability', 'Colorless and odorless', 'Non-toxic, safe for personal care', 'Excellent lubrication properties'],
    applications: ['Cosmetics (Creams, Lotions)', 'Pharmaceuticals', 'Food Processing Machinery', 'Textile Lubrication']
  },
  'carbon-black': {
    name: 'Carbon Black',
    description: 'A fundamental reinforcing agent that dramatically improves the physical properties of rubber and plastic products, offering high tensile strength and UV protection.',
    category: 'Rubber & Plastics',
    benefits: ['Superior UV resistance', 'Increases material durability', 'Excellent electrical conductivity', 'High coloring strength'],
    applications: ['Tires & Automotive Rubber', 'Industrial Belts & Hoses', 'Plastic Masterbatch', 'Inks & Coatings']
  },
  'titanium-dioxide': {
    name: 'Titanium Dioxide',
    description: 'The highest quality white pigment available, delivering unmatched light scattering capabilities, resulting in brilliant whiteness and extreme opacity.',
    category: 'Plastics & Coatings',
    benefits: ['Maximum opacity and hiding power', 'Brilliant whiteness', 'Excellent weatherability', 'Non-toxic profile'],
    applications: ['Architectural Paints', 'Plastic Packaging', 'Paper Production', 'Cosmetics (Sunscreens)']
  },
  'pvc-resin': {
    name: 'PVC Resin',
    description: 'A highly adaptable thermoplastic polymer providing excellent chemical resistance, durability, and cost-efficiency for rigid and flexible applications.',
    category: 'Plastics',
    benefits: ['Outstanding chemical resistance', 'Flame retardant properties', 'High structural integrity', 'Easily processed and molded'],
    applications: ['Pipes and Fittings', 'Wire and Cable Insulation', 'Construction Materials', 'Medical Tubing']
  },
  'poly-alpha-olefin': {
    name: 'Poly Alpha Olefin (PAO)',
    description: 'A highly uniform synthetic base oil engineered to provide exceptional performance under extreme temperature variations and reducing friction in high-stress environments.',
    category: 'Lubricants',
    benefits: ['High viscosity index', 'Excellent low-temperature fluidity', 'Outstanding thermal stability', 'Low volatility'],
    applications: ['Automotive Engine Oils', 'Industrial Gear Oils', 'Compressor Lubricants', 'Hydraulic Fluids']
  },
  'stearic-acid': {
    name: 'Stearic Acid',
    description: 'A versatile saturated fatty acid functioning as a crucial internal lubricant, emulsifier, and stabilizing agent across diverse manufacturing sectors.',
    category: 'Rubber & Cosmetics',
    benefits: ['Improves mold release', 'Excellent emulsifying properties', 'Stabilizes mixtures', 'Enhances texture and consistency'],
    applications: ['Rubber Vulcanization', 'Soaps & Detergents', 'Personal Care Formulations', 'PVC Processing']
  }
};

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productCatalog[slug];

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <header className="bg-surface-container-low py-16 border-b border-outline/10 px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-start text-left">
          <Link href="/products" className="inline-flex items-center gap-2 text-secondary font-bold hover:text-black transition-colors mb-6 pb-1 border-b border-transparent hover:border-black">
            <ArrowLeft size={16} /> Back to Products
          </Link>
          <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            {product.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-0 font-headline text-black dark:text-white">
            {product.name}
          </h1>
        </div>
      </header>

      <main className="py-24 px-8 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          <div className="lg:col-span-2 flex flex-col gap-12">
            <div>
              <h2 className="text-2xl font-bold font-headline mb-4 text-black border-l-4 border-primary pl-4">Product Overview</h2>
              <p className="text-lg text-secondary font-light leading-relaxed">
                {product.description}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-headline mb-6 text-black border-l-4 border-primary pl-4">Key Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#22c55e] flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-[1.05rem] text-black font-light">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-headline mb-6 text-black border-l-4 border-primary pl-4">Primary Applications</h2>
              <div className="flex flex-wrap gap-3">
                {product.applications.map((app, index) => (
                  <span key={index} className="bg-surface-container-lowest border border-outline/20 px-4 py-2 rounded-lg text-[0.95rem] text-secondary font-medium">
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-1 sticky top-32">
            <div className="bg-surface-container-lowest border border-outline/10 p-8 rounded-xl shadow-lg flex flex-col">
              <h3 className="text-xl font-bold font-headline mb-4 text-black">Interested in this material?</h3>
              <p className="text-secondary font-light mb-8">
                Request exactly the volume you need. We supply from single drums up to bulk tanker deliveries anywhere in Indonesia.
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/contact" className="bg-primary text-white text-center py-4 rounded-lg font-bold hover:opacity-90 transition-opacity w-full block">
                  Request a Quote
                </Link>
                <Link href="/contact" className="bg-transparent border border-outline/20 text-black text-center py-4 rounded-lg font-bold hover:bg-surface-container-low transition-colors w-full block">
                  Technical Data Sheet
                </Link>
              </div>
            </div>
          </aside>
          
        </div>
      </main>
    </div>
  );
}
