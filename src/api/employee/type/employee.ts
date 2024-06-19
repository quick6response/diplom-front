import { Employee } from '@/shared/employee';

/**
 * Ответ поиска сотрудников в АПИ
 */
export interface GetEmployees {
  results: Employee[];
  total: number;
  offset: number;
  nextPage: number;
  prevPage: number;
}
