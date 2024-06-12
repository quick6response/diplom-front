import { Employee } from '@/shared/employee';

/**
 * Ответ поиска сотрудников в АПИ
 */
export interface GetEmployees {
  data: Employee[];
  total: number;
  currentPage: number;
  nextPage: number;
  allPages: number;
}
