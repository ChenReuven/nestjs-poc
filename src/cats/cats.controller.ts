import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cart.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get(':name')
  findOne(@Param('name') name: string): Promise<Cat> {
    return this.catsService.findOne(name);
  }

  @Get()
  findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    await this.catsService.create(createCatDto);
  }

  @Delete()
  deleteAll(): Promise<Cat>  {
    return this.catsService.deleteAll();
  }

  @Put()
  async update(@Body() updateCatDto: UpdateCatDto) {
    await this.catsService.update(updateCatDto);
  }
}
