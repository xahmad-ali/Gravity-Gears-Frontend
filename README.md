This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



🛍 User Journey & Screens
1️⃣ Public Screens (Accessible to All Users)
✅ Landing Page (Home) /

Display featured products, banners, categories

API: GET /api/products

✅ Product Listing Page /category/:categoryName

Show products filtered by category (e.g., Watches, Buds)

API: GET /api/products?category=watches

✅ Product Details Page /product/:id

Show product details (title, price, images, reviews)

"Add to Cart" button

API: GET /api/products/:id

API (Reviews): GET /api/reviews/:productId

✅ Cart Page /cart

Show items added to cart

"Proceed to Checkout" button

API: GET /api/cart

✅ Checkout Page /checkout

Collect shipping details

Choose payment method (Cash on Delivery / Online)

API: POST /api/orders

✅ Order Confirmation /order/:id

Show order summary after successful checkout

API: GET /api/orders/:id

2️⃣ User Account Screens (Logged-in Users Only)
✅ Login & Signup /auth/login & /auth/signup

User authentication (JWT stored in HTTP-only cookies)

API: POST /api/users/login & POST /api/users/register

✅ User Profile /profile

Update name, email, password

View order history

API: GET /api/users/profile

✅ Order Details /order/:id

Track order status (Pending, Shipped, Delivered)

Request a refund (if eligible)

API: GET /api/orders/:id & PUT /api/orders/:id/cancel

✅ Leave a Review /review/:productId

Only available if order status is "Delivered"

API: POST /api/reviews

3️⃣ Admin Panel (For Admins Only)
✅ Admin Dashboard /admin

Overview: Total sales, orders, users

API: GET /api/admin/stats

✅ Manage Products /admin/products

Add, edit, delete products

API: POST /api/products & DELETE /api/products/:id

✅ Manage Orders /admin/orders

View and update order status

API: PUT /api/orders/:id/status

✅ Manage Users /admin/users

View, edit, delete users

API: GET /api/users & DELETE /api/users/:id

🔄 Flow of a Typical User Journey
1️⃣ User visits the Landing Page and browses categories 🛍
2️⃣ Clicks on a product to view Product Details 👀
3️⃣ Adds product to Cart and proceeds to Checkout 🛒
4️⃣ Logs in or signs up (if not logged in) 🔐
5️⃣ Enters shipping details & selects payment method 💳
6️⃣ Receives Order Confirmation 🎉
7️⃣ (Optional) Checks Order Status in Profile 👤
8️⃣ (Optional) Leaves a Review after delivery 🌟

🚀 Next Steps for Your Frontend Development
✅ Start with authentication (/auth/login, /auth/signup)
✅ Build the product pages (/, /category/:name, /product/:id)
✅ Implement cart & checkout flow (/cart, /checkout)
✅ Add user profile & order tracking (/profile, /order/:id)
✅ Finally, create admin panel (/admin)

