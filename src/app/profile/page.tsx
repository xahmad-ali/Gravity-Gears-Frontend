'use client';

import {
  User,
  Package,
  Heart,
  Settings,
  ShoppingBag,
  MapPin,
  CreditCard,
  ChevronRight,
  Battery,
} from 'lucide-react';
import Image from 'next/image';
import { Card } from '@/components/card';
import React from 'react';

export default function UserDashboard() {


  return (
    <div className="min-h-screen  bg-black text-white">


      {/* Main Content */}
      <main className='pt-16'>
      <div className="ml-32 mr-10 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Welcome back, John</h2>
          <p className="text-zinc-400">Track your orders and manage your account.</p>
        </div>

        {/* Recent Orders */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Recent Orders</h3>
          <div className="grid gap-4">
            {[
              {
                id: '#ORD-2024-001',
                product: 'GravityPods Pro',
                date: 'March 15, 2024',
                status: 'Delivered',
                statusColor: 'text-green-500',
              },
              {
                id: '#ORD-2024-002',
                product: 'G-Watch Ultra',
                date: 'March 10, 2024',
                status: 'In Transit',
                statusColor: 'text-yellow-500',
              },
            ].map((order, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Package className="w-10 h-10 text-yellow-500" />
                    <div>
                      <h4 className="font-medium">{order.product}</h4>
                      <p className="text-sm text-zinc-400">Order {order.id}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${order.statusColor}`}>{order.status}</p>
                    <p className="text-sm text-zinc-400">{order.date}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            {
              icon: Heart,
              title: 'Wishlist',
              description: '6 items saved',
              color: 'text-red-500',
            },
            {
              icon: MapPin,
              title: 'Shipping Address',
              description: '2 addresses saved',
              color: 'text-blue-500',
            },
            {
              icon: CreditCard,
              title: 'Payment Methods',
              description: '3 cards saved',
              color: 'text-green-500',
            },
          ].map((action, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 p-6 hover:bg-zinc-800 transition-colors cursor-pointer group">
              <div className="flex items-center justify-between">
                <div>
                  <action.icon className={`w-8 h-8 mb-3 ${action.color}`} />
                  <h3 className="font-bold mb-1">{action.title}</h3>
                  <p className="text-sm text-zinc-400">{action.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" />
              </div>
            </Card>
          ))}
        </div>

        {/* Recently Viewed */}
        <div>
          <h3 className="text-xl font-bold mb-4">Recently Viewed</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'GravityPods Pro',
                price: '$199',
                image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
              },
              {
                name: 'G-Watch Ultra',
                price: '$299',
                image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80',
              },
            ].map((product, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden group cursor-pointer">
                <div className="aspect-square relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    height={1200}
                    width={800}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                  />
                  <button className="absolute top-2 right-2 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-4 h-4 text-white" />
                  </button>
                </div>
                <div className="p-4">
                  <h4 className="font-medium mb-1">{product.name}</h4>
                  <p className="text-yellow-500 font-bold">{product.price}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      </main>
    </div>
  );
}

