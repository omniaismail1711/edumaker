import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import {
  Trophy, Star, Users, UserPlus, Presentation, BookOpen, Share2,
  Copy, Download, FileText, Link2, TrendingUp, Crown, Shield, Award,
  Zap, Target, ArrowLeft, ExternalLink, GraduationCap, School, MessageCircle
} from "lucide-react";
import avatar1 from "@/assets/avatars/avatar-1.jpg";
import avatar2 from "@/assets/avatars/avatar-2.jpg";
import avatar3 from "@/assets/avatars/avatar-3.jpg";
import avatar4 from "@/assets/avatars/avatar-4.jpg";
import avatar5 from "@/assets/avatars/avatar-5.jpg";

/* ───── mock data ───── */
const stats = { points: 285, rank: 3, teachersInvited: 12, studentsInvited: 18, workshops: 2, level: "سفير فضي" };
const nextLevel = { name: "سفير ذهبي", pointsNeeded: 500 };

const recentActivity = [
  { text: "دعوت معلم جديد: أ. محمد سعيد", points: 10, date: "منذ ساعتين" },
  { text: "دعوت طالبة: نورهان أحمد", points: 5, date: "منذ يوم" },
  { text: "نظمت ورشة: مقدمة في Teachers Workbook", points: 50, date: "منذ 3 أيام" },
  { text: "ساعدت معلمة على إكمال دورة التكنولوجيا", points: 15, date: "منذ أسبوع" },
  { text: "نشرت محتوى ترويجي على فيسبوك", points: 8, date: "منذ أسبوع" },
];

const leaderboard = [
  { name: "سارة عبد الله", avatar: avatar2, points: 520, teachers: 28, students: 45, rank: 1 },
  { name: "أحمد محمد", avatar: avatar3, points: 410, teachers: 22, students: 30, rank: 2 },
  { name: "يوسف أحمد إبراهيم", avatar: avatar1, points: 285, teachers: 12, students: 18, rank: 3 },
  { name: "فاطمة حسن", avatar: avatar4, points: 230, teachers: 10, students: 25, rank: 4 },
  { name: "خالد عمر", avatar: avatar5, points: 180, teachers: 8, students: 15, rank: 5 },
];

const resources = [
  { title: "عرض تقديمي: تعريف بمنصة Teachers Workbook", type: "PDF", icon: FileText },
  { title: "منشورات جاهزة للسوشيال ميديا", type: "ZIP", icon: Share2 },
  { title: "دليل تنظيم ورشة عمل", type: "PDF", icon: Presentation },
  { title: "فيديو تعليمي: كيفية استخدام المنصة", type: "MP4", icon: BookOpen },
];

const referralLink = "https://edumaker.lovable.app/ref/youssef-ahmed";

const fade = (d = 0) => ({ initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { delay: d } });

const rankColors: Record<number, string> = {
  1: "text-[hsl(var(--badge-gold))]",
  2: "text-muted-foreground",
  3: "text-accent",
};

