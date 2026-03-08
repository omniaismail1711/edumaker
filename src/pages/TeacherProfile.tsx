import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  MapPin, BookOpen, BadgeCheck, Mail, Award, Brain, Clock,
  FileText, Video, Presentation, GraduationCap, Briefcase
} from "lucide-react";
import ImpactScore from "@/components/ImpactScore";
import { mockTeachers } from "@/data/mockData";
import profileCover from "@/assets/profile-cover.jpg";

const certificates = [
  { title: "شهادة Google للمعلمين - المستوى 2", issuer: "Google for Education", verified: true, date: "2025" },
  { title: "مدرب معتمد في الذكاء الاصطناعي", issuer: "أكاديمية المستقبل", verified: true, date: "2025" },
  { title: "التصميم التعليمي المتقدم", issuer: "Coursera", verified: true, date: "2024" },
  { title: "استخدام ChatGPT في التعليم", issuer: "صِنّاع التعليم", verified: false, date: "2024" },
];

const portfolio = [
  { title: "خطة درس: الكسور باستخدام الواقع المعزز", type: "خطة درس", icon: FileText },
  { title: "فيديو تعليمي: مقدمة في البرمجة", type: "فيديو", icon: Video },
  { title: "عرض تقديمي: الذكاء الاصطناعي للمبتدئين", type: "عرض", icon: Presentation },
];

export default function TeacherProfile() {
  const { id } = useParams();
  const teacher = mockTeachers.find((t) => t.id === Number(id)) || mockTeachers[0];

  return (
    <div className="min-h-screen">
      {/* Cover */}
      <div className="h-40 md:h-52 relative overflow-hidden">
        <img src={profileCover} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/30" />
      </div>

      <div className="container -mt-10 pb-12">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Card */}
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

            {/* Bio */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card rounded-xl border p-6">
              <h2 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                نبذة مهنية
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                معلم متخصص يتمتع بخبرة واسعة في دمج التكنولوجيا الحديثة والذكاء الاصطناعي في العملية التعليمية. شغوف بتطوير أساليب التدريس المبتكرة وتمكين الطلاب من مهارات المستقبل. حاصل على عدة شهادات دولية في تكنولوجيا التعليم وأدوات الذكاء الاصطناعي.
              </p>
            </motion.div>

            {/* Certificates */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card rounded-xl border p-6">
              <h2 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                الشهادات والدورات
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {certificates.map((cert, i) => (
                  <div key={i} className="border rounded-lg p-4 card-elevated">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${cert.verified ? "bg-primary/10" : "bg-secondary"}`}>
                        <Award className={`w-5 h-5 ${cert.verified ? "text-primary" : "text-muted-foreground"}`} />
                      </div>
                      <div>
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Portfolio */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-card rounded-xl border p-6">
              <h2 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                معرض الأعمال
              </h2>
              <div className="grid sm:grid-cols-3 gap-3">
                {portfolio.map((p, i) => (
                  <div key={i} className="border rounded-lg p-4 text-center card-elevated cursor-pointer">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mx-auto mb-3">
                      <p.icon className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">{p.title}</h4>
                    <Badge variant="outline" className="text-xs">{p.type}</Badge>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ImpactScore score={teacher.impactScore} training={22} projects={18} ai={23} reviews={teacher.impactScore - 63} />

            {/* Availability */}
            <div className="bg-card rounded-xl border p-5">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                حالة التوفر
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-foreground">متاح للتوظيف</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">آخر تحديث: منذ 3 أيام</p>
            </div>

            {/* AI Skills */}
            <div className="bg-card rounded-xl border p-5">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" />
                كفاءة الذكاء الاصطناعي
              </h3>
              <div className="space-y-2">
                {["ChatGPT", "Midjourney", "تحليل البيانات"].map((skill) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{skill}</span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <div key={s} className={`w-4 h-1.5 rounded-full ${s <= 4 ? "bg-primary" : "bg-secondary"}`} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
