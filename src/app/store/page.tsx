"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

// Products data
const products = [
  {
    name: "GravityPods Pro",
    category: "EarBuds",
    price: "$199",
    image:
      "https://images.unsplash.com/photo-1631176093617-63490a3d785a?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "G-Watch Ultra",
    category: "SmartWatch",
    price: "$299",
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "AirFlow Elite",
    category: "EarBuds",
    price: "$159",
    image:
      "https://images.unsplash.com/photo-1606220838315-056192d5e927?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Air Elite",
    category: "EarBuds",
    price: "$159",
    image:
      "https://images.unsplash.com/photo-1606220838315-056192d5e927?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "GravityPods Pro",
    category: "EarBuds",
    price: "$199",
    image:
      "https://images.unsplash.com/photo-1631176093617-63490a3d785a?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "GravityPods Pro",
    category: "EarBuds",
    price: "$199",
    image:
      "https://images.unsplash.com/photo-1631176093617-63490a3d785a?auto=format&fit=crop&q=80&w=600",
  },
];

function Store() {

  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  
   // Fetch products data from API
   useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/products"); // Make sure the URL is http (not https)
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data); // Assuming the API returns a list of products
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };    

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <main className="pt-6">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="relative h-[600px] bg-cover bg-center">
            <Image
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=2070"
              alt="Hero Background"
              width={1200}
              height={800}
              className="w-full h-full object-cover opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/50"></div>
          </div>

          <div className="absolute inset-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-gray-200 hover:text-gray-50">
              Welcome to GravityGears
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 mb-8 max-w-2xl hover:text-gray-100 ">
              Discover our premium collection of smart devices designed for the
              modern lifestyle.
            </p>
          </div>
        </div>

        {/* Products Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800 group hover:border-red-500 transition-all "
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-400 mb-4">{product.category}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">
                      {product.price}
                    </span>
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
