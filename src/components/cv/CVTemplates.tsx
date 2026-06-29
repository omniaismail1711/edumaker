import { useLanguage } from "@/contexts/LanguageContext";
import { Award, BookOpen, Briefcase, Globe, GraduationCap, Mail, MapPin, Phone, Star, User } from "lucide-react";

export interface CVData {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  experience: { role: string; school: string; period: string; description: string }[];
  education: { degree: string; institution: string; year: string }[];
  certifications: { name: string; issuer: string; year: string }[];
  skills: string[];
  languages: { language: string; level: string }[];
}

interface CVTemplatesProps {
  data: CVData;
  template: "classic" | "international" | "minimal";
}

export const defaultCVData: CVData = {
  fullName: "أحمد محمد علي",
  title: "معلم لغة عربية ومعلوماتية",
  email: "ahmed@example.com",
  phone: "+20 100 123 4567",
  location: "القاهرة، مصر",
  summary:
    "معلم متحمس مع أكثر من 5 سنوات خبرة في تدريس اللغة العربية وتكنولوجيا المعلومات. أسعى دائماً لدمج التقنيات الحديثة في التعليم لتحسين تجربة الطلاب.",
  experience: [
    {
      role: "معلم لغة عربية",
      school: "مدارس النيل الدولية",
      period: "2021 - الآن",
      description: "تدريس اللغة العربية للمرحلة الإعدادية، تصميم أنشطة تفاعلية، تنظيم مسابقات ثقافية.",
    },
    {
      role: "معلم مساعد",
      school: "مدرسة الأمل الخاصة",
      period: "2019 - 2021",
      description: "مساعدة في إعداد الخطط الدراسية، تقييم الطلاب، وتنظيم الفعاليات المدرسية.",
    },
  ],
  education: [
    { degree: "بكالوريوس التربية - تخصص لغة عربية", institution: "كلية التربية - جامعة القاهرة", year: "2019" },
    { degree: "دبلومة تعليمية", institution: "كلية التربية - جامعة القاهرة", year: "2020" },
  ],
  certifications: [
    { name: "شهادة ICDL", issuer: "UNESCO", year: "2020" },
    { name: "دورة مهارات التدريس الحديث", issuer: "وزارة التربية والتعليم", year: "2021" },
    { name: "شهادة AI في التعليم", issuer: "Teachers Workbook", year: "2023" },
  ],
  skills: ["إدارة الصف", "التعليم التفاعلي", "Microsoft Office", "Canva", "Google Classroom", "الذكاء الاصطناعي"],
  languages: [
    { language: "العربية", level: "اللغة الأم" },
    { language: "الإنجليزية", level: "متوسط" },
  ],
};

