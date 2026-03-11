import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  BookOpen, Monitor, Users, Presentation, FileText, Mic,
  Brain, Shield, Briefcase, ClipboardList, Award, Timer,
  HandHelping, MessageCircle, Star, CheckCircle2, ArrowLeft, Store
} from "lucide-react";

const pillars = [
  {
    number: "01",
    color: "primary",
    icon: BookOpen,
    title: "المهارات العملية داخل الصف",
    desc: "يساعد هذا المسار الطلاب على اكتساب المهارات العملية التي يحتاجها المعلم داخل الفصل الدراسي.",
    modules: [
      { icon: Shield, text: "إدارة الصف بفعالية" },
      { icon: Presentation, text: "تصميم دروس تفاعلية وجذابة" },
      { icon: Brain, text: "التعامل مع سلوكيات الطلاب الصعبة" },
      { icon: Monitor, text: "استخدام التكنولوجيا في التعليم" },
      { icon: FileText, text: "إعداد أوراق العمل والأنشطة التعليمية" },
      { icon: Mic, text: "مهارات الإلقاء والتحدث بثقة أمام الطلاب" },
    ],
    cta: {
      text: "يمكن للطلاب إنشاء خطط دروس وأوراق عمل وأنشطة تعليمية ونشرها في سوق الموارد التعليمية.",
      link: "/marketplace",
      label: "استكشف سوق الموارد",
      icon: Store,
    },
  },
  {
    number: "02",
    color: "accent",
    icon: Briefcase,
    title: "الاستعداد لسوق العمل",
    desc: "يساعد هذا المسار الطلاب على الاستعداد لفرص التوظيف في مجال التعليم.",
    modules: [
      { icon: FileText, text: "كيفية كتابة السيرة الذاتية للمعلم" },
      { icon: ClipboardList, text: "إعداد ملف إنجاز مهني (Teaching Portfolio)" },
      { icon: Users, text: "اجتياز مقابلات العمل للمعلمين" },
      { icon: Presentation, text: "تقديم درس تجريبي (Demo Lesson)" },
    ],
    exam: {
      title: "اختبارات تدريبية",
      desc: "تدرّب على اختبارات الأكاديمية المهنية للمعلمين",
      features: [
        { icon: CheckCircle2, text: "أسئلة اختيار من متعدد (MCQ)" },
        { icon: Timer, text: "اختبارات بتوقيت محدد" },
        { icon: Award, text: "درجة الأداء بعد الإتمام" },
      ],
    },
  },
  {
    number: "03",
    color: "badge-gold",
    icon: HandHelping,
    title: "برنامج الإرشاد المهني",
    desc: "يربط البرنامج الطلاب بمعلمين ذوي خبرة لمساعدتهم على تطوير مهاراتهم التدريسية.",
    studentFeatures: [
      { icon: HandHelping, text: "طلب إرشاد من معلم متمرس" },
      { icon: FileText, text: "إرسال خطط دروس للمراجعة" },
      { icon: MessageCircle, text: "طرح أسئلة تعليمية والحصول على إجابات" },
    ],
    mentorFeatures: [
      { icon: ClipboardList, text: "مراجعة مواد الطلاب وتقديم ملاحظات" },
      { icon: Star, text: "كسب نقاط مساهمة مجتمعية" },
      { icon: Brain, text: "توجيه الطلاب لتحسين أساليبهم التدريسية" },
    ],
  },
];

export default function ProgramPillars() {
  return (
    <section className="container py-16 md:py-20">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
          <BookOpen className="w-3.5 h-3.5 ml-1" />
          هيكل البرنامج
        </Badge>
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3 leading-relaxed">
          ثلاثة مسارات لبناء معلم المستقبل
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          برنامج متكامل يغطي المهارات العملية، الاستعداد المهني، والإرشاد من معلمين ذوي خبرة
        </p>
      </div>

      <div className="space-y-8">
        {pillars.map((pillar, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="rounded-2xl border bg-card overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b bg-secondary/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-bold text-muted-foreground">
                    المسار {pillar.number}
                  </span>
                  <h3 className="text-xl md:text-2xl font-extrabold text-foreground">
                    {pillar.title}
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground mt-3 max-w-3xl">{pillar.desc}</p>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Modules */}
              {pillar.modules && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                  {pillar.modules.map((mod, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-secondary/40 rounded-xl p-4 border border-border/50"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <mod.icon className="w-4.5 h-4.5 text-primary" />
                      </div>
                      <span className="text-sm font-semibold text-foreground">{mod.text}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA for pillar 1 */}
              {pillar.cta && (
                <div className="rounded-xl bg-primary/5 border border-primary/10 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{pillar.cta.text}</p>
                  </div>
                  <Button variant="outline" size="sm" className="shrink-0" asChild>
                    <Link to={pillar.cta.link}>
                      <pillar.cta.icon className="w-4 h-4 ml-1.5" />
                      {pillar.cta.label}
                    </Link>
                  </Button>
                </div>
              )}

              {/* Exam section for pillar 2 */}
              {pillar.exam && (
                <div className="rounded-xl bg-accent/5 border border-accent/10 p-5">
                  <h4 className="font-bold text-foreground mb-1">{pillar.exam.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{pillar.exam.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {pillar.exam.features.map((f, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-card rounded-full px-4 py-2 border text-sm"
                      >
                        <f.icon className="w-4 h-4 text-accent" />
                        <span className="text-foreground font-medium">{f.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Mentor/Student features for pillar 3 */}
              {pillar.studentFeatures && pillar.mentorFeatures && (
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      الطالب يمكنه
                    </h4>
                    <div className="space-y-2">
                      {pillar.studentFeatures.map((f, i) => (
                        <div key={i} className="flex items-center gap-3 bg-secondary/40 rounded-xl p-3.5 border border-border/50">
                          <f.icon className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-sm font-medium text-foreground">{f.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-badge-gold" />
                      المرشد يمكنه
                    </h4>
                    <div className="space-y-2">
                      {pillar.mentorFeatures.map((f, i) => (
                        <div key={i} className="flex items-center gap-3 bg-secondary/40 rounded-xl p-3.5 border border-border/50">
                          <f.icon className="w-4 h-4 text-badge-gold shrink-0" />
                          <span className="text-sm font-medium text-foreground">{f.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
