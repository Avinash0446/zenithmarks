import { motion } from 'motion/react';
import { ShieldCheck, Target, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Precision Guaranteed',
      description: 'Our drafts undergo rigorous quality checks to ensure 100% compliance with patent office regulations.'
    },
    {
      icon: Target,
      title: 'Focus on Clarity',
      description: 'We emphasize visual communication, making even the most complex innovations easy to understand.'
    },
    {
      icon: Users,
      title: 'Trusted Partnership',
      description: 'We work as an extension of your legal team, respecting deadlines and ensuring confidentiality.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gray-900 font-mono text-sm uppercase tracking-widest font-bold mb-4 block underline decoration-2 underline-offset-4">Why Zenith<span className="text-brand">Marks</span></span>
            <h2 className="text-5xl font-bold tracking-tighter text-gray-900 mb-8 uppercase leading-tight">
              The Standard of Excellence in <br />
              <span className="text-brand">Intellectual Property</span> Graphics.
            </h2>
            <ul className="space-y-2 mb-10">
              {[
                "Precise, clean drawings that clearly represent your invention and meet compliance standards.",
                "Timely delivery to help you meet strict filing deadlines.",
                "Responsive, collaborative approach with minimal back-and-forth.",
                "Consistent results you can depend on for every filing."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600 text-base leading-relaxed">
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="grid gap-6">
                {values.map((v) => (
                    <div key={v.title} className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-light text-brand flex items-center justify-center">
                            <v.icon size={20} />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight mb-1">{v.title}</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">{v.description}</p>
                        </div>
                    </div>
                ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden relative shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1626282874430-c11ae32d2898?auto=format&fit=crop&q=80&w=800" 
                    alt="Patent Drawing Illustration" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand/10 mix-blend-multiply" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
