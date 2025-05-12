import type { Result } from "../../core/Result";
import { provider } from "../MainApi";
import type { Task, TaskPayload, UpdateTask } from "./type";

export class TaskRequest {
  private static baseUri = "/tasks";

  // GET ALL
  static async getTasks(): Promise<Result<Task[]>> {
    return await provider.request("GET", `${this.baseUri}/`);
  }

  // GET BY ID
  static async getTaskById(id: string) {
    return await provider.request("GET", `${this.baseUri}/task/${id}`);
  }

  // CREATE
  static async createTask(data: TaskPayload): Promise<Result<Task>> {
    return await provider.request("POST", `${this.baseUri}/`, data);
  }

  // UPDATE
  static async updateTask(
    id: string,
    data: Partial<UpdateTask>
  ): Promise<Result<Task>> {
    return await provider.request("PATCH", `${this.baseUri}/task/${id}`, data);
  }

  // DELETE
  static async deleteTask(id: string) {
    return provider.request("DELETE", `${this.baseUri}/task/${id}`);
  }
}
