import { EmployeeApi } from '@/api/employee/employee.api';
import { GetEmployees } from '@/api/employee/type/employee.api';
import { cacheQuery } from '@/config/cache.query';
import { EmployeeOrderBy } from '@/shared/employee';
import { SortOrder } from '@/shared/sorting';
import { useQuery } from '@tanstack/react-query';

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
    initialData:
      page === 1 && orderBy === 'id' && order === 'asc'
        ? initialData
        : undefined
  });

  console.log('useGetEmployees', status);

  return { data, status, isLoading, isError, error, isSuccess };
};
