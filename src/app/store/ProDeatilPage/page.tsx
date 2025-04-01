"use client";
import { LayoutGrid, Heart, Share2, ShoppingCart, Shield, Truck, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductDetail() {


  const product = {
    name: 'GravityPods Pro',
    category: 'EarBuds',
    price: 199.99,
    rating: 4.8,
    reviews: 256,
    description: 'Experience premium sound quality with our flagship wireless earbuds. Featuring active noise cancellation, transparency mode, and up to 24 hours of battery life.',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1598331668826-20cecc596b86?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=800',
    ],
    features: [
      'Active Noise Cancellation',
      'Transparency Mode',
      'Touch Controls',
      'IPX4 Water Resistance',
      '24hr Battery Life',
      'Wireless Charging',
    ],
    colors: ['Cosmic Black', 'Arctic White', 'Navy Blue'],
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-zinc-900/50 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" className="flex items-center space-x-3">
            <LayoutGrid className="text-red-500" size={32} />
            <span className="text-xl font-bold">GravityGears</span>
          </Link>
        </div>
      </nav>

      {/* Product Details */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-zinc-900">
              <Image
                src={product.images[0]}
                alt={product.name}
                width={1200}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-xl bg-zinc-900">
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 2}`}
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <div className="text-red-500 text-sm font-medium mb-2">{product.category}</div>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-3xl font-bold">${product.price}</div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="flex items-center text-yellow-500">
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span className="text-gray-400">({product.reviews} reviews)</span>
                </div>
              </div>
              <p className="text-gray-300">{product.description}</p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-medium mb-4">Select Color</h3>
              <div className="flex space-x-4">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-4">
              <button className="flex-1 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl flex items-center justify-center space-x-2 transition-colors">
                <ShoppingCart size={20} />
                <span>Add to Cart</span>
              </button>
              <button className="p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition-colors">
                <Heart size={20} />
              </button>
              <button className="p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition-colors">
                <Share2 size={20} />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                  <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-zinc-800">
              <div className="text-center">
                <Shield className="mx-auto mb-2 text-red-500" size={24} />
                <div className="text-sm">2 Year Warranty</div>
              </div>
              <div className="text-center">
                <Truck className="mx-auto mb-2 text-red-500" size={24} />
                <div className="text-sm">Free Shipping</div>
              </div>
              <div className="text-center">
                <RotateCcw className="mx-auto mb-2 text-red-500" size={24} />
                <div className="text-sm">30-Day Returns</div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}