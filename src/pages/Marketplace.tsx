import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Search, Store, SlidersHorizontal, LayoutGrid, TrendingUp, Clock, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { mockResources, subjects, gradeLevels, resourceTypeLabels, ResourceType } from "@/data/marketplaceData";
import ResourceCard from "@/components/marketplace/ResourceCard";
import UploadResourceDialog from "@/components/marketplace/UploadResourceDialog";
import CreatorStats from "@/components/marketplace/CreatorStats";
import { motion } from "framer-motion";

type SortOption = "newest" | "most-downloaded" | "highest-rated";
type ViewTab = "browse" | "my-dashboard";

export default function Marketplace() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  const [activeTab, setActiveTab] = useState<ViewTab>("browse");
  const [search, setSearch] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [sortBy, setSortBy] = useState<SortOption>("newest");

  const filtered = useMemo(() => {
    let results = [...mockResources];

    if (search) {
      const q = search.toLowerCase();
      results = results.filter(
        (r) => r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q)
      );
    }
    if (selectedSubject !== "all") {
      results = results.filter((r) => r.subject === selectedSubject);
    }
    if (selectedGrade !== "all") {
      results = results.filter((r) => r.gradeLevel === selectedGrade);
    }
    if (selectedType !== "all") {
      results = results.filter((r) => r.resourceType === selectedType);
    }

    switch (sortBy) {
      case "most-downloaded":
        results.sort((a, b) => b.downloads - a.downloads);
        break;
      case "highest-rated":
        results.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
      default:
        results.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    return results;
  }, [search, selectedSubject, selectedGrade, selectedType, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <section className="border-b bg-card">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Store className="w-6 h-6 text-primary" />
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                  {isAr ? "سوق موارد المعلمين" : "Teacher Resource Marketplace"}
                </h1>
              </div>
              <p className="text-muted-foreground">
                {isAr
                  ? "شارك مواردك التعليمية واكسب نقاطاً عند تحميلها من معلمين آخرين"
                  : "Share your teaching resources and earn points when others download them"}
              </p>
            </div>
            <UploadResourceDialog lang={lang} />
          </div>

          {/* Tabs */}
          <div className="flex gap-2">
            <Button
              size="sm"
              variant={activeTab === "browse" ? "default" : "outline"}
              onClick={() => setActiveTab("browse")}
            >
              <LayoutGrid className="w-4 h-4 ml-1" />
              {isAr ? "تصفح الموارد" : "Browse"}
            </Button>
            <Button
              size="sm"
              variant={activeTab === "my-dashboard" ? "default" : "outline"}
              onClick={() => setActiveTab("my-dashboard")}
            >
              <TrendingUp className="w-4 h-4 ml-1" />
              {isAr ? "لوحة المساهم" : "Creator Dashboard"}
            </Button>
          </div>
        </div>
      </section>

      <div className="container py-8">
        {activeTab === "my-dashboard" ? (
          <CreatorStats lang={lang} />
        ) : (
          <>
            {/* Search & Filters */}
            <div className="flex flex-col lg:flex-row gap-3 mb-6">
              <div className="relative flex-1">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={isAr ? "ابحث عن مورد تعليمي..." : "Search for a teaching resource..."}
                  className="pr-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder={isAr ? "المادة" : "Subject"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{isAr ? "كل المواد" : "All Subjects"}</SelectItem>
                    {subjects.map((s) => (
                      <SelectItem key={s.ar} value={s.ar}>{s[lang]}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedGrade} onValueChange={setSelectedGrade}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder={isAr ? "المرحلة" : "Grade"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{isAr ? "كل المراحل" : "All Grades"}</SelectItem>
                    {gradeLevels.map((g) => (
                      <SelectItem key={g.ar} value={g.ar}>{g[lang]}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedType} onValueChange={(v) => setSelectedType(v)}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder={isAr ? "النوع" : "Type"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{isAr ? "كل الأنواع" : "All Types"}</SelectItem>
                    {(Object.keys(resourceTypeLabels) as ResourceType[]).map((key) => (
                      <SelectItem key={key} value={key}>{resourceTypeLabels[key][lang]}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2 mb-6">
              <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{isAr ? "ترتيب:" : "Sort:"}</span>
              {([
                { key: "newest" as SortOption, label: isAr ? "الأحدث" : "Newest", icon: Clock },
                { key: "most-downloaded" as SortOption, label: isAr ? "الأكثر تحميلاً" : "Most Downloaded", icon: TrendingUp },
                { key: "highest-rated" as SortOption, label: isAr ? "الأعلى تقييماً" : "Highest Rated", icon: Star },
              ]).map((s) => (
                <Button
                  key={s.key}
                  size="sm"
                  variant={sortBy === s.key ? "default" : "ghost"}
                  onClick={() => setSortBy(s.key)}
                  className="text-xs h-7"
                >
                  <s.icon className="w-3 h-3 ml-1" />
                  {s.label}
                </Button>
              ))}
            </div>

            {/* Results count */}
            <p className="text-sm text-muted-foreground mb-4">
              {filtered.length} {isAr ? "مورد تعليمي" : "resources found"}
            </p>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((resource, i) => (
                <ResourceCard key={resource.id} resource={resource} index={i} lang={lang} />
              ))}
            </div>

            {filtered.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg font-semibold text-foreground mb-2">
                  {isAr ? "لا توجد نتائج" : "No results found"}
                </p>
                <p className="text-muted-foreground">
                  {isAr ? "جرّب تغيير معايير البحث" : "Try adjusting your search filters"}
                </p>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
