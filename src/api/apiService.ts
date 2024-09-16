import baseURL, { API_KEY } from "@/constant/urls";
import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import { errorHandler } from "../utils/errorHandler";

const apiService: AxiosInstance = axios.create({
  baseURL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
  },
});

apiService.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    //If use Bearer tokens
    // config.headers.Authorization = `Bearer ${tokens}`;
    config.params.api_key = API_KEY;
    return config;
  }
);

apiService.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => errorHandler(error)
);

export default apiService;
