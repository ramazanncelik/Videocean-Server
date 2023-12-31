import { AuthService } from './auth.service';
import { UserCreateDto, UserLoginDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(body: UserLoginDto): Promise<UserModel>;
    create(body: UserCreateDto): Promise<Object>;
    getResetPasswordMail(body: any): Promise<Object>;
    getEmailVerifyMail(body: any): Promise<Boolean>;
    updatePassword(body: any): Promise<Object>;
    updateEmailVerify(body: any): Promise<Object>;
}
