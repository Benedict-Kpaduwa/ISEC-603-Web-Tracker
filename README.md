# Web Tracking System

**A full-stack, privacy-conscious web tracking and analytics platform** that monitors anonymous visitor activity, aggregates event data, and visualizes real-time metrics on a secure admin dashboard.

Developed using **React (Vite)**, **Tailwind CSS**, and **shadcn/ui** for the frontend, and **Node.js (Express)** with **MongoDB**, **JWT authentication**, and **FingerprintJS** for the backend.

---

## Live Demo

- **Frontend + API:** [https://isec-603-web-tracker.vercel.app/]
- **Admin Dashboard:** `/admin`
- **API Base URL:** `/api`

---

## Project Overview

This project implements a **web tracking and analytics system** that collects **anonymized visitor data** and provides an **administrative dashboard** to visualize key performance metrics such as:

- Total tracked events
- Number of unique visitors
- Events per hour (24h window)
- Top pages by activity
- Recent visitors and last-seen timestamps

It is built according to **privacy and transparency principles**, **avoiding the collection of personally identifiable information (PII)**.

---

## System Architecture

```plaintext
/web-tracking-system
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── routes/
│   ├── models/
│   ├── utils/
│   ├── index.js
│   ├── dev.js
│   └── package.json
│
├── vercel.json
└── README.md

```

---

## Features

### Frontend

- Built with **React (Vite)** and **Tailwind CSS**
- Component design powered by **shadcn/ui**
- Responsive, modern admin dashboard UI
- Realtime visualization with **Recharts**
- Communicates securely with backend APIs

### Backend

- RESTful API built with **Express.js**
- **MongoDB** as database (via Mongoose)
- **JWT-based authentication** for admin login
- **Rate limiting**, **Helmet**, and **CORS** for security
- **FingerprintJS** for anonymous visitor identification
- **Aggregation pipelines** for analytics calculations

### Admin Dashboard

- Secure login for admin access
- Visual charts for events and visitor metrics
- Top active pages, visitor logs, and event analytics

---

## Tech Stack

| Category       | Technologies Used                               |
| -------------- | ----------------------------------------------- |
| **Frontend**   | React, Vite, Tailwind CSS, Recharts, Axios      |
| **Backend**    | Node.js, Express.js, MongoDB, Mongoose          |
| **Security**   | JWT Auth, bcrypt.js, Helmet, express-rate-limit |
| **Tracking**   | FingerprintJS, custom tracking API              |
| **Deployment** | Vercel (frontend + backend in monorepo)         |

---

## Environment Variables

Set these in your **Vercel → Project → Settings → Environment Variables** or in local `.env` files.

### Backend (`server/.env`)

```env
MONGO_URI=mongodb+srv://<your-cluster>/<db>
JWT_SECRET=your_jwt_secret
ADMIN_USER=admin
ADMIN_PASS=password
```
