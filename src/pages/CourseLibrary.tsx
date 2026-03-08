import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, BookOpen, Clock, Users, Star, ChevronDown, GraduationCap, Cpu, Globe, PenTool, BarChart3, Microscope, Calculator, Languages, Monitor } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

interface CourseData {
  id: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  category: string;
  categoryEn: string;
  level: string;
  levelEn: string;
  subject: string;
  subjectEn: string;
  duration: string;
  durationEn: string;
  students: number;
  rating: number;
  instructor: string;
  instructorEn: string;
  icon: React.ElementType;
  color: string;
  tags: string[];
  tagsEn: string[];
  free: boolean;
}

const mockCourses: CourseData[] = [
  {
    id: 1,
    title: "أساسيات الذكاء الاصطناعي للمعلمين",
    titleEn: "AI Fundamentals for Teachers",
    description: "تعلم كيف تستخدم أدوات الذكاء الاصطناعي مثل ChatGPT وGemini في التخطيط والتقييم",
    descriptionEn: "Learn how to use AI tools like ChatGPT and Gemini for planning and assessment",
    category: "الذكاء الاصطناعي",
    categoryEn: "Artificial Intelligence",
    level: "مبتدئ",
    levelEn: "Beginner",
    subject: "تكنولوجيا التعليم",
    subjectEn: "EdTech",
    duration: "8 ساعات",
    durationEn: "8 hours",
    students: 2340,
    rating: 4.8,
    instructor: "د. أحمد محمد",
    instructorEn: "Dr. Ahmed Mohammed",
    icon: Cpu,
    color: "from-primary/20 to-primary/5",
    tags: ["ChatGPT", "Gemini", "تخطيط الدروس"],
    tagsEn: ["ChatGPT", "Gemini", "Lesson Planning"],
    free: true,
  },
  {
    id: 2,
    title: "Google Classroom من البداية للاحتراف",
    titleEn: "Google Classroom: Beginner to Pro",
    description: "إدارة الفصول الافتراضية وتنظيم المهام والواجبات باستخدام Google Classroom",
    descriptionEn: "Manage virtual classrooms and organize tasks using Google Classroom",
    category: "أدوات رقمية",
    categoryEn: "Digital Tools",
    level: "مبتدئ",
    levelEn: "Beginner",
    subject: "حاسب آلي",
    subjectEn: "Computer Science",
    duration: "6 ساعات",
    durationEn: "6 hours",
    students: 3120,
    rating: 4.7,
    instructor: "أ. سارة العلي",
    instructorEn: "Ms. Sara Al-Ali",
    icon: Monitor,
    color: "from-[hsl(140,40%,50%/0.2)] to-[hsl(140,40%,50%/0.05)]",
    tags: ["Google", "إدارة الصفوف", "التعلم عن بعد"],
    tagsEn: ["Google", "Classroom Management", "Remote Learning"],
    free: true,
  },
  {
    id: 3,
    title: "تصميم المحتوى التعليمي بالـ Canva",
    titleEn: "Educational Content Design with Canva",
    description: "إنشاء عروض تقديمية وانفوجرافيك وأوراق عمل تفاعلية بتصاميم احترافية",
    descriptionEn: "Create presentations, infographics, and interactive worksheets with professional designs",
    category: "أدوات رقمية",
    categoryEn: "Digital Tools",
    level: "متوسط",
    levelEn: "Intermediate",
    subject: "تكنولوجيا التعليم",
    subjectEn: "EdTech",
    duration: "5 ساعات",
    durationEn: "5 hours",
    students: 1870,
    rating: 4.9,
    instructor: "أ. نورة القحطاني",
    instructorEn: "Ms. Noura Al-Qahtani",
    icon: PenTool,
    color: "from-accent/20 to-accent/5",
    tags: ["Canva", "تصميم", "انفوجرافيك"],
    tagsEn: ["Canva", "Design", "Infographics"],
    free: false,
  },
  {
    id: 4,
    title: "استراتيجيات التعلم النشط",
    titleEn: "Active Learning Strategies",
    description: "تطبيق أحدث استراتيجيات التعلم النشط في الفصول الدراسية لزيادة تفاعل الطلاب",
    descriptionEn: "Apply modern active learning strategies in classrooms to boost student engagement",
    category: "مهارات التدريس",
    categoryEn: "Teaching Skills",
    level: "متوسط",
    levelEn: "Intermediate",
    subject: "مهارات تربوية",
    subjectEn: "Pedagogy",
    duration: "10 ساعات",
    durationEn: "10 hours",
    students: 4210,
    rating: 4.6,
    instructor: "د. خالد المنصور",
    instructorEn: "Dr. Khalid Al-Mansour",
    icon: GraduationCap,
    color: "from-[hsl(45,70%,55%/0.2)] to-[hsl(45,70%,55%/0.05)]",
    tags: ["تعلم نشط", "تفاعل", "إدارة الصف"],
    tagsEn: ["Active Learning", "Engagement", "Classroom Management"],
    free: true,
  },
  {
    id: 5,
    title: "تدريس الرياضيات باستخدام التكنولوجيا",
    titleEn: "Teaching Mathematics with Technology",
    description: "دمج الأدوات الرقمية مثل GeoGebra وDesmos في تدريس الرياضيات",
    descriptionEn: "Integrate digital tools like GeoGebra and Desmos into math teaching",
    category: "أدوات رقمية",
    categoryEn: "Digital Tools",
    level: "متوسط",
    levelEn: "Intermediate",
    subject: "رياضيات",
    subjectEn: "Mathematics",
    duration: "7 ساعات",
    durationEn: "7 hours",
    students: 1560,
    rating: 4.5,
    instructor: "أ. فهد الحربي",
    instructorEn: "Mr. Fahd Al-Harbi",
    icon: Calculator,
    color: "from-[hsl(200,50%,50%/0.2)] to-[hsl(200,50%,50%/0.05)]",
    tags: ["GeoGebra", "Desmos", "رياضيات"],
    tagsEn: ["GeoGebra", "Desmos", "Mathematics"],
    free: false,
  },
  {
    id: 6,
    title: "الذكاء الاصطناعي التوليدي في إنتاج المحتوى",
    titleEn: "Generative AI for Content Production",
    description: "استخدام Midjourney وDALL-E وأدوات الكتابة بالذكاء الاصطناعي لإنتاج محتوى تعليمي",
    descriptionEn: "Use Midjourney, DALL-E, and AI writing tools for educational content",
    category: "الذكاء الاصطناعي",
    categoryEn: "Artificial Intelligence",
    level: "متقدم",
    levelEn: "Advanced",
    subject: "تكنولوجيا التعليم",
    subjectEn: "EdTech",
    duration: "12 ساعات",
    durationEn: "12 hours",
    students: 980,
    rating: 4.9,
    instructor: "د. ريم البكري",
    instructorEn: "Dr. Reem Al-Bakri",
    icon: Cpu,
    color: "from-[hsl(280,40%,55%/0.2)] to-[hsl(280,40%,55%/0.05)]",
    tags: ["Midjourney", "DALL-E", "إنتاج محتوى"],
    tagsEn: ["Midjourney", "DALL-E", "Content Production"],
    free: false,
  },
  {
    id: 7,
    title: "تدريس العلوم بمنهجية STEM",
    titleEn: "Teaching Science with STEM Methodology",
    description: "تطبيق منهجية STEM في تدريس العلوم مع مشاريع عملية وتجارب تفاعلية",
    descriptionEn: "Apply STEM methodology in science with hands-on projects and experiments",
    category: "مهارات التدريس",
    categoryEn: "Teaching Skills",
    level: "متقدم",
    levelEn: "Advanced",
    subject: "علوم",
    subjectEn: "Science",
    duration: "15 ساعات",
    durationEn: "15 hours",
    students: 2100,
    rating: 4.7,
    instructor: "د. محمد الحربي",
    instructorEn: "Dr. Mohammed Al-Harbi",
    icon: Microscope,
    color: "from-[hsl(160,45%,45%/0.2)] to-[hsl(160,45%,45%/0.05)]",
    tags: ["STEM", "مشاريع", "تجارب علمية"],
    tagsEn: ["STEM", "Projects", "Scientific Experiments"],
    free: true,
  },
  {
    id: 8,
    title: "تعليم اللغة العربية رقميًا",
    titleEn: "Teaching Arabic Language Digitally",
    description: "أدوات وتطبيقات حديثة لتدريس اللغة العربية بطرق تفاعلية ومبتكرة",
    descriptionEn: "Modern tools and apps for teaching Arabic with interactive methods",
    category: "أدوات رقمية",
    categoryEn: "Digital Tools",
    level: "مبتدئ",
    levelEn: "Beginner",
    subject: "لغة عربية",
    subjectEn: "Arabic Language",
    duration: "6 ساعات",
    durationEn: "6 hours",
    students: 1340,
    rating: 4.4,
    instructor: "أ. عبدالله المنصور",
    instructorEn: "Mr. Abdullah Al-Mansour",
    icon: Languages,
    color: "from-[hsl(30,60%,55%/0.2)] to-[hsl(30,60%,55%/0.05)]",
    tags: ["لغة عربية", "تعليم رقمي", "تفاعلي"],
    tagsEn: ["Arabic", "Digital Teaching", "Interactive"],
    free: true,
  },
  {
    id: 9,
    title: "تحليل بيانات الطلاب واتخاذ القرار",
    titleEn: "Student Data Analytics & Decision Making",
    description: "تعلم تحليل نتائج الطلاب واستخدام البيانات لتحسين العملية التعليمية",
    descriptionEn: "Analyze student results and use data to improve education quality",
    category: "الذكاء الاصطناعي",
    categoryEn: "Artificial Intelligence",
    level: "متقدم",
    levelEn: "Advanced",
    subject: "تكنولوجيا التعليم",
    subjectEn: "EdTech",
    duration: "9 ساعات",
    durationEn: "9 hours",
    students: 870,
    rating: 4.6,
    instructor: "د. فاطمة أحمد",
    instructorEn: "Dr. Fatima Ahmed",
    icon: BarChart3,
    color: "from-[hsl(220,50%,55%/0.2)] to-[hsl(220,50%,55%/0.05)]",
    tags: ["تحليل بيانات", "Excel", "تقييم"],
    tagsEn: ["Data Analysis", "Excel", "Assessment"],
    free: false,
  },
  {
    id: 10,
    title: "التعليم عن بعد: من التخطيط للتنفيذ",
    titleEn: "Remote Teaching: From Planning to Execution",
    description: "إتقان أدوات التعليم عن بعد وإدارة الفصول الافتراضية بفعالية",
    descriptionEn: "Master remote teaching tools and manage virtual classrooms effectively",
    category: "مهارات التدريس",
    categoryEn: "Teaching Skills",
    level: "مبتدئ",
    levelEn: "Beginner",
    subject: "مهارات تربوية",
    subjectEn: "Pedagogy",
    duration: "8 ساعات",
    durationEn: "8 hours",
    students: 3450,
    rating: 4.8,
    instructor: "أ. سلمى الرشيد",
    instructorEn: "Ms. Salma Al-Rasheed",
    icon: Globe,
    color: "from-[hsl(190,45%,50%/0.2)] to-[hsl(190,45%,50%/0.05)]",
    tags: ["Zoom", "Teams", "فصول افتراضية"],
    tagsEn: ["Zoom", "Teams", "Virtual Classrooms"],
    free: true,
  },
  {
    id: 11,
    title: "تدريس اللغة الإنجليزية بالألعاب التعليمية",
    titleEn: "Teaching English with Educational Games",
    description: "استخدام Kahoot وQuizlet وWordwall لتدريس الإنجليزية بشكل ممتع",
    descriptionEn: "Use Kahoot, Quizlet, and Wordwall for fun English teaching",
    category: "أدوات رقمية",
    categoryEn: "Digital Tools",
    level: "مبتدئ",
    levelEn: "Beginner",
    subject: "لغة إنجليزية",
    subjectEn: "English Language",
    duration: "5 ساعات",
    durationEn: "5 hours",
    students: 2780,
    rating: 4.7,
    instructor: "أ. فاطمة العلي",
    instructorEn: "Ms. Fatima Al-Ali",
    icon: Languages,
    color: "from-[hsl(260,40%,55%/0.2)] to-[hsl(260,40%,55%/0.05)]",
    tags: ["Kahoot", "Quizlet", "ألعاب تعليمية"],
    tagsEn: ["Kahoot", "Quizlet", "Educational Games"],
    free: true,
  },
  {
    id: 12,
    title: "إدارة الصف الذكي بالذكاء الاصطناعي",
    titleEn: "Smart Classroom Management with AI",
    description: "استخدام أدوات AI لإدارة سلوك الطلاب وتتبع الحضور والأداء",
    descriptionEn: "Use AI tools for behavior management, attendance, and performance tracking",
    category: "الذكاء الاصطناعي",
    categoryEn: "Artificial Intelligence",
    level: "متوسط",
    levelEn: "Intermediate",
    subject: "مهارات تربوية",
    subjectEn: "Pedagogy",
    duration: "7 ساعات",
    durationEn: "7 hours",
    students: 1120,
    rating: 4.5,
    instructor: "د. عمر السعيد",
    instructorEn: "Dr. Omar Al-Saeed",
    icon: Cpu,
    color: "from-primary/20 to-primary/5",
    tags: ["AI", "إدارة الصف", "تتبع الأداء"],
    tagsEn: ["AI", "Classroom Management", "Performance Tracking"],
    free: false,
  },
];

