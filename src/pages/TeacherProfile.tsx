import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Clock, Brain } from "lucide-react";
import ImpactScore from "@/components/ImpactScore";
import ProfileHeader from "@/components/profile/ProfileHeader";
import CurrentJob from "@/components/profile/CurrentJob";
import CoursesCredentials from "@/components/profile/CoursesCredentials";
import GalleryProjects from "@/components/profile/GalleryProjects";
import VerificationStatus from "@/components/profile/VerificationStatus";
import { mockTeachers } from "@/data/mockData";
import profileCover from "@/assets/profile-cover.jpg";
import galleryRobotics from "@/assets/gallery/robotics-workshop.jpg";
import galleryAiTraining from "@/assets/gallery/ai-training.jpg";
import galleryStem from "@/assets/gallery/stem-project.jpg";
import gallerySeminar from "@/assets/gallery/digital-seminar.jpg";
import galleryExhibition from "@/assets/gallery/student-exhibition.jpg";
import galleryClassroom from "@/assets/gallery/google-classroom.jpg";

const certificates = [
  { title: "شهادة Google للمعلمين - المستوى 2", issuer: "Google for Education", verified: true, date: "2025", link: "#" },
  { title: "مدرب معتمد في الذكاء الاصطناعي", issuer: "أكاديمية المستقبل", verified: true, date: "2025" },
  { title: "التصميم التعليمي المتقدم", issuer: "Coursera", verified: true, date: "2024", link: "#" },
  { title: "استخدام ChatGPT في التعليم", issuer: "صِنّاع التعليم", verified: false, date: "2024" },
  { title: "Microsoft Innovative Educator", issuer: "Microsoft Education", verified: true, date: "2024", link: "#" },
  { title: "إدارة الصفوف الافتراضية", issuer: "Udemy", verified: false, date: "2023" },
];

const galleryItems = [
  {
    title: "ورشة الروبوتات التعليمية",
    caption: "ورشة عمل تطبيقية للطلاب حول بناء وبرمجة الروبوتات التعليمية باستخدام Arduino",
    type: "image" as const,
    url: galleryRobotics,
    tag: "ورشة",
  },
  {
    title: "تدريب المعلمين على AI",
    caption: "جلسة تدريبية حضورية للزملاء المعلمين حول استخدام أدوات الذكاء الاصطناعي في التحضير",
    type: "image" as const,
    url: galleryAiTraining,
    tag: "تدريب",
  },
  {
    title: "مشروع STEM للطلاب",
    caption: "مشروع تخرّج طلاب الصف العاشر في مسابقة العلوم والتكنولوجيا الوطنية",
    type: "image" as const,
    url: galleryStem,
    tag: "مشروع",
  },
  {
    title: "ندوة التعليم الرقمي",
    caption: "محاضرة عن بعد حول التحول الرقمي في التعليم ضمن مؤتمر إقليمي",
    type: "image" as const,
    url: gallerySeminar,
    tag: "ندوة",
  },
  {
    title: "معرض المشاريع الطلابية",
    caption: "عرض مشاريع الطلاب في يوم المدرسة المفتوح أمام أولياء الأمور",
    type: "image" as const,
    url: galleryExhibition,
    tag: "معرض",
  },
  {
    title: "تدريب Google Classroom",
    caption: "تدريب أونلاين للمعلمين الجدد على إدارة الفصول عبر Google Classroom",
    type: "image" as const,
    url: galleryClassroom,
    tag: "تدريب",
  },
];

export default function TeacherProfile() {
  const { id } = useParams();
  const teacher = mockTeachers.find((t) => t.id === Number(id)) || mockTeachers[0];

  return (
    <div className="min-h-screen">
      {/* Cover */}
      <div className="h-16 md:h-20 relative overflow-hidden">
        <img src={profileCover} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/30" />
      </div>

      <div className="container mt-4 pb-12">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-6">
            <ProfileHeader teacher={teacher} />

            <CurrentJob
              position={teacher.title}
              organization="مدارس المعرفة الأهلية"
              location={teacher.location}
              type="دوام كامل"
              since="2021"
              description="مسؤول عن تدريس المنهج وتطوير المحتوى التعليمي الرقمي، وتدريب الزملاء على دمج أدوات الذكاء الاصطناعي في العملية التعليمية. يقود فريق التحول الرقمي في المدرسة."
            />

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

            <CoursesCredentials
              courses={certificates}
              linkedinUrl="https://linkedin.com/in/example"
            />

            <GalleryProjects items={galleryItems} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ImpactScore score={teacher.impactScore} training={22} projects={18} ai={23} reviews={teacher.impactScore - 63} />

            <VerificationStatus verified={teacher.verified} premium={teacher.verified} unionMember={teacher.unionMember} />

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