/* ───── page ───── */
export default function AmbassadorDashboard() {
  const { toast } = useToast();
  const progressPct = Math.round((stats.points / nextLevel.pointsNeeded) * 100);

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast({ title: "تم نسخ رابط الدعوة!" });
  };

  return (
    <div className="min-h-screen bg-background pb-16">
      {/* ── Header Banner ── */}
      <div className="bg-gradient-to-l from-primary/15 via-primary/5 to-accent/10 py-8">
        <div className="container max-w-6xl">
          <motion.div {...fade()} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Shield className="w-6 h-6 text-primary" />
                <h1 className="text-2xl font-extrabold text-foreground">لوحة تحكم السفير</h1>
              </div>
              <p className="text-muted-foreground text-sm">مرحباً يوسف! تابع تأثيرك وإنجازاتك كسفير Teachers Workbook</p>
            </div>
            <Badge className="bg-primary/10 text-primary border-primary/20 text-sm px-4 py-1.5">
              <Star className="w-4 h-4 ml-1" />
              {stats.level}
            </Badge>
          </motion.div>
        </div>
      </div>

      <div className="container max-w-6xl py-8 space-y-6">
        {/* ── Stats Grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { label: "إجمالي النقاط", value: stats.points, icon: Zap, accent: true },
            { label: "الترتيب", value: `#${stats.rank}`, icon: Trophy },
            { label: "معلمون مدعوون", value: stats.teachersInvited, icon: School },
            { label: "طلاب مدعوون", value: stats.studentsInvited, icon: GraduationCap },
            { label: "ورش عمل", value: stats.workshops, icon: Presentation },
          ].map((s, i) => (
            <motion.div key={i} {...fade(i * 0.04)}>
              <Card className={`border ${s.accent ? "border-primary/30 bg-primary/5" : ""}`}>
                <CardContent className="p-4 text-center">
                  <s.icon className={`w-5 h-5 mx-auto mb-1 ${s.accent ? "text-primary" : "text-muted-foreground"}`} />
                  <p className="text-2xl font-extrabold text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* ── Level Progress ── */}
        <motion.div {...fade(0.15)}>
          <Card className="border">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  التقدم نحو {nextLevel.name}
                </span>
                <span className="text-sm text-muted-foreground">{stats.points} / {nextLevel.pointsNeeded} نقطة</span>
              </div>
              <Progress value={progressPct} className="h-3" />
              <p className="text-xs text-muted-foreground mt-2">تحتاج {nextLevel.pointsNeeded - stats.points} نقطة إضافية للوصول إلى المستوى التالي</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* ── Referral Link ── */}
        <motion.div {...fade(0.18)}>
          <Card className="border border-primary/20">
            <CardContent className="p-5">
              <h3 className="font-bold text-foreground flex items-center gap-2 mb-3">
                <Link2 className="w-5 h-5 text-primary" />رابط الدعوة الخاص بك
              </h3>
              <div className="flex gap-2">
                <div className="flex-1 bg-secondary/50 rounded-lg px-4 py-2.5 text-sm text-muted-foreground font-mono truncate border">
                  {referralLink}
                </div>
                <Button variant="outline" onClick={copyLink}><Copy className="w-4 h-4 ml-1" />نسخ</Button>
                <Button><Share2 className="w-4 h-4 ml-1" />مشاركة</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ── Tabs: Activity / Leaderboard / Resources ── */}
        <motion.div {...fade(0.2)}>
          <Tabs defaultValue="activity" dir="rtl">
            <TabsList className="w-full sm:w-auto">
              <TabsTrigger value="activity">النشاط الأخير</TabsTrigger>
              <TabsTrigger value="leaderboard">لوحة الشرف</TabsTrigger>
              <TabsTrigger value="resources">مواد ترويجية</TabsTrigger>
            </TabsList>

            {/* Activity */}
            <TabsContent value="activity">
              <Card className="border">
                <CardContent className="p-5 space-y-3">
                  {recentActivity.map((a, i) => (
                    <div key={i} className="flex items-center gap-3 bg-secondary/30 rounded-xl p-3 border border-border/50">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Zap className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">{a.text}</p>
                        <p className="text-xs text-muted-foreground">{a.date}</p>
                      </div>
                      <span className="text-sm font-bold text-primary shrink-0">+{a.points}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Leaderboard */}
            <TabsContent value="leaderboard">
              <Card className="border">
                <CardContent className="p-5 space-y-2">
                  {leaderboard.map((user, i) => (
                    <div key={i} className={`flex items-center gap-3 rounded-xl p-3 border ${user.rank === 3 ? "border-primary/30 bg-primary/5" : "border-border/50 bg-secondary/20"}`}>
                      <span className={`text-lg font-extrabold w-8 text-center ${rankColors[user.rank] || "text-muted-foreground"}`}>
                        {user.rank <= 3 ? <Trophy className="w-5 h-5 mx-auto" /> : `#${user.rank}`}
                      </span>
                      <Avatar className="w-9 h-9">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.teachers} معلم · {user.students} طالب</p>
                      </div>
                      <span className="text-sm font-bold text-primary">{user.points} نقطة</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Resources */}
            <TabsContent value="resources">
              <Card className="border">
                <CardContent className="p-5">
                  <div className="grid sm:grid-cols-2 gap-3">
                    {resources.map((r, i) => (
                      <div key={i} className="flex items-center gap-3 bg-secondary/30 rounded-xl p-4 border border-border/50">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <r.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-foreground">{r.title}</p>
                          <p className="text-xs text-muted-foreground">{r.type}</p>
                        </div>
                        <Button size="sm" variant="outline" className="h-8 text-xs shrink-0">
                          <Download className="w-3 h-3 ml-1" />تحميل
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
