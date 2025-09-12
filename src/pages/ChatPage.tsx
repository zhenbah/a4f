import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Sparkles, 
  Zap,
  ArrowRight,
  ExternalLink,
  Laptop,
  Smartphone
} from "lucide-react";
import Header from "@/components/Header";
import ProductHuntBanner from "@/components/ProductHuntBanner";

const ChatPage = () => {
  const playgrounds = [
    {
      title: "Playground V1",
      subtitle: "The classic playground experience",
      description: "Stable with familiar features, currently in beta testing.",
      features: [
        "Robust core functionality",
        "Wide model compatibility", 
        "Basic, straightforward UI/UX"
      ],
      knownIssues: [
        "UI responsiveness on very small screens can be improved.",
        "Response streaming might occasionally lag under high load.",
        "Fewer advanced customization options compared to V2."
      ],
      link: "https://chat.a4f.co/",
      icon: Laptop,
      color: "bg-blue-500",
    },
    {
      title: "Playground V2",
      subtitle: "Our next-generation playground",
      description: "Enhanced features and a modern interface, also in beta.",
      features: [
        "Modern, intuitive user interface",
        "Advanced features and settings panel",
        "Improved performance (experimental)"
      ],
      knownIssues: [
        "Some niche models might have minor integration quirks.",
        "Occasional visual glitches during complex interactions.",
        "New features are still under active development and refinement."
      ],
      link: "https://playground.a4f.co/",
      icon: Smartphone,
      color: "bg-brand-purple",
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <ProductHuntBanner />
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MessageSquare className="w-8 h-8 text-brand-purple" />
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
              Choose Your Chat Playground
            </h1>
          </div>
          
          <div className="flex items-center justify-center space-x-2">
            <p className="text-xl text-text-secondary">
              Both our playgrounds are currently in
            </p>
            <Badge className="bg-orange-100 text-orange-800">Beta</Badge>
          </div>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            We're actively working on improvements and appreciate your feedback!
          </p>
        </div>

        {/* Playground Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {playgrounds.map((playground, index) => {
            const IconComponent = playground.icon;
            
            return (
              <Card key={index} className={`relative p-8 border bg-surface-elevated hover:shadow-lg transition-all duration-300 group ${playground.featured ? "border-brand-purple ring-2 ring-brand-purple ring-opacity-20" : "border-border-light"}`}>
                {playground.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-brand-purple text-white px-4 py-1">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Next-Gen
                    </Badge>
                  </div>
                )}
                
                <div className="space-y-6">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${playground.color} bg-opacity-10`}>
                        <IconComponent className={`w-8 h-8 ${playground.color.replace('bg-', 'text-')}`} />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="text-2xl font-bold text-text-primary">{playground.title}</h3>
                          <Badge variant="outline" className="text-xs">Beta</Badge>
                        </div>
                        <p className="text-text-secondary">{playground.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-text-primary leading-relaxed">
                      {playground.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-text-primary flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-green-600" />
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {playground.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                          <span className="text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Known Issues */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-text-primary flex items-center">
                      <MessageSquare className="w-4 h-4 mr-2 text-orange-600" />
                      Known Issues (Beta):
                    </h4>
                    <ul className="space-y-2">
                      {playground.knownIssues.map((issue, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                          <span className="text-text-secondary">{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Feedback Buttons */}
                  <div className="flex items-center space-x-4 py-4">
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="ghost" className="text-green-600 hover:text-green-700 p-1">
                        👍 Like
                      </Button>
                      <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700 p-1">
                        👎 Dislike
                      </Button>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    className={`w-full group/btn ${playground.featured ? "bg-brand-purple hover:bg-brand-purple-dark text-white" : ""}`}
                    variant={playground.featured ? "default" : "outline"}
                  >
                    Try {playground.title}
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Feedback Section */}
        <Card className="p-8 border border-border-light bg-surface-elevated text-center">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <MessageSquare className="w-6 h-6 text-brand-purple" />
              <h3 className="text-xl font-semibold text-text-primary">
                Your feedback is invaluable
              </h3>
            </div>
            
            <p className="text-text-secondary max-w-2xl mx-auto">
              Please share your thoughts on our support channels. We're constantly improving 
              both playgrounds based on user feedback and usage patterns.
            </p>
            
            <Button variant="outline" className="text-text-accent hover:text-text-accent">
              View Support Channels
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>

        {/* Coming Soon Features */}
        <div className="mt-16 text-center space-y-6">
          <h2 className="text-2xl font-bold text-text-primary">Coming Soon</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border border-border-light bg-surface-elevated">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-brand-purple bg-opacity-10 rounded-lg flex items-center justify-center mx-auto">
                  <Zap className="w-6 h-6 text-brand-purple" />
                </div>
                <h4 className="font-semibold text-text-primary">Real-time Collaboration</h4>
                <p className="text-sm text-text-secondary">
                  Share and collaborate on conversations with your team in real-time.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 border border-border-light bg-surface-elevated">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-blue-500 bg-opacity-10 rounded-lg flex items-center justify-center mx-auto">
                  <MessageSquare className="w-6 h-6 text-blue-500" />
                </div>
                <h4 className="font-semibold text-text-primary">Custom Templates</h4>
                <p className="text-sm text-text-secondary">
                  Save and reuse conversation templates for common use cases.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 border border-border-light bg-surface-elevated">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-green-500 bg-opacity-10 rounded-lg flex items-center justify-center mx-auto">
                  <Sparkles className="w-6 h-6 text-green-500" />
                </div>
                <h4 className="font-semibold text-text-primary">Advanced Analytics</h4>
                <p className="text-sm text-text-secondary">
                  Track usage patterns and optimize your AI interactions.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;