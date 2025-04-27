import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UsuarioForm } from 'src/modules/user/forms/usuario-form';
import { UsuarioDto } from 'src/modules/user/dtos/usuario-dto';
import { signinForm } from '../forms/signin-form';
import { AuthTokenResponsePassword } from '@supabase/supabase-js';
import { SigninDto } from '../dtos/signin-dto';
import { ResponseDto } from 'src/common/dto/response.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  async signUp(@Body() user: UsuarioForm): Promise<ResponseDto<UsuarioDto>> {
    const userSaved = await this.authService.signUp(user);
    return ResponseDto.builder<UsuarioDto>('usuario criado com sucesso',HttpStatus.CREATED)
            .setData(userSaved)
            .build();
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async signIp(@Body() auth: signinForm): Promise<ResponseDto<SigninDto>> {
    const userAuth = await this.authService.signIn(auth);

    return ResponseDto.builder<SigninDto>('login efetuado com sucesso',HttpStatus.OK)
            .setData(userAuth)
            .build();
  }
}
