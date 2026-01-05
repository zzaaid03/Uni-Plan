import { Course } from "./types";

export function detectConflicts(courses: Course[]) {
  const conflicts: string[] = [];

  for (let i = 0; i < courses.length; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      const a = courses[i];
      const b = courses[j];

      if (
        a.day === b.day &&
        Math.max(a.start, b.start) < Math.min(a.end, b.end)
      ) {
        conflicts.push(`${a.name} conflicts with ${b.name}`);
      }
    }
  }

  return conflicts;
}