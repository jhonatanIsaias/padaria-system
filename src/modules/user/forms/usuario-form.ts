import { IsEmail, IsNotEmpty, IsString, MinLength,IsNumber,IsOptional } from 'class-validator';


export class UsuarioForm {
  
  @IsNumber()
  @IsOptional()
  id:number;

  @IsNotEmpty({message:'o campo nome é obrigatorio'})
  @IsString()
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  senha: string;
  
}
