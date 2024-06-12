'use client';

import { employeeUtils } from '@/actions/employee.utils';
import { useGetEmployees } from '@/api/employee/hooks/useGetEmployees';
import { Employee, EmployeeOrderBy } from '@/shared/employee';
import {
  getSortOrderBySortDirection,
  SortOrder,
  SortOrderByAndOrder
} from '@/shared/sorting';
import {
  getKeyValue,
  SortDescriptor,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from '@nextui-org/react';
import { SortDirection } from '@react-types/shared';
import { FC, useEffect, useState } from 'react';

const columns = [
  {
    key: 'id',
    label: 'Id',
    allowsSorting: true
  },
  {
    key: 'fio',
    label: 'ФИО',
    allowsSorting: true
  },
  {
    key: 'email',
    label: 'Почта',
    allowsSorting: true
  }
];

export const EmployeesComponent: FC<{ employees: Employee[] }> = ({
  employees
}) => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<SortOrderByAndOrder<Employee>>({
    orderBy: 'id',
    order: 'asc',
    direction: 'ascending'
  });
  const employeesQuery = useGetEmployees(
    { page, orderBy: sort.orderBy, order: sort.order },
    employees
  );

  useEffect(() => {
    console.log('isLoading', employeesQuery.isLoading);
  }, [employeesQuery.isLoading]);

  const onSortChange = (descriptor: SortDescriptor) => {
    if (!descriptor.column) {
      return;
    }
    console.log(descriptor);
    setSort({
      orderBy: descriptor.column as EmployeeOrderBy,
      order: getSortOrderBySortDirection(descriptor.direction),
      direction: descriptor.direction
    });
  };

  return (
    <section>
      <Table
        aria-label="Example table with dynamic content"
        isStriped
        onSortChange={onSortChange}
        sortDescriptor={{
          column: sort.orderBy,
          direction: sort.direction
        }}
      >
        <TableHeader columns={columns}>
          {column => (
            <TableColumn {...column} key={column.key}>
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          items={employeesQuery.data ?? []}
          emptyContent={'Сотрудники отсутствуют'}
        >
          {item => (
            <TableRow key={item.id}>
              {columnKey => {
                return <TableCell>{getKeyValue(item, columnKey)}</TableCell>;
              }}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </section>
  );
};
