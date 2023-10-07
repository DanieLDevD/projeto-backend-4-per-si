import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { ITask, TaskPriority } from 'src/shared/interfaces/task.interface';

export class CreateTaskDto implements ITask {
  @IsString({ message: 'O name deve ser uma string' })
  @IsNotEmpty({ message: 'O name não pode ser vazio' })
  name: string;

  @IsString({ message: 'A Descriçãodeve ser uma string' })
  @IsNotEmpty({ message: 'A Descriçãonão pode ser vazio' })
  desc: string;

  priority: TaskPriority;

  @IsDate({ message: 'Prazo limite deve ser do tipo Data' })
  @IsNotEmpty({ message: 'O Prazo limite não pode ser vazio' })
  deadline: Date;

  @IsString({ message: 'O name deve ser uma string' })
  @IsNotEmpty({ message: 'O name não pode ser vazio' })
  category: string;
}
