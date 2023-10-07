import { IsHash, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IUser } from 'src/shared/interfaces/user.interface';

export class CreateUserDto implements IUser {
  @IsString({ message: 'O id deve ser uma string' })
  @IsOptional()
  id?: string;

  @IsString({ message: 'O name deve ser uma string' })
  @IsNotEmpty({ message: 'O name não pode ser vazio' })
  name: string;

  @IsString({ message: 'O email deve ser uma string' })
  @IsNotEmpty({ message: 'O email não pode ser vazio' })
  email: string;

  @IsString({ message: 'A senha deve ser uma string' })
  @IsNotEmpty({ message: 'A senha não pode ser vazio' })
  @IsHash('sha256', { message: 'A senha deve ser um hash SHA256' })
  password: string;
}
