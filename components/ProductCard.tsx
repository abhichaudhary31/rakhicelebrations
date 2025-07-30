
import React from 'react';
import type { Product } from '../types';
import Icon from './Icon';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative">
        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
        <button className="absolute top-2 right-2 bg-white/70 p-1.5 rounded-full text-brand-dark hover:text-brand-primary hover:bg-white transition-all duration-200">
          <Icon name="heart" className="w-5 h-5" />
        </button>
        {product.isNew && (
            <span className="absolute top-2 left-2 bg-brand-secondary text-brand-dark text-xs font-bold px-2 py-1 rounded-full">NEW</span>
        )}
        {product.isBestseller && (
            <span className="absolute top-2 left-2 bg-brand-primary text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                <Icon name="star" className="w-3 h-3"/> BESTSELLER
            </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-brand-dark truncate group-hover:text-brand-primary">{product.name}</h3>
        <p className="text-xs text-gray-500 mt-1">{product.category}</p>
        <div className="flex items-baseline justify-between mt-2">
          <div className="flex items-baseline gap-2">
            <p className="text-lg font-bold text-brand-primary">₹{product.price}</p>
            {product.originalPrice && (
              <p className="text-sm text-gray-400 line-through">₹{product.originalPrice}</p>
            )}
          </div>
        </div>
        <button className="mt-4 w-full bg-brand-primary text-white text-sm font-bold py-2 rounded-lg hover:bg-red-800 transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
