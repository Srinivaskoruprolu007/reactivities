# Reactivities

A modern, full-stack activities management application built with **.NET 9 (C#)**, **React 19**, **TypeScript**, **Vite**, **Zustand**, **React Query**, **DaisyUI**, **Tailwind CSS**, and **Entity Framework Core**.

---

## 🏗️ Architecture Overview

- **Backend:**
  - ASP.NET Core Web API (C# .NET 9)
  - Clean Architecture (Domain, Application, Persistence, API layers)
  - CQRS with MediatR
  - Entity Framework Core (SQLite)
  - AutoMapper for DTO mapping
  - RESTful endpoints
  - CORS enabled for frontend integration

- **Frontend:**
  - React 19 + TypeScript
  - Vite for fast development
  - Zustand for UI state management (edit mode, selected activity)
  - React Query for data fetching, caching, and mutations
  - DaisyUI + Tailwind CSS for modern, responsive UI
  - React Hook Form for robust form handling
  - React Router for navigation

---

## 🛠️ Technologies Used

### Backend
- **.NET 9** (ASP.NET Core Web API)
- **Entity Framework Core** (SQLite)
- **MediatR** (CQRS & request/response pipeline)
- **AutoMapper** (object mapping)
- **CORS** (cross-origin resource sharing)

### Frontend
- **React 19**
- **TypeScript**
- **Vite**
- **Zustand** (UI state)
- **@tanstack/react-query** (data fetching & mutations)
- **DaisyUI** & **Tailwind CSS** (UI components & styling)
- **React Hook Form** (form management)
- **Axios** (HTTP client)
- **React Router** (routing)

---

## 📦 Project Structure

```
reactivities/
│
├── API/                # ASP.NET Core Web API (entry point)
├── Application/        # Application logic (CQRS, MediatR, Handlers)
├── Domain/             # Domain models/entities
├── Persistence/        # EF Core DbContext, migrations, seed data
├── client/             # React frontend (Vite, TS, Zustand, React Query)
│   ├── src/
│   │   ├── app/layout/         # App shell, NavBar, App.tsx
│   │   ├── features/activities/
│   │   │   ├── api/            # React Query hooks
│   │   │   ├── dashboard/      # ActivityDashboard, ActivityCard
│   │   │   ├── details/        # ActivityDetails
│   │   │   ├── form/           # ActivityForm
│   │   │   └── types.ts        # Activity type
│   │   ├── store/              # Zustand store
│   │   ├── hooks/              # Custom hooks (useActivities)
│   │   └── main.tsx            # App entry
│   ├── public/                 # Static assets
│   └── ...
└── ...
```

---

## 🚦 Key Features
- **CRUD Activities**: Create, read, update, and delete activities.
- **Modern UI**: Responsive, accessible, and beautiful with DaisyUI & Tailwind.
- **Optimistic UI**: Fast, user-friendly updates with React Query.
- **Type Safety**: End-to-end TypeScript and C# models.
- **Clean Architecture**: Separation of concerns, scalable and maintainable.
- **Form Validation**: Robust forms with React Hook Form.
- **State Management**: Centralized UI state with Zustand, server state with React Query.
- **API Integration**: Secure, RESTful endpoints with CORS.

---

## 🚀 Getting Started

### Prerequisites
- [.NET 9 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/9.0)
- [Node.js](https://nodejs.org/) (v18+ recommended)

### Backend
```sh
cd API
# Update connection string in appsettings.json if needed
# Run migrations and seed data
dotnet ef database update
dotnet run
```

### Frontend
```sh
cd client
npm install
npm run dev
```

---

## 🧩 How It Works
- **Backend** exposes `/api/activities` endpoints for CRUD operations.
- **Frontend** fetches and mutates activities using React Query hooks (`useFetchActivities`, `useCreateActivity`, etc.).
- **Zustand** manages UI state (edit mode, selected activity) for minimal prop drilling.
- **Forms** are handled with React Hook Form for validation and UX.
- **DaisyUI** provides beautiful, accessible UI components.

---

## 📚 Further Reading
- [ASP.NET Core Docs](https://learn.microsoft.com/en-us/aspnet/core/)
- [React Query Docs](https://tanstack.com/query/latest)
- [Zustand Docs](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [DaisyUI Docs](https://daisyui.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/)

---

## 👨‍💻 Author

**Srinivas Koruprolu**  
[LinkedIn](https://linkedin.com/in/srinivas-koruprolu)  
[GitHub](https://github.com/srinivaskoruprolu007)

---

## 📝 License

This project is licensed under the MIT License.
