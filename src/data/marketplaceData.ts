import avatar1 from "@/assets/avatars/avatar-1.jpg";
import avatar2 from "@/assets/avatars/avatar-2.jpg";
import avatar3 from "@/assets/avatars/avatar-3.jpg";
import avatar4 from "@/assets/avatars/avatar-4.jpg";
import avatar5 from "@/assets/avatars/avatar-5.jpg";
import avatar6 from "@/assets/avatars/avatar-6.jpg";

export type ResourceType = "lesson-plan" | "worksheet" | "presentation" | "exam" | "activity" | "guide";
export type PriceType = "free" | "paid";

export interface MarketplaceResource {
  id: number;
  title: string;
  description: string;
  subject: string;
  gradeLevel: string;
  resourceType: ResourceType;
  priceType: PriceType;
  points: number;
  author: {
    name: string;
    avatar: string;
    isTopContributor: boolean;
  };
  downloads: number;
  rating: number;
  reviewCount: number;
  createdAt: string;
  fileFormat: string;
}

export const resourceTypeLabels: Record<ResourceType, { ar: string; en: string }> = {
  "lesson-plan": { ar: "خطة درس", en: "Lesson Plan" },
  "worksheet": { ar: "ورقة عمل", en: "Worksheet" },
  "presentation": { ar: "عرض تقديمي", en: "Presentation" },
  "exam": { ar: "نموذج امتحان", en: "Exam Model" },
  "activity": { ar: "نشاط صفي", en: "Activity" },
  "guide": { ar: "دليل تعليمي", en: "Teaching Guide" },
};

export const subjects = [
  { ar: "الرياضيات", en: "Mathematics" },
  { ar: "العلوم", en: "Science" },
  { ar: "اللغة العربية", en: "Arabic" },
  { ar: "اللغة الإنجليزية", en: "English" },
  { ar: "الحاسب الآلي", en: "Computer Science" },
  { ar: "الدراسات الاجتماعية", en: "Social Studies" },
  { ar: "التربية الإسلامية", en: "Islamic Education" },
  { ar: "الفنون", en: "Arts" },
];

export const gradeLevels = [
  { ar: "رياض الأطفال", en: "Kindergarten" },
  { ar: "المرحلة الابتدائية", en: "Primary" },
  { ar: "المرحلة المتوسطة", en: "Middle School" },
  { ar: "المرحلة الثانوية", en: "High School" },
];

export const mockResources: MarketplaceResource[] = [
  {
    id: 1,
    title: "خطة درس الكسور للصف الرابع",
    description: "خطة درس شاملة لتعليم الكسور باستخدام أنشطة تفاعلية وأوراق عمل مرفقة",
    subject: "الرياضيات",
    gradeLevel: "المرحلة الابتدائية",
    resourceType: "lesson-plan",
    priceType: "free",
    points: 0,
    author: { name: "أحمد محمد السيد", avatar: avatar1, isTopContributor: true },
    downloads: 342,
    rating: 4.8,
    reviewCount: 56,
    createdAt: "2025-12-15",
    fileFormat: "PDF",
  },
  {
    id: 2,
    title: "أوراق عمل قواعد اللغة الإنجليزية - Grammar Worksheets",
    description: "مجموعة أوراق عمل متنوعة لتعليم قواعد اللغة الإنجليزية للمرحلة المتوسطة",
    subject: "اللغة الإنجليزية",
    gradeLevel: "المرحلة المتوسطة",
    resourceType: "worksheet",
    priceType: "paid",
    points: 15,
    author: { name: "فاطمة أحمد العلي", avatar: avatar2, isTopContributor: true },
    downloads: 218,
    rating: 4.6,
    reviewCount: 38,
    createdAt: "2026-01-08",
    fileFormat: "DOCX",
  },
  {
    id: 3,
    title: "عرض تقديمي - الجهاز الهضمي",
    description: "عرض PowerPoint تفاعلي عن الجهاز الهضمي مع رسوم متحركة وأسئلة تقييمية",
    subject: "العلوم",
    gradeLevel: "المرحلة المتوسطة",
    resourceType: "presentation",
    priceType: "paid",
    points: 20,
    author: { name: "محمد خالد الحربي", avatar: avatar3, isTopContributor: false },
    downloads: 156,
    rating: 4.4,
    reviewCount: 22,
    createdAt: "2026-02-01",
    fileFormat: "PPTX",
  },
  {
    id: 4,
    title: "نموذج امتحان نهائي - البرمجة بلغة Python",
    description: "نموذج امتحان شامل يغطي أساسيات البرمجة بلغة Python مع دليل التصحيح",
    subject: "الحاسب الآلي",
    gradeLevel: "المرحلة الثانوية",
    resourceType: "exam",
    priceType: "paid",
    points: 25,
    author: { name: "نورة سعد القحطاني", avatar: avatar4, isTopContributor: true },
    downloads: 489,
    rating: 4.9,
    reviewCount: 73,
    createdAt: "2026-01-20",
    fileFormat: "PDF",
  },
  {
    id: 5,
    title: "أنشطة تعليمية ممتعة للنحو العربي",
    description: "مجموعة ألعاب وأنشطة صفية لتعليم قواعد النحو بطريقة ممتعة وتفاعلية",
    subject: "اللغة العربية",
    gradeLevel: "المرحلة المتوسطة",
    resourceType: "activity",
    priceType: "free",
    points: 0,
    author: { name: "عبدالله يوسف المنصور", avatar: avatar5, isTopContributor: false },
    downloads: 267,
    rating: 4.7,
    reviewCount: 41,
    createdAt: "2026-02-10",
    fileFormat: "PDF",
  },
  {
    id: 6,
    title: "دليل المعلم - التعلم باللعب لرياض الأطفال",
    description: "دليل شامل يحتوي على 30 نشاطاً تعليمياً قائماً على اللعب لمرحلة رياض الأطفال",
    subject: "الفنون",
    gradeLevel: "رياض الأطفال",
    resourceType: "guide",
    priceType: "paid",
    points: 30,
    author: { name: "ريم عادل البكري", avatar: avatar6, isTopContributor: true },
    downloads: 521,
    rating: 4.9,
    reviewCount: 89,
    createdAt: "2025-11-28",
    fileFormat: "PDF",
  },
  {
    id: 7,
    title: "خطة درس الذكاء الاصطناعي للمبتدئين",
    description: "خطة درس تعريفية بالذكاء الاصطناعي مع أمثلة عملية للطلاب",
    subject: "الحاسب الآلي",
    gradeLevel: "المرحلة الثانوية",
    resourceType: "lesson-plan",
    priceType: "free",
    points: 0,
    author: { name: "أحمد محمد السيد", avatar: avatar1, isTopContributor: true },
    downloads: 178,
    rating: 4.5,
    reviewCount: 29,
    createdAt: "2026-03-01",
    fileFormat: "PDF",
  },
  {
    id: 8,
    title: "نماذج امتحانات رياضيات - الصف الثالث ثانوي",
    description: "5 نماذج امتحانات شاملة مع الحلول النموذجية للرياضيات",
    subject: "الرياضيات",
    gradeLevel: "المرحلة الثانوية",
    resourceType: "exam",
    priceType: "paid",
    points: 35,
    author: { name: "فاطمة أحمد العلي", avatar: avatar2, isTopContributor: true },
    downloads: 612,
    rating: 4.8,
    reviewCount: 95,
    createdAt: "2026-02-20",
    fileFormat: "ZIP",
  },
];
