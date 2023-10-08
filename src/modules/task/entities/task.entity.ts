import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ITask, TaskPriority } from 'src/shared/interfaces/task.interface';

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task implements ITask {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  desc: string;

  @Prop({ required: true })
  priority: TaskPriority;

  @Prop({ required: true })
  deadline: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  userId: string;
}

const TaskSchema = SchemaFactory.createForClass(Task);

export { TaskSchema };
