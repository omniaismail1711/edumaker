import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Building2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export interface JobData {
  id: number;
  title: string;
  school: string;
  location: string;
  type: string;
  subjects: string[];
  skills: string[];
  postedDays: number;
  urgent: boolean;
}

export default function JobCard({ job, index = 0 }: { job: JobData; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="bg-card rounded-xl border card-elevated p-5"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-foreground">{job.title}</h3>
            {job.urgent && (
              <Badge className="bg-accent text-accent-foreground text-[10px]">
                <Sparkles className="w-3 h-3 ml-1" />
                عاجل
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Building2 className="w-4 h-4" />
            <span>{job.school}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
        <span className="flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5" />
          {job.location}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          منذ {job.postedDays} يوم
        </span>
        <Badge variant="outline" className="text-xs">{job.type}</Badge>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {job.subjects.map((s) => (
          <span key={s} className="text-xs bg-primary/5 text-primary px-2.5 py-1 rounded-full">{s}</span>
        ))}
        {job.skills.map((s) => (
          <Badge key={s} variant="secondary" className="text-xs font-normal">{s}</Badge>
        ))}
      </div>

      <Button size="sm" className="w-full">تقدم للوظيفة</Button>
    </motion.div>
  );
}
