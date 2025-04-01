"use client";
import { ShoppingCart, Heart, User, ShoppingBag, HelpCircle, X, Store } from "lucide-react";
import Link from "next/link";

// Navigation items with correct paths <Store />
const navItems = [
  { label: "Store", icon: Store, path: "/store"  },
  { label: "Wishlist", icon: Heart, path: "/wishlist" },
  { label: "Profile", icon: User, path: "/profile" },
  { label: "My Cart", icon: ShoppingCart, path: "/cart" },
  { label: "My Orders", icon: ShoppingBag, path: "/order" },
  { label: "Help", icon: HelpCircle, path: "/help" }
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 ${
          isOpen ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        onClick={onClose}
      />

      {/* Sidebar Content */}
      <div className="absolute inset-y-0 left-0 w-64 bg-black shadow-xl border-r border-red-600">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-red-500">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => (
            //   <Link key={item.label} href={item.path}>
            //     <button
            //       className="flex items-center w-full p-3 rounded-lg text-gray-300 hover:bg-gray-900 hover:text-red-500 transition-colors"
            //       onClick={onClose}
            //     >
            //       <item.icon className="w-5 h-5 mr-3" />
            //       {item.label}
            //     </button>
            //   </Link>
            <Link key={item.label} href={item.path} onClick={onClose} className="flex items-center w-full p-3 rounded-lg text-gray-300 hover:bg-gray-900 hover:text-red-500 transition-colors">
                <item.icon className="w-5 h-5 mr-3" />
                 {item.label}
            </Link>

            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
