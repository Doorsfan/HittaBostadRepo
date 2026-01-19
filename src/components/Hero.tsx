import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-12">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-slate-800">SaaSify</span>
        </div>
        
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">Features</a>
          <a href="#pricing" className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">Pricing</a>
          <a href="#about" className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">About</a>
          <a href="#contact" className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden text-slate-600 hover:text-blue-600 sm:inline-flex">
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30 hover:from-blue-700 hover:to-indigo-700">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 lg:px-12 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              Now with AI-powered analytics
            </div>
            
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Scale your business with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                powerful tools
              </span>
            </h1>
            
            <p className="mb-8 text-lg leading-relaxed text-slate-600 sm:text-xl">
              Streamline your workflow, boost productivity, and unlock growth with our all-in-one platform designed for modern teams.
            </p>
            
            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 text-lg shadow-xl shadow-blue-500/30 transition-all hover:from-blue-700 hover:to-indigo-700 hover:shadow-2xl hover:shadow-blue-500/40 sm:w-auto">
                Start Free Trial
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button size="lg" variant="outline" className="w-full border-slate-300 px-8 py-6 text-lg text-slate-700 hover:bg-white/50 sm:w-auto">
                <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex flex-col items-center gap-4 lg:flex-row lg:items-start">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-indigo-500 shadow-sm"
                  />
                ))}
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center gap-1 lg:justify-start">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-1 text-sm text-slate-600">
                  <span className="font-semibold text-slate-800">4.9/5</span> from 2,000+ reviews
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <div className="relative">
            <div className="relative rounded-2xl border border-slate-200/50 bg-white/80 p-2 shadow-2xl shadow-blue-500/10 backdrop-blur-sm">
              <div className="rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-6">
                {/* Mock Dashboard Header */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="h-4 w-32 rounded bg-slate-700" />
                </div>
                
                {/* Mock Stats */}
                <div className="mb-6 grid grid-cols-3 gap-4">
                  {[
                    { label: "Revenue", value: "$48.2K", change: "+12%" },
                    { label: "Users", value: "2,847", change: "+8%" },
                    { label: "Growth", value: "24.5%", change: "+3%" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-lg bg-slate-800/50 p-4">
                      <p className="text-xs text-slate-400">{stat.label}</p>
                      <p className="mt-1 text-xl font-bold text-white">{stat.value}</p>
                      <p className="mt-1 text-xs text-green-400">{stat.change}</p>
                    </div>
                  ))}
                </div>

                {/* Mock Chart */}
                <div className="rounded-lg bg-slate-800/50 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-medium text-white">Analytics Overview</p>
                    <div className="h-3 w-20 rounded bg-slate-700" />
                  </div>
                  <div className="flex h-32 items-end justify-between gap-2">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                      <div
                        key={i}
                        className="w-full rounded-t bg-gradient-to-t from-blue-600 to-indigo-500"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -left-6 top-1/4 rounded-xl border border-slate-200/50 bg-white/90 p-4 shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800">Payment received</p>
                  <p className="text-xs text-slate-500">+$1,250.00</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 bottom-1/4 rounded-xl border border-slate-200/50 bg-white/90 p-4 shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800">Revenue up</p>
                  <p className="text-xs text-slate-500">+24% this month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="relative z-10 mx-auto mt-20 max-w-7xl px-6 pb-20 lg:px-12">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-slate-500">
          Trusted by innovative companies worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60 grayscale">
          {["Vercel", "Stripe", "Notion", "Figma", "Linear"].map((company) => (
            <div key={company} className="text-2xl font-bold text-slate-400">
              {company}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
