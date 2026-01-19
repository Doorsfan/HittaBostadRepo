export function Footer() {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-white">🚀 LaunchPad</h3>
            <p className="mt-4 text-sm text-slate-400">
              Building the future of web development, one project at a time.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Product</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-slate-400 hover:text-white">Features</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white">Integrations</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-slate-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-slate-400 hover:text-white">Privacy</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white">Terms</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center">
          <p className="text-sm text-slate-400">
            © 2025 LaunchPad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
