import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  X, 
  Star,
  Zap,
  Shield,
  Headphones,
  Clock,
  Users,
  Building
} from "lucide-react";
import Header from "@/components/Header";
import ProductHuntBanner from "@/components/ProductHuntBanner";

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Free",
      price: billingCycle === "monthly" ? 0 : 0,
      originalPrice: null,
      period: "forever",
      description: "Get started with core features and explore the platform.",
      features: [
        { text: "Limited AI Models", included: true },
        { text: "5 RPM Rate Limits", included: true },
        { text: "300 RPD Request Limit", included: true },
        { text: "Unlimited Validity", included: true },
        { text: "Limited Context (Approx. 50%)", included: true },
        { text: "Coding Tool Compatibility", included: true },
        { text: "Access to premium models", included: false },
      ],
      popular: false,
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
    },
    {
      name: "Basic", 
      price: billingCycle === "monthly" ? 15 : Math.round(15 * 12 * 0.7),
      originalPrice: billingCycle === "yearly" ? 15 * 12 : null,
      period: billingCycle === "monthly" ? "per month" : "per year",
      description: "Perfect for developers and individuals seeking reliable personal AI access.",
      features: [
        { text: "Access to Premium Models*", included: true },
        { text: "10 RPM Rate Limit", included: true },
        { text: "+ $5.00 per 5 RPM / month", included: true },
        { text: "Unlimited Requests", included: true },
        { text: "Standard support", included: true },
        { text: "Standard Uptime (Approx. 90%)", included: true },
        { text: "Limited Context (Approx. 70-80%)", included: true },
      ],
      popular: false,
      buttonText: "Choose Basic",
      buttonVariant: "outline" as const,
    },
    {
      name: "Pro",
      price: billingCycle === "monthly" ? 25 : Math.round(25 * 12 * 0.7),
      originalPrice: billingCycle === "yearly" ? 25 * 12 : null,
      period: billingCycle === "monthly" ? "per month" : "per year",
      description: "For advanced personal users and professionals working on individual projects.",
      features: [
        { text: "Access to ALL SOTA models", included: true },
        { text: "10 RPM Rate Limit", included: true },
        { text: "+ $10.00 per 5 RPM / month", included: true },
        { text: "Unlimited Requests", included: true },
        { text: "Original context for all models", included: true },
        { text: "95% Uptime Guarantee", included: true },
        { text: "Priority support", included: true },
      ],
      popular: true,
      buttonText: "Choose Pro",
      buttonVariant: "default" as const,
    },
    {
      name: "Custom",
      price: null,
      originalPrice: null,
      period: "Custom Pricing",
      description: "For large-scale applications requiring tailored solutions, custom models, and dedicated support.",
      features: [
        { text: "All models, guaranteed availability & stability", included: true },
        { text: "Custom RPM & RPD", included: true },
        { text: "Dedicated priority support", included: true },
        { text: "SLA agreements", included: true },
        { text: "Custom integrations", included: true },
        { text: "Enterprise-grade infrastructure", included: true },
      ],
      popular: false,
      buttonText: "Contact Us",
      buttonVariant: "outline" as const,
    },
  ];

  const comparisonFeatures = [
    {
      feature: "Premium AI Models",
      ourPlatform: "GPT-4.1, o3, etc",
      chatgpt: "✓",
      claude: "Sonnet-4, Opus-4, etc",
      grok: "Grok-4",
    },
    {
      feature: "HD Image Generation", 
      ourPlatform: "✓",
      chatgpt: "Basic only",
      claude: "✗",
      grok: "Basic only",
    },
    {
      feature: "Video Generation",
      ourPlatform: "✓",
      chatgpt: "✗",
      claude: "✗",
      grok: "Basic only",
    },
    {
      feature: "Speech-to-Text",
      ourPlatform: "✓",
      chatgpt: "✓",
      claude: "✗",
      grok: "✗",
    },
    {
      feature: "Text-to-Speech",
      ourPlatform: "✓",
      chatgpt: "✓",
      claude: "✗",
      grok: "✗",
    },
    {
      feature: "Embedding Services",
      ourPlatform: "✓",
      chatgpt: "✗",
      claude: "✗",
      grok: "✗",
    },
    {
      feature: "Image Editing",
      ourPlatform: "✓",
      chatgpt: "✗",
      claude: "✗",
      grok: "✗",
    },
    {
      feature: "API + Playground",
      ourPlatform: "✓",
      chatgpt: "✓",
      claude: "✗",
      grok: "✗",
    },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <ProductHuntBanner />
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Get access to all premium AI models with a single subscription. No hidden fees, no complicated pricing tiers.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${billingCycle === "monthly" ? "text-text-primary font-medium" : "text-text-secondary"}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="relative w-12 h-6 bg-border-light rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-purple"
            >
              <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${billingCycle === "yearly" ? "translate-x-6" : ""}`} />
            </button>
            <span className={`text-sm ${billingCycle === "yearly" ? "text-text-primary font-medium" : "text-text-secondary"}`}>
              Yearly
            </span>
            {billingCycle === "yearly" && (
              <Badge className="bg-green-100 text-green-800">Save 30%</Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative p-8 border bg-surface-elevated hover:shadow-lg transition-all duration-300 ${plan.popular ? "border-brand-purple ring-2 ring-brand-purple ring-opacity-20" : "border-border-light"}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-brand-purple text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-text-primary">{plan.name}</h3>
                  <div className="space-y-1">
                    {plan.price !== null ? (
                      <div className="flex items-baseline space-x-2">
                        <span className="text-3xl font-bold text-text-primary">
                          ${plan.price}
                        </span>
                        {plan.originalPrice && (
                          <span className="text-lg text-text-secondary line-through">
                            ${plan.originalPrice}
                          </span>
                        )}
                      </div>
                    ) : (
                      <span className="text-3xl font-bold text-text-primary">Custom</span>
                    )}
                    <p className="text-sm text-text-secondary">{plan.period}</p>
                  </div>
                </div>
                
                <p className="text-text-secondary leading-relaxed">{plan.description}</p>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-text-secondary mt-0.5 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${feature.included ? "text-text-primary" : "text-text-secondary"}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.buttonVariant}
                  className={`w-full ${plan.popular ? "bg-brand-purple hover:bg-brand-purple-dark text-white" : ""}`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Plans */}
        <div className="bg-surface-elevated rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-text-primary mb-6">Additional Options</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border border-border-light">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Building className="w-8 h-8 text-text-accent" />
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary">Startups</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-text-primary">$0</span>
                      <Badge className="bg-green-100 text-green-800">sponsored</Badge>
                    </div>
                  </div>
                </div>
                <p className="text-text-secondary">
                  A sponsored plan for promising, early-stage startups to build with our AI.
                </p>
                <Button variant="outline" className="w-full">Check Eligibility</Button>
              </div>
            </Card>
            
            <Card className="p-6 border border-border-light">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="w-8 h-8 text-text-accent" />
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary">Alternative Payment</h4>
                    <p className="text-sm text-text-secondary">Flexible options available</p>
                  </div>
                </div>
                <p className="text-text-secondary">
                  Alternative payment methods and billing options for special cases.
                </p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-text-primary">Why choose our platform?</h2>
            <p className="text-xl text-text-secondary">
              See how our platform compares to other AI services in the market.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border border-border-light rounded-lg overflow-hidden">
              <thead className="bg-surface-elevated">
                <tr>
                  <th className="text-left p-4 text-text-primary font-semibold">Feature</th>
                  <th className="text-center p-4 text-text-primary font-semibold">
                    <div className="space-y-1">
                      <div>Our Platform</div>
                      <div className="text-sm text-text-secondary">$25/mo (Personal Use)</div>
                    </div>
                  </th>
                  <th className="text-center p-4 text-text-primary font-semibold">
                    <div className="space-y-1">
                      <div>ChatGPT Plus</div>
                      <div className="text-sm text-text-secondary">$20/mo</div>
                    </div>
                  </th>
                  <th className="text-center p-4 text-text-primary font-semibold">
                    <div className="space-y-1">
                      <div>Claude Pro</div>
                      <div className="text-sm text-text-secondary">$20/mo</div>
                    </div>
                  </th>
                  <th className="text-center p-4 text-text-primary font-semibold">
                    <div className="space-y-1">
                      <div>Grok</div>
                      <div className="text-sm text-text-secondary">$30/mo</div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-surface" : "bg-surface-elevated"}>
                    <td className="p-4 text-text-primary font-medium">{item.feature}</td>
                    <td className="p-4 text-center">
                      <span className="text-green-600 font-semibold">{item.ourPlatform}</span>
                    </td>
                    <td className="p-4 text-center text-text-secondary">{item.chatgpt}</td>
                    <td className="p-4 text-center text-text-secondary">{item.claude}</td>
                    <td className="p-4 text-center text-text-secondary">{item.grok}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-text-secondary">
              Get more value than subscribing to multiple services individually.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;