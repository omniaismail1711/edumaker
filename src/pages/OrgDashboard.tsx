import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Building2,
  Search,
  Crown,
  Shield,
  CheckCircle2,
  Star,
  MapPin,
  Filter,
  Award,
  Brain,
  Send,
  Sparkles,
  GraduationCap,
  ArrowUpRight,
  Lock,
  MessageCircle,
  Bot,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import avatar1 from "@/assets/avatars/avatar-1.jpg";
import avatar2 from "@/assets/avatars/avatar-2.jpg";
import avatar3 from "@/assets/avatars/avatar-3.jpg";
import avatar4 from "@/assets/avatars/avatar-4.jpg";
import avatar5 from "@/assets/avatars/avatar-5.jpg";
import avatar6 from "@/assets/avatars/avatar-6.jpg";

interface MockTeacher {
  id: number;
  name: { ar: string; en: string };
  title: { ar: string; en: string };
  location: { ar: string; en: string };
  specializations: string[];
  impactScore: number;
  verified: boolean;
  experience: number;
  certCount: number;
  avatar: string;
}

const teachers: MockTeacher[] = [
  {
    id: 1,
    name: { ar: "أحمد محمد السيد", en: "Ahmed Mohamed" },
    title: { ar: "معلم رياضيات - خبير AI", en: "Math Teacher - AI Expert" },
    location: { ar: "الرياض، السعودية", en: "Riyadh, Saudi Arabia" },
    specializations: ["STEM", "AI"],
    impactScore: 92,
    verified: true,
    experience: 12,
    certCount: 8,
    avatar: avatar1,
  },
  {
    id: 2,
    name: { ar: "فاطمة أحمد العلي", en: "Fatima Al-Ali" },
    title: { ar: "معلمة إنجليزية - مدربة", en: "English Teacher - Trainer" },
    location: { ar: "دبي، الإمارات", en: "Dubai, UAE" },
    specializations: ["اللغة الإنجليزية", "التعلم المدمج"],
    impactScore: 87,
    verified: true,
    experience: 8,
    certCount: 12,
    avatar: avatar2,
  },
  {
    id: 3,
    name: { ar: "محمد خالد الحربي", en: "Mohammed Al-Harbi" },
    title: { ar: "معلم علوم - STEM", en: "Science Teacher - STEM" },
    location: { ar: "جدة، السعودية", en: "Jeddah, Saudi Arabia" },
    specializations: ["STEM", "الروبوتات"],
    impactScore: 78,
    verified: false,
    experience: 6,
    certCount: 5,
    avatar: avatar3,
  },
  {
    id: 4,
    name: { ar: "نورة سعد القحطاني", en: "Noura Al-Qahtani" },
    title: { ar: "معلمة حاسب - خبيرة AI", en: "CS Teacher - AI Expert" },
    location: { ar: "الكويت", en: "Kuwait" },
    specializations: ["الذكاء الاصطناعي", "البرمجة"],
    impactScore: 95,
    verified: true,
    experience: 10,
    certCount: 15,
    avatar: avatar4,
  },
  {
    id: 5,
    name: { ar: "عبدالله يوسف المنصور", en: "Abdullah Al-Mansour" },
    title: { ar: "معلم عربي - كاتب محتوى", en: "Arabic Teacher - Content Writer" },
    location: { ar: "عمّان، الأردن", en: "Amman, Jordan" },
    specializations: ["اللغة العربية", "إنتاج الفيديو"],
    impactScore: 83,
    verified: true,
    experience: 15,
    certCount: 7,
    avatar: avatar5,
  },
  {
    id: 6,
    name: { ar: "ريم عادل البكري", en: "Reem Al-Bakri" },
    title: { ar: "معلمة رياض أطفال", en: "Kindergarten Teacher" },
    location: { ar: "القاهرة، مصر", en: "Cairo, Egypt" },
    specializations: ["رياض الأطفال", "منتسوري"],
    impactScore: 74,
    verified: false,
    experience: 9,
    certCount: 6,
    avatar: avatar6,
  },
];

