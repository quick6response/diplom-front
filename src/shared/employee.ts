export interface Employee {
  id: number;
  lastName: string;
  firstName: string;
  middleName: string;
  email: string;
  login: string;
  numberPhone: string;
  passportNumber: number;
  numberSerial: number;
  createdAt: Date;
  updatedAt: Date;
}

export type EmployeeOrderBy = keyof Employee;
