import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Trophy,
  Medal,
  Crown,
  MapPin,
  Sparkles,
  TrendingUp,
  ArrowUp,
  Star,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import avatar1 from "@/assets/avatars/avatar-1.jpg";
import avatar2 from "@/assets/avatars/avatar-2.jpg";
import avatar3 from "@/assets/avatars/avatar-3.jpg";
import avatar4 from "@/assets/avatars/avatar-4.jpg";
import avatar5 from "@/assets/avatars/avatar-5.jpg";
import avatar6 from "@/assets/avatars/avatar-6.jpg";

interface LeaderEntry {
  id: number;
  name: { ar: string; en: string };
  school: { ar: string; en: string };
  location: { ar: string; en: string };
  avatar: string;
  points: number;
  monthlyPoints: number;
  change: number; // rank change from last period
}

const leaderboardData: LeaderEntry[] = [
  { id: 4, name: { ar: "نورة سعد القحطاني", en: "Noura Al-Qahtani" }, school: { ar: "أكاديمية المستقبل", en: "Future Academy" }, location: { ar: "الكويت", en: "Kuwait" }, avatar: avatar4, points: 2850, monthlyPoints: 420, change: 2 },
  { id: 1, name: { ar: "أحمد محمد السيد", en: "Ahmed Al-Sayed" }, school: { ar: "مدارس المعرفة الأهلية", en: "Knowledge Schools" }, location: { ar: "الرياض", en: "Riyadh" }, avatar: avatar1, points: 2720, monthlyPoints: 380, change: 0 },
  { id: 2, name: { ar: "فاطمة أحمد العلي", en: "Fatima Al-Ali" }, school: { ar: "مدرسة الإبداع الدولية", en: "Innovation School" }, location: { ar: "دبي", en: "Dubai" }, avatar: avatar2, points: 2680, monthlyPoints: 410, change: 1 },
  { id: 5, name: { ar: "عبدالله يوسف المنصور", en: "Abdullah Al-Mansour" }, school: { ar: "مدرسة النهضة", en: "Nahda School" }, location: { ar: "عمّان", en: "Amman" }, avatar: avatar5, points: 2450, monthlyPoints: 290, change: -1 },
  { id: 3, name: { ar: "محمد خالد الحربي", en: "Mohammed Al-Harbi" }, school: { ar: "مدارس النور العالمية", en: "Al-Nour Schools" }, location: { ar: "جدة", en: "Jeddah" }, avatar: avatar3, points: 2310, monthlyPoints: 350, change: 3 },
  { id: 6, name: { ar: "ريم عادل البكري", en: "Reem Al-Bakri" }, school: { ar: "روضة الأزهار", en: "Al-Azhar KG" }, location: { ar: "القاهرة", en: "Cairo" }, avatar: avatar6, points: 2180, monthlyPoints: 260, change: 0 },
  { id: 7, name: { ar: "سارة الخالدي", en: "Sara Al-Khalidi" }, school: { ar: "مدارس الريادة", en: "Riyada Schools" }, location: { ar: "الرياض", en: "Riyadh" }, avatar: avatar1, points: 2050, monthlyPoints: 310, change: 2 },
  { id: 8, name: { ar: "خالد العتيبي", en: "Khaled Al-Otaibi" }, school: { ar: "مدرسة المعالي", en: "Al-Ma'ali School" }, location: { ar: "جدة", en: "Jeddah" }, avatar: avatar3, points: 1920, monthlyPoints: 240, change: -2 },
  { id: 9, name: { ar: "منى الشمري", en: "Mona Al-Shammari" }, school: { ar: "أكاديمية التميز", en: "Excellence Academy" }, location: { ar: "الكويت", en: "Kuwait" }, avatar: avatar2, points: 1850, monthlyPoints: 280, change: 1 },
  { id: 10, name: { ar: "يوسف الدوسري", en: "Yousef Al-Dosari" }, school: { ar: "مدارس الفيصل", en: "Faisal Schools" }, location: { ar: "الرياض", en: "Riyadh" }, avatar: avatar5, points: 1780, monthlyPoints: 220, change: 0 },
];

