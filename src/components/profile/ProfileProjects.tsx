import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  FolderKanban,
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Plus,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import avatar1 from "@/assets/avatars/avatar-1.jpg";
import avatar2 from "@/assets/avatars/avatar-2.jpg";
import avatar3 from "@/assets/avatars/avatar-3.jpg";
import avatar4 from "@/assets/avatars/avatar-4.jpg";
import avatar5 from "@/assets/avatars/avatar-5.jpg";
import avatar6 from "@/assets/avatars/avatar-6.jpg";

interface MiniProject {
  id: number;
  title: { ar: string; en: string };
  status: "todo" | "in_progress" | "done";
  progress: number;
  dueDate: string;
  members: string[];
  tag: { ar: string; en: string };
  tagColor: string;
}

const miniProjects: MiniProject[] = [
  {
    id: 1,
    title: { ar: "خطة التحول الرقمي للمدرسة", en: "School Digital Transformation Plan" },
    status: "in_progress",
    progress: 65,
    dueDate: "2026-04-15",
    members: [avatar1, avatar2, avatar3],
    tag: { ar: "تكنولوجيا", en: "Technology" },
    tagColor: "bg-primary/10 text-primary border-primary/20",
  },
  {
    id: 3,
    title: { ar: "ورشة تدريب المعلمين على الذكاء الاصطناعي", en: "AI Training Workshop" },
    status: "in_progress",
    progress: 40,
    dueDate: "2026-03-25",
    members: [avatar1, avatar6],
    tag: { ar: "تدريب", en: "Training" },
    tagColor: "bg-[hsl(38,80%,55%)]/10 text-[hsl(38,80%,45%)] border-[hsl(38,80%,55%)]/20",
  },
  {
    id: 7,
    title: { ar: "تحديث مكتبة الموارد التعليمية", en: "Update Educational Resources" },
    status: "in_progress",
    progress: 80,
    dueDate: "2026-03-20",
    members: [avatar3, avatar4],
    tag: { ar: "محتوى", en: "Content" },
    tagColor: "bg-[hsl(200,60%,50%)]/10 text-[hsl(200,60%,45%)] border-[hsl(200,60%,50%)]/20",
  },
  {
    id: 5,
    title: { ar: "مشروع الفصول الافتراضية", en: "Virtual Classrooms Project" },
    status: "done",
    progress: 100,
    dueDate: "2026-02-28",
    members: [avatar1, avatar4, avatar6],
    tag: { ar: "تكنولوجيا", en: "Technology" },
    tagColor: "bg-primary/10 text-primary border-primary/20",
  },
];

const statusConfig = {
  todo: { ar: "قيد الانتظار", en: "To Do", dot: "bg-[hsl(38,80%,55%)]" },
  in_progress: { ar: "قيد التنفيذ", en: "In Progress", dot: "bg-primary" },
  done: { ar: "مكتمل", en: "Done", dot: "bg-[hsl(160,50%,45%)]" },
};

export default function ProfileProjects() {
  const { lang, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      className="bg-card rounded-xl border p-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-bold text-foreground flex items-center gap-2">
          <FolderKanban className="w-5 h-5 text-primary" />
          {lang === "ar" ? "المشاريع التعليمية" : "Educational Projects"}
        </h2>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-[10px]">
            {miniProjects.length} {lang === "ar" ? "مشاريع" : "projects"}
          </Badge>
          <Button variant="ghost" size="icon" className="h-7 w-7" asChild>
            <Link to="/projects">
              <Plus className="w-3.5 h-3.5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Status summary pills */}
      <div className="flex gap-3 mb-4">
        {(["in_progress", "done", "todo"] as const).map((status) => {
          const count = miniProjects.filter((p) => p.status === status).length;
          if (count === 0) return null;
          const cfg = statusConfig[status];
          return (
            <div key={status} className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
              <span>{lang === "ar" ? cfg.ar : cfg.en}</span>
              <span className="font-bold text-foreground">{count}</span>
            </div>
          );
        })}
      </div>

      {/* Project cards */}
      <div className="space-y-3">
        {miniProjects.map((project, i) => {
          const title = lang === "ar" ? project.title.ar : project.title.en;
          const tag = lang === "ar" ? project.tag.ar : project.tag.en;
          const cfg = statusConfig[project.status];
          const dueDate = new Date(project.dueDate);
          const isOverdue = dueDate < new Date() && project.status !== "done";
          const formattedDate = dueDate.toLocaleDateString(
            lang === "ar" ? "ar-EG" : "en-US",
            { month: "short", day: "numeric" }
          );

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: isRTL ? 12 : -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group flex items-start gap-3 p-3 rounded-lg border hover:border-primary/30 hover:bg-primary/[0.02] transition-colors cursor-pointer"
            >
              {/* Status dot */}
              <div className="pt-1.5 flex-shrink-0">
                <span className={`block w-2.5 h-2.5 rounded-full ${cfg.dot}`} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm font-semibold text-foreground truncate">{title}</h4>
                  <Badge variant="outline" className={`text-[9px] px-1.5 py-0 ${project.tagColor} flex-shrink-0`}>
                    {tag}
                  </Badge>
                </div>

                {/* Progress bar for non-todo */}
                {project.status !== "todo" && (
                  <div className="flex items-center gap-2 mb-1.5">
                    <Progress value={project.progress} className="h-1 flex-1" />
                    <span className="text-[10px] font-semibold text-muted-foreground w-8 text-end">
                      {project.progress}%
                    </span>
                  </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className={`flex items-center gap-1 text-[10px] ${isOverdue ? "text-destructive" : "text-muted-foreground"}`}>
                    {isOverdue ? <Clock className="w-3 h-3" /> : <Calendar className="w-3 h-3" />}
                    <span>{formattedDate}</span>
                  </div>
                  <div className="flex -space-x-1.5 rtl:space-x-reverse">
                    {project.members.slice(0, 3).map((avatar, j) => (
                      <img key={j} src={avatar} alt="" className="w-5 h-5 rounded-full border-2 border-card object-cover" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* View All */}
      <Button variant="outline" size="sm" className="w-full mt-4 text-xs gap-1.5" asChild>
        <Link to="/projects">
          {lang === "ar" ? "عرض جميع المشاريع" : "View All Projects"}
          <ArrowIcon className="w-3.5 h-3.5" />
        </Link>
      </Button>
    </motion.div>
  );
}
