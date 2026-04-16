import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md shadow-[0_10px_40px_rgba(26,28,28,0.04)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="PT Polaris Multi Dimensi" className="h-10 w-auto group-hover:scale-105 transition-transform" />
            <div className="flex flex-col justify-center">
              <span className="text-xl font-black tracking-tighter text-black dark:text-white leading-none font-headline">
                POLARIS
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary mt-1 leading-none">
                Multi Dimensi
              </span>
            </div>
          </Link>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="font-headline tracking-tight font-medium text-sm text-black dark:text-white border-b border-black dark:border-white pb-1">
            Home
          </Link>
          <Link href="/about" className="font-headline tracking-tight font-medium text-sm text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white transition-colors">
            About
          </Link>
          <Link href="/products" className="font-headline tracking-tight font-medium text-sm text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white transition-colors">
            Products
          </Link>

          <Link href="/contact" className="bg-primary text-on-primary px-6 py-2 rounded-lg text-sm font-medium hover:opacity-80 transition-opacity">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
