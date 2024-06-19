import { EmployeeApi } from '@/api/employee/employee.api';
import { GetEmployees } from '@/api/employee/type/employee';
import { cacheQuery } from '@/config/cache.query';
import { EmployeeOrderBy } from '@/shared/employee';
import { SortOrder } from '@/shared/sorting';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const employeeApi = new EmployeeApi();

export const useGetEmployees = (
  {
    page,
    orderBy,
    order
  }: {
    page: number;
    orderBy: EmployeeOrderBy;
    order?: SortOrder;
  },
  initialData?: GetEmployees
) => {
  const { data, status, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: cacheQuery.employees(page, orderBy, order),
    queryFn: async () =>
      employeeApi.getEmployees({
        page,
        orderBy,
        order
      }),
    // для SRR, чтобы было состояние загрузки после пере-запроса новых данных с фильтрами
    initialData:
      page === 1 && orderBy === 'id' && order === 'ASC'
        ? initialData
        : undefined
  });

  useEffect(() => {
    if (isError) {
      console.error(error);
      toast(`${error}`, {
        type: 'error'
      });
    }
  }, []);

  return { data, status, isLoading, isError, error, isSuccess };
};
