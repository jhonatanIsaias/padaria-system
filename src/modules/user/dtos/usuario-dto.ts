import { usuarios } from '@prisma/client'; 

export class UsuarioDto {
  id:string;
  nome: string;
  email: string;


  static of(user: usuarios): UsuarioDto {
    const data = new UsuarioDto();
    data.id = user.id;
    data.nome = user.nome!;
    data.email = user.email!;
    return data;
  }
}
