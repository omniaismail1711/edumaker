import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Clock, BarChart3, ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/i18n/translations";

import aiEducationImg from "@/assets/courses/ai-education.jpg";
import contentCreationImg from "@/assets/courses/content-creation.jpg";
import digitalToolsImg from "@/assets/courses/digital-tools.jpg";
import teachingSkillsImg from "@/assets/courses/teaching-skills.jpg";

type Course = {
  id: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  platform: string;
  platformLogo: string;
  thumbnail: string;
  level: { ar: string; en: string };
  duration: { ar: string; en: string };
  url: string;
};

type CourseRow = {
  title: { ar: string; en: string };
  courses: Course[];
};

const courseRows: CourseRow[] = [
  {
    title: { ar: "الذكاء الاصطناعي في التعليم", en: "AI in Education" },
    courses: [
      {
        id: "ai-1",
        title: { ar: "أساسيات الذكاء الاصطناعي للمعلمين", en: "AI Fundamentals for Educators" },
        description: { ar: "تعلم كيفية استخدام أدوات الذكاء الاصطناعي في الفصل الدراسي", en: "Learn how to use AI tools in the classroom" },
        platform: "Microsoft Learn",
        platformLogo: "M",
        thumbnail: aiEducationImg,
        level: { ar: "مبتدئ", en: "Beginner" },
        duration: { ar: "٤ ساعات", en: "4 hours" },
        url: "#",
      },
      {
        id: "ai-2",
        title: { ar: "ChatGPT في التخطيط التعليمي", en: "ChatGPT for Lesson Planning" },
        description: { ar: "استخدم ChatGPT لإنشاء خطط دراسية مبتكرة", en: "Use ChatGPT to create innovative lesson plans" },
        platform: "Google for Education",
        platformLogo: "G",
        thumbnail: aiEducationImg,
        level: { ar: "متوسط", en: "Intermediate" },
        duration: { ar: "٣ ساعات", en: "3 hours" },
        url: "#",
      },
      {
        id: "ai-3",
        title: { ar: "تقييم الطلاب بالذكاء الاصطناعي", en: "AI-Powered Student Assessment" },
        description: { ar: "أدوات ذكية لتقييم أداء الطلاب وتحليل النتائج", en: "Smart tools for assessing student performance and analyzing results" },
        platform: "Microsoft Learn",
        platformLogo: "M",
        thumbnail: aiEducationImg,
        level: { ar: "متقدم", en: "Advanced" },
        duration: { ar: "٥ ساعات", en: "5 hours" },
        url: "#",
      },
      {
        id: "ai-4",
        title: { ar: "Gemini للمعلمين", en: "Gemini for Teachers" },
        description: { ar: "اكتشف إمكانيات Google Gemini في التعليم", en: "Discover Google Gemini capabilities in education" },
        platform: "Google for Education",
        platformLogo: "G",
        thumbnail: aiEducationImg,
        level: { ar: "مبتدئ", en: "Beginner" },
        duration: { ar: "٢ ساعات", en: "2 hours" },
        url: "#",
      },
      {
        id: "ai-5",
        title: { ar: "بناء روبوت محادثة تعليمي", en: "Build an Educational Chatbot" },
        description: { ar: "أنشئ روبوت محادثة ذكي لمساعدة طلابك", en: "Create a smart chatbot to help your students" },
        platform: "Microsoft Learn",
        platformLogo: "M",
        thumbnail: aiEducationImg,
        level: { ar: "متقدم", en: "Advanced" },
        duration: { ar: "٦ ساعات", en: "6 hours" },
        url: "#",
      },
    ],
  },
  {
    title: { ar: "صناعة المحتوى التعليمي", en: "Content Creation for Teachers" },
    courses: [
      {
        id: "cc-1",
        title: { ar: "تصميم العروض التقديمية الاحترافية", en: "Professional Presentation Design" },
        description: { ar: "أنشئ عروضاً تقديمية جذابة لفصلك الدراسي", en: "Create engaging presentations for your classroom" },
        platform: "Canva",
        platformLogo: "C",
        thumbnail: contentCreationImg,
        level: { ar: "مبتدئ", en: "Beginner" },
        duration: { ar: "٣ ساعات", en: "3 hours" },
        url: "#",
      },
      {
        id: "cc-2",
        title: { ar: "تصميم المواد البصرية التعليمية", en: "Visual Learning Materials Design" },
        description: { ar: "صمم مواد بصرية تفاعلية لدروسك", en: "Design interactive visual materials for your lessons" },
        platform: "Adobe Education",
        platformLogo: "A",
        thumbnail: contentCreationImg,
        level: { ar: "متوسط", en: "Intermediate" },
        duration: { ar: "٤ ساعات", en: "4 hours" },
        url: "#",
      },
      {
        id: "cc-3",
        title: { ar: "إنشاء ملصقات تعليمية", en: "Educational Poster Creation" },
        description: { ar: "صمم ملصقات تعليمية احترافية بسهولة", en: "Design professional educational posters easily" },
        platform: "Canva",
        platformLogo: "C",
        thumbnail: contentCreationImg,
        level: { ar: "مبتدئ", en: "Beginner" },
        duration: { ar: "٢ ساعات", en: "2 hours" },
        url: "#",
      },
      {
        id: "cc-4",
        title: { ar: "فيديوهات تعليمية مبتكرة", en: "Innovative Educational Videos" },
        description: { ar: "أنشئ فيديوهات تعليمية بأدوات بسيطة", en: "Create educational videos with simple tools" },
        platform: "Adobe Education",
        platformLogo: "A",
        thumbnail: contentCreationImg,
        level: { ar: "متوسط", en: "Intermediate" },
        duration: { ar: "٥ ساعات", en: "5 hours" },
        url: "#",
      },
    ],
  },
  {
    title: { ar: "أدوات الفصل الرقمي", en: "Digital Classroom Tools" },
    courses: [
      {
        id: "dc-1",
        title: { ar: "إدارة الفصل بـ Google Classroom", en: "Classroom Management with Google Classroom" },
        description: { ar: "أتقن استخدام Google Classroom لإدارة فصلك", en: "Master Google Classroom for class management" },
        platform: "Google for Education",
        platformLogo: "G",
        thumbnail: digitalToolsImg,
        level: { ar: "مبتدئ", en: "Beginner" },
        duration: { ar: "٣ ساعات", en: "3 hours" },
        url: "#",
      },
      {
        id: "dc-2",
        title: { ar: "Apple Teacher: أدوات iPad في التعليم", en: "Apple Teacher: iPad Tools in Education" },
        description: { ar: "استخدم أجهزة iPad بفعالية في التدريس", en: "Use iPad effectively in teaching" },
        platform: "Apple Teacher",
        platformLogo: "🍎",
        thumbnail: digitalToolsImg,
        level: { ar: "متوسط", en: "Intermediate" },
        duration: { ar: "٤ ساعات", en: "4 hours" },
        url: "#",
      },
      {
        id: "dc-3",
        title: { ar: "التعلم التفاعلي عن بعد", en: "Interactive Remote Learning" },
        description: { ar: "أدوات وتقنيات للتعليم عن بعد الفعّال", en: "Tools and techniques for effective remote teaching" },
        platform: "Google for Education",
        platformLogo: "G",
        thumbnail: digitalToolsImg,
        level: { ar: "متوسط", en: "Intermediate" },
        duration: { ar: "٣ ساعات", en: "3 hours" },
        url: "#",
      },
      {
        id: "dc-4",
        title: { ar: "الواقع المعزز في الفصل الدراسي", en: "Augmented Reality in the Classroom" },
        description: { ar: "دمج تقنية الواقع المعزز في التعليم", en: "Integrate AR technology in education" },
        platform: "Apple Teacher",
        platformLogo: "🍎",
        thumbnail: digitalToolsImg,
        level: { ar: "متقدم", en: "Advanced" },
        duration: { ar: "٥ ساعات", en: "5 hours" },
        url: "#",
      },
    ],
  },
  {
    title: { ar: "مهارات التدريس والبيداغوجيا", en: "Teaching Skills & Pedagogy" },
    courses: [
      {
        id: "ts-1",
        title: { ar: "التعلم النشط: استراتيجيات عملية", en: "Active Learning: Practical Strategies" },
        description: { ar: "طبّق استراتيجيات التعلم النشط في فصلك", en: "Apply active learning strategies in your classroom" },
        platform: "Coursera",
        platformLogo: "📚",
        thumbnail: teachingSkillsImg,
        level: { ar: "متوسط", en: "Intermediate" },
        duration: { ar: "٦ ساعات", en: "6 hours" },
        url: "#",
      },
      {
        id: "ts-2",
        title: { ar: "التقييم التكويني الفعّال", en: "Effective Formative Assessment" },
        description: { ar: "تقنيات التقييم المستمر لتحسين التعلم", en: "Continuous assessment techniques to improve learning" },
        platform: "edX",
        platformLogo: "📖",
        thumbnail: teachingSkillsImg,
        level: { ar: "مبتدئ", en: "Beginner" },
        duration: { ar: "٤ ساعات", en: "4 hours" },
        url: "#",
      },
      {
        id: "ts-3",
        title: { ar: "التعليم المتمايز", en: "Differentiated Instruction" },
        description: { ar: "كيف تلبي احتياجات جميع الطلاب في فصلك", en: "How to meet all students' needs in your class" },
        platform: "FutureLearn",
        platformLogo: "🎓",
        thumbnail: teachingSkillsImg,
        level: { ar: "متوسط", en: "Intermediate" },
        duration: { ar: "٥ ساعات", en: "5 hours" },
        url: "#",
      },
      {
        id: "ts-4",
        title: { ar: "إدارة السلوك الصفي", en: "Classroom Behavior Management" },
        description: { ar: "استراتيجيات فعّالة لإدارة سلوك الطلاب", en: "Effective strategies for managing student behavior" },
        platform: "Coursera",
        platformLogo: "📚",
        thumbnail: teachingSkillsImg,
        level: { ar: "مبتدئ", en: "Beginner" },
        duration: { ar: "٣ ساعات", en: "3 hours" },
        url: "#",
      },
    ],
  },
];

