import { motion } from "framer-motion";
import { ShieldCheck, Crown, Sparkles, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface VerificationStatusProps {
  verified: boolean;
  premium: boolean;
}

const premiumBenefits = [
  "ظهور مميز في نتائج البحث",
  "شارة التوثيق الذهبية",
  "الوصول للدورات الحصرية",
  "أولوية في فرص التوظيف",
];

export default function VerificationStatus({ verified, premium }: VerificationStatusProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-card rounded-xl border p-5"
    >
      <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-primary" />
        حالة التوثيق
      </h3>

      {/* Verification */}
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${verified ? "bg-primary/10" : "bg-secondary"}`}>
          <ShieldCheck className={`w-5 h-5 ${verified ? "text-primary" : "text-muted-foreground"}`} />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">
            {verified ? "ملف موثق" : "غير موثق"}
          </p>
          <p className="text-xs text-muted-foreground">
            {verified ? "تم التحقق من الهوية والمؤهلات" : "لم يتم التحقق بعد"}
          </p>
        </div>
        {verified && (
          <Badge className="bg-primary/10 text-primary border-0 mr-auto text-[10px]">
            <CheckCircle2 className="w-3 h-3 ml-0.5" /> موثق
          </Badge>
        )}
      </div>

      {/* Premium */}
      <div className={`rounded-lg p-4 mt-3 ${premium ? "bg-badge-gold/10 border border-badge-gold/20" : "bg-secondary"}`}>
        <div className="flex items-center gap-2 mb-2">
          <Crown className={`w-4 h-4 ${premium ? "text-badge-gold" : "text-muted-foreground"}`} />
          <span className={`text-sm font-semibold ${premium ? "text-badge-gold" : "text-muted-foreground"}`}>
            {premium ? "عضوية مميزة" : "عضوية مجانية"}
          </span>
          {premium && (
            <Sparkles className="w-3.5 h-3.5 text-badge-gold" />
          )}
        </div>
        <ul className="space-y-1.5">
          {premiumBenefits.map((b, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className={`w-3 h-3 shrink-0 ${premium ? "text-badge-gold" : "text-muted-foreground/40"}`} />
              {b}
            </li>
          ))}
        </ul>
        {!premium && (
          <Button size="sm" className="mt-3 w-full">
            <Crown className="w-3.5 h-3.5 ml-1" /> ترقية للعضوية المميزة
          </Button>
        )}
      </div>
    </motion.div>
  );
}
