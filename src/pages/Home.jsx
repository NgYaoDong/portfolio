import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />

      {/* NavBar */}
      <NavBar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        {/* About Section */}
        <AboutSection />
        {/* Skills Section */}
        {/* Projects Section */}
        {/* Contact Section */}
      </main>

      {/* Footer */}
    </div>
  );
};
