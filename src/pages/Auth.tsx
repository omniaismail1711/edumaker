import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap, Mail, Lock, User, Globe, MapPin, BookOpen, Building2,
  Award, Brain, Upload, Link2, Briefcase, Sparkles, Shield, Star,
  CheckCircle2, ChevronLeft, ChevronRight
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import heroBg from "@/assets/hero-bg.png";

/* ─── Floating decorative elements ─── */
function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Teacher profile card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute top-[15%] left-[8%] bg-white/15 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-lg hidden lg:block"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
            <User className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-white">أحمد المعلم</p>
            <p className="text-xs text-white/70">مدرس رياضيات</p>
          </div>
        </div>
        <div className="flex gap-1 mt-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </motion.div>

      {/* Certificate badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute top-[40%] left-[5%] bg-white/10 backdrop-blur-xl rounded-xl p-3 border border-white/20 hidden lg:block"
      >
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-yellow-300" />
          <span className="text-xs text-white font-semibold">شهادة معتمدة</span>
        </div>
      </motion.div>

      {/* AI icon */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-[30%] left-[10%] bg-white/10 backdrop-blur-xl rounded-full p-3 border border-white/20 hidden lg:block"
      >
        <Brain className="w-6 h-6 text-purple-300" />
      </motion.div>

      {/* Skills badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute top-[60%] left-[18%] bg-white/10 backdrop-blur-xl rounded-lg p-2 px-3 border border-white/20 hidden lg:block"
      >
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-pink-300" />
          <span className="text-xs text-white/90">تعليم رقمي</span>
        </div>
      </motion.div>

      {/* Network lines (decorative dots) */}
      {[
        { top: "20%", left: "25%", delay: 0.8 },
        { top: "50%", left: "22%", delay: 1.0 },
        { top: "35%", left: "15%", delay: 1.3 },
        { top: "70%", left: "12%", delay: 1.5 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: dot.delay, duration: 0.4 }}
          className="absolute w-2 h-2 rounded-full bg-white/30 hidden lg:block"
          style={{ top: dot.top, left: dot.left }}
        />
      ))}
    </div>
  );
}

