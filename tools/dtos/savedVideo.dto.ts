import { IsNotEmpty } from 'class-validator';

export class SavedVideoCreateDto {
  @IsNotEmpty()
  UserId: string;
  @IsNotEmpty()
  VideoId: string;
  @IsNotEmpty()
  Date: string;
}
