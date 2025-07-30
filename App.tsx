
import React, { useState, useMemo } from 'react';
import type { Product } from './types';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

const MOCK_PRODUCTS: Product[] = [
  { id: 1, name: 'Elegant Pearl Rakhi', price: 299, originalPrice: 499, imageUrl: 'https://picsum.photos/seed/rakhi1/400/400', category: 'Single Rakhi', isNew: true },
  { id: 2, name: 'Designer Bhaiya Bhabhi Rakhi Set', price: 599, imageUrl: 'https://picsum.photos/seed/rakhi2/400/400', category: 'Rakhi Sets', isBestseller: true },
  { id: 3, name: 'Kids Cartoon Character Rakhi', price: 149, originalPrice: 199, imageUrl: 'https://picsum.photos/seed/rakhi3/400/400', category: 'Kids Rakhi' },
  { id: 4, name: 'Rudraksha Rakhi with Sweets', price: 799, imageUrl: 'https://picsum.photos/seed/rakhi4/400/400', category: 'Rakhi Hampers' },
  { id: 5, name: 'Silver Plated Om Rakhi', price: 450, imageUrl: 'https://picsum.photos/seed/rakhi5/400/400', category: 'Single Rakhi', isBestseller: true },
  { id: 6, name: 'Peacock Feather Lumba Rakhi', price: 350, originalPrice: 500, imageUrl: 'https://picsum.photos/seed/rakhi6/400/400', category: 'Rakhi Sets' },
  { id: 7, name: 'Spiderman Light-Up Rakhi', price: 250, imageUrl: 'https://picsum.photos/seed/rakhi7/400/400', category: 'Kids Rakhi', isNew: true },
  { id: 8, name: 'Dry Fruits & Rakhi Gift Box', price: 1299, imageUrl: 'https://picsum.photos/seed/rakhi8/400/400', category: 'Rakhi Hampers' },
  { id: 9, name: 'Kundan Work Traditional Rakhi', price: 399, imageUrl: 'https://picsum.photos/seed/rakhi9/400/400', category: 'Single Rakhi' },
  { id: 10, name: 'Personalized Photo Rakhi', price: 499, imageUrl: 'https://picsum.photos/seed/rakhi10/400/400', category: 'Single Rakhi', isNew: true },
  { id: 11, name: 'Doremon Rakhi for Kids', price: 199, originalPrice: 250, imageUrl: 'https://picsum.photos/seed/rakhi11/400/400', category: 'Kids Rakhi' },
  { id: 12, name: 'Family Rakhi Set (Set of 4)', price: 899, imageUrl: 'https://picsum.photos/seed/rakhi12/400/400', category: 'Rakhi Sets', isBestseller: true },
];

const App: React.FC = () => {
  const [products] = useState<Product[]>(MOCK_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const categories = useMemo(() => {
    const allCategories = new Set(products.map(p => p.category));
    return ['All', ...Array.from(allCategories)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return products;
    }
    return products.filter(p => p.category === selectedCategory);
  }, [products, selectedCategory]);

  return (
    <div className="bg-brand-light font-sans text-brand-dark min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CategoryFilter 
          categories={categories} 
          selectedCategory={selectedCategory} 
          onSelectCategory={setSelectedCategory} 
        />
        <ProductGrid products={filteredProducts} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
