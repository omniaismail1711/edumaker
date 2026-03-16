import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users, GraduationCap, School, BookOpen, Award, Flag, TrendingUp,
  Search, Filter, Eye, Edit, Ban, CheckCircle, Bell, Send, Mail,
  BarChart3, PieChart, Globe, Settings, Shield, UserCheck,
  FileText, Star, Megaphone, ChevronLeft, Download, MoreHorizontal
} from "lucide-react";
import avatar1 from "@/assets/avatars/avatar-1.jpg";
import avatar2 from "@/assets/avatars/avatar-2.jpg";
import avatar3 from "@/assets/avatars/avatar-3.jpg";
import avatar4 from "@/assets/avatars/avatar-4.jpg";
import avatar5 from "@/assets/avatars/avatar-5.jpg";

const anim = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: i * 0.05 },
});

const stats = [
  { label: "إجمالي المستخدمين", value: "12,458", icon: Users, change: "+8.2%", color: "hsl(var(--primary))" },
  { label: "المعلمون", value: "5,340", icon: GraduationCap, change: "+12%", color: "hsl(var(--accent))" },
  { label: "طلاب الجامعات", value: "4,120", icon: BookOpen, change: "+15%", color: "hsl(210 55% 50%)" },
  { label: "المدارس", value: "890", icon: School, change: "+6%", color: "hsl(var(--badge-gold))" },
  { label: "الدورات المكتملة", value: "3,280", icon: Award, change: "+22%", color: "hsl(150 50% 45%)" },
  { label: "السفراء النشطون", value: "156", icon: Flag, change: "+18%", color: "hsl(var(--destructive))" },
];

const users = [
  { id: 1, name: "سارة أحمد", email: "sara@mail.com", type: "معلم", status: "نشط", avatar: avatar1, joined: "2024-01-15" },
  { id: 2, name: "محمد علي", email: "mohamed@mail.com", type: "طالب", status: "نشط", avatar: avatar2, joined: "2024-02-20" },
  { id: 3, name: "فاطمة حسن", email: "fatma@mail.com", type: "معلم", status: "معلق", avatar: avatar3, joined: "2024-03-10" },
  { id: 4, name: "أحمد خالد", email: "ahmed@mail.com", type: "سفير", status: "نشط", avatar: avatar4, joined: "2024-01-08" },
  { id: 5, name: "نورا سعيد", email: "noura@mail.com", type: "مرشد", status: "نشط", avatar: avatar5, joined: "2024-04-01" },
];

const pendingContent = [
  { id: 1, title: "دورة إدارة الصف الذكي", type: "دورة", author: "سارة أحمد", date: "2026-03-14" },
  { id: 2, title: "ورقة عمل - الكسور", type: "مورد", author: "محمد علي", date: "2026-03-13" },
  { id: 3, title: "خطة درس - النحو العربي", type: "خطة درس", author: "فاطمة حسن", date: "2026-03-12" },
];

const ambassadorApps = [
  { id: 1, name: "ياسر محمود", university: "جامعة القاهرة", reach: "200+", date: "2026-03-15", avatar: avatar2 },
  { id: 2, name: "منى إبراهيم", university: "جامعة عين شمس", reach: "150+", date: "2026-03-14", avatar: avatar3 },
];

const schoolApps = [
  { id: 1, name: "مدرسة النور الخاصة", city: "القاهرة", type: "خاصة", status: "قيد المراجعة", date: "2026-03-15" },
  { id: 2, name: "مدرسة الأمل الدولية", city: "الإسكندرية", type: "دولية", status: "قيد المراجعة", date: "2026-03-13" },
];

const monthlyGrowth = [
  { month: "يناير", users: 8200 },
  { month: "فبراير", users: 9100 },
  { month: "مارس", users: 9800 },
  { month: "أبريل", users: 10400 },
  { month: "مايو", users: 11200 },
  { month: "يونيو", users: 12458 },
];

const topCourses = [
  { name: "الذكاء الاصطناعي في التعليم", enrollments: 1240, completion: 78 },
  { name: "إدارة الصف بفعالية", enrollments: 980, completion: 85 },
  { name: "تصميم الدروس التفاعلية", enrollments: 870, completion: 72 },
  { name: "التكنولوجيا في التعليم", enrollments: 760, completion: 80 },
];

