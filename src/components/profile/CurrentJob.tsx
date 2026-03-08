import { motion } from "framer-motion";
import { Briefcase, Building2, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CurrentJobProps {
  position: string;
  organization: string;
  location: string;
  type: string;
  description: string;
  since: string;
}

export default function CurrentJob({ position, organization, location, type, description, since }: CurrentJobProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 }}
      className="bg-card rounded-xl border p-6"
    >
      <h2 className="font-bold text-foreground mb-4 flex items-center gap-2">
        <Briefcase className="w-5 h-5 text-primary" />
        الوظيفة الحالية
      </h2>
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <Building2 className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground text-lg">{position}</h3>
          <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
            <Building2 className="w-3.5 h-3.5" /> {organization}
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1 mt-0.5">
            <MapPin className="w-3.5 h-3.5" /> {location}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="secondary">{type}</Badge>
            <span className="text-xs text-muted-foreground">منذ {since}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
