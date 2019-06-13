import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import anything = jasmine.anything;
import { UpdateCatDto } from './dto/update-cart.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return await createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return await this.catModel.find().exec();
  }

  async deleteAll() {
    return await this.catModel.deleteMany();
  }

  async findOne(name: string) {
    return await this.catModel.findOne({
      name
    });
  }

  async update(updateCatDto: UpdateCatDto) {
    return await this.catModel.update(updateCatDto);
  }
}
