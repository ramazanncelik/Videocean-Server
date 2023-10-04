import { IsNotEmpty } from 'class-validator';

export class SubscriptionCreateDto {
  @IsNotEmpty()
  From: string;
  @IsNotEmpty()
  To: string;
}