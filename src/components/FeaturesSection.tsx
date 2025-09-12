import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Globe, 
  Zap, 
  Shield, 
  DollarSign,
  ExternalLink 
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Globe,
      title: "One API for Any Model",
      description: "Access all major models through a single, unified interface. OpenAI SDK works out of the box.",
      action: "Browse all",
      link: "/models",
    },
    {
      icon: Zap,
      title: "Higher Availability",
      description: "Ensure reliable access to AI models with our distributed infrastructure. Automatically route around provider outages.",
      action: "Learn more",
      link: "/status",
    },
    {
      icon: DollarSign,
      title: "Price and Performance",
      description: "Keep costs in check without sacrificing speed. A4F runs at the edge, adding just ~30ms between your users and their inference.",
      action: "Learn more",
      link: "/docs/provider-routing",
    },
    {
      icon: Shield,
      title: "Custom Data Policies",
      description: "Protect your organization with fine-grained data policies. Ensure prompts only go to the models and providers you trust.",
      action: "View docs",
      link: "/docs/data-policies",
    },
  ];

  return (
    <section className="py-20 bg-surface-elevated">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Simple Integration
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 border border-border-light bg-surface hover:shadow-lg transition-all duration-300 group">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-brand-purple bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-brand-purple" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    {feature.title}
                  </h3>
                </div>
                
                <p className="text-text-secondary leading-relaxed text-lg">
                  {feature.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="text-text-accent hover:text-text-accent p-0 h-auto font-medium group/btn"
                >
                  {feature.action}
                  <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;