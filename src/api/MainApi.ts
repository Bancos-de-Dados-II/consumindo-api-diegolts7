import { Result } from "../core/Result";
import { InternalException } from "../core/Exception/ExceptionCodes";
import axios, { type AxiosInstance } from "axios";

export class MainApiProvider {
  private api: AxiosInstance;
  constructor(api: AxiosInstance) {
    this.api = api;
  }

  async request(
    method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE",
    url: string,
    data?: any,
    token?: string
  ): Promise<Result<any>> {
    if (!data) data = {};

    if (!token) token = localStorage.getItem("access") || undefined;

    const headers = token
      ? {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      : {
          "Content-Type": "application/json",
        };

    switch (method) {
      case "GET":
        return this.api
          .get(`${url}`, {
            headers,
          })
          .then((res) => {
            return Result.ok(res.data);
          })
          .catch((err) => {
            return Result.fail(err);
          });
      case "POST":
        return this.api
          .post(`${url}`, data, {
            headers,
          })
          .then((res) => {
            return Result.ok(res.data);
          })
          .catch((err) => {
            return Result.fail(err);
          });
      case "PUT":
        return this.api
          .put(`${url}`, data, {
            headers,
          })
          .then((res) => {
            return Result.ok(res.data);
          })
          .catch((err) => {
            return Result.fail(err);
          });
      case "DELETE":
        return this.api
          .delete(`${url}`, {
            headers,
          })
          .then((res) => {
            return Result.ok(res.data);
          })
          .catch((err) => {
            return Result.fail(err);
          });
      case "PATCH":
        return this.api
          .patch(`${url}`, data, {
            headers,
          })
          .then((res) => {
            return Result.ok(res.data);
          })
          .catch((err) => {
            return Result.fail(err);
          });
      default:
        return Result.fail(
          new InternalException(new Error("Method not found"))
        );
    }
  }
}

const axiosBase = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const provider = new MainApiProvider(axiosBase);
