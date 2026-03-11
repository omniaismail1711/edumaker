import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle2, BookOpen, ClipboardCheck, FileText } from "lucide-react";

const requirements = [
  { icon: BookOpen, text: "إكمال الوحدات التدريبية" },
  { icon: ClipboardCheck, text: "إنجاز المهام العملية" },
  { icon: FileText, text: "اجتياز الاختبارات التدريبية" },
];

export default function CertificateSection() {
  return (
    <section className="bg-secondary/50 py-16 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border bg-card overflow-hidden"
        >
          <div className="p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10">
            {/* Content */}
            <div className="flex-1 text-center lg:text-right">
              <Badge className="mb-4 bg-badge-gold/10 text-badge-gold border-badge-gold/20">
                <Award className="w-3.5 h-3.5 ml-1" />
                شهادة معتمدة
              </Badge>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3 leading-relaxed">
                شهادة المعلم المستقبلي
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl">
                بعد إتمام جميع متطلبات البرنامج، يحصل الطالب على شهادة معتمدة تظهر في ملفه الشخصي ومعرض أعماله.
              </p>

              <h4 className="font-bold text-foreground mb-3">متطلبات الحصول على الشهادة:</h4>
              <div className="space-y-2 mb-6">
                {requirements.map((r, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <r.icon className="w-4 h-4 text-badge-gold shrink-0" />
                    <span className="text-muted-foreground">{r.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificate Preview */}
            <div className="shrink-0">
              <div className="w-72 bg-gradient-to-br from-badge-gold/5 to-primary/5 rounded-2xl border-2 border-dashed border-badge-gold/30 p-8 text-center relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-badge-gold text-primary-foreground border-0 shadow-md text-xs font-bold px-4">
                    <Award className="w-3 h-3 ml-1" /> CERTIFICATE
                  </Badge>
                </div>
                <div className="w-20 h-20 rounded-full bg-badge-gold/10 flex items-center justify-center mx-auto mt-4 mb-4">
                  <Award className="w-10 h-10 text-badge-gold" />
                </div>
                <p className="text-lg font-extrabold text-foreground mb-1">شهادة المعلم المستقبلي</p>
                <p className="text-xs text-muted-foreground mb-4">Future Teacher Certificate</p>
                <div className="h-px bg-border mb-4" />
                <div className="space-y-1.5">
                  {["تظهر في الملف الشخصي", "تظهر في معرض الأعمال", "قابلة للمشاركة"].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-xs text-muted-foreground justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-badge-gold shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
