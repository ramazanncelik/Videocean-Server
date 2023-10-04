import { IsNotEmpty } from 'class-validator';

export class LikeAndDisLikeCreateDto {
  @IsNotEmpty()
  UserId: string;
  @IsNotEmpty()
  VideoId: string;
}

export class LikeAndDisLikeDeleteDto {
  @IsNotEmpty()
  LikeOrDisLikeId: string;
  @IsNotEmpty()
  VideoId: string;
}