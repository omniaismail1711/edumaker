import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  GraduationCap, Mail, Lock, User, Globe, MapPin, BookOpen, Building2,
  Award, Brain, Upload, Link2, Briefcase, Sparkles, Shield, Star,
  CheckCircle2, ChevronLeft, ChevronRight, Sun, Moon, Phone,
  Plus, Trash2, Crown, Image, Video, Camera, IdCard, FileCheck,
  Clock, AlertCircle, Loader2,
} from "lucide-react";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { useTheme } from "next-themes";
import heroBg from "@/assets/hero-bg.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/i18n/translations";

/* ─── Floating decorative elements ─── */
function FloatingElements() {
  const { lang } = useLanguage();
  const a = translations.auth;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute top-[15%] left-[8%] bg-white/15 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-lg hidden lg:block">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
            <User className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-white">{t(a.mathTeacher, lang)}</p>
            <p className="text-xs text-white/70">{t(a.mathTeacherRole, lang)}</p>
          </div>
        </div>
        <div className="flex gap-1 mt-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute top-[40%] left-[5%] bg-white/10 backdrop-blur-xl rounded-xl p-3 border border-white/20 hidden lg:block">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-yellow-300" />
          <span className="text-xs text-white font-semibold">{t(a.verifiedCert, lang)}</span>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-[30%] left-[10%] bg-white/10 backdrop-blur-xl rounded-full p-3 border border-white/20 hidden lg:block">
        <Brain className="w-6 h-6 text-purple-300" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute top-[60%] left-[18%] bg-white/10 backdrop-blur-xl rounded-lg p-2 px-3 border border-white/20 hidden lg:block">
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-pink-300" />
          <span className="text-xs text-white/90">{t(a.digitalEd, lang)}</span>
        </div>
      </motion.div>
      {[
        { top: "20%", left: "25%", delay: 0.8 },
        { top: "50%", left: "22%", delay: 1.0 },
        { top: "35%", left: "15%", delay: 1.3 },
        { top: "70%", left: "12%", delay: 1.5 },
      ].map((dot, i) => (
        <motion.div key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 0.4, scale: 1 }} transition={{ delay: dot.delay, duration: 0.4 }}
          className="absolute w-2 h-2 rounded-full bg-white/30 hidden lg:block" style={{ top: dot.top, left: dot.left }} />
      ))}
    </div>
  );
}

