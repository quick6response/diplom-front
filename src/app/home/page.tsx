import Loading from '@/app/home/loading';
import Link from 'next/link';
import { Fragment, Suspense } from 'react';

const selectTabs = () => {
  return [12, 22, 12];
};

export default function Home() {
  const tabs = selectTabs();

  return (
    <section>
      <Suspense fallback={<Loading />}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div>
            Главная страница
            <Fragment>Статистика обучения сотрудников будут здесь</Fragment>
          </div>
        </main>
      </Suspense>
    </section>
  );
}
