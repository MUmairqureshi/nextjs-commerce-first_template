import anchor_bracelet from '/public/Anchor_Bracelet.jpg';
import basic_gray_jeans from '/public/Basic_Gray_Jeans.jpg';
import handbag from '/public/Handbag.jpg';
import blue_denim_jeans from '/public/blue_denim_jeans.jpg';
import blue_denim_shorts from 'public/blue_denim_shorts.jpg';
import blue_tshirt_green from '/public/p4.jpg';
import blue_tshirt_blue from '/public/p5.jpg';
import blue_tshirt_red from '/public/p6.jpg';
import dark_blue_demin_jeans from '/public/p7.jpg';
import { StaticImageData } from 'next/image';
import brown_anchor_bracelet from 'public/Brown_Anchor_Bracelet.jpg';
import red_anchor_bracelet from 'public/red_anchor_bracelet.jpg';

export type ProductColor = {
  color: string;
  imageSrc: StaticImageData;
  priceChange: number;
};

export type Product = {
  _id: number;
  title: string;
  category: string;
  priceType: 'fixed' | 'range' | 'discounted';
  price?: number;
  priceRange?: [number, number]; // For products with a price range
  discountedPrice?: number; // For products with a discounted price
  defaultColor?: string;
  imageUrl: StaticImageData;
  colors?: ProductColor[];
};

export const products: Product[] = [
  {
    _id: 1,
    title: 'Anchor Bracelet',
    priceType: 'fixed',
    category: 'Accessories',
    price: 150,
    imageUrl: anchor_bracelet,
    colors: [
      {
        color: 'Black',
        imageSrc: anchor_bracelet,
        priceChange: 0
      },
      {
        color: 'Brown',
        imageSrc: brown_anchor_bracelet,
        priceChange: 20
      },
      {
        color: 'Red',
        imageSrc: red_anchor_bracelet,
        priceChange: 30
      }
    ]
  },
  {
    _id: 2,
    title: 'Basic Gray Jeans',
    priceType: 'range',
    category: 'Women',
    priceRange: [150, 180],
    imageUrl: basic_gray_jeans
  },
  {
    _id: 3,
    title: 'Black Over-the-shoulder Handbag',
    priceType: 'fixed',
    category: 'Accessories',
    price: 150,
    defaultColor: 'aqua',
    imageUrl: handbag
  },
  {
    _id: 4,
    title: 'Blue Denim Jeans',
    priceType: 'fixed',
    category: 'Women',
    price: 150,
    imageUrl: blue_denim_jeans
  },
  {
    _id: 5,
    title: 'Blue Denim Shorts',
    category: 'Women',
    priceType: 'discounted',
    discountedPrice: 130,
    price: 150,
    imageUrl: blue_denim_shorts
  }
];
