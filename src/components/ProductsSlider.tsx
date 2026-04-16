"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";

const products = [
  { name: 'White Mineral Oil', category: 'Mineral Bases', badge: 'Pure Grade', href: '/products/white-mineral-oil', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsgazc7RihpEmLyOc_91i1RYsyaAyL-8RXXN4f5pcxh64eByv-DTV2akFvYO9KX_xyb947PLveChW7-X1qbHxb5uNbYtR-D3TAdMNj9hdQsdF980nij5alXM0O8fuRCtPHbv-asBh0nPuJSlSVVaGOL87LkSyyahMFv5o9xcsSja38_EFk5uJ2ap6SI1uGi_3hU9pbgeo-8rh28wuykqYHot5VlOgoL0RB4IF3slTOC82D-G16IPy0Z_J9xheU54lwcdPq3_-UN38' },
  { name: 'Carbon Black', category: 'Colorants', badge: 'Pigment', href: '/products/carbon-black', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnc81ioDEGuRHD-oAS4hDpEfG6thrYwmkZdkfAf6vKZ4v3_G0_3oAtLFGaBrPeW0MXH-2kLKLkk8Y4CDtnoAfxLcoQBt6yyla61KiBKmgr6GlIanfobQOzfnDyUIahOidln1-o7GsUwdBE9PQK7hevzwFfwTB_Wz6n05SsKsnQDGAgVpoeeAwygV5CioO8osA7ZN6vl11E1yLMOUJWrHxd123gOa4gFHgF_PFbmaSE-MSmB9Pr8xwsMvbyb0BPrr4Gj8kNCMWozdM' },
  { name: 'Titanium Dioxide', category: 'Opacity Agents', badge: 'White Pigment', href: '/products/titanium-dioxide', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdMm7Q8mYLk-G64FZA2ZtojpRksu_DkqHCYvAmmA_UnCje7o9xI5egCgt05lPmNTKjFCMUV6BNvYxh3U8hC-1c2t2VqihTyLqmnHjC1woa1iydEDWq8UZCJg78FpTek0hK89oAb-eIUEqsx_Xv7AeHbA-AoAcZ8yMsPzxrDrJvKvtwtulBBwSh88AHGCYfg2hFCDGAGDEiqfLQYzmk3qApyqLX7knL0fBJfxHsJ8YFOR_6sCu4yFZmuwu4JfaGyXVkLVJ--kbKArc' },
  { name: 'Organic Pigment', category: 'Specialty Chemicals', badge: 'Colorant', href: '#', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFd6WNxS0JQiKiR8TTFNXrBM96CRG2mCbI4T4prFskTaLGNmCIg046Sf18SBDZWrwXOOE-xyR4ZbVawO6TiUjI2bsyKV-Q0mHUte3TRosNccEseeW0SXk-RTwt7gUqQ_Bn4l4ihlGlq3-R58r4QfpmdPgwekGge1ySh_kkeT_fzFK9uI1spmfDeIcamCHCLbS0EeqRyJPfSWWmYZjXnLYeogdTA5aDIJqFYOHUVTk6TIJ9YZNRaBIdkLssn8DdMeWeNXNm094-q7Y' },
  { name: 'Chlorinated Paraffin', category: 'Flame Retardants', badge: 'Plasticizer', href: '#', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0kLBsTW-UjdSGdFHXHJJoH6s5oRgVBcBsCJ5qfYj8_F_Af_uL3Wr3VrBfbjTy7-_3fXPG9Hc1h1xcoIwmrK_iT7SyGwNYZvk2ko-FE0Jb2k7RYn6FskZcnh3vLSnegVNXe7Ln1M8PRjJIbItB27MXW3u8s37uHnFMxMkJd_1cZxHo3NkLjIvJSGI201W6VnkCDr3TJddDjAxJnMYE7ZUHQgnkdqjr4IjZe9LoL6xCfupBssYWb8Tah8hMklR8L_IeAPfDd5FOv7s' },
  { name: 'PVC Resin', category: 'Polymers', badge: 'Polymer', href: '/products/pvc-resin', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7YErsYI3XFju_th9U-47gQ4YGHT_iaPz5C6WRhBr7N7bUx6iLlf4MXtZ2iAoeSMO_4KuM8yz4DQik6mBn82quOwfuJ-2-xxtojbfNmnIRuKriRRM8xfIHmiMS7Nw4g3ytjNPvyxuEgY6KtvEFOarrj1rGPXQiLxkBnVfSb5RipX5-SVNz3SkAeRQNNuNCZLhEz-Qa3PCXGS6BwgIJSqt4LV_2pvUnQqrCq0TWKCENTv8-yaDKHY4tEGy1kMUb_uNAoaoJURndvzo' },
  { name: 'Stearic Acid', category: 'Fatty Acids', badge: 'Fatty Acid', href: '/products/stearic-acid', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCB3X58r3DYUQJe-cCN8I7hlfl1VjU6zWN3_PoqhJt1vX6yFsG2Ek2FaIKXqXRuo1Der6GsXeH-uewWZYAqIHwsJYTNkQOS0tkpNtHJBB3FQ71qq8g5LkvcOBfV0kuJWdP4t3B1CiGFeeFCR-ONrvEPHZ1CJ4xOcyxWAnF5dYWH0ADpFViXeZc0MC9ItS1FTbdwoJiWEAxLsc5j0GZ9wDUYAs5OurFsTvEdGr7GqyfXatf1bhpvZKNY3Nm2DtmpuYWEGC5JEb1-ZOI' },
  { name: 'Anti Foam (Desiccant)', category: 'Process Additives', badge: 'Additive', href: '#', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzAShOZp5TFr6zFrLzTTRDWU9ZHa8uv037cF8IxAUT37tK4iMYhNAs3Zl-qP4lRNIQhriDIW-2_a3uD5IZP-3qBoQNUdC2SF2MckmDBufB4mZyW8jp4OiDo7m1lUjx5v5QBAAw5p33P03BzHyuSTxfuNoc9ugKjs_e5zQ3IB0KEF7BhIRPthH2NrOOPa1JIoCd7du7vZb326EDq1BkPV4tEOnlQZ9hGy0A_JEIgH1_Nth5wy_zQoD_YbaZUWKw1OdbbYaZ3KNisKk' },
  { name: 'Poly Alpha Olefin (PAO)', category: 'Synthetic Fluids', badge: 'Synthetic', href: '/products/poly-alpha-olefin', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAClz51uJbQ-pD5qhdh01Fru-Ak0GJ2MyQwWoXVU-XMHvqtYsQ1wNd8uqn6Pl-tutmhJC5LQ8-EYeSefXk1gvMTLyOqN199lXRkBiRyi7demCkgeKY97RrrkxFaaDn-b_E7YFTLSCFldLty4dVEKYNjnKrV53dkDsipCITqTXBgcL7yNKC3xtE_Hcnkm09XavNQnpdg0DFuK3Wfpj0XTwlKfd5kEajvEyHUs4Y-8gWSir4go8sy8GDoTOONTGPttJUl9cr_QWlgnQU' },
  { name: 'Lubricant Additive', category: 'Performance Mods', badge: 'Modifier', href: '#', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyhn0MPjsKrN9321IUVtFMPEq1Ibux9Wdsk2shtEqfMX2-f9RAUJvfKG6GfoP5kdFmklSjQ1ycmRi_LY1VjP4ECT5fziXQR3J-Zl7CZTU8H0gBUJ9l421TiuPsr1ac9zz_HH0_skRIreOaiEvwDQ8PB884AZ2_7bhdK2mmtx8MmHbOhwZL_hO-YyksUcXNloF1AR8JeX6ATUMT70DXbZFp0-ooH8T53O76YUi34hLwNEAm322QWkim3mw7wI-q_X7Ll9RupyTS-p0' },
  { name: 'Trichloroethylene (TCE)', category: 'Solvents', badge: 'Solvent', href: '#', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9EMjG4eLhlxeDcyZxmWCZOlVxbcvZ8o8vYzhDwRM-2JKAK5ogzpWudCJasQhc0srf2VO_-EQGfUcnbqH_-nHTaO1A17THoPERFSv_uH5BWRHQcWGTBh3JBzbX-f_2NuRuMkDtzrononJ8pd5W-2QPCd201hPewJDoHHQK4noMYZY6Zh21jdwXz9B_Eh-9Nk3hOol7-WcWplr6hyTitt0G9VGL1JqPC4p74rApNThveUVsEt8n7E3BjuGWtAyHlGOWt4f7fuxLpoE' },
];

export default function ProductsSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const startAutoSlide = () => {
      interval = setInterval(() => {
        if (scrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          if (scrollLeft + clientWidth >= scrollWidth - 50) {
            scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
          }
        }
      }, 1500); 
    };

    startAutoSlide();

    const sliderElement = scrollRef.current;
    if (sliderElement) {
      sliderElement.addEventListener('mouseenter', () => clearInterval(interval));
      sliderElement.addEventListener('mouseleave', startAutoSlide);
      sliderElement.addEventListener('touchstart', () => clearInterval(interval), { passive: true });
      sliderElement.addEventListener('touchend', startAutoSlide, { passive: true });
    }

    return () => {
      clearInterval(interval);
      if (sliderElement) {
        sliderElement.removeEventListener('mouseenter', () => clearInterval(interval));
        sliderElement.removeEventListener('mouseleave', startAutoSlide);
        sliderElement.removeEventListener('touchstart', () => clearInterval(interval));
        sliderElement.removeEventListener('touchend', startAutoSlide);
      }
    };
  }, []);

  const slide = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group/slider max-w-[1440px] mx-auto">
      {/* Navigation left button */}
      <button 
        onClick={() => slide("left")}
        aria-label="Slide Left"
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-surface-container-low text-black p-3 rounded-full shadow-lg opacity-0 group-hover/slider:opacity-100 transition-opacity disabled:opacity-0"
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>

      {/* Navigation right button */}
      <button 
        onClick={() => slide("right")}
        aria-label="Slide Right"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-surface-container-low text-black p-3 rounded-full shadow-lg opacity-0 group-hover/slider:opacity-100 transition-opacity"
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>

      {/* Scrollable Container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 pt-4 px-8 scroll-smooth snap-x snap-mandatory" 
        style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
      >
        {products.map((product, i) => (
          <Link
            key={i}
            href={product.href}
            className="group flex-none w-64 snap-start hover:-translate-y-1 transition-transform"
          >
            <div className="aspect-square bg-surface-container-low mb-4 overflow-hidden relative rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt={product.name}
                src={product.img}
              />
              <div className="absolute top-3 right-3 bg-white/90 text-black backdrop-blur px-2 py-1 text-[9px] font-bold tracking-widest uppercase rounded">
                {product.badge}
              </div>
            </div>
            <span className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1 block">{product.category}</span>
            <h3 className="text-sm font-bold tracking-tight text-black group-hover:text-primary transition-colors">{product.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
