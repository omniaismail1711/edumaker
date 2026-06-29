import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  FileText,
  Link2,
  Terminal,
  Star,
  Download,
  Copy,
  Sparkles,
  BookOpen,
  Presentation,
  Brain,
  Users,
  CheckCircle2,
  Eye,
  ArrowDownToLine,
  Library,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type ResourceType = "prompt" | "pdf" | "link" | "template";
type Category = "all" | "chatgpt" | "canva" | "guides" | "classroom";

interface Resource {
  id: number;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  category: Category;
  type: ResourceType;
  rating: number;
  ratingCount: number;
  downloads: number;
  author: { ar: string; en: string };
  free: boolean;
  tags: string[];
}

const resources: Resource[] = [
  {
    id: 1,
    title: { ar: "أفضل 10 أوامر لتخطيط الدروس", en: "Top 10 Lesson Planning Prompts" },
    description: { ar: "مجموعة من أوامر ChatGPT المصممة خصيصاً لمساعدة المعلمين في إعداد خطط دروس شاملة ومبتكرة", en: "ChatGPT prompts designed to help teachers create comprehensive lesson plans" },
    category: "chatgpt",
    type: "prompt",
    rating: 4.9,
    ratingCount: 234,
    downloads: 1850,
    author: { ar: "أحمد السيد", en: "Ahmed Al-Sayed" },
    free: true,
    tags: ["ChatGPT", "تخطيط", "دروس"],
  },
  {
    id: 2,
    title: { ar: "قالب عرض تفاعلي", en: "Interactive Presentation Template" },
    description: { ar: "قالب Canva جاهز لإنشاء عروض تقديمية تفاعلية مع أنشطة مدمجة وتصميم احترافي", en: "Ready-made Canva template for interactive presentations with embedded activities" },
    category: "canva",
    type: "template",
    rating: 4.8,
    ratingCount: 189,
    downloads: 2340,
    author: { ar: "نورة القحطاني", en: "Noura Al-Qahtani" },
    free: true,
    tags: ["Canva", "عرض تقديمي", "تفاعلي"],
  },
  {
    id: 3,
    title: { ar: "دليل التقييم التكويني الشامل", en: "Comprehensive Formative Assessment Guide" },
    description: { ar: "دليل PDF شامل يتضمن 25 استراتيجية للتقييم التكويني مع أمثلة تطبيقية لكل مرحلة دراسية", en: "Comprehensive PDF guide with 25 formative assessment strategies" },
    category: "guides",
    type: "pdf",
    rating: 4.7,
    ratingCount: 156,
    downloads: 980,
    author: { ar: "فاطمة العلي", en: "Fatima Al-Ali" },
    free: false,
    tags: ["تقييم", "PDF", "استراتيجيات"],
  },
  {
    id: 4,
    title: { ar: "أوامر Gemini لتحليل أداء الطلاب", en: "Gemini Prompts for Student Performance Analysis" },
    description: { ar: "نماذج جاهزة لاستخدام Google Gemini في تحليل بيانات أداء الطلاب واستخراج رؤى قابلة للتنفيذ", en: "Ready prompts for using Google Gemini to analyze student data" },
    category: "chatgpt",
    type: "prompt",
    rating: 4.6,
    ratingCount: 98,
    downloads: 720,
    author: { ar: "محمد الحربي", en: "Mohammed Al-Harbi" },
    free: true,
    tags: ["Gemini", "تحليل بيانات", "أداء"],
  },
  {
    id: 5,
    title: { ar: "حقيبة إدارة الصف الذكية", en: "Smart Classroom Management Kit" },
    description: { ar: "مجموعة أدوات ونماذج لإدارة الصف باستخدام التكنولوجيا، تشمل قوالب سلوكية وخطط تنظيمية", en: "Toolkit for tech-powered classroom management with behavioral templates" },
    category: "classroom",
    type: "pdf",
    rating: 4.8,
    ratingCount: 312,
    downloads: 3100,
    author: { ar: "عبدالله المنصور", en: "Abdullah Al-Mansour" },
    free: false,
    tags: ["إدارة الصف", "سلوك", "تنظيم"],
  },
  {
    id: 6,
    title: { ar: "قوالب Canva لشهادات الطلاب", en: "Canva Student Certificate Templates" },
    description: { ar: "12 قالب شهادة احترافي قابل للتعديل لتكريم الطلاب في مناسبات مختلفة", en: "12 professional editable certificate templates for student recognition" },
    category: "canva",
    type: "template",
    rating: 4.5,
    ratingCount: 145,
    downloads: 1560,
    author: { ar: "ريم البكري", en: "Reem Al-Bakri" },
    free: true,
    tags: ["Canva", "شهادات", "تكريم"],
  },
  {
    id: 7,
    title: { ar: "نماذج بريد إلكتروني لأولياء الأمور", en: "Parent Communication Email Templates" },
    description: { ar: "20 نموذج بريد إلكتروني جاهز للتواصل مع أولياء الأمور في مختلف المواقف التعليمية", en: "20 ready email templates for parent communication in various situations" },
    category: "classroom",
    type: "template",
    rating: 4.4,
    ratingCount: 87,
    downloads: 640,
    author: { ar: "سارة الخالدي", en: "Sara Al-Khalidi" },
    free: true,
    tags: ["تواصل", "أولياء أمور", "بريد"],
  },
  {
    id: 8,
    title: { ar: "دليل دمج STEM في المناهج", en: "STEM Integration Curriculum Guide" },
    description: { ar: "دليل عملي خطوة بخطوة لدمج مفاهيم STEM في المناهج الدراسية التقليدية مع مشاريع تطبيقية", en: "Step-by-step guide for integrating STEM into traditional curricula" },
    category: "guides",
    type: "pdf",
    rating: 4.9,
    ratingCount: 201,
    downloads: 1200,
    author: { ar: "خالد العتيبي", en: "Khaled Al-Otaibi" },
    free: false,
    tags: ["STEM", "مناهج", "مشاريع"],
  },
  {
    id: 9,
    title: { ar: "أوامر ChatGPT لإنشاء الاختبارات", en: "ChatGPT Prompts for Test Creation" },
    description: { ar: "حزمة أوامر متقدمة لإنشاء اختبارات متعددة المستويات مع نماذج إجابة ومعايير تصحيح", en: "Advanced prompts for creating multi-level tests with answer keys" },
    category: "chatgpt",
    type: "prompt",
    rating: 4.7,
    ratingCount: 178,
    downloads: 2100,
    author: { ar: "أحمد السيد", en: "Ahmed Al-Sayed" },
    free: true,
    tags: ["ChatGPT", "اختبارات", "تقييم"],
  },
  {
    id: 10,
    title: { ar: "مكتبة الأنشطة التفاعلية الرقمية", en: "Digital Interactive Activities Library" },
    description: { ar: "مجموعة روابط لأكثر من 50 نشاطاً تفاعلياً رقمياً مصنفة حسب المادة والمرحلة الدراسية", en: "Collection of 50+ digital interactive activities organized by subject" },
    category: "guides",
    type: "link",
    rating: 4.3,
    ratingCount: 67,
    downloads: 430,
    author: { ar: "منى الشمري", en: "Mona Al-Shammari" },
    free: true,
    tags: ["أنشطة", "تفاعلي", "رقمي"],
  },
];

