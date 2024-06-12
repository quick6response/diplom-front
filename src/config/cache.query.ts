// для react-query
export const cacheQuery = {
  employees: (page?: number, sort?: string, order?: string) => [
    'employees',
    { page, sort, order }
  ],
  educationCourses: (page?: number, sort?: string, order?: string) => [
    'educationCourses',
    { page, sort, order }
  ]
};
