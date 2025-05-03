// src/tag/tag.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from './tag.entity';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Tag]), TagModule],
  controllers: [TagController],
  providers: [TagService],
  exports: [TagService], // Hanya jika perlu diakses modul lain
})
export class TagModule {}