const categories: { key: Category; label: { ar: string; en: string }; icon: typeof Brain }[] = [
  { key: "all", label: { ar: "جميع الموارد", en: "All Resources" }, icon: Library },
  { key: "chatgpt", label: { ar: "نماذج ChatGPT", en: "ChatGPT Prompts" }, icon: Brain },
  { key: "canva", label: { ar: "عروض Canva", en: "Canva Presentations" }, icon: Presentation },
  { key: "guides", label: { ar: "أدلة دراسية", en: "Study Guides" }, icon: BookOpen },
  { key: "classroom", label: { ar: "إدارة الفصل", en: "Classroom Management" }, icon: Users },
];

const typeConfig: Record<ResourceType, { icon: typeof FileText; label: { ar: string; en: string }; color: string }> = {
  prompt: { icon: Terminal, label: { ar: "نموذج AI", en: "AI Prompt" }, color: "bg-[hsl(280,50%,60%)]/10 text-[hsl(280,50%,50%)] border-[hsl(280,50%,60%)]/20" },
  pdf: { icon: FileText, label: { ar: "PDF", en: "PDF" }, color: "bg-destructive/10 text-destructive border-destructive/20" },
  link: { icon: Link2, label: { ar: "رابط", en: "Link" }, color: "bg-primary/10 text-primary border-primary/20" },
  template: { icon: Presentation, label: { ar: "قالب", en: "Template" }, color: "bg-[hsl(38,80%,55%)]/10 text-[hsl(38,80%,45%)] border-[hsl(38,80%,55%)]/20" },
};

