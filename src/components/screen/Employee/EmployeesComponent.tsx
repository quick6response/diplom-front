'use client';

import { useGetEmployees } from '@/api/employee/hooks/useGetEmployees';
import { GetEmployees } from '@/api/employee/type/employee';
import { EmployeesTableCell } from '@/components/screen/Employee/EmployeesTableCell';
import { IconPlus } from '@/components/ui/icon/IconPlus';
import { Employee, EmployeeOrderBy } from '@/shared/employee';
import {
  getSortOrderBySortDirection,
  SortOrderByAndOrder
} from '@/shared/sorting';
import {
  Button,
  Pagination,
  SortDescriptor,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from '@nextui-org/react';
import { Spinner } from '@nextui-org/spinner';
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
  },
  {
    key: 'numberPhone',
    label: 'Номер телефона',
    allowsSorting: true
  },
  {
    key: 'actions',
    label: 'Действие'
  }
];

export const EmployeesComponent: FC<{ initialData: GetEmployees }> = ({
  initialData
}) => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<SortOrderByAndOrder<Employee>>({
    orderBy: 'id',
    order: 'asc',
    direction: 'ascending'
  });
  const employeesQuery = useGetEmployees(
    { page, orderBy: sort.orderBy, order: sort.order },
    initialData
  );

  useEffect(() => {
    console.log('isLoading', employeesQuery.isLoading);
  }, [employeesQuery]);

  const onSortChange = (descriptor: SortDescriptor) => {
    if (!descriptor.column) {
      return;
    }
    setSort({
      orderBy: descriptor.column as EmployeeOrderBy,
      order: getSortOrderBySortDirection(descriptor.direction),
      direction: descriptor.direction
    });
  };

  return (
    <section>
      <div>
        <div className="ml-auto">
          <Button color="primary" endContent={<IconPlus />}>
            Создать сотрудника
          </Button>
        </div>
        <div>
          <Table
            aria-label="Employees"
            isStriped
            onSortChange={onSortChange}
            sortDescriptor={{
              column: sort.orderBy,
              direction: sort.direction
            }}
            bottomContent={
              employeesQuery.data?.allPage ? (
                <div className="flex w-full justify-center">
                  <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="secondary"
                    page={employeesQuery.data.currentPage}
                    total={employeesQuery.data.allPage}
                    onChange={page => setPage(page)}
                    isDisabled={employeesQuery.isLoading}
                  />
                </div>
              ) : null
            }
          >
            <TableHeader columns={columns}>
              {column => (
                <TableColumn {...column} key={column.key}>
                  {column.label}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody
              items={employeesQuery.data?.data ?? []}
              emptyContent={'Сотрудники отсутствуют'}
              isLoading={employeesQuery.isLoading}
              loadingContent={<Spinner label="Loading..." />}
            >
              {item => (
                <TableRow key={item.id}>
                  {columnKey => (
                    <TableCell>
                      <EmployeesTableCell
                        key={`${item.id}_${columnKey}`}
                        item={item}
                        column={columnKey as EmployeeOrderBy | 'actions'}
                      />
                    </TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};
