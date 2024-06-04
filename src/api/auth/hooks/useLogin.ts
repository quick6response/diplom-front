import { authApi } from '@/api/auth/auth.api';
import { useMutation } from '@tanstack/react-query';

export const useLogin = () => {
  return useMutation({
    mutationFn: async ({
      username,
      password
    }: {
      username: string;
      password: string;
    }) => authApi.login(username, password)
  });
};
