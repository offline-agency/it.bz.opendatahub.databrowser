export enum PaginationType {
  TOURISM = 'tourism',
  MOBILITY = 'mobility',
  ARRAY = 'array',
  UNKNOWN = 'array',
}

export interface Pagination {
  total: number;
  page: number;
  size: number;
}

export interface PaginationData<T = unknown> {
  items: T[];
  pagination: Pagination;
}

export interface WithTourismPagination<T = unknown> {
  CurrentPage: number;
  TotalResults: number;
  TotalPages: number;
  Items: T[];
}

export const isWithTourismPagination = <T = unknown>(
  data: unknown
): data is WithTourismPagination<T> =>
  data != null &&
  (data as WithTourismPagination).TotalResults != null &&
  (data as WithTourismPagination).TotalPages != null &&
  (data as WithTourismPagination).Items != null;

export const isWithArrayPagination = <T = unknown>(
  data: unknown
): data is T[] => Array.isArray(data);
