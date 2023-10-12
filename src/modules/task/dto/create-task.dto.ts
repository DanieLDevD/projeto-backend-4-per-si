import { IsArray, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ITask, TaskPriority } from 'src/shared/interfaces/task.interface';

export class CreateTaskDto implements ITask {
  @IsString({ message: 'O nome deve ser uma string' })
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  name: string;

  @IsString({ message: 'A Descrição deve ser uma string' })
  @IsNotEmpty({ message: 'A Descrição não pode ser vazio' })
  desc: string;

  @IsEnum(TaskPriority)
  priority: TaskPriority;

  @IsString({ message: 'O prazo limite deve ser do tipo data' })
  @IsNotEmpty({ message: 'O prazo limite não pode ser vazio' })
  deadline: string;

  @IsString({ message: 'O nome deve ser uma string' })
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  category: string;

  @IsArray({ message: 'Os autores devem ser um array', each: false })
  @IsNotEmpty({ message: 'O author não pode ser vazio' })
  authorsIds: string[];
}
