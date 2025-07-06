# E-Mall - E-Commerce Platform

A full-stack e-commerce platform built with React.js frontend and Node.js backend, featuring user authentication, product management, shopping cart functionality, and payment integration.

## 🚀 Features

### User Features
- **User Authentication**: Register, login, and password recovery with Google OAuth integration
- **Product Browsing**: Browse products with category filtering and search functionality
- **Product Details**: Detailed product pages with images and descriptions
- **Shopping Cart**: Add/remove items, update quantities, and manage cart
- **User Dashboard**: View order history, manage profile, and track orders
- **Responsive Design**: Mobile-friendly interface with modern UI

### Admin Features
- **Admin Dashboard**: Comprehensive admin panel for store management
- **Product Management**: Create, update, and delete products with image upload
- **Category Management**: Organize products with custom categories
- **Order Management**: View and manage customer orders
- **User Management**: Monitor and manage user accounts
- **Analytics**: Track sales and user activity

### Technical Features
- **JWT Authentication**: Secure token-based authentication
- **Payment Integration**: Braintree payment gateway integration
- **Real-time Updates**: Live cart updates and notifications
- **Image Upload**: Cloud-based image storage for products
- **Search & Filter**: Advanced product search and filtering

## 🛠️ Tech Stack

### Frontend
- **React.js 18.3.1** - Modern UI library
- **React Router DOM 6.30.0** - Client-side routing
- **Ant Design 5.8.6** - UI component library
- **Bootstrap 5.3.3** - CSS framework
- **Axios 1.4.0** - HTTP client
- **React Hot Toast 2.4.1** - Notifications
- **FontAwesome** - Icons
- **React Icons 4.10.1** - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js 4.21.2** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose 8.12.1** - MongoDB ODM
- **JWT 9.0.2** - Authentication
- **Bcrypt 5.1.1** - Password hashing
- **Morgan 1.10.0** - HTTP request logger
- **CORS 2.8.5** - Cross-origin resource sharing

### Payment & Authentication
- **Braintree** - Payment gateway
- **Google OAuth** - Social authentication
- **JWT** - Token-based authentication

## 📁 Project Structure

```
emall/
├── client/                 # React frontend
│   ├── public/            # Static files
│   │   ├── src/
│   │   │   ├── components/    # Reusable components
│   │   │   ├── context/       # React context providers
│   │   │   ├── pages/         # Page components
│   │   │   │   ├── Admin/     # Admin dashboard pages
│   │   │   │   ├── Auth/      # Authentication pages
│   │   │   │   └── user/      # User dashboard pages
│   │   │   └── styles/        # CSS stylesheets
│   │   └── package.json
├── server/                # Node.js backend
│   ├── config/           # Database configuration
│   ├── controller/       # Route controllers
│   ├── helper/          # Helper functions
│   ├── middlewares/     # Express middlewares
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   └── app.js          # Main server file
└── package.json
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB database
- Braintree account for payments
- Google OAuth credentials

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd emall
   ```

2. **Install server dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `server/config.env` file with the following variables:
   ```env
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   BRAINTREE_MERCHANT_ID=your_braintree_merchant_id
   BRAINTREE_PUBLIC_KEY=your_braintree_public_key
   BRAINTREE_PRIVATE_KEY=your_braintree_private_key
   REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   PORT=8080
   ```

4. **Start the server**
   ```bash
   cd server
   npm start
   ```
   The server will run on `http://localhost:8080`

### Frontend Setup

1. **Navigate to client directory**
   ```bash
   cd client
   ```

2. **Install client dependencies**
   ```bash
   npm install
   ```

3. **Start the React development server**
   ```bash
   npm start
   ```
   The frontend will run on `http://localhost:3000`

## 🎯 Usage

### For Users
1. **Register/Login**: Create an account or sign in with Google
2. **Browse Products**: Explore products by category or search
3. **Add to Cart**: Add products to your shopping cart
4. **Checkout**: Complete purchase with Braintree payment
5. **Track Orders**: Monitor order status in your dashboard

### For Admins
1. **Access Admin Panel**: Login with admin credentials
2. **Manage Products**: Add, edit, or remove products
3. **Create Categories**: Organize products with categories
4. **Monitor Orders**: View and manage customer orders
5. **User Management**: Oversee user accounts and activity

## 🔧 API Endpoints

### Authentication
- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/forgot-password` - Password recovery

### Products
- `GET /api/v1/product/products` - Get all products
- `GET /api/v1/product/product/:slug` - Get single product
- `POST /api/v1/product/create-product` - Create product (Admin)
- `PUT /api/v1/product/update-product/:id` - Update product (Admin)
- `DELETE /api/v1/product/delete-product/:id` - Delete product (Admin)

### Categories
- `GET /api/v1/category/categories` - Get all categories
- `POST /api/v1/category/create-category` - Create category (Admin)

## 🚀 Deployment

### Backend Deployment (Vercel)
The project includes `vercel.json` configuration for easy deployment on Vercel.

### Frontend Deployment
Build the React app for production:
```bash
cd client
npm run build
```

## 🔒 Security Features

- JWT token-based authentication
- Password hashing with bcrypt
- Protected admin routes
- CORS configuration
- Input validation and sanitization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.

---

**Built with ❤️ using React.js and Node.js** 