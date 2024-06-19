import { axiosInstance } from '@/api/api-instance';
import { ResponseInterface } from '@/api/response.interface';
import { AuthData, AuthLoginResponse } from '@/shared/auth';

export const authApi = {
  login: async (login: string, password: string) => {
    const auth = await axiosInstance.post<
      AuthData,
      ResponseInterface<AuthLoginResponse>
    >(
      '/auth/login',
      { login, password },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      }
    );

    return auth.data;
  }
};
