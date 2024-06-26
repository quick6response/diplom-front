export interface EducationCourse {
  id: number;
  code: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export type EducationCourseOrderBy = keyof EducationCourse;
