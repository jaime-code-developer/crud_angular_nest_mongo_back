import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth') // Asegúrate que el decorador tenga 'auth'
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login') // Esto crea la ruta POST /auth/login
  async login(@Body() body: { email: string; password: string }) {
    console.log(body);
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return this.authService.login(user);
  }
}
