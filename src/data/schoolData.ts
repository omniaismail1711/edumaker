import avatar1 from "@/assets/avatars/avatar-1.jpg";
import avatar2 from "@/assets/avatars/avatar-2.jpg";
import avatar3 from "@/assets/avatars/avatar-3.jpg";
import avatar4 from "@/assets/avatars/avatar-4.jpg";
import avatar5 from "@/assets/avatars/avatar-5.jpg";
import avatar6 from "@/assets/avatars/avatar-6.jpg";

export interface SchoolProfile {
  id: string;
  name: { ar: string; en: string };
  type: { ar: string; en: string };
  description: { ar: string; en: string };
  levels: string[];
  subjects: string[];
  studentCount: number;
  teacherCount: number;
  classroomCount: number;
  location: {
    country: { ar: string; en: string };
    governorate: { ar: string; en: string };
    city: { ar: string; en: string };
    address: { ar: string; en: string };
  };
  contact: {
    email: string;
    phone: string;
    website: string;
  };
  representative: {
    name: { ar: string; en: string };
    title: { ar: string; en: string };
    email: string;
    phone: string;
  };
  digitalTools: string[];
  verified: boolean;
  logo?: string;
  cover?: string;
  gallery: string[];
}

export interface JobPost {
  id: string;
  schoolId: string;
  schoolName: { ar: string; en: string };
  title: { ar: string; en: string };
  subject: { ar: string; en: string };
  gradeLevel: { ar: string; en: string };
  type: { ar: string; en: string };
  experienceRequired: number;
  skills: string[];
  salaryRange?: { ar: string; en: string };
  deadline: string;
  applicants: number;
  createdAt: string;
}

export interface TeacherApplication {
  id: string;
  jobId: string;
  teacherName: { ar: string; en: string };
  subject: { ar: string; en: string };
  experience: number;
  courses: number;
  rating: number;
  avatar: string;
  status: "pending" | "reviewed" | "accepted" | "rejected";
  appliedAt: string;
  intro: { ar: string; en: string };
}

export const schoolTypes = [
  { ar: "مدرسة خاصة", en: "Private School" },
  { ar: "مدرسة دولية", en: "International School" },
  { ar: "مدرسة لغات", en: "Language School" },
  { ar: "مدرسة حكومية", en: "National School" },
  { ar: "مركز تدريب", en: "Training Center" },
];

export const educationalLevels = [
  { ar: "رياض الأطفال", en: "Kindergarten" },
  { ar: "المرحلة الابتدائية", en: "Primary" },
  { ar: "المرحلة الإعدادية", en: "Preparatory" },
  { ar: "المرحلة الثانوية", en: "Secondary" },
];

export const subjectsList = [
  { ar: "الرياضيات", en: "Mathematics" },
  { ar: "اللغة العربية", en: "Arabic" },
  { ar: "اللغة الإنجليزية", en: "English" },
  { ar: "العلوم", en: "Science" },
  { ar: "الفيزياء", en: "Physics" },
  { ar: "الكيمياء", en: "Chemistry" },
  { ar: "الأحياء", en: "Biology" },
  { ar: "الدراسات الاجتماعية", en: "Social Studies" },
  { ar: "الحاسب الآلي", en: "Computer Science" },
  { ar: "التربية الفنية", en: "Art Education" },
  { ar: "التربية البدنية", en: "Physical Education" },
  { ar: "التربية الإسلامية", en: "Islamic Studies" },
];

export const employmentTypes = [
  { ar: "دوام كامل", en: "Full-time" },
  { ar: "دوام جزئي", en: "Part-time" },
  { ar: "مؤقت", en: "Temporary" },
];

export const mockSchool: SchoolProfile = {
  id: "school-1",
  name: { ar: "مدارس المعرفة الدولية", en: "Knowledge International Schools" },
  type: { ar: "مدرسة دولية", en: "International School" },
  description: {
    ar: "مدارس المعرفة الدولية هي مؤسسة تعليمية رائدة تأسست عام 2005، تقدم تعليماً عالي الجودة يجمع بين المناهج الدولية والقيم العربية الأصيلة. نؤمن بأن كل طالب يمتلك إمكانات فريدة تستحق أن تُكتشف وتُنمى.",
    en: "Knowledge International Schools is a leading educational institution founded in 2005, offering high-quality education that combines international curricula with authentic Arab values.",
  },
  levels: ["رياض الأطفال", "المرحلة الابتدائية", "المرحلة الإعدادية", "المرحلة الثانوية"],
  subjects: ["الرياضيات", "اللغة العربية", "اللغة الإنجليزية", "العلوم", "الحاسب الآلي", "التربية الفنية"],
  studentCount: 1200,
  teacherCount: 85,
  classroomCount: 45,
  location: {
    country: { ar: "مصر", en: "Egypt" },
    governorate: { ar: "القاهرة", en: "Cairo" },
    city: { ar: "التجمع الخامس", en: "New Cairo" },
    address: { ar: "شارع التسعين، التجمع الخامس", en: "90th Street, New Cairo" },
  },
  contact: {
    email: "info@knowledge-schools.edu",
    phone: "+20 2 1234 5678",
    website: "https://knowledge-schools.edu",
  },
  representative: {
    name: { ar: "د. سارة أحمد", en: "Dr. Sara Ahmed" },
    title: { ar: "مديرة التوظيف", en: "HR Director" },
    email: "sara@knowledge-schools.edu",
    phone: "+20 10 1234 5678",
  },
  digitalTools: ["Google Classroom", "Smart Boards", "LMS", "iPad Program", "Coding Labs"],
  verified: true,
  gallery: [],
};