/* ─── Signup step indicator ─── */
function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-6">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            i === current ? "w-8 bg-primary" : i < current ? "w-6 bg-primary/50" : "w-6 bg-muted"
          }`}
        />
      ))}
    </div>
  );
}

/* ─── Login form ─── */
function LoginForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-5"
    >
      <div className="space-y-2">
        <Label htmlFor="login-email" className="text-foreground">البريد الإلكتروني</Label>
        <div className="relative">
          <Input id="login-email" type="email" placeholder="example@email.com" className="pl-10 text-left" dir="ltr" />
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="login-password" className="text-foreground">كلمة المرور</Label>
        <div className="relative">
          <Input id="login-password" type="password" placeholder="••••••••" className="pl-10 text-left" dir="ltr" />
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">تذكرني</Label>
        </div>
        <button className="text-sm text-primary hover:underline">نسيت كلمة المرور؟</button>
      </div>

      <Button className="w-full text-base font-semibold h-11">تسجيل الدخول</Button>

      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
        <div className="relative flex justify-center"><span className="bg-card px-3 text-xs text-muted-foreground">أو</span></div>
      </div>

      <div className="grid gap-3">
        <Button variant="outline" className="w-full h-10 gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          تسجيل باستخدام Google
        </Button>
        <Button variant="outline" className="w-full h-10 gap-2">
          <svg className="w-4 h-4" viewBox="0 0 23 23"><path fill="#f3f3f3" d="M0 0h23v23H0z"/><path fill="#f35325" d="M1 1h10v10H1z"/><path fill="#81bc06" d="M12 1h10v10H12z"/><path fill="#05a6f0" d="M1 12h10v10H1z"/><path fill="#ffba08" d="M12 12h10v10H12z"/></svg>
          تسجيل باستخدام Microsoft
        </Button>
      </div>
    </motion.div>
  );
}

/* ─── Signup multi-step form ─── */
const educationalStages = ["رياض الأطفال", "المرحلة الابتدائية", "المرحلة المتوسطة", "المرحلة الثانوية", "التعليم الجامعي"];
const subjects = ["الرياضيات", "العلوم", "اللغة العربية", "اللغة الإنجليزية", "الحاسب الآلي", "التربية الإسلامية", "الفيزياء", "الكيمياء", "الأحياء", "التاريخ", "الجغرافيا", "أخرى"];
const countries = ["السعودية", "مصر", "الأردن", "الإمارات", "الكويت", "قطر", "البحرين", "عُمان", "المغرب", "تونس", "الجزائر", "العراق"];

function SignupForm() {
  const [step, setStep] = useState(0);
  const totalSteps = 4;

  const stepTitles = ["المعلومات الأساسية", "المعلومات المهنية", "المهارات والشهادات", "إعدادات الحساب"];

  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <StepIndicator current={step} total={totalSteps} />
      <p className="text-center text-sm font-semibold text-primary mb-4">{stepTitles[step]}</p>

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
            <div className="space-y-2">
              <Label>الاسم الكامل</Label>
              <div className="relative">
                <Input placeholder="أدخل اسمك الكامل" className="pr-10" />
                <User className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>البريد الإلكتروني</Label>
              <div className="relative">
                <Input type="email" placeholder="example@email.com" className="pl-10 text-left" dir="ltr" />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>كلمة المرور</Label>
              <div className="relative">
                <Input type="password" placeholder="••••••••" className="pl-10 text-left" dir="ltr" />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label>الدولة</Label>
                <Select>
                  <SelectTrigger><Globe className="w-4 h-4 text-muted-foreground ml-2" /><SelectValue placeholder="اختر الدولة" /></SelectTrigger>
                  <SelectContent>{countries.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>المدينة</Label>
                <div className="relative">
                  <Input placeholder="المدينة" className="pr-10" />
                  <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
            <div className="space-y-2">
              <Label>المادة الدراسية</Label>
              <Select>
                <SelectTrigger><BookOpen className="w-4 h-4 text-muted-foreground ml-2" /><SelectValue placeholder="اختر المادة" /></SelectTrigger>
                <SelectContent>{subjects.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>المرحلة التعليمية (يمكنك اختيار أكثر من مرحلة)</Label>
              <div className="grid grid-cols-2 gap-2">
                {educationalStages.map(stage => (
                  <div key={stage} className="flex items-center gap-2 p-2 rounded-lg border bg-card hover:bg-secondary/50 transition-colors">
                    <Checkbox id={`stage-${stage}`} />
                    <Label htmlFor={`stage-${stage}`} className="text-sm cursor-pointer">{stage}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label>سنوات الخبرة</Label>
              <Select>
                <SelectTrigger><SelectValue placeholder="اختر سنوات الخبرة" /></SelectTrigger>
                <SelectContent>
                  {["أقل من سنة", "1-3 سنوات", "4-7 سنوات", "8-15 سنة", "أكثر من 15 سنة"].map(y => <SelectItem key={y} value={y}>{y}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>المؤسسة التعليمية الحالية</Label>
              <div className="relative">
                <Input placeholder="اسم المدرسة أو الجامعة" className="pr-10" />
                <Building2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
            <div className="space-y-3">
              <Label className="text-foreground">المهارات</Label>
              <div className="flex flex-wrap gap-2">
                {["التعليم الرقمي", "الذكاء الاصطناعي", "Google Workspace", "Microsoft Teams", "Canva", "Gamification", "التعلم المدمج", "STEM"].map(skill => (
                  <Badge key={skill} variant="outline" className="cursor-pointer hover:bg-primary/10 transition-colors px-3 py-1.5 text-xs">{skill}</Badge>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label>رفع الشهادات</Label>
              <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/40 transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">اسحب الملفات هنا أو اضغط للرفع</p>
                <p className="text-xs text-muted-foreground/70 mt-1">PDF, JPG, PNG — حتى 5 ميجابايت</p>
              </div>
            </div>
            <div className="space-y-2">
              <Label>معرض الأعمال (اختياري)</Label>
              <div className="relative">
                <Input placeholder="رابط محفظة أعمالك أو موقعك الشخصي" className="pr-10 text-left" dir="ltr" />
                <Link2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
            <div className="space-y-4">
              <Label className="text-foreground text-base">إعدادات الملف الشخصي</Label>
              <div className="space-y-3">
                {[
                  { id: "available", label: "متاح للتوظيف", icon: Briefcase, desc: "اسمح للمدارس بمشاهدة ملفك والتواصل معك" },
                  { id: "training", label: "مهتم بالتدريب", icon: Award, desc: "استقبل عروض التدريب والتطوير المهني" },
                  { id: "visible", label: "إظهار الملف للمدارس", icon: Shield, desc: "اجعل ملفك مرئياً في نتائج البحث" },
                ].map(opt => (
                  <div key={opt.id} className="flex items-start gap-3 p-3 rounded-lg border bg-card hover:bg-secondary/50 transition-colors">
                    <Checkbox id={opt.id} className="mt-0.5" />
                    <div className="flex-1">
                      <Label htmlFor={opt.id} className="text-sm font-semibold cursor-pointer flex items-center gap-2">
                        <opt.icon className="w-4 h-4 text-primary" />
                        {opt.label}
                      </Label>
                      <p className="text-xs text-muted-foreground mt-0.5">{opt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className="flex gap-3 pt-2">
        {step > 0 && (
          <Button variant="outline" className="flex-1 gap-1" onClick={() => setStep(s => s - 1)}>
            <ChevronRight className="w-4 h-4" />
            السابق
          </Button>
        )}
        {step < totalSteps - 1 ? (
          <Button className="flex-1 gap-1" onClick={() => setStep(s => s + 1)}>
            التالي
            <ChevronLeft className="w-4 h-4" />
          </Button>
        ) : (
          <Button className="flex-1 font-semibold">
            <CheckCircle2 className="w-4 h-4 ml-1" />
            إنشاء الحساب
          </Button>
        )}
      </div>
    </motion.div>
  );
}

/* ─── Main Auth Page ─── */
export default function Auth() {
  return (
    <div className="min-h-screen flex" dir="rtl">
      {/* Left - gradient side with floating elements */}
      <div className="hidden lg:flex lg:w-[55%] relative overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210_55%_35%/0.6)] via-[hsl(260_40%_50%/0.4)] to-[hsl(350_45%_72%/0.3)]" />
        <FloatingElements />

        {/* Text content */}
        <div className="relative z-10 flex flex-col justify-center px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">صُنّاع التعليم</h2>
            </div>
            <h1 className="text-3xl xl:text-4xl font-extrabold text-white leading-snug mb-4">
              الشبكة المهنية<br />الأولى للمعلمين العرب
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-md">
              ابنِ ملفك المهني الرقمي، اعرض مهاراتك وشهاداتك، وتواصل مع أفضل المؤسسات التعليمية.
            </p>
            <div className="flex gap-4 mt-8">
              {[
                { value: "12,500+", label: "معلم" },
                { value: "850+", label: "مدرسة" },
                { value: "35,000+", label: "شهادة" },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-white/60">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right - form side */}
      <div className="flex-1 flex items-center justify-center bg-background p-4 sm:p-8 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-md"
        >
          {/* Mobile logo */}
          <div className="flex items-center gap-2 mb-6 lg:hidden justify-center">
            <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">صُنّاع التعليم</span>
          </div>

          {/* Glass card */}
          <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-border/60 shadow-xl p-6 sm:p-8">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-foreground mb-1">مرحبًا بك في صُنّاع التعليم</h2>
              <p className="text-sm text-muted-foreground">ابنِ ملفك المهني وابدأ رحلتك التعليمية</p>
            </div>

            <Tabs defaultValue="login" className="w-full">
              <TabsList className="w-full mb-6 bg-secondary/60">
                <TabsTrigger value="login" className="flex-1 text-sm font-semibold">تسجيل الدخول</TabsTrigger>
                <TabsTrigger value="signup" className="flex-1 text-sm font-semibold">إنشاء حساب</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <LoginForm />
              </TabsContent>

              <TabsContent value="signup">
                <SignupForm />
              </TabsContent>
            </Tabs>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-4">
            <Link to="/" className="hover:text-primary transition-colors">العودة للرئيسية</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
