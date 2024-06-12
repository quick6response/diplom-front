import { headers } from 'next/headers';
import Link from 'next/link';
import style from './Header.module.scss';

const menuItems: { href: string; title: string; roles: string[] }[] = [
  {
    href: '/home',
    title: 'Главная',
    roles: []
  },
  {
    href: '/employees',
    title: 'Сотрудники',
    roles: []
  },
  {
    href: '/education',
    title: 'Обучение',
    roles: []
  }
];

function UnauthenticatedHeaderLayout(props: { pathname: string }) {
  return (
    <div className={style.header}>
      <nav>
        <ul>
          <div>Войдите в систему</div>
          <li>
            <Link href="/auth">Войти</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function AuthenticatedHeaderLayout(props: {
  pathname: string;
  role: 'admin' | 'user';
}) {
  return (
    <aside className={style.header}>
      <nav>
        <ul>
          {menuItems
            .filter(menu =>
              menu.roles.length ? menu.roles.includes(props.role) : true
            )
            .map(({ href, title }) => (
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
  isAuth = true,
  role
}: Readonly<{ isAuth?: boolean; role: 'admin' | 'user' }>) {
  const headerList = headers();
  const pathname = headerList.get('x-current-path') || '';

  return isAuth ? (
    <AuthenticatedHeaderLayout pathname={pathname} role={role} />
  ) : (
    <UnauthenticatedHeaderLayout pathname={pathname} />
  );
}
