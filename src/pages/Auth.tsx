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
  const totalSteps = 7;
  const [unionMethod, setUnionMethod] = useState<"number" | "upload" | null>(null);
  const [unionVerified, setUnionVerified] = useState(false);
  const [unionPending, setUnionPending] = useState(false);
  const [courses, setCourses] = useState([{ name: "", issuer: "", year: "" }]);
  const [galleryItems, setGalleryItems] = useState<{ title: string; caption: string; type: "image" | "youtube"; url: string }[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<"free" | "premium-monthly" | "premium-yearly">("free");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const stepTitles = [t(a.step1, lang), t(a.step2, lang), t(a.step3, lang), t(a.step4, lang), "التحقق المهني", t(a.step5, lang), t(a.step6, lang)];

  const educationalStages = Object.values(a.stages).map(v => t(v, lang));
  const subjects = ["الرياضيات", "العلوم", "اللغة العربية", "اللغة الإنجليزية", "الحاسب الآلي", "التربية الإسلامية", "الفيزياء", "الكيمياء", "الأحياء", "التاريخ", "الجغرافيا", "أخرى"];
  const countries = ["السعودية", "مصر", "الأردن", "الإمارات", "الكويت", "قطر", "البحرين", "عُمان", "المغرب", "تونس", "الجزائر", "العراق"];
  const experienceOptions = Object.values(a.experienceOptions).map(v => t(v, lang));
  const skills = ["التعليم الرقمي", "الذكاء الاصطناعي", "Google Workspace", "Microsoft Teams", "Canva", "Gamification", "التعلم المدمج", "STEM"];

  const PrevIcon = isRTL ? ChevronRight : ChevronLeft;
  const NextIcon = isRTL ? ChevronLeft : ChevronRight;

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]);
  };

  const premiumBenefits = [a.premiumBenefit1, a.premiumBenefit2, a.premiumBenefit3, a.premiumBenefit4, a.premiumBenefit5];

  return (
    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} className="space-y-4">
      <StepIndicator current={step} total={totalSteps} />
      <p className="text-center text-sm font-semibold text-primary mb-4">{stepTitles[step]}</p>

      <AnimatePresence mode="wait">
        {/* Step 0: Basic Info */}
        {step === 0 && (
          <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
            <div className="space-y-2">
              <Label>{t(a.fullName, lang)}</Label>
              <div className="relative">
                <Input placeholder={t(a.fullNamePlaceholder, lang)} className={isRTL ? "pr-10" : "pl-10"} />
                <User className={`absolute ${isRTL ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground`} />
              </div>
            </div>
            <div className="space-y-2">
              <Label>{t(a.email, lang)}</Label>
              <div className="relative">
                <Input type="email" placeholder="example@email.com" className="pl-10 text-left" dir="ltr" />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>{t(a.password, lang)}</Label>
              <div className="relative">
                <Input type="password" placeholder="••••••••" className="pl-10 text-left" dir="ltr" />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>{t(a.phone, lang)}</Label>
              <div className="relative">
                <Input placeholder={t(a.phonePlaceholder, lang)} className="pl-10 text-left" dir="ltr" />
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label>{t(a.country, lang)}</Label>
                <Select>
                  <SelectTrigger><Globe className={`w-4 h-4 text-muted-foreground ${isRTL ? "ml-2" : "mr-2"}`} /><SelectValue placeholder={t(a.selectCountry, lang)} /></SelectTrigger>
                  <SelectContent>{countries.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>{t(a.city, lang)}</Label>
                <div className="relative">
                  <Input placeholder={t(a.city, lang)} className={isRTL ? "pr-10" : "pl-10"} />
                  <MapPin className={`absolute ${isRTL ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground`} />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 1: Professional Info */}
        {step === 1 && (
          <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
            <div className="space-y-2">
              <Label>{t(a.currentJob, lang)}</Label>
              <div className="relative">
                <Input placeholder={t(a.currentJobPlaceholder, lang)} className={isRTL ? "pr-10" : "pl-10"} />
                <Briefcase className={`absolute ${isRTL ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground`} />
              </div>
            </div>
            <div className="space-y-2">
              <Label>{t(a.institution, lang)}</Label>
              <div className="relative">
                <Input placeholder={t(a.institutionPlaceholder, lang)} className={isRTL ? "pr-10" : "pl-10"} />
                <Building2 className={`absolute ${isRTL ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground`} />
              </div>
            </div>
            <div className="space-y-2">
              <Label>{t(a.jobDescription, lang)}</Label>
              <Textarea placeholder={t(a.jobDescriptionPlaceholder, lang)} rows={3} />
            </div>
            <div className="space-y-2">
              <Label>{t(a.subject, lang)}</Label>
              <Select>
                <SelectTrigger><BookOpen className={`w-4 h-4 text-muted-foreground ${isRTL ? "ml-2" : "mr-2"}`} /><SelectValue placeholder={t(a.selectSubject, lang)} /></SelectTrigger>
                <SelectContent>{subjects.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>{t(a.educationalStage, lang)}</Label>
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
              <Label>{t(a.experience, lang)}</Label>
              <Select>
                <SelectTrigger><SelectValue placeholder={t(a.selectExperience, lang)} /></SelectTrigger>
                <SelectContent>{experienceOptions.map(y => <SelectItem key={y} value={y}>{y}</SelectItem>)}</SelectContent>
              </Select>
            </div>
          </motion.div>
        )}

        {/* Step 2: Skills & Certificates */}
        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
            <div className="space-y-3">
              <Label>{t(a.skills, lang)}</Label>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <Badge key={skill} variant={selectedSkills.includes(skill) ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary/10 transition-colors px-3 py-1.5 text-xs"
                    onClick={() => toggleSkill(skill)}>{skill}</Badge>
                ))}
              </div>
            </div>

            {/* Dynamic courses */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label>{t(a.addCourse, lang)}</Label>
                <Button type="button" variant="ghost" size="sm" onClick={() => setCourses(prev => [...prev, { name: "", issuer: "", year: "" }])}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              {courses.map((_, i) => (
                <div key={i} className="border rounded-lg p-3 space-y-2 relative">
                  {courses.length > 1 && (
                    <Button type="button" variant="ghost" size="icon" className="absolute top-1 left-1 w-6 h-6"
                      onClick={() => setCourses(prev => prev.filter((_, j) => j !== i))}>
                      <Trash2 className="w-3 h-3 text-destructive" />
                    </Button>
                  )}
                  <Input placeholder={t(a.courseNamePlaceholder, lang)} />
                  <div className="grid grid-cols-2 gap-2">
                    <Input placeholder={t(a.courseIssuerPlaceholder, lang)} />
                    <Input placeholder={t(a.courseYear, lang)} type="number" min="2000" max="2026" />
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <Label>{t(a.uploadCerts, lang)}</Label>
              <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/40 transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">{t(a.uploadDragDrop, lang)}</p>
                <p className="text-xs text-muted-foreground/70 mt-1">{t(a.uploadFormats, lang)}</p>
              </div>
            </div>
            <div className="space-y-2">
              <Label>{t(a.portfolioLink, lang)}</Label>
              <div className="relative">
                <Input placeholder={t(a.portfolioPlaceholder, lang)} className={`${isRTL ? "pr-10" : "pl-10"} text-left`} dir="ltr" />
                <Link2 className={`absolute ${isRTL ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground`} />
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Photo & Gallery */}
        {step === 3 && (
          <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
            {/* Profile Photo */}
            <div className="space-y-3">
              <Label>{t(a.profilePhoto, lang)}</Label>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-secondary border-2 border-dashed border-border flex items-center justify-center">
                  <Camera className="w-8 h-8 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <Button type="button" variant="outline" size="sm"><Upload className="w-4 h-4 ml-1" />{t(a.uploadPhoto, lang)}</Button>
                  <p className="text-xs text-muted-foreground mt-1">{t(a.profilePhotoDesc, lang)}</p>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label>{t(a.galleryTitle, lang)}</Label>
                <Button type="button" variant="ghost" size="sm"
                  onClick={() => setGalleryItems(prev => [...prev, { title: "", caption: "", type: "youtube", url: "" }])}>
                  <Plus className="w-4 h-4 ml-1" />{t(a.addGalleryItem, lang)}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">{t(a.galleryDesc, lang)}</p>

              {galleryItems.map((item, i) => (
                <div key={i} className="border rounded-lg p-3 space-y-2 relative">
                  <Button type="button" variant="ghost" size="icon" className="absolute top-1 left-1 w-6 h-6"
                    onClick={() => setGalleryItems(prev => prev.filter((_, j) => j !== i))}>
                    <Trash2 className="w-3 h-3 text-destructive" />
                  </Button>
                  <Input placeholder={t(a.galleryItemTitlePlaceholder, lang)} />
                  <Input placeholder={t(a.galleryItemCaptionPlaceholder, lang)} />
                  <div className="flex gap-2">
                    <Button type="button" variant={item.type === "youtube" ? "default" : "outline"} size="sm"
                      onClick={() => { const n = [...galleryItems]; n[i].type = "youtube"; setGalleryItems(n); }}>
                      <Video className="w-3 h-3 ml-1" />{t(a.galleryItemYoutube, lang)}
                    </Button>
                    <Button type="button" variant={item.type === "image" ? "default" : "outline"} size="sm"
                      onClick={() => { const n = [...galleryItems]; n[i].type = "image"; setGalleryItems(n); }}>
                      <Image className="w-3 h-3 ml-1" />{t(a.galleryItemImage, lang)}
                    </Button>
                  </div>
                  {item.type === "youtube" ? (
                    <Input placeholder={t(a.galleryItemUrlPlaceholder, lang)} className="text-left" dir="ltr" />
                  ) : (
                    <div className="border-2 border-dashed border-border rounded-lg p-4 text-center cursor-pointer hover:border-primary/40 transition-colors">
                      <Upload className="w-6 h-6 text-muted-foreground mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">{t(a.uploadDragDrop, lang)}</p>
                    </div>
                  )}
                </div>
              ))}

              {galleryItems.length === 0 && (
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center">
                  <Image className="w-10 h-10 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">{t(a.galleryDesc, lang)}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Step 4: Verification & Subscription */}
        {step === 4 && (
          <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
            <div className="text-center mb-2">
              <h3 className="font-semibold text-foreground">{t(a.verificationTitle, lang)}</h3>
              <p className="text-xs text-muted-foreground">{t(a.verificationDesc, lang)}</p>
            </div>

            {/* Free Plan */}
            <div className={`border rounded-xl p-4 cursor-pointer transition-all ${selectedPlan === "free" ? "border-primary bg-primary/5" : "hover:bg-secondary/50"}`}
              onClick={() => setSelectedPlan("free")}>
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPlan === "free" ? "border-primary" : "border-muted-foreground"}`}>
                  {selectedPlan === "free" && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t(a.freePlan, lang)}</p>
                  <p className="text-xs text-muted-foreground">{t(a.freePlanDesc, lang)}</p>
                </div>
              </div>
            </div>

            {/* Premium Plan - Monthly */}
            <div className={`border rounded-xl p-4 cursor-pointer transition-all relative overflow-hidden ${selectedPlan === "premium-monthly" ? "border-badge-gold bg-badge-gold/5" : "hover:bg-secondary/50"}`}
              onClick={() => setSelectedPlan("premium-monthly")}>
              <div className="absolute top-0 right-0 bg-badge-gold text-primary-foreground text-[10px] font-bold px-3 py-0.5 rounded-bl-lg">PRO</div>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPlan === "premium-monthly" ? "border-badge-gold" : "border-muted-foreground"}`}>
                  {selectedPlan === "premium-monthly" && <div className="w-2.5 h-2.5 rounded-full bg-badge-gold" />}
                </div>
                <div>
                  <p className="font-semibold text-foreground flex items-center gap-1.5">
                    <Crown className="w-4 h-4 text-badge-gold" />
                    {t(a.premiumPlan, lang)} — {t(a.monthly, lang)}
                  </p>
                  <p className="text-xs font-bold text-badge-gold">{t(a.premiumPlanPriceMonthly, lang)}</p>
                </div>
              </div>
              <ul className="space-y-1.5 mr-8">
                {premiumBenefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="w-3 h-3 text-badge-gold shrink-0" />
                    {t(b, lang)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Premium Plan - Yearly */}
            <div className={`border rounded-xl p-4 cursor-pointer transition-all relative overflow-hidden ${selectedPlan === "premium-yearly" ? "border-badge-gold bg-badge-gold/5" : "hover:bg-secondary/50"}`}
              onClick={() => setSelectedPlan("premium-yearly")}>
              <div className="absolute top-0 right-0 bg-badge-gold text-primary-foreground text-[10px] font-bold px-3 py-0.5 rounded-bl-lg">PRO</div>
              <div className="absolute top-0 left-0 bg-green-600 text-primary-foreground text-[10px] font-bold px-3 py-0.5 rounded-br-lg">{t(a.premiumPlanYearlySave, lang)}</div>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPlan === "premium-yearly" ? "border-badge-gold" : "border-muted-foreground"}`}>
                  {selectedPlan === "premium-yearly" && <div className="w-2.5 h-2.5 rounded-full bg-badge-gold" />}
                </div>
                <div>
                  <p className="font-semibold text-foreground flex items-center gap-1.5">
                    <Crown className="w-4 h-4 text-badge-gold" />
                    {t(a.premiumPlan, lang)} — {t(a.yearly, lang)}
                  </p>
                  <p className="text-xs font-bold text-badge-gold">{t(a.premiumPlanPriceYearly, lang)}</p>
                </div>
              </div>
              <ul className="space-y-1.5 mr-8">
                {premiumBenefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="w-3 h-3 text-badge-gold shrink-0" />
                    {t(b, lang)}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* Step 5: Account Settings */}
        {step === 5 && (
          <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
            <div className="space-y-4">
              <Label className="text-foreground text-base">{t(a.profileSettings, lang)}</Label>
              <div className="space-y-3">
                {[
                  { id: "available", label: t(a.availableForHire, lang), icon: Briefcase, desc: t(a.availableForHireDesc, lang) },
                  { id: "training", label: t(a.interestedInTraining, lang), icon: Award, desc: t(a.interestedInTrainingDesc, lang) },
                  { id: "visible", label: t(a.showProfile, lang), icon: Shield, desc: t(a.showProfileDesc, lang) },
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

      <div className="flex gap-3 pt-2">
        {step > 0 && (
          <Button variant="outline" className="flex-1 gap-1" onClick={() => setStep(s => s - 1)}>
            <PrevIcon className="w-4 h-4" />
            {t(a.previous, lang)}
          </Button>
        )}
        {step < totalSteps - 1 ? (
          <Button className="flex-1 gap-1" onClick={() => setStep(s => s + 1)}>
            {t(a.next, lang)}
            <NextIcon className="w-4 h-4" />
          </Button>
        ) : (
          <Button className="flex-1 font-semibold">
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
