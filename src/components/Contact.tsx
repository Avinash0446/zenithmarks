import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 data-grid opacity-5 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand rounded-full blur-[160px] opacity-20" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-brand-medium rounded-full blur-[160px] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-brand-medium font-mono text-xs uppercase tracking-widest font-bold mb-4 block underline decoration-2 underline-offset-8">Contact Us</span>
            <h2 className="text-6xl font-bold tracking-tighter text-white uppercase mb-8 leading-[0.9]">
              Ready to <br />
              <span className="text-brand italic font-light">Illustrate</span> <br />
              Your Success.
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-12 max-w-md">
              Whether you have a single invention or a massive portfolio, our team is equipped to handle your requirements with surgical precision. 
            </p>

            <div className="space-y-8">
              {[
                { icon: Phone, label: 'Call Us Anytime', value: '+1 (888) ZENITH-DRAFT', sub: 'Mon - Fri, 9am - 6pm EST' },
                { icon: Mail, label: 'Email Inquiry', value: 'projects@zenithmarks.com', sub: '24-hour response time guaranteed' },
              ].map((item) => (
                <div key={item.label} className="flex gap-6 group">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-lg font-bold text-white tracking-tight">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-4 right-4 text-white/5 font-mono text-8xl font-black select-none pointer-events-none">
                QUOTE
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight mb-8 uppercase">Request a Proposal</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">Company/Firm</label>
                  <input 
                    type="text" 
                    placeholder="Innovation Law LLC" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2 text-left">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">Work Email</label>
                <input 
                  type="email" 
                  placeholder="john@firm.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">Service Required</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand focus:outline-none transition-colors appearance-none">
                  <option className="bg-gray-900">Utility Patent Illustration</option>
                  <option className="bg-gray-900">Design Patent Illustration</option>
                  <option className="bg-gray-900">PCT / International Adaptation</option>
                  <option className="bg-gray-900">Other</option>
                </select>
              </div>
              <div className="space-y-2 text-left">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">Message / Project Details</label>
                <textarea 
                  rows={4} 
                  placeholder="Describe your project, number of figures, and desired timeline..." 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand focus:outline-none transition-colors"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-brand text-white font-bold uppercase tracking-widest py-5 rounded-lg flex items-center justify-center gap-3 hover:bg-brand/90 transition-all shadow-xl shadow-brand/40"
              >
                Send Request
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