function ResourceCard({ resource, lang, index }: { resource: Resource; lang: string; index: number }) {
  const [copied, setCopied] = useState(false);
  const title = lang === "ar" ? resource.title.ar : resource.title.en;
  const desc = lang === "ar" ? resource.description.ar : resource.description.en;
  const author = lang === "ar" ? resource.author.ar : resource.author.en;
  const tc = typeConfig[resource.type];
  const TypeIcon = tc.icon;

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isPrompt = resource.type === "prompt";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.3 }}
      layout
      className="group bg-card border rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-[var(--card-shadow-hover)] transition-all"
    >
      {/* Top accent bar */}
      <div className={`h-1 ${resource.type === "prompt" ? "bg-[hsl(280,50%,60%)]" : resource.type === "pdf" ? "bg-destructive" : resource.type === "link" ? "bg-primary" : "bg-[hsl(38,80%,55%)]"}`} />

      <div className="p-5">
        {/* Type badge + Free */}
        <div className="flex items-center justify-between mb-3">
          <Badge variant="outline" className={`text-[10px] px-2 py-0.5 gap-1 ${tc.color}`}>
            <TypeIcon className="w-3 h-3" />
            {lang === "ar" ? tc.label.ar : tc.label.en}
          </Badge>
          {resource.free ? (
            <Badge className="bg-[hsl(160,50%,45%)]/10 text-[hsl(160,50%,40%)] border-[hsl(160,50%,45%)]/20 text-[10px]">
              {lang === "ar" ? "مجاني" : "Free"}
            </Badge>
          ) : (
            <Badge className="bg-accent/10 text-accent border-accent/20 text-[10px]">
              {lang === "ar" ? "مميز" : "Premium"}
            </Badge>
          )}
        </div>

        {/* Title */}
        <h3 className="font-bold text-sm text-foreground mb-2 leading-relaxed line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4">
          {desc}
        </p>

        {/* Rating + Downloads */}
        <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-[hsl(38,80%,55%)] text-[hsl(38,80%,55%)]" />
            <span className="font-bold text-foreground">{resource.rating}</span>
            <span>({resource.ratingCount})</span>
          </div>
          <div className="flex items-center gap-1">
            <ArrowDownToLine className="w-3 h-3" />
            <span>{resource.downloads.toLocaleString()}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {resource.tags.map((tag) => (
            <span key={tag} className="text-[10px] bg-secondary px-2 py-0.5 rounded-md text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        {/* Author + Action */}
        <div className="flex items-center justify-between pt-3 border-t border-border/50">
          <span className="text-[11px] text-muted-foreground">{author}</span>
          <div className="flex gap-1.5">
            {isPrompt ? (
              <Button
                size="sm"
                variant={copied ? "default" : "outline"}
                className="h-8 text-xs gap-1.5 px-3"
                onClick={handleCopy}
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-3 h-3" />
                    {lang === "ar" ? "تم النسخ" : "Copied"}
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    {lang === "ar" ? "نسخ" : "Copy"}
                  </>
                )}
              </Button>
            ) : (
              <Button size="sm" className="h-8 text-xs gap-1.5 px-3">
                <Download className="w-3 h-3" />
                {lang === "ar" ? "تحميل" : "Download"}
              </Button>
            )}
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
              <Eye className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ResourceLibrary() {
  const { lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered = useMemo(() => {
    return resources.filter((r) => {
      const matchesCat = activeCategory === "all" || r.category === activeCategory;
      if (!matchesCat) return false;
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      const title = (lang === "ar" ? r.title.ar : r.title.en).toLowerCase();
      const desc = (lang === "ar" ? r.description.ar : r.description.en).toLowerCase();
      return title.includes(q) || desc.includes(q) || r.tags.some(t => t.toLowerCase().includes(q));
    });
  }, [searchQuery, activeCategory, lang]);

  const totalDownloads = resources.reduce((s, r) => s + r.downloads, 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-primary/5 via-primary/[0.02] to-transparent">
        <div className="absolute top-0 end-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 start-0 w-[300px] h-[300px] rounded-full bg-accent/5 blur-3xl" />

        <div className="container max-w-5xl mx-auto px-4 py-14 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-xs">
              <Sparkles className="w-3 h-3 me-1" />
              {lang === "ar" ? `${resources.length} مورد متاح` : `${resources.length} resources available`}
            </Badge>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-[1.8] mb-3">
              {lang === "ar" ? "مكتبة الموارد والنماذج" : "Resource & Prompt Library"}
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-8">
              {lang === "ar"
                ? "اكتشف خطط دروس جاهزة، نماذج ذكاء اصطناعي، قوالب تصميم، وأدلة تعليمية من Teachers Workbook"
                : "Discover lesson plans, AI prompts, design templates, and educational guides"}
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-6 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="font-bold text-foreground">{resources.length}</span>
                <span>{lang === "ar" ? "مورد" : "resources"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ArrowDownToLine className="w-4 h-4 text-primary" />
                <span className="font-bold text-foreground">{totalDownloads.toLocaleString()}</span>
                <span>{lang === "ar" ? "تحميل" : "downloads"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-[hsl(38,80%,55%)] text-[hsl(38,80%,55%)]" />
                <span className="font-bold text-foreground">4.7</span>
                <span>{lang === "ar" ? "متوسط التقييم" : "avg rating"}</span>
              </div>
            </div>

            {/* Search */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute start-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === "ar" ? "ابحث عن خطط دروس، نماذج ذكاء اصطناعي..." : "Search for lesson plans, AI prompts..."}
                className="h-13 text-sm ps-12 rounded-xl bg-card border shadow-sm"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="container max-w-6xl mx-auto px-4 py-8">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const active = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  active
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-card border text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                <Icon className="w-4 h-4" />
                {lang === "ar" ? cat.label.ar : cat.label.en}
              </button>
            );
          })}
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-muted-foreground">
            {lang === "ar" ? `عرض ${filtered.length} مورد` : `Showing ${filtered.length} resources`}
          </p>
          {(searchQuery || activeCategory !== "all") && (
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
              className="text-xs text-primary hover:underline"
            >
              {lang === "ar" ? "مسح الفلاتر" : "Clear filters"}
            </button>
          )}
        </div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((resource, i) => (
              <ResourceCard key={resource.id} resource={resource} lang={lang} index={i} />
            ))}
          </div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Search className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
            <p className="text-muted-foreground text-sm">
              {lang === "ar" ? "لم يتم العثور على موارد مطابقة" : "No matching resources found"}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