function ScrollRow({ row, lang, isRTL }: { row: CourseRow; lang: "ar" | "en"; isRTL: boolean }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const levelColor = (level: string) => {
    if (level === "مبتدئ" || level === "Beginner") return "bg-green-500/10 text-green-600 border-green-500/20";
    if (level === "متوسط" || level === "Intermediate") return "bg-amber-500/10 text-amber-600 border-amber-500/20";
    return "bg-red-500/10 text-red-600 border-red-500/20";
  };

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-5 px-4">
        <h3 className="text-xl md:text-2xl font-bold text-foreground">{row.title[lang]}</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="h-9 w-9 rounded-full" onClick={() => scroll(isRTL ? "right" : "left")}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="h-9 w-9 rounded-full" onClick={() => scroll(isRTL ? "left" : "right")}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        {row.courses.map((course) => (
          <motion.div
            key={course.id}
            className="flex-shrink-0 w-[280px] md:w-[300px] rounded-xl border border-border bg-card overflow-hidden cursor-pointer group relative"
            onMouseEnter={() => setHoveredId(course.id)}
            onMouseLeave={() => setHoveredId(null)}
            whileHover={{ scale: 1.03, zIndex: 10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Thumbnail */}
            <div className="relative h-40 overflow-hidden">
              <img
                src={course.thumbnail}
                alt={course.title[lang]}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {/* Platform badge */}
              <div className="absolute top-3 start-3">
                <Badge className="bg-background/90 text-foreground border-border text-xs backdrop-blur-sm">
                  <span className={`font-bold ${isRTL ? "ml-1" : "mr-1"}`}>{course.platformLogo}</span>
                  {course.platform}
                </Badge>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h4 className="font-bold text-foreground text-sm leading-snug mb-2 line-clamp-2">
                {course.title[lang]}
              </h4>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Badge variant="outline" className={`text-[10px] px-2 py-0 ${levelColor(course.level[lang])}`}>
                  <BarChart3 className="w-3 h-3 me-1" />
                  {course.level[lang]}
                </Badge>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {course.duration[lang]}
                </span>
              </div>
            </div>

            {/* Hover overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredId === course.id ? 1 : 0 }}
              className="absolute inset-0 bg-card/95 backdrop-blur-sm flex flex-col justify-end p-5 pointer-events-none"
              style={{ pointerEvents: hoveredId === course.id ? "auto" : "none" }}
            >
              <Badge className="w-fit mb-3 bg-primary/10 text-primary border-primary/20 text-xs">
                {course.platform}
              </Badge>
              <h4 className="font-bold text-foreground text-base mb-2">{course.title[lang]}</h4>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{course.description[lang]}</p>
              <div className="flex items-center gap-2 mb-4 text-xs text-muted-foreground">
                <Badge variant="outline" className={`text-[10px] px-2 py-0 ${levelColor(course.level[lang])}`}>
                  {course.level[lang]}
                </Badge>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {course.duration[lang]}
                </span>
              </div>
              <Button size="sm" className="w-full rounded-lg">
                <ExternalLink className="w-4 h-4 me-1" />
                {lang === "ar" ? "ابدأ التعلم" : "Start Learning"}
              </Button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function RecommendedCourses() {
  const { lang, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <>
      {/* Section 4 – Recommended Courses */}
      <section className="py-20 bg-secondary/30">
        <div className="container max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 px-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {lang === "ar" ? "دورات موصى بها للمعلمين" : "Recommended Courses for Educators"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {lang === "ar"
                ? "اكتشف أفضل الدورات التدريبية من منصات عالمية مصممة خصيصاً للمعلمين"
                : "Discover the best training courses from global platforms designed specifically for educators"}
            </p>
          </motion.div>

          {courseRows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ScrollRow row={row} lang={lang} isRTL={isRTL} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 5 – Explore All */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {lang === "ar" ? "هل تريد المزيد؟" : "Want More?"}
            </h2>
            <p className="text-muted-foreground mb-8">
              {lang === "ar"
                ? "تصفح مكتبة الدورات الكاملة واكتشف المزيد من فرص التعلم"
                : "Browse the full course library and discover more learning opportunities"}
            </p>
            <Button asChild size="lg" className="text-base px-10 py-6 rounded-xl">
              <Link to="/courses-library">
                {lang === "ar" ? "استكشف جميع الدورات" : "Explore All Courses"}
                <ArrowIcon className={`w-5 h-5 ${isRTL ? "mr-2" : "ml-2"}`} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
