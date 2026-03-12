import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  User,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Globe,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { schoolTypes, educationalLevels, subjectsList } from "@/data/schoolData";
import logo from "@/assets/logo.png";

const steps = [
  { ar: "معلومات المدرسة", en: "School Info", icon: Building2 },
  { ar: "الموقع والتواصل", en: "Location & Contact", icon: MapPin },
  { ar: "المسؤول الإداري", en: "Administrator", icon: User },
  { ar: "التفاصيل الأكاديمية", en: "Academics", icon: BookOpen },
];

export default function SchoolRegistration() {
  const { lang, isRTL } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  const toggleLevel = (level: string) => {
    setSelectedLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  const toggleSubject = (subject: string) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject) ? prev.filter((s) => s !== subject) : [...prev, subject]
    );
  };

  const nextStep = () => setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 0));

  const BackArrow = isRTL ? ArrowRight : ArrowLeft;
  const NextArrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen bg-background">
      {/* Decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 container max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/choose-account" className="inline-flex items-center gap-2 mb-4">
            <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold text-foreground">
              {lang === "ar" ? "صُنّاع التعليم" : "Education Makers"}
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            {lang === "ar" ? "تسجيل مدرسة / مؤسسة تعليمية" : "School / Organization Registration"}
          </h1>
          <p className="text-sm text-muted-foreground">
            {lang === "ar" ? "أنشئ حسابك المؤسسي واستقطب أفضل المعلمين" : "Create your institutional account and recruit top teachers"}
          </p>
        </div>

        {/* Stepper */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = i === currentStep;
            const isDone = i < currentStep;
            return (
              <div key={i} className="flex items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : isDone
                      ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {isDone ? <CheckCircle2 className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-8 h-0.5 ${i < currentStep ? "bg-primary" : "bg-muted"}`} />
                )}
              </div>
            );
          })}
        </div>

        {/* Step Title */}
        <div className="text-center mb-6">
          <Badge variant="secondary" className="text-xs">
            {lang === "ar" ? `الخطوة ${currentStep + 1} من ${steps.length}` : `Step ${currentStep + 1} of ${steps.length}`}
          </Badge>
          <h2 className="text-lg font-bold text-foreground mt-2">
            {lang === "ar" ? steps[currentStep].ar : steps[currentStep].en}
          </h2>
        </div>

        {/* Form */}
        <div className="bg-card border rounded-2xl p-6 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isRTL ? 20 : -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-5"
            >
              {currentStep === 0 && (
                <>
                  <div className="space-y-2">
                    <Label className="text-sm">{lang === "ar" ? "اسم المدرسة *" : "School Name *"}</Label>
                    <Input placeholder={lang === "ar" ? "مثال: مدارس المعرفة الدولية" : "e.g. Knowledge International Schools"} className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm">{lang === "ar" ? "نوع المدرسة *" : "School Type *"}</Label>
                    <Select>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder={lang === "ar" ? "اختر نوع المدرسة" : "Select school type"} />
                      </SelectTrigger>
                      <SelectContent>
                        {schoolTypes.map((t, i) => (
                          <SelectItem key={i} value={t.en}>{lang === "ar" ? t.ar : t.en}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm">{lang === "ar" ? "عدد الطلاب" : "Number of Students"}</Label>
                      <Input type="number" placeholder="1200" className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm">{lang === "ar" ? "عدد المعلمين" : "Number of Teachers"}</Label>
                      <Input type="number" placeholder="85" className="h-11" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm">{lang === "ar" ? "وصف المدرسة" : "School Description"}</Label>
                    <Textarea placeholder={lang === "ar" ? "نبذة عن المدرسة ورسالتها..." : "Brief about the school and its mission..."} rows={4} />
                  </div>
                </>
              )}

              {currentStep === 1 && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm">{lang === "ar" ? "الدولة *" : "Country *"}</Label>
                      <Input placeholder={lang === "ar" ? "مصر" : "Egypt"} className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm">{lang === "ar" ? "المحافظة *" : "Governorate *"}</Label>
                      <Input placeholder={lang === "ar" ? "القاهرة" : "Cairo"} className="h-11" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm">{lang === "ar" ? "المدينة *" : "City *"}</Label>
                      <Input placeholder={lang === "ar" ? "التجمع الخامس" : "New Cairo"} className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm">{lang === "ar" ? "العنوان التفصيلي" : "Full Address"}</Label>
                      <Input placeholder={lang === "ar" ? "شارع التسعين" : "90th Street"} className="h-11" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm">{lang === "ar" ? "رابط Google Maps" : "Google Maps Link"}</Label>
                    <Input placeholder="https://maps.google.com/..." className="h-11" dir="ltr" />
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <h3 className="font-semibold text-sm mb-3">{lang === "ar" ? "معلومات التواصل" : "Contact Information"}</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-sm flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" />{lang === "ar" ? "البريد الرسمي *" : "Official Email *"}</Label>
                        <Input type="email" placeholder="info@school.edu" className="h-11" dir="ltr" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" />{lang === "ar" ? "رقم الهاتف *" : "Phone *"}</Label>
                        <Input type="tel" placeholder="+20 2 1234 5678" className="h-11" dir="ltr" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="space-y-2">
                        <Label className="text-sm flex items-center gap-1.5"><Globe className="w-3.5 h-3.5" />{lang === "ar" ? "الموقع الإلكتروني" : "Website"}</Label>
                        <Input placeholder="https://school.edu" className="h-11" dir="ltr" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm">{lang === "ar" ? "وسائل التواصل الاجتماعي" : "Social Media"}</Label>
                        <Input placeholder={lang === "ar" ? "رابط فيسبوك أو تويتر" : "Facebook or Twitter link"} className="h-11" dir="ltr" />
                      </div>
                    </div>
                  </div>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm">{lang === "ar" ? "اسم المسؤول *" : "Representative Name *"}</Label>
                      <Input placeholder={lang === "ar" ? "د. سارة أحمد" : "Dr. Sara Ahmed"} className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm">{lang === "ar" ? "المسمى الوظيفي *" : "Job Title *"}</Label>
                      <Input placeholder={lang === "ar" ? "مديرة التوظيف" : "HR Director"} className="h-11" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" />{lang === "ar" ? "البريد الإلكتروني *" : "Email *"}</Label>
                      <Input type="email" placeholder="sara@school.edu" className="h-11" dir="ltr" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" />{lang === "ar" ? "رقم الهاتف *" : "Phone *"}</Label>
                      <Input type="tel" placeholder="+20 10 1234 5678" className="h-11" dir="ltr" />
                    </div>
                  </div>
                </>
              )}

              {currentStep === 3 && (
                <>
                  <div className="space-y-3">
                    <Label className="text-sm">{lang === "ar" ? "المراحل التعليمية *" : "Educational Levels *"}</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {educationalLevels.map((level) => {
                        const val = lang === "ar" ? level.ar : level.en;
                        return (
                          <label
                            key={level.en}
                            className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                              selectedLevels.includes(level.en)
                                ? "border-primary bg-primary/5"
                                : "hover:border-primary/30"
                            }`}
                          >
                            <Checkbox
                              checked={selectedLevels.includes(level.en)}
                              onCheckedChange={() => toggleLevel(level.en)}
                            />
                            <span className="text-sm">{val}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label className="text-sm">{lang === "ar" ? "المواد الدراسية *" : "Subjects Offered *"}</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {subjectsList.map((subject) => {
                        const val = lang === "ar" ? subject.ar : subject.en;
                        const selected = selectedSubjects.includes(subject.en);
                        return (
                          <button
                            key={subject.en}
                            type="button"
                            onClick={() => toggleSubject(subject.en)}
                            className={`text-xs px-3 py-2 rounded-lg border transition-colors ${
                              selected
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-card hover:border-primary/30"
                            }`}
                          >
                            {val}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm">{lang === "ar" ? "عدد الفصول الدراسية" : "Number of Classrooms"}</Label>
                    <Input type="number" placeholder="45" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm">{lang === "ar" ? "الأدوات الرقمية المستخدمة" : "Digital Tools Used"}</Label>
                    <Input placeholder={lang === "ar" ? "مثال: Google Classroom, Smart Boards" : "e.g. Google Classroom, Smart Boards"} className="h-11" />
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="gap-2"
            >
              <BackArrow className="w-4 h-4" />
              {lang === "ar" ? "السابق" : "Previous"}
            </Button>

            {currentStep < steps.length - 1 ? (
              <Button onClick={nextStep} className="gap-2">
                {lang === "ar" ? "التالي" : "Next"}
                <NextArrow className="w-4 h-4" />
              </Button>
            ) : (
              <Button asChild className="gap-2">
                <Link to="/school-dashboard">
                  <CheckCircle2 className="w-4 h-4" />
                  {lang === "ar" ? "إنشاء الحساب" : "Create Account"}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