const categories = [
  { ar: "الكل", en: "All", value: "all" },
  { ar: "الذكاء الاصطناعي", en: "Artificial Intelligence", value: "ai" },
  { ar: "أدوات رقمية", en: "Digital Tools", value: "digital" },
  { ar: "مهارات التدريس", en: "Teaching Skills", value: "teaching" },
];

const levels = [
  { ar: "الكل", en: "All", value: "all" },
  { ar: "مبتدئ", en: "Beginner", value: "beginner" },
  { ar: "متوسط", en: "Intermediate", value: "intermediate" },
  { ar: "متقدم", en: "Advanced", value: "advanced" },
];

const subjects = [
  { ar: "الكل", en: "All", value: "all" },
  { ar: "تكنولوجيا التعليم", en: "EdTech", value: "edtech" },
  { ar: "رياضيات", en: "Mathematics", value: "math" },
  { ar: "علوم", en: "Science", value: "science" },
  { ar: "لغة عربية", en: "Arabic Language", value: "arabic" },
  { ar: "لغة إنجليزية", en: "English Language", value: "english" },
  { ar: "حاسب آلي", en: "Computer Science", value: "cs" },
  { ar: "مهارات تربوية", en: "Pedagogy", value: "pedagogy" },
];

const levelMap: Record<string, string> = {
  beginner: "مبتدئ",
  intermediate: "متوسط",
  advanced: "متقدم",
};

