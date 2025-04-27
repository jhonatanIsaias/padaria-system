import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UsuarioForm } from 'src/modules/user/forms/usuario-form';
import { UsuarioDto } from 'src/modules/user/dtos/usuario-dto';
import { signinForm } from '../forms/signin-form';
import { AuthTokenResponsePassword } from '@supabase/supabase-js';
import { SigninDto } from '../dtos/signin-dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  async signUp(@Body() user: UsuarioForm): Promise<UsuarioDto> {
    return this.authService.signUp(user);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async signIp(@Body() auth: signinForm): Promise<SigninDto> {
    return this.authService.signIn(auth);
  }
}
