import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Build Something{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Amazing
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Create beautiful, modern web experiences with our powerful platform.
            Ship faster, scale effortlessly, and delight your users.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-slate-700 pt-10">
            <div>
              <p className="text-3xl font-bold text-white">10K+</p>
              <p className="mt-1 text-sm text-slate-400">Active Users</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">99.9%</p>
              <p className="mt-1 text-sm text-slate-400">Uptime</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">24/7</p>
              <p className="mt-1 text-sm text-slate-400">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
