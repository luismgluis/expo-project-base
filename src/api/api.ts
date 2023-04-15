import axios from "axios";

import globalVars from "../libs/utils/globalVars";
import ApiAuth, { getAuthCurrentToken, setAuthCurrentToken } from "./ApiAuth";

export interface ApiBase<T> {
  update?: (data: T | any) => Promise<T | T[]>;
  post?: (data: T) => Promise<T | null>;
  get?: () => Promise<T | T[]>;
}
export class ApiModel {
  apiAuth: ApiAuth;

  constructor() {
    this.apiAuth = new ApiAuth();
  }
}
const host = globalVars.BACKEND_HOST || "http://localhost";
console.log("user host:", host);

export const onUploadProgress = (onProgress: (val: number) => void) => {
  const handler = ({ loaded = 0, total = 0 }) => {
    // console.log("ss", total, loaded);
    const avg = Math.floor((loaded * 100) / (total || 1));
    onProgress(avg);
  };
  return handler;
};

const getApi = (options: any = {}) => {
  const { appjson = true } = options;
  // const execute = async () => {
  // 	const res = await client.service("messages").create({
  // 		text: utils.generateKey("pk:"),
  // 	});
  // 	console.log(res);
  // };
  // execute();
  const instanceAxios = axios.create({
    baseURL: `${host}/api/v1`,
    headers: appjson
      ? {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
      : undefined,
  });

  instanceAxios.defaults.headers.common.Authorization = "";

  instanceAxios.interceptors.request.use(
    (cfg: any) => {
      const config = cfg;
      const token = getAuthCurrentToken();
      config.headers = {
        ...cfg.headers,
        Authorization: `Bearer ${token}`,
      };

      return config;
    },
    (error: any) => {
      Promise.reject(error);
    }
  );
  instanceAxios.interceptors.response.use(
    (response: any) => {
      return response;
    },
    (error: any) => {
      if ("response" in error) {
        if (error.response.status > 400) {
          if (error.response.status === 429) {
            console.log(error);
            setAuthCurrentToken("");
            // window.location.replace("/app/manyrequests");
            return Promise.reject(error);
          }
          if (error.response.status === 401) {
            setAuthCurrentToken("");
            // window.location.replace("/app/welcome");
            // window.location.replace("/");
            return Promise.reject(error);
          }
          if (error.response.status === 404) {
            return Promise.reject(error);
          }
        }
        if (error.response.data?.data?.name === "TokenExpiredError") {
          console.log("RELOAD", error);
          setAuthCurrentToken("");
          // window.location.replace("/");
          return;
        }
      }
      console.log(error);
      return Promise.reject(error);
    }
  );

  return instanceAxios;
};

export default getApi;
