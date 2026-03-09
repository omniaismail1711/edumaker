import { motion } from "framer-motion";
import { Upload, Download, Coins, TrendingUp, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface Props {
  lang: "ar" | "en";
}

export default function CreatorStats({ lang }: Props) {
  const isAr = lang === "ar";

  const stats = [
    { label: isAr ? "الموارد المرفوعة" : "Uploads", value: "12", icon: Upload, color: "text-primary" },
    { label: isAr ? "إجمالي التحميلات" : "Downloads", value: "1,847", icon: Download, color: "text-green-500" },
    { label: isAr ? "النقاط المكتسبة" : "Points Earned", value: "2,450", icon: Coins, color: "text-badge-gold" },
    { label: isAr ? "التقييم المتوسط" : "Avg Rating", value: "4.7", icon: TrendingUp, color: "text-accent" },
  ];

  const topResources = [
    { title: isAr ? "نماذج امتحانات رياضيات" : "Math Exam Models", downloads: 612 },
    { title: isAr ? "دليل التعلم باللعب" : "Play-Based Learning Guide", downloads: 521 },
    { title: isAr ? "نموذج امتحان Python" : "Python Exam Model", downloads: 489 },
  ];

  const currentPoints = 2450;
  const nextTierPoints = 3000;
  const progress = (currentPoints / nextTierPoints) * 100;

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-card rounded-xl border p-4 text-center"
          >
            <s.icon className={`w-5 h-5 ${s.color} mx-auto mb-2`} />
            <p className="text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Points Progress */}
      <div className="bg-card rounded-xl border p-5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-badge-gold" />
            <span className="font-bold text-foreground text-sm">
              {isAr ? "تقدمك نحو المستوى التالي" : "Progress to Next Tier"}
            </span>
          </div>
          <Badge className="bg-badge-gold/10 text-badge-gold border-badge-gold/20 text-xs">
            {isAr ? "أفضل مساهم" : "Top Contributor"}
          </Badge>
        </div>
        <Progress value={progress} className="h-2 mb-2" />
        <p className="text-xs text-muted-foreground">
          {currentPoints.toLocaleString()} / {nextTierPoints.toLocaleString()} {isAr ? "نقطة" : "points"}
        </p>
      </div>

      {/* Top Resources */}
      <div className="bg-card rounded-xl border p-5">
        <h3 className="font-bold text-foreground mb-3 text-sm flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-primary" />
          {isAr ? "أكثر مواردك تحميلاً" : "Your Top Resources"}
        </h3>
        <div className="space-y-2">
          {topResources.map((r, i) => (
            <div key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary/50">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-muted-foreground w-5">#{i + 1}</span>
                <span className="text-sm text-foreground">{r.title}</span>
              </div>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Download className="w-3 h-3" />
                {r.downloads}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
