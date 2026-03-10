import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  GraduationCap, BookOpen, Users, CheckCircle2, ArrowLeft,
  Sparkles, ClipboardCheck, Compass, Award, BriefcaseBusiness
} from "lucide-react";
import futureTeacherImg from "@/assets/future-teacher-program.png";
import { useLanguage } from "@/contexts/LanguageContext";

const highlights = [
  { icon: ClipboardCheck, text: "تدريب عملي داخل الفصول" },
  { icon: BookOpen, text: "إعداد لاختبارات التوظيف" },
  { icon: Compass, text: "إرشاد مهني من معلمين ذوي خبرة" },
  { icon: Award, text: "شهادة إتمام معتمدة" },
  { icon: Users, text: "مجتمع داعم من المعلمين المستقبليين" },
  { icon: BriefcaseBusiness, text: "فرص توظيف حصرية للخريجين" },
];

export default function FutureTeacherProgram() {
  const { isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="container relative py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Content */}
            <motion.div
              className="flex-1 text-center lg:text-right"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                <Sparkles className={`w-3.5 h-3.5 ${isRTL ? "ml-1" : "mr-1"}`} />
                برنامج تدريبي متكامل
              </Badge>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.6] md:leading-[1.8] mb-4">
                برنامج المعلم المستقبلي
              </h1>

              <p className="text-lg md:text-xl font-bold text-muted-foreground leading-relaxed mb-3 max-w-2xl">
                برنامج تدريبي يساعد طلاب الكليات المرتبطة بالتدريس على اكتساب المهارات العملية والاستعداد لدخول مهنة التعليم بثقة.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                يوفر البرنامج تدريبًا عمليًا، إعدادًا لاختبارات التوظيف، وإرشادًا مهنيًا من معلمين ذوي خبرة.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button size="lg" className="text-base font-semibold" asChild>
                  <Link to="/auth">
                    <GraduationCap className={`w-5 h-5 ${isRTL ? "ml-2" : "mr-2"}`} />
                    انضم إلى البرنامج
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/">
                    <ArrowLeft className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                    العودة للرئيسية
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={futureTeacherImg}
                alt="طلاب يتحولون إلى معلمين"
                className="w-full max-w-md lg:max-w-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-t bg-card">
        <div className="container py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">ماذا يقدم البرنامج؟</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">كل ما تحتاجه للانتقال من مقاعد الدراسة إلى الفصل الدراسي بثقة واحترافية</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 bg-background rounded-xl border p-5"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <h.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">{h.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <div className="rounded-2xl p-8 md:p-12 text-center relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">ابدأ رحلتك نحو التعليم اليوم</h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">سجّل الآن وانضم لمجتمع من المعلمين المستقبليين الذين يستعدون لقيادة الفصول الدراسية</p>
          <Button size="lg" variant="secondary" className="font-semibold" asChild>
            <Link to="/auth">
              <CheckCircle2 className="w-5 h-5 ml-2" />
              سجّل مجانًا
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
