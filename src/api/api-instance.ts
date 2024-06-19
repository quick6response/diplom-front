import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const apiInstance = axios.create({
  baseURL: 'http://176.57.217.21:3010/api',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 60 * 1000,
  withCredentials: true
});

export const axiosInstance = {
  request<T = any, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
  ): Promise<R> {
    return apiInstance.request(config);
  },

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return apiInstance.get<T, R>(url, config);
  },

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return apiInstance.post<T, R>(url, data, config);
  },

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return apiInstance.put<T, R>(url, data, config);
  },

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return apiInstance.delete<T, R>(url, config);
  }
};
