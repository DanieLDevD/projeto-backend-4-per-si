import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TaskSchema } from './entities/task.entity';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskRepository } from './task.repository';

@Module({
  imports: [DatabaseModule.forFeature([{ name: 'Task', schema: TaskSchema }])],
  controllers: [TaskController],
  providers: [TaskService, TaskRepository],
  exports: [TaskService, TaskRepository],
})
export class TaskModule {}
