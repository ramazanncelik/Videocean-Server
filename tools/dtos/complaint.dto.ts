import { IsNotEmpty } from 'class-validator';

export class ComplaintCreateDto {
  @IsNotEmpty()
  OwnerId: string;
  @IsNotEmpty()
  VideoId: string;
  @IsNotEmpty()
  Title: string;
  @IsNotEmpty()
  Description: string;
  @IsNotEmpty()
  Date: string;
}
