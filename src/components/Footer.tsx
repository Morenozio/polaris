import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-stone-100 dark:bg-stone-950 w-full py-12 px-8 border-t border-stone-200/30 dark:border-stone-800/30">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <div className="md:col-span-1">
          <h3 className="font-headline font-bold text-stone-900 dark:text-stone-100 mb-4">PT Polaris Multi Dimensi</h3>
          <p className="text-stone-500 dark:text-stone-400 text-sm font-light leading-relaxed">
            Excellence in chemical distribution and logistics infrastructure across the Indonesian archipelago.
          </p>
        </div>
        
        <div>
          <h4 className="font-body text-xs tracking-wide uppercase font-bold mb-6 text-stone-900 dark:text-stone-100">Quick Links</h4>
          <div className="flex flex-col gap-3">
            <Link className="font-body text-xs tracking-wide uppercase text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white underline decoration-stone-300 transition-all duration-200" href="/">Home</Link>
            <Link className="font-body text-xs tracking-wide uppercase text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white underline decoration-stone-300 transition-all duration-200" href="/about">About Us</Link>
            <Link className="font-body text-xs tracking-wide uppercase text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white underline decoration-stone-300 transition-all duration-200" href="/industries">Logistics Data</Link>
            <Link className="font-body text-xs tracking-wide uppercase text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white underline decoration-stone-300 transition-all duration-200" href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-body text-xs tracking-wide uppercase font-bold mb-6 text-stone-900 dark:text-stone-100">Compliance</h4>
          <div className="flex flex-col gap-3">
            <Link className="font-body text-xs tracking-wide uppercase text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white underline decoration-stone-300 transition-all duration-200" href="#">Privacy Policy</Link>
            <Link className="font-body text-xs tracking-wide uppercase text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white underline decoration-stone-300 transition-all duration-200" href="#">Terms of Service</Link>
            <Link className="font-body text-xs tracking-wide uppercase text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white underline decoration-stone-300 transition-all duration-200" href="#">Safety Protocols</Link>
          </div>
        </div>

        <div>
          <h4 className="font-body text-xs tracking-wide uppercase font-bold mb-6 text-stone-900 dark:text-stone-100">Contact</h4>
          <p className="text-xs text-stone-500 mb-2">Millenium Industrial Estate, Tangerang, 15710</p>
          <p className="text-xs text-stone-500 mb-2">+62 812 7733 5701</p>
          <p className="text-xs text-stone-500">info@polaris-multidimensi.com</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-200/20">
        <p className="font-body text-xs tracking-wide uppercase text-stone-400 text-center md:text-left">
          © {new Date().getFullYear()} PT Polaris Multi Dimensi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
