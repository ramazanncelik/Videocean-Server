import { IsNotEmpty } from 'class-validator';

export class CommentLikeAndDisLikeCreateDto {
  @IsNotEmpty()
  UserId: string;
  @IsNotEmpty()
  CommentId: string;
}