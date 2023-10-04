import black_hoodie from '/public/black_hoodie.jpg';
import blue_hoodie from '/public/blue_hoodie.jpg';
import blue_tshirt from '/public/blue_tshirt.jpg';
import blue_tshirt_green from '/public/blue_tshirt_green.jpg';
import blue_tshirt_blue from '/public/blue_tshirt_darkblue.jpg';
import blue_tshirt_red from '/public/blue_tshirt_red.jpg';
import dark_blue_demin_jeans from '/public/dark_blue_demin_jeans.jpg';
import anchor_bracelet from '/public/Anchor_Bracelet.jpg';
import basic_gray_jeans from '/public/Basic_Gray_Jeans.jpg';
import handbag from '/public/Handbag.jpg';
import blue_denim_jeans from '/public/blue_denim_jeans.jpg';
import blue_denim_shorts from 'public/blue_denim_shorts.jpg';
import brown_anchor_bracelet from 'public/Brown_Anchor_Bracelet.jpg';
import red_anchor_bracelet from 'public/red_anchor_bracelet.jpg';
import { StaticImageData } from 'next/image';
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
    title: 'Black Hoodie',
    category: 'Men',
    priceType: 'fixed',
    price: 150,
    imageUrl: black_hoodie
  },
  {
    _id: 2,
    title: 'Blue Hoodie',
    priceType: 'fixed',
    category: 'Men',
    price: 150,
    imageUrl: blue_hoodie
  },
  {
    _id: 3,
    title: 'Blue Tshirt',
    priceType: 'fixed',
    category: 'Men',
    price: 40,
    defaultColor: 'aqua',
    imageUrl: blue_tshirt,
    colors: [
      {
        color: 'aqua',
        imageSrc: blue_tshirt,
        priceChange: 0
      },
      {
        color: 'blue',
        imageSrc: blue_tshirt_blue,
        priceChange: 2
      },
      {
        color: 'green',
        imageSrc: blue_tshirt_green,
        priceChange: 4
      },
      {
        color: 'red',
        imageSrc: blue_tshirt_red,
        priceChange: 6
      }
    ]
  },
  {
    _id: 4,
    priceType: 'fixed',
    title: 'Dark Blue Denim Jeans',
    category: 'Men',
    price: 150,
    imageUrl: dark_blue_demin_jeans
  },
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
