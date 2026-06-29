import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Users, Megaphone, GraduationCap, School, Star, Award, Trophy,
  Globe, Heart, Sparkles, CheckCircle2, ArrowLeft, BookOpen,
  Presentation, Share2, Target, Zap, Gift, Shield, Crown,
  FileText, MessageCircle, TrendingUp, UserPlus
} from "lucide-react";
import { Link } from "react-router-dom";

/* ───── data ───── */
const benefits = [
  { icon: BookOpen, title: "دورات تدريبية مجانية", desc: "وصول حصري لدورات تطوير مهني متقدمة" },
  { icon: Award, title: "شهادات معتمدة", desc: "شهادة سفير معتمد من Teachers Workbook" },
  { icon: Shield, title: "شارة السفير", desc: "شارة مميزة تظهر على ملفك الشخصي" },
  { icon: Crown, title: "ملف شخصي مميز", desc: "إبراز ملفك في نتائج البحث والصفحة الرئيسية" },
];

const pointsSystem = [
  { action: "دعوة معلم جديد", points: 10, icon: UserPlus },
  { action: "دعوة طالب جامعي", points: 5, icon: GraduationCap },
  { action: "تنظيم ورشة عمل", points: 50, icon: Presentation },
  { action: "مساعدة معلم على إكمال دورة", points: 15, icon: BookOpen },
  { action: "نشر محتوى ترويجي", points: 8, icon: Share2 },
  { action: "تقديم تقرير شهري", points: 20, icon: FileText },
];

const whoCanJoin = [
  { title: "المعلمون", desc: "معلمون نشطون يرغبون في دعم مجتمع التعليم", icon: School },
  { title: "طلاب الجامعة", desc: "طلاب كليات التربية – معلمو المستقبل", icon: GraduationCap },
  { title: "صنّاع المحتوى التعليمي", desc: "منشئو محتوى تعليمي رقمي مؤثرون", icon: Megaphone },
  { title: "مدربون تربويون", desc: "متخصصون في التدريب والتطوير المهني", icon: Target },
];

const requirements = [
  "ملف شخصي نشط ومكتمل على Teachers Workbook",
  "شغف بالتعليم وبناء المجتمعات التعليمية",
  "استعداد لدعم ومساعدة المعلمين الآخرين",
  "القدرة على التواصل مع معلمين أو طلاب في محيطك",
];

const fade = (d = 0) => ({ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: d } });

