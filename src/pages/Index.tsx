import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  GraduationCap, Search, Award, Brain, Briefcase, Users, CheckCircle2,
  ArrowLeft, ArrowRight, Sparkles, TrendingUp, BookOpen, Shield, Crown, IdCard, Gift, Clock, Store, Download, Star, FileText, Wand2
} from "lucide-react";
import TeacherCard from "@/components/TeacherCard";
import { mockTeachers } from "@/data/mockData";
import { mockResources } from "@/data/marketplaceData";
import heroBg from "@/assets/hero-bg.png";
import futureTeacherImg from "@/assets/future-teacher-program.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/i18n/translations";

export default function Index() {
  const { lang, isRTL } = useLanguage();
  const h = translations.home;

  const stats = [
  { label: t(h.registeredTeachers, lang), value: "12,500+", icon: Users },
  { label: t(h.verifiedCerts, lang), value: "35,000+", icon: Award },
  { label: t(h.partnerSchools, lang), value: "850+", icon: GraduationCap },
  { label: t(h.jobOpportunities, lang), value: "2,300+", icon: Briefcase }];


  const features = [
  { icon: Brain, title: t(h.aiSkills, lang), desc: t(h.aiSkillsDesc, lang) },
  { icon: Award, title: t(h.verifiedCertificates, lang), desc: t(h.verifiedCertificatesDesc, lang) },
  { icon: TrendingUp, title: t(h.impactPoints, lang), desc: t(h.impactPointsDesc, lang) },
  { icon: Search, title: t(h.talentDiscovery, lang), desc: t(h.talentDiscoveryDesc, lang) },
  { icon: BookOpen, title: t(h.portfolio, lang), desc: t(h.portfolioDesc, lang) },
  { icon: Shield, title: t(h.trustedNetwork, lang), desc: t(h.trustedNetworkDesc, lang) }];


  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[520px] flex items-center">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className={`absolute inset-0 ${isRTL ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-transparent via-[hsl(215_40%_60%/0.3)] to-[hsl(215_40%_60%/0.7)]`} />
        <div className="container relative py-20 md:py-28">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="mb-4 bg-white/20 text-foreground border-white/30 hover:bg-white/30 backdrop-blur-sm">
                <Sparkles className={`w-3.5 h-3.5 ${isRTL ? "ml-1" : "mr-1"}`} />
                {t(h.badge, lang)}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.8] md:leading-[2] mb-6 mx-px">
                {t(h.heroTitle1, lang)}
                <br />
                <span className="text-primary">{t(h.heroTitle2, lang)}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed font-bold">
                {t(h.heroDesc, lang)}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="text-base font-semibold" asChild>
                  <Link to="/explore">
                    {t(h.exploreTeachers, lang)}
                    <ArrowIcon className={`w-5 h-5 ${isRTL ? "mr-2" : "ml-2"}`} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base bg-white/50 backdrop-blur-sm border-white/40 hover:bg-white/70" asChild>
                  <Link to="/jobs">{t(h.browseJobs, lang)}</Link>
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
            {stats.map((s, i) =>
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }} className="text-center">
                <s.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-2xl md:text-3xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t(h.whyUs, lang)}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t(h.whyUsDesc, lang)}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) =>
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card rounded-xl border p-6 card-elevated">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Future Teacher Program Promo */}
      <section className="bg-secondary/50 py-16 md:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border bg-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="flex-1 text-center md:text-right">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto md:mx-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3 leading-relaxed">
                هل أنت طالب في كلية مرتبطة بالتدريس؟
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl">
                انضم إلى برنامج المعلم المستقبلي واكتسب المهارات العملية التي تحتاجها قبل بدء مسيرتك المهنية.
              </p>
              <Button size="lg" className="font-semibold text-base" asChild>
                <Link to="/future-teacher">
                  <Sparkles className="w-5 h-5 ml-2" />
                  استكشف البرنامج
                </Link>
              </Button>
            </div>
            <div className="shrink-0">
              <img src={futureTeacherImg} alt="برنامج المعلم المستقبلي" className="w-48 md:w-64" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Teachers */}
      <section className="bg-secondary/50 py-16 md:py-20">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{t(h.featuredTeachers, lang)}</h2>
              <p className="text-muted-foreground">{t(h.featuredTeachersDesc, lang)}</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/explore">{t(h.viewAll, lang)}</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {mockTeachers.slice(0, 3).map((teacher, i) =>
            <TeacherCard key={teacher.id} teacher={teacher} index={i} />
            )}
          </div>
        </div>
      </section>

      {/* Union Promo */}
      <section className="container py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl border overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-badge-gold/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

          <div className="relative p-8 md:p-12 flex flex-col lg:flex-row items-center gap-8">
            {/* Content */}
            <div className="flex-1 text-center lg:text-right">
              <Badge className="mb-4 bg-badge-gold/10 text-badge-gold border-badge-gold/20 hover:bg-badge-gold/20">
                <Gift className="w-3.5 h-3.5 ml-1" />
                عرض حصري
              </Badge>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3 leading-relaxed">
                عرض خاص لمعلمي نقابة المهن التعليمية
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl">
                إذا كنت معلمًا مقيدًا في نقابة المهن التعليمية يمكنك توثيق حسابك والحصول على اشتراك مميز مجاني لمدة 6 أشهر.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                {[
                  { icon: Shield, text: "تحقق آمن ومشفر" },
                  { icon: IdCard, text: "ربط مباشر مع النقابة" },
                  { icon: CheckCircle2, text: "توثيق فوري للحساب" },
                ].map((badge) => (
                  <div key={badge.text} className="flex items-center gap-1.5 text-xs text-muted-foreground bg-card rounded-full px-3 py-1.5 border">
                    <badge.icon className="w-3.5 h-3.5 text-primary" />
                    {badge.text}
                  </div>
                ))}
              </div>

              <Button size="lg" className="font-semibold text-base" asChild>
                <Link to="/auth">
                  <IdCard className="w-5 h-5 ml-2" />
                  توثيق عضوية النقابة
                </Link>
              </Button>
            </div>

            {/* Highlight Card */}
            <div className="shrink-0">
              <div className="w-64 bg-card rounded-2xl border shadow-lg p-6 text-center relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-badge-gold text-primary-foreground border-0 shadow-md text-xs font-bold px-4">
                    <Crown className="w-3 h-3 ml-1" /> PREMIUM
                  </Badge>
                </div>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mt-4 mb-4">
                  <Gift className="w-8 h-8 text-primary" />
                </div>
                <p className="text-4xl font-extrabold text-primary mb-1">6</p>
                <p className="text-lg font-bold text-foreground mb-1">أشهر مجانًا</p>
                <p className="text-xs text-muted-foreground mb-4">اشتراك مميز كامل</p>
                <div className="space-y-2 text-right">
                  {[
                    "شارة التوثيق الذهبية",
                    "ظهور مميز في البحث",
                    "الوصول للدورات الحصرية",
                    "أولوية في التوظيف",
                  ].map((b) => (
                    <div key={b} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-badge-gold shrink-0" />
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Marketplace Section */}
      <section className="bg-secondary/50 py-16 md:py-20">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Store className="w-6 h-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  {lang === "ar" ? "موارد تعليمية من معلمين مثلك" : "Teaching Resources from Teachers Like You"}
                </h2>
              </div>
              <p className="text-muted-foreground">
                {lang === "ar" ? "اكتشف أفضل الموارد التعليمية المعدة من معلمين متميزين" : "Discover top teaching resources created by outstanding teachers"}
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/marketplace">
                {lang === "ar" ? "استكشف سوق الموارد" : "Explore Marketplace"}
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {mockResources.slice(0, 3).map((resource, i) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl border p-5 card-elevated"
              >
                <h3 className="font-bold text-foreground mb-2 line-clamp-1">{resource.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{resource.description}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Download className="w-3.5 h-3.5" />{resource.downloads}</span>
                  <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-badge-gold text-badge-gold" />{resource.rating}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="container py-16 md:py-20">
        <div className="rounded-2xl p-8 md:p-12 text-center relative overflow-hidden" style={{ background: 'var(--hero-gradient)' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{t(h.joinNetwork, lang)}</h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">{t(h.joinNetworkDesc, lang)}</p>
          <Button size="lg" variant="secondary" className="font-semibold" asChild>
            <Link to="/choose-account">{t(h.createFreeAccount, lang)}</Link>
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
            <span className="font-bold text-foreground">{t(translations.nav.platformName, lang)}</span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">{t(h.footerHome, lang)}</Link>
            <Link to="/explore" className="hover:text-foreground transition-colors">{t(h.footerTeachers, lang)}</Link>
            <Link to="/course" className="hover:text-foreground transition-colors">{t(h.footerCourse, lang)}</Link>
            <Link to="/jobs" className="hover:text-foreground transition-colors">{t(h.footerJobs, lang)}</Link>
          </div>
          <p className="text-xs text-muted-foreground">{t(h.copyright, lang)}</p>
        </div>
      </footer>
    </div>);

}