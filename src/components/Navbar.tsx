import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md shadow-[0_10px_40px_rgba(26,28,28,0.04)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
        <div className="text-lg font-bold tracking-tighter text-black dark:text-white">
          PT Polaris Multi Dimensi
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
          <Link href="/industries" className="font-headline tracking-tight font-medium text-sm text-stone-500 dark:text-stone-400 hover:text-black dark:hover:text-white transition-colors">
            Industries
          </Link>

          <Link href="/contact" className="bg-primary text-on-primary px-6 py-2 rounded-lg text-sm font-medium hover:opacity-80 transition-opacity">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
