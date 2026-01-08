# 📝 Notes App – Full Stack CRUD Application

A simple **full-stack Notes application** built using **Next.js (App Router)**, **TypeScript**, **MongoDB**, and **Tailwind CSS**.  
This project demonstrates complete **CRUD operations** and follows modern Next.js best practices.
### Live Link: https://next-ts-note-app.vercel.app
---

## 🚀 Features

- Create a new note
- View all notes
- Update an existing note
- Delete a note
- Automatic timestamps (`createdAt`)
- Full-stack using Next.js API Routes
- MongoDB integration with Mongoose
- Clean and responsive UI with Tailwind CSS

---

## 🛠 Tech Stack

- **Frontend:** Next.js (App Router), React, TypeScript
- **Backend:** Next.js API Routes
- **Database:** MongoDB (Mongoose)
- **Styling:** Tailwind CSS

---

## 📁 Project Structure

```
notes-app/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── notes/
│   │   │       ├── route.ts
│   │   │       └── [id]/route.ts
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── lib/
│   │   └── connectDB.ts
│   ├── models/
│   │   └── Note.ts
│   ├── types/
│   │   └── note.ts
│   └── styles/
├── .env.local
├── package.json
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/notesDB
```

---

## ▶️ Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/notes-app.git
cd notes-app
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run the development server
```bash
npm run dev
```

The app will be available at:
```
http://localhost:3000
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|------|---------|-------------|
| GET | `/api/notes` | Get all notes |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

---

## 🧠 Interview Notes

- Uses **Next.js App Router**
- API routes act as backend services
- MongoDB connection is cached to prevent multiple connections
- Fully typed with TypeScript
- Clean separation of concerns

---

## 📦 Deployment

- Frontend & Backend: **Vercel**
- Database: **MongoDB Atlas**

---

## 📄 License

This project is for educational and interview purposes.

---

### 👤 Author
**Md Shehbaz**
