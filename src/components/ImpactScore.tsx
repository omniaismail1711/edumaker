import { motion } from "framer-motion";
import { Trophy, TrendingUp, Brain, Award, Star } from "lucide-react";

interface ImpactScoreProps {
  score: number;
  training: number;
  projects: number;
  ai: number;
  reviews: number;
}

export default function ImpactScore({ score, training, projects, ai, reviews }: ImpactScoreProps) {
  const metrics = [
    { label: "التدريب", value: training, icon: Award, max: 25 },
    { label: "المشاريع", value: projects, icon: Star, max: 25 },
    { label: "الذكاء الاصطناعي", value: ai, icon: Brain, max: 25 },
    { label: "تقييم المدارس", value: reviews, icon: TrendingUp, max: 25 },
  ];

  return (
    <div className="bg-card rounded-xl border p-5">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-14 h-14 rounded-xl impact-gradient flex items-center justify-center">
          <span className="text-2xl font-bold text-primary-foreground">{score}</span>
        </div>
        <div>
          <h3 className="font-bold text-foreground flex items-center gap-1.5">
            <Trophy className="w-4 h-4 text-accent" />
            نقاط التأثير
          </h3>
          <p className="text-xs text-muted-foreground">Teacher Impact Score</p>
        </div>
      </div>

      <div className="space-y-3">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <m.icon className="w-3.5 h-3.5" />
                {m.label}
              </span>
              <span className="font-semibold text-foreground">{m.value}/{m.max}</span>
            </div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${(m.value / m.max) * 100}%` }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
