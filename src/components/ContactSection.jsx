import {
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Send,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out!",
      });
      setIsSubmitting(false);
    }, 1500);

  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Whether you have a question or just want to say hi, my inbox is always
          open!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>
            <div className="space-y-6 justify-center md:pl-5 lg:pl-20">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Email</h4>
                  <a
                    href="mailto:ngyaodong@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ngyaodong@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-12">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Phone</h4>
                  <a
                    href="tel:+6598765432"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +65 9876 5432
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-16">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Location</h4>
                  <p className="text-muted-foreground hover:text-primary transition-colors">
                    Singapore
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-medium mb-4">
                Connect With <span className="text-primary">Me</span>
              </h4>
              <div className="flex space-x-4 justify-center">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/ngyaodong"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin />
                </a>
                <a
                  target="_blank"
                  href="https://instagram.com/ngyaodong"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/ngyaodong"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">
              Send a <span className="text-primary">Message</span>
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full p-3 border border-secondary/50 rounded-md bg-background text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full p-3 border border-secondary/50 rounded-md bg-background text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full p-3 border border-secondary/50 rounded-md bg-background text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  required
                />
              </div>
              <button
                className="cosmic-button w-full justify-center flex items-center gap-2"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"} <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
