import { HomeStatsEducationEmployeeComponent } from '@/components/screen/Home/HomeStatsEducationEmployeeComponent';
import { FC } from 'react';

export const HomeComponent: FC<{
  educationStats: { count: number };
  employee: { count: number };
}> = ({ educationStats, employee }) => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex gap-6">
          <HomeStatsEducationEmployeeComponent
            education={{
              count: educationStats.count
            }}
            employee={{
              count: employee.count
            }}
          />
        </div>
      </main>
    </>
  );
};
