import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import ChatBot from "@/components/ChatBot";
import Index from "./pages/Index";
import ExploreTeachers from "./pages/ExploreTeachers";
import TeacherProfile from "./pages/TeacherProfile";
import Jobs from "./pages/Jobs";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Course from "./pages/Course";
import CourseFundamental from "./pages/CourseFundamental";
import CourseAdvanced from "./pages/CourseAdvanced";
import Certifications from "./pages/Certifications";
import CourseLibrary from "./pages/CourseLibrary";
import ProjectManagement from "./pages/ProjectManagement";
import ChooseAccountType from "./pages/ChooseAccountType";
import OrgRegistration from "./pages/OrgRegistration";
import OrgDashboard from "./pages/OrgDashboard";
import ResourceLibrary from "./pages/ResourceLibrary";
import Marketplace from "./pages/Marketplace";
import FutureTeacherProgram from "./pages/FutureTeacherProgram";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ChatBot />
            <Routes>
              <Route path="/auth" element={<Auth />} />
              <Route path="/choose-account" element={<ChooseAccountType />} />
              <Route path="/auth/organization" element={<OrgRegistration />} />
              <Route path="*" element={
                <>
                  <Navbar />
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/explore" element={<ExploreTeachers />} />
                    <Route path="/profile/:id" element={<TeacherProfile />} />
                    <Route path="/jobs" element={<Jobs />} />
                    <Route path="/course" element={<Course />} />
                    <Route path="/course/fundamental" element={<CourseFundamental />} />
                    <Route path="/course/advanced" element={<CourseAdvanced />} />
                    <Route path="/certifications" element={<Certifications />} />
                    <Route path="/library" element={<CourseLibrary />} />
                    <Route path="/projects" element={<ProjectManagement />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/org-dashboard" element={<OrgDashboard />} />
                    <Route path="/resources" element={<ResourceLibrary />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </>
              } />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
