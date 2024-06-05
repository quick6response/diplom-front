'use client';

import { useLogin } from '@/api/auth/hooks/useLogin';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';

export const AuthComponent: FC = () => {
  const router = useRouter();

  const userLogin = useLogin();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const data = await userLogin.mutateAsync({ username, password });

      console.log(data);

      if (data) {
        router.push('/home');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Input
          type="text"
          placeholder="Логин"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <div />
        <br />
        <Input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <div className="flex content-center flex-col justify-center">
          <br />
          <Button onClick={handleLogin}>Войти</Button>
        </div>
      </div>
    </main>
  );
};