const myRank: LeaderEntry & { rank: number; nextTierPoints: number } = {
  id: 99,
  name: { ar: "أنت", en: "You" },
  school: { ar: "مدرستك", en: "Your School" },
  location: { ar: "الرياض", en: "Riyadh" },
  avatar: avatar1,
  points: 1240,
  monthlyPoints: 180,
  change: 4,
  rank: 24,
  nextTierPoints: 1500,
};

const podiumColors = [
  { bg: "from-[hsl(38,80%,55%)] to-[hsl(38,70%,45%)]", ring: "ring-[hsl(38,80%,55%)]", badge: "bg-[hsl(38,80%,55%)]", label: "🥇" },
  { bg: "from-[hsl(210,15%,65%)] to-[hsl(210,15%,55%)]", ring: "ring-[hsl(210,15%,65%)]", badge: "bg-[hsl(210,15%,65%)]", label: "🥈" },
  { bg: "from-[hsl(25,60%,50%)] to-[hsl(25,50%,40%)]", ring: "ring-[hsl(25,60%,50%)]", badge: "bg-[hsl(25,60%,50%)]", label: "🥉" },
];

export default function Leaderboard() {
  const { lang } = useLanguage();
  const [period, setPeriod] = useState<"month" | "all">("all");
  const [region, setRegion] = useState("all");

  const sorted = [...leaderboardData].sort((a, b) =>
    period === "month" ? b.monthlyPoints - a.monthlyPoints : b.points - a.points
  );

  const getPoints = (entry: LeaderEntry) => period === "month" ? entry.monthlyPoints : entry.points;

  const top3 = sorted.slice(0, 3);
  const rest = sorted.slice(3, 10);

  // Podium order: 2nd, 1st, 3rd
  const podiumOrder = [top3[1], top3[0], top3[2]];
  const podiumHeights = ["h-28", "h-36", "h-24"];
  const podiumRanks = [2, 1, 3];

  const progressToNext = Math.round((myRank.points / myRank.nextTierPoints) * 100);

  const regions = lang === "ar"
    ? [{ v: "all", l: "جميع المناطق" }, { v: "sa", l: "السعودية" }, { v: "eg", l: "مصر" }, { v: "ae", l: "الإمارات" }, { v: "kw", l: "الكويت" }, { v: "jo", l: "الأردن" }]
    : [{ v: "all", l: "All Regions" }, { v: "sa", l: "Saudi Arabia" }, { v: "eg", l: "Egypt" }, { v: "ae", l: "UAE" }, { v: "kw", l: "Kuwait" }, { v: "jo", l: "Jordan" }];

  return (
    <div className="space-y-6 pb-24">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Trophy className="w-6 h-6 text-[hsl(38,80%,55%)]" />
          <h2 className="text-2xl font-bold text-foreground leading-[1.8]">
            {lang === "ar" ? "لوحة الشرف" : "Leaderboard"}
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">
          {lang === "ar" ? "أبرز المعلمين بناءً على نقاط التأثير والإنجازات" : "Top teachers based on Impact Points and achievements"}
        </p>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <div className="flex bg-secondary rounded-xl p-1">
          <button
            onClick={() => setPeriod("month")}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              period === "month" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {lang === "ar" ? "هذا الشهر" : "This Month"}
          </button>
          <button
            onClick={() => setPeriod("all")}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              period === "all" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {lang === "ar" ? "كل الأوقات" : "All Time"}
          </button>
        </div>
        <Select value={region} onValueChange={setRegion}>
          <SelectTrigger className="w-40 h-9 text-xs rounded-xl">
            <MapPin className="w-3.5 h-3.5 text-muted-foreground me-1" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {regions.map(r => <SelectItem key={r.v} value={r.v}>{r.l}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>

      {/* Podium */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-end justify-center gap-3 md:gap-6 pt-8 pb-4"
      >
        {podiumOrder.map((entry, i) => {
          if (!entry) return null;
          const rank = podiumRanks[i];
          const colorIdx = rank - 1;
          const colors = podiumColors[colorIdx];
          const name = lang === "ar" ? entry.name.ar : entry.name.en;
          const pts = getPoints(entry);
          const isFirst = rank === 1;

          return (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.1 }}
              className="flex flex-col items-center"
            >
              {/* Avatar */}
              <div className="relative mb-2">
                {isFirst && (
                  <Crown className="absolute -top-5 left-1/2 -translate-x-1/2 w-6 h-6 text-[hsl(38,80%,55%)] drop-shadow-md" />
                )}
                <Link to={`/profile/${entry.id}`}>
                  <img
                    src={entry.avatar}
                    alt={name}
                    className={`rounded-full object-cover border-4 border-card ring-2 ${colors.ring} ${isFirst ? "w-20 h-20" : "w-16 h-16"} shadow-lg hover:scale-105 transition-transform`}
                  />
                </Link>
                <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 ${colors.badge} text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-md`}>
                  {rank}
                </div>
              </div>

              {/* Name */}
              <Link to={`/profile/${entry.id}`} className="hover:text-primary transition-colors">
                <p className={`font-bold text-foreground text-center ${isFirst ? "text-sm" : "text-xs"} mt-2 max-w-[100px] truncate`}>
                  {name}
                </p>
              </Link>

              {/* Points */}
              <div className="flex items-center gap-1 mt-1">
                <Sparkles className="w-3 h-3 text-[hsl(38,80%,55%)]" />
                <span className={`font-bold ${isFirst ? "text-base" : "text-sm"} text-foreground`}>
                  {pts.toLocaleString()}
                </span>
              </div>

              {/* Podium block */}
              <div className={`${podiumHeights[i]} w-20 md:w-28 bg-gradient-to-t ${colors.bg} rounded-t-xl mt-3 flex items-end justify-center pb-2`}>
                <span className="text-2xl">{colors.label}</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* List: Ranks 4-10 */}
      <div className="bg-card border rounded-xl overflow-hidden">
        {rest.map((entry, i) => {
          const rank = i + 4;
          const name = lang === "ar" ? entry.name.ar : entry.name.en;
          const school = lang === "ar" ? entry.school.ar : entry.school.en;
          const pts = getPoints(entry);

          return (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.04 }}
              className="flex items-center gap-3 md:gap-4 p-4 hover:bg-secondary/50 transition-colors border-b last:border-b-0"
            >
              {/* Rank */}
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-foreground">{rank}</span>
              </div>

              {/* Avatar */}
              <Link to={`/profile/${entry.id}`}>
                <img src={entry.avatar} alt={name} className="w-10 h-10 rounded-full object-cover hover:scale-105 transition-transform" />
              </Link>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <Link to={`/profile/${entry.id}`} className="hover:text-primary transition-colors">
                  <p className="text-sm font-semibold text-foreground truncate">{name}</p>
                </Link>
                <p className="text-xs text-muted-foreground truncate">{school}</p>
              </div>

              {/* Change */}
              {entry.change !== 0 && (
                <div className={`flex items-center gap-0.5 text-[10px] font-semibold ${entry.change > 0 ? "text-[hsl(160,50%,45%)]" : "text-destructive"}`}>
                  <ArrowUp className={`w-3 h-3 ${entry.change < 0 ? "rotate-180" : ""}`} />
                  {Math.abs(entry.change)}
                </div>
              )}

              {/* Points */}
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <Star className="w-3.5 h-3.5 fill-[hsl(38,80%,55%)] text-[hsl(38,80%,55%)]" />
                <span className="text-sm font-bold text-foreground">{pts.toLocaleString()}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Personal Rank - Sticky Bottom */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-card/95 backdrop-blur-sm border-t shadow-lg">
        <div className="container max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            {/* Rank badge */}
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold text-primary">#{myRank.rank}</span>
            </div>

            {/* Avatar */}
            <img src={myRank.avatar} alt="" className="w-9 h-9 rounded-full object-cover" />

            {/* Info + Progress */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-semibold text-foreground">
                  {lang === "ar" ? "ترتيبك الحالي" : "Your Current Rank"}
                </p>
                <div className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[hsl(38,80%,55%)]" />
                  <span className="text-sm font-bold text-foreground">{myRank.points.toLocaleString()}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Progress value={progressToNext} className="h-1.5 flex-1" />
                <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                  {myRank.nextTierPoints - myRank.points} {lang === "ar" ? "نقطة للمستوى التالي" : "pts to next tier"}
                </span>
              </div>
            </div>

            {/* Change */}
            {myRank.change > 0 && (
              <Badge className="bg-[hsl(160,50%,45%)]/10 text-[hsl(160,50%,40%)] border-[hsl(160,50%,45%)]/20 text-[10px] gap-0.5">
                <TrendingUp className="w-3 h-3" />
                +{myRank.change}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
