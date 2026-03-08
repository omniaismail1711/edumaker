import { motion } from "framer-motion";
import { Award, BadgeCheck, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CourseItem {
  title: string;
  issuer: string;
  verified: boolean;
  date: string;
  link?: string;
}

interface CoursesCredentialsProps {
  courses: CourseItem[];
  linkedinUrl?: string;
}

export default function CoursesCredentials({ courses, linkedinUrl }: CoursesCredentialsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="bg-card rounded-xl border p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-foreground flex items-center gap-2">
          <Award className="w-5 h-5 text-primary" />
          الشهادات والدورات
        </h2>
        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-primary hover:underline"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            LinkedIn
          </a>
        )}
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {courses.map((cert, i) => (
          <div key={i} className="border rounded-lg p-4 card-elevated">
            <div className="flex items-start gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${cert.verified ? "bg-primary/10" : "bg-secondary"}`}>
                <Award className={`w-5 h-5 ${cert.verified ? "text-primary" : "text-muted-foreground"}`} />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-foreground">{cert.title}</h4>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-xs text-muted-foreground">{cert.date}</span>
                  {cert.verified && (
                    <Badge variant="outline" className="text-[10px] py-0 text-badge-verified border-badge-verified/30">
                      <BadgeCheck className="w-3 h-3 ml-0.5" />
                      معتمدة
                    </Badge>
                  )}
                </div>
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline mt-1 inline-flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" /> عرض الشهادة
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
