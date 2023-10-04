import { IsNotEmpty } from 'class-validator';

export class CommentCreateDto {
  @IsNotEmpty()
  OwnerId: string;
  @IsNotEmpty()
  VideoId: string;
  @IsNotEmpty()
  Description: string;
  @IsNotEmpty()
  Date: string;
  @IsNotEmpty()
  Like: number;
  @IsNotEmpty()
  DisLike: number;
}

export class CommentUpdateDto {
  Like: number;
  DisLike: number;
}
