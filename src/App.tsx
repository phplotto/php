import { useState } from 'react';
import { 
  Download, 
  Smartphone, 
  Apple, 
  CheckCircle2, 
  ChevronDown, 
  History, 
  HelpCircle, 
  ShieldCheck, 
  Zap, 
  Star,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const APP_NAME = "PHPLotto";
const DOWNLOAD_STATS = [
  { label: "Total Downloads", value: "1.2M+", icon: <Download className="w-4 h-4" /> },
  { label: "Active Users", value: "500K+", icon: <Zap className="w-4 h-4" /> },
  { label: "Rating", value: "4.8/5", icon: <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> },
];

const GUIDES = {
  android: [
    { title: "Download APK", desc: "Click the Android download button to get the latest APK file directly to your device." },
    { title: "Enable Unknown Sources", desc: "Go to Settings > Security and enable 'Install from Unknown Sources' to allow APK installation." },
    { title: "Install & Open", desc: "Locate the downloaded file in your Downloads folder and tap to install. Once finished, launch the app." },
  ],
  ios: [
    { title: "Download from App Store", desc: "Tap the iOS button to be redirected to the secure download page or App Store." },
    { title: "Confirm Installation", desc: "Tap 'Install' or 'Get' when prompted. Wait for the application to download to your home screen." },
    { title: "Trust Enterprise App", desc: "If prompted, go to Settings > General > VPN & Device Management and trust the distributor." },
  ]
};

const DOWNLOAD_LINKS = {
  android: "https://www.gu0t7xht.com/gcs/apk/PHP_LOTTO.apk",
  ios: "https://jylkl.wsabdj.cn:1443/api/c/pl4hw4yk"
};

// You can change this to your own image path (e.g., "/mockup.png" if uploaded to the public folder, or any direct URL)
const HERO_IMAGE_URL = "/hero-phone.png";

const VERSION_LOGS = [
  { version: "v2.5.0", date: "2026-05-06", changes: ["Fixed deposit and withdrawal issues", "Enhanced transaction security", "Optimized server connection stability"] },
  { version: "v2.4.5", date: "2026-02-10", changes: ["Increased real-time draw results update speed", "Optimized UI smoothness", "Fixed minor known bugs"] },
  { version: "v2.4.0", date: "2025-11-20", changes: ["New Dark Mode UI design", "Integrated 24/7 online customer service", "Improved backend efficiency"] },
  { version: "v1.0.0", date: "2025-09-15", changes: ["Official PHPLotto App initial release", "Cross-platform support for Android & iOS", "Secure and encrypted drawing environment"] },
];

const FAQS = [
  { q: "Is PHPLotto safe to download?", a: "Yes, our app is scanned for viruses and secure. We use enterprise-grade encryption to protect your data." },
  { q: "Do I need to pay for the app?", a: "No, PHPLotto App is completely free to download and install on both Android and iOS." },
  { q: "How do I update to the latest version?", a: "The app will automatically notify you when a new update is available. You can also re-download from this page." },
  { q: "What should I do if the installation fails?", a: "Ensure you have enough storage space and a stable internet connection. Android users should check 'Unknown Sources' settings." },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'android' | 'ios'>('android');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-blue-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <img 
                src="/logo.png" 
                alt="PHPLotto Logo" 
                className="w-10 h-10 rounded-lg shadow-lg shadow-blue-500/20 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const sibling = (e.target as HTMLElement).nextElementSibling;
                  if (sibling) (sibling as HTMLElement).style.display = 'flex';
                }}
              />
              <div className="hidden absolute inset-0 bg-blue-600 rounded-lg items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">
                P
              </div>
            </div>
            <span className="font-bold text-lg tracking-tight uppercase">{APP_NAME}</span>
          </div>

          <div className="hidden md:flex items-center gap-4 lg:gap-6 text-sm font-medium text-neutral-400">
            <a href="#guide" className="hover:text-blue-400 transition-colors">Guide</a>
            <a href="#updates" className="hover:text-blue-400 transition-colors">Updates</a>
            <a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a>
            <a 
              href={DOWNLOAD_LINKS.android}
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full transition-all active:scale-95 shadow-lg shadow-blue-600/20"
            >
              Download Now
            </a>
            <a 
              href="https://www.phplottos.com/invite/KuyaSwerte"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-neutral-100 text-blue-600 px-5 py-2 rounded-full font-bold transition-all active:scale-95 shadow-lg shadow-white/10"
            >
              PLAY NOW
            </a>
          </div>

          <button 
            className="md:hidden p-2 text-neutral-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-neutral-900 border-b border-neutral-800"
            >
              <div className="flex flex-col p-4 gap-4 text-sm font-medium">
                <a href="#guide" onClick={() => setMobileMenuOpen(false)}>Guide</a>
                <a href="#updates" onClick={() => setMobileMenuOpen(false)}>Updates</a>
                <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
                <div className="flex flex-col gap-2 pt-2 border-t border-neutral-800">
                  <a 
                    href={DOWNLOAD_LINKS.android}
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center bg-blue-600 hover:bg-blue-500 text-white py-2.5 rounded-xl font-bold transition-all text-sm"
                  >
                    Download Now
                  </a>
                  <a 
                    href="https://www.phplottos.com/invite/KuyaSwerte"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center bg-white hover:bg-neutral-100 text-blue-600 py-2.5 rounded-xl font-bold transition-all text-sm"
                  >
                    PLAY NOW
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3 h-3" /> Official PHPLotto Agent
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              Secure & Fast <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Lotto Experience
              </span>
            </h1>
            <p className="text-neutral-400 text-lg max-w-lg leading-relaxed">
              Download the official {APP_NAME} app for a seamless gaming experience. Access real-time results, instant withdrawals, and 24/7 support.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href={DOWNLOAD_LINKS.android}
                className="flex items-center gap-3 bg-neutral-100 text-neutral-950 px-8 py-4 rounded-2xl font-bold hover:bg-white transition-all active:scale-95 shadow-xl shadow-white/5 group"
              >
                <Smartphone className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-[10px] uppercase opacity-70 leading-none">Download for</div>
                  <div className="text-lg">Android APK</div>
                </div>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href={DOWNLOAD_LINKS.ios}
                className="flex items-center gap-3 bg-neutral-800 text-white px-8 py-4 rounded-2xl font-bold hover:bg-neutral-700 transition-all active:scale-95 shadow-xl shadow-black/20 group border border-neutral-700"
              >
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-[10px] uppercase opacity-70 leading-none">Available on</div>
                  <div className="text-lg">iOS App</div>
                </div>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex gap-8 pt-4">
              {DOWNLOAD_STATS.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="flex items-center gap-2 text-neutral-500 text-xs uppercase font-bold tracking-widest mb-1">
                    {stat.icon} {stat.label}
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full" />
            <div className="relative aspect-[4/5] bg-neutral-900 border border-neutral-800 rounded-[3rem] overflow-hidden p-3 shadow-2xl">
              <div className="relative w-full h-full bg-neutral-950 rounded-[2.5rem] overflow-hidden border border-neutral-800">
                <img 
                  src={HERO_IMAGE_URL} 
                  alt="App Mockup"
                  className="w-full h-full object-contain transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent flex flex-col justify-end p-10 pb-16">
                  <div className="text-white font-bold text-2xl">Play Anytime, <br />Everywhere.</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guide Section */}
      <section id="guide" className="py-24 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 italic serif tracking-tight">Installation Guide</h2>
            <p className="text-neutral-400">Choose your device platform below for detailed step-by-step installation instructions.</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-neutral-800 rounded-xl">
              <button 
                onClick={() => setActiveTab('android')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${activeTab === 'android' ? 'bg-neutral-100 text-neutral-950 shadow-md' : 'text-neutral-400 hover:text-white'}`}
              >
                <Smartphone className="w-4 h-4" /> Android
              </button>
              <button 
                onClick={() => setActiveTab('ios')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${activeTab === 'ios' ? 'bg-neutral-100 text-neutral-950 shadow-md' : 'text-neutral-400 hover:text-white'}`}
              >
                <Apple className="w-4 h-4" /> iOS
              </button>
            </div>
          </div>

          <motion.div 
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-6"
          >
            {GUIDES[activeTab].map((step, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl hover:border-blue-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-neutral-800 text-blue-400 rounded-2xl flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-12 p-6 rounded-3xl bg-blue-500/5 border border-blue-500/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-neutral-100">Verified & Secured</div>
                <div className="text-neutral-400 text-sm">Application package scanned for security risks.</div>
              </div>
            </div>
            <a 
              href={DOWNLOAD_LINKS.android}
              className="bg-white text-neutral-950 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-neutral-200 transition-all active:scale-95"
            >
              Start Installation
            </a>
          </div>
        </div>
      </section>

      {/* Updates Log */}
      <section id="updates" className="py-24 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-4 border-l border-neutral-800 ml-4 md:ml-auto">
          <div className="flex items-center gap-3 mb-12 -ml-3">
            <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl text-emerald-400 shadow-xl shadow-emerald-400/5">
              <History className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-3xl font-bold italic serif uppercase">Version History</h2>
              <p className="text-neutral-500 text-sm">Stay updated with our latest improvements.</p>
            </div>
          </div>

          <div className="space-y-12">
            {VERSION_LOGS.map((log, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[1.35rem] top-0 w-2.5 h-2.5 rounded-full bg-neutral-800 border-2 border-neutral-950 group-hover:bg-emerald-400 group-hover:scale-125 transition-all duration-500" />
                <div className="pl-8">
                  <div className="flex items-center gap-3 mb-3 text-sm">
                    <span className="font-bold text-neutral-100 px-2 py-0.5 rounded bg-neutral-800 border border-neutral-700">{log.version}</span>
                    <span className="text-neutral-500 uppercase tracking-widest font-mono text-[10px]">{log.date}</span>
                  </div>
                  <ul className="space-y-2">
                    {log.changes.map((change, i) => (
                      <li key={i} className="flex items-center gap-2 text-neutral-400 text-sm">
                        <div className="w-1 h-1 rounded-full bg-neutral-700" />
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-neutral-900/30">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <HelpCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4 italic serif uppercase">Questions & Answers</h2>
            <p className="text-neutral-400">Everything you need to know about the {APP_NAME} application.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className={`border border-neutral-800 rounded-3xl overflow-hidden transition-all duration-300 ${expandedFaq === idx ? 'bg-neutral-800/50' : 'bg-neutral-900/50'}`}
              >
                <button 
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-lg">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-neutral-500 transition-transform duration-300 ${expandedFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {expandedFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-neutral-400 text-sm leading-relaxed border-t border-neutral-800 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="relative w-10 h-10">
                  <img 
                    src="/logo.png" 
                    alt="PHPLotto Logo" 
                    className="w-10 h-10 rounded-xl object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      const sibling = (e.target as HTMLElement).nextElementSibling;
                      if (sibling) (sibling as HTMLElement).style.display = 'flex';
                    }}
                  />
                  <div className="hidden absolute inset-0 bg-blue-600 rounded-xl items-center justify-center font-bold text-white shadow-lg">
                    P
                  </div>
                </div>
                <span className="font-bold text-2xl tracking-tighter uppercase">{APP_NAME}</span>
              </div>
              <p className="text-neutral-500 text-sm max-w-sm">
                The global leader in safe, secure, and transparent lottery gaming technology. Download the official app today and join millions of winners.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold uppercase tracking-widest text-xs opacity-50">Quick Links</h4>
              <nav className="flex flex-col gap-2 text-sm text-neutral-400">
                <a href="#guide" className="hover:text-white transition-colors">How to Install</a>
                <a href="#updates" className="hover:text-white transition-colors">Recent Updates</a>
                <a href="#faq" className="hover:text-white transition-colors">Global FAQ</a>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold uppercase tracking-widest text-xs opacity-50">Support & Help</h4>
              <div className="space-y-3">
                <a 
                  href="https://tawk.to/chat/68cd0d9105c2ee19277b9ce2/1j5gfq07r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-600/15 group"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> 
                  <span>24/7 Live Support</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-neutral-900">
            <div className="text-[10px] uppercase tracking-widest font-bold text-neutral-600">
              © 2024 {APP_NAME} Organization. All Rights Reserved.
            </div>
            <div className="flex gap-6 text-[10px] uppercase tracking-widest font-bold text-neutral-600">
              <a href="#" className="hover:text-neutral-400">Privacy Policy</a>
              <a href="#" className="hover:text-neutral-400">Terms of Service</a>
              <a href="#" className="hover:text-neutral-400">Responsible Gaming</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
