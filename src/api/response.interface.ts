export interface ResponseInterface<T> {
  data: T;
  status: boolean;
}

export type ResponseErrorType = {
  statusCode: number;
  message: string;
  timestamp: Date;
  path: string;
};