/* ───── page ───── */
export default function AmbassadorProgram() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", city: "", role: "",
    institution: "", specialization: "", experience: "",
    motivation: "", reach: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.role || !formData.motivation) {
      toast({ title: "يرجى ملء الحقول المطلوبة", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "تم إرسال طلبك بنجاح!", description: "سنتواصل معك قريباً" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-bl from-primary/15 via-background to-accent/10 py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08),transparent_60%)]" />
        <div className="container max-w-5xl text-center relative z-10">
          <motion.div {...fade()}>
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-sm px-4 py-1">
              <Sparkles className="w-4 h-4 ml-1" />
              برنامج حصري
            </Badge>
            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 leading-[1.6]">
              برنامج سفراء Teachers Workbook
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              انضم لشبكة سفراء Teachers Workbook وساهم في نشر ثقافة التطوير المهني بين المعلمين وطلاب التربية في جامعتك ومجتمعك.
            </p>
            <div className="flex justify-center gap-3">
              <Button size="lg" className="px-8" onClick={() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })}>
                قدّم الآن <ArrowLeft className="w-4 h-4 mr-1" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/ambassador-dashboard">لوحة تحكم السفراء</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── What Ambassadors Do ── */}
      <section className="container max-w-5xl py-16">
        <motion.div {...fade()} className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3 leading-relaxed">ماذا يفعل سفير Teachers Workbook؟</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">السفراء هم القوة الدافعة لنمو مجتمع المعلمين على المنصة</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Megaphone, text: "الترويج لـ Teachers Workbook في الجامعات والمدارس" },
            { icon: Users, text: "تعريف المعلمين والطلاب بالمنصة" },
            { icon: Presentation, text: "تنظيم ورش عمل وجلسات توعوية" },
            { icon: Heart, text: "دعم نمو مجتمع المعلمين" },
          ].map((item, i) => (
            <motion.div key={i} {...fade(i * 0.05)}>
              <Card className="h-full border bg-card hover:shadow-md transition-shadow">
                <CardContent className="p-5 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">{item.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Who Can Join ── */}
      <section className="bg-secondary/30 py-16">
        <div className="container max-w-5xl">
          <motion.div {...fade()} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3 leading-relaxed">من يمكنه الانضمام؟</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {whoCanJoin.map((item, i) => (
              <motion.div key={i} {...fade(i * 0.05)}>
                <Card className="h-full border">
                  <CardContent className="p-5">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div {...fade(0.2)} className="bg-card rounded-2xl border p-6 max-w-2xl mx-auto">
            <h3 className="font-bold text-foreground flex items-center gap-2 mb-3"><CheckCircle2 className="w-5 h-5 text-primary" />المتطلبات</h3>
            <ul className="space-y-2">
              {requirements.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {r}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── Points System ── */}
      <section className="container max-w-5xl py-16">
        <motion.div {...fade()} className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3 leading-relaxed">نظام النقاط</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">اكسب نقاطاً عن كل نشاط تقوم به كسفير</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pointsSystem.map((item, i) => (
            <motion.div key={i} {...fade(i * 0.04)}>
              <Card className="border hover:border-primary/30 transition-colors">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">{item.action}</p>
                  </div>
                  <div className="text-center shrink-0">
                    <span className="text-xl font-extrabold text-primary">+{item.points}</span>
                    <p className="text-[10px] text-muted-foreground">نقطة</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Rewards ── */}
      <section className="bg-secondary/30 py-16">
        <div className="container max-w-5xl">
          <motion.div {...fade()} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3 leading-relaxed">
              <Gift className="w-7 h-7 inline-block ml-2 text-primary" />
              المكافآت والتقدير
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {benefits.map((item, i) => (
              <motion.div key={i} {...fade(i * 0.05)}>
                <Card className="h-full border text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div {...fade(0.2)} className="bg-card rounded-2xl border border-primary/20 p-6 max-w-lg mx-auto text-center">
            <Crown className="w-10 h-10 text-primary mx-auto mb-2" />
            <h3 className="font-extrabold text-foreground mb-1">السفير القائد</h3>
            <p className="text-sm text-muted-foreground">أفضل السفراء أداءً يحصلون على لقب <span className="font-bold text-primary">Lead Ambassador</span> مع امتيازات حصرية إضافية</p>
          </motion.div>
        </div>
      </section>

      {/* ── Application Form ── */}
      <section id="apply" className="container max-w-3xl py-16">
        <motion.div {...fade()} className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3 leading-relaxed">قدّم طلب الانضمام</h2>
          <p className="text-muted-foreground">املأ النموذج التالي وسنتواصل معك خلال أيام</p>
        </motion.div>

        {submitted ? (
          <motion.div {...fade()} className="bg-card rounded-2xl border p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">تم إرسال طلبك بنجاح!</h3>
            <p className="text-muted-foreground text-sm mb-4">سنراجع طلبك ونتواصل معك عبر البريد الإلكتروني قريباً.</p>
            <Button variant="outline" onClick={() => setSubmitted(false)}>تقديم طلب آخر</Button>
          </motion.div>
        ) : (
          <motion.form {...fade()} onSubmit={handleSubmit} className="bg-card rounded-2xl border p-6 md:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label>الاسم الكامل *</Label>
                <Input value={formData.name} onChange={e => handleChange("name", e.target.value)} placeholder="أدخل اسمك الكامل" required />
              </div>
              <div className="space-y-1.5">
                <Label>البريد الإلكتروني *</Label>
                <Input type="email" value={formData.email} onChange={e => handleChange("email", e.target.value)} placeholder="example@email.com" required />
              </div>
              <div className="space-y-1.5">
                <Label>رقم الهاتف</Label>
                <Input value={formData.phone} onChange={e => handleChange("phone", e.target.value)} placeholder="01xxxxxxxxx" />
              </div>
              <div className="space-y-1.5">
                <Label>المدينة / المحافظة</Label>
                <Input value={formData.city} onChange={e => handleChange("city", e.target.value)} placeholder="مثال: القاهرة" />
              </div>
              <div className="space-y-1.5">
                <Label>الدور الحالي *</Label>
                <Select value={formData.role} onValueChange={v => handleChange("role", v)}>
                  <SelectTrigger><SelectValue placeholder="اختر دورك" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="teacher">معلم</SelectItem>
                    <SelectItem value="student">طالب جامعي</SelectItem>
                    <SelectItem value="trainer">مدرب تربوي</SelectItem>
                    <SelectItem value="creator">صانع محتوى تعليمي</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>الجامعة أو المدرسة</Label>
                <Input value={formData.institution} onChange={e => handleChange("institution", e.target.value)} placeholder="اسم المؤسسة التعليمية" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>التخصص أو المواد الدراسية</Label>
              <Input value={formData.specialization} onChange={e => handleChange("specialization", e.target.value)} placeholder="مثال: رياضيات، لغة إنجليزية" />
            </div>
            <div className="space-y-1.5">
              <Label>خبرة في التدريب أو الورش (اختياري)</Label>
              <Textarea value={formData.experience} onChange={e => handleChange("experience", e.target.value)} placeholder="اذكر أي خبرة سابقة في تنظيم ورش أو تدريب..." rows={2} />
            </div>
            <div className="space-y-1.5">
              <Label>لماذا تريد أن تصبح سفيراً لـ Teachers Workbook؟ *</Label>
              <Textarea value={formData.motivation} onChange={e => handleChange("motivation", e.target.value)} placeholder="شاركنا دافعك ورؤيتك..." rows={3} required />
            </div>
            <div className="space-y-1.5">
              <Label>كم عدد المعلمين أو الطلاب الذين يمكنك الوصول إليهم؟</Label>
              <Input value={formData.reach} onChange={e => handleChange("reach", e.target.value)} placeholder="مثال: 50 معلم، 200 طالب" />
            </div>
            <Button type="submit" size="lg" className="w-full">إرسال الطلب</Button>
          </motion.form>
        )}
      </section>
    </div>
  );
}
