'use client';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
// import { useCart } from "./CartContext";

const CartButton = () => {
  // const { cartItemCount } = useCart();

  return (
    <Link href="/cart">
      <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
        <ShoppingCart className="h-5 w-5" />
        <div className="absolute left-6 top-0 z-10 h-4 w-4 rounded-full bg-red-500 text-center text-xs text-white">
          {/* {cartItemCount} */}
        </div>
      </button>
    </Link>
  );
};

export default CartButton;
