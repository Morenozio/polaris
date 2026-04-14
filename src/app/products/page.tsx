import Link from 'next/link';

export const metadata = {
  title: 'Our Products | PT Polaris Multi Dimensi',
  description: 'Explore our comprehensive range of high-performance chemical raw materials.',
};

export default function ProductsPage() {
  return (
    <main className="pt-32 pb-24 px-8 max-w-[1440px] mx-auto min-h-screen">
      
      {/* Header Section */}
      <section className="mb-16">
        <div className="max-w-3xl">
          <span className="label-sm uppercase tracking-[0.2em] text-outline font-semibold text-[10px] mb-4 block">Product Inventory — PT Polaris Multi Dimensi</span>
          <h1 className="text-6xl font-extrabold tracking-tighter leading-none mb-6 font-headline text-black dark:text-white">Industrial Precision <br/>Catalog.</h1>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
            High-specification chemical raw materials curated for performance, stability, and industrial excellence across multiple sectors.
          </p>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="mb-12 z-40">
        <div className="bg-surface-container-low p-4 rounded-lg flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-1/2">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-xl">search</span>
            <input 
              className="w-full bg-surface-container-lowest border-none py-3 pl-12 pr-4 rounded-DEFAULT text-sm focus:ring-0 focus:border-b-primary focus:border-b transition-all placeholder:text-outline/60 text-black dark:text-white" 
              placeholder="Search chemical by name or CAS number..." 
              type="text"
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <button className="bg-primary text-on-primary px-4 py-2 text-xs font-bold rounded-full whitespace-nowrap">All Chemicals</button>
            <button className="bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest px-4 py-2 text-xs font-bold rounded-full transition-colors whitespace-nowrap">Polymers</button>
            <button className="bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest px-4 py-2 text-xs font-bold rounded-full transition-colors whitespace-nowrap">Lubricants</button>
            <button className="bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest px-4 py-2 text-xs font-bold rounded-full transition-colors whitespace-nowrap">Additives</button>
            <button className="bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest px-4 py-2 text-xs font-bold rounded-full transition-colors whitespace-nowrap">Solvents</button>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
        {/* 1. White Mineral Oil */}
        <div className="group flex flex-col">
          <div className="aspect-square bg-surface-container-low mb-6 overflow-hidden relative">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="White mineral oil droplets" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsgazc7RihpEmLyOc_91i1RYsyaAyL-8RXXN4f5pcxh64eByv-DTV2akFvYO9KX_xyb947PLveChW7-X1qbHxb5uNbYtR-D3TAdMNj9hdQsdF980nij5alXM0O8fuRCtPHbv-asBh0nPuJSlSVVaGOL87LkSyyahMFv5o9xcsSja38_EFk5uJ2ap6SI1uGi_3hU9pbgeo-8rh28wuykqYHot5VlOgoL0RB4IF3slTOC82D-G16IPy0Z_J9xheU54lwcdPq3_-UN38"/>
            <div className="absolute top-4 right-4 bg-white/90 text-black backdrop-blur px-2 py-1 text-[10px] font-bold tracking-widest uppercase">Pure Grade</div>
          </div>
          <div className="px-1">
            <span className="text-[10px] font-bold text-outline uppercase tracking-widest mb-2 block">Mineral Bases</span>
            <h3 className="text-xl font-bold tracking-tight mb-3 text-black dark:text-white">White Mineral Oil</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6 h-10 overflow-hidden line-clamp-2">High-purity liquid saturated hydrocarbons for cosmetics and technical applications.</p>
            <Link className="inline-flex items-center text-xs font-bold uppercase tracking-widest group/link text-black hover:text-outline transition-colors" href="/products/white-mineral-oil">
                View Specs
                <span className="material-symbols-outlined ml-2 text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* 2. Carbon Black */}
        <div className="group flex flex-col">
          <div className="aspect-square bg-surface-container-low mb-6 overflow-hidden relative">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Carbon black powder" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnc81ioDEGuRHD-oAS4hDpEfG6thrYwmkZdkfAf6vKZ4v3_G0_3oAtLFGaBrPeW0MXH-2kLKLkk8Y4CDtnoAfxLcoQBt6yyla61KiBKmgr6GlIanfobQOzfnDyUIahOidln1-o7GsUwdBE9PQK7hevzwFfwTB_Wz6n05SsKsnQDGAgVpoeeAwygV5CioO8osA7ZN6vl11E1yLMOUJWrHxd123gOa4gFHgF_PFbmaSE-MSmB9Pr8xwsMvbyb0BPrr4Gj8kNCMWozdM"/>
            <div className="absolute top-4 right-4 bg-white/90 text-black backdrop-blur px-2 py-1 text-[10px] font-bold tracking-widest uppercase">Pigment</div>
          </div>
          <div className="px-1">
            <span className="text-[10px] font-bold text-outline uppercase tracking-widest mb-2 block">Colorants</span>
            <h3 className="text-xl font-bold tracking-tight mb-3 text-black dark:text-white">Carbon Black</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6 h-10 overflow-hidden line-clamp-2">Paracrystalline carbon material used as a reinforcing filler in tires and rubber products.</p>
            <Link className="inline-flex items-center text-xs font-bold uppercase tracking-widest group/link text-black hover:text-outline transition-colors" href="/products/carbon-black">
                View Specs
                <span className="material-symbols-outlined ml-2 text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* 3. Titanium Dioxide */}
        <div className="group flex flex-col">
          <div className="aspect-square bg-surface-container-low mb-6 overflow-hidden relative">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Titanium dioxide powder" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdMm7Q8mYLk-G64FZA2ZtojpRksu_DkqHCYvAmmA_UnCje7o9xI5egCgt05lPmNTKjFCMUV6BNvYxh3U8hC-1c2t2VqihTyLqmnHjC1woa1iydEDWq8UZCJg78FpTek0hK89oAb-eIUEqsx_Xv7AeHbA-AoAcZ8yMsPzxrDrJvKvtwtulBBwSh88AHGCYfg2hFCDGAGDEiqfLQYzmk3qApyqLX7knL0fBJfxHsJ8YFOR_6sCu4yFZmuwu4JfaGyXVkLVJ--kbKArc"/>
          </div>
          <div className="px-1">
            <span className="text-[10px] font-bold text-outline uppercase tracking-widest mb-2 block">Opacity Agents</span>
            <h3 className="text-xl font-bold tracking-tight mb-3 text-black dark:text-white">Titanium Dioxide</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6 h-10 overflow-hidden line-clamp-2">Widely used white pigment providing opacity and brightness for coatings and plastics.</p>
            <Link className="inline-flex items-center text-xs font-bold uppercase tracking-widest group/link text-black hover:text-outline transition-colors" href="/products/titanium-dioxide">
                View Specs
                <span className="material-symbols-outlined ml-2 text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* 4. Organic Pigment (Color Pigments) */}
        <div className="group flex flex-col">
          <div className="aspect-square bg-surface-container-low mb-6 overflow-hidden relative">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Organic pigment powder" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFd6WNxS0JQiKiR8TTFNXrBM96CRG2mCbI4T4prFskTaLGNmCIg046Sf18SBDZWrwXOOE-xyR4ZbVawO6TiUjI2bsyKV-Q0mHUte3TRosNccEseeW0SXk-RTwt7gUqQ_Bn4l4ihlGlq3-R58r4QfpmdPgwekGge1ySh_kkeT_fzFK9uI1spmfDeIcamCHCLbS0EeqRyJPfSWWmYZjXnLYeogdTA5aDIJqFYOHUVTk6TIJ9YZNRaBIdkLssn8DdMeWeNXNm094-q7Y"/>
          </div>
          <div className="px-1">
            <span className="text-[10px] font-bold text-outline uppercase tracking-widest mb-2 block">Specialty Chemicals</span>
            <h3 className="text-xl font-bold tracking-tight mb-3 text-black dark:text-white">Organic Pigment</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6 h-10 overflow-hidden line-clamp-2">High-performance synthetic colorants for paints, inks, and plastic manufacturing.</p>
            <Link className="inline-flex items-center text-xs font-bold uppercase tracking-widest group/link text-black hover:text-outline transition-colors" href="#">
                View Specs
                <span className="material-symbols-outlined ml-2 text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* 5. Chlorinated Paraffin */}
        <div className="group flex flex-col">
          <div className="aspect-square bg-surface-container-low mb-6 overflow-hidden relative">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Plastic pellets and resin" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0kLBsTW-UjdSGdFHXHJJoH6s5oRgVBcBsCJ5qfYj8_F_Af_uL3Wr3VrBfbjTy7-_3fXPG9Hc1h1xcoIwmrK_iT7SyGwNYZvk2ko-FE0Jb2k7RYn6FskZcnh3vLSnegVNXe7Ln1M8PRjJIbItB27MXW3u8s37uHnFMxMkJd_1cZxHo3NkLjIvJSGI201W6VnkCDr3TJddDjAxJnMYE7ZUHQgnkdqjr4IjZe9LoL6xCfupBssYWb8Tah8hMklR8L_IeAPfDd5FOv7s"/>
          </div>
          <div className="px-1">
            <span className="text-[10px] font-bold text-outline uppercase tracking-widest mb-2 block">Flame Retardants</span>
            <h3 className="text-xl font-bold tracking-tight mb-3 text-black dark:text-white">Chlorinated Paraffin</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6 h-10 overflow-hidden line-clamp-2">Secondary plasticizer used as a cost-effective flame retardant in PVC and rubbers.</p>
            <Link className="inline-flex items-center text-xs font-bold uppercase tracking-widest group/link text-black hover:text-outline transition-colors" href="#">
                View Specs
                <span className="material-symbols-outlined ml-2 text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* 6. PVC Resin */}
        <div className="group flex flex-col">
          <div className="aspect-square bg-surface-container-low mb-6 overflow-hidden relative">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Transparent PVC resin granules" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7YErsYI3XFju_th9U-47gQ4YGHT_iaPz5C6WRhBr7N7bUx6iLlf4MXtZ2iAoeSMO_4KuM8yz4DQik6mBn82quOwfuJ-2-xxtojbfNmnIRuKriRRM8xfIHmiMS7Nw4g3ytjNPvyxuEgY6KtvEFOarrj1rGPXQiLxkBnVfSb5RipX5-SVNz3SkAeRQNNuNCZLhEz-Qa3PCXGS6BwgIJSqt4LV_2pvUnQqrCq0TWKCENTv8-yaDKHY4tEGy1kMUb_uNAoaoJURndvzo"/>
          </div>
          <div className="px-1">
            <span className="text-[10px] font-bold text-outline uppercase tracking-widest mb-2 block">Polymers</span>
            <h3 className="text-xl font-bold tracking-tight mb-3 text-black dark:text-white">PVC Resin</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6 h-10 overflow-hidden line-clamp-2">Polyvinyl Chloride polymer used for manufacturing pipes, cables, and construction materials.</p>
            <Link className="inline-flex items-center text-xs font-bold uppercase tracking-widest group/link text-black hover:text-outline transition-colors" href="/products/pvc-resin">
                View Specs
                <span className="material-symbols-outlined ml-2 text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* 7. Stearic Acid */}
        <div className="group flex flex-col">
          <div className="aspect-square bg-surface-container-low mb-6 overflow-hidden relative">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Solid stearic acid flakes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB3X58r3DYUQJe-cCN8I7hlfl1VjU6zWN3_PoqhJt1vX6yFsG2Ek2FaIKXqXRuo1Der6GsXeH-uewWZYAqIHwsJYTNkQOS0tkpNtHJBB3FQ71qq8g5LkvcOBfV0kuJWdP4t3B1CiGFeeFCR-ONrvEPHZ1CJ4xOcyxWAnF5dYWH0ADpFViXeZc0MC9ItS1FTbdwoJiWEAxLsc5j0GZ9wDUYAs5OurFsTvEdGr7GqyfXatf1bhpvZKNY3Nm2DtmpuYWEGC5JEb1-ZOI"/>
          </div>
          <div className="px-1">
            <span className="text-[10px] font-bold text-outline uppercase tracking-widest mb-2 block">Fatty Acids</span>
            <h3 className="text-xl font-bold tracking-tight mb-3 text-black dark:text-white">Stearic Acid</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6 h-10 overflow-hidden line-clamp-2">Saturated fatty acid used in soaps, detergents, cosmetics, and industrial production.</p>
            <Link className="inline-flex items-center text-xs font-bold uppercase tracking-widest group/link text-black hover:text-outline transition-colors" href="/products/stearic-acid">
                View Specs
                <span className="material-symbols-outlined ml-2 text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* 8. Anti Foam (Desiccant) */}
        <div className="group flex flex-col">
          <div className="aspect-square bg-surface-container-low mb-6 overflow-hidden relative">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Silica gel desiccant beads" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzAShOZp5TFr6zFrLzTTRDWU9ZHa8uv037cF8IxAUT37tK4iMYhNAs3Zl-qP4lRNIQhriDIW-2_a3uD5IZP-3qBoQNUdC2SF2MckmDBufB4mZyW8jp4OiDo7m1lUjx5v5QBAAw5p33P03BzHyuSTxfuNoc9ugKjs_e5zQ3IB0KEF7BhIRPthH2NrOOPa1JIoCd7du7vZb326EDq1BkPV4tEOnlQZ9hGy0A_JEIgH1_Nth5wy_zQoD_YbaZUWKw1OdbbYaZ3KNisKk"/>
          </div>
          <div className="px-1">
            <span className="text-[10px] font-bold text-outline uppercase tracking-widest mb-2 block">Process Additives</span>
            <h3 className="text-xl font-bold tracking-tight mb-3 text-black dark:text-white">Anti Foam (Desiccant)</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6 h-10 overflow-hidden line-clamp-2">Chemical additives that reduce and hinder the formation of foam in industrial process liquids.</p>
            <Link className="inline-flex items-center text-xs font-bold uppercase tracking-widest group/link text-black hover:text-outline transition-colors" href="#">
                View Specs
                <span className="material-symbols-outlined ml-2 text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* 9. Poly Alpha Olefin (PAO) */}
        <div className="group flex flex-col">
          <div className="aspect-square bg-surface-container-low mb-6 overflow-hidden relative">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Synthetic oil in workshop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAClz51uJbQ-pD5qhdh01Fru-Ak0GJ2MyQwWoXVU-XMHvqtYsQ1wNd8uqn6Pl-tutmhJC5LQ8-EYeSefXk1gvMTLyOqN199lXRkBiRyi7demCkgeKY97RrrkxFaaDn-b_E7YFTLSCFldLty4dVEKYNjnKrV53dkDsipCITqTXBgcL7yNKC3xtE_Hcnkm09XavNQnpdg0DFuK3Wfpj0XTwlKfd5kEajvEyHUs4Y-8gWSir4go8sy8GDoTOONTGPttJUl9cr_QWlgnQU"/>
          </div>
          <div className="px-1">
            <span className="text-[10px] font-bold text-outline uppercase tracking-widest mb-2 block">Synthetic Fluids</span>
            <h3 className="text-xl font-bold tracking-tight mb-3 text-black dark:text-white">Poly Alpha Olefin (PAO)</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6 h-10 overflow-hidden line-clamp-2">Ultra-performance synthetic base oils for automotive and industrial lubricant applications.</p>
            <Link className="inline-flex items-center text-xs font-bold uppercase tracking-widest group/link text-black hover:text-outline transition-colors" href="/products/poly-alpha-olefin">
                View Specs
                <span className="material-symbols-outlined ml-2 text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* 10. Lubricant Additive */}
        <div className="group flex flex-col">
          <div className="aspect-square bg-surface-container-low mb-6 overflow-hidden relative">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Assortment of laboratory flasks with oils" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyhn0MPjsKrN9321IUVtFMPEq1Ibux9Wdsk2shtEqfMX2-f9RAUJvfKG6GfoP5kdFmklSjQ1ycmRi_LY1VjP4ECT5fziXQR3J-Zl7CZTU8H0gBUJ9l421TiuPsr1ac9zz_HH0_skRIreOaiEvwDQ8PB884AZ2_7bhdK2mmtx8MmHbOhwZL_hO-YyksUcXNloF1AR8JeX6ATUMT70DXbZFp0-ooH8T53O76YUi34hLwNEAm322QWkim3mw7wI-q_X7Ll9RupyTS-p0"/>
          </div>
          <div className="px-1">
            <span className="text-[10px] font-bold text-outline uppercase tracking-widest mb-2 block">Performance Mods</span>
            <h3 className="text-xl font-bold tracking-tight mb-3 text-black dark:text-white">Lubricant Additive</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6 h-10 overflow-hidden line-clamp-2">Chemical components used to improve the performance of standard base oils in machinery.</p>
            <Link className="inline-flex items-center text-xs font-bold uppercase tracking-widest group/link text-black hover:text-outline transition-colors" href="#">
                View Specs
                <span className="material-symbols-outlined ml-2 text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* 11. Trichloroethylene (TCE) */}
        <div className="group flex flex-col">
          <div className="aspect-square bg-surface-container-low mb-6 overflow-hidden relative">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Liquid solvents in glassware" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9EMjG4eLhlxeDcyZxmWCZOlVxbcvZ8o8vYzhDwRM-2JKAK5ogzpWudCJasQhc0srf2VO_-EQGfUcnbqH_-nHTaO1A17THoPERFSv_uH5BWRHQcWGTBh3JBzbX-f_2NuRuMkDtzrononJ8pd5W-2QPCd201hPewJDoHHQK4noMYZY6Zh21jdwXz9B_Eh-9Nk3hOol7-WcWplr6hyTitt0G9VGL1JqPC4p74rApNThveUVsEt8n7E3BjuGWtAyHlGOWt4f7fuxLpoE"/>
          </div>
          <div className="px-1">
            <span className="text-[10px] font-bold text-outline uppercase tracking-widest mb-2 block">Solvents</span>
            <h3 className="text-xl font-bold tracking-tight mb-3 text-black dark:text-white">Trichloroethylene (TCE)</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6 h-10 overflow-hidden line-clamp-2">Industrial solvent primarily used for degreasing metal parts in manufacturing processes.</p>
            <Link className="inline-flex items-center text-xs font-bold uppercase tracking-widest group/link text-black hover:text-outline transition-colors" href="#">
                View Specs
                <span className="material-symbols-outlined ml-2 text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>

      </section>

      {/* CTA Section */}
      <section className="mt-32 p-12 bg-zinc-900 border border-zinc-800 text-white rounded-lg flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-4 font-headline text-white">Custom Chemical Formulation?</h2>
          <p className="text-zinc-400 font-body">If you require specific technical grades or bulk distribution logistics not listed in our standard catalog, our technical team can assist in sourcing and specification.</p>
        </div>
        <Link href="/contact" className="bg-white text-black px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-zinc-200 transition-all active:scale-95 text-center">
            Contact Technical Sales
        </Link>
      </section>
      
    </main>
  );
}
