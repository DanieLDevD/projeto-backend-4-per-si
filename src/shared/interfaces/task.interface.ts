export interface ITask {
  name: string;
  desc: string;
  priority: TaskPriority;
  deadline: string;
  category: string;
  userId: string;
}

export enum TaskPriority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
}

export interface ITaskAll {
  tasks: ITask[];
  count: number;
}
