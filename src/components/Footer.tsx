import { Github, Linkedin, Mail, Code2, Terminal } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a
              href="https://github.com/mlaasya07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mlaasya07/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.codingame.com/profile/1926e3967e6d68739783fc04eba77d9a5852966"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="CodinGame"
            >
              <Code2 className="w-5 h-5" />
            </a>
            <a
              href="https://leetcode.com/u/ydHg4pM34m/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LeetCode"
            >
              <Terminal className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@laasya.dev"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              "Errors don't scare me anymore. People do."
            </p>
            <p className="text-xs text-muted-foreground">
              © {currentYear} Laasya. Built with caffeine and chaos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
