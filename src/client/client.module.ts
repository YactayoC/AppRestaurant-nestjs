import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { UserModule } from 'src/user/user.module';
import { ProductModule } from 'src/product/product.module';
import { Client, ClientSchema } from './entities/client.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]), UserModule, ProductModule],
  controllers: [ClientController],
  providers: [ClientService],
  exports: [MongooseModule, ClientService],
})
export class ClientModule {}