const categoryMap: Record<string, string> = {
  ai: "الذكاء الاصطناعي",
  digital: "أدوات رقمية",
  teaching: "مهارات التدريس",
};

const subjectMap: Record<string, string> = {
  edtech: "تكنولوجيا التعليم",
  math: "رياضيات",
  science: "علوم",
  arabic: "لغة عربية",
  english: "لغة إنجليزية",
  cs: "حاسب آلي",
  pedagogy: "مهارات تربوية",
};

export default function CourseLibrary() {
  const { lang, isRTL } = useLanguage();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [level, setLevel] = useState("all");
  const [subject, setSubject] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return mockCourses.filter((c) => {
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.titleEn.toLowerCase().includes(q) ||
        c.tags.some((t) => t.toLowerCase().includes(q)) ||
        c.tagsEn.some((t) => t.toLowerCase().includes(q));
      const matchCat = category === "all" || c.category === categoryMap[category];
      const matchLevel = level === "all" || c.level === levelMap[level];
      const matchSubject = subject === "all" || c.subject === subjectMap[subject];
      return matchSearch && matchCat && matchLevel && matchSubject;
    });
  }, [search, category, level, subject]);

  const totalStudents = mockCourses.reduce((a, c) => a + c.students, 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/8 via-accent/5 to-transparent" />
        <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent/8 blur-3xl" />

        <div className="container relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge className="mb-4 px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
              <BookOpen className="w-4 h-4 ml-1" />
              {lang === "ar" ? `${mockCourses.length} دورة متاحة` : `${mockCourses.length} courses available`}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {lang === "ar" ? "مكتبة الدورات التدريبية" : "Course Library"}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              {lang === "ar"
                ? "اكتشف دورات متخصصة في الذكاء الاصطناعي والأدوات الرقمية ومهارات التدريس الحديثة"
                : "Discover specialized courses in AI, digital tools, and modern teaching skills"}
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="font-semibold text-foreground">{mockCourses.length}</span>
                {lang === "ar" ? "دورة" : "courses"}
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-primary" />
                <span className="font-semibold text-foreground">{totalStudents.toLocaleString()}</span>
                {lang === "ar" ? "متدرب" : "students"}
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-[hsl(var(--badge-gold))]" />
                <span className="font-semibold text-foreground">4.7</span>
                {lang === "ar" ? "متوسط التقييم" : "avg rating"}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-6 border-b bg-card/50 sticky top-16 z-40 backdrop-blur-sm">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground ${isRTL ? "right-3" : "left-3"}`} />
              <Input
                placeholder={lang === "ar" ? "ابحث عن دورة، أداة، أو موضوع..." : "Search for a course, tool, or topic..."}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`${isRTL ? "pr-10" : "pl-10"} h-11`}
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="h-11 gap-2"
            >
              <Filter className="w-4 h-4" />
              {lang === "ar" ? "فلترة" : "Filters"}
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </Button>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                      {lang === "ar" ? "الفئة" : "Category"}
                    </label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger className="h-10">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((c) => (
                          <SelectItem key={c.value} value={c.value}>
                            {lang === "ar" ? c.ar : c.en}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                      {lang === "ar" ? "المستوى" : "Level"}
                    </label>
                    <Select value={level} onValueChange={setLevel}>
                      <SelectTrigger className="h-10">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {levels.map((l) => (
                          <SelectItem key={l.value} value={l.value}>
                            {lang === "ar" ? l.ar : l.en}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                      {lang === "ar" ? "المادة" : "Subject"}
                    </label>
                    <Select value={subject} onValueChange={setSubject}>
                      <SelectTrigger className="h-10">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects.map((s) => (
                          <SelectItem key={s.value} value={s.value}>
                            {lang === "ar" ? s.ar : s.en}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Results */}
      <section className="py-10">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">
              {lang === "ar" ? `عرض ${filtered.length} دورة` : `Showing ${filtered.length} courses`}
            </p>
            {(category !== "all" || level !== "all" || subject !== "all" || search) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => { setCategory("all"); setLevel("all"); setSubject("all"); setSearch(""); }}
                className="text-xs"
              >
                {lang === "ar" ? "مسح الفلاتر" : "Clear filters"}
              </Button>
            )}
          </div>

          {filtered.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <BookOpen className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {lang === "ar" ? "لا توجد دورات مطابقة" : "No matching courses"}
              </h3>
              <p className="text-muted-foreground text-sm">
                {lang === "ar" ? "جرب تغيير معايير البحث أو الفلاتر" : "Try adjusting your search or filters"}
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <AnimatePresence mode="popLayout">
                {filtered.map((course, i) => (
                  <motion.div
                    key={course.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: i * 0.04 } }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <Card className="card-elevated h-full group hover:shadow-md transition-all duration-300 overflow-hidden">
                      {/* Color header */}
                      <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                      <CardContent className="p-5 flex flex-col h-full">
                        {/* Icon + Category + Level */}
                        <div className="flex items-start justify-between mb-3">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                            <course.icon className="w-6 h-6 text-foreground/70" />
                          </div>
                          <div className="flex gap-1.5">
                            <Badge variant="secondary" className="text-[10px]">
                              {lang === "ar" ? course.level : course.levelEn}
                            </Badge>
                            {course.free && (
                              <Badge className="text-[10px] bg-[hsl(140,45%,50%/0.15)] text-[hsl(140,45%,40%)] border-[hsl(140,45%,50%/0.3)]">
                                {lang === "ar" ? "مجاني" : "Free"}
                              </Badge>
                            )}
                          </div>
                        </div>

                        {/* Title & Description */}
                        <h3 className="font-bold text-foreground text-sm leading-snug mb-2 group-hover:text-primary transition-colors">
                          {lang === "ar" ? course.title : course.titleEn}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-2">
                          {lang === "ar" ? course.description : course.descriptionEn}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {(lang === "ar" ? course.tags : course.tagsEn).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-[10px] font-normal">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Meta */}
                        <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-3">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {lang === "ar" ? course.duration : course.durationEn}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-3.5 h-3.5" />
                              {course.students.toLocaleString()}
                            </span>
                          </div>
                          <span className="flex items-center gap-0.5 text-[hsl(var(--badge-gold))] font-semibold">
                            <Star className="w-3.5 h-3.5 fill-current" />
                            {course.rating}
                          </span>
                        </div>

                        {/* Instructor */}
                        <div className="mt-3 text-xs text-muted-foreground">
                          {lang === "ar" ? course.instructor : course.instructorEn}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
