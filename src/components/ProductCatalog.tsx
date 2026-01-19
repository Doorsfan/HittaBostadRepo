import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { ProductCard } from './ProductCard';
import { shoes, categories, brands, type Shoe } from '@/data/shoes';

interface ProductCatalogProps {
  onAddToCart: (shoe: Shoe) => void;
}

export function ProductCatalog({ onAddToCart }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const filteredShoes = useMemo(() => {
    let filtered = [...shoes];

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(shoe => shoe.category === selectedCategory);
    }

    // Filter by brand
    if (selectedBrand !== 'All') {
      filtered = filtered.filter(shoe => shoe.brand === selectedBrand);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // Featured - bestsellers first
        filtered.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }

    return filtered;
  }, [selectedCategory, selectedBrand, sortBy]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated selection of premium athletic footwear designed for peak performance
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between mb-8 p-4 bg-white rounded-xl shadow-sm">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? 'bg-gray-900 hover:bg-gray-800' 
                  : 'hover:bg-gray-100'
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Brand & Sort */}
          <div className="flex flex-wrap gap-4">
            {/* Brand Filter */}
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-600">Brand:</label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              >
                {brands.map((brand) => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-600">Sort:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredShoes.length}</span> products
          </p>
        </div>

        {/* Product Grid */}
        {filteredShoes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredShoes.map((shoe) => (
              <ProductCard key={shoe.id} shoe={shoe} onAddToCart={onAddToCart} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters to find what you're looking for.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCategory('All');
                setSelectedBrand('All');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Load More */}
        {filteredShoes.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              Load More Products
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
