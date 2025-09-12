import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const featuredModels = [
    {
      name: "Gemini 2.5 Pro 0605",
      provider: "google",
      isNew: true,
      tokens: "70.9B Tokens/wk",
      latency: "10.8s Latency",
      change: "+165.62%",
      changePositive: false,
    },
    {
      name: "Claude Opus 4",
      provider: "anthropic",
      isNew: true,
      tokens: "18.9B Tokens/wk", 
      latency: "633ms Latency",
      change: "-4.13%",
      changePositive: true,
    },
    {
      name: "Claude Sonnet 4",
      provider: "anthropic",
      isNew: false,
      tokens: "324.8B Tokens/wk",
      latency: "1.4s Latency", 
      change: "+4.33%",
      changePositive: false,
    },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-text-primary">A4F: Your</span>
                <br />
                <span 
                  className="bg-gradient-to-r from-brand-purple to-brand-purple-dark bg-clip-text text-transparent"
                >
                  Unified
                </span>
                <span className="text-text-primary"> AI Gateway</span>
              </h1>
              
              <p className="text-xl text-text-secondary leading-relaxed">
                Better prices, better uptime. Access hundreds of LLMs through one standard API. No subscriptions.
              </p>
            </div>

            {/* Try Input */}
            <div className="flex items-center space-x-3 bg-surface-elevated border border-border-light rounded-full p-2 max-w-md shadow-sm">
              <input
                type="text"
                placeholder="Try sending a message..."
                className="flex-1 px-4 py-2 bg-transparent border-none outline-none text-text-primary placeholder-text-secondary"
              />
              <Button size="sm" className="bg-brand-purple hover:bg-brand-purple-dark text-white rounded-full px-6">
                Send
              </Button>
            </div>
          </div>

          {/* Right Side - Featured Models */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-text-primary">Featured Models</h3>
              <Button variant="ghost" size="sm" className="text-text-accent hover:text-text-accent">
                View Trending <ExternalLink className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              {featuredModels.map((model, index) => (
                <Card key={index} className="p-4 border border-border-light bg-surface-elevated hover:shadow-md transition-all duration-200">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 bg-text-secondary rounded"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium text-text-primary">{model.name}</h4>
                          {model.isNew && (
                            <Badge className="bg-brand-purple-light text-brand-purple-dark text-xs">
                              New
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-text-secondary">by {model.provider}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3 text-sm">
                    <span className="text-text-secondary">{model.tokens}</span>
                    <span className="text-text-secondary">{model.latency}</span>
                    <span className={`flex items-center ${model.changePositive ? 'text-green-600' : 'text-orange-600'}`}>
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {model.change}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;