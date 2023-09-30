'use client';
import React, { ReactNode, createContext, useContext, useState } from 'react';
import { Product, products } from '@/lib/products';

// Define the type for children
interface ProductProviderProps {
  children: ReactNode;
}

const ProductContext = createContext<any | undefined>(undefined);

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    // Filter the products based on the search query
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  return (
    <ProductContext.Provider value={{ searchQuery, filteredProducts, handleSearch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};
