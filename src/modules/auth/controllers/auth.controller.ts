import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UsuarioForm } from 'src/modules/user/forms/usuario-form';
import { UsuarioDto } from 'src/modules/user/dtos/usuario-dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  async signup(@Body() user: UsuarioForm): Promise<UsuarioDto> {
    return this.authService.signup(user);
  }
}
