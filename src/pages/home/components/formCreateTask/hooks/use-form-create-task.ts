import type { Task } from "../../../../../api/task/type";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useMutationCreateTask,
  useMutationDeleteTask,
  useMutationUpdateTask,
} from "./queryAndMutations";
import { useState } from "react";

const createTaskSchema = z.object({
  type: z.enum(["PROFISSIONAL", "PESSOAL"], {
    invalid_type_error: "Tipo invalido",
    required_error: "O tipo é obrigatorio",
  }),
  prioridade: z.enum(["URGENTE", "IMPORTANTE", "NORMAL"], {
    invalid_type_error: "Prioridade invalida",
    required_error: "A prioridade é obrigatoria",
  }),
  title: z.string().max(120, "titulo é muito grande").trim().optional(),
  description: z.string().min(1, "a descrição não pode estar vazia").trim(),
});

type TypeCreateTaskSchema = z.infer<typeof createTaskSchema>;

export const useFormCreateTask = (
  onClose: () => void,
  action: "VIEW_EDIT" | "CREATE",
  task?: Task
) => {
  const [viewEdit, setViewEdit] = useState<"VIEW" | "EDIT" | null>(
    action === "VIEW_EDIT" ? "VIEW" : null
  );

  const {
    control,
    watch,
    handleSubmit,
    reset,
    formState: { isDirty, errors },
  } = useForm<TypeCreateTaskSchema>({
    resolver: zodResolver(createTaskSchema),
    defaultValues:
      task && action === "VIEW_EDIT"
        ? { ...task, title: task.title ? task.title : undefined }
        : {
            type: "PESSOAL",
            prioridade: "NORMAL",
            description: "",
          },
  });

  const mutationCreateTask = useMutationCreateTask(onClose);

  const mutationUpdateTask = useMutationUpdateTask(onClose);

  const mutationDeleteTask = useMutationDeleteTask(onClose);

  const handleViewEdit = (value: "VIEW" | "EDIT" | null) => {
    if (action === "VIEW_EDIT" && value === "VIEW" && isDirty) {
      reset();
    }
    setViewEdit(value);
  };

  const handleDeleteTask = () => {
    if (task && action === "VIEW_EDIT") {
      mutationDeleteTask.mutate({ id: task.id });
    }
  };

  const onSubmit = (data: TypeCreateTaskSchema) => {
    if (action === "VIEW_EDIT" && viewEdit === "EDIT" && task) {
      mutationUpdateTask.mutate({
        id: task.id,
        task: {
          ...data,
          title: data.title?.trim() === "" ? null : data.title?.trim(),
        },
      });
    } else if (action === "CREATE") {
      mutationCreateTask.mutate({
        ...data,
        title: data.title?.trim() === "" ? undefined : data.title?.trim(),
      });
    }
  };

  return {
    onSubmit,
    mutationCreateTask,
    control,
    watch,
    handleSubmit,
    errors,
    isDirty,
    viewEdit,
    handleViewEdit,
    handleDeleteTask,
  };
};
