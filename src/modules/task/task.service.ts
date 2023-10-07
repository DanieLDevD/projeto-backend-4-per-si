import { Injectable } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  create(createTaskDto: CreateTaskDto) {
    return this.taskRepository.create(createTaskDto);
  }

  findAll() {
    return this.taskRepository.findAll();
  }

  findOne(id: string) {
    return this.taskRepository.findOne(id);
  }

  findByName(name: string) {
    return this.taskRepository.findByName(name);
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.taskRepository.update(id, updateTaskDto);
  }

  remove(id: string) {
    return this.taskRepository.remove(id);
  }
}
