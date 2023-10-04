import { Model } from 'mongoose';
import { UserUpdateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';
export declare class UserService {
    private userMongo;
    constructor(userMongo: Model<UserModel>);
    convertToHash(value: string): Promise<any>;
    findById(user_id: string): Promise<UserModel>;
    findAll(): Promise<UserModel[]>;
    searchUser(searchText: string): Promise<Object>;
    update(user_id: string, body: UserUpdateDto): Promise<boolean>;
    delete(user_id: string): Promise<boolean>;
}
