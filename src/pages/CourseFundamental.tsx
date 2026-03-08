import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Clock,
  BookOpen,
  Award,
  BarChart3,
  Sparkles,
  Play,
  CheckCircle2,
  Lightbulb,
  PenTool,
  Bot,
  Layers,
  ClipboardCheck,
  GraduationCap,
  Users,
  Wrench,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const courseBadges = [
  { icon: Clock, label: "٤ أسابيع", sub: "مدة البرنامج" },
  { icon: BookOpen, label: "٥ وحدات", sub: "عدد الوحدات" },
  { icon: Award, label: "شهادة معتمدة", sub: "عند الإتمام" },
  { icon: BarChart3, label: "مبتدئ ← متوسط", sub: "مستوى الدورة" },
];

const aiTools = [
  { name: "ChatGPT", color: "from-[hsl(170,60%,45%)] to-[hsl(170,50%,55%)]" },
  { name: "Gemini", color: "from-[hsl(210,70%,55%)] to-[hsl(230,60%,60%)]" },
  { name: "Grok", color: "from-[hsl(0,0%,20%)] to-[hsl(0,0%,35%)]" },
  { name: "Suno", color: "from-[hsl(280,50%,55%)] to-[hsl(300,45%,60%)]" },
  { name: "NotebookLM", color: "from-[hsl(40,70%,50%)] to-[hsl(30,65%,55%)]" },
];

const module0Topics = [
  "ما هو الذكاء الاصطناعي؟",
  "كيف يعمل الذكاء الاصطناعي؟",
  "الذكاء الاصطناعي في حياتنا اليومية",
  "الذكاء الاصطناعي مقابل الذكاء الاصطناعي التوليدي",
  "وكلاء الذكاء الاصطناعي مقابل المتصفحات",
  "مقدمة في كتابة الأوامر (Prompting)",
  "أمثلة على الذكاء الاصطناعي في التعليم",
  "الخرافات الشائعة حول الذكاء الاصطناعي",
  "أساسيات خصوصية البيانات",
];

const modules = [
  {
    id: 1,
    icon: PenTool,
    title: "مهارات كتابة الأوامر للمعلمين",
    subtitle: "Prompting Skills for Educators",
    tools: ["ChatGPT"],
    topics: [
      "كيف تؤثر الأوامر على نتائج الذكاء الاصطناعي",
      "Zero-shot Prompting",
      "Few-shot Prompting",
      "الأوامر الضعيفة مقابل القوية",
      "أوامر خطط الدروس",
      "أوامر أوراق العمل",
      "أوامر الاختبارات",
      "أوامر العروض التقديمية",
      "أوامر الصور التعليمية",
      "أوامر الفيديو التعليمي",
      "أوامر أغلفة الكتيبات",
      "أوامر السيرة الذاتية",
      "استكشاف GPTs المخصصة",
    ],
  },
  {
    id: 2,
    icon: Layers,
    title: "إنشاء محتوى تعليمي بالذكاء الاصطناعي",
    subtitle: "Creating Educational Media with AI",
    tools: ["Grok", "Suno"],
    topics: [
      "إنشاء شهادات تعليمية",
      "إنشاء أوراق عمل",
      "إنشاء ملصقات تعليمية",
      "إنشاء إنفوجرافيك",
      "إنشاء قصص مصورة تعليمية",
      "إنشاء فيديوهات تعليمية",
      "إنشاء أغانٍ تعليمية",
    ],
  },
  {
    id: 3,
    icon: Bot,
    title: "وكلاء الذكاء الاصطناعي لإنتاجية المعلم",
    subtitle: "AI Agents for Teacher Productivity",
    tools: ["NotebookLM"],
    topics: [
      "إنشاء خطط دروس باستخدام وكلاء AI",
      "إنشاء مواد تعليمية",
      "إنشاء إنفوجرافيك وملصقات",
      "إنشاء كتب قصصية",
      "إنشاء اختبارات تفاعلية",
      "إنشاء شهادات",
      "إنشاء عروض تقديمية",
      "إنشاء سرد وصوت تعليمي",
      "إنشاء ألعاب صفية",
      "مقدمة في Vibe Coding لمواقع تعليمية",
    ],
  },
  {
    id: 4,
    icon: ClipboardCheck,
    title: "الذكاء الاصطناعي للتقييم والتعلم التفاعلي",
    subtitle: "AI for Assessment and Interactive Learning",
    tools: ["EdCafe", "ClassPoint", "Waygrounds"],
    topics: [
      "إنشاء اختبارات بالذكاء الاصطناعي",
      "تصميم تقييمات تكوينية",
      "إنشاء تقييمات متمايزة",
      "بناء أنشطة صفية تفاعلية",
      "إنشاء ألعاب تعليمية",
      "تحليل استجابات الطلاب بالذكاء الاصطناعي",
    ],
  },
];

