// src/category/dto/create-tag.dto.ts
import { ApiProperty } from '@nestjs/swagger';  

export class CreateTagDto {  
  @ApiProperty({  
    description: 'Nama tag',  
    example: 'Programming',  
  })
  name: string;  
}