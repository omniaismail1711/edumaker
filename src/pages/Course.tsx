import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles, Play, ChevronDown, BookOpen, Cpu, Layers, ClipboardCheck, PenTool, Bot,
  GraduationCap, ArrowLeft, ArrowRight, CheckCircle2, Lightbulb, Rocket, BarChart3, Monitor,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/i18n/translations";
import RecommendedCourses from "@/components/RecommendedCourses";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const aiTools = [
  { name: "ChatGPT", color: "from-[hsl(170,60%,45%)] to-[hsl(170,50%,55%)]" },
  { name: "Google Gemini", color: "from-[hsl(210,70%,55%)] to-[hsl(230,60%,60%)]" },
];

export default function Course() {
  const { lang, isRTL } = useLanguage();
  const c = translations.course;
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const fundamentalTopics = [
    { icon: Lightbulb, text: t(c.fundamentalTopics.intro, lang) },
    { icon: PenTool, text: t(c.fundamentalTopics.prompting, lang) },
    { icon: Layers, text: t(c.fundamentalTopics.content, lang) },
    { icon: ClipboardCheck, text: t(c.fundamentalTopics.assessment, lang) },
  ];

  const advancedTopics = [
    { icon: Cpu, text: t(c.advancedTopics.tools, lang) },
    { icon: Monitor, text: t(c.advancedTopics.design, lang) },
    { icon: BarChart3, text: t(c.advancedTopics.analytics, lang) },
    { icon: Rocket, text: t(c.advancedTopics.projects, lang) },
  ];

  const journeySteps = [
    { icon: BookOpen, label: t(c.introduction, lang), sub: t(c.introSub, lang) },
    { icon: GraduationCap, label: t(c.fundamentalTitle, lang), sub: t(c.fundamentalSub, lang) },
    { icon: Rocket, label: t(c.advancedTitle, lang), sub: t(c.advancedSub, lang) },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 via-[hsl(260,40%,65%/0.08)] to-accent/5" />
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

        <div className="container relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-6 px-4 py-1.5 text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">
              <Sparkles className={`w-4 h-4 ${isRTL ? "ml-1" : "mr-1"}`} />
              {t(c.badge, lang)}
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              {t(c.title, lang)}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto mb-6 leading-relaxed">
              {t(c.desc, lang)}
            </p>
            <p className="text-muted-foreground/80 text-sm max-w-2xl mx-auto mb-10">
              {t(c.twoTracks, lang)}
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {aiTools.map((tool, i) => (
                <motion.div key={tool.name} custom={i} variants={fadeUp} initial="hidden" animate="visible"
                  className={`bg-gradient-to-r ${tool.color} text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md`}>
                  {tool.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Choose Track */}
      <section className="py-20 bg-secondary/30">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t(c.chooseTrack, lang)}</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Fundamental */}
            <motion.div initial={{ opacity: 0, x: isRTL ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Card className="card-elevated h-full border-primary/20 overflow-hidden group relative">
                <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`bg-gradient-to-${isRTL ? "l" : "r"} from-primary/10 to-transparent h-1`} />
                <CardContent className="p-8 relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{t(c.fundamentalTitle, lang)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{t(c.fundamentalDesc, lang)}</p>
                  <div className="space-y-3 mb-8 flex-1">
                    {fundamentalTopics.map((tp, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <tp.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span>{tp.text}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild size="lg" className="w-full text-base py-6 rounded-xl">
                    <Link to="/course/fundamental">
                      {t(c.exploreFundamental, lang)}
                      <ArrowIcon className={`w-5 h-5 ${isRTL ? "mr-2" : "ml-2"}`} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Advanced */}
            <motion.div initial={{ opacity: 0, x: isRTL ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
              <Card className="card-elevated h-full border-accent/20 overflow-hidden group relative">
                <div className="absolute inset-0 bg-gradient-to-bl from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`bg-gradient-to-${isRTL ? "l" : "r"} from-accent/30 to-primary/10 h-1`} />
                <CardContent className="p-8 relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                    <Rocket className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-foreground">{t(c.advancedTitle, lang)}</h3>
                    <Badge className="bg-accent/10 text-accent border-accent/20 text-xs">PRO</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t(c.advancedDesc, lang)}</p>
                  <div className="flex gap-2 mb-6">
                    <Badge variant="secondary" className="text-xs">Microsoft</Badge>
                    <Badge variant="secondary" className="text-xs">Google</Badge>
                  </div>
                  <div className="space-y-3 mb-8 flex-1">
                    {advancedTopics.map((tp, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <tp.icon className="w-4 h-4 text-accent" />
                        </div>
                        <span>{tp.text}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild size="lg" variant="outline" className="w-full text-base py-6 rounded-xl border-accent/30 hover:bg-accent/5">
                    <Link to="/course/advanced">
                      {t(c.exploreAdvanced, lang)}
                      <ArrowIcon className={`w-5 h-5 ${isRTL ? "mr-2" : "ml-2"}`} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Journey Timeline */}
      <section className="py-20">
        <div className="container max-w-5xl mx-auto px-4">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t(c.learningJourney, lang)}</h2>
            <p className="text-muted-foreground">{t(c.journeyDesc, lang)}</p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
            {journeySteps.map((step, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col md:flex-row items-center">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center shadow-sm border border-primary/10">
                    <step.icon className="w-9 h-9 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mt-4 text-lg">{step.label}</h3>
                  <p className="text-muted-foreground text-sm">{step.sub}</p>
                </div>
                {i < journeySteps.length - 1 && (
                  <>
                    <ChevronDown className="w-6 h-6 text-primary/40 my-2 md:hidden" />
                    <div className="hidden md:flex items-center mx-6">
                      <div className="w-16 h-[2px] bg-primary/20 rounded-full" />
                      <ArrowIcon className={`w-5 h-5 text-primary/40 ${isRTL ? "-mr-1" : "-ml-1"}`} />
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
