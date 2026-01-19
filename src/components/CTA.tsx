import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CTA() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-purple-100">
            Join thousands of satisfied customers. Start your free trial today.
          </p>

          <div className="mx-auto mt-10 flex max-w-md flex-col gap-4 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white"
            />
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
              Start Free Trial
            </Button>
          </div>

          <p className="mt-4 text-sm text-purple-200">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
