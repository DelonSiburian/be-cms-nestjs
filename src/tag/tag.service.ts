// src/tag/tag.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from './tag.entity';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}

  async create(createTagDto: CreateTagDto) {
    const tag = this.tagRepository.create({
      ...createTagDto,
      slug: createTagDto.name.toLowerCase().replace(/\s+/g, '-'),
    });
    return this.tagRepository.save(tag);
  }

  async findAll() {
    return this.tagRepository.find();
  }

  async findOne(id: number) {
    return this.tagRepository.findOneBy({ id });
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    const tag = await this.tagRepository.preload({
      id,
      ...updateTagDto,
      slug: updateTagDto.name?.toLowerCase().replace(/\s+/g, '-'),
    });
    if (!tag) {
      throw new Error(`Tag with ID ${id} not found`);
    }
    return this.tagRepository.save(tag);
  }

  async remove(id: number) {
    const tag = await this.findOne(id);
    if (!tag) {
      throw new Error(`Tag with ID ${id} not found`);
    }
    return this.tagRepository.remove(tag);
  }
}
