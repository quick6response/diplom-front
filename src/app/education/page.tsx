import { PageHeader } from '@/components/ui/PageHeader/PageHeader';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

export default function Education() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <PageHeader title="Обучение сотрудников" />

      <div className="flex items-center gap-5">
        <div>
          <Link
            href={siteConfig.urls.courses}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Курсы обучения
          </Link>
        </div>

        <div>
          <Link
            href={siteConfig.urls.programs}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Программы обучения
          </Link>
        </div>
      </div>
    </div>
  );
}
