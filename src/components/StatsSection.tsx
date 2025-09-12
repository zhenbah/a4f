import { TrendingUp, Users, Database, Layers } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "5.6T",
      label: "Monthly Tokens",
      color: "text-brand-purple",
    },
    {
      icon: Users,
      value: "1.5M",
      label: "Global Users",
      color: "text-blue-600",
    },
    {
      icon: Database,
      value: "50+",
      label: "Active Providers",
      color: "text-green-600",
    },
    {
      icon: Layers,
      value: "300+",
      label: "Models",
      color: "text-orange-600",
    },
  ];

  return (
    <section className="py-16 bg-surface-elevated border-y border-border-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="flex justify-center">
                <div className={`p-3 rounded-lg bg-surface ${stat.color} bg-opacity-10`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl md:text-4xl font-bold text-text-primary">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-text-secondary font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;