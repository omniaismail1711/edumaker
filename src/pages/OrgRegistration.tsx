import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Building2,
  User,
  Mail,
  Lock,
  Phone,
  Globe,
  MapPin,
  GraduationCap,
  Users,
  Link2,
  Upload,
  Image,
  FileCheck,
  Crown,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Star,
  Briefcase,
  FolderKanban,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

function StepBar({ current, total }: { current: number; total: number }) {
  const progress = ((current + 1) / total) * 100;
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-muted-foreground">
          {current + 1} / {total}
        </span>
        <span className="text-xs font-semibold text-primary">{Math.round(progress)}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
}

export default function OrgRegistration() {
  const { lang, isRTL } = useLanguage();
  const [step, setStep] = useState(0);
  const totalSteps = 5;

  const [selectedSpecs, setSelectedSpecs] = useState<string[]>([]);
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<"free" | "premium">("free");
  const [collaboration, setCollaboration] = useState(false);

  const PrevIcon = isRTL ? ChevronRight : ChevronLeft;
  const NextIcon = isRTL ? ChevronLeft : ChevronRight;

  const stepTitles = lang === "ar"
    ? ["المعلومات الأساسية", "تفاصيل المؤسسة", "الاحتياجات والتعاون", "الوسائط والتوثيق", "خطة الاشتراك"]
    : ["Basic Information", "Organization Details", "Needs & Collaboration", "Media & Verification", "Subscription Plan"];

  const specializations = lang === "ar"
    ? ["STEM", "الذكاء الاصطناعي", "الرياضيات", "العلوم", "اللغة العربية", "اللغة الإنجليزية", "الحاسب الآلي", "التربية الخاصة", "رياض الأطفال", "التربية البدنية"]
    : ["STEM", "AI", "Math", "Science", "Arabic", "English", "Computer Science", "Special Education", "Kindergarten", "Physical Education"];

  const gradeLevels = lang === "ar"
    ? ["رياض الأطفال", "المرحلة الابتدائية", "المرحلة المتوسطة", "المرحلة الثانوية", "التعليم الجامعي"]
    : ["Kindergarten", "Elementary", "Middle School", "High School", "University"];

  const orgTypes = lang === "ar"
    ? ["مدرسة", "أكاديمية تدريب", "مؤسسة تعليمية", "جهة حكومية"]
    : ["School", "Training Academy", "Educational Institution", "Government Entity"];

  const countries = ["السعودية", "مصر", "الأردن", "الإمارات", "الكويت", "قطر", "البحرين", "عُمان", "المغرب", "تونس"];

  const toggleTag = (value: string, list: string[], setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    setter(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
  };

  const premiumFeatures = lang === "ar"
    ? ["شارة توثيق المؤسسة", "أولوية في نتائج البحث", "الوصول لبيانات المعلمين المتميزين", "لوحة تحليلات متقدمة", "دعم فني أولوي"]
    : ["Verified institution badge", "Priority in search results", "Access to top educator data", "Advanced analytics dashboard", "Priority support"];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-10 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <Link to="/choose-account" className="inline-flex items-center gap-2 mb-4">
            <img src={logo} alt="" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold text-foreground">
              {lang === "ar" ? "صُنّاع التعليم" : "Education Makers"}
            </span>
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-[1.8]">
            {lang === "ar" ? "تسجيل حساب مؤسسة تعليمية" : "Register Educational Institution"}
          </h1>
          <div className="flex items-center justify-center gap-2 mt-2">
            <Building2 className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">{stepTitles[step]}</span>
          </div>
        </motion.div>

        {/* Form Card */}
        <div className="w-full max-w-2xl">
          <div className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm">
            <StepBar current={step} total={totalSteps} />

            <AnimatePresence mode="wait">
              {/* Step 0: Basic Info */}
              {step === 0 && (
                <motion.div key="s0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                  <div className="space-y-2">
                    <Label>{lang === "ar" ? "اسم المؤسسة *" : "Organization Name *"}</Label>
                    <div className="relative">
                      <Input placeholder={lang === "ar" ? "مدارس المعرفة الأهلية" : "Knowledge Academy"} className={isRTL ? "pr-10" : "pl-10"} />
                      <Building2 className={`absolute ${isRTL ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground`} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>{lang === "ar" ? "اسم مسؤول التواصل *" : "Contact Person Name *"}</Label>
                    <div className="relative">
                      <Input placeholder={lang === "ar" ? "أحمد محمد" : "Ahmed Mohamed"} className={isRTL ? "pr-10" : "pl-10"} />
                      <User className={`absolute ${isRTL ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground`} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>{lang === "ar" ? "البريد الإلكتروني *" : "Email *"}</Label>
                    <div className="relative">
                      <Input type="email" placeholder="info@school.edu" className="pl-10 text-left" dir="ltr" />
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>{lang === "ar" ? "رقم الهاتف *" : "Phone Number *"}</Label>
                      <div className="relative">
                        <Input placeholder="+20 1XX XXX XXXX" className="pl-10 text-left" dir="ltr" />
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>{lang === "ar" ? "كلمة المرور *" : "Password *"}</Label>
                      <div className="relative">
                        <Input type="password" placeholder="••••••••" className="pl-10 text-left" dir="ltr" />
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 1: Organization Details */}
              {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                  <div className="space-y-2">
                    <Label>{lang === "ar" ? "نوع المؤسسة" : "Organization Type"}</Label>
                    <Select>
                      <SelectTrigger>
                        <Building2 className="w-4 h-4 text-muted-foreground me-2" />
                        <SelectValue placeholder={lang === "ar" ? "اختر نوع المؤسسة" : "Select type"} />
                      </SelectTrigger>
                      <SelectContent>
                        {orgTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>{lang === "ar" ? "الدولة" : "Country"}</Label>
                      <Select>
                        <SelectTrigger>
                          <Globe className="w-4 h-4 text-muted-foreground me-2" />
                          <SelectValue placeholder={lang === "ar" ? "اختر الدولة" : "Select country"} />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>{lang === "ar" ? "المدينة" : "City"}</Label>
                      <div className="relative">
                        <Input placeholder={lang === "ar" ? "الرياض" : "Riyadh"} className={isRTL ? "pr-10" : "pl-10"} />
                        <MapPin className={`absolute ${isRTL ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground`} />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>{lang === "ar" ? "العدد المستهدف للتوظيف أو التدريب" : "Target number of educators"}</Label>
                    <div className="relative">
                      <Input type="number" placeholder="10" min="1" className={isRTL ? "pr-10" : "pl-10"} />
                      <Users className={`absolute ${isRTL ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground`} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>{lang === "ar" ? "الموقع الإلكتروني (اختياري)" : "Website (Optional)"}</Label>
                    <div className="relative">
                      <Input placeholder="https://www.school.edu" className="pl-10 text-left" dir="ltr" />
                      <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Needs & Collaboration */}
              {step === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                  <div className="space-y-3">
                    <Label>{lang === "ar" ? "التخصصات المطلوبة" : "Required Specializations"}</Label>
                    <div className="flex flex-wrap gap-2">
                      {specializations.map(s => (
                        <Badge
                          key={s}
                          variant={selectedSpecs.includes(s) ? "default" : "outline"}
                          className="cursor-pointer hover:bg-primary/10 transition-colors px-3 py-1.5 text-xs"
                          onClick={() => toggleTag(s, selectedSpecs, setSelectedSpecs)}
                        >
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label>{lang === "ar" ? "المراحل الدراسية" : "Grade Levels"}</Label>
                    <div className="flex flex-wrap gap-2">
                      {gradeLevels.map(g => (
                        <Badge
                          key={g}
                          variant={selectedGrades.includes(g) ? "default" : "outline"}
                          className="cursor-pointer hover:bg-primary/10 transition-colors px-3 py-1.5 text-xs"
                          onClick={() => toggleTag(g, selectedGrades, setSelectedGrades)}
                        >
                          {g}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>{lang === "ar" ? "متطلبات التدريب أو التطوير المهني لفريقك" : "Training requirements for your staff"}</Label>
                    <Textarea
                      placeholder={lang === "ar" ? "صف احتياجات فريقك التدريبية..." : "Describe your team's training needs..."}
                      rows={4}
                    />
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg border bg-card">
                    <Checkbox
                      id="collab"
                      checked={collaboration}
                      onCheckedChange={(v) => setCollaboration(!!v)}
                    />
                    <Label htmlFor="collab" className="text-sm cursor-pointer flex items-center gap-2">
                      <FolderKanban className="w-4 h-4 text-primary" />
                      {lang === "ar"
                        ? "مهتم بفرص التعاون القائمة على المشاريع"
                        : "Interested in project-based collaboration"}
                    </Label>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Media & Verification */}
              {step === 3 && (
                <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                  {/* Logo Upload */}
                  <div className="space-y-2">
                    <Label>{lang === "ar" ? "شعار المؤسسة" : "Institution Logo"}</Label>
                    <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/40 transition-colors cursor-pointer">
                      <Building2 className="w-10 h-10 text-muted-foreground/40 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        {lang === "ar" ? "اسحب الشعار هنا أو اضغط للرفع" : "Drag logo here or click to upload"}
                      </p>
                      <p className="text-xs text-muted-foreground/60 mt-1">PNG, JPG, SVG</p>
                    </div>
                  </div>

                  {/* Gallery */}
                  <div className="space-y-2">
                    <Label>{lang === "ar" ? "صور/فيديوهات للمرافق أو الفعاليات (اختياري)" : "Facility/Event Gallery (Optional)"}</Label>
                    <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/40 transition-colors cursor-pointer">
                      <Image className="w-8 h-8 text-muted-foreground/40 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        {lang === "ar" ? "ارفع صور أو فيديوهات للمرافق" : "Upload facility images or videos"}
                      </p>
                    </div>
                  </div>

                  {/* Licensing Documents */}
                  <div className="space-y-2">
                    <Label>{lang === "ar" ? "مستندات الترخيص أو الاعتماد" : "Licensing/Accreditation Documents"}</Label>
                    <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-accent/40 transition-colors cursor-pointer">
                      <FileCheck className="w-8 h-8 text-muted-foreground/40 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        {lang === "ar" ? "ارفع مستندات التوثيق والاعتماد" : "Upload verification documents"}
                      </p>
                      <p className="text-xs text-muted-foreground/60 mt-1">PDF, JPG, PNG</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Subscription Plan */}
              {step === 4 && (
                <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Free Plan */}
                    <div
                      onClick={() => setSelectedPlan("free")}
                      className={`relative border rounded-xl p-6 cursor-pointer transition-all ${
                        selectedPlan === "free"
                          ? "border-primary bg-primary/[0.03] ring-2 ring-primary/20"
                          : "hover:border-primary/30"
                      }`}
                    >
                      {selectedPlan === "free" && (
                        <CheckCircle2 className={`absolute top-3 ${isRTL ? "left-3" : "right-3"} w-5 h-5 text-primary`} />
                      )}
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                        <Briefcase className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <h3 className="font-bold text-foreground mb-1">
                        {lang === "ar" ? "الخطة المجانية" : "Free Plan"}
                      </h3>
                      <p className="text-xl font-bold text-foreground mb-3">
                        {lang === "ar" ? "مجاناً" : "Free"}
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          {lang === "ar" ? "بحث أساسي عن المعلمين" : "Basic teacher search"}
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          {lang === "ar" ? "نشر 3 وظائف شهرياً" : "3 job posts per month"}
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          {lang === "ar" ? "الملف التعريفي للمؤسسة" : "Institution profile"}
                        </li>
                      </ul>
                    </div>

                    {/* Premium Plan */}
                    <div
                      onClick={() => setSelectedPlan("premium")}
                      className={`relative border rounded-xl p-6 cursor-pointer transition-all ${
                        selectedPlan === "premium"
                          ? "border-accent bg-accent/[0.03] ring-2 ring-accent/20"
                          : "hover:border-accent/30"
                      }`}
                    >
                      <Badge className="absolute top-3 end-3 bg-accent/10 text-accent border-accent/20 text-[10px]">
                        <Crown className="w-3 h-3 me-1" />
                        {lang === "ar" ? "موصى به" : "Recommended"}
                      </Badge>
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                        <Crown className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="font-bold text-foreground mb-1">
                        {lang === "ar" ? "الخطة المميزة للمؤسسات" : "Premium Organization Plan"}
                      </h3>
                      <p className="text-xl font-bold text-foreground mb-3">
                        {lang === "ar" ? "299 ج.م / شهرياً" : "299 EGP / month"}
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {premiumFeatures.map((f, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Star className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-4 border-t">
              {step > 0 ? (
                <Button variant="ghost" onClick={() => setStep(step - 1)} className="gap-1.5">
                  <PrevIcon className="w-4 h-4" />
                  {lang === "ar" ? "السابق" : "Previous"}
                </Button>
              ) : (
                <div />
              )}

              {step < totalSteps - 1 ? (
                <Button onClick={() => setStep(step + 1)} className="gap-1.5">
                  {lang === "ar" ? "التالي" : "Next"}
                  <NextIcon className="w-4 h-4" />
                </Button>
              ) : (
                <Button className="gap-1.5 bg-accent hover:bg-accent/90">
                  <Building2 className="w-4 h-4" />
                  {lang === "ar" ? "إنشاء حساب المؤسسة" : "Create Institution Account"}
                </Button>
              )}
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            {lang === "ar" ? "لديك حساب بالفعل؟" : "Already have an account?"}{" "}
            <Link to="/auth" className="text-primary font-semibold hover:underline">
              {lang === "ar" ? "تسجيل الدخول" : "Log in"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
