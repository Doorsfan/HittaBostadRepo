import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Lightning Fast",
    description: "Optimized performance that loads in milliseconds. Your users will love the speed.",
    icon: "⚡",
  },
  {
    title: "Secure by Default",
    description: "Enterprise-grade security built-in. Your data is protected with the latest encryption.",
    icon: "🔒",
  },
  {
    title: "Easy Integration",
    description: "Connect with your favorite tools in minutes. We support 100+ integrations.",
    icon: "🔗",
  },
  {
    title: "Analytics Dashboard",
    description: "Get insights into your performance with beautiful, real-time analytics.",
    icon: "📊",
  },
  {
    title: "Team Collaboration",
    description: "Work together seamlessly with built-in collaboration features.",
    icon: "👥",
  },
  {
    title: "24/7 Support",
    description: "Our expert team is always here to help you succeed.",
    icon: "💬",
  },
];

export function Features() {
  return (
    <section className="bg-slate-50 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to succeed
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Powerful features to help you build, launch, and grow your project.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mb-2 text-4xl">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
