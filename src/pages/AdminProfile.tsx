import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Shield, Mail, Hash, Calendar, Settings, Users, BookOpen,
  Handshake, Server, ChevronLeft, Edit, Lock
} from "lucide-react";
import avatar1 from "@/assets/avatars/avatar-1.jpg";

const adminRoles = [
  {
    role: "Super Admin",
    label: "مدير عام",
    icon: Shield,
    color: "hsl(var(--destructive))",
    permissions: ["إدارة كاملة لجميع ميزات المنصة", "إدارة المشرفين الآخرين", "إعدادات النظام", "التحليلات المتقدمة"],
  },
  {
    role: "Content Admin",
    label: "مشرف المحتوى",
    icon: BookOpen,
    color: "hsl(var(--primary))",
    permissions: ["إدارة الدورات والموارد التعليمية", "الموافقة على المحتوى", "تمييز الموارد المهمة"],
  },
  {
    role: "Community Manager",
    label: "مدير المجتمع",
    icon: Users,
    color: "hsl(var(--accent))",
    permissions: ["إدارة السفراء والمرشدين", "متابعة تفاعل المستخدمين", "الإعلانات"],
  },
  {
    role: "School Partnership Manager",
    label: "مدير شراكات المدارس",
    icon: Handshake,
    color: "hsl(var(--badge-gold))",
    permissions: ["إدارة حسابات المدارس", "التحقق من المدارس", "شراكات التوظيف"],
  },
  {
    role: "Technical Admin",
    label: "مشرف تقني",
    icon: Server,
    color: "hsl(var(--muted-foreground))",
    permissions: ["إعدادات النظام", "إدارة التكامل", "الصلاحيات التقنية"],
  },
];

const adminProfile = {
  name: "أحمد محمد إبراهيم",
  role: "Super Admin",
  roleLabel: "مدير عام",
  email: "admin@edubook.com",
  adminId: "ADM-2024-001",
  dateJoined: "يناير 2024",
  bio: "مسؤول عن إدارة منصة صنّاع التعليم وضمان جودة المحتوى التعليمي وتجربة المستخدمين. أعمل على تطوير المنصة لتكون الوجهة الأولى للمعلمين في بناء مسارهم المهني.",
};

const anim = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: i * 0.1 },
});

export default function AdminProfile() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container py-8 max-w-5xl">
        {/* Back */}
        <motion.div {...anim(0)}>
          <Link to="/admin-dashboard" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6">
            <ChevronLeft className="w-4 h-4 rotate-180" />
            <span>لوحة تحكم المشرف</span>
          </Link>
        </motion.div>

        {/* Profile Header */}
        <motion.div {...anim(1)}>
          <Card className="mb-8 overflow-hidden">
            <div className="h-32 bg-gradient-to-l from-primary/20 via-accent/10 to-primary/5" />
            <CardContent className="relative pb-8 pt-0">
              <div className="flex flex-col md:flex-row items-start gap-6 -mt-12">
                <Avatar className="w-24 h-24 border-4 border-card shadow-lg">
                  <AvatarImage src={avatar1} alt={adminProfile.name} />
                  <AvatarFallback>أم</AvatarFallback>
                </Avatar>
                <div className="flex-1 mt-2">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h1 className="text-2xl font-bold text-foreground">{adminProfile.name}</h1>
                    <Badge className="bg-destructive/10 text-destructive border-destructive/20">
                      <Shield className="w-3 h-3 ml-1" />
                      {adminProfile.roleLabel}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">{adminProfile.bio}</p>
                  <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Mail className="w-4 h-4" />{adminProfile.email}</span>
                    <span className="flex items-center gap-1.5"><Hash className="w-4 h-4" />{adminProfile.adminId}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />انضم: {adminProfile.dateJoined}</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-2 md:mt-0">
                  <Button variant="outline" size="sm"><Edit className="w-4 h-4 ml-1" />تعديل</Button>
                  <Button variant="outline" size="sm"><Settings className="w-4 h-4 ml-1" />إعدادات</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Permissions */}
        <motion.div {...anim(2)}>
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5 text-primary" />
            صلاحيات المشرفين
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {adminRoles.map((r) => (
              <Card key={r.role} className={`border ${r.role === adminProfile.role ? "ring-2 ring-primary border-primary" : ""}`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg" style={{ background: `${r.color}15` }}>
                      <r.icon className="w-5 h-5" style={{ color: r.color }} />
                    </div>
                    <div>
                      <CardTitle className="text-base">{r.label}</CardTitle>
                      <p className="text-xs text-muted-foreground">{r.role}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5">
                    {r.permissions.map((p) => (
                      <li key={p} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
