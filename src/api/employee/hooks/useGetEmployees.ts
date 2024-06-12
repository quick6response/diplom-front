import { EmployeeApi } from '@/api/employee/employee.api';
import { cacheQuery } from '@/config/cache.query';
import { Employee, EmployeeOrderBy } from '@/shared/employee';
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
  initialData?: Employee[]
) => {
  const { data, status, isLoading, isError, error } = useQuery({
    queryKey: cacheQuery.employees(page, orderBy, order),
    queryFn: async () =>
      employeeApi.getEmployees({
        page,
        orderBy,
        order
      }),
    initialData: initialData
  });

  return { data, status, isLoading, isError, error };
};
