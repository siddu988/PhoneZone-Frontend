
# 📱 PhoneZone – Full Stack Ecommerce Application  
A complete mobile & accessories ecommerce web application built using the **MERN stack** with authentication, cart system, wishlist, product reviews, orders, Razorpay mock payment, admin panel, and full deployment.

---

## 🚀 Live Demo

### 🟩 Frontend (Vercel)  
👉 https://phone-zone-frontend-siddu988s-projects.vercel.app/

### 🟪 Backend API (Render)  
👉 https://phonezone-backend.onrender.com

---

## 📘 Project Description

**PhoneZone** is a modern ecommerce platform for mobile phones and accessories.  
Users can browse products, add to cart, wishlist items, place orders, submit reviews, and manage their profile.  
It includes a simple **admin system** for managing products.

This project is built for portfolio + interview demonstration and focuses on clean architecture, functionality, and real-world ecommerce concepts.

---

# ⭐ Features

### 🧑‍💻 User Features
- Register & Login (JWT Authentication)
- Browse all products
- Product detail page with:
  - ⭐ Rating  
  - 💬 Customer Reviews  
  - 📌 Similar Products  
- Add to Cart / Remove from Cart
- Wishlist system (save items)
- Checkout:
  - Cash on Delivery (COD)
  - Mock UPI Payment
  - Mock Card Payment
- Order success page
- Orders history (My Orders)
- Support ticket system (Contact Help)

### 🛠 Admin Features
- Add New Product
- Update Product
- Delete Product
- Manage Inventory
- View All Orders  
*(Admin Panel UI can be added in future)*

---

# 🏗 Tech Stack

### 🎨 Frontend
- React + Vite
- Tailwind CSS
- React Router
- Context API (Cart System)
- Fetch API for backend communication

### ⚙ Backend
- Node.js
- Express.js
- JWT Authentication
- Multer (optional for images)
- MongoDB Mongoose
- MVC Architecture

### 🗄 Database
- MongoDB Atlas (Cloud)

### ☁ Deployment
- **Frontend → Vercel**
- **Backend → Render**
- **Database → MongoDB Atlas**

---

# 🗂 Folder Structure

PhoneZone/
│
├── frontend/ # React + Vite project
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── context/
│ │ ├── utils/api.js
│ │ └── App.jsx
│ └── package.json
│
├── backend/ # Express server
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ ├── .env
│ └── package.json
│
└── README.md


---

# 🔌 API Endpoints (Backend)

### 🔐 Auth Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Login & receive JWT |

### 📦 Product Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/products | Get all products |
| GET | /api/products/:id | Get product details |

### ⭐ Review Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/reviews/:productId | Post review |
| GET | /api/reviews/product/:id | Get all reviews for product |

### ❤️ Wishlist Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/wishlist/:productId | Add to wishlist |
| GET | /api/wishlist | Get wishlist items |
| DELETE | /api/wishlist/:productId | Remove item |

### 🛒 Order Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/orders | Create new order |
| GET | /api/orders | Get user's orders |

### 🎧 Help/Ticket Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/tickets | Create help ticket |
| GET | /api/tickets | List tickets |

---

# 🧮 ER Diagram (MongoDB Schema)

User
│ _id
│ name
│ email
│ password
│ wishlist[]
│ orders[]
└───────────────┐

Product
│ _id
│ name
│ desc
│ price
│ category/tag
│ image
│ rating
└───────┐

Review
│ _id
│ productId → Product
│ userId → User
│ rating
│ comment
└───────┘

Order
│ _id
│ userId → User
│ items[{ productId, qty, price }]
│ totalAmount
│ paymentMethod
│ address{}
│ createdAt
└───────────────┘

Ticket
│ _id
│ message
│ userId
│ createdAt
└───────────────┘


---

# 🏃‍♂ How to Run Locally

### 1️⃣ Clone the repo
```bash
git clone <your-repo-url>

2️⃣ Backend Setup
cd backend
npm install


Create .env:

MONGO_URI=your_mongo_atlas_url
JWT_SECRET=your_secret
PORT=5000


Run server:

node server.js

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

🔑 Admin Credentials (for testing)
Email: admin@phonezone.com
Password: Admin@123

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
