import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UsuarioForm } from '../forms/usuario-form';

@Injectable()
export class UserService {
    constructor( private readonly prisma: PrismaService){}

   async findUserByEmail(email:string){
    
    const user = await this.prisma.usuarios.findUnique({
        where:{
          email:email
        },
      });
      return user;
   }

   async createUser(user: UsuarioForm){
    const newUser = await this.prisma.usuarios.create({
        data: {
          nome: user.nome,
          email: user.email,
          login: user.login,
          senha: user.senha,
          permissao: user.permissao,
        },
      });

      return newUser;
   }
}
