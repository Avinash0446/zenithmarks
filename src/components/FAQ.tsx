import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "What file formats do you deliver?",
    answer: "We typically deliver in high-resolution PDF and TIFF formats as required by the USPTO. We can also provide JPEG, AI, SVG, or CAD files (DWG/STEP) upon request."
  },
  {
    question: "What is your standard turnaround time?",
    answer: "Our standard turnaround is 3-5 business days. Expedited delivery (24-48 hours) is available for urgent filings."
  },
  {
    question: "Do you handle international (PCT) standards?",
    answer: "Yes, we specialize in adapting drawings for EPO, JPO, WIPO, and other international patent offices, ensuring compliance with local page sizes and margins."
  },
  {
    question: "Is my data and innovation confidential?",
    answer: "Absolutely. We sign strict Non-Disclosure Agreements (NDAs) with all clients and use secure file transfer protocols. Your intellectual property is safe with us."
  },
  {
    question: "Can you draft from hand-drawn sketches or prototypes?",
    answer: "Yes. Our team can work from crude sketches, photographs of prototypes, or verbal descriptions. We also accept 3D CAD models from major software like SolidWorks or AutoCAD."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand font-mono text-xs uppercase tracking-widest font-bold mb-4 block underline decoration-2 underline-offset-8">Information</span>
          <h2 className="text-5xl font-bold tracking-tighter text-gray-900 uppercase">Frequently Asked Questions.</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className={`border rounded-2xl transition-all duration-300 overflow-hidden ${openIndex === i ? 'border-brand bg-brand-light/30' : 'border-gray-100 bg-white'}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <button
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className={`text-lg font-bold tracking-tight uppercase ${openIndex === i ? 'text-brand' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === i ? 'bg-brand text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'}`}>
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: openIndex === i ? 'auto' : 0, opacity: openIndex === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-8 text-gray-600 text-sm leading-relaxed border-t border-brand/10 pt-4 mt-2">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
