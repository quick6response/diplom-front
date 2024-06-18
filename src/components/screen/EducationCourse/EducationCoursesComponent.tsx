'use client';

import { useGetEducationCourses } from '@/api/education/hooks/useGetEducationCourses';
import { GetCourses } from '@/api/education/type/education.course';
import { EducationCoursesTableCell } from '@/components/screen/EducationCourse/EducationCoursesTableCell';
import { IconPlus } from '@/components/ui/icon/IconPlus';
import { PageHeader } from '@/components/ui/PageHeader/PageHeader';
import {
  EducationCourse,
  EducationCourseOrderBy
} from '@/shared/education.course';
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
import { FC, useState } from 'react';

const columns = [
  {
    key: 'id',
    label: 'Id',
    allowsSorting: true
  },
  {
    key: 'code',
    label: 'Код',
    allowsSorting: true
  },
  {
    key: 'name',
    label: 'Название',
    allowsSorting: true
  },

  {
    key: 'actions',
    label: 'Действие'
  }
];

export const EducationCoursesComponent: FC<{ initialData?: GetCourses }> = ({
  initialData
}) => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<SortOrderByAndOrder<EducationCourse>>({
    orderBy: 'id',
    order: 'asc',
    direction: 'ascending'
  });
  const coursesQuery = useGetEducationCourses(
    { page, orderBy: sort.orderBy, order: sort.order },
    initialData
  );

  const onSortChange = (descriptor: SortDescriptor) => {
    if (!descriptor.column) {
      return;
    }
    setSort({
      orderBy: descriptor.column as EducationCourseOrderBy,
      order: getSortOrderBySortDirection(descriptor.direction),
      direction: descriptor.direction
    });
  };

  return (
    <section>
      <PageHeader title="Темы обучения" />
      <div>
        <div className="ml-auto">
          <Button color="primary" endContent={<IconPlus />}>
            Создать тему обучения
          </Button>
        </div>
        <div>
          <Table
            aria-label="Courses"
            isStriped
            onSortChange={onSortChange}
            sortDescriptor={{
              column: sort.orderBy,
              direction: sort.direction
            }}
            bottomContent={
              coursesQuery.data?.allPage ? (
                <div className="flex w-full justify-center">
                  <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="secondary"
                    page={coursesQuery.data.currentPage}
                    total={coursesQuery.data.allPage}
                    onChange={page => setPage(page)}
                    isDisabled={coursesQuery.isLoading}
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
              items={coursesQuery.data?.data ?? []}
              emptyContent={'Курсы пока не созданы'}
              isLoading={coursesQuery.isLoading}
              loadingContent={<Spinner label="Loading..." />}
            >
              {item => (
                <TableRow key={item.id}>
                  {columnKey => (
                    <TableCell>
                      <EducationCoursesTableCell
                        key={`${item.id}_${columnKey}`}
                        item={item}
                        column={columnKey as 'actions' | EducationCourseOrderBy}
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
