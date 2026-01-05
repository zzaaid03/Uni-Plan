import express from "express";
import cors from "cors";
import { calculateGPA } from "./gpa";
import { detectConflicts } from "./schedule";
import { Course } from "./types";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/gpa", (req, res) => {
  const courses: Course[] = req.body;
  res.json({ gpa: calculateGPA(courses) });
});

app.post("/conflicts", (req, res) => {
  const courses: Course[] = req.body;
  res.json({ conflicts: detectConflicts(courses) });
});

app.listen(4000, () => {
  console.log("Backend running on http://localhost:4000");
});