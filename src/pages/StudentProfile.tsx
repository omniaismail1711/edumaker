import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  GraduationCap, MapPin, BookOpen, Calendar, Star, Award, BadgeCheck,
  FileText, ClipboardList, Presentation, Gamepad2, Download, Eye,
  School, Users, Briefcase, Heart, MessageCircle, Globe, Shield,
  Brain, Monitor, Mic, LayoutDashboard, Target, Sparkles, Building2
} from "lucide-react";
import avatar1 from "@/assets/avatars/avatar-1.jpg";
import avatar2 from "@/assets/avatars/avatar-2.jpg";

/* ───── static data ───── */

const student = {
  name: "يوسف أحمد إبراهيم",
  avatar: avatar1,
  university: "جامعة القاهرة",
  faculty: "كلية التربية",
  department: "قسم المناهج وطرق التدريس – تخصص رياضيات",
  year: "السنة الثالثة",
  expectedGrad: "2026",
  location: "القاهرة، مصر",
  about:
    "أؤمن بأن التعليم هو المفتاح الحقيقي لتغيير المجتمعات. أسعى لأصبح معلم رياضيات يجعل المادة ممتعة وقريبة من حياة الطلاب. أهتم بتوظيف التكنولوجيا في التعليم وتصميم أنشطة تفاعلية تبني التفكير النقدي لدى الطلاب.",
};

const teachingInterests = {
  subjects: ["الرياضيات", "العلوم", "الحاسب الآلي"],
  gradeLevels: ["الابتدائية", "الإعدادية", "الثانوية"],
};

const programProgress = {
  coursesCompleted: 6,
  totalCourses: 10,
  trainingHours: 48,
  assessmentScore: 87,
  mentorRating: 4.5,
};

const skills = [
  { name: "تخطيط الدروس", level: 85, icon: LayoutDashboard },
  { name: "إدارة الصف", level: 70, icon: Users },
  { name: "تكنولوجيا التعليم", level: 90, icon: Monitor },
  { name: "إشراك الطلاب", level: 75, icon: Heart },
  { name: "مهارات العرض والإلقاء", level: 80, icon: Mic },
  { name: "التفكير النقدي", level: 65, icon: Brain },
];

const portfolio = [
  { title: "خطة درس: المعادلات الخطية", subject: "رياضيات", type: "خطة درس", icon: FileText },
  { title: "ورقة عمل: الكسور والنسب", subject: "رياضيات", type: "ورقة عمل", icon: ClipboardList },
  { title: "عرض تقديمي: الهندسة الفراغية", subject: "رياضيات", type: "عرض تقديمي", icon: Presentation },
  { title: "نشاط تعليمي: لعبة الأرقام التفاعلية", subject: "رياضيات", type: "نشاط تعليمي", icon: Gamepad2 },
];

const experiences = [
  { title: "تدريب ميداني", org: "مدرسة النيل الدولية", date: "فبراير – مايو 2025", desc: "تدريس الرياضيات للصف الثاني الإعدادي لمدة 3 أشهر." },
  { title: "تطوع تعليمي", org: "مؤسسة علّم لأجل مصر", date: "يوليو 2024", desc: "تدريس مهارات الحساب الأساسية لأطفال المناطق المحرومة." },
  { title: "مشروع تخرج", org: "جامعة القاهرة", date: "قيد التنفيذ", desc: "تصميم منهج رياضيات تفاعلي باستخدام تقنيات الذكاء الاصطناعي." },
];

const certificates = [
  { name: "أساسيات التدريس الفعال", date: "يناير 2025", verified: true },
  { name: "تكنولوجيا التعليم المتقدمة", date: "مارس 2025", verified: true },
  { name: "إدارة الصف وبناء بيئة تعلم إيجابية", date: "نوفمبر 2024", verified: true },
  { name: "تصميم أوراق العمل الإبداعية", date: "سبتمبر 2024", verified: false },
];

const mentorFeedback = [
  { mentor: "د. سارة محمود", avatar: avatar2, role: "أستاذ مساعد – كلية التربية", text: "يوسف يظهر فهماً عميقاً لاحتياجات الطلاب وقدرة ممتازة على تبسيط المفاهيم الرياضية المعقدة. أتوقع له مستقبلاً مهنياً مشرقاً.", strengths: "التبسيط، التفاعل مع الطلاب", improvement: "إدارة الوقت داخل الحصة" },
  { mentor: "أ. خالد عبد الرحمن", avatar: null, role: "معلم رياضيات – 15 سنة خبرة", text: "أداء متميز في التدريب الميداني. يحتاج للعمل أكثر على تنويع أساليب التقييم.", strengths: "الحماس، تصميم الأنشطة", improvement: "أساليب التقييم المتنوعة" },
];

