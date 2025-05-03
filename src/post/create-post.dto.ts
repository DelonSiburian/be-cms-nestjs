import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Category } from 'src/category/category.entity';
import { Tag } from 'src/tag/tag.entity';
import { ManyToOne, JoinColumn } from 'typeorm';
export class CreatePostDTO {
  @ApiProperty({ example: 'Judul postingan' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Isi konten postingan' })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ example: 'https://example.com/image.jpg', required: false })
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @ApiProperty({ example: 1 })  // ID kategori sebagai number
  @IsNumber()
  @IsNotEmpty()
  categoryId: number;   // Gunakan categoryId di DTO, bukan objek Category

  @ApiProperty({ example: [1], required: false })
  @IsOptional()
  @IsArray()
  tagIds?: number[];
}
