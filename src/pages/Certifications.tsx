import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Award, Search, Globe, ShieldCheck, Monitor, BookOpen, GraduationCap,
  ArrowLeft, ArrowRight, ExternalLink, ChevronDown, ChevronUp, Sparkles, Apple,
  CheckCircle2, Layers, Cpu, Users, Rocket, Target, Filter,
  ClipboardList, Clock, MapPin, FileText, UserCheck, Lightbulb, Languages, PenTool,
  MessageSquare, Brain, School, ListChecks,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

type CertCategory = "all" | "language" | "teaching" | "license" | "tech" | "recruitment";

interface CertCard {
  id: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  category: CertCategory;
  color: string;
  icon: React.ReactNode;
  skills?: { ar: string; en: string }[];
  levels?: { ar: string; en: string }[];
  button: { ar: string; en: string };
}

const certifications: CertCard[] = [
  {
    id: "toefl",
    title: { ar: "TOEFL", en: "TOEFL" },
    description: {
      ar: "اختبار عالمي لقياس مستوى اللغة الإنجليزية ويستخدم للقبول في الجامعات والمؤسسات الدولية.",
      en: "A global test measuring English proficiency for admission to international universities and institutions.",
    },
    category: "language",
    color: "from-[hsl(210,60%,50%)] to-[hsl(230,55%,60%)]",
    icon: <Globe className="w-6 h-6" />,
    skills: [
      { ar: "القراءة", en: "Reading" },
      { ar: "الاستماع", en: "Listening" },
      { ar: "التحدث", en: "Speaking" },
      { ar: "الكتابة", en: "Writing" },
    ],
    button: { ar: "تعرف على المزيد", en: "Learn More" },
  },
  {
    id: "ielts",
    title: { ar: "IELTS", en: "IELTS" },
    description: {
      ar: "أحد أشهر اختبارات اللغة الإنجليزية في العالم للدراسة والعمل والهجرة.",
      en: "One of the most recognized English tests worldwide for study, work, and immigration.",
    },
    category: "language",
    color: "from-[hsl(0,65%,55%)] to-[hsl(350,60%,60%)]",
    icon: <Globe className="w-6 h-6" />,
    skills: [
      { ar: "القراءة", en: "Reading" },
      { ar: "الاستماع", en: "Listening" },
      { ar: "التحدث", en: "Speaking" },
      { ar: "الكتابة", en: "Writing" },
    ],
    button: { ar: "تعرف على المزيد", en: "Learn More" },
  },
  {
    id: "tefl",
    title: { ar: "TEFL", en: "TEFL" },
    description: {
      ar: "شهادة دولية تؤهل المعلمين لتدريس اللغة الإنجليزية للطلاب الذين يتعلمونها كلغة أجنبية في المدارس والمعاهد حول العالم.",
      en: "An international certification qualifying teachers to teach English to students learning it as a foreign language worldwide.",
    },
    category: "teaching",
    color: "from-[hsl(270,55%,55%)] to-[hsl(290,50%,60%)]",
    icon: <GraduationCap className="w-6 h-6" />,
    skills: [
      { ar: "تدريس اللغة الإنجليزية كلغة أجنبية", en: "Teaching English as a Foreign Language" },
      { ar: "المدارس والمعاهد الدولية", en: "International Schools & Institutes" },
      { ar: "تدريب حضوري أو عبر الإنترنت", en: "Online or In-Person Training" },
    ],
    button: { ar: "تعرف على الشهادة", en: "Learn About TEFL" },
  },
  {
    id: "tesol",
    title: { ar: "TESOL", en: "TESOL" },
    description: {
      ar: "برنامج تدريبي يركز على تدريس اللغة الإنجليزية للطلاب الذين يتحدثون لغات أخرى، ويستخدم بشكل واسع في المدارس والجامعات الدولية.",
      en: "A training program focused on teaching English to speakers of other languages, widely used in international schools and universities.",
    },
    category: "teaching",
    color: "from-[hsl(35,70%,50%)] to-[hsl(25,65%,55%)]",
    icon: <GraduationCap className="w-6 h-6" />,
    skills: [
      { ar: "استراتيجيات تعليم الفصول متعددة اللغات", en: "Multilingual Classroom Strategies" },
      { ar: "معترف بها عالمياً", en: "Globally Recognized" },
      { ar: "مناسبة للتعامل مع طلاب متنوعين", en: "Diverse Student Populations" },
    ],
    button: { ar: "استكشف برامج TESOL", en: "Explore TESOL Programs" },
  },
  {
    id: "saudi-license",
    title: { ar: "الرخصة المهنية للمعلمين", en: "Saudi Teaching License" },
    description: {
      ar: "اختبار مهني يقيس كفاءة المعلمين في التخصص والمعرفة التربوية.",
      en: "A professional exam measuring teacher competency in specialization and pedagogical knowledge.",
    },
    category: "license",
    color: "from-[hsl(145,50%,45%)] to-[hsl(160,45%,50%)]",
    icon: <ShieldCheck className="w-6 h-6" />,
    levels: [
      { ar: "اختبار تربوي عام", en: "General Pedagogical Exam" },
      { ar: "اختبار تخصصي", en: "Specialization Exam" },
    ],
    button: { ar: "تعرف على الاختبار", en: "Learn About the Exam" },
  },
  {
    id: "google-educator",
    title: { ar: "Google Certified Educator", en: "Google Certified Educator" },
    description: {
      ar: "شهادة تثبت قدرة المعلم على استخدام أدوات Google التعليمية داخل الصف.",
      en: "A certification proving the teacher's ability to use Google educational tools in the classroom.",
    },
    category: "tech",
    color: "from-[hsl(210,70%,55%)] to-[hsl(145,50%,50%)]",
    icon: <Monitor className="w-6 h-6" />,
    levels: [
      { ar: "المستوى الأول", en: "Level 1" },
      { ar: "المستوى الثاني", en: "Level 2" },
    ],
    button: { ar: "ابدأ الشهادة", en: "Start Certification" },
  },
  {
    id: "microsoft-educator",
    title: { ar: "Microsoft Certified Educator", en: "Microsoft Certified Educator" },
    description: {
      ar: "شهادة تركز على دمج التكنولوجيا في التدريس باستخدام أدوات Microsoft.",
      en: "A certification focused on integrating technology in teaching using Microsoft tools.",
    },
    category: "tech",
    color: "from-[hsl(200,65%,50%)] to-[hsl(260,50%,55%)]",
    icon: <Monitor className="w-6 h-6" />,
    button: { ar: "ابدأ الشهادة", en: "Start Certification" },
  },
  {
    id: "apple-teacher",
    title: { ar: "Apple Teacher", en: "Apple Teacher" },
    description: {
      ar: "برنامج تعليمي مجاني يساعد المعلمين على استخدام تقنيات Apple في الفصل الدراسي.",
      en: "A free learning program helping teachers use Apple technology in the classroom.",
    },
    category: "tech",
    color: "from-[hsl(0,0%,20%)] to-[hsl(0,0%,40%)]",
    icon: <Apple className="w-6 h-6" />,
    button: { ar: "تعرف على المزيد", en: "Learn More" },
  },
  {
    id: "adobe-educator",
    title: { ar: "Adobe Creative Educator", en: "Adobe Creative Educator" },
    description: {
      ar: "شهادة تركز على التدريس الإبداعي باستخدام الوسائط الرقمية وأدوات Adobe.",
      en: "A certification focused on creative teaching with digital media and Adobe tools.",
    },
    category: "tech",
    color: "from-[hsl(350,70%,50%)] to-[hsl(20,80%,55%)]",
    icon: <Layers className="w-6 h-6" />,
    button: { ar: "تعرف على المزيد", en: "Learn More" },
  },
  {
    id: "unesco-ict",
    title: { ar: "UNESCO ICT Competency Framework", en: "UNESCO ICT Competency Framework for Teachers" },
    description: {
      ar: "إطار عمل عالمي للتحول الرقمي في التعليم من منظمة اليونسكو.",
      en: "A global framework for digital transformation in education by UNESCO.",
    },
    category: "tech",
    color: "from-[hsl(200,60%,50%)] to-[hsl(180,50%,45%)]",
    icon: <Globe className="w-6 h-6" />,
    button: { ar: "تعرف على المزيد", en: "Learn More" },
  },
];

