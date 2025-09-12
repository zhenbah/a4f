import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UserPlus, Key, Rocket, Github, Mail, Chrome } from "lucide-react";

const GettingStartedSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Signup",
      description: "Create an account to get started. You can set up an org for your team later.",
      content: (
        <div className="space-y-4">
          <p className="text-text-secondary">Sign up using your preferred method:</p>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Chrome className="w-4 h-4" />
              <span>Google</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </Button>
            <Button variant="outline" size="sm">
              Other methods
            </Button>
          </div>
        </div>
      ),
    },
    {
      icon: Key,
      title: "Get Your API Key",
      description: "Instantly generate your API key. Start exploring with our generous free tier – no credit card required to begin!",
      content: (
        <div className="space-y-4">
          <div className="bg-surface border border-border-light rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-text-secondary">A4F_API_KEY</span>
              </div>
              <Button size="sm" variant="outline">
                Copy API Key
              </Button>
            </div>
            <div className="mt-2 font-mono text-sm text-text-primary">
              ddc-a4f-••••••••••••
            </div>
          </div>
          <div className="text-sm text-brand-purple font-medium">
            Generous Free Tier Included
          </div>
        </div>
      ),
    },
    {
      icon: Rocket,
      title: "Explore & Scale",
      description: "Integrate powerful AI models into your applications. When you're ready for more, easily upgrade or buy credits for higher limits and premium features.",
      content: (
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-text-secondary">Access 300+ Models</p>
            <p className="text-sm text-text-secondary">Start with the Free plan, then scale.</p>
          </div>
          <Button className="bg-brand-purple hover:bg-brand-purple-dark text-white">
            View Plans & Pricing
          </Button>
          <p className="text-xs text-text-secondary">
            Only pay for what you need beyond the free tier.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Get Started in 3 Easy Steps
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our platform is designed for simplicity and power, enabling you to integrate advanced AI capabilities into your applications effortlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 border border-border-light bg-surface-elevated hover:shadow-lg transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-brand-purple bg-opacity-10">
                    <step.icon className="w-6 h-6 text-brand-purple" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-text-primary">{step.title}</h3>
                    <div className="text-xs bg-brand-purple-light text-brand-purple-dark px-2 py-1 rounded-full font-medium">
                      Step {index + 1}
                    </div>
                  </div>
                </div>
                
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
                
                <div>{step.content}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GettingStartedSection;