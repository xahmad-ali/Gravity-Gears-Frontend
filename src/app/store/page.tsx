"use client";
import React, { } from 'react';
import Image from "next/image";


// Products data
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
  {
    name: 'AirFlow Elite',
    category: 'EarBuds',
    price: '$159',
    image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Air Elite',
    category: 'EarBuds',
    price: '$159',
    image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'GravityPods Pro',
    category: 'EarBuds',
    price: '$199',
    image: 'https://images.unsplash.com/photo-1631176093617-63490a3d785a?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'GravityPods Pro',
    category: 'EarBuds',
    price: '$199',
    image: 'https://images.unsplash.com/photo-1631176093617-63490a3d785a?auto=format&fit=crop&q=80&w=600'
  },
];


function Store() {

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Main Content */}
      <main className="pt-6">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image 
              src="https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=1200" 
              alt="Hero Background" 
              width={1200}
              height={800}
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to GravityGears</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
              Discover our premium collection of smart devices designed for the modern lifestyle.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-black rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-400">{stat.label}</h3>
                  <stat.icon className="w-6 h-6 text-yellow-500" />
                </div>
                <p className="text-2xl font-bold mb-2">{stat.value}</p>
                <p className={`text-sm ${stat.changeColor}`}>
                  {stat.change} from last month
                </p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Products Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.name} className="bg-black rounded-lg overflow-hidden border border-gray-800 cursor-pointer ">
                <div className="aspect-w-16 aspect-h-9">
                  <Image
                    src={product.image} 
                    alt={product.name}
                    width={1200}
                    height={800}
                    className="w-full h-64 object-cover transform transition duration-150 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-400 mb-4">{product.category}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{product.price}</span>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Store;