import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  MapPin,
  Mail,
  Phone,
  Globe,
  Users,
  GraduationCap,
  BookOpen,
  Monitor,
  CheckCircle2,
  Shield,
  Send,
  Briefcase,
  ImageIcon,
  PlayCircle,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { mockSchool, mockJobPosts } from "@/data/schoolData";

export default function SchoolProfile() {
  const { lang } = useLanguage();
  const school = mockSchool;
  const t = (obj: { ar: string; en: string }) => (lang === "ar" ? obj.ar : obj.en);

  return (
    <div className="min-h-screen bg-background">
      {/* Cover */}
      <div className="h-48 md:h-64 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container max-w-5xl mx-auto px-4 -mt-16 relative z-10 pb-12">
        {/* Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border rounded-2xl p-6 md:p-8 mb-6"
        >
          <div className="flex flex-col md:flex-row gap-5 items-start">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Building2 className="w-10 h-10 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h1 className="text-2xl font-bold text-foreground">{t(school.name)}</h1>
                {school.verified && (
                  <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                    <Shield className="w-3 h-3 me-1" />
                    {lang === "ar" ? "مدرسة موثقة" : "Verified School"}
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-2">{t(school.type)}</p>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{t(school.location.city)}، {t(school.location.governorate)}، {t(school.location.country)}</span>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-lg">
                  <Users className="w-3.5 h-3.5" />
                  <span>{school.studentCount} {lang === "ar" ? "طالب" : "students"}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-lg">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>{school.teacherCount} {lang === "ar" ? "معلم" : "teachers"}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-lg">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{school.classroomCount} {lang === "ar" ? "فصل" : "classrooms"}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" className="gap-1.5">
                <Send className="w-3.5 h-3.5" />
                {lang === "ar" ? "تواصل" : "Contact"}
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card border rounded-2xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-3">{lang === "ar" ? "عن المدرسة" : "About the School"}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(school.description)}</p>
            </motion.div>

            {/* Subjects */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-card border rounded-2xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-3">{lang === "ar" ? "الأقسام والمواد الدراسية" : "Departments & Subjects"}</h2>
              <div className="flex flex-wrap gap-2">
                {school.subjects.map((s) => (
                  <Badge key={s} variant="secondary" className="text-xs px-3 py-1.5">{s}</Badge>
                ))}
              </div>
            </motion.div>

            {/* Teaching Environment */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card border rounded-2xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <Monitor className="w-5 h-5 text-primary" />
                {lang === "ar" ? "بيئة التعليم الرقمية" : "Digital Teaching Environment"}
              </h2>
              <div className="flex flex-wrap gap-2">
                {school.digitalTools.map((tool) => (
                  <div key={tool} className="flex items-center gap-1.5 text-xs bg-primary/5 text-primary px-3 py-2 rounded-lg border border-primary/10">
                    <CheckCircle2 className="w-3 h-3" />
                    {tool}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Educational Levels */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="bg-card border rounded-2xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-3">{lang === "ar" ? "المراحل التعليمية" : "Educational Levels"}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {school.levels.map((level) => (
                  <div key={level} className="text-center p-3 rounded-xl bg-secondary/50 border">
                    <GraduationCap className="w-5 h-5 text-primary mx-auto mb-1" />
                    <span className="text-xs font-medium">{level}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Gallery Placeholder */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-card border rounded-2xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-primary" />
                {lang === "ar" ? "معرض الصور" : "Gallery"}
              </h2>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-video rounded-xl bg-muted flex items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-muted-foreground/40" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Videos Placeholder */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="bg-card border rounded-2xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <PlayCircle className="w-5 h-5 text-primary" />
                {lang === "ar" ? "فيديوهات" : "Videos"}
              </h2>
              <div className="aspect-video rounded-xl bg-muted flex items-center justify-center">
                <div className="text-center">
                  <PlayCircle className="w-12 h-12 text-muted-foreground/30 mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">{lang === "ar" ? "لا توجد فيديوهات بعد" : "No videos yet"}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-card border rounded-2xl p-5">
              <h3 className="font-bold text-sm mb-3">{lang === "ar" ? "معلومات التواصل" : "Contact Info"}</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="truncate" dir="ltr">{school.contact.email}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span dir="ltr">{school.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="truncate" dir="ltr">{school.contact.website}</span>
                </div>
              </div>
            </motion.div>

            {/* Open Positions */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card border rounded-2xl p-5">
              <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-primary" />
                {lang === "ar" ? "الوظائف المتاحة" : "Open Positions"}
              </h3>
              <div className="space-y-3">
                {mockJobPosts.map((job) => (
                  <div key={job.id} className="p-3 rounded-xl bg-secondary/30 border border-transparent hover:border-primary/20 transition-colors">
                    <h4 className="text-xs font-semibold text-foreground mb-1">{t(job.title)}</h4>
                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                      <Badge variant="outline" className="text-[10px] px-1.5 py-0">{t(job.type)}</Badge>
                      <span>{job.experienceRequired}+ {lang === "ar" ? "سنوات" : "yrs"}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-3 text-xs" asChild>
                <Link to="/school-dashboard">
                  {lang === "ar" ? "عرض جميع الوظائف" : "View All Jobs"}
                </Link>
              </Button>
            </motion.div>

            {/* Representative */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="bg-card border rounded-2xl p-5">
              <h3 className="font-bold text-sm mb-3">{lang === "ar" ? "المسؤول الإداري" : "School Representative"}</h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t(school.representative.name)}</p>
                  <p className="text-xs text-muted-foreground">{t(school.representative.title)}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
