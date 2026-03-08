import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Plus,
  FolderKanban,
  GripVertical,
  Calendar,
  Clock,
  Filter,
  User,
  School,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Sparkles,
} from "lucide-react";
import avatar1 from "@/assets/avatars/avatar-1.jpg";
import avatar2 from "@/assets/avatars/avatar-2.jpg";
import avatar3 from "@/assets/avatars/avatar-3.jpg";
import avatar4 from "@/assets/avatars/avatar-4.jpg";
import avatar5 from "@/assets/avatars/avatar-5.jpg";
import avatar6 from "@/assets/avatars/avatar-6.jpg";

type ProjectStatus = "todo" | "in_progress" | "done";

interface Project {
  id: number;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  status: ProjectStatus;
  progress: number;
  dueDate: string;
  members: string[];
  tag: { ar: string; en: string };
  tagColor: string;
  isSchool: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: { ar: "خطة التحول الرقمي للمدرسة", en: "School Digital Transformation Plan" },
    description: { ar: "وضع خطة شاملة لتحويل العملية التعليمية إلى نظام رقمي متكامل", en: "Develop a comprehensive plan to digitize the educational process" },
    status: "in_progress",
    progress: 65,
    dueDate: "2026-04-15",
    members: [avatar1, avatar2, avatar3],
    tag: { ar: "تكنولوجيا", en: "Technology" },
    tagColor: "bg-primary/10 text-primary border-primary/20",
    isSchool: true,
  },
  {
    id: 2,
    title: { ar: "تطوير منهج STEM للمرحلة المتوسطة", en: "STEM Curriculum for Middle School" },
    description: { ar: "تصميم وتنفيذ منهج STEM تفاعلي يدمج العلوم والتكنولوجيا", en: "Design an interactive STEM curriculum integrating science and technology" },
    status: "todo",
    progress: 0,
    dueDate: "2026-05-01",
    members: [avatar4, avatar5],
    tag: { ar: "مناهج", en: "Curriculum" },
    tagColor: "bg-accent/10 text-accent border-accent/20",
    isSchool: true,
  },
  {
    id: 3,
    title: { ar: "ورشة تدريب المعلمين على الذكاء الاصطناعي", en: "AI Training Workshop for Teachers" },
    description: { ar: "تنظيم ورشة عمل لتدريب 50 معلمًا على استخدام أدوات الذكاء الاصطناعي", en: "Organize a workshop to train 50 teachers on AI tools" },
    status: "in_progress",
    progress: 40,
    dueDate: "2026-03-25",
    members: [avatar1, avatar6],
    tag: { ar: "تدريب", en: "Training" },
    tagColor: "bg-[hsl(38,80%,55%)]/10 text-[hsl(38,80%,45%)] border-[hsl(38,80%,55%)]/20",
    isSchool: false,
  },
  {
    id: 4,
    title: { ar: "إنشاء بنك أسئلة إلكتروني", en: "Digital Question Bank" },
    description: { ar: "بناء بنك أسئلة شامل لجميع المواد مع نظام تقييم آلي", en: "Build a comprehensive question bank with automated assessment" },
    status: "todo",
    progress: 0,
    dueDate: "2026-06-10",
    members: [avatar2, avatar3, avatar5],
    tag: { ar: "تقييم", en: "Assessment" },
    tagColor: "bg-[hsl(280,50%,60%)]/10 text-[hsl(280,50%,50%)] border-[hsl(280,50%,60%)]/20",
    isSchool: false,
  },
  {
    id: 5,
    title: { ar: "مشروع الفصول الافتراضية", en: "Virtual Classrooms Project" },
    description: { ar: "تجهيز وإطلاق 10 فصول افتراضية تفاعلية باستخدام أحدث التقنيات", en: "Set up 10 interactive virtual classrooms using latest tech" },
    status: "done",
    progress: 100,
    dueDate: "2026-02-28",
    members: [avatar1, avatar4, avatar6],
    tag: { ar: "تكنولوجيا", en: "Technology" },
    tagColor: "bg-primary/10 text-primary border-primary/20",
    isSchool: true,
  },
  {
    id: 6,
    title: { ar: "برنامج إرشاد الطلاب الموهوبين", en: "Gifted Students Mentoring Program" },
    description: { ar: "تصميم برنامج إرشادي متكامل لاكتشاف ورعاية الطلاب الموهوبين", en: "Design a mentoring program for gifted students" },
    status: "done",
    progress: 100,
    dueDate: "2026-03-01",
    members: [avatar2, avatar5],
    tag: { ar: "طلاب", en: "Students" },
    tagColor: "bg-[hsl(160,50%,45%)]/10 text-[hsl(160,50%,40%)] border-[hsl(160,50%,45%)]/20",
    isSchool: false,
  },
  {
    id: 7,
    title: { ar: "تحديث مكتبة الموارد التعليمية", en: "Update Educational Resources Library" },
    description: { ar: "مراجعة وتحديث جميع الموارد التعليمية الرقمية المتاحة للمعلمين", en: "Review and update all digital educational resources" },
    status: "in_progress",
    progress: 80,
    dueDate: "2026-03-20",
    members: [avatar3, avatar4],
    tag: { ar: "محتوى", en: "Content" },
    tagColor: "bg-[hsl(200,60%,50%)]/10 text-[hsl(200,60%,45%)] border-[hsl(200,60%,50%)]/20",
    isSchool: true,
  },
];

