// src/category/dto/update-tag.dto.ts
import { ApiProperty } from '@nestjs/swagger';  
export class UpdateTagDto {
    @ApiProperty({  
      description: 'Nama tag',  
      example: 'Programming',  
    })
    name?: string;
  }