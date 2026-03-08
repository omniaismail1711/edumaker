import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Briefcase, User, LayoutDashboard, GraduationCap, BookOpen, Sun, Moon, Globe, Award, Library } from "lucide-react";
import { useTheme } from "next-themes";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/i18n/translations";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const { lang, setLang, isRTL } = useLanguage();

  const navItems = [
    { label: t(translations.nav.home, lang), path: "/", icon: GraduationCap },
    { label: t(translations.nav.exploreTeachers, lang), path: "/explore", icon: Search },
    { label: t(translations.nav.courses, lang), path: "/course", icon: BookOpen },
    { label: t(translations.nav.jobs, lang), path: "/jobs", icon: Briefcase },
    { label: lang === "ar" ? "الشهادات" : "Certifications", path: "/certifications", icon: Award },
    { label: t(translations.nav.dashboard, lang), path: "/dashboard", icon: LayoutDashboard },
  ];

  const toggleLang = () => setLang(lang === "ar" ? "en" : "ar");
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt={t(translations.nav.platformName, lang)} className="w-10 h-10 object-contain" />
          <span className="text-xl font-bold text-foreground">{t(translations.nav.platformName, lang)}</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right side: lang, theme, CTA */}
        <div className="hidden md:flex items-center gap-2">
          {/* Language toggle */}
          <Button variant="ghost" size="sm" onClick={toggleLang} className="gap-1.5 text-xs">
            <Globe className="w-4 h-4" />
            {lang === "ar" ? "English" : "العربية"}
          </Button>

          {/* Theme toggle */}
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="relative overflow-hidden">
            <Sun className="w-4 h-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute w-4 h-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <Button variant="ghost" size="sm" asChild>
            <Link to="/profile/1">
              <User className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
              {t(translations.nav.myProfile, lang)}
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/auth">{t(translations.nav.startNow, lang)}</Link>
          </Button>
        </div>

        {/* Mobile: lang + theme + toggle */}
        <div className="flex md:hidden items-center gap-1">
          <Button variant="ghost" size="icon" onClick={toggleLang} className="h-9 w-9">
            <Globe className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9 relative overflow-hidden">
            <Sun className="w-4 h-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute w-4 h-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <button className="p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t overflow-hidden bg-card"
          >
            <div className="container py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              ))}
              <div className="border-t mt-2 pt-3 flex gap-2">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <Link to="/profile/1" onClick={() => setMobileOpen(false)}>{t(translations.nav.myProfile, lang)}</Link>
                </Button>
                <Button size="sm" className="flex-1" asChild>
                  <Link to="/auth" onClick={() => setMobileOpen(false)}>{t(translations.nav.startNow, lang)}</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
