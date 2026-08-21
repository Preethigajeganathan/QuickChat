# 💬 QuickChat

QuickChat is a real-time chat web application where users can create an account, log in securely, update their profile, see online users, and communicate through real-time messaging.

## ✨ Features

- 🔐 User Signup & Login
- 🔑 JWT Authentication
- 🔒 Secure Password Hashing with bcrypt
- 💬 Real-Time Messaging
- 🟢 Online User Status
- 👤 Profile Management
- 🖼️ Profile Picture Upload with Cloudinary
- ✏️ Update Name & Bio
- 👁️ Show/Hide Password
- 🔔 Toast Notifications
- 📱 Responsive UI

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Axios
- Socket.IO Client
- React Hot Toast
- React Icons

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- JWT
- bcryptjs
- Cloudinary
- CORS
- dotenv

## 🔐 Authentication

QuickChat uses JWT for authentication.

Passwords are securely hashed using bcryptjs before being stored in MongoDB.

Protected routes use JWT authentication to ensure that only authenticated users can access private features.

## 💬 Real-Time Chat

QuickChat uses Socket.IO for real-time communication between users.

The application also tracks connected users and displays their online status in real time.

## 👤 Profile Management

Users can update:

- Full Name
- Bio
- Profile Picture

Profile pictures are uploaded to Cloudinary, and the returned image URL is stored in MongoDB.

## 🗄️ Database

MongoDB is used to store user and message information.

User data includes:

- Full Name
- Email
- Hashed Password
- Profile Picture
- Bio
- Created At
- Updated At

## ⚙️ Environment Variables

### Server `.env`

Create a `.env` file inside the `server` folder.

MONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

### Client `.env`

Create a `.env` file inside the `client` folder.

VITE_BACKEND_URL=http://localhost:5000

> ⚠️ Never upload your `.env` files or API secrets to GitHub.

## 🚀 Installation

### 1. Clone the Repository

    git clone https://github.com/Preethigajeganathan/QuickChat.git
    cd quickchat

### 2. Install Client Dependencies

    cd client
    npm install

### 3. Install Server Dependencies

Open another terminal:

    cd server
    npm install

## ▶️ Run the Application

### Start the Backend

Inside the `server` folder:

    npm run dev

The backend will run on:

    http://localhost:5000

### Start the Frontend

Inside the `client` folder:

    npm run dev

Vite will provide the local frontend URL in the terminal.

## 📁 Project Structure

    QuickChat/
    │
    ├── client/
    │   ├── src/
    │   ├── public/
    │   ├── package.json
    │   └── .env
    │
    ├── server/
    │   ├── controllers/
    │   ├── middleware/
    │   ├── models/
    │   ├── routes/
    │   ├── lib/
    │   ├── server.js
    │   ├── package.json
    │   └── .env
    │
    └── README.md

## 🔄 Application Flow

1. User creates an account.
2. Password is hashed using bcrypt.
3. User information is stored in MongoDB.
4. JWT token is generated after authentication.
5. The frontend stores the authentication token.
6. Protected requests are authenticated using the token.
7. Socket.IO connects the user for real-time communication.
8. Online users are tracked by the server.
9. Users can send and receive messages in real time.
10. Profile pictures are uploaded to Cloudinary.

## 🖼️ Profile Picture Upload

When a user selects a profile picture:

1. The image is converted to Base64 on the client.
2. The image is sent to the backend.
3. The backend uploads the image to Cloudinary.
4. Cloudinary returns the image URL.
5. The URL is saved in MongoDB.
6. The updated profile is returned to the frontend.

## 🔒 Security

QuickChat uses:

- JWT authentication
- Password hashing with bcrypt
- Protected API routes
- Environment variables for sensitive credentials
- CORS configuration

Sensitive credentials such as MongoDB, JWT, and Cloudinary keys should never be committed to the repository.

## 🛠️ Useful Commands

### Client

    npm install
    npm run dev
    npm run build
    npm run preview

### Server

    npm install
    npm run dev

## 📦 Main Dependencies

### Frontend

- react
- react-dom
- react-router-dom
- axios
- tailwindcss
- react-hot-toast
- react-icons
- socket.io-client

### Backend

- express
- mongoose
- bcryptjs
- jsonwebtoken
- socket.io
- cloudinary
- cors
- dotenv

## 👨‍💻 Author

**Preethiga**

Built with ❤️ using React, Node.js, MongoDB, Express, and Socket.IO.

## 📄 License

This project is created for learning and personal use.