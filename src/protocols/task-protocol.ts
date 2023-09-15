export type Task = {
  id: number;
  name: string;
  person: string;
  status?: boolean;
  createdAt?: Date | string;
  dueDate: Date | string;
};

export type CreateTask = Omit<Task, 'id'>;

export type UpdateTask = Partial<Task>;