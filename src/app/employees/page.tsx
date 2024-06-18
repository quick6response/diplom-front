import { EmployeeApi } from '@/api/employee/employee.api';
import { EmployeesComponent } from '@/components/screen/Employee/EmployeesComponent';
import { Spinner } from '@nextui-org/spinner';
import { Suspense } from 'react';

export default async function Page() {
  const data = await getEmployees();
  return (
    <main>
      <Suspense fallback={<Spinner />}>
        <EmployeesComponent initialData={data} />
      </Suspense>
    </main>
  );
}

async function getEmployees() {
  const employeeApi = new EmployeeApi();
  return employeeApi.getEmployees({
    page: 1,
    orderBy: 'id'
  });
}
