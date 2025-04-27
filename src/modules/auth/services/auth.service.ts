import { HttpStatus, Injectable } from '@nestjs/common';
import { AppException } from 'src/common/exceptions/app.exception';
import { UsuarioDto } from 'src/modules/user/dtos/usuario-dto';

import { UsuarioForm } from 'src/modules/user/forms/usuario-form';
import { UserService } from 'src/modules/user/services/user.service';
import { SupabaseService } from 'src/supabase/supabase.service';
import { signinForm } from '../forms/signin-form';
import { AuthTokenResponsePassword } from '@supabase/supabase-js';
import { SigninDto } from '../dtos/signin-dto';

@Injectable()
export class AuthService {
  
  constructor(
    private readonly userService: UserService,
    private readonly supabase: SupabaseService

  ) {}
      
  
  async signUp(user: UsuarioForm):Promise<UsuarioDto> {
    
    //procurando se usuario ja existente no banco
    const userExist = await this.userService.findUserByEmail(user.email);
    //se existir retorna uma exception
    if(userExist){
     
      AppException.builder()
      .message('usuario ja cadastrado com esse email')
      .status(HttpStatus.CONFLICT)
      .build();
    }
    const userAuth = await this.supabase.getClient().auth.admin.createUser({
      email: user.email,
      password: user.senha,
      email_confirm: true,
    });
   
    const newUser = await this.userService.createUser(userAuth.data.user?.id!,user);
    //salva usuario no supabase para poder usar a autenticação 
    return UsuarioDto.of(newUser);

  }

  async signIn(auth: signinForm):Promise<SigninDto>{

    const authTokenResponsePassword:AuthTokenResponsePassword = await this.supabase.getClient().auth.signInWithPassword({
      email:auth.email,
      password:auth.senha
     })
    
     if(authTokenResponsePassword.error){
      AppException.builder()
      .message(authTokenResponsePassword.error.message)
      .status(HttpStatus.FORBIDDEN)
      .build()
     }

     return SigninDto.of(authTokenResponsePassword);
  }
}