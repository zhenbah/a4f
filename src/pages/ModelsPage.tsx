import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Eye, 
  Zap, 
  MessageSquare,
  Image,
  FileText,
  Volume2
} from "lucide-react";
import Header from "@/components/Header";
import ProductHuntBanner from "@/components/ProductHuntBanner";

const ModelsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProvider, setSelectedProvider] = useState("All Providers");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedTier, setSelectedTier] = useState("All Tiers");

  const providers = [
    "All Providers", "OpenAI", "Anthropic", "Google", "Meta", "Mistral", 
    "xAI", "DeepSeek", "Groq", "Perplexity", "Black Forest Labs"
  ];

  const types = [
    "All Types", "Chat & Completion", "Images & Generation", "Audio & Speech", 
    "Embeddings", "Images & Edits", "Audio & Transcriptions"
  ];

  const tiers = ["All Tiers", "Free Tier", "Basic Tier", "Pro Tier"];

  const models = [
    {
      name: "gpt-5-nano",
      provider: "OpenAI",
      description: "The smallest and most cost-effective model, designed for high-volume, low-latency tasks like autocomplete.",
      context: "400k",
      uptime: "99.94%",
      type: "Chat & Completion",
      tier: "Free Tier",
      features: ["Vision", "Function Calling"],
      isBeta: true,
    },
    {
      name: "gpt-4o-mini",
      provider: "OpenAI", 
      description: "Cost-efficient, advanced model for diverse AI applications.",
      context: "128k",
      uptime: "99.93%",
      type: "Chat & Completion",
      tier: "Basic Tier",
      features: ["Vision", "Function Calling"],
      isBeta: true,
    },
    {
      name: "claude-sonnet-4",
      provider: "Anthropic",
      description: "Anthropic's most balanced model for a wide range of tasks.",
      context: "200k",
      uptime: "99.95%",
      type: "Chat & Completion", 
      tier: "Pro Tier",
      features: ["Vision", "Function Calling"],
      isBeta: false,
    },
    {
      name: "claude-opus-4",
      provider: "Anthropic",
      description: "Anthropic's most powerful model for complex reasoning tasks.",
      context: "200k",
      uptime: "99.92%", 
      type: "Chat & Completion",
      tier: "Pro Tier",
      features: ["Vision", "Function Calling"],
      isBeta: true,
    },
    {
      name: "gemini-2.5-pro-0605",
      provider: "Google",
      description: "Google's latest and most capable multimodal model.",
      context: "1M",
      uptime: "99.97%",
      type: "Chat & Completion",
      tier: "Pro Tier", 
      features: ["Vision", "Function Calling"],
      isBeta: true,
    },
    {
      name: "dall-e-3",
      provider: "OpenAI",
      description: "OpenAI's most advanced image generation model.",
      context: "N/A",
      uptime: "99.89%",
      type: "Images & Generation",
      tier: "Basic Tier",
      features: ["HD Generation"],
      isBeta: false,
    },
    {
      name: "whisper-1",
      provider: "OpenAI",
      description: "OpenAI's general-purpose speech-to-text transcription model for converting audio into text.",
      context: "N/A", 
      uptime: "99.94%",
      type: "Audio & Transcriptions",
      tier: "Free Tier",
      features: [],
      isBeta: false,
    },
    {
      name: "text-embedding-3-large",
      provider: "OpenAI",
      description: "OpenAI's largest and most powerful text embedding model.",
      context: "N/A",
      uptime: "99.96%",
      type: "Embeddings",
      tier: "Basic Tier",
      features: [],
      isBeta: false,
    },
  ];

  const filteredModels = useMemo(() => {
    return models.filter(model => {
      const matchesSearch = model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           model.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesProvider = selectedProvider === "All Providers" || model.provider === selectedProvider;
      const matchesType = selectedType === "All Types" || model.type === selectedType;
      const matchesTier = selectedTier === "All Tiers" || model.tier === selectedTier;
      
      return matchesSearch && matchesProvider && matchesType && matchesTier;
    });
  }, [searchQuery, selectedProvider, selectedType, selectedTier]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Chat & Completion": return MessageSquare;
      case "Images & Generation": return Image;
      case "Audio & Speech": return Volume2;
      case "Audio & Transcriptions": return Volume2;
      case "Embeddings": return FileText;
      default: return FileText;
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Free Tier": return "text-green-600 bg-green-50 border-green-200";
      case "Basic Tier": return "text-blue-600 bg-blue-50 border-blue-200";
      case "Pro Tier": return "text-brand-purple bg-surface-highlight border-brand-purple-light";
      default: return "text-text-secondary bg-surface border-border-light";
    }
  };

  return (
    <div className="min-h-screen bg-surface">
      <ProductHuntBanner />
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="space-y-6 mb-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-text-primary">AI Models</h1>
            <p className="text-xl text-text-secondary">
              Access a wide range of powerful AI models through our platform
            </p>
          </div>

          {/* Search */}
          <div className="relative max-w-lg">
            <Search className="absolute left-3 top-3 h-4 w-4 text-text-secondary" />
            <Input
              placeholder="Search Models"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-primary">Filter by Purpose</label>
              <select 
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2 border border-border-light rounded-md bg-surface-elevated text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-purple"
              >
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-text-primary">Filter by Provider</label>
              <select 
                value={selectedProvider}
                onChange={(e) => setSelectedProvider(e.target.value)}
                className="px-3 py-2 border border-border-light rounded-md bg-surface-elevated text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-purple"
              >
                {providers.map(provider => (
                  <option key={provider} value={provider}>{provider}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-text-primary">Filter by Tier</label>
              <select 
                value={selectedTier}
                onChange={(e) => setSelectedTier(e.target.value)}
                className="px-3 py-2 border border-border-light rounded-md bg-surface-elevated text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-purple"
              >
                {tiers.map(tier => (
                  <option key={tier} value={tier}>{tier}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Models Grid */}
        <div className="grid gap-6">
          {filteredModels.map((model, index) => {
            const TypeIcon = getTypeIcon(model.type);
            
            return (
              <Card key={index} className="p-6 border border-border-light bg-surface-elevated hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-12 h-12 bg-surface rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-text-secondary rounded flex items-center justify-center text-white text-xs font-bold">
                        {model.provider[0]}
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-3">
                          <h3 className="text-xl font-semibold text-text-primary">{model.name}</h3>
                          {model.isBeta && (
                            <Badge className="bg-orange-100 text-orange-800 text-xs">
                              BETA
                            </Badge>
                          )}
                          <div className="flex items-center space-x-1">
                            <TypeIcon className="w-4 h-4 text-text-secondary" />
                            <span className="text-sm text-text-secondary">{model.type}</span>
                          </div>
                        </div>
                        <p className="text-sm text-text-secondary">by {model.provider}</p>
                      </div>
                      
                      <p className="text-text-primary leading-relaxed">{model.description}</p>
                      
                      <div className="flex items-center space-x-6 text-sm">
                        <div>
                          <span className="text-text-secondary">Context: </span>
                          <span className="text-text-primary font-medium">{model.context}</span>
                        </div>
                        <div>
                          <span className="text-text-secondary">Uptime: </span>
                          <span className="text-green-600 font-medium">{model.uptime}</span>
                        </div>
                      </div>
                      
                      {model.features.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {model.features.map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Badge className={`${getTierColor(model.tier)} border`}>
                      {model.tier}
                    </Badge>
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {filteredModels.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-secondary text-lg">No models found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModelsPage;