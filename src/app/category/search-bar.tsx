// SearchBar.tsx
'use client';
import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';
import { useProductContext } from './ProductContext';

const SearchBar: React.FC = () => {
  const { searchQuery, handleSearch } = useProductContext();
  const [query, setQuery] = useState(searchQuery);

  const handleSearchClick = () => {
    handleSearch(query);
  };

  return (
    <div className="flex w-full max-w-[400px] items-center space-x-2 lg:max-w-sm">
      <Input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button className="bg-blue-500 px-2 lg:px-2" type="submit" onClick={handleSearchClick}>
        <ChevronRight color="#ffffff" />
      </Button>
    </div>
  );
};

export default SearchBar;
