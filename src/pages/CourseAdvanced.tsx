import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  CheckCircle2,
  Rocket,
  ArrowRight,
  Award,
  Clock,
  BarChart3,
  BookOpen,
  Cpu,
  Monitor,
  Zap,
  Timer,
} from "lucide-react";
import AdvancedTrackSection from "@/components/AdvancedTrackSection";

const courseBadges = [
  { icon: Clock, label: "٦ أسابيع", sub: "مدة المسار" },
  { icon: BookOpen, label: "مسارين", sub: "Microsoft & Google" },
  { icon: Award, label: "شهادة متقدمة", sub: "عند الإتمام" },
  { icon: BarChart3, label: "متوسط ← متقدم", sub: "مستوى الدورة" },
];

const benefits = [
  { icon: Cpu, text: "مهارات متقدمة في استخدام الذكاء الاصطناعي في التعليم" },
  { icon: Monitor, text: "أدوات احترافية لإنتاج المحتوى التعليمي" },
  { icon: Timer, text: "زيادة الإنتاجية وتقليل الوقت في إعداد الدروس" },
  { icon: Zap, text: "القدرة على تصميم تجارب تعلم رقمية متقدمة" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function CourseAdvanced() {
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
        <div className="absolute inset-0 bg-gradient-to-bl from-accent/10 via-[hsl(260,40%,65%/0.08)] to-primary/5" />
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="container relative z-10 max-w-5xl mx-auto text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-6 px-4 py-1.5 text-sm bg-accent/10 text-accent border-accent/20">
              <Sparkles className="w-4 h-4 ml-1" />
              المسار المتقدم
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              المسار المتقدم للذكاء الاصطناعي في التعليم
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              بعد إتقان أساسيات استخدام الذكاء الاصطناعي في التعليم، انتقل إلى المستوى المتقدم لاستخدام أدوات احترافية من كبرى شركات التكنولوجيا.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Badge variant="secondary" className="px-4 py-2 text-sm">Microsoft</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">Google</Badge>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {courseBadges.map((b, i) => (
                <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" animate="visible">
                  <Card className="card-elevated border-border/50 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-4 text-center">
                      <b.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                      <p className="font-bold text-foreground text-sm">{b.label}</p>
                      <p className="text-muted-foreground text-xs">{b.sub}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advanced Track Content */}
      <AdvancedTrackSection />

      {/* Benefits */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">ماذا ستكتسب؟</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="card-elevated border-border/50 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <b.icon className="w-6 h-6 text-accent" />
                    </div>
                    <p className="text-foreground font-semibold text-sm leading-relaxed pt-2">{b.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-accent via-[hsl(280,40%,50%)] to-primary" />
        <div className="container relative z-10 max-w-3xl mx-auto text-center px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Rocket className="w-14 h-14 text-primary-foreground/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">ارتقِ بمهاراتك إلى المستوى التالي</h2>
            <p className="text-primary-foreground/80 mb-10 text-lg">انضم للمسار المتقدم وتعلّم أدوات AI الاحترافية</p>
            <Button size="lg" variant="secondary" className="text-base px-8 py-6 rounded-xl font-semibold">
              سجّل في المسار المتقدم
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