const prepCourses = [
  { title: { ar: "التحضير لاختبار TOEFL", en: "TOEFL Preparation" }, color: "bg-primary/10 text-primary" },
  { title: { ar: "التحضير لاختبار IELTS", en: "IELTS Preparation" }, color: "bg-destructive/10 text-destructive" },
  { title: { ar: "التحضير لشهادة Google Educator", en: "Google Educator Training" }, color: "bg-[hsl(145,50%,45%)]/10 text-[hsl(145,50%,45%)]" },
  { title: { ar: "التحضير للرخصة المهنية", en: "Teaching License Prep" }, color: "bg-accent/10 text-accent-foreground" },
];

const careerPath = [
  { icon: BookOpen, label: { ar: "معلم", en: "Teacher" } },
  { icon: Cpu, label: { ar: "تدريب على المهارات الرقمية", en: "Digital Skills Training" } },
  { icon: Award, label: { ar: "شهادات مهنية", en: "Professional Certifications" } },
  { icon: Rocket, label: { ar: "مسار تعليمي متقدم", en: "Advanced Teaching Career" } },
];

const filterTabs: { key: CertCategory; label: { ar: string; en: string }; icon: React.ReactNode }[] = [
  { key: "all", label: { ar: "الكل", en: "All" }, icon: <Filter className="w-4 h-4" /> },
  { key: "language", label: { ar: "اختبارات اللغة", en: "Language Tests" }, icon: <Globe className="w-4 h-4" /> },
  { key: "teaching", label: { ar: "شهادات التدريس", en: "Teaching Certs" }, icon: <GraduationCap className="w-4 h-4" /> },
  { key: "license", label: { ar: "الرخص المهنية", en: "Teaching Licenses" }, icon: <ShieldCheck className="w-4 h-4" /> },
  { key: "tech", label: { ar: "شهادات التكنولوجيا", en: "Tech Certifications" }, icon: <Monitor className="w-4 h-4" /> },
  { key: "recruitment", label: { ar: "اختبارات التوظيف", en: "Recruitment Exams" }, icon: <ClipboardList className="w-4 h-4" /> },
];

