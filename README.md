# 🚀 Express DELETE Route Example

[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-black)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-green)](https://mongoosejs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](#license)

A minimal **Express.js + MongoDB** project demonstrating the **DELETE** HTTP method with clean folder structure, controllers, and error handling.

---

## ✨ Features
- RESTful **DELETE** endpoint → remove document by `:id`
- **MVC structure**: controller, model, router, utils
- Centralized error handling with async wrapper
- Configurable using `.env`
- Ready for Postman / cURL testing

---

## 🗂️ Project Structure
```js
Express DELETE route/
├─ controller/
│  └─ authController.js
├─ model/
│  └─ User.js
├─ router/
│  └─ authRoute.js
├─ utils/
│  └─ config.js
├─ .env
├─ app.js
├─ package.json
└─ server.js
```

---

## ⚙️ Setup & Run

1️⃣ **Clone & install**
```bash
git clone https://github.com/IT-HARISH-R/Express-DELETE-route.git
cd Express-DELETE-route
npm install
```


2️⃣ Add environment variables (.env)
```js
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/express_delete_demo

```
3️⃣ Start the server
```js
npm run dev 
```