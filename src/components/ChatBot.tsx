import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/i18n/translations";

interface Message {
  id: number;
  role: "bot" | "user";
  text: string;
}

const faqData: { keywords: string[]; ar: string; en: string }[] = [
  {
    keywords: ["تسجيل", "حساب", "register", "signup", "account", "sign up"],
    ar: "يمكنك إنشاء حساب مجاني من صفحة التسجيل. اضغط على 'إنشاء حساب' في القائمة العلوية واتبع الخطوات الست لإكمال ملفك المهني.",
    en: "You can create a free account from the registration page. Click 'Sign Up' in the top menu and follow the 6 steps to complete your professional profile.",
  },
  {
    keywords: ["دورة", "دورات", "course", "courses", "تدريب", "training"],
    ar: "نقدم برنامج 'الذكاء الاصطناعي للمعلمين' بمستويين: تأسيسي (12 ساعة) ومتقدم (20 ساعة). يمكنك استكشافها من قسم 'الدورات' في القائمة.",
    en: "We offer the 'AI for Teachers' program with two levels: Fundamental (12 hours) and Advanced (20 hours). Explore them from the 'Courses' section in the menu.",
  },
  {
    keywords: ["شهادة", "شهادات", "certificate", "certification", "توثيق"],
    ar: "عند إتمام أي دورة تدريبية، تحصل على شهادة إتمام معتمدة من صُنّاع التعليم يمكنك إضافتها لملفك المهني.",
    en: "Upon completing any training course, you receive a verified completion certificate from EduMakers that you can add to your professional profile.",
  },
  {
    keywords: ["توظيف", "عمل", "وظيفة", "job", "hire", "employment", "فرص"],
    ar: "يمكنك تصفح فرص العمل المتاحة من قسم 'الوظائف'. تأكد من تفعيل خيار 'متاح للتوظيف' في إعدادات ملفك الشخصي.",
    en: "You can browse available jobs from the 'Jobs' section. Make sure to enable 'Available for Hire' in your profile settings.",
  },
  {
    keywords: ["ملف", "profile", "بروفايل", "شخصي"],
    ar: "ملفك الشخصي يعرض مهاراتك وشهاداتك ومعرض أعمالك. يمكنك تعديله في أي وقت من لوحة التحكم.",
    en: "Your profile displays your skills, certificates, and portfolio. You can edit it anytime from the dashboard.",
  },
  {
    keywords: ["اشتراك", "مميز", "premium", "subscription", "عضوية"],
    ar: "العضوية المميزة تمنحك شارة التوثيق الذهبية، ظهور مميز في البحث، وصول للدورات الحصرية، وأولوية في التوظيف. السعر 49 ج.م شهرياً.",
    en: "Premium membership gives you a gold verification badge, featured search placement, access to exclusive courses, and job priority. Price: EGP 49/month.",
  },
  {
    keywords: ["ذكاء", "اصطناعي", "ai", "artificial", "intelligence", "chatgpt", "gemini"],
    ar: "نقدم دورات متخصصة في الذكاء الاصطناعي للمعلمين تشمل ChatGPT، Google Gemini، Microsoft Copilot وأدوات أخرى.",
    en: "We offer specialized AI courses for teachers covering ChatGPT, Google Gemini, Microsoft Copilot, and other tools.",
  },
];

function findAnswer(question: string, lang: "ar" | "en"): string {
  const q = question.toLowerCase();
  for (const faq of faqData) {
    if (faq.keywords.some((kw) => q.includes(kw.toLowerCase()))) {
      return lang === "ar" ? faq.ar : faq.en;
    }
  }
  return lang === "ar"
    ? "عذراً، لم أتمكن من فهم سؤالك. يمكنك سؤالي عن: التسجيل، الدورات، الشهادات، التوظيف، الملف الشخصي، أو الاشتراك المميز."
    : "Sorry, I couldn't understand your question. You can ask me about: registration, courses, certificates, jobs, profile, or premium subscription.";
}

export default function ChatBot() {
  const { lang } = useLanguage();
  const cb = translations.chatbot;
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, role: "bot", text: t(cb.greeting, lang) },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now(), role: "user", text: input.trim() };
    const answer = findAnswer(input.trim(), lang);
    setMessages((prev) => [...prev, userMsg, { id: Date.now() + 1, role: "bot", text: answer }]);
    setInput("");
  };

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 left-6 z-50 w-80 sm:w-96 bg-card border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            style={{ height: "28rem" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-primary text-primary-foreground px-4 py-3">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5" />
                <span className="font-semibold text-sm">{t(cb.title, lang)}</span>
              </div>
              <button onClick={() => setOpen(false)} className="hover:bg-primary-foreground/20 rounded-full p-1 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`flex items-start gap-2 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${msg.role === "bot" ? "bg-primary/10" : "bg-secondary"}`}>
                      {msg.role === "bot" ? <Bot className="w-3.5 h-3.5 text-primary" /> : <User className="w-3.5 h-3.5 text-muted-foreground" />}
                    </div>
                    <div className={`rounded-xl px-3 py-2 text-sm leading-relaxed ${msg.role === "bot" ? "bg-secondary text-foreground" : "bg-primary text-primary-foreground"}`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="border-t p-3 flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder={t(cb.placeholder, lang)}
                className="flex-1 text-sm"
              />
              <Button size="icon" onClick={send} className="shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