const columns: { key: ProjectStatus; label: { ar: string; en: string }; color: string; dotColor: string }[] = [
  { key: "todo", label: { ar: "قيد الانتظار", en: "To Do" }, color: "border-[hsl(38,80%,55%)]", dotColor: "bg-[hsl(38,80%,55%)]" },
  { key: "in_progress", label: { ar: "قيد التنفيذ", en: "In Progress" }, color: "border-primary", dotColor: "bg-primary" },
  { key: "done", label: { ar: "مكتمل", en: "Done" }, color: "border-[hsl(160,50%,45%)]", dotColor: "bg-[hsl(160,50%,45%)]" },
];

function ProjectCard({ project, lang, index }: { project: Project; lang: string; index: number }) {
  const isRTL = lang === "ar";
  const title = lang === "ar" ? project.title.ar : project.title.en;
  const desc = lang === "ar" ? project.description.ar : project.description.en;
  const tag = lang === "ar" ? project.tag.ar : project.tag.en;

  const dueDate = new Date(project.dueDate);
  const isOverdue = dueDate < new Date() && project.status !== "done";
  const formattedDate = dueDate.toLocaleDateString(lang === "ar" ? "ar-EG" : "en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.35 }}
      whileHover={{ y: -4, boxShadow: "var(--card-shadow-hover)" }}
      className="group bg-card border rounded-xl p-4 cursor-grab active:cursor-grabbing transition-colors hover:border-primary/30 relative"
    >
      {/* Grip handle */}
      <div className={`absolute top-3 ${isRTL ? "left-2" : "right-2"} opacity-0 group-hover:opacity-60 transition-opacity`}>
        <GripVertical className="w-4 h-4 text-muted-foreground" />
      </div>

      {/* Tag + More */}
      <div className="flex items-center justify-between mb-3">
        <Badge variant="outline" className={`text-[10px] px-2 py-0.5 ${project.tagColor}`}>
          {tag}
        </Badge>
        <button className="opacity-0 group-hover:opacity-70 transition-opacity p-1 rounded-md hover:bg-secondary">
          <MoreHorizontal className="w-3.5 h-3.5 text-muted-foreground" />
        </button>
      </div>

      {/* Title */}
      <h4 className="font-semibold text-sm text-foreground mb-1.5 leading-relaxed line-clamp-2">
        {title}
      </h4>
      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">{desc}</p>

      {/* Progress */}
      {project.status !== "todo" && (
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] text-muted-foreground">
              {lang === "ar" ? "التقدم" : "Progress"}
            </span>
            <span className="text-[10px] font-semibold text-foreground">{project.progress}%</span>
          </div>
          <Progress value={project.progress} className="h-1.5" />
        </div>
      )}

      {/* Footer: Date + Avatars */}
      <div className="flex items-center justify-between pt-2 border-t border-border/50">
        <div className={`flex items-center gap-1.5 text-[11px] ${isOverdue ? "text-destructive" : "text-muted-foreground"}`}>
          {isOverdue ? <Clock className="w-3 h-3" /> : <Calendar className="w-3 h-3" />}
          <span>{formattedDate}</span>
        </div>
        <div className="flex -space-x-2 rtl:space-x-reverse">
          {project.members.slice(0, 3).map((avatar, i) => (
            <img
              key={i}
              src={avatar}
              alt=""
              className="w-6 h-6 rounded-full border-2 border-card object-cover"
            />
          ))}
          {project.members.length > 3 && (
            <div className="w-6 h-6 rounded-full border-2 border-card bg-secondary flex items-center justify-center text-[9px] font-semibold text-muted-foreground">
              +{project.members.length - 3}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectManagement() {
  const { lang, isRTL } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<"all" | "mine" | "school">("all");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "school") return p.isSchool;
    if (activeFilter === "mine") return !p.isSchool;
    return true;
  });

  const getColumnProjects = (status: ProjectStatus) =>
    filteredProjects.filter((p) => p.status === status);

  const filters = [
    { key: "all" as const, label: { ar: "جميع المشاريع", en: "All Projects" }, icon: FolderKanban },
    { key: "mine" as const, label: { ar: "مشاريعي", en: "My Projects" }, icon: User },
    { key: "school" as const, label: { ar: "مشاريع المدرسة", en: "School Projects" }, icon: School },
  ];

  const SidebarToggle = isRTL ? ChevronRight : ChevronLeft;
  const SidebarToggleOpen = isRTL ? ChevronLeft : ChevronRight;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-primary/5 to-transparent">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="container max-w-7xl mx-auto px-4 py-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FolderKanban className="w-5 h-5 text-primary" />
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                  <Sparkles className="w-3 h-3 me-1" />
                  {lang === "ar" ? "إدارة المشاريع" : "Project Management"}
                </Badge>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-[1.8]">
                {lang === "ar" ? "مساحة العمل التعاونية" : "Collaborative Workspace"}
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                {lang === "ar"
                  ? "نظّم مشاريعك التعليمية وتابع تقدم فريقك في مكان واحد"
                  : "Organize your educational projects and track your team's progress in one place"}
              </p>
            </div>
            <Button size="lg" className="rounded-xl gap-2 text-sm px-6 self-start md:self-center">
              <Plus className="w-4 h-4" />
              {lang === "ar" ? "إنشاء مشروع جديد" : "Create New Project"}
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-6 mt-6"
          >
            {columns.map((col) => {
              const count = getColumnProjects(col.key).length;
              return (
                <div key={col.key} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className={`w-2.5 h-2.5 rounded-full ${col.dotColor}`} />
                  <span>{lang === "ar" ? col.label.ar : col.label.en}</span>
                  <span className="font-bold text-foreground">{count}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Main Content: Sidebar + Kanban */}
      <div className="container max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <motion.aside
            initial={false}
            animate={{ width: sidebarOpen ? 220 : 48 }}
            transition={{ duration: 0.25 }}
            className="hidden lg:flex flex-col flex-shrink-0 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              {sidebarOpen && (
                <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                  <Filter className="w-3.5 h-3.5" />
                  {lang === "ar" ? "التصفية" : "Filters"}
                </span>
              )}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-1.5 rounded-lg hover:bg-secondary transition-colors"
              >
                {sidebarOpen
                  ? <SidebarToggle className="w-4 h-4 text-muted-foreground" />
                  : <SidebarToggleOpen className="w-4 h-4 text-muted-foreground" />
                }
              </button>
            </div>

            <div className="space-y-1">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeFilter === f.key
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  <f.icon className="w-4 h-4 flex-shrink-0" />
                  {sidebarOpen && (
                    <span className="truncate">{lang === "ar" ? f.label.ar : f.label.en}</span>
                  )}
                </button>
              ))}
            </div>
          </motion.aside>

          {/* Mobile Filters */}
          <div className="lg:hidden flex gap-2 mb-4 absolute -mt-1">
            {/* handled below */}
          </div>

          {/* Kanban Board */}
          <div className="flex-1 min-w-0">
            {/* Mobile filter pills */}
            <div className="flex lg:hidden gap-2 mb-4 overflow-x-auto pb-2">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                    activeFilter === f.key
                      ? "bg-primary/10 text-primary"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  <f.icon className="w-3.5 h-3.5" />
                  {lang === "ar" ? f.label.ar : f.label.en}
                </button>
              ))}
            </div>

            {/* Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {columns.map((col) => {
                const colProjects = getColumnProjects(col.key);
                return (
                  <motion.div
                    key={col.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col"
                  >
                    {/* Column Header */}
                    <div className={`flex items-center justify-between mb-4 pb-3 border-b-2 ${col.color}`}>
                      <div className="flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${col.dotColor}`} />
                        <h3 className="font-semibold text-sm text-foreground">
                          {lang === "ar" ? col.label.ar : col.label.en}
                        </h3>
                      </div>
                      <Badge variant="secondary" className="text-[10px] px-2 py-0.5 min-w-[24px] justify-center">
                        {colProjects.length}
                      </Badge>
                    </div>

                    {/* Cards */}
                    <div className="space-y-3 min-h-[200px]">
                      {colProjects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} lang={lang} index={i} />
                      ))}
                      {colProjects.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-10 text-center border border-dashed rounded-xl">
                          <FolderKanban className="w-8 h-8 text-muted-foreground/30 mb-2" />
                          <p className="text-xs text-muted-foreground">
                            {lang === "ar" ? "لا توجد مشاريع" : "No projects"}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
