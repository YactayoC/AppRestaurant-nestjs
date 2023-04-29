import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { UserModule } from './user/user.module';
import { EmployeeModule } from './employee/employee.module';
import { ProductModule } from './product/product.module';
import { ClientModule } from './client/client.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    UserModule,
    EmployeeModule,
    ProductModule,
    ClientModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
