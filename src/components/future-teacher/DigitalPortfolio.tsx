import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  FolderOpen, FileText, Award, MessageCircle, BadgeCheck, ClipboardList, Building2, Search
} from "lucide-react";

const portfolioItems = [
  { icon: FileText, text: "خطط الدروس المُعدة" },
  { icon: ClipboardList, text: "أوراق العمل والمواد التعليمية" },
  { icon: Award, text: "الشهادات المكتسبة" },
  { icon: MessageCircle, text: "ملاحظات وتقييمات المرشدين" },
  { icon: BadgeCheck, text: "الشارات والمؤهلات المصغرة" },
];

export default function DigitalPortfolio() {
  return (
    <section className="container py-16 md:py-20">
      <div className="text-center mb-10">
        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
          <FolderOpen className="w-3.5 h-3.5 ml-1" />
          ملف مهني رقمي
        </Badge>
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3 leading-relaxed">
          معرض أعمال رقمي لكل طالب
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          ملف إنجاز مهني يُبنى تلقائيًا أثناء رحلة التدريب ويعمل كسيرة ذاتية رقمية للمعلمين
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Portfolio contents */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border bg-card p-6 md:p-8"
        >
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <FolderOpen className="w-5 h-5 text-primary" />
            محتويات الملف المهني
          </h3>
          <div className="space-y-3">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-3 bg-secondary/40 rounded-xl p-4 border border-border/50"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* School hiring integration */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border bg-card p-6 md:p-8 flex flex-col"
        >
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-primary" />
            التكامل مع التوظيف المدرسي
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            يمكن للمدارس والمؤسسات التعليمية استعراض ملفات الطلاب والبحث عن معلمين مستقبليين مؤهلين.
          </p>

          {/* Mock filter UI */}
          <div className="rounded-xl bg-secondary/40 border border-border/50 p-5 flex-1">
            <div className="flex items-center gap-2 mb-4">
              <Search className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-semibold text-foreground">تصفية المرشحين</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 bg-card rounded-lg p-3 border">
                <BadgeCheck className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">أكمل برنامج المعلم المستقبلي</span>
                <span className="mr-auto bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full">
                  فلتر
                </span>
              </div>
              <div className="flex items-center gap-2 bg-card rounded-lg p-3 border">
                <Award className="w-4 h-4 text-badge-gold" />
                <span className="text-sm text-foreground">حاصل على شهادة المعلم المستقبلي</span>
                <span className="mr-auto bg-badge-gold/10 text-badge-gold text-xs font-bold px-2 py-0.5 rounded-full">
                  فلتر
                </span>
              </div>
              <div className="flex items-center gap-2 bg-card rounded-lg p-3 border">
                <FolderOpen className="w-4 h-4 text-accent" />
                <span className="text-sm text-foreground">لديه معرض أعمال مكتمل</span>
                <span className="mr-auto bg-accent/10 text-accent text-xs font-bold px-2 py-0.5 rounded-full">
                  فلتر
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
