import { axiosInstance } from '@/api/api-instance';
import { GetCourses } from '@/api/education/type/education.course';
import { ResponseInterface } from '@/api/response.interface';
import { EducationCourseOrderBy } from '@/shared/education.course';
import { SortOrder } from '@/shared/sorting';
import { AxiosResponse } from 'axios';

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
    try {
      const getCourses = await axiosInstance.get<
        {
          page?: number;
          orderBy?: EducationCourseOrderBy;
          order?: SortOrder;
        },
        AxiosResponse<ResponseInterface<GetCourses>>
      >('/education-course', { params: { page, orderBy, order } });

      console.log(getCourses.data);

      return getCourses.data.data;
    } catch (error) {
      console.error(error);
      return {
        allPage: 0,
        currentPage: 0,
        results: [],
        nextPage: 0,
        total: 0,
        limit: 0,
        offset: 0,
        prevPage: 0
      };
    }
  }
}
