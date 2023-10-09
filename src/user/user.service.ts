import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserUpdateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';
const bcrypt = require('bcrypt');

const saltRounds = 10;
const hashText = process.env.HASH_TEXT;

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private userMongo: Model<UserModel>,
  ) { }


  async convertToHash(value: string) {
    let hashPwd;
    await bcrypt.hash(`${hashText}${value}`, saltRounds).then(hash => {
      hashPwd = hash;
    });

    return await hashPwd;
  }

  async findById(user_id: string): Promise<UserModel> {
    const user = await this.userMongo.findById(user_id).exec();
    return user;
  }

  async findAll(): Promise<UserModel[]> {
    const users = await this.userMongo.find().exec();
    return users;
  }

  async searchUser(searchText: string): Promise<Object> {
    const users = await this.userMongo.find().exec();
    const wantedUser = await users.filter(user => user.NickName === searchText);
    if (users && wantedUser) {
      return { success: true, result: wantedUser };
    } else {
      return { success: false, result: [] };
    }
  }

  async update(user_id: string, body: UserUpdateDto): Promise<boolean> {
    if (body.Password) {
      body.Password = await this.convertToHash(body.Password)
    }

    const updatedUser = await this.userMongo.findByIdAndUpdate(user_id, body, { new: true }).exec();
    if (updatedUser) {
      return true;
    } else {
      return false;
    }
  }

  async delete(user_id: string): Promise<boolean> {
    const deletedUser = await this.userMongo.findByIdAndDelete(user_id).exec();
    if (deletedUser) {
      return true;
    } else {
      return false;
    }
  }

}
