import { EducationCourse } from '@/shared/education.course';

export interface GetCourses {
  results: EducationCourse[];
  total: number;
  currentPage: number;
  offset: number;
  nextPage: number;
  prevPage: number;
  allPage: number;
  limit: number;
}