export default function OrgDashboard() {
  const { lang, isRTL } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const isPremium = false; // Mock: organization is on free plan

  const filteredTeachers = teachers.filter((t) => {
    const name = lang === "ar" ? t.name.ar : t.name.en;
    const title = lang === "ar" ? t.title.ar : t.title.en;
    const matchesSearch = !searchQuery || name.includes(searchQuery) || title.includes(searchQuery) ||
      t.specializations.some(s => s.includes(searchQuery));
    const matchesVerified = !verifiedOnly || t.verified;
    return matchesSearch && matchesVerified;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Premium Banner */}
      {!isPremium && (
        <div className="bg-gradient-to-l from-accent/10 via-primary/10 to-accent/10 border-b">
          <div className="container max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-sm">
              <Crown className="w-4 h-4 text-accent" />
              <span className="text-foreground font-medium">
                {lang === "ar"
                  ? "قم بالترقية للوصول إلى بيانات المعلمين المتميزين وأولوية التوظيف"
                  : "Upgrade to access top educator data and priority hiring"}
              </span>
            </div>
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-1.5 text-xs">
              <Crown className="w-3.5 h-3.5" />
              {lang === "ar" ? "ترقية الآن" : "Upgrade Now"}
            </Button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="border-b bg-card">
        <div className="container max-w-7xl mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg font-bold text-foreground">
                    {lang === "ar" ? "مدارس المعرفة الأهلية" : "Knowledge Academy"}
                  </h1>
                  {isPremium && (
                    <Badge className="bg-accent/10 text-accent border-accent/20 text-[10px]">
                      <Shield className="w-3 h-3 me-1" />
                      {lang === "ar" ? "موثق" : "Verified"}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {lang === "ar" ? "لوحة تحكم المؤسسة" : "Organization Dashboard"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-card border rounded-xl p-5 sticky top-20 space-y-5">
              <h3 className="font-bold text-foreground flex items-center gap-2 text-sm">
                <Filter className="w-4 h-4 text-primary" />
                {lang === "ar" ? "فلترة متقدمة" : "Advanced Filters"}
              </h3>

              {/* Courses Filter */}
              <div className="space-y-2">
                <Label className="text-xs">{lang === "ar" ? "الدورات المنجزة" : "Completed Courses"}</Label>
                <Select>
                  <SelectTrigger className="h-9 text-xs">
                    <SelectValue placeholder={lang === "ar" ? "الكل" : "All"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{lang === "ar" ? "الكل" : "All"}</SelectItem>
                    <SelectItem value="5+">5+</SelectItem>
                    <SelectItem value="10+">10+</SelectItem>
                    <SelectItem value="20+">20+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Certifications */}
              <div className="space-y-2">
                <Label className="text-xs">{lang === "ar" ? "الشهادات المعتمدة" : "Certifications"}</Label>
                <Select>
                  <SelectTrigger className="h-9 text-xs">
                    <SelectValue placeholder={lang === "ar" ? "الكل" : "All"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{lang === "ar" ? "الكل" : "All"}</SelectItem>
                    <SelectItem value="google">Google</SelectItem>
                    <SelectItem value="microsoft">Microsoft</SelectItem>
                    <SelectItem value="ai">{lang === "ar" ? "ذكاء اصطناعي" : "AI"}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Experience */}
              <div className="space-y-2">
                <Label className="text-xs">{lang === "ar" ? "سنوات الخبرة" : "Years of Experience"}</Label>
                <Select>
                  <SelectTrigger className="h-9 text-xs">
                    <SelectValue placeholder={lang === "ar" ? "الكل" : "All"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{lang === "ar" ? "الكل" : "All"}</SelectItem>
                    <SelectItem value="3+">{lang === "ar" ? "+3 سنوات" : "3+ years"}</SelectItem>
                    <SelectItem value="5+">{lang === "ar" ? "+5 سنوات" : "5+ years"}</SelectItem>
                    <SelectItem value="10+">{lang === "ar" ? "+10 سنوات" : "10+ years"}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Verified Only */}
              <div className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center gap-2">
                  {!isPremium && <Lock className="w-3.5 h-3.5 text-accent" />}
                  <Label className="text-xs cursor-pointer">
                    {lang === "ar" ? "معلمون موثقون فقط" : "Verified Only"}
                  </Label>
                </div>
                <Switch
                  checked={verifiedOnly}
                  onCheckedChange={setVerifiedOnly}
                  disabled={!isPremium && verifiedOnly}
                />
              </div>
              {!isPremium && (
                <p className="text-[10px] text-accent flex items-center gap-1">
                  <Crown className="w-3 h-3" />
                  {lang === "ar" ? "ميزة حصرية للمشتركين" : "Premium feature"}
                </p>
              )}
            </div>
          </aside>

          {/* Main Area */}
          <div className="flex-1 min-w-0">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className={`absolute ${isRTL ? "right-4" : "left-4"} top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground`} />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === "ar" ? "ابحث عن معلم بالاسم أو التخصص أو المهارة..." : "Search by name, specialization, or skill..."}
                className={`h-12 text-sm ${isRTL ? "pr-12" : "pl-12"} rounded-xl`}
              />
            </div>

            {/* Results count */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground">
                {lang === "ar" ? `عرض ${filteredTeachers.length} معلم` : `Showing ${filteredTeachers.length} teachers`}
              </p>
            </div>

            {/* Teacher Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredTeachers.map((teacher, i) => {
                const name = lang === "ar" ? teacher.name.ar : teacher.name.en;
                const title = lang === "ar" ? teacher.title.ar : teacher.title.en;
                const location = lang === "ar" ? teacher.location.ar : teacher.location.en;

                return (
                  <motion.div
                    key={teacher.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group bg-card border rounded-xl p-5 hover:border-primary/30 hover:shadow-[var(--card-shadow-hover)] transition-all"
                  >
                    {/* Top row */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="relative">
                        <img src={teacher.avatar} alt={name} className="w-12 h-12 rounded-xl object-cover" />
                        {teacher.verified && (
                          <div className="absolute -bottom-1 -end-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                            <CheckCircle2 className="w-3 h-3 text-primary-foreground" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-sm text-foreground truncate">{name}</h3>
                        <p className="text-xs text-muted-foreground truncate">{title}</p>
                        <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          <span>{location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Impact Score */}
                    <div className="flex items-center justify-between mb-3 p-2 rounded-lg bg-secondary/50">
                      <div className="flex items-center gap-1.5 text-xs">
                        <Sparkles className="w-3.5 h-3.5 text-primary" />
                        <span className="text-muted-foreground">
                          {lang === "ar" ? "نقاط التأثير" : "Impact Score"}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-primary">{teacher.impactScore}</span>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <GraduationCap className="w-3 h-3" />
                        <span>{teacher.experience} {lang === "ar" ? "سنة" : "yrs"}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        <span>{teacher.certCount} {lang === "ar" ? "شهادة" : "certs"}</span>
                      </div>
                    </div>

                    {/* Specializations */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {teacher.specializations.map((s) => (
                        <Badge key={s} variant="secondary" className="text-[10px] px-2 py-0.5">
                          {s}
                        </Badge>
                      ))}
                    </div>

                    {/* Action */}
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 text-xs gap-1.5 h-9" asChild>
                        <Link to={`/profile/${teacher.id}`}>
                          <Send className="w-3.5 h-3.5" />
                          {lang === "ar" ? "إرسال طلب تواصل" : "Send Inquiry"}
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" className="h-9 w-9 p-0" asChild>
                        <Link to={`/profile/${teacher.id}`}>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chatbot */}
      <div className="fixed bottom-6 start-6 z-50">
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="bg-card border rounded-2xl shadow-xl w-80 mb-3 overflow-hidden"
          >
            <div className="bg-primary p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-primary-foreground" />
                <span className="text-sm font-bold text-primary-foreground">
                  {lang === "ar" ? "المساعد الذكي" : "Smart Assistant"}
                </span>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-primary-foreground/70 hover:text-primary-foreground text-lg">
                ×
              </button>
            </div>
            <div className="p-4 min-h-[200px]">
              <div className="bg-secondary rounded-lg p-3 text-sm text-foreground mb-3">
                {lang === "ar"
                  ? "👋 مرحباً! كيف يمكنني مساعدتك في التوظيف أو البحث عن المعلمين؟"
                  : "👋 Hello! How can I help you with hiring or finding teachers?"}
              </div>
            </div>
            <div className="p-3 border-t">
              <div className="flex items-center gap-2">
                <Input
                  placeholder={lang === "ar" ? "اكتب سؤالك..." : "Type your question..."}
                  className="h-9 text-xs rounded-lg"
                />
                <Button size="sm" className="h-9 w-9 p-0">
                  <Send className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="w-14 h-14 rounded-full bg-primary shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
        >
          <MessageCircle className="w-6 h-6 text-primary-foreground" />
        </button>
      </div>
    </div>
  );
}
