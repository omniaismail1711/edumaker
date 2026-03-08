import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, BookOpen, BadgeCheck, Mail, Award, Briefcase } from "lucide-react";
import type { TeacherData } from "@/components/TeacherCard";

interface ProfileHeaderProps {
  teacher: TeacherData;
}

export default function ProfileHeader({ teacher }: ProfileHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-xl border p-6"
    >
      <div className="flex flex-col sm:flex-row items-start gap-5">
        <div className="relative shrink-0">
          <div className="w-24 h-24 rounded-2xl bg-secondary flex items-center justify-center border-4 border-card overflow-hidden">
            {teacher.avatar ? (
              <img src={teacher.avatar} alt={teacher.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-4xl font-bold text-primary">{teacher.name[0]}</span>
            )}
          </div>
          {teacher.verified && (
            <div className="absolute -bottom-1 -left-1 w-7 h-7 rounded-full bg-badge-verified flex items-center justify-center">
              <BadgeCheck className="w-4 h-4 text-primary-foreground" />
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-bold text-foreground">{teacher.name}</h1>
            {teacher.verified && (
              <Badge className="bg-primary/10 text-primary border-0">
                <BadgeCheck className="w-3 h-3 ml-1" />
                موثق
              </Badge>
            )}
          </div>
          <p className="text-muted-foreground mb-3">{teacher.title}</p>
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{teacher.location}</span>
            <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" />{teacher.experience} سنوات خبرة</span>
            <span className="flex items-center gap-1"><Award className="w-4 h-4" />{teacher.certCount} شهادة</span>
          </div>
        </div>
        <div className="flex gap-2 shrink-0">
          <Button><Mail className="w-4 h-4 ml-2" />تواصل</Button>
          <Button variant="outline"><Briefcase className="w-4 h-4 ml-2" />دعوة للتقديم</Button>
        </div>
      </div>

      {/* Subjects */}
      <div className="mt-5 pt-5 border-t">
        <h3 className="text-sm font-semibold text-foreground mb-2">المواد الدراسية</h3>
        <div className="flex gap-2">
          {teacher.subjects.map((s) => (
            <span key={s} className="text-sm bg-primary/5 text-primary px-3 py-1 rounded-full">{s}</span>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mt-4">
        <h3 className="text-sm font-semibold text-foreground mb-2">المهارات</h3>
        <div className="flex flex-wrap gap-2">
          {teacher.skills.map((s) => (
            <Badge key={s} variant="secondary">{s}</Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
