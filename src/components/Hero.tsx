import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-sm font-medium text-orange-400">New Collection 2024</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Run Beyond
              <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Your Limits
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
              Discover our premium collection of athletic shoes designed for performance, 
              comfort, and style. Engineered to help you achieve your best.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 shadow-lg shadow-orange-500/25">
                Shop Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-white/10">
                View Collection
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-700/50">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">50K+</div>
                <div className="text-sm text-gray-500">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">200+</div>
                <div className="text-sm text-gray-500">Shoe Models</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">4.9</div>
                <div className="text-sm text-gray-500">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop"
                alt="Featured Athletic Shoe"
                className="w-full rounded-2xl shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-500"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute top-4 -left-4 bg-white rounded-xl p-4 shadow-xl animate-bounce-slow hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Free Shipping</div>
                  <div className="text-xs text-gray-500">On orders $100+</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Fast Delivery</div>
                  <div className="text-xs text-gray-500">2-3 Business Days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
