import { useQuery, useMutation, useQueryClient, UseQueryOptions, UseMutationOptions, QueryKey } from "@tanstack/react-query";
import api from "../config/api.config";

// -----------------------------------------------------------------------------
// Custom hook for GET requests
// -----------------------------------------------------------------------------
export const useFetch = <T = any>(
  key: QueryKey,
  url: string,
  options?: UseQueryOptions<T, unknown, T, QueryKey>
) => {
  return useQuery<T, unknown, T, QueryKey>({
    queryKey: Array.isArray(key) ? key : [key],
    queryFn: async (): Promise<T> => {
      const { data } = await api.get<T>(url);
      return data;
    },
    ...options,
  });
};

// -----------------------------------------------------------------------------
// Custom hook for POST, PUT, DELETE requests
// -----------------------------------------------------------------------------
export const useMutate = <T = any, V = any>(
  key: QueryKey,
  method: "post" | "put" | "delete",
  url: string,
  options: UseMutationOptions<T, unknown, V> = {}
) => {
  const queryClient = useQueryClient();

  return useMutation<T, unknown, V>({
    mutationKey: Array.isArray(key) ? key : [key],
    mutationFn: async (payload: V): Promise<T> => {
      const { data } = await api[method]<T>(url, payload);
      return data;
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: Array.isArray(key) ? key : [key],
      });
      if (options.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    ...options,
  });
};

// -----------------------------------------------------------------------------
// Hook for state extraction from a query
// -----------------------------------------------------------------------------
export const useQueryState = <T = any>(query: ReturnType<typeof useQuery<T>>) => {
  return {
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    isSuccess: query.isSuccess,
    data: query.data,
    isFetching: query.isFetching,
  };
};
