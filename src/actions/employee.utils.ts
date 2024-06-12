import { Employee } from '@/shared/employee';

class EmployeeUtils {
  getFIO(employee: Employee) {
    return `${employee.lastName} ${employee.firstName ?? ''} ${employee.middleName ?? ''}`;
  }
}

export const employeeUtils = new EmployeeUtils();
