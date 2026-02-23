import { Link } from "react-router-dom";
import { BadgeCheck, MapPin, BookOpen, Brain, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export interface TeacherData {
  id: number;
  name: string;
  title: string;
  location: string;
  subjects: string[];
  skills: string[];
  experience: number;
  impactScore: number;
  verified: boolean;
  avatar: string;
  certCount: number;
}

export default function TeacherCard({ teacher, index = 0 }: { teacher: TeacherData; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
    >
      <Link to={`/profile/${teacher.id}`} className="block">
        <div className="bg-card rounded-xl border card-elevated p-5 group cursor-pointer">
          <div className="flex items-start gap-4">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center overflow-hidden">
                <span className="text-2xl font-bold text-primary">{teacher.name[0]}</span>
              </div>
              {teacher.verified && (
                <div className="absolute -bottom-1 -left-1 w-5 h-5 rounded-full bg-badge-verified flex items-center justify-center">
                  <BadgeCheck className="w-3.5 h-3.5 text-primary-foreground" />
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-foreground truncate">{teacher.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{teacher.title}</p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {teacher.location}
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  {teacher.experience} سنوات خبرة
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {teacher.skills.slice(0, 3).map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs font-normal">
                    {skill}
                  </Badge>
                ))}
                {teacher.skills.length > 3 && (
                  <Badge variant="outline" className="text-xs font-normal">
                    +{teacher.skills.length - 3}
                  </Badge>
                )}
              </div>
            </div>

            {/* Impact Score */}
            <div className="shrink-0 flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl impact-gradient flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">{teacher.impactScore}</span>
              </div>
              <span className="text-[10px] text-muted-foreground mt-1">نقاط التأثير</span>
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex items-center justify-between mt-3 pt-3 border-t">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Brain className="w-3.5 h-3.5 text-primary" />
              <span>{teacher.certCount} شهادة</span>
            </div>
            <div className="flex items-center gap-1">
              {teacher.subjects.slice(0, 2).map((s) => (
                <span key={s} className="text-xs bg-primary/5 text-primary px-2 py-0.5 rounded-full">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
