# Uni-Plan

Semester planning tool for university students. Add your courses, detect schedule conflicts before they happen, and predict your GPA.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)

## What it does

Students enter their courses (name, credits, grade, day, time slot) into a form. The app runs two checks on the backend:

1. **Schedule conflict detection**: Finds overlapping courses on the same day by comparing time ranges. Returns exactly which courses clash.
2. **GPA prediction**: Calculates weighted GPA from course credits and grades. Useful for planning which electives to take before registering.

## Tech stack

| Layer | Stack |
|-------|-------|
| Frontend | React 18, TypeScript, Vite |
| Backend | Express.js, TypeScript, ts-node |
| Communication | REST API with CORS |

## Project structure

```
frontend/
  src/
    App.tsx          # Root component
    GPAForm.tsx      # Course input form, GPA display
    types.ts         # Shared type definitions
backend/
  src/
    index.ts         # Express server, API routes
    gpa.ts           # Weighted GPA calculation
    schedule.ts      # Time-overlap conflict detection
    types.ts         # Course type definitions
```

## Run locally

1. **Start the backend**
   ```bash
   cd backend && npm install && npm run dev
   ```
   Runs on `http://localhost:4000`.

2. **Start the frontend**
   ```bash
   cd frontend && npm install && npm run dev
   ```
   Opens on `http://localhost:5173` (Vite default).

## API

**POST /gpa**
Send an array of courses with `credits` and `grade` fields. Returns the weighted GPA.

**POST /conflicts**
Send an array of courses with `day`, `startTime`, and `endTime` fields. Returns any scheduling overlaps.

---

Built by [@zzaaid03](https://github.com/zzaaid03).
