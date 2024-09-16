import apiService from "@/api/apiService";
import { urls } from "@/constant/urls";
import { errorHandler } from "../utils/errorHandler";
import { AxiosError } from "axios";

export const UserDataService = {
  getAll: async (param: any): Promise<any> => {
    try {
      const response = await apiService
        .get(urls.movie, {
          params: {
            // if you don`t use axios interceptors api_key must be
            // api_key: API_KEY,
            // if you want sort request
            sort_by: param.sort_by,
            include_adult: param.include_adult,
            include_video: param.include_video,
          },
        })
        .then((value) => value.data);
      return response;
    } catch (error) {
      errorHandler(error as AxiosError);
    }
  },
};
