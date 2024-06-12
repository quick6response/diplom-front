import { GetCourses } from '@/api/education/type/education.course';
import { EducationCourseOrderBy } from '@/shared/education.course';
import { SortOrder } from '@/shared/sorting';

export class EducationCourseApi {
  async getListCourses({
    page = 1,
    orderBy = 'code',
    order
  }: {
    page?: number;
    orderBy?: EducationCourseOrderBy;
    order?: SortOrder;
  }): Promise<GetCourses> {
    const data = [
      {
        id: 1,
        code: '100',
        name: 'Курс 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        code: '200',
        name: 'Курс 2',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    return {
      data,
      total: 2,
      currentPage: 1,
      nextPage: 1,
      allPage: 1
    };
  }
}
