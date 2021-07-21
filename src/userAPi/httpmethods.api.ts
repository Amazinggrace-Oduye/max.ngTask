import axios, { AxiosResponse, AxiosError } from "axios";
import { ApiProps } from "../type/dbTypes/IApiProps";

const apiAxiosCalls = async (params: ApiProps) => {
  params.method = params.method.toUpperCase();

  const { url, method, body } = params;

  switch (method) {
    case "GET":
      return await axios({
        method,
        url,
      });
    case "POST":
      return {};
    default:
      return {};
  }
};

export default apiAxiosCalls;
