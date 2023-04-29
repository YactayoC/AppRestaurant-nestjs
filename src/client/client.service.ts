import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { UpdateClientDto } from './dto/update-client.dto';
import { CreateClientDto } from './dto/create-client.dto';
import { Client } from './entities/client.entity';
import { Model } from 'mongoose';

@Injectable()
export class ClientService {
  constructor(@InjectModel(Client.name) private readonly clientModel: Model<Client>) {}

  async create(createClientDto: CreateClientDto) {
    try {
      const client = await this.clientModel.create(createClientDto);
      return { client, message: 'Client created' };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll() {
    return await this.clientModel.find();
  }

  async findOne(id: string) {
    try {
      const client = await this.clientModel.findOne({ user: id }).populate('user');

      if (!client) {
        throw new NotFoundException('Client not found');
      }

      return client;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return { updateClientDto };
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
