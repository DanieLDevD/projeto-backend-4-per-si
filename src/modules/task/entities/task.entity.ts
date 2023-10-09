import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ITask, TaskPriority } from 'src/shared/interfaces/task.interface';

const transformTask = (doc: any, ret: any) => {
  ret.id = ret._id;

  delete ret._id;
  delete ret.__v;
};

export type TaskDocument = HydratedDocument<Task>;

@Schema({
  timestamps: true,
  collection: 'tasks',
  virtuals: true,
  toJSON: { virtuals: true, transform: transformTask },
  toObject: { virtuals: true, transform: transformTask },
})
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

TaskSchema.virtual('user', {
  ref: 'User',
  localField: 'userId',
  foreignField: '_id',
  justOne: true,
});

export { TaskSchema };
