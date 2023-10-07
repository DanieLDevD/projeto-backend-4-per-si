import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { ITask, ITaskAll } from 'src/shared/interfaces/task.interface';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskRepository {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  create(createTask: ITask): Promise<Task> {
    return this.taskModel.create(createTask);
  }

  async findAll(): Promise<ITaskAll> {
    const task: Task[] = await this.taskModel.find().exec();
    const count: number = await this.taskModel.countDocuments().exec();

    const retorno = {
      tasks: task,
      count: count,
    };
    return retorno;
  }

  findOne(id: string): Promise<Task> {
    return this.taskModel.findById(id).exec();
  }

  findByName(name: string): Promise<Task> {
    return this.taskModel.findOne({ name: name }).exec();
  }

  update(id: string, updateTask: Partial<ITask>): Promise<Task> {
    return this.taskModel
      .findByIdAndUpdate(id, updateTask, { new: true })
      .exec();
  }

  remove(id: string): Promise<Task> {
    return this.taskModel.findByIdAndRemove(id).exec();
  }
}