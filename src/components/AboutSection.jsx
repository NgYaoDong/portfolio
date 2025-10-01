import { BriefcaseBusiness, Code, User } from "lucide-react";
import { handleRedirect } from "../lib/utils";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Hello! I'm Yao Dong, a software developer based in Singapore.
            </h3>
            <p className="text-muted-foreground">
              I specialise in building modern web applications using React,
              Node.js, and other cutting-edge technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a onClick={(e) => handleRedirect(e, "#contact")} className="cosmic-button">
                Get in Touch
              </a>
              <a
                href="https://ngyaodong.github.io/portfolio/docs/resume.pdf"
                target="_blank"
                className="cosmic-button-outline"
              >
                View My Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold mb-1">Developer</h4>
                  <p className="text-sm text-muted-foreground">
                    Passionate about crafting clean, efficient code and building
                    scalable web applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold mb-1">User Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    Committed to delivering intuitive and engaging user experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BriefcaseBusiness className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold mb-1">Professionalism</h4>
                  <p className="text-sm text-muted-foreground">
                    Dedicated to continuous learning and staying updated with
                    industry trends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
