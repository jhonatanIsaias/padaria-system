import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { usuarios } from 'generated/prisma';

export class UsuarioForm {
  
  @IsNotEmpty({message:'o campo nome é obrigatorio'})
  @IsString()
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  senha: string;

  @IsString()
  @IsNotEmpty({message:'o campo login é obrigatorio'})
  login: string;

  @IsNotEmpty()
  permissao: number;

}
