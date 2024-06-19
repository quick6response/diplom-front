import { EducationCourseApi } from '@/api/education/education.course.api';
import { GetCourses } from '@/api/education/type/education.course';
import { cacheQuery } from '@/config/cache.query';
import { EducationCourseOrderBy } from '@/shared/education.course';
import { SortOrder } from '@/shared/sorting';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const courseApi = new EducationCourseApi();

export const useGetEducationCourses = (
  {
    page,
    orderBy,
    order
  }: {
    page: number;
    orderBy: EducationCourseOrderBy;
    order?: SortOrder;
  },
  initialData?: GetCourses
) => {
  const { data, status, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: cacheQuery.educationCourses(page, orderBy, order),
    queryFn: async () =>
      courseApi.getListCourses({
        page,
        orderBy,
        order
      })
    // // для SRR, чтобы было состояние загрузки после пере-запроса новых данных с фильтрами
    // initialData:
    //   page === 1 && orderBy === 'id' && order === 'asc'
    //     ? initialData
    //     : undefined
  });

  useEffect(() => {
    if (isError) {
      console.error(error);
      toast(`${error}`, {
        type: 'error'
      });
    }
  }, [isError]);
  return { data, status, isLoading, isError, error, isSuccess };
};
