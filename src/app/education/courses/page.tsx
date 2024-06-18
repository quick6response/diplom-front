import { EducationCourseApi } from '@/api/education/education.course.api';
import { EducationCoursesComponent } from '@/components/screen/EducationCourse/EducationCoursesComponent';

const courseApi = new EducationCourseApi();

export default async function EducationCourses() {
  const initialData = await courseApi.getListCourses({
    page: 1,
    orderBy: 'id',
    order: 'asc'
  });
  return <EducationCoursesComponent initialData={initialData} />;
}