/* ───── helpers ───── */
const fade = (delay = 0) => ({ initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { delay } });
const Section = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div {...fade(delay)} className={className}>{children}</motion.div>
);

/* ───── page ───── */
export default function StudentProfile() {
  const pct = Math.round((programProgress.coursesCompleted / programProgress.totalCourses) * 100);

  return (
    <div className="min-h-screen bg-background pb-16">
      {/* ── Cover ── */}
      <div className="h-32 md:h-40 bg-gradient-to-l from-primary/30 via-primary/10 to-accent/20 relative" />

      <div className="container max-w-5xl -mt-16 px-4 space-y-6">
        {/* 1 ── Header ── */}
        <Section className="bg-card rounded-2xl border p-6 shadow-sm relative z-10">
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <Avatar className="w-28 h-28 border-4 border-card rounded-2xl shrink-0">
              <AvatarImage src={student.avatar} alt={student.name} className="object-cover" />
              <AvatarFallback className="text-3xl font-bold">{student.name[0]}</AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
              <h1 className="text-2xl font-bold text-foreground mb-1">{student.name}</h1>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge className="bg-primary/10 text-primary border-0"><GraduationCap className="w-3 h-3 ml-1" />معلم مستقبلي</Badge>
                <Badge variant="secondary"><School className="w-3 h-3 ml-1" />طالب جامعي</Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4" />{student.university}</span>
                <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4" />{student.faculty}</span>
                <span className="flex items-center gap-1.5"><Target className="w-4 h-4" />{student.department}</span>
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{student.year} – تخرج متوقع {student.expectedGrad}</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{student.location}</span>
              </div>
            </div>
          </div>
        </Section>

        {/* 2 ── About ── */}
        <Section delay={0.05} className="bg-card rounded-2xl border p-6">
          <h2 className="font-bold text-foreground flex items-center gap-2 mb-3"><Sparkles className="w-5 h-5 text-primary" />نبذة عني</h2>
          <p className="text-muted-foreground leading-relaxed text-sm">{student.about}</p>
        </Section>

        {/* 3 ── Teaching Interests ── */}
        <Section delay={0.08} className="bg-card rounded-2xl border p-6">
          <h2 className="font-bold text-foreground flex items-center gap-2 mb-4"><Heart className="w-5 h-5 text-primary" />الاهتمامات التدريسية</h2>
          <div className="space-y-3">
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground mb-2">المواد الدراسية</h3>
              <div className="flex flex-wrap gap-2">
                {teachingInterests.subjects.map(s => <span key={s} className="text-sm bg-primary/5 text-primary px-3 py-1 rounded-full border border-primary/10">{s}</span>)}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground mb-2">المراحل الدراسية المفضلة</h3>
              <div className="flex flex-wrap gap-2">
                {teachingInterests.gradeLevels.map(g => <Badge key={g} variant="secondary">{g}</Badge>)}
              </div>
            </div>
          </div>
        </Section>

        {/* 4 ── Program Progress ── */}
        <Section delay={0.1} className="bg-card rounded-2xl border p-6">
          <h2 className="font-bold text-foreground flex items-center gap-2 mb-4"><GraduationCap className="w-5 h-5 text-primary" />تقدم برنامج المعلم المستقبلي</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">الدورات المكتملة</span>
                <span className="font-semibold text-foreground">{programProgress.coursesCompleted}/{programProgress.totalCourses}</span>
              </div>
              <Progress value={pct} className="h-3" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "ساعات التدريب", value: `${programProgress.trainingHours} ساعة`, icon: BookOpen },
                { label: "الدورات المكتملة", value: `${programProgress.coursesCompleted}`, icon: Award },
                { label: "درجة التقييم", value: `${programProgress.assessmentScore}%`, icon: Target },
                { label: "تقييم المرشد", value: `${programProgress.mentorRating}/5`, icon: Star },
              ].map(item => (
                <div key={item.label} className="bg-secondary/50 rounded-xl p-4 text-center border border-border/50">
                  <item.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                  <p className="text-lg font-bold text-foreground">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* 5 ── Skills ── */}
        <Section delay={0.12} className="bg-card rounded-2xl border p-6">
          <h2 className="font-bold text-foreground flex items-center gap-2 mb-4"><Brain className="w-5 h-5 text-primary" />المهارات التدريسية</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map(skill => (
              <div key={skill.name} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <skill.icon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 6 ── Portfolio ── */}
        <Section delay={0.14} className="bg-card rounded-2xl border p-6">
          <h2 className="font-bold text-foreground flex items-center gap-2 mb-4"><FileText className="w-5 h-5 text-primary" />معرض الأعمال التعليمية</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {portfolio.map((item, i) => (
              <Card key={i} className="border bg-secondary/30">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-foreground mb-0.5">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{item.subject} · {item.type}</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="h-7 text-xs"><Eye className="w-3 h-3 ml-1" />عرض</Button>
                      <Button size="sm" variant="ghost" className="h-7 text-xs"><Download className="w-3 h-3 ml-1" />تحميل</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* 7 ── Experience ── */}
        <Section delay={0.16} className="bg-card rounded-2xl border p-6">
          <h2 className="font-bold text-foreground flex items-center gap-2 mb-4"><Briefcase className="w-5 h-5 text-primary" />الخبرة التدريسية</h2>
          <div className="space-y-4">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pr-6 border-r-2 border-primary/20 last:border-transparent">
                <div className="absolute -right-[7px] top-1 w-3 h-3 rounded-full bg-primary" />
                <h4 className="text-sm font-semibold text-foreground">{exp.title}</h4>
                <p className="text-xs text-primary font-medium">{exp.org} · {exp.date}</p>
                <p className="text-xs text-muted-foreground mt-1">{exp.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 8 ── Certificates ── */}
        <Section delay={0.18} className="bg-card rounded-2xl border p-6">
          <h2 className="font-bold text-foreground flex items-center gap-2 mb-4"><Award className="w-5 h-5 text-primary" />الشهادات والدورات</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {certificates.map((cert, i) => (
              <div key={i} className="flex items-center gap-3 bg-secondary/40 rounded-xl p-4 border border-border/50">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${cert.verified ? "bg-primary/10" : "bg-muted"}`}>
                  <Award className={`w-5 h-5 ${cert.verified ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-foreground">{cert.name}</h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs text-muted-foreground">{cert.date}</span>
                    {cert.verified && (
                      <Badge variant="outline" className="text-[10px] py-0 text-primary border-primary/30">
                        <BadgeCheck className="w-3 h-3 ml-0.5" />معتمدة
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 9 ── Mentor Feedback ── */}
        <Section delay={0.2} className="bg-card rounded-2xl border p-6">
          <h2 className="font-bold text-foreground flex items-center gap-2 mb-4"><MessageCircle className="w-5 h-5 text-primary" />ملاحظات المرشدين</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {mentorFeedback.map((fb, i) => (
              <Card key={i} className="border">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar className="w-10 h-10">
                      {fb.avatar ? <AvatarImage src={fb.avatar} /> : <AvatarFallback>{fb.mentor[0]}</AvatarFallback>}
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{fb.mentor}</p>
                      <p className="text-xs text-muted-foreground">{fb.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">"{fb.text}"</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full">نقاط القوة: {fb.strengths}</span>
                    <span className="bg-accent/10 text-accent-foreground px-2 py-0.5 rounded-full">للتحسين: {fb.improvement}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* 10 ── Visibility Note ── */}
        <Section delay={0.22} className="rounded-2xl border border-primary/20 bg-primary/5 p-5 flex items-start gap-3">
          <Shield className="w-6 h-6 text-primary shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-bold text-foreground mb-1">ملف مهني مرئي للمؤسسات التعليمية</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              يمكن للمدارس والمرشدين والمؤسسات التعليمية الاطلاع على هذا الملف المهني، مما يساعدك على بناء سمعتك المهنية كمعلم مستقبلي قبل التخرج.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="outline" className="text-xs"><School className="w-3 h-3 ml-1" />المدارس</Badge>
              <Badge variant="outline" className="text-xs"><Users className="w-3 h-3 ml-1" />المرشدون</Badge>
              <Badge variant="outline" className="text-xs"><Globe className="w-3 h-3 ml-1" />المؤسسات التعليمية</Badge>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