export const mockJobPosts: JobPost[] = [
  {
    id: "job-1",
    schoolId: "school-1",
    schoolName: { ar: "مدارس المعرفة الدولية", en: "Knowledge International Schools" },
    title: { ar: "معلم رياضيات - المرحلة الثانوية", en: "Math Teacher - Secondary" },
    subject: { ar: "الرياضيات", en: "Mathematics" },
    gradeLevel: { ar: "المرحلة الثانوية", en: "Secondary" },
    type: { ar: "دوام كامل", en: "Full-time" },
    experienceRequired: 3,
    skills: ["STEM", "التعلم التفاعلي", "تكنولوجيا التعليم"],
    salaryRange: { ar: "8,000 - 12,000 ج.م", en: "8,000 - 12,000 EGP" },
    deadline: "2026-04-15",
    applicants: 12,
    createdAt: "2026-03-01",
  },
  {
    id: "job-2",
    schoolId: "school-1",
    schoolName: { ar: "مدارس المعرفة الدولية", en: "Knowledge International Schools" },
    title: { ar: "معلمة لغة إنجليزية - المرحلة الابتدائية", en: "English Teacher - Primary" },
    subject: { ar: "اللغة الإنجليزية", en: "English" },
    gradeLevel: { ar: "المرحلة الابتدائية", en: "Primary" },
    type: { ar: "دوام كامل", en: "Full-time" },
    experienceRequired: 2,
    skills: ["Phonics", "التعلم المدمج", "إنتاج المحتوى"],
    deadline: "2026-04-20",
    applicants: 8,
    createdAt: "2026-03-05",
  },
  {
    id: "job-3",
    schoolId: "school-1",
    schoolName: { ar: "مدارس المعرفة الدولية", en: "Knowledge International Schools" },
    title: { ar: "معلم حاسب آلي", en: "Computer Science Teacher" },
    subject: { ar: "الحاسب الآلي", en: "Computer Science" },
    gradeLevel: { ar: "المرحلة الإعدادية", en: "Preparatory" },
    type: { ar: "دوام جزئي", en: "Part-time" },
    experienceRequired: 1,
    skills: ["Python", "Scratch", "الذكاء الاصطناعي"],
    deadline: "2026-05-01",
    applicants: 5,
    createdAt: "2026-03-10",
  },
];

export const mockApplications: TeacherApplication[] = [
  {
    id: "app-1",
    jobId: "job-1",
    teacherName: { ar: "أحمد محمد السيد", en: "Ahmed Mohamed" },
    subject: { ar: "الرياضيات", en: "Mathematics" },
    experience: 12,
    courses: 8,
    rating: 4.8,
    avatar: avatar1,
    status: "pending",
    appliedAt: "2026-03-08",
    intro: { ar: "معلم رياضيات خبير مع شغف بتكنولوجيا التعليم", en: "Expert math teacher passionate about EdTech" },
  },
  {
    id: "app-2",
    jobId: "job-1",
    teacherName: { ar: "نورة سعد القحطاني", en: "Noura Al-Qahtani" },
    subject: { ar: "الرياضيات", en: "Mathematics" },
    experience: 10,
    courses: 15,
    rating: 4.9,
    avatar: avatar4,
    status: "reviewed",
    appliedAt: "2026-03-07",
    intro: { ar: "خبيرة في الذكاء الاصطناعي والتعليم التفاعلي", en: "AI expert with interactive teaching skills" },
  },
  {
    id: "app-3",
    jobId: "job-2",
    teacherName: { ar: "فاطمة أحمد العلي", en: "Fatima Al-Ali" },
    subject: { ar: "اللغة الإنجليزية", en: "English" },
    experience: 8,
    courses: 12,
    rating: 4.7,
    avatar: avatar2,
    status: "accepted",
    appliedAt: "2026-03-06",
    intro: { ar: "مدربة معتمدة في التعلم المدمج", en: "Certified blended learning trainer" },
  },
  {
    id: "app-4",
    jobId: "job-3",
    teacherName: { ar: "محمد خالد الحربي", en: "Mohammed Al-Harbi" },
    subject: { ar: "الحاسب الآلي", en: "Computer Science" },
    experience: 6,
    courses: 5,
    rating: 4.3,
    avatar: avatar3,
    status: "pending",
    appliedAt: "2026-03-11",
    intro: { ar: "معلم STEM شغوف بالروبوتات والبرمجة", en: "STEM teacher passionate about robotics" },
  },
  {
    id: "app-5",
    jobId: "job-1",
    teacherName: { ar: "عبدالله يوسف المنصور", en: "Abdullah Al-Mansour" },
    subject: { ar: "الرياضيات", en: "Mathematics" },
    experience: 15,
    courses: 7,
    rating: 4.5,
    avatar: avatar5,
    status: "pending",
    appliedAt: "2026-03-09",
    intro: { ar: "خبرة طويلة في تدريس المناهج الدولية", en: "Experienced in international curricula" },
  },
];

export const analyticsData = {
  totalApplications: 47,
  profileViews: 1230,
  activeJobs: 3,
  topSubjects: [
    { name: { ar: "الرياضيات", en: "Mathematics" }, count: 18 },
    { name: { ar: "اللغة الإنجليزية", en: "English" }, count: 14 },
    { name: { ar: "الحاسب الآلي", en: "Computer Science" }, count: 9 },
    { name: { ar: "العلوم", en: "Science" }, count: 6 },
  ],
  monthlyApplications: [
    { month: { ar: "يناير", en: "Jan" }, count: 5 },
    { month: { ar: "فبراير", en: "Feb" }, count: 12 },
    { month: { ar: "مارس", en: "Mar" }, count: 30 },
  ],
};
