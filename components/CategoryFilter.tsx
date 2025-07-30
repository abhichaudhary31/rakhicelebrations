
import React, { useState } from 'react';
import Icon from './Icon';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  const [sortOption, setSortOption] = useState('popular');

  return (
    <div className="bg-brand-light p-4 sticky top-16 z-40">
      <div className="container mx-auto">
        {/* Category Buttons */}
        <div className="mb-4">
          <h3 className="font-bold text-brand-dark mb-2">Categories</h3>
          <div className="flex space-x-2 overflow-x-auto pb-2 -mx-4 px-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className={`px-4 py-2 text-sm font-semibold rounded-full whitespace-nowrap transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-brand-primary text-white'
                    : 'bg-white text-brand-dark hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="flex justify-end items-center">
            <div className="relative">
                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-full py-2 pl-4 pr-10 text-sm font-medium text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
                >
                    <option value="popular">Sort by: Popularity</option>
                    <option value="newest">Sort by: Newest</option>
                    <option value="price-asc">Sort by: Price Low to High</option>
                    <option value="price-desc">Sort by: Price High to Low</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                    <Icon name="chevron-down" className="h-4 w-4"/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
