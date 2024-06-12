import { EmployeeApi } from '@/api/employee/employee.api';
import { EmployeesComponent } from '@/components/screen/Employees/EmployeesComponent';
import { Employee } from '@/shared/employee';

export default async function Page() {
  const data = await getEmployees();
  return (
    <main>
      <EmployeesComponent employees={data} />
    </main>
  );
}

async function getEmployees(): Promise<Employee[]> {
  const employeeApi = new EmployeeApi();
  return employeeApi.getEmployees({
    page: 1,
    orderBy: 'id'
  });
}
