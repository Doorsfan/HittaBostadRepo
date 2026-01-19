import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductCatalog } from '@/components/ProductCatalog';
import { Footer } from '@/components/Footer';
import type { Shoe } from '@/data/shoes';

function App() {
  const [cartItems, setCartItems] = useState<Shoe[]>([]);

  const handleAddToCart = (shoe: Shoe) => {
    setCartItems((prev) => [...prev, shoe]);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartItems.length} />
      <main>
        <Hero />
        <ProductCatalog onAddToCart={handleAddToCart} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
