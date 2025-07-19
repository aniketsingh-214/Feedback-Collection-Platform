# Feedback Collection Platform

A full-stack feedback collection application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) with **Tailwind CSS** for a clean and responsive UI.

## 🚀 Live Demo (optional)
If deployed on Vercel or Render, add your link here.

---

## 📌 Features

### 👤 Admin (Business)
- Register & login
- Create feedback forms (3–5 questions)
- View submitted responses (tabular view)
- Share public form link

### 🧑‍💻 User (Customer)
- Access public feedback form via shared link
- Submit answers anonymously (no login)

---

## 🛠️ Tech Stack

- **Frontend**: React.js, React Router, Axios, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB, JWT Auth
- **Database**: MongoDB Atlas / Local MongoDB
- **Others**: bcrypt, dotenv, CORS

---

## ⚙️ Setup Instructions

### 🧩 Backend

```bash
cd backend
npm install
# Add .env file as shown below
npm start
````

Create a `.env` file:

```
MONGO_URI=mongodb://localhost:27017/mongoDB
JWT_SECRET=supersecretkey
```

### 🎨 Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔗 Folder Structure

```
feedback-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── App.jsx
└── README.md
```

---

## ✨ Design Decisions

* Tailwind CSS was used to rapidly prototype a clean UI.
* Public form sharing allows feedback without requiring login.
* JWT-based session management ensures admin security.
* The form schema supports both text and future enhancements like MCQs.

---

## 🧪 API Overview

| Method | Endpoint                | Description                     |
| ------ | ----------------------- | ------------------------------- |
| `POST` | `/api/auth/register`    | Admin registration              |
| `POST` | `/api/auth/login`       | Admin login (returns JWT)       |
| `POST` | `/api/forms`            | Create new form (auth required) |
| `GET`  | `/api/forms/my`         | Get all forms by admin          |
| `GET`  | `/api/forms/public/:id` | Get public form data            |
| `POST` | `/api/forms/submit/:id` | Submit feedback to form         |

---

## ✅ Status

## 📮 Feedback

Feel free to open issues or contribute if you'd like to extend this!

```

---

Let me know if you want me to write a `package.json` with combined scripts or a deployment guide for Render/Vercel.
```
# Feedback-Collection-Platform
A full-stack feedback platform where admins create customizable forms, share public links, and view responses in a dashboard. Users can submit feedback without login. Includes JWT auth, response summary, and optional CSV export.
