import { AxiosError } from "axios";

export const errorHandler = ( error : AxiosError) => {
  // do something with error
  console.log(error);
};
