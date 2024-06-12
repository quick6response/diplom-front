import { GetEmployees } from '@/api/employee/type/employee.api';
import { Employee } from '@/shared/employee';

export class EmployeeApi {
  async getEmployees({
    page = 1,
    orderBy = 'fio',
    order
  }: {
    page?: number;
    orderBy?: keyof Employee;
    order?: 'asc' | 'desc';
  }): Promise<GetEmployees> {
    const data = [
      {
        id: 1,
        fio: 'Иванов Иван Иванович',
        email: '1@1.ru',
        numberPhone: '8(800)555-35-35',
        passportNumber: 1234567,
        numberSerial: 1234,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        fio: 'Петров Петр Петрович',
        email: '1232131@1.ru',
        numberPhone: '8(800)555-35-35',
        passportNumber: 1234567,
        numberSerial: 1234,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    if (page >= 2) {
      data.push({
        id: 3,
        fio: 'Сидоров Сидор Сидорович',
        email: '1232131@1.ru',
        numberPhone: '8(800)555-35-35',
        passportNumber: 1234567,
        numberSerial: 1234,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    data.sort((a, b) => {
      if (order === 'asc') {
        if (orderBy === 'fio') {
          return a.fio < b.fio ? -1 : 1;
        }

        if (orderBy === 'id') {
          return a.id - b.id;
        }

        return 0;
      } else {
        if (orderBy === 'fio') {
          return a.fio < b.fio ? 1 : -1;
        }

        if (orderBy === 'id') {
          return b.id - a.id;
        }

        return 0;
      }
    });

    // await new Promise(resolve => setTimeout(resolve, 5000));
    //
    // fetch('http://localhost:3000/api/employees', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ page, orderBy, order })
    // });

    return {
      allPages: 10,
      currentPage: page,
      data,
      nextPage: 2,
      total: 2
    };
  }
}
