# 🛒 MERN E-Commerce Application

A full-stack E-Commerce web application built with the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. The application allows users to browse products, add items to the cart, place orders, make payments, and manage their accounts securely.

---

## 🚀 Features

### 👤 Authentication
- User Sign Up
- User Sign In
- JWT-based authentication
- Protected routes
- User profile management

### 🛍️ Product Management
- Browse products
- Product details page
- Search and filter products
- Category-wise products

### 🛒 Shopping Cart
- Add products to cart
- Update product quantity
- Remove items from cart
- View cart summary
- Automatic total price calculation

### 💳 Payment System
- Secure payment integration
- Order amount calculation
- Payment confirmation
- Order success page

### 📦 Order Management
- Place orders using **Order Now**
- View order history
- Order details
- Order status tracking

### 📊 Total Values
- Product subtotal
- Quantity calculation
- Tax calculation
- Shipping charges
- Grand total amount

---

## 🏗️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Context API / Redux
- Bootstrap / Tailwind CSS

### Backend
- Node.js
- Express.js
- JWT Authentication
- REST APIs

### Database
- MongoDB
- Mongoose

### Payment Gateway
- Stripe / Razorpay

---

## 📂 Project Structure

```
ecommerce-app/
│
├── client/                 # React Frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/                 # Node.js Backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/ecommerce-app.git
cd ecommerce-app
```

### Install Backend Dependencies

```bash
cd server
npm install
```

### Install Frontend Dependencies

```bash
cd ../client
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the server directory and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

---

## ▶️ Run the Application

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

```bash
cd client
npm start
```

The application will run at:

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

---

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | `/api/auth/signup` | Register user |
| POST | `/api/auth/signin` | Login user |

### Products

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get product details |

### Cart

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | `/api/cart/add` | Add item to cart |
| PUT | `/api/cart/update` | Update quantity |
| DELETE | `/api/cart/remove/:id` | Remove item |

### Orders

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | `/api/orders` | Create order |
| GET | `/api/orders` | Get user orders |

### Payments

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | `/api/payment/create` | Process payment |

---

## 🔄 Workflow

1. User signs up or signs in.
2. Browse products.
3. Add products to the cart.
4. Cart automatically calculates total values.
5. Click **Order Now**.
6. Complete payment.
7. Order is created and saved in the database.
8. User can view order history and status.

---

## 📸 Screens

- Home Page
- Product Page
- Cart Page
- Checkout Page
- Payment Page
- Order Confirmation Page
- User Profile

---

## 🔒 Security

- JWT Authentication
- Password Hashing with bcrypt
- Protected APIs
- Environment Variables for Secrets

---

## Future Enhancements

- Admin Dashboard
- Product Reviews & Ratings
- Wishlist Feature
- Coupons & Discounts
- Email Notifications
- Inventory Management
- Real-time Order Tracking

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Added new feature"
```

4. Push to GitHub.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

### ⭐ If you like this project, don't forget to give it a star!
