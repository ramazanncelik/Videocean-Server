import { UserService } from './user.service';
import { UserUpdateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<UserModel[]>;
    getUser(id: string): Promise<UserModel>;
    searchUser(searchText: string): Promise<Object>;
    updateUser(id: string, body: UserUpdateDto): Promise<any>;
    deleteUser(id: string): Promise<any>;
}
