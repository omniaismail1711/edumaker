import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Briefcase, User, LayoutDashboard, GraduationCap } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "الرئيسية", path: "/", icon: GraduationCap },
  { label: "استكشاف المعلمين", path: "/explore", icon: Search },
  { label: "الدورة التدريبية", path: "/course", icon: BookOpen },
  { label: "الوظائف", path: "/jobs", icon: Briefcase },
  { label: "لوحة التحكم", path: "/dashboard", icon: LayoutDashboard },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="صِنّاع التعليم" className="w-10 h-10 object-contain" />
          <span className="text-xl font-bold text-foreground">صِنّاع التعليم</span>
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

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/profile/1">
              <User className="w-4 h-4 ml-2" />
              ملفي
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/auth">ابدأ الآن</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
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
                  <Link to="/profile/1" onClick={() => setMobileOpen(false)}>ملفي</Link>
                </Button>
                <Button size="sm" className="flex-1" asChild>
                  <Link to="/auth" onClick={() => setMobileOpen(false)}>ابدأ الآن</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
