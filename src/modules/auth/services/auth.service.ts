import { HttpStatus, Injectable } from '@nestjs/common';
import { AppException } from 'src/common/exceptions/app.exception';
import { PrismaService } from 'src/database/prisma.service';

import { UsuarioForm } from 'src/modules/user/forms/usuario-form';
//import { SupabaseService } from 'src/supabase/supabase.service';

@Injectable()
export class AuthService {
  
  constructor(private readonly prisma: PrismaService) {}
      
  
  async signup(user: UsuarioForm) {
    //procurando se usuario ja existente no banco
    const userExist = this.prisma.usuarios.findUnique({
      where:{
        email:user.email
      },
    });
    //se existir retorna uma exception
    if(userExist === null){
     
      AppException.builder()
      .message('usuario ja cadastrado com esse email')
      .status(HttpStatus.CONFLICT)
      .build();
    }
    
  }
}