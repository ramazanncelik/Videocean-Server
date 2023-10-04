import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class UserCreateDto {
  @IsEmail()
  @IsNotEmpty()
  Email: string;
  @IsNotEmpty()
  @MinLength(6)
  Password: string;
  @IsNotEmpty()
  NickName: string;
  @IsNotEmpty()
  FullName: string;
  @IsNotEmpty()
  Biography: string;
  @IsNotEmpty()
  ImageUrl: string;
  @IsNotEmpty()
  SubscriberCount: number;
  @IsNotEmpty()
  VideoCount: number;
  @IsNotEmpty()
  ConfirmationCode: string;
  @IsNotEmpty()
  Role: string;
  @IsNotEmpty()
  UsageAgreement: boolean;
  @IsNotEmpty()
  EmailVerify: boolean;
}

export class UserUpdateDto {
  NickName: string;
  Password: string;
  FullName: string;
  Biography: string;
  ImageUrl: string;
  SubscriberCount: number;
  VideoCount: number;
  ConfirmationCode: string;
  Role: string;
  EmailVerify: boolean;
}

export class UserLoginDto {
  @IsEmail()
  @IsNotEmpty()
  Email: string;
  @IsNotEmpty()
  Password: string;
}
