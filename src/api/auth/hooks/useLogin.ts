import { authApi } from '@/api/auth/auth.api';
import { AuthData } from '@/shared/auth';
import { useMutation } from '@tanstack/react-query';

export const useLogin = () => {
  return useMutation({
    mutationFn: async ({ login, password }: AuthData) =>
      authApi.login(login, password)
  });
};
