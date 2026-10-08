# 🛍️ Forever – MERN E-Commerce Platform

**Forever** is a full-stack e-commerce web application built using the **MERN stack — MongoDB, Express.js, React.js, and Node.js**.

The application provides a complete online shopping experience where users can browse products, view product details, manage their shopping cart, authenticate securely, and place orders. The project also includes backend REST APIs and database integration for managing products, users, and orders.

The project was developed with a focus on **clean code structure, reusable React components, RESTful API design, database integration, authentication, and responsive user experience**.

---

## ✨ Features

### 👤 User Features

* User registration and login
* JWT-based authentication
* Protected routes
* Browse products
* View product details
* Search products
* Filter products
* Add products to cart
* Update cart quantities
* Remove products from cart
* Place orders
* View order details
* View order history

### 🛠️ Admin Features

* Admin authentication
* Add products
* Edit product details
* Delete products
* Manage product inventory
* View customer orders
* Manage order information

### ⚡ Application Features

* RESTful APIs
* MongoDB database integration
* Mongoose data modeling
* Responsive React interface
* Reusable React components
* Form validation
* API error handling
* Loading and error states
* Protected backend endpoints
* Modular backend architecture

---

# 🧰 Technologies Used

## Frontend

* **React.js**
* **JavaScript**
* **HTML5**
* **CSS3**
* **React Router**
* **Axios**

## Backend

* **Node.js**
* **Express.js**
* **REST APIs**
* **JWT**
* **bcrypt**

## Database

* **MongoDB**
* **Mongoose**

## Development Tools

* **Kiro** – AI-assisted development
* **Git**
* **GitHub**
* **Postman** – API testing
* **VS Code**

---

# 🏗️ Project Structure

```text
Forever/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json
```

---

# ⚙️ Setup and Installation

## 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/forever.git

cd forever
```

Replace `YOUR_USERNAME` with your GitHub username.

---

## 2. Install Backend Dependencies

```bash
cd server
npm install
```

---

## 3. Configure Environment Variables

Create a `.env` file inside the `server` directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

For a local MongoDB database:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/forever
JWT_SECRET=your_secret_key
```

> **Important:** Never commit your `.env` file or other sensitive credentials to GitHub.

---

## 4. Install Frontend Dependencies

Open a new terminal:

```bash
cd client
npm install
```

---

# ▶️ How to Run the Application

## Start the Backend

Navigate to the server directory:

```bash
cd server
npm run dev
```

The backend server will run on:

```text
http://localhost:5000
```

---

## Start the Frontend

Open another terminal:

```bash
cd client
npm run dev
```

The React application will run on the URL displayed by Vite, usually:

```text
http://localhost:5173
```

Open the URL in your browser to use Forever.

---

# 🔌 API Endpoints

The backend exposes RESTful APIs for authentication, products, and orders.

## Authentication

```text
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
```

## Products

```text
GET    /api/products
GET    /api/products/:id
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
```

## Orders

```text
POST /api/orders
GET  /api/orders
GET  /api/orders/:id
```

> API routes may vary depending on the final implementation of the project.

---

# 🤖 AI Development Tool

## Kiro

**Kiro** was used as the AI-assisted development tool during the development and refinement of Forever.

Kiro was used to assist with development tasks such as component development, API implementation, debugging, database integration, and code refactoring.

AI-generated suggestions were **reviewed, tested, and modified manually** before being integrated into the final project.

The purpose of using Kiro was to improve development efficiency while maintaining an understanding of the application's architecture and implementation.

---

# 🧠 AI Development Experience

During the development of Forever, Kiro was used as a development assistant for specific technical tasks.

The generated code and suggestions were not blindly accepted. Each implementation was reviewed, tested, and modified where necessary to match the application's requirements.

### 1. React Component Development

Kiro was used to assist with developing and improving reusable React components for the e-commerce interface.

Examples included:

* Product cards
* Product listing components
* Navigation components
* Forms
* Cart-related components

The generated components were reviewed and adjusted to maintain consistency with the existing application structure.

---

### 2. REST API Development

Kiro was used to assist in creating and improving Express.js REST APIs for the application.

This included APIs related to:

* User authentication
* Product management
* Cart operations
* Order management

The API implementation was reviewed and tested using Postman to verify request handling, responses, validation, and error cases.

---

### 3. MongoDB and Database Integration

Kiro was used to assist with MongoDB and Mongoose integration.

It helped with:

* Designing Mongoose schemas
* Structuring database models
* Implementing database queries
* Identifying potential validation issues

The database operations were tested against the actual MongoDB database to ensure that data was correctly created, retrieved, updated, and deleted.

---

### 4. Debugging and Error Handling

Kiro was used during debugging to analyze errors encountered during development.

For example, when an API or frontend component produced unexpected behavior, the relevant code and error information were provided to Kiro for analysis.

The suggested solutions were reviewed and tested manually before being applied.

This helped identify issues while also requiring manual verification of whether the proposed solution actually solved the problem.

---

### 5. Code Refactoring

Kiro was also used to review existing code and suggest improvements related to:

* Code organization
* Reusable components
* Backend structure
* Controller and route separation
* Duplicate code
* Error handling
* Maintainability

The suggestions were evaluated before implementation, and only relevant improvements were incorporated into the final codebase.

---

# 🔐 Security

The application implements several basic security practices:

* Password hashing using bcrypt
* JWT-based authentication
* Protected API routes
* Authentication middleware
* Environment variables for sensitive configuration
* `.env` excluded from Git
* Input validation
* Authorization for administrative operations

---

# 🧪 Testing

The application was tested during development using:

* Browser-based testing
* Postman API testing
* MongoDB database verification
* Authentication testing
* CRUD operation testing
* Invalid input testing
* API error handling testing

---

# 📌 Development Approach

The project followed an iterative development approach:

```text
Requirement
     ↓
Feature Development
     ↓
AI-Assisted Implementation
     ↓
Manual Code Review
     ↓
Testing
     ↓
Debugging
     ↓
Refactoring
     ↓
Final Implementation
```

Kiro was used as a development assistant throughout selected stages, while the final implementation was reviewed and tested manually.

---

# 🚀 Future Improvements

Future versions of Forever could include:

* Online payment integration
* Product reviews and ratings
* Wishlist functionality
* Email notifications
* Advanced admin analytics
* Order tracking
* Product recommendation system
* Automated unit and integration testing
* Docker support
* Deployment with CI/CD

---

# 👨‍💻 Author

**Your Name**

GitHub: `https://github.com/Ritikrak`

---

# 📄 License

This project was developed for educational, portfolio, and technical assessment purposes.