export default function Certifications() {
  const { lang, isRTL } = useLanguage();
  const [filter, setFilter] = useState<CertCategory>("all");
  const [search, setSearch] = useState("");
  const [showExamDetails, setShowExamDetails] = useState(false);
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const filtered = certifications.filter((c) => {
    const matchCategory = filter === "all" || c.category === filter;
    const matchSearch =
      search === "" ||
      c.title[lang].toLowerCase().includes(search.toLowerCase()) ||
      c.description[lang].toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const t = (obj: { ar: string; en: string }) => obj[lang];

  return (
    <div className="min-h-screen bg-background">
      {/* Section 1 – Hero */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 via-[hsl(260,40%,65%/0.08)] to-accent/5" />
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

        <div className="container relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-6 px-4 py-1.5 text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">
              <Award className={`w-4 h-4 ${isRTL ? "ml-1" : "mr-1"}`} />
              {lang === "ar" ? "الشهادات والاعتمادات" : "Certifications & Licenses"}
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-[1.8]">
              {lang === "ar" ? "الشهادات المهنية للمعلمين" : "Professional Certifications for Teachers"}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4 leading-[1.8]">
              {lang === "ar"
                ? "اكتشف أهم الشهادات والاعتمادات العالمية التي تساعدك على تطوير مسارك المهني في التعليم."
                : "Discover the most important global certifications and accreditations to advance your teaching career."}
            </p>
            <p className="text-base text-muted-foreground max-w-xl mx-auto leading-[1.8]">
              {lang === "ar"
                ? "تساعد هذه الشهادات المعلمين على إثبات مهاراتهم في اللغة، تكنولوجيا التعليم، والتدريس الرقمي."
                : "These certifications help teachers prove their skills in language, educational technology, and digital teaching."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="container max-w-6xl mx-auto px-4 -mt-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-2xl border p-4 sm:p-6 shadow-sm"
        >
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground ${isRTL ? "right-3" : "left-3"}`} />
              <Input
                placeholder={lang === "ar" ? "ابحث عن شهادة..." : "Search certifications..."}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`${isRTL ? "pr-10" : "pl-10"} bg-background`}
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {filterTabs.map((tab) => (
                <Button
                  key={tab.key}
                  variant={filter === tab.key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(tab.key)}
                  className="gap-1.5"
                >
                  {tab.icon}
                  {t(tab.label)}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 2 – Language Certifications */}
      {(filter === "all" || filter === "language") && filtered.some((c) => c.category === "language") && (
        <CertSection
          title={lang === "ar" ? "شهادات اللغة الإنجليزية" : "English Language Certifications"}
          icon={<Globe className="w-5 h-5 text-primary" />}
          certs={filtered.filter((c) => c.category === "language")}
          lang={lang}
          isRTL={isRTL}
        />
      )}

      {/* Teaching Certifications (TEFL/TESOL) */}
      {(filter === "all" || filter === "teaching") && filtered.some((c) => c.category === "teaching") && (
        <>
          <CertSection
            title={lang === "ar" ? "شهادات تدريس اللغة الإنجليزية" : "English Teaching Certifications"}
            subtitle={lang === "ar"
              ? "اعتمادات دولية تساعد المعلمين على تدريس اللغة الإنجليزية للطلاب حول العالم."
              : "International accreditations helping teachers teach English to students worldwide."}
            icon={<GraduationCap className="w-5 h-5 text-primary" />}
            certs={filtered.filter((c) => c.category === "teaching")}
            lang={lang}
            isRTL={isRTL}
          />

        </>
      )}

      {/* Section 3 – Teaching Licenses */}
      {(filter === "all" || filter === "license") && filtered.some((c) => c.category === "license") && (
        <CertSection
          title={lang === "ar" ? "الرخص المهنية للمعلمين" : "Professional Teaching Licenses"}
          icon={<ShieldCheck className="w-5 h-5 text-primary" />}
          certs={filtered.filter((c) => c.category === "license")}
          lang={lang}
          isRTL={isRTL}
        />
      )}

      {/* Section 4 & 5 – Tech Certifications */}
      {(filter === "all" || filter === "tech") && filtered.some((c) => c.category === "tech") && (
        <CertSection
          title={lang === "ar" ? "شهادات تكنولوجيا التعليم" : "Educational Technology Certifications"}
          icon={<Monitor className="w-5 h-5 text-primary" />}
          certs={filtered.filter((c) => c.category === "tech")}
          lang={lang}
          isRTL={isRTL}
        />
      )}

      {/* Recruitment Exams Section */}
      {(filter === "all" || filter === "recruitment") && (
        <section className="container max-w-6xl mx-auto px-4 py-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <div className="flex items-center gap-2 mb-2">
              <ClipboardList className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">
                {lang === "ar" ? "امتحان تعيين المعلمين الجدد" : "Teacher Recruitment Exam (Egypt)"}
              </h2>
            </div>
            <p className="text-sm text-muted-foreground mb-8 leading-[1.8]">
              {lang === "ar"
                ? "اختبار مهني يستخدم لتقييم كفاءة المعلمين المتقدمين للوظائف التعليمية في المدارس الحكومية. يقيس الاختبار المعرفة التربوية، التخصص الأكاديمي، والمهارات المهنية اللازمة للتدريس."
                : "A professional exam used to evaluate the competency of teachers applying for teaching positions in public schools. It measures pedagogical knowledge, academic specialization, and the professional skills needed for teaching."}
            </p>

            {/* Exam Card */}
            <Card className="overflow-hidden border max-w-2xl">
              <div className="h-2 bg-gradient-to-r from-[hsl(145,50%,45%)] to-[hsl(210,55%,50%)]" />
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[hsl(145,50%,45%)] to-[hsl(210,55%,50%)] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <School className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground leading-snug">
                      {lang === "ar" ? "امتحان تعيين المعلمين" : "Teacher Recruitment Exam"}
                    </h3>
                    <Badge variant="outline" className="mt-1.5 text-[11px] px-2 py-0.5">
                      {lang === "ar" ? "اختبار توظيف" : "Recruitment Exam"}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-[1.9] mb-4">
                  {lang === "ar" ? "تقييم الكفاءة التربوية والتخصصية للمعلمين" : "Assessing pedagogical and specialization competency"}
                </p>
                <div className="space-y-2 mb-5">
                  {[
                    { ar: "أسئلة اختيار من متعدد (MCQ)", en: "Multiple Choice Questions (MCQ)" },
                    { ar: "حوالي ساعة واحدة", en: "Approx. 1 hour" },
                    { ar: "مراكز اختبار معتمدة", en: "Certified test centers" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      {item[lang]}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mb-1">
                  {lang === "ar" ? "الجهة المنظمة:" : "Organized by:"}
                </p>
                <p className="text-sm font-semibold text-foreground mb-5">
                  {lang === "ar" ? "الأكاديمية المهنية للمعلمين" : "Professional Academy for Teachers"}
                </p>

                <Button
                  className="w-full gap-2 h-11 text-sm font-semibold"
                  onClick={() => setShowExamDetails(!showExamDetails)}
                >
                  {lang === "ar" ? "تعرف على الاختبار" : "Learn About the Exam"}
                  {showExamDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </Button>

                {/* Expandable Details */}
                <AnimatePresence>
                  {showExamDetails && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 space-y-6">
                        {/* Knowledge Areas */}
                        <div>
                          <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                            <Brain className="w-5 h-5 text-primary" />
                            {lang === "ar" ? "المجالات المعرفية" : "Knowledge Areas"}
                          </h4>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {[
                              { icon: Users, label: { ar: "إدارة الصف", en: "Classroom Management" } },
                              { icon: Lightbulb, label: { ar: "طرق التدريس الحديثة", en: "Modern Teaching Methods" } },
                              { icon: Brain, label: { ar: "صعوبات التعلم", en: "Learning Difficulties" } },
                              { icon: BookOpen, label: { ar: "التخصص الأكاديمي", en: "Academic Specialization" } },
                              { icon: Languages, label: { ar: "اللغة العربية", en: "Arabic Language" } },
                              { icon: Globe, label: { ar: "اللغة الإنجليزية", en: "English Language" } },
                              { icon: Monitor, label: { ar: "الحاسب الآلي", en: "Computer Skills" } },
                              { icon: FileText, label: { ar: "المعلومات العامة", en: "General Knowledge" } },
                              { icon: MessageSquare, label: { ar: "مهارات التواصل والإلقاء", en: "Communication" } },
                            ].map((area, i) => {
                              const Icon = area.icon;
                              return (
                                <div key={i} className="flex items-center gap-2.5 bg-secondary/30 rounded-lg px-3 py-2">
                                  <Icon className="w-4 h-4 text-primary shrink-0" />
                                  <span className="text-xs font-medium text-foreground">{area.label[lang]}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Requirements */}
                        <div>
                          <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                            <UserCheck className="w-5 h-5 text-primary" />
                            {lang === "ar" ? "شروط التقديم" : "Requirements"}
                          </h4>
                          <div className="space-y-2">
                            {[
                              { ar: "المؤهل التربوي المناسب", en: "Appropriate educational qualification" },
                              { ar: "تقدير جامعي لا يقل عن مقبول", en: "University grade not less than Pass" },
                              { ar: "ألا يزيد العمر عن 40 سنة", en: "Age not exceeding 40 years" },
                              { ar: "بطاقة رقم قومي سارية", en: "Valid national ID card" },
                            ].map((req, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                <span className="text-sm text-foreground">{req[lang]}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Preparation */}
                        <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                          <h4 className="font-bold text-foreground mb-2 flex items-center gap-2 text-sm">
                            <PenTool className="w-4 h-4 text-primary" />
                            {lang === "ar" ? "كيف تستعد" : "How to Prepare"}
                          </h4>
                          <div className="space-y-1.5">
                            {[
                              { ar: "مراجعة أساسيات التربية", en: "Review pedagogy fundamentals" },
                              { ar: "دراسة مهارات إدارة الصف", en: "Study classroom management" },
                              { ar: "التدرب على أسئلة MCQ", en: "Practice MCQ questions" },
                              { ar: "مراجعة اللغة العربية والإنجليزية", en: "Review Arabic & English" },
                            ].map((tip, i) => (
                              <div key={i} className="flex items-start gap-1.5">
                                <Lightbulb className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                                <span className="text-xs text-foreground">{tip[lang]}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      )}

      {/* Section 6 – Preparation Courses */}
      <section className="container max-w-6xl mx-auto px-4 py-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">
              {lang === "ar" ? "دورات التحضير للشهادات" : "Certification Preparation Courses"}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {prepCourses.map((course, i) => (
              <motion.div key={i} variants={fadeUp} custom={i + 1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="group cursor-pointer border hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-5 flex flex-col items-center text-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${course.color}`}>
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">{t(course.title)}</h3>
                    <Button size="sm" className="mt-2 gap-1.5">
                      {lang === "ar" ? "ابدأ الاستعداد للشهادة" : "Start Preparing"}
                      <ArrowIcon className="w-3.5 h-3.5" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section 7 – Career Path */}
      <section className="container max-w-4xl mx-auto px-4 pb-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <div className="flex items-center gap-2 mb-8 justify-center">
            <Target className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">
              {lang === "ar" ? "مسارك المهني" : "Your Career Path"}
            </h2>
          </div>
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-0">
            {careerPath.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={i} variants={fadeUp} custom={i + 1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col sm:flex-row items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <p className="mt-2 font-semibold text-foreground text-sm text-center max-w-[120px]">{t(step.label)}</p>
                  </div>
                  {i < careerPath.length - 1 && (
                    <>
                      <div className="hidden sm:block w-12 h-0.5 bg-gradient-to-r from-primary/40 to-primary/10 mx-2 mt-[-1.25rem]" />
                      <div className="sm:hidden w-0.5 h-8 bg-gradient-to-b from-primary/40 to-primary/10 my-2" />
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

/* Reusable section component */
function CertSection({
  title,
  subtitle,
  icon,
  certs,
  lang,
  isRTL,
}: {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  certs: CertCard[];
  lang: "ar" | "en";
  isRTL: boolean;
}) {
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const t = (obj: { ar: string; en: string }) => obj[lang];

  return (
    <section className="container max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      </div>
      {subtitle && <p className="text-sm text-muted-foreground mb-6 leading-[1.8]">{subtitle}</p>}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={i}
          >
            <Card className="group overflow-hidden border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${cert.color}`} />
              <CardContent className="p-6 flex flex-col flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-white shrink-0 shadow-sm`}>
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground leading-snug">{t(cert.title)}</h3>
                    <Badge variant="outline" className="mt-1.5 text-[11px] px-2 py-0.5">
                      {cert.category === "language"
                        ? lang === "ar" ? "اختبار لغة" : "Language Test"
                        : cert.category === "teaching"
                        ? lang === "ar" ? "شهادة تدريس" : "Teaching Cert"
                        : cert.category === "license"
                        ? lang === "ar" ? "رخصة مهنية" : "Teaching License"
                        : cert.category === "recruitment"
                        ? lang === "ar" ? "اختبار توظيف" : "Recruitment Exam"
                        : lang === "ar" ? "شهادة تقنية" : "Tech Certification"}
                    </Badge>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-[1.9] mb-5 flex-1">{t(cert.description)}</p>

                {/* Skills */}
                {cert.skills && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skills.map((s, j) => (
                      <span key={j} className="text-[11px] px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                        {t(s)}
                      </span>
                    ))}
                  </div>
                )}

                {/* Levels */}
                {cert.levels && (
                  <div className="space-y-2 mb-5">
                    {cert.levels.map((l, j) => (
                      <div key={j} className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        {t(l)}
                      </div>
                    ))}
                  </div>
                )}

                <Button className="w-full gap-2 mt-auto h-11 text-sm font-semibold">
                  {t(cert.button)}
                  <ArrowIcon className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
