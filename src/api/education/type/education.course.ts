import { EducationCourse } from '@/shared/education.course';

export interface GetCourses {
  data: EducationCourse[];
  total: number;
  currentPage: number;
  nextPage: number;
  allPage: number;
}
