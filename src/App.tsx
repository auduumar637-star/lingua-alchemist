import { Toaster } from "sonner";
import { Navbar } from "./components/layout/Navbar";
import { Converter } from "./components/converter/Converter";
import { FEATURES } from "./constants/app-data";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-blue-100 selection:text-blue-900 font-sans">
      <Navbar />
      <Toaster position="top-center" expand={true} richColors />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  New: AI-Powered Translation
                </div>
                <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
                  One Tool. <br />
                  <span className="text-blue-600">Any Format.</span> <br />
                  Every Language.
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
                  Break down language and format barriers. Convert PDF to Word, Word to Excel, and screenshots to text in 20+ languages instantly.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#converter" className="bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 hover:scale-[1.02]">
                    Try it Free
                  </a>
                  <button className="bg-white text-slate-700 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-slate-50 border border-slate-200 transition-all">
                    View Demo
                  </button>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-3xl -z-10 blur-2xl opacity-50"></div>
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/ebba8076-edc5-4834-acdb-fcca1a4dd8d0/hero-illustration-png-0fd269a2-1777721675496.webp" 
                  alt="Hero Illustration" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Converter Tool */}
        <section id="converter" className="py-12 bg-white relative">
          <div className="absolute inset-0 bg-slate-50/50 -z-10"></div>
          <Converter />
        </section>

        {/* Features Grid */}
        <section id="features" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose DocuShift?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              We provide the most robust and accurate document processing tools for professionals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-600 p-1 rounded-lg">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">DocuShift</span>
              </div>
              <p className="max-w-md text-sm leading-relaxed">
                The world's leading document conversion and translation platform. Empowering professionals to work across borders and formats without friction.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Product</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Converter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Translation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">OCR Engine</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-slate-600">© 2025 DocuShift AI. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;