import { Model } from 'mongoose';
import { UserCreateDto, UserLoginDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';
export declare class AuthService {
    private userMongo;
    private transporter;
    constructor(userMongo: Model<UserModel>);
    compareHashes(password: any, hashed: any): Promise<any>;
    convertToHash(value: string): Promise<any>;
    login(user: UserLoginDto): Promise<any>;
    create(body: UserCreateDto): Promise<Object>;
    getResetPasswordMail(data: any): Promise<Object>;
    updatePassword(body: any): Promise<Object>;
}
