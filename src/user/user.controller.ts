import { Body, Controller, Get, Post, Put, Delete, Param, UseFilters, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UserUpdateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    async getAllUsers(): Promise<UserModel[]> {
        return this.userService.findAll();
    }

    @Get(":id")
    async getUser(@Param('id') id: string): Promise<UserModel> {
        return this.userService.findById(id);
    }

    @Get("searchUser/:searchText")
    async searchUser(@Param('searchText') searchText: string): Promise<Object> {
        return this.userService.searchUser(searchText);
    }

    @Put(":id")
    async updateUser(@Param('id') id: string, @Body() body: UserUpdateDto): Promise<any> {
        return this.userService.update(id, body);
    }

    @Delete(":id")
    async deleteUser(@Param('id') id: string): Promise<any> {
        return this.userService.delete(id);
    }
}
