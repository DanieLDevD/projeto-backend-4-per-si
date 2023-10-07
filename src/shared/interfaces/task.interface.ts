export interface ITask {
  name: string;
  desc: string;
  priority: TaskPriority;
  deadline: Date;
  category: string;
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
