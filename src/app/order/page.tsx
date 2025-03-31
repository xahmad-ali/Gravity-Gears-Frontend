"use client";
import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';
import Image from 'next/image';

interface ProductDetailsProps {
  product: {
    name: string;
    category: string;
    price: string;
    image: string;
  };
}

const products = [
  {
    name: 'GravityPods Pro',
    category: 'EarBuds',
    price: '$199',
    image: 'https://images.unsplash.com/photo-1631176093617-63490a3d785a?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'G-Watch Ultra',
    category: 'SmartWatch',
    price: '$299',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=600'
  },
]

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Black');

  const colors = ['Black', 'White', 'Navy'];
  const features = [
    'Active Noise Cancellation',
    'Up to 24 hours battery life',
    'Wireless charging case',
    'Premium sound quality',
    'Water and sweat resistant'
  ];

  const benefits = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On orders over $100'
    },
    {
      icon: Shield,
      title: '2 Year Warranty',
      description: 'Full coverage'
    },
    {
      icon: RotateCcw,
      title: '30-Day Returns',
      description: 'Hassle-free returns'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square rounded-lg overflow-hidden bg-gray-800">
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <button
                key={i}
                className="aspect-square rounded-lg overflow-hidden bg-gray-800 hover:opacity-75 transition-opacity"
              >
                <Image
                  src={product.image}
                  alt={`${product.name} view ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
            <p className="text-gray-400 mb-4">{product.category}</p>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-400">(128 reviews)</span>
            </div>
            <p className="text-3xl font-bold text-white">{product.price}</p>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Color</h3>
            <div className="flex space-x-4">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 rounded-lg ${
                    selectedColor === color
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quantity</h3>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700"
              >
                -
              </button>
              <span className="text-xl font-semibold text-white">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="flex-1 bg-red-500 text-white px-8 py-4 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center space-x-2">
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>
            <button className="p-4 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-4 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Key Features</h3>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-700">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <benefit.icon className="w-6 h-6 mx-auto mb-2 text-red-500" />
                <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-white mb-8">Product Description</h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300">
            Experience unparalleled sound quality with the {product.name}. These premium earbuds combine 
            cutting-edge technology with elegant design to deliver an exceptional listening experience. 
            The active noise cancellation technology ensures immersive audio in any environment, while 
            the ergonomic design provides comfort for extended use.
          </p>
          <p className="text-gray-300 mt-4">
            With up to 24 hours of battery life and a wireless charging case, you'll never have to worry 
            about running out of power. The water and sweat resistance makes these earbuds perfect for 
            workouts and outdoor activities. Premium materials and meticulous craftsmanship ensure 
            durability and longevity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;