function ClassicTemplate({ data }: { data: CVData }) {
  return (
    <div className="bg-white text-slate-800 p-8 min-h-[1123px] w-full max-w-[210mm] mx-auto shadow-sm">
      <header className="border-b-2 border-slate-700 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-slate-900">{data.fullName}</h1>
        <p className="text-lg text-slate-600 mt-1">{data.title}</p>
        <div className="flex flex-wrap gap-4 mt-3 text-sm text-slate-500">
          <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" />{data.email}</span>
          <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5" />{data.phone}</span>
          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{data.location}</span>
        </div>
      </header>

      <section className="mb-5">
        <h2 className="text-lg font-bold text-slate-800 border-b border-slate-300 pb-1 mb-2">ملخص مهني</h2>
        <p className="text-sm leading-relaxed text-slate-600">{data.summary}</p>
      </section>

      <section className="mb-5">
        <h2 className="text-lg font-bold text-slate-800 border-b border-slate-300 pb-1 mb-3">الخبرة العملية</h2>
        <div className="space-y-3">
          {data.experience.map((exp, i) => (
            <div key={i}>
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-sm">{exp.role}</h3>
                <span className="text-xs text-slate-500">{exp.period}</span>
              </div>
              <p className="text-xs text-slate-600 font-medium">{exp.school}</p>
              <p className="text-xs text-slate-500 mt-1">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-5">
        <h2 className="text-lg font-bold text-slate-800 border-b border-slate-300 pb-1 mb-3">التعليم</h2>
        <div className="space-y-2">
          {data.education.map((edu, i) => (
            <div key={i} className="flex justify-between items-baseline">
              <div>
                <p className="text-sm font-bold">{edu.degree}</p>
                <p className="text-xs text-slate-600">{edu.institution}</p>
              </div>
              <span className="text-xs text-slate-500">{edu.year}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-5">
        <h2 className="text-lg font-bold text-slate-800 border-b border-slate-300 pb-1 mb-3">الشهادات</h2>
        <div className="space-y-2">
          {data.certifications.map((cert, i) => (
            <div key={i} className="flex justify-between items-baseline">
              <p className="text-sm font-bold">{cert.name}</p>
              <span className="text-xs text-slate-500">{cert.issuer} — {cert.year}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-5">
        <h2 className="text-lg font-bold text-slate-800 border-b border-slate-300 pb-1 mb-2">المهارات</h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, i) => (
            <span key={i} className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">{skill}</span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold text-slate-800 border-b border-slate-300 pb-1 mb-2">اللغات</h2>
        <div className="flex flex-wrap gap-3">
          {data.languages.map((lang, i) => (
            <span key={i} className="text-xs text-slate-600"><strong>{lang.language}:</strong> {lang.level}</span>
          ))}
        </div>
      </section>
    </div>
  );
}

function InternationalTemplate({ data }: { data: CVData }) {
  return (
    <div className="bg-white text-slate-800 p-8 min-h-[1123px] w-full max-w-[210mm] mx-auto shadow-sm">
      <div className="flex gap-6 mb-6">
        <div className="w-24 h-24 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
          <User className="w-12 h-12 text-slate-400" />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-slate-900">{data.fullName}</h1>
          <p className="text-lg text-slate-600 mt-1">{data.title}</p>
          <div className="flex flex-wrap gap-3 mt-2 text-sm text-slate-500">
            <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" />{data.email}</span>
            <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5" />{data.phone}</span>
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{data.location}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-5">
          <section>
            <h2 className="text-base font-bold text-slate-800 uppercase tracking-wide border-b-2 border-slate-800 pb-1 mb-2">Professional Summary</h2>
            <p className="text-sm leading-relaxed text-slate-600">{data.summary}</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 uppercase tracking-wide border-b-2 border-slate-800 pb-1 mb-3">Experience</h2>
            <div className="space-y-3">
              {data.experience.map((exp, i) => (
                <div key={i}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-sm">{exp.role}</h3>
                    <span className="text-xs text-slate-500">{exp.period}</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium">{exp.school}</p>
                  <p className="text-xs text-slate-500 mt-1">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 uppercase tracking-wide border-b-2 border-slate-800 pb-1 mb-3">Education</h2>
            <div className="space-y-2">
              {data.education.map((edu, i) => (
                <div key={i} className="flex justify-between items-baseline">
                  <div>
                    <p className="text-sm font-bold">{edu.degree}</p>
                    <p className="text-xs text-slate-600">{edu.institution}</p>
                  </div>
                  <span className="text-xs text-slate-500">{edu.year}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-5">
          <section>
            <h2 className="text-base font-bold text-slate-800 uppercase tracking-wide border-b-2 border-slate-800 pb-1 mb-2">Certifications</h2>
            <div className="space-y-2">
              {data.certifications.map((cert, i) => (
                <div key={i}>
                  <p className="text-sm font-bold">{cert.name}</p>
                  <p className="text-xs text-slate-500">{cert.issuer}</p>
                  <p className="text-xs text-slate-400">{cert.year}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 uppercase tracking-wide border-b-2 border-slate-800 pb-1 mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, i) => (
                <span key={i} className="bg-slate-800 text-white text-xs px-2 py-1 rounded">{skill}</span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 uppercase tracking-wide border-b-2 border-slate-800 pb-1 mb-2">Languages</h2>
            <div className="space-y-1">
              {data.languages.map((lang, i) => (
                <div key={i} className="flex justify-between text-xs">
                  <span>{lang.language}</span>
                  <span className="text-slate-500">{lang.level}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function MinimalTemplate({ data }: { data: CVData }) {
  return (
    <div className="bg-white text-slate-800 p-10 min-h-[1123px] w-full max-w-[210mm] mx-auto shadow-sm">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-light text-slate-900 tracking-tight">{data.fullName}</h1>
        <p className="text-base text-slate-500 mt-2">{data.title}</p>
        <div className="flex flex-wrap justify-center gap-4 mt-3 text-xs text-slate-400">
          <span className="flex items-center gap-1"><Mail className="w-3 h-3" />{data.email}</span>
          <span className="flex items-center gap-1"><Phone className="w-3 h-3" />{data.phone}</span>
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{data.location}</span>
        </div>
      </header>

      <section className="mb-6">
        <p className="text-sm leading-loose text-slate-600 text-center max-w-lg mx-auto">{data.summary}</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <section>
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Experience</h2>
            <div className="space-y-3">
              {data.experience.map((exp, i) => (
                <div key={i}>
                  <h3 className="text-sm font-bold">{exp.role}</h3>
                  <p className="text-xs text-slate-500">{exp.school} · {exp.period}</p>
                  <p className="text-xs text-slate-400 mt-1">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Education</h2>
            <div className="space-y-2">
              {data.education.map((edu, i) => (
                <div key={i}>
                  <h3 className="text-sm font-bold">{edu.degree}</h3>
                  <p className="text-xs text-slate-500">{edu.institution} · {edu.year}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Certifications</h2>
            <div className="space-y-2">
              {data.certifications.map((cert, i) => (
                <div key={i}>
                  <h3 className="text-sm font-bold">{cert.name}</h3>
                  <p className="text-xs text-slate-500">{cert.issuer} · {cert.year}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, i) => (
                <span key={i} className="border border-slate-200 text-slate-600 text-xs px-2 py-1 rounded-full">{skill}</span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Languages</h2>
            <div className="space-y-1">
              {data.languages.map((lang, i) => (
                <div key={i} className="flex justify-between text-xs text-slate-600">
                  <span>{lang.language}</span>
                  <span className="text-slate-400">{lang.level}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default function CVTemplates({ data, template }: CVTemplatesProps) {
  return (
    <div id="cv-print-area" className="bg-white">
      {template === "classic" && <ClassicTemplate data={data} />}
      {template === "international" && <InternationalTemplate data={data} />}
      {template === "minimal" && <MinimalTemplate data={data} />}
    </div>
  );
}

export function TemplateSelector({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (t: "classic" | "international" | "minimal") => void;
}) {
  const { lang } = useLanguage();
  const isRTL = lang === "ar";
  const templates = [
    { id: "classic" as const, label: isRTL ? "القالب الكلاسيكي" : "Classic Teacher", icon: Briefcase },
    { id: "international" as const, label: isRTL ? "المدارس الدولية" : "International School", icon: Globe },
    { id: "minimal" as const, label: isRTL ? "احترافي بسيط" : "Minimal Professional", icon: Star },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {templates.map((tmpl) => (
        <button
          key={tmpl.id}
          onClick={() => onSelect(tmpl.id)}
          className={`relative rounded-xl border p-4 text-center transition-all ${
            selected === tmpl.id
              ? "border-primary bg-primary/5 ring-1 ring-primary"
              : "border-border hover:border-primary/50 hover:bg-secondary/50"
          }`}
        >
          <tmpl.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
          <p className="font-bold text-sm">{tmpl.label}</p>
          {selected === tmpl.id && (
            <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center text-[10px]">✓</div>
          )}
        </button>
      ))}
    </div>
  );
}

// Avoid unused import warning for BookOpen, GraduationCap, Award
export const _iconImports = { BookOpen, GraduationCap, Award };
