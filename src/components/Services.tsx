import { motion } from 'motion/react';
import { Settings, Lightbulb, Box, RefreshCcw, Globe, FileCheck } from 'lucide-react';

const services = [
  {
    icon: Settings,
    title: 'Utility Patent illustration',
    description: 'Detailed mechanical, electronic, and software diagrams that clearly communicate functionality and structure.',
  },
  {
    icon: Lightbulb,
    title: 'Design Patent Drawings',
    description: 'Precise line art showcasing ornamental design, surface contours, and visual characteristics of products.',
  },
  {
    icon: FileCheck,
    title: 'Provisional Drawings',
    description: 'Quick-turnaround illustrations for provisional applications to establish essential filing dates.',
  },
  {
    icon: RefreshCcw,
    title: 'Office action response',
    description: 'Meticulous updates to existing drawings for patent reissues, divisionals, or office action responses.',
  },
  {
    icon: Globe,
    title: 'PCT & International',
    description: 'Adaptation of drawings for international standards including EPO, JPO, and SIPO requirements.',
  },
  {
    icon: Box,
    title: '3D CAD Modeling',
    description: 'Conversion of raw ideas or 2D sketches into professional 3D CAD models for visualization.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <span className="text-brand font-mono text-xs uppercase tracking-widest font-bold mb-4 block">Our Expertise</span>
            <h2 className="text-5xl font-bold tracking-tighter text-gray-900 uppercase">
              Specialized Illustration <br />
              <span className="text-brand">for Every Need.</span>
            </h2>
          </div>
          <div className="max-w-sm text-gray-500 text-sm leading-relaxed md:text-right font-bold">
            We understand that a patent drawing is worth a thousand words. Our team ensures every line meets strict regulatory standards.
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="bg-white p-8 rounded-xl technical-border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 bg-brand-light text-brand rounded-lg flex items-center justify-center mb-6">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight uppercase">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Compliance: USPTO/PCT</span>
                <button className="text-brand text-xs font-bold uppercase tracking-widest hover:underline">Learn More</button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
