import { 
  FileText, 
  FileSpreadsheet, 
  Image as ImageIcon,
  Languages,
  ArrowRight,
  Shield,
  Zap,
  Globe
} from "lucide-react";

export const CONVERSION_MODES = [
  {
    id: "pdf-to-word",
    title: "PDF to Word",
    description: "Convert PDF documents to editable Word files while preserving layout.",
    icon: FileText,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    id: "word-to-excel",
    title: "Word to Excel",
    description: "Extract tables and data from Word docs into organized Excel spreadsheets.",
    icon: FileSpreadsheet,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    id: "screenshot-to-word",
    title: "Screenshot to Word",
    description: "Use OCR technology to turn images and screenshots into editable text.",
    icon: ImageIcon,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
];

export const LANGUAGES = {
  African: [
    { code: "sw", name: "Swahili" },
    { code: "am", name: "Amharic" },
    { code: "yo", name: "Yoruba" },
    { code: "ig", name: "Igbo" },
    { code: "ha", name: "Hausa" },
  ],
  European: [
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "es", name: "Spanish" },
    { code: "it", name: "Italian" },
    { code: "pt", name: "Portuguese" },
    { code: "nl", name: "Dutch" },
    { code: "ru", name: "Russian" },
    { code: "pl", name: "Polish" },
    { code: "sv", name: "Swedish" },
  ],
  MiddleEastern: [
    { code: "ar", name: "Arabic" },
    { code: "he", name: "Hebrew" },
    { code: "tr", name: "Turkish" },
    { code: "fa", name: "Persian" },
    { code: "ku", name: "Kurdish" },
  ],
};

export const FEATURES = [
  {
    title: "Fast Conversion",
    description: "Convert documents in seconds with our high-speed processing engine.",
    icon: Zap,
  },
  {
    title: "Secure & Private",
    description: "Your files are encrypted and automatically deleted after processing.",
    icon: Shield,
  },
  {
    title: "Multi-language",
    description: "Translate documents to 20+ languages with advanced AI models.",
    icon: Languages,
  },
  {
    title: "Cloud Powered",
    description: "Accessible from any device, anywhere in the world.",
    icon: Globe,
  },
];