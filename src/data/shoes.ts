export interface Shoe {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  colors: string[];
  rating: number;
  reviews: number;
  isNew?: boolean;
  isBestseller?: boolean;
}

export const shoes: Shoe[] = [
  {
    id: 1,
    name: "Air Max Velocity",
    brand: "Nike",
    price: 179.99,
    originalPrice: 219.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop",
    category: "Running",
    colors: ["Red", "Black", "White"],
    rating: 4.8,
    reviews: 324,
    isBestseller: true
  },
  {
    id: 2,
    name: "UltraBoost Pro",
    brand: "Adidas",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=400&fit=crop",
    category: "Running",
    colors: ["White", "Grey", "Blue"],
    rating: 4.9,
    reviews: 512,
    isNew: true
  },
  {
    id: 3,
    name: "Court Vision Elite",
    brand: "Nike",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=400&fit=crop",
    category: "Basketball",
    colors: ["White", "Black"],
    rating: 4.6,
    reviews: 189
  },
  {
    id: 4,
    name: "Gel-Quantum 360",
    brand: "Asics",
    price: 159.99,
    originalPrice: 189.99,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=400&fit=crop",
    category: "Running",
    colors: ["Black", "Orange", "Blue"],
    rating: 4.7,
    reviews: 267
  },
  {
    id: 5,
    name: "Fresh Foam X",
    brand: "New Balance",
    price: 144.99,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=400&fit=crop",
    category: "Running",
    colors: ["Navy", "Red", "Grey"],
    rating: 4.5,
    reviews: 156,
    isNew: true
  },
  {
    id: 6,
    name: "Cloudrunner Pro",
    brand: "On",
    price: 169.99,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&h=400&fit=crop",
    category: "Running",
    colors: ["White", "Mint", "Black"],
    rating: 4.8,
    reviews: 298,
    isBestseller: true
  },
  {
    id: 7,
    name: "Trainer Max",
    brand: "Nike",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=400&fit=crop",
    category: "Training",
    colors: ["Black", "White", "Volt"],
    rating: 4.4,
    reviews: 203
  },
  {
    id: 8,
    name: "Speed Elite",
    brand: "Puma",
    price: 134.99,
    originalPrice: 159.99,
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=400&fit=crop",
    category: "Running",
    colors: ["Yellow", "Black", "White"],
    rating: 4.6,
    reviews: 178
  }
];

export const categories = ["All", "Running", "Basketball", "Training"];
export const brands = ["All", "Nike", "Adidas", "Asics", "New Balance", "On", "Puma"];