const governorates = [
  { name: "القاهرة", users: 3200 },
  { name: "الإسكندرية", users: 1800 },
  { name: "الجيزة", users: 1500 },
  { name: "المنصورة", users: 900 },
  { name: "أسيوط", users: 650 },
  { name: "الأقصر", users: 400 },
];

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [userFilter, setUserFilter] = useState("all");
  const [announcement, setAnnouncement] = useState("");

  const filteredUsers = users.filter((u) => {
    const matchesSearch = u.name.includes(searchTerm) || u.email.includes(searchTerm);
    const matchesFilter = userFilter === "all" || u.type === userFilter;
    return matchesSearch && matchesFilter;
  });

  const maxUsers = Math.max(...governorates.map((g) => g.users));

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container py-8">
        {/* Header */}
        <motion.div {...anim(0)} className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              لوحة تحكم المشرف
            </h1>
            <p className="text-muted-foreground mt-1">إدارة شاملة لمنصة صنّاع التعليم</p>
          </div>
          <div className="flex gap-2">
            <Link to="/admin-profile">
              <Button variant="outline" size="sm">
                <UserCheck className="w-4 h-4 ml-1" />
                الملف الشخصي
              </Button>
            </Link>
            <Button variant="outline" size="sm"><Settings className="w-4 h-4 ml-1" />الإعدادات</Button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} {...anim(i + 1)}>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <div className="mx-auto w-10 h-10 rounded-lg flex items-center justify-center mb-2" style={{ background: `${s.color}15` }}>
                    <s.icon className="w-5 h-5" style={{ color: s.color }} />
                  </div>
                  <p className="text-2xl font-bold text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground mb-1">{s.label}</p>
                  <span className="text-xs text-green-600 font-medium flex items-center justify-center gap-0.5">
                    <TrendingUp className="w-3 h-3" />{s.change}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="flex-wrap h-auto gap-1">
            <TabsTrigger value="users" className="gap-1.5"><Users className="w-4 h-4" />المستخدمون</TabsTrigger>
            <TabsTrigger value="content" className="gap-1.5"><BookOpen className="w-4 h-4" />المحتوى</TabsTrigger>
            <TabsTrigger value="ambassadors" className="gap-1.5"><Flag className="w-4 h-4" />السفراء</TabsTrigger>
            <TabsTrigger value="schools" className="gap-1.5"><School className="w-4 h-4" />المدارس</TabsTrigger>
            <TabsTrigger value="analytics" className="gap-1.5"><BarChart3 className="w-4 h-4" />التحليلات</TabsTrigger>
            <TabsTrigger value="notifications" className="gap-1.5"><Bell className="w-4 h-4" />الإعلانات</TabsTrigger>
            <TabsTrigger value="settings" className="gap-1.5"><Settings className="w-4 h-4" />النظام</TabsTrigger>
          </TabsList>

          {/* Users Tab */}
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>إدارة المستخدمين</CardTitle>
                <CardDescription>البحث وإدارة جميع مستخدمي المنصة</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="بحث بالاسم أو البريد..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pr-10"
                    />
                  </div>
                  <Select value={userFilter} onValueChange={setUserFilter}>
                    <SelectTrigger className="w-40">
                      <Filter className="w-4 h-4 ml-1" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">الكل</SelectItem>
                      <SelectItem value="معلم">معلم</SelectItem>
                      <SelectItem value="طالب">طالب</SelectItem>
                      <SelectItem value="سفير">سفير</SelectItem>
                      <SelectItem value="مرشد">مرشد</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>المستخدم</TableHead>
                      <TableHead>النوع</TableHead>
                      <TableHead>الحالة</TableHead>
                      <TableHead>تاريخ الانضمام</TableHead>
                      <TableHead>إجراءات</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((u) => (
                      <TableRow key={u.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="w-8 h-8">
                              <AvatarImage src={u.avatar} />
                              <AvatarFallback>{u.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-foreground text-sm">{u.name}</p>
                              <p className="text-xs text-muted-foreground">{u.email}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell><Badge variant="secondary">{u.type}</Badge></TableCell>
                        <TableCell>
                          <Badge variant={u.status === "نشط" ? "default" : "outline"}>{u.status}</Badge>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">{u.joined}</TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8"><Eye className="w-4 h-4" /></Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8"><Edit className="w-4 h-4" /></Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive"><Ban className="w-4 h-4" /></Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>إدارة المحتوى</CardTitle>
                <CardDescription>مراجعة والموافقة على المحتوى التعليمي</CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-foreground mb-4">محتوى بانتظار الموافقة</h3>
                <div className="space-y-3">
                  {pendingContent.map((c) => (
                    <div key={c.id} className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <FileText className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">{c.title}</p>
                          <p className="text-xs text-muted-foreground">{c.author} · {c.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{c.type}</Badge>
                        <Button size="sm" className="gap-1"><CheckCircle className="w-3 h-3" />موافقة</Button>
                        <Button size="sm" variant="outline"><Eye className="w-3 h-3" /></Button>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="font-semibold text-foreground mt-8 mb-4">الدورات الأكثر شعبية</h3>
                <div className="space-y-3">
                  {topCourses.map((c) => (
                    <div key={c.name} className="flex items-center justify-between p-3 rounded-lg border">
                      <div>
                        <p className="font-medium text-foreground text-sm">{c.name}</p>
                        <p className="text-xs text-muted-foreground">{c.enrollments} مسجل</p>
                      </div>
                      <div className="flex items-center gap-3 w-40">
                        <Progress value={c.completion} className="flex-1" />
                        <span className="text-xs text-muted-foreground w-10">{c.completion}%</span>
                        <Button variant="ghost" size="icon" className="h-7 w-7"><Star className="w-3.5 h-3.5" /></Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Ambassadors Tab */}
          <TabsContent value="ambassadors">
            <Card>
              <CardHeader>
                <CardTitle>إدارة السفراء</CardTitle>
                <CardDescription>مراجعة طلبات الانضمام ومتابعة أداء السفراء</CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-foreground mb-4">طلبات جديدة</h3>
                <div className="space-y-3 mb-8">
                  {ambassadorApps.map((a) => (
                    <div key={a.id} className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={a.avatar} />
                          <AvatarFallback>{a.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-foreground">{a.name}</p>
                          <p className="text-xs text-muted-foreground">{a.university} · يمكنه الوصول لـ {a.reach} شخص</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="gap-1"><CheckCircle className="w-3 h-3" />قبول</Button>
                        <Button size="sm" variant="outline" className="text-destructive">رفض</Button>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="font-semibold text-foreground mb-4">لوحة متصدرين السفراء</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>#</TableHead>
                      <TableHead>السفير</TableHead>
                      <TableHead>النقاط</TableHead>
                      <TableHead>الدعوات</TableHead>
                      <TableHead>الورش</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { rank: 1, name: "أحمد خالد", points: 520, invites: 42, workshops: 3 },
                      { rank: 2, name: "نورا سعيد", points: 380, invites: 28, workshops: 2 },
                      { rank: 3, name: "ياسر محمود", points: 290, invites: 19, workshops: 2 },
                    ].map((a) => (
                      <TableRow key={a.rank}>
                        <TableCell className="font-bold text-primary">{a.rank}</TableCell>
                        <TableCell className="font-medium">{a.name}</TableCell>
                        <TableCell>{a.points}</TableCell>
                        <TableCell>{a.invites}</TableCell>
                        <TableCell>{a.workshops}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Schools Tab */}
          <TabsContent value="schools">
            <Card>
              <CardHeader>
                <CardTitle>إدارة المدارس</CardTitle>
                <CardDescription>مراجعة تسجيلات المدارس والتحقق من الحسابات</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {schoolApps.map((s) => (
                    <div key={s.id} className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-primary/10">
                          <School className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{s.name}</p>
                          <p className="text-xs text-muted-foreground">{s.city} · {s.type} · {s.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{s.status}</Badge>
                        <Button size="sm" className="gap-1"><CheckCircle className="w-3 h-3" />تحقق</Button>
                        <Button size="sm" variant="outline"><Eye className="w-3 h-3" /></Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Growth Chart (simple bar) */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><BarChart3 className="w-5 h-5 text-primary" />نمو المستخدمين</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {monthlyGrowth.map((m) => (
                      <div key={m.month} className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground w-14">{m.month}</span>
                        <div className="flex-1 h-6 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all"
                            style={{ width: `${(m.users / 13000) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-foreground w-16 text-left">{m.users.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><PieChart className="w-5 h-5 text-primary" />توزيع المستخدمين</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { label: "معلمون", value: 43, color: "hsl(var(--primary))" },
                      { label: "طلاب جامعات", value: 33, color: "hsl(var(--accent))" },
                      { label: "مدارس", value: 15, color: "hsl(var(--badge-gold))" },
                      { label: "مرشدون وسفراء", value: 9, color: "hsl(var(--muted-foreground))" },
                    ].map((d) => (
                      <div key={d.label} className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full shrink-0" style={{ background: d.color }} />
                        <span className="text-sm text-foreground flex-1">{d.label}</span>
                        <Progress value={d.value} className="w-32" />
                        <span className="text-sm font-medium text-muted-foreground w-10 text-left">{d.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Geographic */}
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Globe className="w-5 h-5 text-primary" />التوزيع الجغرافي</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {governorates.map((g) => (
                      <div key={g.name} className="p-3 rounded-lg border">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-foreground">{g.name}</span>
                          <span className="text-sm text-muted-foreground">{g.users.toLocaleString()}</span>
                        </div>
                        <Progress value={(g.users / maxUsers) * 100} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Megaphone className="w-5 h-5 text-primary" />الإعلانات والإشعارات</CardTitle>
                <CardDescription>إرسال إعلانات لجميع مستخدمي المنصة</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">نص الإعلان</label>
                    <textarea
                      className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="اكتب الإعلان هنا..."
                      value={announcement}
                      onChange={(e) => setAnnouncement(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="الجمهور المستهدف" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">جميع المستخدمين</SelectItem>
                        <SelectItem value="teachers">المعلمون فقط</SelectItem>
                        <SelectItem value="students">الطلاب فقط</SelectItem>
                        <SelectItem value="schools">المدارس فقط</SelectItem>
                        <SelectItem value="ambassadors">السفراء فقط</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="gap-1.5"><Send className="w-4 h-4" />إرسال الإعلان</Button>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold text-foreground mb-4">إعلانات سابقة</h3>
                  <div className="space-y-3">
                    {[
                      { text: "تم إطلاق برنامج المعلم المستقبلي - سجل الآن!", date: "2026-03-10", audience: "الكل" },
                      { text: "دورة جديدة: الذكاء الاصطناعي في التعليم", date: "2026-03-05", audience: "المعلمون" },
                      { text: "فرص تدريب صيفي للطلاب", date: "2026-02-28", audience: "الطلاب" },
                    ].map((n, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg border">
                        <div className="flex items-center gap-3">
                          <Bell className="w-4 h-4 text-muted-foreground" />
                          <div>
                            <p className="text-sm text-foreground">{n.text}</p>
                            <p className="text-xs text-muted-foreground">{n.date}</p>
                          </div>
                        </div>
                        <Badge variant="outline">{n.audience}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>إعدادات المنصة</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { label: "تفعيل التسجيل المفتوح", desc: "السماح لمستخدمين جدد بالتسجيل", enabled: true },
                    { label: "مراجعة المحتوى يدوياً", desc: "مراجعة المحتوى قبل النشر", enabled: true },
                    { label: "تفعيل برنامج السفراء", desc: "السماح بطلبات الانضمام للسفراء", enabled: true },
                    { label: "وضع الصيانة", desc: "تعطيل المنصة مؤقتاً للصيانة", enabled: false },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center justify-between p-3 rounded-lg border">
                      <div>
                        <p className="text-sm font-medium text-foreground">{s.label}</p>
                        <p className="text-xs text-muted-foreground">{s.desc}</p>
                      </div>
                      <div className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${s.enabled ? "bg-primary" : "bg-muted"}`}>
                        <div className={`w-4 h-4 rounded-full bg-card absolute top-0.5 transition-all ${s.enabled ? "right-0.5" : "right-[22px]"}`} />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>الأمان والصلاحيات</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { label: "التحقق من البريد الإلكتروني", icon: Mail },
                    { label: "المصادقة الثنائية", icon: Shield },
                    { label: "سجل النشاطات", icon: FileText },
                    { label: "إدارة صلاحيات المشرفين", icon: Users },
                  ].map((item) => (
                    <Button key={item.label} variant="outline" className="w-full justify-start gap-2">
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
