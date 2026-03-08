import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal, X, IdCard } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import TeacherCard from "@/components/TeacherCard";
import { mockTeachers, skillCategories } from "@/data/mockData";

const subjectFilters = ["الكل", "الرياضيات", "العلوم", "اللغة الإنجليزية", "اللغة العربية", "الحاسب الآلي", "رياض الأطفال"];

export default function ExploreTeachers() {
  const [search, setSearch] = useState("");
  const [activeSubject, setActiveSubject] = useState("الكل");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [unionOnly, setUnionOnly] = useState(false);

  const filtered = mockTeachers.filter((t) => {
    const matchSearch = !search || t.name.includes(search) || t.title.includes(search) || t.skills.some((s) => s.includes(search));
    const matchSubject = activeSubject === "الكل" || t.subjects.some((s) => s.includes(activeSubject));
    const matchSkills = selectedSkills.length === 0 || selectedSkills.some((sk) => t.skills.includes(sk));
    const matchUnion = !unionOnly || t.unionMember;
    return matchSearch && matchSubject && matchSkills && matchUnion;
  });

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) => prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-card border-b">
        <div className="container py-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">استكشاف المعلمين</h1>
          <p className="text-muted-foreground mb-6">ابحث عن المعلم المناسب حسب المهارات والشهادات والخبرة</p>

          {/* Search */}
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="ابحث بالاسم، المهارة، أو التخصص..."
                className="pr-10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Button
              variant={showFilters ? "default" : "outline"}
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-4 h-4 ml-2" />
              تصفية
            </Button>
          </div>

          {/* Subject tabs */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {subjectFilters.map((s) => (
              <Button
                key={s}
                variant={activeSubject === s ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveSubject(s)}
                className="whitespace-nowrap"
              >
                {s}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-6">
        <div className="flex gap-6">
          {/* Skill filters sidebar */}
          {showFilters && (
            <div className="hidden md:block w-72 shrink-0">
              <div className="bg-card rounded-xl border p-5 sticky top-20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-foreground">تصفية المهارات</h3>
                  {selectedSkills.length > 0 && (
                    <button onClick={() => setSelectedSkills([])} className="text-xs text-primary hover:underline">
                      مسح الكل
                    </button>
                  )}
                </div>

                {/* Union filter */}
                <div className="flex items-center gap-2 mb-4 p-3 rounded-lg border bg-primary/5">
                  <Checkbox id="union-filter" checked={unionOnly} onCheckedChange={(v) => setUnionOnly(!!v)} />
                  <Label htmlFor="union-filter" className="text-xs font-semibold cursor-pointer flex items-center gap-1.5">
                    <IdCard className="w-3.5 h-3.5 text-primary" />
                    عرض أعضاء نقابة المعلمين فقط
                  </Label>
                </div>

                {skillCategories.map((cat) => (
                  <div key={cat.title} className="mb-4">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">{cat.title}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant={selectedSkills.includes(skill) ? "default" : "outline"}
                          className="cursor-pointer text-xs"
                          onClick={() => toggleSkill(skill)}
                        >
                          {skill}
                          {selectedSkills.includes(skill) && <X className="w-3 h-3 mr-1" />}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-4">
              {filtered.length} معلم
              {selectedSkills.length > 0 && ` • ${selectedSkills.length} مهارة محددة`}
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {filtered.map((t, i) => (
                <TeacherCard key={t.id} teacher={t} index={i} />
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-16">
                <Search className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground">لم يتم العثور على نتائج</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
