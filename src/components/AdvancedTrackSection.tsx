import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles, ChevronLeft, ChevronRight, CheckCircle2, Zap, Rocket, Clock, Monitor,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/i18n/translations";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const MicrosoftLogo = () => (
  <svg viewBox="0 0 21 21" className="w-8 h-8">
    <rect x="1" y="1" width="9" height="9" fill="#f25022" />
    <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
    <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
    <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
  </svg>
);

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

function TrackCard({
  logo, title, description, topics, glowColor, index,
}: {
  logo: React.ReactNode; title: string; description: string; topics: string[]; glowColor: string; index: number;
}) {
  return (
    <motion.div custom={index} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative group">
      <div className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${glowColor}`} />
      <Card className="relative card-elevated border-border/40 bg-card/90 backdrop-blur-sm overflow-hidden h-full">
        <div className={`h-1 bg-gradient-to-l ${glowColor}`} />
        <CardContent className="p-6 md:p-8">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-xl bg-secondary/80 flex items-center justify-center shadow-sm">{logo}</div>
            <h3 className="text-xl font-bold text-foreground">{title}</h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">{description}</p>
          <div className="space-y-3">
            {topics.map((topic, i) => (
              <div key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function AdvancedTrackSection() {
  const { lang, isRTL } = useLanguage();
  const s = translations.advancedSection;
  const ArrowIcon = isRTL ? ChevronLeft : ChevronRight;

  const microsoftTopics = Object.values(s.microsoftTopics).map(v => t(v, lang));
  const googleTopics = Object.values(s.googleTopics).map(v => t(v, lang));

  const benefits = [
    { icon: Zap, title: t(s.benefitAdvancedSkills, lang), desc: t(s.benefitAdvancedSkillsDesc, lang) },
    { icon: Monitor, title: t(s.benefitTools, lang), desc: t(s.benefitToolsDesc, lang) },
    { icon: Clock, title: t(s.benefitProductivity, lang), desc: t(s.benefitProductivityDesc, lang) },
    { icon: Rocket, title: t(s.benefitDigital, lang), desc: t(s.benefitDigitalDesc, lang) },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-[hsl(260,35%,55%/0.08)] via-[hsl(210,50%,50%/0.06)] to-[hsl(350,40%,70%/0.05)]" />
      <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-[hsl(260,40%,60%/0.1)] blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-[hsl(210,55%,50%/0.08)] blur-3xl" />

      <div className="container relative z-10 max-w-5xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent-foreground border border-accent/20 text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            {t(s.nextStep, lang)}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t(s.sectionTitle, lang)}</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-base md:text-lg leading-relaxed">{t(s.sectionDesc, lang)}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <TrackCard
            logo={<MicrosoftLogo />}
            title="Microsoft AI for Education"
            description={t(s.microsoftDesc, lang)}
            topics={microsoftTopics}
            glowColor="from-[hsl(210,70%,55%/0.3)] to-[hsl(190,60%,50%/0.15)]"
            index={0}
          />
          <TrackCard
            logo={<GoogleLogo />}
            title="Google AI for Education"
            description={t(s.googleDesc, lang)}
            topics={googleTopics}
            glowColor="from-[hsl(140,50%,45%/0.3)] to-[hsl(45,80%,55%/0.15)]"
            index={1}
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {benefits.map((b, i) => (
            <motion.div key={i} custom={i + 2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="card-elevated border-border/40 bg-card/70 backdrop-blur-sm h-full">
                <CardContent className="p-5 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <b.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground text-sm mb-1">{b.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <Button size="lg" className="text-base px-10 py-6 rounded-xl shadow-lg">
            {t(s.exploreAdvanced, lang)}
            <ArrowIcon className={`w-5 h-5 ${isRTL ? "mr-1" : "ml-1"}`} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
