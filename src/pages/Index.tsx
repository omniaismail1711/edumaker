import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  GraduationCap, Search, Award, Brain, Briefcase, Users, CheckCircle2,
  ArrowLeft, Sparkles, TrendingUp, BookOpen, Shield
} from "lucide-react";
import TeacherCard from "@/components/TeacherCard";
import { mockTeachers } from "@/data/mockData";

const stats = [
  { label: "معلم مسجل", value: "12,500+", icon: Users },
  { label: "شهادة موثقة", value: "35,000+", icon: Award },
  { label: "مدرسة شريكة", value: "850+", icon: GraduationCap },
  { label: "فرصة توظيف", value: "2,300+", icon: Briefcase },
];

const features = [
  {
    icon: Brain,
    title: "مهارات الذكاء الاصطناعي",
    desc: "أبرز كفاءتك في أدوات AI الحديثة وتكنولوجيا التعليم",
  },
  {
    icon: Award,
    title: "شهادات موثقة",
    desc: "ارفع شهاداتك واحصل على شارات التحقق المعتمدة",
  },
  {
    icon: TrendingUp,
    title: "نقاط التأثير",
    desc: "نظام Teacher Impact Score يقيس تأثيرك المهني",
  },
  {
    icon: Search,
    title: "اكتشاف المواهب",
    desc: "تواصل مع المدارس واحصل على فرص توظيف مناسبة",
  },
  {
    icon: BookOpen,
    title: "معرض الأعمال",
    desc: "اعرض خطط دروسك ومشاريعك التعليمية المميزة",
  },
  {
    icon: Shield,
    title: "شبكة موثوقة",
    desc: "منصة آمنة وموثوقة مصممة خصيصاً للتعليم",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary-foreground/20 blur-3xl" />
          <div className="absolute bottom-10 left-32 w-96 h-96 rounded-full bg-primary-foreground/10 blur-3xl" />
        </div>
        <div className="container relative py-20 md:py-28">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-primary-foreground/15 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20">
                <Sparkles className="w-3.5 h-3.5 ml-1" />
                الشبكة المهنية الأولى للمعلمين
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
                ابنِ هويتك المهنية
                <br />
                <span className="opacity-80">واكتشف مستقبل التعليم</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed">
                منصة تجمع المعلمين والمدارس في مكان واحد. اعرض مهاراتك، شهاداتك، وخبراتك في الذكاء الاصطناعي وتكنولوجيا التعليم.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" variant="secondary" className="text-base font-semibold" asChild>
                  <Link to="/explore">
                    استكشف المعلمين
                    <ArrowLeft className="w-5 h-5 mr-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="ghost" className="text-primary-foreground border-primary-foreground/30 border hover:bg-primary-foreground/10 text-base" asChild>
                  <Link to="/jobs">تصفح الوظائف</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b bg-card">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="text-center"
              >
                <s.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-2xl md:text-3xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">لماذا صِنّاع التعليم؟</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            أكثر من مجرد شبكة اجتماعية — منصة تقييم مهني ذكية للمعلمين
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-xl border p-6 card-elevated"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Teachers */}
      <section className="bg-secondary/50 py-16 md:py-20">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">معلمون مميزون</h2>
              <p className="text-muted-foreground">أعلى المعلمين تقييماً في نقاط التأثير</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/explore">عرض الكل</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {mockTeachers.slice(0, 3).map((t, i) => (
              <TeacherCard key={t.id} teacher={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16 md:py-20">
        <div className="hero-gradient rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            انضم لأكبر شبكة مهنية للمعلمين
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            أنشئ ملفك المهني مجاناً وابدأ في بناء هويتك التعليمية الرقمية اليوم
          </p>
          <Button size="lg" variant="secondary" className="font-semibold">
            أنشئ حسابك مجاناً
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg hero-gradient flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground">صِنّاع التعليم</span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">الرئيسية</Link>
            <Link to="/explore" className="hover:text-foreground transition-colors">المعلمون</Link>
            <Link to="/jobs" className="hover:text-foreground transition-colors">الوظائف</Link>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 صِنّاع التعليم. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}
