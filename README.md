## Mini Task Manager
A full-stack Task Manager app with Create, Read, Update, Delete (CRUD) functionality, built using:
- **Frontend**: Next.js + Tailwind CSS  
- **Backend**: Express (Node.js) + PostgreSQL (via Prisma)  
- **Database**: Hosted on Render  
- **Deployment**: Frontend (Vercel) | Backend (Render)

## Project Structure

├── backend/
|   └── prisma/
│   |   └── schema.prisma
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   └── index.ts
│   
├── frontend/
|   └── src/
│        └── ├── components/
|        |   ├── app/
│        |   └── context/
│   
└── README.md

## API Details
Base URL: [https://mini-task-manager-mzdy.onrender.com/api](https://mini-task-manager-mzdy.onrender.com)

| Method | Endpoint         | Description         |
|--------|------------------|---------------------|
| GET    | `/tasks`         | Fetch all tasks     |
| GET    | `/tasks/:id`     | Get task by ID      |
| POST   | `/tasks`         | Create a new task   |
| PUT    | `/tasks/:id`     | Update a task       |
| DELETE | `/tasks/:id`     | Delete a task       |

## Run Locally
### 1. Clone the repo
```
git clone https://github.com/shwetkamal-gaud/mini-task-manager.git
cd mini-task-manager
```

### 2. Backend Setup
- **Note: Before prisma command create the .env file and set the value of DATABASE_URL**
```
cd backend
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

### 3. Frontend Setup
```
cd frontend
npm install
npm run dev
```

## Deployment
- **Frontend**: https://mini-task-manager-nine.vercel.app
- **Backend**:https://mini-task-manager-mzdy.onrender.com

## Answers
### 1. Why did you choose this project structure?
Ans. For clear separation of concerns between frontend and backend. And each UI piece (form, modal, task card) is reusable.

### 2. How did you separate frontend and backend concerns?
Ans. APIs reside under /api in Express, called from the Next.js app via absolute endpoints and configured cors with both url of frontend

### 3. How would you handle errors and edge cases?
Ans. Validations on input fields (empty title, invalid status) and 404s and DB errors captured with status codes + meaningful messages.

### 4. What security features would you add in production?
Ans. Environment variables using .env and CORS restrictions tightened to known domains.

### 5. What would you improve if you had 1 full day?
- Add user authentication (JWT or session-based login).
- Enable filtering by status or search title.
- Add drag-and-drop task reordering.
- Improve animations and mobile responsiveness with Framer Motion.

