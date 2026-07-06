# Paired Frontend

Frontend for **Paired**, a modern messenger focused on sharing music between users.

The project is being developed as a learning project to explore modern frontend architecture with React while integrating with an ASP.NET backend built using Clean Architecture, DDD, MediatR, SignalR and Vertical Slice Architecture.

---

## Goals

This project is not only about building a messenger.

The primary goals are:

- Learn React from fundamentals to advanced concepts
- Understand TypeScript in real-world applications
- Build scalable frontend architecture
- Learn component composition and reusable UI
- Integrate with ASP.NET Web API
- Learn SignalR for real-time communication
- Practice enterprise development patterns

---

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Axios
- React Router
- SignalR Client
- React Hook Form
- TanStack Query
- Zod
- ESLint
- Prettier

---

## Project Structure

```
src/

├── app/            # Application bootstrap
├── pages/          # Application pages
├── widgets/        # Large UI blocks
├── features/       # Business features
├── shared/         # Shared components, hooks, utils
└── assets/
```

The architecture follows a feature-oriented approach inspired by Vertical Slice Architecture used in the backend.

---

## Backend

Backend repository is built using:

- ASP.NET Core
- Clean Architecture
- Domain-Driven Design
- MediatR
- SignalR
- Entity Framework Core
- PostgreSQL
- ASP.NET Identity

---

## Planned Features

### Authentication

- Register
- Login
- Refresh Token
- Email Confirmation
- Password Recovery

### Messenger

- Private chats
- Friend system
- Real-time messaging
- Read receipts
- Music link detection
- Music platform preview

### User

- Profile
- Avatar
- Sessions
- Search users
- Online status

---

## Development Philosophy

The project is intentionally built step by step.

Instead of copying existing solutions, every major concept is implemented only after understanding:

- why it exists
- which problem it solves
- when it should be used
- possible alternatives

The objective is to learn software architecture rather than simply finish the application.

---

## Running the project

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Build production version

```bash
npm run build
```

Run linter

```bash
npm run lint
```

---

## Learning Notes

This repository serves as a personal learning journey from Junior to Middle/Senior Full-Stack .NET Developer.