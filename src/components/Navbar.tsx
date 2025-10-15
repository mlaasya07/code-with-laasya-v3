import { Link, useLocation } from "react-router-dom";
import { Terminal } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const links = [
    { path: "/", label: "home" },
    { path: "/projects", label: "projects" },
    { path: "/errors", label: "error_logs" },
    { path: "/videos", label: "video_zone" },
    { path: "/ideas", label: "idea_journal" },
    { path: "/tips", label: "tips_&_tricks" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Terminal className="w-5 h-5 text-primary group-hover:text-foreground transition-colors" />
            <span className="text-sm font-semibold tracking-tight">
              Code.With.Laasya
            </span>
          </Link>
          
          <div className="flex items-center gap-1 md:gap-2">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 text-xs md:text-sm rounded transition-colors ${
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-card"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
