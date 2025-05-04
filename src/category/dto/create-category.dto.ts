// src/category/dto/create-category.dto.ts
import { ApiProperty } from '@nestjs/swagger';  
export class CreateCategoryDto {
    @ApiProperty({  
      description: 'Nama kategori',  
      example: 'Teknologi',
      required: false  
    })  
    name: string;
    @ApiProperty({  
      description: 'Deskripsi kategori',  
      example: 'Kategori untuk artikel seputar teknologi dan inovasi',  
      required: false  
    })  
    description?: string;
  }