const outcomes = [
  { icon: Award, title: "شهادة إتمام الدورة", desc: "شهادة معتمدة تثبت إتقانك لأدوات الذكاء الاصطناعي في التعليم" },
  { icon: Briefcase, title: "مشاريع تطبيقية", desc: "مشاريع حقيقية باستخدام أدوات الذكاء الاصطناعي جاهزة للتطبيق في صفك" },
  { icon: Wrench, title: "أدوات تعليمية جاهزة", desc: "قوالب وأدوات تعليمية جاهزة للاستخدام الفوري في التدريس" },
  { icon: Users, title: "مجتمع مهني", desc: "انضم لمجتمع من المعلمين المبتكرين لتبادل الخبرات والأفكار" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function CourseFundamental() {
  return (
    <div dir="rtl" className="min-h-screen bg-background font-cairo">
      {/* Breadcrumb */}
      <div className="container max-w-5xl mx-auto px-4 pt-6">
        <Link to="/course" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowRight className="w-4 h-4" />
          العودة إلى البرنامج
        </Link>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 via-[hsl(260,40%,65%/0.08)] to-accent/5" />
        <div className="container relative z-10 max-w-5xl mx-auto text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-6 px-4 py-1.5 text-sm bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-4 h-4 ml-1" />
              المسار الأساسي
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              الذكاء الاصطناعي للمعلمين
            </h1>
            <p className="text-xl text-primary font-semibold mb-6">من الأساسيات إلى إنشاء محتوى تعليمي ذكي</p>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              برنامج تدريبي عملي يساعد المعلمين على استخدام أدوات الذكاء الاصطناعي في التخطيط للدروس، إنشاء المحتوى التعليمي، وبناء تقييمات تفاعلية.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-base px-8 py-6 rounded-xl shadow-lg">سجّل الآن</Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6 rounded-xl border-primary/30 hover:bg-primary/5">
                <Play className="w-5 h-5 ml-2" />
                احجز مقعدك في الويبنار المجاني
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
              {courseBadges.map((b, i) => (
                <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" animate="visible">
                  <Card className="card-elevated border-border/50 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-4 text-center">
                      <b.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="font-bold text-foreground text-sm">{b.label}</p>
                      <p className="text-muted-foreground text-xs">{b.sub}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {aiTools.map((tool, i) => (
                <motion.div key={tool.name} custom={i} variants={fadeUp} initial="hidden" animate="visible"
                  className={`bg-gradient-to-r ${tool.color} text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md`}>
                  {tool.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 bg-secondary/30">
        <div className="container max-w-5xl mx-auto px-4">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">هيكل البرنامج</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">رحلة تعليمية منظمة من المقدمة المجانية إلى التطبيق العملي المتقدم</p>
          </motion.div>

          {/* Module 0 */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-12">
            <Card className="card-elevated border-primary/20 overflow-hidden">
              <div className="bg-gradient-to-l from-primary/10 to-transparent p-1" />
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-foreground">الجلسة الأولى – ويبنار مجاني</h3>
                      <Badge className="bg-green-500/10 text-green-600 border-green-500/20">جلسة مجانية</Badge>
                    </div>
                    <p className="text-primary font-semibold mb-4">الوحدة ٠ – مقدمة في الذكاء الاصطناعي للمعلمين</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
                      {module0Topics.map((topic, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="secondary">ChatGPT</Badge>
                      <Badge variant="secondary">Google Gemini</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Paid Modules */}
          <Accordion type="multiple" className="space-y-4">
            {modules.map((mod, idx) => (
              <motion.div key={mod.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <AccordionItem value={`module-${mod.id}`} className="border rounded-xl card-elevated bg-card overflow-hidden">
                  <AccordionTrigger className="px-6 py-5 hover:no-underline">
                    <div className="flex items-center gap-4 text-right">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <mod.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">الوحدة {mod.id} – {mod.title}</h3>
                        <p className="text-sm text-muted-foreground">{mod.subtitle}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 pt-2">
                      {mod.topics.map((topic, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {mod.tools.map((t) => <Badge key={t} variant="secondary">{t}</Badge>)}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20">
        <div className="container max-w-5xl mx-auto px-4">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">ماذا ستكتسب من البرنامج؟</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((o, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="card-elevated h-full border-border/50 bg-card/80 backdrop-blur-sm text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <o.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{o.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary via-[hsl(230,50%,55%)] to-[hsl(260,40%,50%)]" />
        <div className="container relative z-10 max-w-3xl mx-auto text-center px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <GraduationCap className="w-14 h-14 text-primary-foreground/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">ابدأ رحلتك مع الذكاء الاصطناعي في التعليم</h2>
            <p className="text-primary-foreground/80 mb-10 text-lg">انضم لمئات المعلمين الذين بدأوا بالفعل في تطوير مهاراتهم</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-base px-8 py-6 rounded-xl font-semibold">سجّل الآن</Button>
              <Button size="lg" className="text-base px-8 py-6 rounded-xl bg-primary-foreground/20 border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/30 backdrop-blur-sm">
                <Play className="w-5 h-5 ml-2" />
                احجز مقعدك في الويبنار المجاني
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
