import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, SlidersHorizontal } from "lucide-react";
import JobCard from "@/components/JobCard";
import { mockJobs } from "@/data/mockData";

const typeFilters = ["الكل", "دوام كامل", "دوام جزئي", "عقد مؤقت"];

export default function Jobs() {
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState("الكل");

  const filtered = mockJobs.filter((j) => {
    const matchSearch = !search || j.title.includes(search) || j.school.includes(search);
    const matchType = activeType === "الكل" || j.type === activeType;
    return matchSearch && matchType;
  });

  return (
    <div className="min-h-screen">
      <div className="bg-card border-b">
        <div className="container py-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">فرص التوظيف</h1>
          <p className="text-muted-foreground mb-6">اكتشف أحدث فرص العمل في المدارس والمؤسسات التعليمية</p>

          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input placeholder="ابحث عن وظيفة..." className="pr-10" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            {typeFilters.map((t) => (
              <Button key={t} variant={activeType === t ? "default" : "outline"} size="sm" onClick={() => setActiveType(t)}>
                {t}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-6">
        <p className="text-sm text-muted-foreground mb-4">{filtered.length} وظيفة متاحة</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((j, i) => (
            <JobCard key={j.id} job={j} index={i} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-muted-foreground">لم يتم العثور على وظائف</p>
          </div>
        )}
      </div>
    </div>
  );
}
