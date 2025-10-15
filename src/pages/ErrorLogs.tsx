import { AlertTriangle, Code2, Lightbulb } from "lucide-react";

const ErrorLogs = () => {
  const errors = [
    {
      id: 1,
      name: "TypeError: Cannot read properties of undefined (me)",
      context: "Late night coding session after coffee #4",
      mood: "😭",
      date: "2024-03-15",
      fix: "Added optional chaining and remembered to check if I exist first",
      learned: "Always validate your inputs, including your life choices",
    },
    {
      id: 2,
      name: "Infinite Loop: Overthinking While Loop",
      context: "Trying to optimize code that didn't need optimizing",
      mood: "😐",
      date: "2024-03-10",
      fix: "Added a break statement and touched grass",
      learned: "Sometimes good enough is actually good enough",
    },
    {
      id: 3,
      name: "404: Motivation Not Found",
      context: "Monday morning, third bug in a row",
      mood: "🙃",
      date: "2024-03-08",
      fix: "Took a break, watched cat videos, came back stronger",
      learned: "Your mental health is not a nice-to-have, it's a dependency",
    },
  ];

  const commandments = [
    "Thou shalt not ignore console warnings.",
    "Thou shalt save before running.",
    "Thou shalt drink water while crying.",
    "Thou shalt read error messages completely.",
    "Thou shalt take breaks between debug sessions.",
  ];

  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-primary">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">Error Detected</h1>
          <p className="text-xl text-muted-foreground">
            Debug or Crashout? Tales of coding failures turned lessons.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {errors.map((error) => (
            <div
              key={error.id}
              className="bg-card border border-border rounded p-6 md:p-8 space-y-6 hover:border-primary transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <h3 className="text-xl font-bold text-primary">
                    {error.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{error.context}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-3xl">{error.mood}</span>
                  <span className="text-xs text-muted-foreground">{error.date}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Code2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold mb-1">The Fix:</p>
                    <p className="text-sm text-muted-foreground">{error.fix}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold mb-1">What I Learned:</p>
                    <p className="text-sm text-muted-foreground">{error.learned}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-secondary/50 border border-border rounded p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Laasya's Debug Commandments
            </h3>
            <ul className="space-y-3">
              {commandments.map((commandment, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary font-bold">{index + 1}.</span>
                  <span className="text-muted-foreground">{commandment}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorLogs;
