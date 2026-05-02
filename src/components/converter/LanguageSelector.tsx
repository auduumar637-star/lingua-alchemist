import React from "react";
import { LANGUAGES } from "../../constants/app-data";
import { Globe, Check } from "lucide-react";
import { motion } from "framer-motion";

interface LanguageSelectorProps {
  selectedLanguages: string[];
  toggleLanguage: (code: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  selectedLanguages, 
  toggleLanguage 
}) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-slate-800 font-semibold mb-4">
        <Globe className="w-5 h-5 text-blue-600" />
        <h3>Translation Options (Optional)</h3>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {Object.entries(LANGUAGES).map(([category, langs]) => (
          <div key={category} className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h4>
            <div className="flex flex-wrap gap-2">
              {langs.map((lang) => {
                const isSelected = selectedLanguages.includes(lang.code);
                return (
                  <button
                    key={lang.code}
                    onClick={() => toggleLanguage(lang.code)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? "bg-blue-600 text-white ring-2 ring-blue-100"
                        : "bg-white text-slate-600 border border-slate-200 hover:border-blue-200 hover:bg-blue-50/50"
                    }`}
                  >
                    {lang.name}
                    {isSelected && <Check className="w-3 h-3" />}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
      {selectedLanguages.length > 0 && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-slate-500 italic"
        >
          Converting to original format and translating to {selectedLanguages.length} {selectedLanguages.length === 1 ? 'language' : 'languages'}...
        </motion.p>
      )}
    </div>
  );
};