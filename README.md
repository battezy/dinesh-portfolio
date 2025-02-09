# 🎨 Portfolio Management Admin Panel

A **full-stack MERN application** that allows an **admin** to manage portfolio content, including **Home, Academics, Achievements, Publications, Conferences, and Gallery**.

🚀 **Live Demo**: [Click Here](https://pdinesh.vercel.app/)  
📺 **Video Demo**: [Watch Here](#demo-video)  
📸 **Screenshots**: [See Below](#screenshots)  

---

## 🏆 **Features**
✅ **Admin Authentication** (Secure JWT-based login)  
✅ **Home Page Management** (Update About section & upload images)  
✅ **Academics Management** (Add, edit, delete academic records)  
✅ **Achievements Management** (CRUD operations for achievements)  
✅ **Publications & Conferences Management** (Add & edit research work)  
✅ **Gallery Management** (Upload & delete images stored in cloud/local storage)  
✅ **Admin Profile Management** (Change password & update profile)  
✅ **JWT Token Auto-Refresh** (Prevents session expiry issues)  
✅ **Charts & Stats** (Visual analytics in the admin dashboard)  
✅ **Fully Responsive** (Mobile & Web support)  

---

## 🌟 **UI Preview**
### 📸 **Screenshots**
#### 🔐 **Admin Login**
![Admin Login](https://via.placeholder.com/800x400?text=Admin+Login)

#### 📊 **Admin Dashboard**
![Admin Dashboard](https://via.placeholder.com/800x400?text=Admin+Dashboard)

#### 🖼 **Gallery Management**
![Gallery Management](https://via.placeholder.com/800x400?text=Gallery+Management)

---

## 🎥 **Demo Video**
[![Watch Demo](https://via.placeholder.com/800x400?text=Click+to+Watch+Demo)](https://your-demo-video-link.com)

---

## 🛠 **Tech Stack**
### **Frontend (React + Vite)**
- React.js (Component-based UI)  
- React Router (For navigation)  
- Axios (For API requests)  
- Tailwind CSS / Normal CSS (For styling)  
- React Icons (For UI enhancement)  
- Recharts (For analytics charts)  

### **Backend (Node.js + Express)**
- Node.js & Express.js (REST API)  
- MongoDB + Mongoose (Database for storing portfolio content)  
- JSON Web Token (JWT) (Authentication & secure APIs)  
- Multer + Cloudinary (For file uploads)  
- bcrypt.js (For password hashing)  

---

## 🔥 **Setup Instructions**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/portfolio-admin-panel.git
cd portfolio-admin-panel

cd server
npm install


PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

npm start

cd client
npm install

VITE_APP_BASE_URL=http://localhost:5000/api

npm run dev

