import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import {
  Building2,
  Search,
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
  Briefcase,
  Users,
  Eye,
  BarChart3,
  Plus,
  Clock,
  TrendingUp,
  FileText,
  BookOpen,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  mockSchool,
  mockJobPosts,
  mockApplications,
  analyticsData,
  subjectsList,
} from "@/data/schoolData";
import avatar1 from "@/assets/avatars/avatar-1.jpg";
import avatar2 from "@/assets/avatars/avatar-2.jpg";
import avatar3 from "@/assets/avatars/avatar-3.jpg";
import avatar4 from "@/assets/avatars/avatar-4.jpg";
import avatar5 from "@/assets/avatars/avatar-5.jpg";
import avatar6 from "@/assets/avatars/avatar-6.jpg";

const discoverTeachers = [
  { id: 1, name: { ar: "أحمد محمد", en: "Ahmed Mohamed" }, subject: { ar: "رياضيات", en: "Math" }, experience: 12, courses: 8, rating: 4.8, avatar: avatar1, futureTeacher: false },
  { id: 2, name: { ar: "فاطمة العلي", en: "Fatima Al-Ali" }, subject: { ar: "إنجليزي", en: "English" }, experience: 8, courses: 12, rating: 4.7, avatar: avatar2, futureTeacher: false },
  { id: 3, name: { ar: "محمد الحربي", en: "Mohammed Al-Harbi" }, subject: { ar: "علوم", en: "Science" }, experience: 6, courses: 5, rating: 4.3, avatar: avatar3, futureTeacher: false },
  { id: 4, name: { ar: "نورة القحطاني", en: "Noura Al-Qahtani" }, subject: { ar: "حاسب", en: "CS" }, experience: 10, courses: 15, rating: 4.9, avatar: avatar4, futureTeacher: false },
  { id: 5, name: { ar: "عبدالله المنصور", en: "Abdullah Al-Mansour" }, subject: { ar: "عربي", en: "Arabic" }, experience: 15, courses: 7, rating: 4.5, avatar: avatar5, futureTeacher: false },
  { id: 6, name: { ar: "ريم البكري", en: "Reem Al-Bakri" }, subject: { ar: "رياض أطفال", en: "KG" }, experience: 0, courses: 3, rating: 4.1, avatar: avatar6, futureTeacher: true },
];

