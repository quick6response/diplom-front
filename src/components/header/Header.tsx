'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from './Header.module.scss';

const menuItems = [
  {
    href: '/',
    title: 'Главная'
  },
  {
    href: '/employees',
    title: 'Сотрудники'
  },
  {
    href: '/education',
    title: 'Обучение'
  }
];

function UnauthenticatedHeaderLayout(props: { pathname: string }) {
  return (
    <div className={style.header}>
      <nav>
        <ul>
          <li>
            <Link href="/auth">Войти</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function AuthenticatedHeaderLayout(props: { pathname: string }) {
  return (
    <aside className={style.header}>
      <nav>
        <ul>
          {menuItems.map(({ href, title }) => (
            <li
              className={`m-2 ${props.pathname === href && 'bg-fuchsia-600 text-white'} `}
              key={href}
            >
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>
        <ul>
          <li className={`m-4`} key={'logout'}>
            <Link href="/logout">Выйти</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default function Header({
  isAuth = false
}: Readonly<{ isAuth?: boolean }>) {
  const pathname = usePathname();

  return isAuth ? (
    <AuthenticatedHeaderLayout pathname={pathname} />
  ) : (
    <UnauthenticatedHeaderLayout pathname={pathname} />
  );
}
