import { IsNotEmpty } from 'class-validator';

export class VideoCreateDto {
  @IsNotEmpty()
  OwnerId: string;
  @IsNotEmpty()
  Title: string;
  @IsNotEmpty()
  Description: string;
  @IsNotEmpty()
  CoverPhotoUrl: string;
  @IsNotEmpty()
  VideoUrl: string;
  @IsNotEmpty()
  Category: string;
  @IsNotEmpty()
  Like: number;
  @IsNotEmpty()
  DisLike: number;
  @IsNotEmpty()
  Comment: number;
  @IsNotEmpty()
  ViewsCount: number;
  @IsNotEmpty()
  Date: string;
}

export class VideoUpdateDto {
  Title: string;
  Description: string;
  CoverPhotoUrl: string;
  Like: number;
  DisLike: number;
  Comment: number;
  ViewsCount: number;
}