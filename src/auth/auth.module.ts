import { Module } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { ClientModule } from 'src/client/client.module';
import { EmployeeModule } from 'src/employee/employee.module';

@Module({
  imports: [UserModule, ClientModule, EmployeeModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
