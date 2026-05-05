import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const portfolioItems = [
  {
    title: 'Utility Patent: Mechanical Hub',
    category: 'Mechanical',
    image: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&q=80&w=600',
    tags: ['Exploded View', 'Annotated']
  },
  {
    title: 'Design Patent: Smartwatch Gen-2',
    category: 'Consumer Electronics',
    image: 'https://images.unsplash.com/photo-1544117518-292121703004?auto=format&fit=crop&q=80&w=600',
    tags: ['Sleek Lines', 'Surface Contours']
  },
  {
    title: 'PCT Application: Fluid Dynamics',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600',
    tags: ['System Flow', 'ISO Standards']
  },
  {
    title: 'Utility Patent: Orthopedic Device',
    category: 'Medical',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600',
    tags: ['Complex Assembly', 'Anatomical']
  },
  {
    title: 'Design Patent: EV Chassis',
    category: 'Automotive',
    image: 'https://images.unsplash.com/photo-1558444479-c84825d2ea9d?auto=format&fit=crop&q=80&w=600',
    tags: ['3D Rendering', 'Sectional Views']
  },
  {
    title: 'Utility Patent: Microchip Circuitry',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600',
    tags: ['Schematic', 'Layered']
  }
];

const testimonials = [
  {
    quote: "Precision line work. Sail through USPTO examinations with zero rejections.",
    role: "Senior IP Counsel"
  },
  {
    quote: "Fast turnaround and complete compliance. They understand legal illustration.",
    role: "Independent Inventor"
  },
  {
    quote: "ZenithMarks is our go-to for complex mechanical assembly drawings.",
    role: "Patent Agent"
  },
  {
    quote: "Consistent quality across all files. Handled complex electronics with ease.",
    role: "In-house Counsel"
  },
  {
    quote: "Exceptional detail on design patents. Surface contours are exactly what we need.",
    role: "IP Attorney"
  },
  {
    quote: "Deep engineering background makes the communication process seamless.",
    role: "Founder"
  },
  {
    quote: "Managed 50 complex schematics in 48 hours. Absolute lifesavers.",
    role: "CTO"
  },
  {
    quote: "Clarity of flowcharts instrumental in successful PCT filings.",
    role: "Patent Engineer"
  },
  {
    quote: "Incredible ability to translate abstract software concepts into flow diagrams.",
    role: "Software Architect"
  },
  {
    quote: "Professionalism at its best. Meets our firm's high standards every time.",
    role: "IP Paralegal"
  },
  {
    quote: "Exploded views for wearable tech were compliant and beautiful.",
    role: "Lead Designer"
  },
  {
    quote: "Top-tier communication and deep understanding of patent law nuances.",
    role: "Founding Attorney"
  }
];

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const displayCount = 3;
  const maxIndex = testimonials.length - displayCount;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const nextSlide = () => setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prevSlide = () => setActiveIndex((prev) => (prev === 0 ? maxIndex : prev - 1));

  return (
    <section id="portfolio" className="py-24 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand font-mono text-xs uppercase tracking-widest font-bold mb-4 block underline decoration-2 underline-offset-8">Showcase</span>
          <h2 className="text-5xl font-bold tracking-tighter text-gray-900 uppercase mb-6">Proven Precision.</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Examine our high-resolution illustrations. Each project is crafted to meet specific legal requirements while maintaining artistic clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.title}
              className="group relative bg-white rounded-2xl overflow-hidden technical-border shadow-sm hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="aspect-[4/3] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-brand hover:text-white transition-colors">
                        <Search size={20} />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-brand hover:text-white transition-colors">
                        <ExternalLink size={20} />
                    </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className="text-[10px] font-mono text-brand uppercase tracking-widest block mb-1">{item.category}</span>
                        <h3 className="text-lg font-bold text-gray-900 tracking-tight leading-tight">{item.title}</h3>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-[10px] font-bold text-gray-500 uppercase tracking-wider rounded">
                            {tag}
                        </span>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <span className="text-brand font-mono text-[10px] uppercase tracking-[0.3em] font-black mb-4 block">Client Feedback</span>
              <h3 className="text-4xl font-bold tracking-tighter text-gray-900 uppercase">Trusted by leading <br />attorneys & inventors.</h3>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={prevSlide}
                className="p-4 bg-white border border-gray-200 rounded-full hover:bg-brand hover:text-white hover:border-brand transition-all shadow-sm"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                className="p-4 bg-white border border-gray-200 rounded-full hover:bg-brand hover:text-white hover:border-brand transition-all shadow-sm"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <motion.div 
                className="flex -mx-4"
                animate={{ x: `-${activeIndex * (100 / displayCount)}%` }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              >
                {testimonials.map((t, idx) => (
                  <div 
                    key={idx}
                    className="w-full md:w-1/3 flex-shrink-0 px-4 group"
                  >
                    <div className="bg-white p-8 rounded-2xl technical-border shadow-sm group-hover:shadow-xl transition-all duration-500 h-full flex flex-col justify-between">
                      <div className="mb-6">
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 bg-brand rounded-full" />
                          ))}
                        </div>
                        <blockquote className="text-lg text-gray-900 font-medium leading-snug">
                          "{t.quote}"
                        </blockquote>
                      </div>
                      <div className="border-t border-gray-100 pt-6">
                        <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-mono font-black">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            <div className="flex justify-center gap-2 mt-12">
                {[...Array(maxIndex + 1)].map((_, i) => (
                    <button 
                        key={i} 
                        onClick={() => setActiveIndex(i)}
                        className={`h-1 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-8 bg-brand' : 'w-2 bg-gray-200 hover:bg-gray-300'}`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

