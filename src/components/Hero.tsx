import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  console.log('Rendering Hero component');
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 data-grid opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full pt-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[0.95] text-gray-900 mb-8 uppercase">
              Drafting the <span className="text-brand italic font-light">Blueprint</span> of Your Innovation.
            </h1>
            
            <div className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed space-y-6">
              <p>
                Founded on the principles of engineering precision and legal compliance, <span className="text-gray-900 font-bold">Zenith</span><span className="text-brand">Marks</span> assists inventors and law firms in securing their intellectual property.
              </p>
              <p>
                We don't just draw lines; we understand the science and the law behind your innovation. Our team consists of draughtsmen with engineering backgrounds who specialize in USPTO, EPO, and PCT standards.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services" 
                className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:border-gray-900 transition-all"
              >
                Our Services
                <ChevronRight size={18} />
              </a>
            </div>

          </motion.div>
          
          <motion.div
            className="relative lg:h-[600px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="technical-border bg-white p-4 h-full rounded-xl shadow-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-brand/5 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <img 
                src="https://images.unsplash.com/photo-1589330273594-fade1ee91647?auto=format&fit=crop&q=80&w=1200" 
                alt="Patent Illustration" 
                className="w-full h-full object-cover rounded-md"
                referrerPolicy="no-referrer"
              />
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
