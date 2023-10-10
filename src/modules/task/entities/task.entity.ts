import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
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

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'User' })
  authorId: string;
}

const TaskSchema = SchemaFactory.createForClass(Task);

TaskSchema.virtual('author', {
  ref: 'User',
  localField: 'authorId',
  foreignField: '_id',
  justOne: false,
});

export { TaskSchema };
