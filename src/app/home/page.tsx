import Link from 'next/link';
import { Fragment } from 'react';

const selectTabs = () => {
  return [12, 22, 12];
};

export default function Home() {
  const tabs = selectTabs();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Главная страница
        <Fragment>
          {tabs.map(value => (
            <Link key={value} href={`/home/${value}`}>
              {value}
            </Link>
          ))}
        </Fragment>
      </div>
    </main>
  );
}
