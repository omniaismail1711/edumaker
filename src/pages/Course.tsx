import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Play,
  ChevronDown,
  BookOpen,
  Cpu,
  Layers,
  ClipboardCheck,
  PenTool,
  Bot,
  GraduationCap,
  ArrowLeft,
  CheckCircle2,
  Lightbulb,
  Rocket,
  BarChart3,
  Monitor,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const aiTools = [
  { name: "ChatGPT", color: "from-[hsl(170,60%,45%)] to-[hsl(170,50%,55%)]" },
  { name: "Google Gemini", color: "from-[hsl(210,70%,55%)] to-[hsl(230,60%,60%)]" },
];

const fundamentalTopics = [
  { icon: Lightbulb, text: "مقدمة في الذكاء الاصطناعي" },
  { icon: PenTool, text: "مهارات كتابة الأوامر" },
  { icon: Layers, text: "إنشاء المحتوى التعليمي باستخدام AI" },
  { icon: ClipboardCheck, text: "استخدام الذكاء الاصطناعي في التقييم" },
];

const advancedTopics = [
  { icon: Cpu, text: "استخدام أدوات AI المتقدمة في التعليم" },
  { icon: Monitor, text: "تصميم تجارب تعلم رقمية" },
  { icon: BarChart3, text: "تحليل بيانات التعلم باستخدام AI" },
  { icon: Rocket, text: "بناء مشاريع تعليمية متقدمة" },
];

const journeySteps = [
  { icon: BookOpen, label: "المقدمة", sub: "تعرّف على البرنامج" },
  { icon: GraduationCap, label: "المسار الأساسي", sub: "أساسيات AI في التعليم" },
  { icon: Rocket, label: "المسار المتقدم", sub: "أدوات احترافية متقدمة" },
];

export default function Course() {
  return (
    <div dir="rtl" className="min-h-screen bg-background font-cairo">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 via-[hsl(260,40%,65%/0.08)] to-accent/5" />
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

        <div className="container relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-6 px-4 py-1.5 text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">
              <Sparkles className="w-4 h-4 ml-1" />
              برنامج تدريبي متكامل
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              برنامج الذكاء الاصطناعي للمعلمين
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto mb-6 leading-relaxed">
              برنامج تدريبي متكامل يساعد المعلمين على استخدام الذكاء الاصطناعي في تصميم الدروس، إنشاء المحتوى التعليمي، وبناء تجارب تعلم تفاعلية.
            </p>
            <p className="text-muted-foreground/80 text-sm max-w-2xl mx-auto mb-10">
              يقدم البرنامج مسارين مختلفين حسب مستوى الخبرة في استخدام الذكاء الاصطناعي في التعليم.
            </p>

            {/* AI Tools */}
            <div className="flex flex-wrap justify-center gap-3">
              {aiTools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className={`bg-gradient-to-r ${tool.color} text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md`}
                >
                  {tool.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Choose Track */}
      <section className="py-20 bg-secondary/30">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              اختر مسار التعلم المناسب لك
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Fundamental */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="card-elevated h-full border-primary/20 overflow-hidden group relative">
                <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="bg-gradient-to-l from-primary/10 to-transparent h-1" />
                <CardContent className="p-8 relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">المسار الأساسي</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    مناسب للمعلمين الذين يرغبون في تعلم أساسيات الذكاء الاصطناعي وكيفية استخدامه في إعداد الدروس وإنشاء المحتوى التعليمي.
                  </p>
                  <div className="space-y-3 mb-8 flex-1">
                    {fundamentalTopics.map((t, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <t.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span>{t.text}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild size="lg" className="w-full text-base py-6 rounded-xl">
                    <Link to="/course/fundamental">
                      استكشف المسار الأساسي
                      <ArrowLeft className="w-5 h-5 mr-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Advanced */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <Card className="card-elevated h-full border-accent/20 overflow-hidden group relative">
                <div className="absolute inset-0 bg-gradient-to-bl from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="bg-gradient-to-l from-accent/30 to-primary/10 h-1" />
                <CardContent className="p-8 relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                    <Rocket className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-foreground">المسار المتقدم</h3>
                    <Badge className="bg-accent/10 text-accent border-accent/20 text-xs">PRO</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    مسار متقدم للمعلمين الذين يريدون تطوير مهاراتهم باستخدام أدوات الذكاء الاصطناعي الاحترافية وبناء تجارب تعلم رقمية متقدمة.
                  </p>
                  <div className="flex gap-2 mb-6">
                    <Badge variant="secondary" className="text-xs">Microsoft</Badge>
                    <Badge variant="secondary" className="text-xs">Google</Badge>
                  </div>
                  <div className="space-y-3 mb-8 flex-1">
                    {advancedTopics.map((t, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <t.icon className="w-4 h-4 text-accent" />
                        </div>
                        <span>{t.text}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild size="lg" variant="outline" className="w-full text-base py-6 rounded-xl border-accent/30 hover:bg-accent/5">
                    <Link to="/course/advanced">
                      استكشف المسار المتقدم
                      <ArrowLeft className="w-5 h-5 mr-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Journey Timeline */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">رحلة التعلم</h2>
            <p className="text-muted-foreground">تعرّف على مراحل البرنامج التدريبي</p>
          </motion.div>

          <div className="flex flex-col items-center gap-0">
            {journeySteps.map((step, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center shadow-sm border border-primary/10">
                  <step.icon className="w-9 h-9 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mt-4 text-lg">{step.label}</h3>
                <p className="text-muted-foreground text-sm mb-2">{step.sub}</p>
                {i < journeySteps.length - 1 && (
                  <ChevronDown className="w-6 h-6 text-primary/40 my-2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
