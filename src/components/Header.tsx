import { motion } from 'motion/react';
import { CircleX } from 'lucide-react';

export default function Header() {
  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <motion.a 
          href="/" 
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="w-10 h-10 bg-brand rounded flex items-center justify-center text-white">
            <CircleX size={24} />
          </div>
          <div className="flex flex-col leading-[0.8] pt-1">
            <span className="text-3xl font-bold tracking-tighter text-gray-900 uppercase scale-y-125 origin-left">Zenith<span className="text-brand">Marks</span></span>
            <span className="text-[10px] font-mono tracking-[0.2em] text-brand uppercase mt-1.5 font-black">Patent Illustrations</span>
          </div>
        </motion.a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-brand transition-colors uppercase tracking-widest"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {item.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            className="bg-gray-900 text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-widest hover:bg-brand transition-all rounded shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            Get a Quote
          </motion.a>
        </nav>

        <button className="md:hidden p-2 text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
}
