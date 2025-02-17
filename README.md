# **GoTogether: Ride-sharing for IIT Indore Students**

Welcome to **GoTogether**, the ultimate ride-sharing platform designed specifically for IIT Indore students! Imagine a world where you can easily find or offer rides to fellow students, ensuring a smooth, affordable, and eco-friendly travel experience across the campus and beyond. 🚗💨

---

## 🏗️ **Deployment**

The GoTogether platform is live and fully operational.

### 🔗 **Live Links:**
- **Frontend (Vercel):** [GoTogether Frontend](https://go-together-frontend.vercel.app/)
- **Backend (Render):** [GoTogether API](https://go-together-backend.onrender.com/api)

### 🔸 **Using the App:**
Simply visit the [GoTogether App](https://go-together-frontend.vercel.app/) to start your ride-sharing experience. You can search for available rides, offer your own, and track your ride status easily. Sign in using **Google** or **email** to get started.

---

## 📄 **Features**

### For Students (Riders & Drivers):
- 🚲 **Browse Rides**: Easily search for available rides or offer your own journey.
- 🏠 **Offer Rides**: Share your rides with fellow students and earn rewards!
- 🚘 **Book Rides**: Secure a ride with just a few clicks.
- 🤝 **Social Sharing**: Share your ride details with friends and increase carpooling efficiency.
- 🛡️ **Ride Status**: Track the status of your rides in real time.
- 💬 **Chat**: In-app messaging to communicate with drivers or passengers.
- 🚦 **Notifications**: Get instant updates on ride bookings, cancellations, and arrivals through **Firebase Cloud Messaging (FCM)**.

### General Features:
- 👥 **Authentication**: Easy sign-in via **Google** or **Email/Password**.
- 📆 **Ride Scheduling**: Plan your rides in advance and get timely reminders.
- 🔐 **Role-Based Access**: Different features for riders and drivers, ensuring a seamless experience for both parties.
- 🧾 **Ride Details**: View ride routes, price estimates, and vehicle information.
- 🌍 **Eco-Friendly**: Encourage carpooling to reduce traffic and carbon footprint.

---

## 🚀 **Tech Stack**

- **Frontend:** [React.js](https://reactjs.org/) with [Next.js](https://nextjs.org/)
- **Backend:** [Node.js](https://nodejs.org/) with [Express.js](https://expressjs.com/)
- **Database:** [MongdDb Atlas](https://cloud.mongodb.com/)

- **Authentication:** [Firebase Authentication](https://firebase.google.com/products/auth)
- **Notifications:** [Firebase Cloud Messaging (FCM)](https://firebase.google.com/docs/cloud-messaging)
- **Hosting:** [Vercel](https://vercel.com/) for the frontend, [Render](https://render.com/) for the backend

---

## 📚 **Project Structure**
```
GoTogether/
|-- frontend/        # React/Next.js frontend
|   |-- pages/       # Pages like Home, Rides, Profile, etc.
|   |-- components/  # Reusable UI components (Navbar, RideCard, etc.)
|   |-- public/      # Static assets (images, fonts, etc.)
|   |-- .env         # Frontend environment variables (Not shared)
|
|-- backend/         # Node.js/Express backend
|   |-- routes/      # API routes (Auth, Ride Management, etc.)
|   |-- models/      # PostgreSQL models (User, Ride, etc.)
|   |-- controllers/ # Business logic (authentication, ride booking, etc.)
|   |-- .env         # Backend environment variables (Not shared)
|
|-- README.md        # Project documentation
|-- package.json     # Dependency management
```

---

## 📦 **Installation & Setup**

### 1. **Clone the Repository**
```bash
git clone https://github.com/your-username/gotogether.git
cd gotogether
cd frontend
npm install
```

### 🛡️ Environment Variables (Frontend)
Create a `.env` file in the frontend directory:
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
```

### Setup Backend (Node.js/Express)
```bash
cd ../backend
npm install
```

### 🏠 Environment Variables (Backend)
Create a `.env` file in the backend directory:
```
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
```

### 💡 Running the Application
1. **Start Backend**
    ```bash
    cd backend
    npm start
    ```
2. **Start Frontend**
    ```bash
    cd frontend
    npm run dev
    ```

### 🔗 Visit the App:
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000 (or your configured port)

---

## 🖼️ Screenshots
![Screenshot 2025-02-17 203712](https://github.com/user-attachments/assets/d17353c7-b915-4f56-9712-b808a2235c29)
![Screenshot 2025-02-17 203447](https://github.com/user-attachments/assets/ec26ab06-bd3a-4df7-857c-6471a8a0c4ba)
![Screenshot 2025-02-17 203204](https://github.com/user-attachments/assets/c42ff02d-686f-43a6-a888-bcbdec75d58d)
[Screenshot 2025-02-17 203847](https://github.com/user-attachments/assets/3355432b-a1db-41e7-8344-52f9f5420759)
![Screenshot 2025-02-17 203922](https://github.com/user-attachments/assets/769e8db4-b0ee-47cf-9b10-e9edcb46a95f)
![Screenshot 2025-02-17 204032](https://github.com/user-attachments/assets/b989ca59-6f9e-4704-8424-4b2f02d66624)
![Screenshot 2025-02-17 203947](https://github.com/user-attachments/assets/0e77d9e3-dd32-4fee-aab4-64288b54cb7b)
![Screenshot 2025-02-17 203859](https://github.com/user-attachments/assets/960cc4b6-5db3-4c7f-bdfa-6103f19c05c8)
![Screenshot 2025-02-17 203947](https://github.com/user-attachments/assets/0e77d9e3-dd32-4fee-aab4-64288b54cb7b)

---

## 🛠️ Troubleshooting
- **Environment Variables Not Working:**
  - Double-check that your `.env` files are properly configured.
- **Mongodb Atlas Connection Issues:**
  - Verify that your Atlas database is running and accessible.
- **Firebase Authentication Errors:**
  - Ensure your Firebase credentials are correct and that you've set up authentication correctly.
- **Ride Booking Issues:**
  - Check if there are any errors in the booking flow and confirm your ride details are correct.

---

## 🙌 Contributing
We welcome contributions from everyone! You can fork the repository, submit pull requests, or open issues for feature requests or bug fixes.

---

## 📢 Feedback & Suggestions
Got an idea to improve the app? We would love to hear from you! You can reach out through the Contact Us section or open an issue in the GitHub repository.

Join GoTogether today and make your IIT Indore rides smarter and more connected! 🚗💨