export default function SchoolDashboard() {
  const { lang, isRTL } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("overview");
  const t = (obj: { ar: string; en: string }) => (lang === "ar" ? obj.ar : obj.en);

  const statusColors: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
    reviewed: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    accepted: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    rejected: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  };

  const statusLabels: Record<string, { ar: string; en: string }> = {
    pending: { ar: "قيد المراجعة", en: "Pending" },
    reviewed: { ar: "تمت المراجعة", en: "Reviewed" },
    accepted: { ar: "مقبول", en: "Accepted" },
    rejected: { ar: "مرفوض", en: "Rejected" },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container max-w-7xl mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg font-bold text-foreground">{t(mockSchool.name)}</h1>
                  {mockSchool.verified && (
                    <Badge className="bg-primary/10 text-primary border-primary/20 text-[10px]">
                      <Shield className="w-3 h-3 me-1" />
                      {lang === "ar" ? "موثقة" : "Verified"}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {lang === "ar" ? "لوحة تحكم المدرسة" : "School Dashboard"}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link to="/school-profile">
                  <Eye className="w-4 h-4 me-1.5" />
                  {lang === "ar" ? "الملف العام" : "Public Profile"}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6 flex-wrap h-auto gap-1 bg-muted/50 p-1 rounded-xl">
            <TabsTrigger value="overview" className="text-xs gap-1.5 rounded-lg">
              <BarChart3 className="w-3.5 h-3.5" />
              {lang === "ar" ? "نظرة عامة" : "Overview"}
            </TabsTrigger>
            <TabsTrigger value="jobs" className="text-xs gap-1.5 rounded-lg">
              <Briefcase className="w-3.5 h-3.5" />
              {lang === "ar" ? "الوظائف" : "Jobs"}
            </TabsTrigger>
            <TabsTrigger value="applications" className="text-xs gap-1.5 rounded-lg">
              <FileText className="w-3.5 h-3.5" />
              {lang === "ar" ? "الطلبات" : "Applications"}
            </TabsTrigger>
            <TabsTrigger value="discover" className="text-xs gap-1.5 rounded-lg">
              <Search className="w-3.5 h-3.5" />
              {lang === "ar" ? "اكتشف معلمين" : "Discover"}
            </TabsTrigger>
            <TabsTrigger value="analytics" className="text-xs gap-1.5 rounded-lg">
              <TrendingUp className="w-3.5 h-3.5" />
              {lang === "ar" ? "التحليلات" : "Analytics"}
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { icon: FileText, label: { ar: "إجمالي الطلبات", en: "Total Applications" }, value: analyticsData.totalApplications, color: "text-primary" },
                { icon: Eye, label: { ar: "مشاهدات الملف", en: "Profile Views" }, value: analyticsData.profileViews, color: "text-accent" },
                { icon: Briefcase, label: { ar: "وظائف نشطة", en: "Active Jobs" }, value: analyticsData.activeJobs, color: "text-green-600" },
                { icon: Users, label: { ar: "معلمون متقدمون", en: "Teachers Applied" }, value: mockApplications.length, color: "text-purple-600" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card border rounded-xl p-5"
                >
                  <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{t(stat.label)}</p>
                </motion.div>
              ))}
            </div>

            {/* Recent Applications */}
            <div className="bg-card border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-4">{lang === "ar" ? "آخر الطلبات" : "Recent Applications"}</h3>
              <div className="space-y-3">
                {mockApplications.slice(0, 3).map((app) => (
                  <div key={app.id} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 border border-transparent hover:border-primary/20 transition-colors">
                    <img src={app.avatar} alt="" className="w-10 h-10 rounded-xl object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{t(app.teacherName)}</p>
                      <p className="text-xs text-muted-foreground">{t(app.subject)} • {app.experience} {lang === "ar" ? "سنة" : "yrs"}</p>
                    </div>
                    <Badge className={`text-[10px] ${statusColors[app.status]}`}>
                      {t(statusLabels[app.status])}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Jobs Tab */}
          <TabsContent value="jobs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-foreground">{lang === "ar" ? "الوظائف المنشورة" : "Posted Jobs"}</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" className="gap-1.5 text-xs">
                    <Plus className="w-3.5 h-3.5" />
                    {lang === "ar" ? "نشر وظيفة" : "Post Job"}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-lg">
                  <DialogHeader>
                    <DialogTitle>{lang === "ar" ? "نشر وظيفة جديدة" : "Post New Job"}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label className="text-sm">{lang === "ar" ? "المسمى الوظيفي" : "Job Title"}</Label>
                      <Input className="h-10" placeholder={lang === "ar" ? "مثال: معلم رياضيات" : "e.g. Math Teacher"} />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label className="text-sm">{lang === "ar" ? "المادة" : "Subject"}</Label>
                        <Select>
                          <SelectTrigger className="h-10"><SelectValue /></SelectTrigger>
                          <SelectContent>
                            {subjectsList.map((s) => (
                              <SelectItem key={s.en} value={s.en}>{lang === "ar" ? s.ar : s.en}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm">{lang === "ar" ? "نوع الدوام" : "Employment Type"}</Label>
                        <Select>
                          <SelectTrigger className="h-10"><SelectValue /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="full">{lang === "ar" ? "دوام كامل" : "Full-time"}</SelectItem>
                            <SelectItem value="part">{lang === "ar" ? "دوام جزئي" : "Part-time"}</SelectItem>
                            <SelectItem value="temp">{lang === "ar" ? "مؤقت" : "Temporary"}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label className="text-sm">{lang === "ar" ? "سنوات الخبرة" : "Experience Required"}</Label>
                        <Input type="number" className="h-10" placeholder="3" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm">{lang === "ar" ? "الراتب (اختياري)" : "Salary (optional)"}</Label>
                        <Input className="h-10" placeholder={lang === "ar" ? "8,000 - 12,000" : "8,000 - 12,000"} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm">{lang === "ar" ? "المهارات المطلوبة" : "Required Skills"}</Label>
                      <Input className="h-10" placeholder={lang === "ar" ? "STEM, تكنولوجيا التعليم" : "STEM, EdTech"} />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm">{lang === "ar" ? "وصف الوظيفة" : "Job Description"}</Label>
                      <Textarea rows={3} />
                    </div>
                    <Button className="w-full">{lang === "ar" ? "نشر الوظيفة" : "Post Job"}</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="space-y-4">
              {mockJobPosts.map((job, i) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card border rounded-xl p-5 hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{t(job.title)}</h4>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="secondary" className="text-[10px]">{t(job.type)}</Badge>
                        <Badge variant="outline" className="text-[10px]">{t(job.gradeLevel)}</Badge>
                      </div>
                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Award className="w-3 h-3" />{job.experienceRequired}+ {lang === "ar" ? "سنوات خبرة" : "yrs exp"}</span>
                        <span className="flex items-center gap-1"><Users className="w-3 h-3" />{job.applicants} {lang === "ar" ? "متقدم" : "applicants"}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{lang === "ar" ? "ينتهي" : "Deadline"}: {job.deadline}</span>
                      </div>
                      {job.salaryRange && (
                        <p className="text-xs text-primary font-medium mt-2">{t(job.salaryRange)}</p>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {job.skills.map((s) => (
                        <Badge key={s} variant="secondary" className="text-[10px]">{s}</Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Applications Tab */}
          <TabsContent value="applications">
            <div className="flex items-center gap-3 mb-4">
              <Select>
                <SelectTrigger className="w-40 h-9 text-xs">
                  <SelectValue placeholder={lang === "ar" ? "جميع الوظائف" : "All Jobs"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{lang === "ar" ? "جميع الوظائف" : "All Jobs"}</SelectItem>
                  {mockJobPosts.map((j) => (
                    <SelectItem key={j.id} value={j.id}>{t(j.title)}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-36 h-9 text-xs">
                  <SelectValue placeholder={lang === "ar" ? "الحالة" : "Status"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{lang === "ar" ? "الكل" : "All"}</SelectItem>
                  <SelectItem value="pending">{lang === "ar" ? "قيد المراجعة" : "Pending"}</SelectItem>
                  <SelectItem value="reviewed">{lang === "ar" ? "تمت المراجعة" : "Reviewed"}</SelectItem>
                  <SelectItem value="accepted">{lang === "ar" ? "مقبول" : "Accepted"}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              {mockApplications.map((app, i) => (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="bg-card border rounded-xl p-5 hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <img src={app.avatar} alt="" className="w-12 h-12 rounded-xl object-cover" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-sm text-foreground">{t(app.teacherName)}</h4>
                        <Badge className={`text-[10px] ${statusColors[app.status]}`}>
                          {t(statusLabels[app.status])}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{t(app.intro)}</p>
                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" />{t(app.subject)}</span>
                        <span className="flex items-center gap-1"><GraduationCap className="w-3 h-3" />{app.experience} {lang === "ar" ? "سنة" : "yrs"}</span>
                        <span className="flex items-center gap-1"><Award className="w-3 h-3" />{app.courses} {lang === "ar" ? "دورة" : "courses"}</span>
                        <span className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-500" />{app.rating}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-xs h-8" asChild>
                        <Link to={`/profile/${app.id}`}>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </Button>
                      <Button size="sm" className="text-xs h-8 gap-1">
                        <Send className="w-3 h-3" />
                        {lang === "ar" ? "تواصل" : "Contact"}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Discover Teachers Tab */}
          <TabsContent value="discover">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Filters Sidebar */}
              <aside className="w-full md:w-56 flex-shrink-0">
                <div className="bg-card border rounded-xl p-5 sticky top-20 space-y-4">
                  <h3 className="font-bold text-sm flex items-center gap-2">
                    <Filter className="w-4 h-4 text-primary" />
                    {lang === "ar" ? "فلترة" : "Filters"}
                  </h3>
                  <div className="space-y-2">
                    <Label className="text-xs">{lang === "ar" ? "التخصص" : "Subject"}</Label>
                    <Select>
                      <SelectTrigger className="h-9 text-xs"><SelectValue placeholder={lang === "ar" ? "الكل" : "All"} /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">{lang === "ar" ? "الكل" : "All"}</SelectItem>
                        {subjectsList.slice(0, 5).map((s) => (
                          <SelectItem key={s.en} value={s.en}>{lang === "ar" ? s.ar : s.en}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs">{lang === "ar" ? "سنوات الخبرة" : "Experience"}</Label>
                    <Select>
                      <SelectTrigger className="h-9 text-xs"><SelectValue placeholder={lang === "ar" ? "الكل" : "All"} /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">{lang === "ar" ? "الكل" : "All"}</SelectItem>
                        <SelectItem value="3+">3+</SelectItem>
                        <SelectItem value="5+">5+</SelectItem>
                        <SelectItem value="10+">10+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs">{lang === "ar" ? "الدورات" : "Courses"}</Label>
                    <Select>
                      <SelectTrigger className="h-9 text-xs"><SelectValue placeholder={lang === "ar" ? "الكل" : "All"} /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">{lang === "ar" ? "الكل" : "All"}</SelectItem>
                        <SelectItem value="5+">5+</SelectItem>
                        <SelectItem value="10+">10+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="p-3 rounded-lg border bg-primary/5">
                    <div className="flex items-center gap-1.5 text-xs font-medium text-primary mb-1">
                      <Brain className="w-3.5 h-3.5" />
                      {lang === "ar" ? "تدريب AI في التعليم" : "AI in Education"}
                    </div>
                    <p className="text-[10px] text-muted-foreground">
                      {lang === "ar" ? "فلتر المعلمين الحاصلين على تدريب AI" : "Filter teachers with AI training"}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border bg-accent/5">
                    <div className="flex items-center gap-1.5 text-xs font-medium text-accent mb-1">
                      <GraduationCap className="w-3.5 h-3.5" />
                      {lang === "ar" ? "برنامج المعلم المستقبلي" : "Future Teacher Program"}
                    </div>
                    <p className="text-[10px] text-muted-foreground">
                      {lang === "ar" ? "فلتر خريجي برنامج المعلم المستقبلي" : "Filter future teacher graduates"}
                    </p>
                  </div>
                </div>
              </aside>

              {/* Teacher Grid */}
              <div className="flex-1 min-w-0">
                <div className="relative mb-4">
                  <Search className={`absolute ${isRTL ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground`} />
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={lang === "ar" ? "ابحث عن معلم..." : "Search teachers..."}
                    className={`h-10 text-sm ${isRTL ? "pr-10" : "pl-10"} rounded-xl`}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {discoverTeachers.map((teacher, i) => (
                    <motion.div
                      key={teacher.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="bg-card border rounded-xl p-4 hover:border-primary/20 transition-colors"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <img src={teacher.avatar} alt="" className="w-11 h-11 rounded-xl object-cover" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-bold text-sm truncate">{t(teacher.name)}</h4>
                            {teacher.futureTeacher && (
                              <Badge className="bg-accent/10 text-accent border-accent/20 text-[10px] px-1.5">
                                <Sparkles className="w-2.5 h-2.5 me-0.5" />
                                {lang === "ar" ? "مستقبلي" : "Future"}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground">{t(teacher.subject)}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1"><GraduationCap className="w-3 h-3" />{teacher.experience} {lang === "ar" ? "سنة" : "yrs"}</span>
                        <span className="flex items-center gap-1"><Award className="w-3 h-3" />{teacher.courses} {lang === "ar" ? "دورة" : "courses"}</span>
                        <span className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-500" />{teacher.rating}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 text-xs h-8 gap-1" asChild>
                          <Link to={`/profile/${teacher.id}`}>
                            <Send className="w-3 h-3" />
                            {lang === "ar" ? "تواصل" : "Contact"}
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" className="h-8 w-8 p-0" asChild>
                          <Link to={`/profile/${teacher.id}`}>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Top Subjects */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="bg-card border rounded-xl p-5">
                <h3 className="font-bold text-sm mb-4">{lang === "ar" ? "أكثر التخصصات طلباً" : "Most Searched Subjects"}</h3>
                <div className="space-y-3">
                  {analyticsData.topSubjects.map((subj, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-xs text-muted-foreground w-24 truncate">{t(subj.name)}</span>
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${(subj.count / analyticsData.topSubjects[0].count) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium text-foreground w-8 text-end">{subj.count}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Monthly Applications */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card border rounded-xl p-5">
                <h3 className="font-bold text-sm mb-4">{lang === "ar" ? "الطلبات الشهرية" : "Monthly Applications"}</h3>
                <div className="space-y-3">
                  {analyticsData.monthlyApplications.map((m, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-xs text-muted-foreground w-16">{t(m.month)}</span>
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-accent rounded-full"
                          style={{ width: `${(m.count / 30) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium text-foreground w-8 text-end">{m.count}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-card border rounded-xl p-5 md:col-span-2">
                <h3 className="font-bold text-sm mb-4">{lang === "ar" ? "ملخص سريع" : "Quick Summary"}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 rounded-xl bg-primary/5">
                    <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-lg font-bold text-foreground">{analyticsData.profileViews}</p>
                    <p className="text-xs text-muted-foreground">{lang === "ar" ? "مشاهدة" : "Views"}</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-accent/5">
                    <FileText className="w-6 h-6 text-accent mx-auto mb-2" />
                    <p className="text-lg font-bold text-foreground">{analyticsData.totalApplications}</p>
                    <p className="text-xs text-muted-foreground">{lang === "ar" ? "طلب" : "Applications"}</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-green-50 dark:bg-green-900/10">
                    <Briefcase className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <p className="text-lg font-bold text-foreground">{analyticsData.activeJobs}</p>
                    <p className="text-xs text-muted-foreground">{lang === "ar" ? "وظيفة نشطة" : "Active Jobs"}</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-purple-50 dark:bg-purple-900/10">
                    <Users className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                    <p className="text-lg font-bold text-foreground">{mockSchool.teacherCount}</p>
                    <p className="text-xs text-muted-foreground">{lang === "ar" ? "معلم حالي" : "Current Teachers"}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
