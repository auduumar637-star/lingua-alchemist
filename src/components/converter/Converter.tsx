import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileUpload } from "./FileUpload";
import { LanguageSelector } from "./LanguageSelector";
import { CONVERSION_MODES } from "../../constants/app-data";
import { Sparkles, ArrowRight, Loader2, Download, CheckCircle2, RefreshCw, FileText, Globe } from "lucide-react";
import { toast } from "sonner";

export const Converter: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [selectedMode, setSelectedMode] = useState<string>("pdf-to-word");
  const [selectedLangs, setSelectedLangs] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const toggleLanguage = (code: string) => {
    setSelectedLangs(prev => 
      prev.includes(code) 
        ? prev.filter(c => c !== code) 
        : [...prev, code]
    );
  };

  const handleConvert = () => {
    if (!file) {
      toast.error("Please upload a file first");
      return;
    }
    
    setIsProcessing(true);
    // Mock processing delay
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
      toast.success("Conversion successful!");
    }, 3000);
  };

  const reset = () => {
    setFile(null);
    setSelectedLangs([]);
    setIsComplete(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Transform Your Documents
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Professional PDF, Word, and Image conversion with AI-powered translation in one seamless workflow.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
        {/* Progress Stepper */}
        <div className="flex border-b border-slate-100 bg-slate-50/50">
          {[
            { step: 1, label: "Upload" },
            { step: 2, label: "Configure" },
            { step: 3, label: "Convert" }
          ].map((item, idx) => (
            <div 
              key={idx}
              className={`flex-1 flex items-center justify-center py-4 px-2 gap-2 text-sm font-medium ${
                (idx === 0 && !file) || (idx === 1 && file && !isComplete) || (idx === 2 && isComplete)
                  ? "text-blue-600 bg-white border-b-2 border-blue-600"
                  : "text-slate-400"
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                (idx === 0 && file) || (idx === 1 && isComplete)
                  ? "bg-green-100 text-green-600"
                  : "bg-slate-200 text-slate-500"
              }`}>
                {((idx === 0 && file) || (idx === 1 && isComplete)) ? <CheckCircle2 className="w-3 h-3" /> : item.step}
              </span>
              <span className="hidden sm:inline">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="p-6 md:p-10">
          <AnimatePresence mode="wait">
            {!isComplete ? (
              <motion.div
                key="config"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                {/* Mode Selection */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {CONVERSION_MODES.map((mode) => (
                    <button
                      key={mode.id}
                      onClick={() => setSelectedMode(mode.id)}
                      className={`p-4 rounded-2xl text-left transition-all border-2 ${
                        selectedMode === mode.id
                          ? "border-blue-600 bg-blue-50/50 shadow-sm"
                          : "border-slate-100 bg-white hover:border-slate-200"
                      }`}
                    >
                      <div className={`p-2 rounded-lg w-fit mb-3 ${mode.bg}`}>
                        <mode.icon className={`w-5 h-5 ${mode.color}`} />
                      </div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">{mode.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{mode.description}</p>
                    </button>
                  ))}
                </div>

                <FileUpload 
                  onFileSelect={setFile} 
                  selectedFile={file} 
                  onClear={() => setFile(null)} 
                />

                <div className="pt-4 border-t border-slate-100">
                  <LanguageSelector 
                    selectedLanguages={selectedLangs} 
                    toggleLanguage={toggleLanguage} 
                  />
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    onClick={handleConvert}
                    disabled={!file || isProcessing}
                    className={`w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white transition-all ${
                      !file || isProcessing 
                        ? "bg-slate-300 cursor-not-allowed" 
                        : "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 hover:scale-[1.02]"
                    }`}
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        Convert & Translate
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Process Complete!</h3>
                <p className="text-slate-500 mb-8 max-w-md mx-auto">
                  Your document has been successfully converted and translated. Your files are ready for download.
                </p>

                <div className="grid gap-4 max-w-md mx-auto mb-10">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        <FileText className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-semibold text-slate-800">Original Format</p>
                        <p className="text-xs text-slate-500">Document_Final.docx</p>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-blue-600 hover:text-white rounded-lg transition-all text-blue-600">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>

                  {selectedLangs.map((langCode) => (
                    <div key={langCode} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="bg-white p-2 rounded-lg shadow-sm">
                          <Globe className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-semibold text-slate-800">Translated ({langCode.toUpperCase()})</p>
                          <p className="text-xs text-slate-500">Document_Final_{langCode}.docx</p>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-blue-600 hover:text-white rounded-lg transition-all text-blue-600">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={reset}
                  className="flex items-center gap-2 mx-auto text-slate-500 hover:text-blue-600 font-semibold transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  Convert Another Document
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};