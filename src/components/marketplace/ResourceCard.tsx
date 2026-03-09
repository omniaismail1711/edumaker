import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Download, FileText, Award, Coins } from "lucide-react";
import { MarketplaceResource, resourceTypeLabels } from "@/data/marketplaceData";
import { motion } from "framer-motion";

interface Props {
  resource: MarketplaceResource;
  index: number;
  lang: "ar" | "en";
}

export default function ResourceCard({ resource, index, lang }: Props) {
  const typeLabel = resourceTypeLabels[resource.resourceType][lang];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-card rounded-xl border p-5 card-elevated flex flex-col"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <Badge variant="outline" className="text-xs shrink-0">
          <FileText className="w-3 h-3 ml-1" />
          {typeLabel}
        </Badge>
        {resource.priceType === "free" ? (
          <Badge className="bg-green-500/10 text-green-600 border-green-500/20 text-xs">
            {lang === "ar" ? "مجاني" : "Free"}
          </Badge>
        ) : (
          <Badge className="bg-badge-gold/10 text-badge-gold border-badge-gold/20 text-xs">
            <Coins className="w-3 h-3 ml-1" />
            {resource.points} {lang === "ar" ? "نقطة" : "pts"}
          </Badge>
        )}
      </div>

      {/* Title & Description */}
      <h3 className="font-bold text-foreground mb-2 line-clamp-2 leading-relaxed">{resource.title}</h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed flex-1">{resource.description}</p>

      {/* Meta tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        <Badge variant="secondary" className="text-[10px]">{resource.subject}</Badge>
        <Badge variant="secondary" className="text-[10px]">{resource.gradeLevel}</Badge>
        <Badge variant="secondary" className="text-[10px]">{resource.fileFormat}</Badge>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
        <span className="flex items-center gap-1">
          <Download className="w-3.5 h-3.5" />
          {resource.downloads}
        </span>
        <span className="flex items-center gap-1">
          <Star className="w-3.5 h-3.5 fill-badge-gold text-badge-gold" />
          {resource.rating} ({resource.reviewCount})
        </span>
      </div>

      {/* Author & Action */}
      <div className="flex items-center justify-between pt-3 border-t">
        <div className="flex items-center gap-2">
          <Avatar className="w-7 h-7">
            <AvatarImage src={resource.author.avatar} />
            <AvatarFallback>{resource.author.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground">{resource.author.name.split(" ").slice(0, 2).join(" ")}</span>
            {resource.author.isTopContributor && (
              <Award className="w-3.5 h-3.5 text-badge-gold" />
            )}
          </div>
        </div>
        <Button size="sm" variant={resource.priceType === "free" ? "default" : "outline"} className="text-xs h-8">
          <Download className="w-3.5 h-3.5 ml-1" />
          {lang === "ar" ? "تحميل" : "Download"}
        </Button>
      </div>
    </motion.div>
  );
}
