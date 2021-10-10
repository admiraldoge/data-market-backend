import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    createdUser.save();
  }

  async findAll(page: number, limit: number) {
    const items = await this.userModel
      .find()
      .skip(limit * (page - 1)) // we will not retrieve all records, but will skip first 'n' records
      .limit(limit) // will limit/restrict the number of records to display
      .exec();
    const totalDocuments = await this.userModel.countDocuments();
    const res = { totalDocuments, items, page, limit };
    return res;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    Reflect.deleteProperty(updateUserDto, '_id');
    const updateRequest = await this.userModel.findOneAndUpdate(
      { _id: id },
      updateUserDto,
      { new: true },
    );
    return updateRequest;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  async remove(id: string) {
    console.log('Deleting user: ', id);
    const deleteRequest = await this.userModel.deleteOne({ _id: id });
    return null;
  }

  async findOneByCredentials(credentials: { email: string; password: string }) {
    const items = await this.userModel.find(credentials).exec();
    if (items.length === 0) return false;
    return items[0];
  }
}
