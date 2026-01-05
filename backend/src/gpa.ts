import { Course } from "./types";

export function calculateGPA(courses: Course[]): number {
  let totalPoints = 0;
  let totalCredits = 0;

  courses.forEach(course => {
    if (course.grade !== undefined) {
      totalPoints += course.grade * course.credits;
      totalCredits += course.credits;
    }
  });

  return totalCredits === 0
    ? 0
    : Number((totalPoints / totalCredits).toFixed(2));
}