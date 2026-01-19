import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="text-xl font-bold text-white">
              🚀 LaunchPad
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">
                Features
              </a>
              <a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
              Sign In
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
