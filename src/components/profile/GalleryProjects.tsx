import { motion } from "framer-motion";
import { Images, Play, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface GalleryItem {
  title: string;
  caption: string;
  type: "image" | "youtube";
  url: string; // image src or youtube video ID
  tag: string;
}

interface GalleryProjectsProps {
  items: GalleryItem[];
}

function YouTubeEmbed({ videoId }: { videoId: string }) {
  return (
    <iframe
      className="w-full aspect-video rounded-lg"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

export default function GalleryProjects({ items }: GalleryProjectsProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="bg-card rounded-xl border p-6"
      >
        <h2 className="font-bold text-foreground mb-4 flex items-center gap-2">
          <Images className="w-5 h-5 text-primary" />
          معرض الأعمال والمشاريع
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="group border rounded-xl overflow-hidden card-elevated cursor-pointer"
              onClick={() => item.type === "youtube" && setSelectedVideo(item.url)}
            >
              {item.type === "youtube" ? (
                <div className="relative aspect-video bg-secondary">
                  <img
                    src={`https://img.youtube.com/vi/${item.url}/mqdefault.jpg`}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center group-hover:bg-foreground/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                      <Play className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="aspect-video bg-secondary">
                  <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-3">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-semibold text-foreground truncate">{item.title}</h4>
                  <Badge variant="outline" className="text-[10px] shrink-0">{item.tag}</Badge>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="sm:max-w-2xl p-2">
          {selectedVideo && <YouTubeEmbed videoId={selectedVideo} />}
        </DialogContent>
      </Dialog>
    </>
  );
}
