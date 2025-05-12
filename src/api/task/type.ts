export type TypeTask = "PESSOAL" | "PROFISSIONAL";

export type PrioridadeTask = "URGENTE" | "IMPORTANTE" | "NORMAL";

export type Task = {
  id: string;
  title?: string;
  description: string;
  type?: TypeTask;
  prioridade?: PrioridadeTask;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTask = Omit<Task, "title"> & {
  title: string | null;
};

export type TaskPayload = Omit<Task, "createdAt" | "updatedAt" | "id">;
