import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Building2,
  Sparkles,
  Brain,
  Briefcase,
  Award,
  Users,
  Search,
  FolderKanban,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  School,
  MapPin,
  Shield,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

export default function ChooseAccountType() {
  const { lang, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const teacherPerks = lang === "ar"
    ? ["ملف مهني احترافي", "دورات الذكاء الاصطناعي", "فرص وظيفية حصرية", "شهادات معتمدة"]
    : ["Professional profile", "AI courses", "Exclusive job offers", "Certified credentials"];

  const orgPerks = lang === "ar"
    ? ["بحث متقدم عن المعلمين", "تدريب مخصص لفريقك", "إدارة مشاريع تعاونية", "توظيف أسرع وأذكى"]
    : ["Advanced teacher search", "Custom team training", "Collaborative projects", "Faster, smarter hiring"];

  const schoolPerks = lang === "ar"
    ? ["ملف مدرسة احترافي", "نشر فرص توظيف", "اكتشاف معلمين موثقين", "تحليلات وإحصائيات"]
    : ["Professional school profile", "Post job opportunities", "Discover verified teachers", "Analytics & insights"];

  const teacherIcons = [Award, Brain, Briefcase, CheckCircle2];
  const orgIcons = [Search, Users, FolderKanban, CheckCircle2];
  const schoolIcons = [Shield, Briefcase, Search, CheckCircle2];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Decorative bg */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 relative z-10">
        {/* Logo & Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <img src={logo} alt="صُنّاع التعليم" className="w-12 h-12 object-contain" />
            <span className="text-2xl font-bold text-foreground">
              {lang === "ar" ? "صُنّاع التعليم" : "Education Makers"}
            </span>
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-[1.8] mb-3">
            {lang === "ar" ? "انضم إلى صُنّاع التعليم" : "Join Education Makers"}
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            {lang === "ar"
              ? "هل أنت معلم تبحث عن التطور، أم مؤسسة تبحث عن الكفاءات؟"
              : "Are you a teacher looking to grow, or an institution looking for talent?"}
          </p>
        </motion.div>

        {/* Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl w-full">
          {/* Teacher Card */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link to="/auth" className="block group">
              <div className="relative bg-card border rounded-2xl p-8 h-full transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--card-shadow-hover)] overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-l from-primary to-primary/50" />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>

                  <Badge className="bg-primary/10 text-primary border-primary/20 text-xs mb-3">
                    <Sparkles className="w-3 h-3 me-1" />
                    {lang === "ar" ? "للمعلمين" : "For Teachers"}
                  </Badge>

                  <h2 className="text-xl font-bold text-foreground mb-2 leading-[1.8]">
                    {lang === "ar" ? "حساب معلم" : "Teacher Account"}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {lang === "ar"
                      ? "ابنِ ملفك المهني، طور مهاراتك في الذكاء الاصطناعي، واحصل على وظيفتك القادمة."
                      : "Build your profile, develop AI skills, and land your next job."}
                  </p>

                  {/* Perks */}
                  <div className="space-y-2.5 mb-6">
                    {teacherPerks.map((perk, i) => {
                      const Icon = teacherIcons[i];
                      return (
                        <div key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                          <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <span>{perk}</span>
                        </div>
                      );
                    })}
                  </div>

                  <Button className="w-full rounded-xl h-11 text-sm font-semibold gap-2">
                    {lang === "ar" ? "سجل كمعلم" : "Sign up as a Teacher"}
                    <ArrowIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Organization Card */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/auth/organization" className="block group">
              <div className="relative bg-card border rounded-2xl p-8 h-full transition-all duration-300 hover:border-accent/40 hover:shadow-[var(--card-shadow-hover)] overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-l from-accent to-accent/50" />
                <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-8 h-8 text-accent" />
                  </div>

                  <Badge className="bg-accent/10 text-accent border-accent/20 text-xs mb-3">
                    <Building2 className="w-3 h-3 me-1" />
                    {lang === "ar" ? "للمؤسسات" : "For Institutions"}
                  </Badge>

                  <h2 className="text-xl font-bold text-foreground mb-2 leading-[1.8]">
                    {lang === "ar" ? "حساب مؤسسة تعليمية" : "Educational Institution Account"}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {lang === "ar"
                      ? "وظّف أفضل الكفاءات، درّب فريقك، وابحث عن فرص تعاون لمشاريعك."
                      : "Hire top talent, train your team, and find collaboration opportunities."}
                  </p>

                  {/* Perks */}
                  <div className="space-y-2.5 mb-6">
                    {orgPerks.map((perk, i) => {
                      const Icon = orgIcons[i];
                      return (
                        <div key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                          <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-3.5 h-3.5 text-accent" />
                          </div>
                          <span>{perk}</span>
                        </div>
                      );
                    })}
                  </div>

                  <Button variant="outline" className="w-full rounded-xl h-11 text-sm font-semibold gap-2 border-accent/30 hover:bg-accent/5">
                    {lang === "ar" ? "سجل كمؤسسة" : "Sign up as an Institution"}
                    <ArrowIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm text-muted-foreground mt-8"
        >
          {lang === "ar" ? "لديك حساب بالفعل؟" : "Already have an account?"}{" "}
          <Link to="/auth" className="text-primary font-semibold hover:underline">
            {lang === "ar" ? "تسجيل الدخول" : "Log in"}
          </Link>
        </motion.p>
      </div>
    </div>
  );
}
