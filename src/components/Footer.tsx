import { Ruler, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand rounded flex items-center justify-center text-white">
                    <Ruler size={20} />
                </div>
                <div className="flex flex-col leading-none">
                    <span className="text-lg font-bold tracking-tighter text-gray-900 uppercase">Zenith<span className="text-brand">Marks</span></span>
                    <span className="text-[8px] font-mono tracking-widest text-brand uppercase">Patent Illustrations</span>
                </div>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs mb-8">
              Setting the industry benchmark for precision, compliance, and clarity in patent illustration services worldwide.
            </p>
            <div className="flex gap-4">
                {[Linkedin].map((Icon, idx) => (
                    <a key={idx} href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-brand hover:text-white transition-all">
                        <Icon size={16} />
                    </a>
                ))}
            </div>
          </div>

          <div>
              <h4 className="text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-6">Services</h4>
              <ul className="space-y-4 text-xs font-medium text-gray-500">
                  <li><a href="#" className="hover:text-brand transition-colors uppercase tracking-wider">Utility Patents</a></li>
                  <li><a href="#" className="hover:text-brand transition-colors uppercase tracking-wider">Design Patents</a></li>
                  <li><a href="#" className="hover:text-brand transition-colors uppercase tracking-wider">PCT / WIPO Illustrations</a></li>
                  <li><a href="#" className="hover:text-brand transition-colors uppercase tracking-wider">Medical Device Drafting</a></li>
                  <li><a href="#" className="hover:text-brand transition-colors uppercase tracking-wider">3D CAD Modeling</a></li>
              </ul>
          </div>

          <div>
              <h4 className="text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-6">Quick Links</h4>
              <ul className="space-y-4 text-xs font-medium text-gray-500">
                  <li><a href="#about" className="hover:text-brand transition-colors uppercase tracking-wider">About Our Firm</a></li>
                  <li><a href="#portfolio" className="hover:text-brand transition-colors uppercase tracking-wider">Case Studies</a></li>
                  <li><a href="#faq" className="hover:text-brand transition-colors uppercase tracking-wider">Compliance FAQ</a></li>
                  <li><a href="#contact" className="hover:text-brand transition-colors uppercase tracking-wider">Request Quote</a></li>
                  <li><a href="#" className="hover:text-brand transition-colors uppercase tracking-wider">Client Portal</a></li>
              </ul>
          </div>

          <div>
              <h4 className="text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-6">Newsletter</h4>
              <p className="text-gray-500 text-xs leading-relaxed mb-6">
                  Subscribe for updates on IP law changes and drafting standards.
              </p>
              <div className="flex gap-2 p-1 border border-gray-200 rounded-lg">
                  <input type="email" placeholder="Email address" className="flex-1 bg-transparent px-3 py-2 text-xs focus:outline-none" />
                  <button className="bg-gray-900 text-white uppercase text-[10px] font-bold px-4 py-2 rounded-md hover:bg-brand transition-all">Join</button>
              </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                © {currentYear} ZENITH<span className="text-brand">MARKS</span> ALL RIGHTS RESERVED.
            </div>
            <div className="flex gap-8 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                <a href="#" className="hover:text-brand">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
}
