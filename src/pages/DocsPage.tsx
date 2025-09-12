import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, BookOpen, Code, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import ProductHuntBanner from "@/components/ProductHuntBanner";

const DocsPage = () => {
  const docSections = [
    {
      title: "Getting Started",
      description: "Learn the basics of using A4F API",
      icon: BookOpen,
      color: "text-green-600 bg-green-50",
      articles: [
        { title: "Quick Start Guide", href: "#", description: "Get up and running in 5 minutes" },
        { title: "Authentication", href: "#", description: "How to authenticate with our API" },
        { title: "Making Your First Request", href: "#", description: "Send your first API call" },
        { title: "Error Handling", href: "#", description: "Understanding error responses" },
      ]
    },
    {
      title: "API Reference",
      description: "Complete API documentation",
      icon: Code,
      color: "text-blue-600 bg-blue-50",
      articles: [
        { title: "Chat Completions", href: "#", description: "Generate text responses" },
        { title: "Embeddings", href: "#", description: "Convert text to vector embeddings" },
        { title: "Image Generation", href: "#", description: "Create images from text prompts" },
        { title: "Audio Transcription", href: "#", description: "Convert speech to text" },
        { title: "Models List", href: "#", description: "Available AI models" },
      ]
    },
    {
      title: "Features & Configuration",
      description: "Advanced features and settings",
      icon: MessageSquare,
      color: "text-brand-purple bg-surface-highlight",
      articles: [
        { title: "Provider Routing", href: "#", description: "How requests are routed to providers" },
        { title: "Data Policies", href: "#", description: "Configure data handling policies" },
        { title: "Rate Limiting", href: "#", description: "Understanding rate limits" },
        { title: "Uptime & Status", href: "#", description: "Monitor service availability" },
        { title: "Custom Models", href: "#", description: "Using custom AI models" },
      ]
    },
    {
      title: "SDKs & Libraries",
      description: "Official and community SDKs",
      icon: FileText,
      color: "text-orange-600 bg-orange-50",
      articles: [
        { title: "OpenAI SDK Compatibility", href: "#", description: "Drop-in replacement for OpenAI SDK" },
        { title: "Python SDK", href: "#", description: "Official Python library" },
        { title: "Node.js SDK", href: "#", description: "Official JavaScript/TypeScript library" },
        { title: "Community Libraries", href: "#", description: "Third-party integrations" },
      ]
    },
  ];

  const popularArticles = [
    { title: "Quick Start Guide", views: "12.3k", category: "Getting Started" },
    { title: "Chat Completions API", views: "8.9k", category: "API Reference" },
    { title: "Authentication & API Keys", views: "7.2k", category: "Getting Started" },
    { title: "Provider Routing", views: "6.1k", category: "Features" },
    { title: "Rate Limiting", views: "5.8k", category: "Features" },
    { title: "Error Handling", views: "4.9k", category: "Getting Started" },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <ProductHuntBanner />
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
            Documentation
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Everything you need to integrate A4F into your applications. Get started quickly with our comprehensive guides and API reference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brand-purple hover:bg-brand-purple-dark text-white">
              <BookOpen className="w-4 h-4 mr-2" />
              Quick Start Guide
            </Button>
            <Button variant="outline">
              <Code className="w-4 h-4 mr-2" />
              API Reference
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <Card className="p-6 mb-12 border border-border-light bg-surface-elevated">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full px-4 py-3 border border-border-light rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-brand-purple text-text-primary placeholder-text-secondary"
              />
            </div>
            <Button className="bg-brand-purple hover:bg-brand-purple-dark text-white">
              Search
            </Button>
          </div>
        </Card>

        {/* Main Documentation Sections */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-8">
            {docSections.map((section, index) => {
              const IconComponent = section.icon;
              
              return (
                <Card key={index} className="p-8 border border-border-light bg-surface-elevated">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${section.color}`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-text-primary">{section.title}</h2>
                        <p className="text-text-secondary">{section.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      {section.articles.map((article, idx) => (
                        <div key={idx} className="group">
                          <a href={article.href} className="block p-4 rounded-lg border border-border-light bg-surface hover:shadow-md transition-all duration-200 group-hover:border-brand-purple-light">
                            <div className="flex items-start justify-between">
                              <div className="space-y-1 flex-1">
                                <h4 className="font-medium text-text-primary group-hover:text-text-accent">
                                  {article.title}
                                </h4>
                                <p className="text-sm text-text-secondary">
                                  {article.description}
                                </p>
                              </div>
                              <ExternalLink className="w-4 h-4 text-text-secondary group-hover:text-text-accent ml-2 flex-shrink-0" />
                            </div>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Popular Articles */}
            <Card className="p-6 border border-border-light bg-surface-elevated">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Popular Articles</h3>
              <div className="space-y-3">
                {popularArticles.map((article, index) => (
                  <a key={index} href="#" className="block group">
                    <div className="flex items-start justify-between p-3 rounded-lg hover:bg-surface transition-colors duration-200">
                      <div className="space-y-1 flex-1">
                        <h4 className="text-sm font-medium text-text-primary group-hover:text-text-accent">
                          {article.title}
                        </h4>
                        <div className="flex items-center space-x-2 text-xs text-text-secondary">
                          <span>{article.category}</span>
                          <span>•</span>
                          <span>{article.views} views</span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Quick Links */}
            <Card className="p-6 border border-border-light bg-surface-elevated">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center space-x-2 text-text-secondary hover:text-text-accent transition-colors duration-200">
                  <ExternalLink className="w-4 h-4" />
                  <span>API Status Page</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-text-secondary hover:text-text-accent transition-colors duration-200">
                  <ExternalLink className="w-4 h-4" />
                  <span>Community Discord</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-text-secondary hover:text-text-accent transition-colors duration-200">
                  <ExternalLink className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-text-secondary hover:text-text-accent transition-colors duration-200">
                  <ExternalLink className="w-4 h-4" />
                  <span>Support Center</span>
                </a>
              </div>
            </Card>

            {/* Contact Support */}
            <Card className="p-6 border border-border-light bg-surface-elevated">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Need Help?</h3>
              <p className="text-text-secondary text-sm mb-4">
                Can't find what you're looking for? Our team is here to help.
              </p>
              <Button variant="outline" className="w-full">
                <MessageSquare className="w-4 h-4 mr-2" />
                Contact Support
              </Button>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <Card className="p-8 border border-brand-purple bg-surface-highlight text-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-text-primary">Ready to get started?</h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Sign up for free and start building with A4F today. Get your API key and make your first request in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-brand-purple hover:bg-brand-purple-dark text-white">
                Get API Key
              </Button>
              <Button variant="outline">
                View Live Examples
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DocsPage;