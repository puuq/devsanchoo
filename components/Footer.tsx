import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t pixel-grid">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="pixel-text text-sm font-bold tracking-wider">
              SANTOSH RAI
            </Link>
            <p className="text-sm text-muted-foreground">
              Building digital experiences with code and creativity.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/puuq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/santosh-rai-91338317a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            {/* <Link
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link> */}
            <Link
              href="mailto:your.santoshrai3.1415@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
        
        {/* <div className="mt-8 border-t pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Your Name. All rights reserved.
          </p>
        </div> */}
      </div>
    </footer>
  );
}