import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Zap, Eye } from "lucide-react";
import Header from "@/components/Header";
import ProductHuntBanner from "@/components/ProductHuntBanner";

const RankingsPage = () => {
  const rankings = [
    {
      rank: 1,
      model: "gpt-5-nano",
      provider: "OpenAI",
      score: 98.5,
      change: +2.3,
      category: "Chat & Completion",
      metrics: {
        speed: 95,
        accuracy: 98,
        cost: 99,
        reliability: 97
      },
      totalRequests: "1.2B",
      avgLatency: "350ms",
      uptime: "99.94%"
    },
    {
      rank: 2,
      model: "claude-opus-4",
      provider: "Anthropic",
      score: 97.8,
      change: -0.8,
      category: "Chat & Completion",
      metrics: {
        speed: 92,
        accuracy: 99,
        cost: 85,
        reliability: 98
      },
      totalRequests: "890M",
      avgLatency: "420ms",
      uptime: "99.92%"
    },
    {
      rank: 3,
      model: "gemini-2.5-pro-0605",
      provider: "Google",
      score: 96.2,
      change: +1.5,
      category: "Chat & Completion",
      metrics: {
        speed: 88,
        accuracy: 97,
        cost: 92,
        reliability: 96
      },
      totalRequests: "756M",
      avgLatency: "480ms",
      uptime: "99.97%"
    },
    {
      rank: 4,
      model: "claude-sonnet-4",
      provider: "Anthropic",
      score: 95.1,
      change: +0.2,
      category: "Chat & Completion",
      metrics: {
        speed: 94,
        accuracy: 96,
        cost: 88,
        reliability: 95
      },
      totalRequests: "634M",
      avgLatency: "390ms",
      uptime: "99.95%"
    },
    {
      rank: 5,
      model: "grok-4",
      provider: "xAI",
      score: 93.7,
      change: -1.2,
      category: "Chat & Completion",
      metrics: {
        speed: 90,
        accuracy: 94,
        cost: 82,
        reliability: 93
      },
      totalRequests: "423M",
      avgLatency: "520ms",
      uptime: "99.88%"
    },
    {
      rank: 6,
      model: "dall-e-3",
      provider: "OpenAI",
      score: 92.3,
      change: +0.7,
      category: "Image Generation",
      metrics: {
        speed: 85,
        accuracy: 96,
        cost: 78,
        reliability: 91
      },
      totalRequests: "234M",
      avgLatency: "2.1s",
      uptime: "99.89%"
    }
  ];

  const categories = ["All Models", "Chat & Completion", "Image Generation", "Audio & Speech", "Embeddings"];
  const timeframes = ["Last 7 days", "Last 30 days", "Last 90 days"];

  return (
    <div className="min-h-screen bg-surface">
      <ProductHuntBanner />
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
            AI Model Rankings
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Real-time rankings based on performance, reliability, cost-effectiveness, and user satisfaction across our platform.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <select className="px-4 py-2 border border-border-light rounded-lg bg-surface-elevated text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-purple">
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <select className="px-4 py-2 border border-border-light rounded-lg bg-surface-elevated text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-purple">
            {timeframes.map(timeframe => (
              <option key={timeframe} value={timeframe}>{timeframe}</option>
            ))}
          </select>
        </div>

        {/* Ranking Cards */}
        <div className="space-y-4">
          {rankings.map((model, index) => (
            <Card key={index} className="p-6 border border-border-light bg-surface-elevated hover:shadow-lg transition-all duration-300">
              <div className="grid lg:grid-cols-12 gap-6 items-center">
                {/* Rank & Basic Info */}
                <div className="lg:col-span-4 flex items-center space-x-4">
                  <div className="flex items-center space-x-3">
                    <div className={`text-2xl font-bold ${model.rank <= 3 ? 'text-brand-purple' : 'text-text-secondary'}`}>
                      #{model.rank}
                    </div>
                    <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-text-secondary rounded text-white text-xs font-bold flex items-center justify-center">
                        {model.provider[0]}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-text-primary">{model.model}</h3>
                      <Badge variant="outline" className="text-xs">
                        {model.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-text-secondary">by {model.provider}</p>
                  </div>
                </div>

                {/* Score & Change */}
                <div className="lg:col-span-2 text-center">
                  <div className="text-2xl font-bold text-text-primary">{model.score}</div>
                  <div className="flex items-center justify-center space-x-1">
                    {model.change > 0 ? (
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-600" />
                    )}
                    <span className={`text-sm font-medium ${model.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {model.change > 0 ? '+' : ''}{model.change}
                    </span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-sm text-text-secondary">Speed</div>
                    <div className="font-semibold text-text-primary">{model.metrics.speed}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-text-secondary">Accuracy</div>
                    <div className="font-semibold text-text-primary">{model.metrics.accuracy}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-text-secondary">Cost</div>
                    <div className="font-semibold text-text-primary">{model.metrics.cost}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-text-secondary">Reliability</div>
                    <div className="font-semibold text-text-primary">{model.metrics.reliability}</div>
                  </div>
                </div>

                {/* Stats */}
                <div className="lg:col-span-2 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Requests:</span>
                    <span className="text-text-primary font-medium">{model.totalRequests}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Latency:</span>
                    <span className="text-text-primary font-medium">{model.avgLatency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Uptime:</span>
                    <span className="text-green-600 font-medium">{model.uptime}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Methodology */}
        <Card className="mt-12 p-8 border border-border-light bg-surface-elevated">
          <h2 className="text-2xl font-bold text-text-primary mb-4">Ranking Methodology</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-primary">Scoring Factors</h3>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-purple rounded-full"></div>
                  <span><strong>Speed (25%):</strong> Average response latency</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-purple rounded-full"></div>
                  <span><strong>Accuracy (30%):</strong> Quality of responses</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-purple rounded-full"></div>
                  <span><strong>Cost (20%):</strong> Price per token efficiency</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-brand-purple rounded-full"></div>
                  <span><strong>Reliability (25%):</strong> Uptime and consistency</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-primary">Data Sources</h3>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-brand-purple" />
                  <span>Real-time performance metrics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-brand-purple" />
                  <span>User feedback and ratings</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-brand-purple" />
                  <span>Automated quality assessments</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-brand-purple" />
                  <span>Provider uptime monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RankingsPage;