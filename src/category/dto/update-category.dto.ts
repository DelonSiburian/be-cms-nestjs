// src/category/dto/update-category.dto.ts
import { ApiProperty } from '@nestjs/swagger';  
export class UpdateCategoryDto {
    @ApiProperty({  
      description: 'Nama kategori',  
      example: 'Teknologi Edit',
      required: false  
    })  
    name: string;
    @ApiProperty({  
      description: 'Deskripsi kategori',  
      example: 'Edit Kategori untuk artikel seputar teknologi dan inovasi',  
      required: false  
    })  
    description?: string;
  }