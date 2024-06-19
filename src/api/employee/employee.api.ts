import { axiosInstance } from '@/api/api-instance';
import { GetEmployees } from '@/api/employee/type/employee';
import { ResponseInterface } from '@/api/response.interface';
import { EmployeeOrderBy } from '@/shared/employee';
import { SortOrder } from '@/shared/sorting';
import { AxiosResponse } from 'axios';

export class EmployeeApi {
  async getEmployees({
    page = 1,
    orderBy = 'id',
    order
  }: {
    page?: number;
    orderBy?: EmployeeOrderBy;
    order?: SortOrder;
  }): Promise<GetEmployees> {
    const getEmployees = await axiosInstance.get<
      {
        page?: number;
        orderBy?: EmployeeOrderBy;
        order?: SortOrder;
      },
      AxiosResponse<ResponseInterface<GetEmployees>>
    >('/employees', { params: { page, orderBy, order } });

    return getEmployees.data.data;
  }
}
