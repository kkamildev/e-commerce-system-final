import { useState, useCallback } from "react";
import axios, { type AxiosRequestConfig } from "axios";
import { useErrorStore } from "../Stores/useErrorStore";

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export type ErrorBody = {
  title: string;
  message?: string;
  type?: string;
};

export type SendRequest = <R = any>(
  method: HttpMethod,
  url: string,
  config?: AxiosRequestConfig,
  body?: any
) => Promise<R | null>;

export function useRequest<T = any>() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  const setGlobalError = useErrorStore((state) => state.setError);

  const send: SendRequest = useCallback(
    async (method, url, config, body) => {
      setLoading(true);
      setError(null);

      try {
        const methods = {
          GET: () => axios.get(url, config),
          POST: () => axios.post(url, body, config),
          PUT: () => axios.put(url, body, config),
          DELETE: () => axios.delete(url, config),
        };

        const res = await methods[method]();

        setData(res.data as T);
        return res.data as any;

      } catch (err: any) {
        const errorBody: ErrorBody = err.response?.data;

        const message =
          err.code === "ECONNABORTED"
            ? "NETWORK"
            : err.response?.status >= 500
            ? "SERVER_ERROR"
            : errorBody?.type || "UNKNOWN_ERROR";

        if (message === "SERVER_ERROR" || message === "UNKNOWN_ERROR") {
          setGlobalError(errorBody?.title || "Unexpected error", errorBody?.message, errorBody?.type);
        } else {
          setError(message);
        }

        return null;

      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { loading, error, data, send };
}
