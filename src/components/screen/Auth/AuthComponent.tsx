'use client';

import { useLogin } from '@/api/auth/hooks/useLogin';
import { AuthData } from '@/shared/auth';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { AxiosError } from 'axios';

import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';

export const AuthComponent: FC = () => {
  const router = useRouter();
  const userLogin = useLogin();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,

    formState: {
      isValid,
      errors: { login: errorLogin, password: errorPassword, root }
    }
  } = useForm<AuthData>({
    mode: 'onChange'
  });

  const toggleVisibility = () => setShowPassword(prevState => !prevState);

  const handleLogin = async (data: AuthData) => {
    try {
      console.log(data);

      const auth = await userLogin.mutateAsync(data);

      console.log(auth);

      if (data) {
        router.push('/home');
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast(error.response?.data.message, {
          type: 'error'
        });
        return;
      }
      toast('Ошибка авторизации, проверьте логин или пароль', {
        type: 'error'
      });
      console.error(error);
    }
  };

  console.log(handleSubmit);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-3xl font-bold">Авторизация</h1>
        <br />
        <form onSubmit={handleSubmit(handleLogin)}>
          <Input
            isRequired
            type="email"
            label="Логин"
            placeholder="Логин"
            // className="max-w-xs"
            {...register('login', { required: true })}
          />
          <div />
          <br />
          <Input
            type={showPassword ? 'text' : 'password'}
            isRequired
            label="Пароль"
            placeholder="Пароль"
            className="max-w-xs"
            {...register('password', { required: true })}
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => setShowPassword(false)}
                    className="text-2xl text-default-400 pointer-events-none"
                  />
                ) : (
                  <FaEye
                    onClick={() => setShowPassword(true)}
                    className="text-2xl text-default-400 pointer-events-none"
                  />
                )}
              </button>
            }
          />

          <div className="flex content-center flex-col justify-center">
            <br />
            <Button
              isDisabled={!isValid}
              type="submit"
              onClick={handleSubmit(handleLogin)}
            >
              Войти
            </Button>
            {!isValid && (errorLogin || errorPassword) && (
              <p className="text-red-500">
                {errorLogin?.message || errorPassword?.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </main>
  );
};
