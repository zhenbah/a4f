import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TopAppsSection = () => {
  const topApps = [
    {
      rank: 1,
      name: "Cline",
      description: "Cline is an AI-powered command-line tool that acts as your coding assistant...",
      tokens: "44.6B tokens",
      icon: "C",
      color: "bg-blue-600",
    },
    {
      rank: 2,
      name: "Roo Code",
      description: "Roo Code is a platform and toolset designed to facilitate development...",
      tokens: "39.4B tokens",
      icon: "R",
      color: "bg-green-600",
    },
    {
      rank: 3,
      name: "liteLLM",
      description: "liteLLM is an open-source library that simplifies working with multiple LLMs...",
      tokens: "2.82B tokens",
      icon: "L",
      color: "bg-purple-600",
    },
    {
      rank: 4,
      name: "Aider",
      description: "Aider is an AI pair programming tool that works directly in your terminal...",
      tokens: "562M tokens",
      icon: "A",
      color: "bg-orange-600",
    },
    {
      rank: 5,
      name: "Open WebUI",
      description: "Open WebUI is an extensible, self-hosted user interface for AI models...",
      tokens: "495M tokens",
      icon: "O",
      color: "bg-red-600",
    },
    {
      rank: 6,
      name: "N8N",
      description: "N8N is a workflow automation tool that enables you to connect various services...",
      tokens: "234M tokens",
      icon: "N",
      color: "bg-indigo-600",
    },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Top Apps
            </h2>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-surface-elevated">
                Today
              </Badge>
              <p className="text-text-secondary">
                Largest public users who value <span className="text-text-accent underline">Privacy</span> regarding usage tracking on A4F.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topApps.map((app) => (
              <Card key={app.rank} className="p-6 border border-border-light bg-surface-elevated hover:shadow-lg transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-lg font-bold text-text-secondary w-6">
                        {app.rank}.
                      </div>
                      <div className={`w-10 h-10 rounded-lg ${app.color} flex items-center justify-center text-white font-bold`}>
                        {app.icon}
                      </div>
                    </div>
                    <div className="flex-1 space-y-1">
                      <h3 className="font-semibold text-text-primary">
                        {app.name}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {app.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Badge variant="outline" className="text-text-accent border-text-accent">
                      {app.tokens}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopAppsSection;