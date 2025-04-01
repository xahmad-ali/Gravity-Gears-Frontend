"use client";
import { LayoutGrid, Minus, Plus, X, ShoppingBag, CreditCard } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Cart() {
    const router = useRouter();

    const goToCheckOut = (e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        router.push('cart/checkout');
    }
  // Mock cart data
  const cartItems = [
    {
      id: 1,
      name: 'GravityPods Pro',
      color: 'Cosmic Black',
      price: 199.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800',
    },
    {
      id: 2,
      name: 'G-Watch Ultra',
      color: 'Arctic White',
      price: 299.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800',
    },
  ];

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-black/95 text-white py-10">

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center space-x-4 mb-12">
          <ShoppingBag size={32} className="text-red-500" />
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-24 rounded-lg overflow-hidden bg-zinc-800">
                    <Image
                    src={item.image} alt={item.name} 
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-400 mb-4">Color: {item.color}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button className="p-1 hover:bg-zinc-800 rounded">
                          <Minus size={20} />
                        </button>
                        <span>{item.quantity}</span>
                        <button className="p-1 hover:bg-zinc-800 rounded">
                          <Plus size={20} />
                        </button>
                      </div>
                      <span className="font-semibold">${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-zinc-800 rounded-lg">
                    <X size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 h-fit">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-zinc-800 pt-4">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-red-500 hover:bg-red-600 text-white mt-6 px-8 py-4 rounded-xl flex items-center justify-center space-x-2 transition-colors hover:cursor-pointer"
            onClick={goToCheckOut}>
              <CreditCard size={20} />
              <span>Proceed to Checkout</span>
            </button>
          </div>
        </div>
      </main>

      
    </div>
  );
}