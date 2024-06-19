import { axiosInstance } from '@/api/api-instance';
import { ResponseInterface } from '@/api/response.interface';
import { AuthData, AuthLoginResponse } from '@/shared/auth';

export const authApi = {
  login: async (login: string, password: string) => {
    const auth = await axiosInstance.post<
      AuthData,
      ResponseInterface<AuthLoginResponse>
    >('/auth/login', { login, password });

    return auth.data;
  }
};
