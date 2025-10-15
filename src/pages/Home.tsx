import { Link } from "react-router-dom";
import { ArrowRight, Code2, Terminal, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Status: Currently debugging life</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Hi, I'm Laasya —<br />
            I debug feelings<br />
            and functions.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Welcome to my world of projects, mistakes, and code-induced emotional breakdowns.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button asChild size="lg" className="gap-2 bg-primary hover:bg-primary/90">
              <Link to="/projects">
                See My Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link to="/tips">
                Learn With Me
                <Code2 className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded p-8 md:p-12 space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <Heart className="w-6 h-6" />
              <h2 className="text-2xl md:text-3xl font-bold">About This Space</h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                "Started coding to make a calculator, ended up calculating heartbreaks."
              </p>
              
              <p>
                This is my creative hub where I document coding projects, debugging struggles, 
                wild ideas, and my emotional journey through tech. It's honest, it's chaotic, 
                and it's all real.
              </p>
              
              <p>
                Here you'll find projects I built with passion (and caffeine), error logs that 
                taught me patience, video clips of my coding journey, random ideas that may or 
                may not exist someday, and tips I wish someone told me earlier.
              </p>
            </div>
            
            <div className="pt-4 border-t border-border">
              <p className="text-sm italic text-muted-foreground">
                Tagline: "Code, cry, coffee, repeat."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Reel Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Featured: Things I Built for Him</h2>
          <p className="text-muted-foreground">
            (Spoiler: There's no him — just passion projects and debug tears)
          </p>
          
          <div className="aspect-video bg-card border border-border rounded overflow-hidden flex items-center justify-center">
            <div className="text-center space-y-3">
              <Terminal className="w-12 h-12 text-primary mx-auto" />
              <p className="text-muted-foreground">Video reel coming soon...</p>
              <Button asChild variant="outline" size="sm">
                <Link to="/videos">Browse Video Zone</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Projects",
              description: "Things I built for him (but mostly for me)",
              link: "/projects",
              icon: Code2,
            },
            {
              title: "Error Logs",
              description: "Debug or crashout? Tales of coding failures",
              link: "/errors",
              icon: Terminal,
            },
            {
              title: "Idea Journal",
              description: "Half-built experiments and design notes",
              link: "/ideas",
              icon: Heart,
            },
          ].map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="group bg-card border border-border rounded p-6 hover:border-primary transition-all"
            >
              <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
