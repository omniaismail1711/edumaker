import { useState } from "react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Upload, Plus } from "lucide-react";
import { subjects, gradeLevels, resourceTypeLabels, ResourceType } from "@/data/marketplaceData";

interface Props {
  lang: "ar" | "en";
}

export default function UploadResourceDialog({ lang }: Props) {
  const [open, setOpen] = useState(false);
  const [priceType, setPriceType] = useState<"free" | "paid">("free");

  const isAr = lang === "ar";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="font-semibold">
          <Plus className="w-4 h-4 ml-1" />
          {isAr ? "رفع مورد جديد" : "Upload Resource"}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isAr ? "رفع مورد تعليمي جديد" : "Upload New Teaching Resource"}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-2">
          {/* Title */}
          <div className="space-y-2">
            <Label>{isAr ? "عنوان المورد" : "Resource Title"}</Label>
            <Input placeholder={isAr ? "أدخل عنوان المورد" : "Enter resource title"} />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label>{isAr ? "وصف المورد" : "Description"}</Label>
            <Textarea placeholder={isAr ? "وصف مختصر للمورد التعليمي" : "Brief description of the resource"} />
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <Label>{isAr ? "المادة الدراسية" : "Subject"}</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={isAr ? "اختر المادة" : "Select subject"} />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((s) => (
                  <SelectItem key={s.ar} value={s.ar}>{s[lang]}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Grade Level */}
          <div className="space-y-2">
            <Label>{isAr ? "المرحلة الدراسية" : "Grade Level"}</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={isAr ? "اختر المرحلة" : "Select grade"} />
              </SelectTrigger>
              <SelectContent>
                {gradeLevels.map((g) => (
                  <SelectItem key={g.ar} value={g.ar}>{g[lang]}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Resource Type */}
          <div className="space-y-2">
            <Label>{isAr ? "نوع المورد" : "Resource Type"}</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={isAr ? "اختر النوع" : "Select type"} />
              </SelectTrigger>
              <SelectContent>
                {(Object.keys(resourceTypeLabels) as ResourceType[]).map((key) => (
                  <SelectItem key={key} value={key}>{resourceTypeLabels[key][lang]}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Price Option */}
          <div className="space-y-2">
            <Label>{isAr ? "خيار السعر" : "Price Option"}</Label>
            <div className="flex gap-2">
              <Button
                type="button"
                size="sm"
                variant={priceType === "free" ? "default" : "outline"}
                onClick={() => setPriceType("free")}
              >
                {isAr ? "مجاني" : "Free"}
              </Button>
              <Button
                type="button"
                size="sm"
                variant={priceType === "paid" ? "default" : "outline"}
                onClick={() => setPriceType("paid")}
              >
                {isAr ? "بالنقاط" : "Paid (Points)"}
              </Button>
            </div>
            {priceType === "paid" && (
              <Input type="number" placeholder={isAr ? "عدد النقاط" : "Points amount"} className="mt-2" />
            )}
          </div>

          {/* File Upload */}
          <div className="space-y-2">
            <Label>{isAr ? "رفع الملف" : "Upload File"}</Label>
            <div className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-secondary/50 transition-colors">
              <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">
                {isAr ? "اسحب الملف هنا أو اضغط للرفع" : "Drag file here or click to upload"}
              </p>
              <p className="text-xs text-muted-foreground mt-1">PDF, DOCX, PPTX, ZIP</p>
            </div>
          </div>

          {/* Preview Image */}
          <div className="space-y-2">
            <Label>{isAr ? "صورة معاينة (اختياري)" : "Preview Image (optional)"}</Label>
            <Input type="file" accept="image/*" />
          </div>

          <Button className="w-full font-semibold" size="lg">
            <Upload className="w-4 h-4 ml-2" />
            {isAr ? "نشر المورد" : "Publish Resource"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
