export interface Employee {
  id: number;
  fio: string;
  email: string;
  numberPhone: string;
  passportNumber: number;
  numberSerial: number;
  createdAt: Date;
  updatedAt: Date;
}

export type EmployeeOrderBy = keyof Employee;
