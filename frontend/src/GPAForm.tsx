import { useState } from "react";
import { Course } from "./types";

export default function GPAForm() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [gpa, setGpa] = useState<number | null>(null);

  const addCourse = () => {
    setCourses([
      ...courses,
      { name: "", credits: 3, grade: 4, day: "Mon", start: 9, end: 10 }
    ]);
  };

  const calculate = async () => {
    const res = await fetch("http://localhost:4000/gpa", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(courses)
    });
    const data = await res.json();
    setGpa(data.gpa);
  };

  return (
    <div>
      <h2>GPA Predictor</h2>
      <button onClick={addCourse}>Add Course</button>
      <button onClick={calculate}>Calculate GPA</button>
      {gpa !== null && <h3>Predicted GPA: {gpa}</h3>}
    </div>
  );
}