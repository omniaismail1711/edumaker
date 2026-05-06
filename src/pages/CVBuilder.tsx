import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText, Download, ChevronLeft, ChevronRight, Sparkles, CheckCircle2, User, PenLine,
  Briefcase, GraduationCap, Award, Wand2, Printer, RotateCcw, ArrowLeft, ArrowRight
} from "lucide-react";
import CVTemplates, { defaultCVData, TemplateSelector, CVData } from "@/components/cv/CVTemplates";

export default function CVBuilder() {
  const { lang, isRTL } = useLanguage();
  const [step, setStep] = useState(1);
  const [template, setTemplate] = useState<"classic" | "international" | "minimal">("classic");
  const [data, setData] = useState<CVData>(defaultCVData);
  const [generating, setGenerating] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  const ArrowNext = isRTL ? ArrowLeft : ArrowRight;
  const ArrowPrev = isRTL ? ArrowRight : ArrowLeft;

  const totalSteps = 4;

  const completeness =
    Math.round(
      ((data.fullName ? 1 : 0) +
        (data.summary ? 1 : 0) +
        (data.experience.length ? 1 : 0) +
        (data.education.length ? 1 : 0) +
        (data.certifications.length ? 1 : 0) +
        (data.skills.length ? 1 : 0)) /
        6 *
        100
    );

  useEffect(() => {
    // Simulate loading profile data on mount
    const saved = localStorage.getItem("cv_builder_data");
    if (saved) {
      try {
        setData(JSON.parse(saved));
      } catch { /* ignore */ }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cv_builder_data", JSON.stringify(data));
  }, [data]);

  const handlePrint = () => {
    window.print();
  };

  const handleAIEnhance = () => {
    setGenerating(true);
    setTimeout(() => {
      setData((prev) => ({
        ...prev,
        summary:
          "معلم متحمس وذو خبرة واسعة في تدريس اللغة العربية وتكنولوجيا المعلومات، يمتلك أكثر من 5 سنوات من الخبرة العملية في بيئات تعليمية متنوعة. يجمع بين الأصالة والحداثة في أساليب التدريس، ويسعى باستمرار لتطوير مهاراته التقنية والتربوية لخدمة العملية التعليمية.",
        experience: prev.experience.map((e) => ({
          ...e,
          description: e.description + " (تم تحسين الصياغة بواسطة AI)",
        })),
      }));
      setGenerating(false);
    }, 1500);
  };

  const updateField = <K extends keyof CVData>(field: K, value: CVData[K]) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const steps = [
    { id: 1, label: lang === "ar" ? "البيانات" : "Data", icon: User },
    { id: 2, label: lang === "ar" ? "القالب" : "Template", icon: FileText },
    { id: 3, label: lang === "ar" ? "المعاينة" : "Preview", icon: PenLine },
    { id: 4, label: lang === "ar" ? "التصدير" : "Export", icon: Download },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-5 h-5 text-primary" />
                <h1 className="text-2xl font-bold text-foreground">
                  {lang === "ar" ? "منشئ السيرة الذاتية بالذكاء الاصطناعي" : "AI CV Builder"}
                </h1>
              </div>
              <p className="text-muted-foreground text-sm">
                {lang === "ar"
                  ? "أنشئ سيرة ذاتية احترافية جاهزة للمدارس في دقائق"
                  : "Create a professional school-ready CV in minutes"}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="bg-primary/5 text-primary">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                {completeness}% {lang === "ar" ? "اكتمال" : "Complete"}
              </Badge>
              <Progress value={completeness} className="w-24 h-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Stepper */}
      <div className="container py-6">
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-8">
          {steps.map((s) => (
            <button
              key={s.id}
              onClick={() => setStep(s.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                step === s.id
                  ? "bg-primary text-primary-foreground"
                  : step > s.id
                  ? "bg-primary/10 text-primary"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              <s.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{s.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-card rounded-xl border p-6 md:p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold">{lang === "ar" ? "المعلومات الشخصية" : "Personal Information"}</h2>
                  <Button variant="outline" size="sm" onClick={handleAIEnhance} disabled={generating}>
                    <Wand2 className="w-4 h-4 mr-2" />
                    {generating ? (lang === "ar" ? "جارٍ التحسين..." : "Enhancing...") : (lang === "ar" ? "تحسين بالAI" : "AI Enhance")}
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">{lang === "ar" ? "الاسم الكامل" : "Full Name"}</label>
                    <input
                      type="text"
                      value={data.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      className="w-full rounded-lg border bg-background px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">{lang === "ar" ? "المسمى الوظيفي" : "Job Title"}</label>
                    <input
                      type="text"
                      value={data.title}
                      onChange={(e) => updateField("title", e.target.value)}
                      className="w-full rounded-lg border bg-background px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">{lang === "ar" ? "البريد الإلكتروني" : "Email"}</label>
                    <input
                      type="email"
                      value={data.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="w-full rounded-lg border bg-background px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">{lang === "ar" ? "رقم الهاتف" : "Phone"}</label>
                    <input
                      type="text"
                      value={data.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="w-full rounded-lg border bg-background px-3 py-2 text-sm"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">{lang === "ar" ? "الموقع" : "Location"}</label>
                    <input
                      type="text"
                      value={data.location}
                      onChange={(e) => updateField("location", e.target.value)}
                      className="w-full rounded-lg border bg-background px-3 py-2 text-sm"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">{lang === "ar" ? "ملخص مهني" : "Professional Summary"}</label>
                    <textarea
                      rows={4}
                      value={data.summary}
                      onChange={(e) => updateField("summary", e.target.value)}
                      className="w-full rounded-lg border bg-background px-3 py-2 text-sm"
                    />
                  </div>
                </div>

                <hr />

                <div>
                  <h3 className="text-base font-bold mb-3 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-primary" />
                    {lang === "ar" ? "الخبرة العملية" : "Experience"}
                  </h3>
                  <div className="space-y-3">
                    {data.experience.map((exp, i) => (
                      <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 rounded-lg border bg-secondary/30">
                        <input
                          type="text"
                          placeholder={lang === "ar" ? "الدور" : "Role"}
                          value={exp.role}
                          onChange={(e) => {
                            const next = [...data.experience];
                            next[i].role = e.target.value;
                            updateField("experience", next);
                          }}
                          className="w-full rounded-lg border bg-background px-3 py-2 text-sm"
                        />
                        <input
                          type="text"
                          placeholder={lang === "ar" ? "المدرسة" : "School"}
                          value={exp.school}
                          onChange={(e) => {
                            const next = [...data.experience];
                            next[i].school = e.target.value;
                            updateField("experience", next);
                          }}
                          className="w-full rounded-lg border bg-background px-3 py-2 text-sm"
                        />
                        <input
                          type="text"
                          placeholder={lang === "ar" ? "الفترة" : "Period"}
                          value={exp.period}
                          onChange={(e) => {
                            const next = [...data.experience];
                            next[i].period = e.target.value;
                            updateField("experience", next);
                          }}
                          className="w-full rounded-lg border bg-background px-3 py-2 text-sm"
                        />
                        <input
                          type="text"
                          placeholder={lang === "ar" ? "الوصف" : "Description"}
                          value={exp.description}
                          onChange={(e) => {
                            const next = [...data.experience];
                            next[i].description = e.target.value;
                            updateField("experience", next);
                          }}
                          className="w-full rounded-lg border bg-background px-3 py-2 text-sm"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold mb-3 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    {lang === "ar" ? "التعليم" : "Education"}
                  </h3>
                  <div className="space-y-3">
                    {data.education.map((edu, i) => (
                      <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 rounded-lg border bg-secondary/30">
                        <input
                          type="text"
                          placeholder={lang === "ar" ? "الدرجة العلمية" : "Degree"}
                          value={edu.degree}
                          onChange={(e) => {
                            const next = [...data.education];
                            next[i].degree = e.target.value;
                            updateField("education", next);
                          }}
                          className="w-full rounded-lg border bg-background px-3 py-2 text-sm"
                        />
                        <input
                          type="text"
                          placeholder={lang === "ar" ? "المؤسسة" : "Institution"}
                          value={edu.institution}
                          onChange={(e) => {
                            const next = [...data.education];
                            next[i].institution = e.target.value;
                            updateField("education", next);
                          }}
                          className="w-full rounded-lg border bg-background px-3 py-2 text-sm"
                        />
                        <input
                          type="text"
                          placeholder={lang === "ar" ? "السنة" : "Year"}
                          value={edu.year}
                          onChange={(e) => {
                            const next = [...data.education];
                            next[i].year = e.target.value;
                            updateField("education", next);
                          }}
                          className="w-full rounded-lg border bg-background px-3 py-2 text-sm"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    {lang === "ar" ? "الشهادات" : "Certifications"}
                  </h3>
                  <div className="space-y-3">
                    {data.certifications.map((cert, i) => (
                      <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 rounded-lg border bg-secondary/30">
                        <input
                          type="text"
                          placeholder={lang === "ar" ? "اسم الشهادة" : "Certificate Name"}
                          value={cert.name}
                          onChange={(e) => {
                            const next = [...data.certifications];
                            next[i].name = e.target.value;
                            updateField("certifications", next);
                          }}
                          className="w-full rounded-lg border bg-background px-3 py-2 text-sm"
                        />
                        <input
                          type="text"
                          placeholder={lang === "ar" ? "الجهة المصدرة" : "Issuer"}
                          value={cert.issuer}
                          onChange={(e) => {
                            const next = [...data.certifications];
                            next[i].issuer = e.target.value;
                            updateField("certifications", next);
                          }}
                          className="w-full rounded-lg border bg-background px-3 py-2 text-sm"
                        />
                        <input
                          type="text"
                          placeholder={lang === "ar" ? "السنة" : "Year"}
                          value={cert.year}
                          onChange={(e) => {
                            const next = [...data.certifications];
                            next[i].year = e.target.value;
                            updateField("certifications", next);
                          }}
                          className="w-full rounded-lg border bg-background px-3 py-2 text-sm"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">{lang === "ar" ? "المهارات (مفصولة بفواصل)" : "Skills (comma separated)"}</label>
                  <input
                    type="text"
                    value={data.skills.join(", ")}
                    onChange={(e) => updateField("skills", e.target.value.split(",").map((s) => s.trim()).filter(Boolean))}
                    className="w-full rounded-lg border bg-background px-3 py-2 text-sm"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-card rounded-xl border p-6 md:p-8">
                <h2 className="text-lg font-bold mb-4">
                  {lang === "ar" ? "اختر قالب السيرة الذاتية" : "Choose CV Template"}
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  {lang === "ar"
                    ? "اختر القالب الذي يناسب نوع المدرسة التي تتقدم إليها"
                    : "Select the template that fits the school type you are applying to"}
                </p>
                <TemplateSelector selected={template} onSelect={setTemplate} />
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-card rounded-xl border p-4 md:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold">{lang === "ar" ? "معاينة السيرة الذاتية" : "CV Preview"}</h2>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => setStep(2)}>
                      <RotateCcw className="w-4 h-4 mr-2" />
                      {lang === "ar" ? "تغيير القالب" : "Change Template"}
                    </Button>
                    <Button size="sm" onClick={handlePrint}>
                      <Printer className="w-4 h-4 mr-2" />
                      {lang === "ar" ? "طباعة / PDF" : "Print / PDF"}
                    </Button>
                  </div>
                </div>
                <div ref={printRef} className="overflow-auto">
                  <CVTemplates data={data} template={template} />
                </div>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-xl mx-auto text-center"
            >
              <div className="bg-card rounded-xl border p-8 md:p-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-2">
                  {lang === "ar" ? "سيرتك الذاتية جاهزة!" : "Your CV is Ready!"}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {lang === "ar"
                    ? "يمكنك الآن تحميلها أو مشاركتها مع المدارس مباشرة"
                    : "You can now download or share it directly with schools"}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button size="lg" onClick={handlePrint}>
                    <Download className="w-5 h-5 mr-2" />
                    {lang === "ar" ? "تحميل PDF" : "Download PDF"}
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => setStep(1)}>
                    <RotateCcw className="w-5 h-5 mr-2" />
                    {lang === "ar" ? "تعديل البيانات" : "Edit Data"}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between items-center max-w-3xl mx-auto mt-8">
          <Button variant="outline" disabled={step === 1} onClick={() => setStep(step - 1)}>
            <ArrowPrev className="w-4 h-4 mr-2" />
            {lang === "ar" ? "السابق" : "Previous"}
          </Button>
          <div className="text-sm text-muted-foreground">
            {lang === "ar" ? "الخطوة" : "Step"} {step} {lang === "ar" ? "من" : "of"} {totalSteps}
          </div>
          <Button disabled={step === totalSteps} onClick={() => setStep(step + 1)}>
            {lang === "ar" ? "التالي" : "Next"}
            <ArrowNext className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
