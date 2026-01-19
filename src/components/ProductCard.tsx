import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Shoe } from '@/data/shoes';

interface ProductCardProps {
  shoe: Shoe;
  onAddToCart: (shoe: Shoe) => void;
}

export function ProductCard({ shoe, onAddToCart }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <Card
      className="group relative overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {shoe.isNew && (
          <Badge className="bg-blue-500 hover:bg-blue-600 text-white font-medium">
            New
          </Badge>
        )}
        {shoe.isBestseller && (
          <Badge className="bg-orange-500 hover:bg-orange-600 text-white font-medium">
            Bestseller
          </Badge>
        )}
        {shoe.originalPrice && (
          <Badge className="bg-red-500 hover:bg-red-600 text-white font-medium">
            Sale
          </Badge>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        onClick={() => setIsWishlisted(!isWishlisted)}
        className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
      >
        <svg
          className={`w-5 h-5 transition-colors ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
          fill={isWishlisted ? 'currentColor' : 'none'}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          src={shoe.image}
          alt={shoe.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        {/* Quick Add Button */}
        <div
          className={`absolute inset-x-4 bottom-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Button
            onClick={() => onAddToCart(shoe)}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium shadow-lg"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Add to Cart
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        {/* Brand */}
        <p className="text-xs font-semibold text-orange-500 uppercase tracking-wider mb-1">
          {shoe.brand}
        </p>

        {/* Name */}
        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
          {shoe.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(shoe.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-500">({shoe.reviews})</span>
        </div>

        {/* Colors */}
        <div className="flex items-center gap-1 mb-3">
          {shoe.colors.slice(0, 4).map((color, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full border border-gray-200"
              style={{
                backgroundColor:
                  color.toLowerCase() === 'white' ? '#ffffff' :
                  color.toLowerCase() === 'black' ? '#1f2937' :
                  color.toLowerCase() === 'red' ? '#ef4444' :
                  color.toLowerCase() === 'blue' ? '#3b82f6' :
                  color.toLowerCase() === 'grey' || color.toLowerCase() === 'gray' ? '#9ca3af' :
                  color.toLowerCase() === 'orange' ? '#f97316' :
                  color.toLowerCase() === 'navy' ? '#1e3a5f' :
                  color.toLowerCase() === 'mint' ? '#a7f3d0' :
                  color.toLowerCase() === 'volt' ? '#d9f99d' :
                  color.toLowerCase() === 'yellow' ? '#fbbf24' :
                  '#e5e7eb'
              }}
              title={color}
            />
          ))}
          {shoe.colors.length > 4 && (
            <span className="text-xs text-gray-500 ml-1">+{shoe.colors.length - 4}</span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">
            ${shoe.price.toFixed(2)}
          </span>
          {shoe.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${shoe.originalPrice.toFixed(2)}
            </span>
          )}
          {shoe.originalPrice && (
            <span className="text-xs font-semibold text-red-500">
              {Math.round((1 - shoe.price / shoe.originalPrice) * 100)}% OFF
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
