import { usuarios } from '@prisma/client'; 

export class UsuarioDto {
  id:string;
  nome: string;
  permissao: boolean;
  login: string;
  email: string;
  created_at:Date;

  static of(user: usuarios): UsuarioDto {
    const data = new UsuarioDto();
    data.id = user.id;
    data.nome = user.nome!;
    data.email = user.email!;
    data.login = user.login!;
    data.permissao = !!user.permissao; 
    data.created_at = user.created_at;
    return data;
  }
}
