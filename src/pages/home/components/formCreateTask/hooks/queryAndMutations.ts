import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import type { Result } from "../../../../../core/Result";
import type {
  Task,
  TaskPayload,
  UpdateTask,
} from "../../../../../api/task/type";
import { queryClient } from "../../../../../main";
import { TaskRequest } from "../../../../../api/task/TaskRequest";

export const useMutationCreateTask = (onClose: () => void) => {
  return useMutation({
    mutationKey: ["send-task"],
    mutationFn: async (task: TaskPayload) => {
      return await TaskRequest.createTask(task);
    },
    onSuccess(result) {
      if (!result.isSuccess) {
        console.error(result.error);
        throw new Error(result.error?.message);
      }

      toast.success("Task criada com sucesso.");
      queryClient.setQueryData(
        ["tasks"],
        (oldData: Result<Task[]> | undefined) => {
          const oldTasks = oldData?.value || [];

          return {
            isSuccess: true,
            error: undefined,
            value: [result.value, ...oldTasks],
          } as Result<Task[]>;
        }
      );
      onClose();
    },
    onError(error) {
      toast.error("Erro ao criar Task.");
      console.error(error);
    },
  });
};

export const useMutationUpdateTask = (onClose: () => void) => {
  return useMutation({
    mutationKey: ["update-task"],
    mutationFn: async ({
      id,
      task,
    }: {
      id: string;
      task: Partial<UpdateTask>;
    }) => {
      return await TaskRequest.updateTask(id, task);
    },
    onSuccess(result) {
      if (!result.isSuccess) {
        console.error(result.error);
        throw new Error(result.error?.message);
      }

      toast.success("Task atualizada com sucesso.");
      queryClient.invalidateQueries({ queryKey: ["tasks"] });

      onClose();
    },
    onError(error) {
      toast.error("Erro ao atualizar Task.");
      console.error(error);
    },
  });
};

export const useMutationDeleteTask = (onClose: () => void) => {
  return useMutation({
    mutationKey: ["delete-task"],
    mutationFn: async ({ id }: { id: string }) => {
      return await TaskRequest.deleteTask(id);
    },
    onSuccess(result) {
      if (!result.isSuccess) {
        console.error(result.error);
        throw new Error(result.error?.message);
      }

      toast.success("Task deletada com sucesso.");
      queryClient.invalidateQueries({ queryKey: ["tasks"] });

      onClose();
    },
    onError(error) {
      toast.error("Erro ao deletar Task.");
      console.error(error);
    },
  });
};
