import axios, {
    AxiosInstance,
    InternalAxiosRequestConfig,
    AxiosError,
    AxiosResponse,
  } from "axios";
  import { API_USER } from "./api-routes.config";
  
  // -----------------------------------------------------------------------------
  // Create a typed Axios instance
  // -----------------------------------------------------------------------------
  const api: AxiosInstance = axios.create({
    baseURL: API_USER,
    timeout: 10_000,
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  // -----------------------------------------------------------------------------
  // Request interceptor: inject Bearer token (if it exists)
  // -----------------------------------------------------------------------------
  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error: AxiosError) => Promise.reject(error),
  );
  
  // -----------------------------------------------------------------------------
  // Response interceptor: handle common HTTP errors globally
  // -----------------------------------------------------------------------------
  api.interceptors.response.use(
    <T,>(response: AxiosResponse<T>): AxiosResponse<T> => response,
    (error: AxiosError) => {
      if (error.response) {
        const { status } = error.response;
  
        switch (status) {
          case 401: {
            // Paths that already handle auth flows themselves
            const AUTH_PATHS = [
              "/login",
              "/signup",
              "/verify-otp",
              "/forget-password",
              "/change-password",
              "/verification-success",
            ];
  
            const currentPath = window.location.pathname;
            if (!AUTH_PATHS.includes(currentPath)) {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }
            break;
          }
  
          case 403:
            console.error("Forbidden access");
            break;
  
          case 404:
            console.error("Resource not found");
            break;
  
          case 500:
            console.error("Server error");
            break;
  
          default:
            console.error("An error occurred:", error.response.data);
        }
      }
  
      return Promise.reject(error);
    },
  );
  
  export default api;
  