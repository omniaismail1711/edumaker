import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Index from "./pages/Index";
import ExploreTeachers from "./pages/ExploreTeachers";
import TeacherProfile from "./pages/TeacherProfile";
import Jobs from "./pages/Jobs";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Course from "./pages/Course";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Auth page without navbar */}
          <Route path="/auth" element={<Auth />} />
          {/* All other pages with navbar */}
          <Route path="*" element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/explore" element={<ExploreTeachers />} />
                <Route path="/profile/:id" element={<TeacherProfile />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
