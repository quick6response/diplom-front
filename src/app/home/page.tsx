import Loading from '@/app/home/loading';
import { HomeComponent } from '@/components/screen/Home/HomeComponent';
import { Suspense } from 'react';

export default function Home() {
  return (
    <section>
      <Suspense fallback={<Loading />}>
        <HomeComponent educationStats={{ count: 1 }} employee={{ count: 1 }} />
      </Suspense>
    </section>
  );
}
