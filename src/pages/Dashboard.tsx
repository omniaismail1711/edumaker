import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import {
  User, Award, BookOpen, Briefcase, Brain, TrendingUp,
  ChevronLeft, Plus, Bell, Settings, FileText, Star, Library, FolderKanban
} from "lucide-react";
import ImpactScore from "@/components/ImpactScore";
import { mockTeachers } from "@/data/mockData";

const teacher = mockTeachers[0];

const recentActivity = [
  { text: "تم التحقق من شهادة Google للمعلمين", time: "منذ ساعتين", icon: Award },
  { text: "مدارس المعرفة شاهدت ملفك الشخصي", time: "منذ 5 ساعات", icon: Briefcase },
  { text: "اقتراح: أكمل دورة الذكاء الاصطناعي التوليدي", time: "منذ يوم", icon: Brain },
  { text: "تم تحديث نقاط التأثير: +3 نقاط", time: "منذ يومين", icon: TrendingUp },
];

const suggestedSkills = ["التعلم الآلي", "تحليل بيانات التعليم", "Prompt Engineering", "الواقع المعزز في التعليم"];

export default function Dashboard() {
  const profileCompletion = 78;

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-1">مرحباً، {teacher.name.split(" ")[0]} 👋</h1>
            <p className="text-muted-foreground">لوحة تحكم المعلم</p>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile completion */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-xl border p-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-bold text-foreground flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  اكتمال الملف الشخصي
                </h2>
                <span className="text-sm font-semibold text-primary">{profileCompletion}%</span>
              </div>
              <Progress value={profileCompletion} className="h-2 mb-3" />
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs cursor-pointer hover:bg-secondary">
                  <Plus className="w-3 h-3 ml-1" />
                  إضافة صورة شخصية
                </Badge>
                <Badge variant="outline" className="text-xs cursor-pointer hover:bg-secondary">
                  <Plus className="w-3 h-3 ml-1" />
                  إضافة معرض أعمال
                </Badge>
                <Badge variant="outline" className="text-xs cursor-pointer hover:bg-secondary">
                  <Plus className="w-3 h-3 ml-1" />
                  رفع شهادة جديدة
                </Badge>
              </div>
            </motion.div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "الشهادات", value: teacher.certCount, icon: Award, color: "text-primary" },
                { label: "مشاهدات الملف", value: "234", icon: User, color: "text-accent" },
                { label: "طلبات التوظيف", value: "3", icon: Briefcase, color: "text-primary" },
                { label: "الدورات", value: "12", icon: BookOpen, color: "text-accent" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="bg-card rounded-xl border p-4 text-center"
                >
                  <stat.icon className={`w-5 h-5 ${stat.color} mx-auto mb-2`} />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Recent Activity */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card rounded-xl border p-6">
              <h2 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                النشاط الأخير
              </h2>
              <div className="space-y-3">
                {recentActivity.map((a, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <a.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{a.text}</p>
                      <p className="text-xs text-muted-foreground">{a.time}</p>
                    </div>
                    <ChevronLeft className="w-4 h-4 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Suggested Skills */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-card rounded-xl border p-6">
              <h2 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <Star className="w-5 h-5 text-accent" />
                مهارات مقترحة لتطويرك
              </h2>
              <p className="text-sm text-muted-foreground mb-4">بناءً على ملفك الشخصي ومتطلبات السوق</p>
              <div className="flex flex-wrap gap-2">
                {suggestedSkills.map((s) => (
                  <Badge key={s} variant="outline" className="cursor-pointer hover:bg-primary/5 hover:text-primary transition-colors">
                    <Plus className="w-3 h-3 ml-1" />
                    {s}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ImpactScore score={teacher.impactScore} training={22} projects={18} ai={23} reviews={teacher.impactScore - 63} />

            {/* Quick actions */}
            <div className="bg-card rounded-xl border p-5">
              <h3 className="font-bold text-foreground mb-3">إجراءات سريعة</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <FileText className="w-4 h-4 ml-2" />
                  رفع شهادة جديدة
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <BookOpen className="w-4 h-4 ml-2" />
                  إضافة دورة تدريبية
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Brain className="w-4 h-4 ml-2" />
                  تحديث مهارات AI
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Briefcase className="w-4 h-4 ml-2" />
                  تصفح الوظائف
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
