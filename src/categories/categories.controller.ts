// categories/categories.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from '@prisma/client';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() createCategoryDto: { name: string }): Promise<Category> {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Category> {
    return this.categoriesService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: { name: string }): Promise<Category> {
    return this.categoriesService.update(Number(id), updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Category> {
    return this.categoriesService.remove(Number(id));
  }
}