/* ─── Step indicator ─── */
function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-6">
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : i < current ? "w-6 bg-primary/50" : "w-6 bg-muted"}`} />
      ))}
    </div>
  );
}

/* ─── Login form ─── */
function LoginForm() {
  const { lang, isRTL } = useLanguage();
  const a = translations.auth;
  return (
    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="login-email">{t(a.email, lang)}</Label>
        <div className="relative">
          <Input id="login-email" type="email" placeholder="example@email.com" className="pl-10 text-left" dir="ltr" />
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="login-password">{t(a.password, lang)}</Label>
        <div className="relative">
          <Input id="login-password" type="password" placeholder="••••••••" className="pl-10 text-left" dir="ltr" />
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">{t(a.rememberMe, lang)}</Label>
        </div>
        <button className="text-sm text-primary hover:underline">{t(a.forgotPassword, lang)}</button>
      </div>
      <Button className="w-full text-base font-semibold h-11">{t(a.loginButton, lang)}</Button>
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
        <div className="relative flex justify-center"><span className="bg-card px-3 text-xs text-muted-foreground">{t(a.or, lang)}</span></div>
      </div>
      <div className="grid gap-3">
        <Button variant="outline" className="w-full h-10 gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          {t(a.googleLogin, lang)}
        </Button>
        <Button variant="outline" className="w-full h-10 gap-2">
          <svg className="w-4 h-4" viewBox="0 0 23 23"><path fill="#f3f3f3" d="M0 0h23v23H0z"/><path fill="#f35325" d="M1 1h10v10H1z"/><path fill="#81bc06" d="M12 1h10v10H12z"/><path fill="#05a6f0" d="M1 12h10v10H1z"/><path fill="#ffba08" d="M12 12h10v10H12z"/></svg>
          {t(a.microsoftLogin, lang)}
        </Button>
      </div>
    </motion.div>
  );
}

/* ─── Signup multi-step form ─── */
function SignupForm() {
  const { lang, isRTL } = useLanguage();
  const a = translations.auth;
  const [step, setStep] = useState(0);
  const [userType, setUserType] = useState<"teacher" | "student" | null>(null);
  const [unionMember, setUnionMember] = useState<"yes" | "no" | null>(null);
  const [unionVerified, setUnionVerified] = useState(false);
  const [unionPending, setUnionPending] = useState(false);

  const totalSteps = 4;
  const PrevIcon = isRTL ? ChevronRight : ChevronLeft;
  const NextIcon = isRTL ? ChevronLeft : ChevronRight;

  const faculties = [
    "كلية التربية",
    "كلية التربية النوعية",
    "كلية التربية للطفولة المبكرة / رياض الأطفال",
    "كلية التربية الرياضية",
    "كلية التربية الفنية",
    "كلية التربية الموسيقية",
  ];
  const studentFaculties = [...faculties, "أخرى"];
  const subjects = ["الرياضيات", "العلوم", "اللغة العربية", "اللغة الإنجليزية", "الحاسب الآلي", "التربية الإسلامية", "الفيزياء", "الكيمياء", "الأحياء", "التاريخ", "الجغرافيا", "أخرى"];
  const educationalStages = Object.values(a.stages).map(v => t(v, lang));
  const graduationYears = Array.from({ length: 16 }, (_, i) => String(2010 + i));

  const stepLabels = [
    lang === "ar" ? "نوع الحساب" : "Account Type",
    lang === "ar" ? "البيانات الأساسية" : "Basic Info",
    userType === "teacher"
      ? (lang === "ar" ? "المعلومات المهنية" : "Professional Info")
      : (lang === "ar" ? "المعلومات الدراسية" : "Academic Info"),
    lang === "ar" ? "إنشاء الحساب" : "Create Account",
  ];

  return (
    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} className="space-y-4">
      {/* Step Progress */}
      <div className="flex items-center justify-center gap-2 mb-2">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === step ? "w-8 bg-primary" : i < step ? "w-6 bg-primary/50" : "w-6 bg-muted"}`} />
        ))}
      </div>
      <p className="text-center text-sm font-semibold text-primary mb-4">{stepLabels[step]}</p>

      <AnimatePresence mode="wait">
        {/* Step 0: Choose Account Type */}
        {step === 0 && (
          <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
            <h3 className="text-center font-bold text-foreground text-lg">{lang === "ar" ? "اختر نوع الحساب" : "Choose Account Type"}</h3>

            {/* Teacher Card */}
            <div
              className={`border-2 rounded-2xl p-5 cursor-pointer transition-all ${userType === "teacher" ? "border-primary bg-primary/5 shadow-md" : "border-border hover:border-primary/30 hover:bg-secondary/30"}`}
              onClick={() => setUserType("teacher")}
            >
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${userType === "teacher" ? "bg-primary/20" : "bg-secondary"}`}>
                  <GraduationCap className={`w-7 h-7 ${userType === "teacher" ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground text-base">{lang === "ar" ? "معلم" : "Teacher"}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                    {lang === "ar"
                      ? "للمعلمين العاملين أو الخريجين من الكليات المرتبطة بالتدريس."
                      : "For working teachers or graduates of education-related faculties."}
                  </p>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${userType === "teacher" ? "border-primary" : "border-muted-foreground/40"}`}>
                  {userType === "teacher" && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                </div>
              </div>
            </div>

            {/* Student Card */}
            <div
              className={`border-2 rounded-2xl p-5 cursor-pointer transition-all ${userType === "student" ? "border-accent bg-accent/5 shadow-md" : "border-border hover:border-accent/30 hover:bg-secondary/30"}`}
              onClick={() => setUserType("student")}
            >
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${userType === "student" ? "bg-accent/20" : "bg-secondary"}`}>
                  <BookOpen className={`w-7 h-7 ${userType === "student" ? "text-accent" : "text-muted-foreground"}`} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground text-base">{lang === "ar" ? "طالب" : "Student"}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                    {lang === "ar"
                      ? "لطلاب الكليات المرتبطة بالتدريس الذين يستعدون للعمل كمعلمين."
                      : "For students of education-related faculties preparing to become teachers."}
                  </p>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${userType === "student" ? "border-accent" : "border-muted-foreground/40"}`}>
                  {userType === "student" && <div className="w-2.5 h-2.5 rounded-full bg-accent" />}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 1: Basic Info */}
        {step === 1 && (
          <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
            <div className="space-y-2">
              <Label>{t(a.fullName, lang)}</Label>
              <div className="relative">
                <Input placeholder={t(a.fullNamePlaceholder, lang)} className={isRTL ? "pr-10 h-12 text-base" : "pl-10 h-12 text-base"} />
                <User className={`absolute ${isRTL ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground`} />
              </div>
            </div>
            <div className="space-y-2">
              <Label>{t(a.email, lang)}</Label>
              <div className="relative">
                <Input type="email" placeholder="example@email.com" className="pl-10 text-left h-12 text-base" dir="ltr" />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>{t(a.password, lang)}</Label>
              <div className="relative">
                <Input type="password" placeholder="••••••••" className="pl-10 text-left h-12 text-base" dir="ltr" />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 2A: Teacher Professional Info */}
        {step === 2 && userType === "teacher" && (
          <motion.div key="step2a" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
            <div className="space-y-2">
              <Label>{lang === "ar" ? "المادة التي يدرسها" : "Subject"}</Label>
              <Select>
                <SelectTrigger className="h-12"><BookOpen className={`w-4 h-4 text-muted-foreground ${isRTL ? "ml-2" : "mr-2"}`} /><SelectValue placeholder={t(a.selectSubject, lang)} /></SelectTrigger>
                <SelectContent>{subjects.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>{lang === "ar" ? "المرحلة الدراسية" : "Grade Level"}</Label>
              <Select>
                <SelectTrigger className="h-12"><SelectValue placeholder={lang === "ar" ? "اختر المرحلة" : "Select grade level"} /></SelectTrigger>
                <SelectContent>{educationalStages.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>{lang === "ar" ? "سنوات الخبرة" : "Years of Experience"}</Label>
              <Select>
                <SelectTrigger className="h-12"><SelectValue placeholder={lang === "ar" ? "اختر سنوات الخبرة" : "Select experience"} /></SelectTrigger>
                <SelectContent>
                  {["أقل من سنة", "1-3 سنوات", "3-5 سنوات", "5-10 سنوات", "أكثر من 10 سنوات"].map(y => (
                    <SelectItem key={y} value={y}>{y}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>{lang === "ar" ? "كلية التخرج" : "Faculty of Graduation"}</Label>
              <Select>
                <SelectTrigger className="h-12"><Building2 className={`w-4 h-4 text-muted-foreground ${isRTL ? "ml-2" : "mr-2"}`} /><SelectValue placeholder={lang === "ar" ? "اختر الكلية" : "Select faculty"} /></SelectTrigger>
                <SelectContent>{faculties.map(f => <SelectItem key={f} value={f}>{f}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>{lang === "ar" ? "اسم الجامعة" : "University"}</Label>
              <div className="relative">
                <Input placeholder={lang === "ar" ? "جامعة المنصورة – جامعة القاهرة – جامعة الإسكندرية" : "e.g. Cairo University"} className={`${isRTL ? "pr-10" : "pl-10"} h-12 text-base`} />
                <Building2 className={`absolute ${isRTL ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground`} />
              </div>
            </div>
            <div className="space-y-2">
              <Label>{lang === "ar" ? "سنة التخرج" : "Year of Graduation"}</Label>
              <Select>
                <SelectTrigger className="h-12"><SelectValue placeholder={lang === "ar" ? "اختر السنة" : "Select year"} /></SelectTrigger>
                <SelectContent>{graduationYears.map(y => <SelectItem key={y} value={y}>{y}</SelectItem>)}</SelectContent>
              </Select>
            </div>

            {/* Union Verification */}
            <div className="border rounded-xl p-4 space-y-3 bg-secondary/30">
              <div className="flex items-center gap-2">
                <IdCard className="w-5 h-5 text-primary" />
                <Label className="text-sm font-semibold">{lang === "ar" ? "هل أنت عضو في نقابة المهن التعليمية؟" : "Are you a member of the Teachers' Union?"}</Label>
              </div>
              <div className="flex gap-3">
                <Button type="button" variant={unionMember === "yes" ? "default" : "outline"} size="sm" onClick={() => setUnionMember("yes")} className="flex-1">
                  {lang === "ar" ? "نعم" : "Yes"}
                </Button>
                <Button type="button" variant={unionMember === "no" ? "default" : "outline"} size="sm" onClick={() => setUnionMember("no")} className="flex-1">
                  {lang === "ar" ? "لا" : "No"}
                </Button>
              </div>

              <AnimatePresence mode="wait">
                {unionMember === "yes" && !unionVerified && !unionPending && (
                  <motion.div key="union-upload" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="space-y-3 overflow-hidden">
                    <div className="space-y-2">
                      <Label className="text-xs">{lang === "ar" ? "صورة كارنيه النقابة أو شهادة العضوية" : "Upload membership card"}</Label>
                      <div className="border-2 border-dashed border-border rounded-xl p-4 text-center hover:border-primary/40 transition-colors cursor-pointer">
                        <Upload className="w-6 h-6 text-muted-foreground mx-auto mb-1" />
                        <p className="text-xs text-muted-foreground">{lang === "ar" ? "اسحب الملف هنا أو اضغط للرفع" : "Drag & drop or click to upload"}</p>
                      </div>
                    </div>
                    <Button size="sm" className="w-full" onClick={() => setUnionPending(true)}>
                      <FileCheck className="w-4 h-4 ml-1" />
                      {lang === "ar" ? "إرسال طلب التحقق" : "Submit verification"}
                    </Button>
                  </motion.div>
                )}
                {unionPending && !unionVerified && (
                  <motion.div key="union-pending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border border-yellow-500/30 bg-yellow-500/5 rounded-lg p-3 text-center">
                    <Clock className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
                    <p className="text-xs font-semibold text-foreground">{lang === "ar" ? "طلب قيد المراجعة" : "Verification pending"}</p>
                  </motion.div>
                )}
                {unionVerified && (
                  <motion.div key="union-done" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border border-green-500/30 bg-green-500/5 rounded-lg p-3 text-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto mb-1" />
                    <p className="text-xs font-semibold text-foreground">{lang === "ar" ? "تم التحقق — 6 أشهر عضوية مميزة" : "Verified — 6 months premium"}</p>
                    <Badge className="mt-1 bg-primary/10 text-primary border-0 text-[10px]">
                      <Crown className="w-3 h-3 ml-1" /> {lang === "ar" ? "معلم مقيد بنقابة المهن التعليمية" : "Union Verified Teacher"}
                    </Badge>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* Step 2B: Student Info */}
        {step === 2 && userType === "student" && (
          <motion.div key="step2b" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
            <div className="space-y-2">
              <Label>{lang === "ar" ? "السنة الدراسية" : "Academic Year"}</Label>
              <Select>
                <SelectTrigger className="h-12"><SelectValue placeholder={lang === "ar" ? "اختر السنة الدراسية" : "Select academic year"} /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="third">{lang === "ar" ? "السنة الثالثة" : "Third Year"}</SelectItem>
                  <SelectItem value="fourth">{lang === "ar" ? "السنة الرابعة" : "Fourth Year"}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>{lang === "ar" ? "الكلية" : "Faculty"}</Label>
              <Select>
                <SelectTrigger className="h-12"><Building2 className={`w-4 h-4 text-muted-foreground ${isRTL ? "ml-2" : "mr-2"}`} /><SelectValue placeholder={lang === "ar" ? "اختر الكلية" : "Select faculty"} /></SelectTrigger>
                <SelectContent>{studentFaculties.map(f => <SelectItem key={f} value={f}>{f}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>{lang === "ar" ? "اسم الجامعة" : "University"}</Label>
              <div className="relative">
                <Input placeholder={lang === "ar" ? "جامعة المنصورة – جامعة القاهرة – جامعة الإسكندرية" : "e.g. Cairo University"} className={`${isRTL ? "pr-10" : "pl-10"} h-12 text-base`} />
                <Building2 className={`absolute ${isRTL ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground`} />
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
            <div className="text-center">
              <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center ${userType === "teacher" ? "bg-primary/10" : "bg-accent/10"}`}>
                {userType === "teacher"
                  ? <GraduationCap className="w-8 h-8 text-primary" />
                  : <BookOpen className="w-8 h-8 text-accent" />}
              </div>
              <h3 className="font-bold text-foreground text-lg mb-1">
                {userType === "teacher"
                  ? (lang === "ar" ? "إنشاء حساب معلم" : "Create Teacher Account")
                  : (lang === "ar" ? "إنشاء حساب معلم المستقبل" : "Create Future Teacher Account")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {userType === "teacher"
                  ? (lang === "ar" ? "سيتم إنشاء ملفك المهني كمعلم مع الوصول الكامل لجميع مميزات المنصة." : "Your teacher profile will be created with full platform access.")
                  : (lang === "ar" ? "سيتم إنشاء حسابك كطالب يستعد ليكون معلماً. يمكنك لاحقاً ترقية حسابك عند التخرج." : "Your student account will be created. You can upgrade to a full teacher account after graduation.")}
              </p>
            </div>

            {userType === "student" && (
              <div className="border rounded-xl p-4 bg-accent/5 border-accent/20">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <p className="text-sm font-semibold text-foreground">{lang === "ar" ? "تحديث الحالة المهنية" : "Future Status Update"}</p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {lang === "ar"
                    ? "بعد التخرج، يمكنك تحديث حالتك إلى «معلم خريج» من إعدادات الملف الشخصي، مما سيفتح لك جميع مميزات المعلمين مثل سوق الموارد والملف المهني الكامل مع الاحتفاظ بحسابك وسجلك."
                    : "After graduation, update your status to 'Graduate Teacher' in profile settings to unlock all teacher features while keeping your account history."}
                </p>
              </div>
            )}

            <div className="space-y-2">
              <div className="flex items-start gap-3 p-3 rounded-lg border bg-card">
                <Checkbox id="terms" className="mt-0.5" />
                <Label htmlFor="terms" className="text-xs text-muted-foreground cursor-pointer leading-relaxed">
                  {lang === "ar"
                    ? "أوافق على شروط الاستخدام وسياسة الخصوصية"
                    : "I agree to the Terms of Service and Privacy Policy"}
                </Label>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex gap-3 pt-2">
        {step > 0 && (
          <Button variant="outline" className="flex-1 gap-1 h-11" onClick={() => setStep(s => s - 1)}>
            <PrevIcon className="w-4 h-4" />
            {t(a.previous, lang)}
          </Button>
        )}
        {step === 0 ? (
          <Button className="flex-1 gap-1 h-11" disabled={!userType} onClick={() => setStep(1)}>
            {lang === "ar" ? "متابعة التسجيل" : "Continue"}
            <NextIcon className="w-4 h-4" />
          </Button>
        ) : step < totalSteps - 1 ? (
          <Button className="flex-1 gap-1 h-11" onClick={() => setStep(s => s + 1)}>
            {t(a.next, lang)}
            <NextIcon className="w-4 h-4" />
          </Button>
        ) : (
          <Button className="flex-1 font-semibold h-11">
            <CheckCircle2 className="w-4 h-4 ml-1" />
            {t(a.createAccount, lang)}
          </Button>
        )}
      </div>
    </motion.div>
  );
}

/* ─── Main Auth Page ─── */
export default function Auth() {
  const { lang, isRTL } = useLanguage();
  const a = translations.auth;
  const n = translations.nav;
  const { theme, setTheme } = useTheme();

  return (
    <div className={`min-h-screen flex ${isRTL ? "" : "flex-row-reverse"}`} dir={isRTL ? "rtl" : "ltr"}>
      <div className="hidden lg:flex lg:w-[55%] relative overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210_55%_35%/0.6)] via-[hsl(260_40%_50%/0.4)] to-[hsl(350_45%_72%/0.3)]" />
        <FloatingElements />
        <div className={`relative z-10 flex flex-col justify-center ${isRTL ? "px-12 xl:px-16" : "px-12 xl:px-16"}`}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">{t(n.platformName, lang)}</h2>
            </div>
            <h1 className="text-3xl xl:text-4xl font-extrabold text-white leading-snug mb-4 whitespace-pre-line">
              {t(a.welcomeTitle, lang)}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-md">{t(a.welcomeDesc, lang)}</p>
            <div className="flex gap-4 mt-8">
              {[
                { value: "12,500+", label: t(a.teacher, lang) },
                { value: "850+", label: t(a.school, lang) },
                { value: "35,000+", label: t(a.certLabel, lang) },
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

      <div className="flex-1 flex items-center justify-center bg-background p-4 sm:p-8 overflow-y-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="w-full max-w-md">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 lg:hidden">
              <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">{t(n.platformName, lang)}</span>
            </div>
            <div className="hidden lg:block" />
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="relative overflow-hidden">
              <Sun className="w-4 h-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute w-4 h-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>

          <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-border/60 shadow-xl p-6 sm:p-8">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-foreground mb-1">{t(a.welcomeBack, lang)}</h2>
              <p className="text-sm text-muted-foreground">{t(a.welcomeBackSub, lang)}</p>
            </div>

            <Tabs defaultValue="login" className="w-full">
              <TabsList className="w-full mb-6 bg-secondary/60">
                <TabsTrigger value="login" className="flex-1 text-sm font-semibold">{t(a.login, lang)}</TabsTrigger>
                <TabsTrigger value="signup" className="flex-1 text-sm font-semibold">{t(a.signup, lang)}</TabsTrigger>
              </TabsList>
              <TabsContent value="login"><LoginForm /></TabsContent>
              <TabsContent value="signup"><SignupForm /></TabsContent>
            </Tabs>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-4">
            <Link to="/" className="hover:text-primary transition-colors">{t(a.backToHome, lang)}</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
