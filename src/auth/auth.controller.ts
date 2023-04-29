import { Controller, Post, Body } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginDto } from '../common/dto/login.dto';
import { RegisterDto } from '../common/dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  registerClient(@Body() registerDto: RegisterDto) {
    return this.authService.registerClient(registerDto);
  }

  @Post('login')
  loginClient(@Body() loginDto: LoginDto) {
    return this.authService.loginClient(loginDto);
  }
}
