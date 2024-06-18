'use client';

import {
  EducationCourse,
  EducationCourseOrderBy
} from '@/shared/education.course';
import { Button } from '@nextui-org/button';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@nextui-org/react';
import { FC } from 'react';
import { MdOutlineSettings } from 'react-icons/md';

export const EducationCoursesTableCell: FC<{
  item: EducationCourse;
  column: EducationCourseOrderBy | 'actions';
}> = ({ item, column }) => {
  if (column === 'actions') {
    return (
      <div className="relative flex justify-end items-center gap-2">
        <Dropdown>
          <DropdownTrigger>
            <Button
              isIconOnly
              size="sm"
              variant="light"
              className="content-center"
            >
              <MdOutlineSettings className="text-default-500" size={48} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem>Просмотр информации</DropdownItem>
            <DropdownItem>Редактировать</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }

  const cellValue = item[column];

  if (column === 'createdAt' || column === 'updatedAt') {
    return new Date(cellValue).toLocaleString();
  } else {
    return <>{cellValue}</>;
  }
};
