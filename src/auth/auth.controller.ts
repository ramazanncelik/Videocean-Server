import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserCreateDto, UserLoginDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post("login")
    async login(@Body() body: UserLoginDto): Promise<UserModel> {
        console.log(body)
        return this.authService.login(body);
    }

    @Post("signup")
    async create(@Body() body: UserCreateDto): Promise<Object> {
        return this.authService.create(body);
    }

    @Post("getResetPasswordMail")
    async getResetPasswordMail(@Body() body: any): Promise<Object> {
        return this.authService.getResetPasswordMail(body);
    }

    @Post("updatePassword")
    async updatePassword(@Body() body: any): Promise<Object> {
        console.log(body)
        return this.authService.updatePassword(body);
    }

}