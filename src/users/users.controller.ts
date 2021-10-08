import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query, Res
} from "@nestjs/common";
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import newBaseResponse from '../statics/baseResponse';
import baseResponse from '../statics/baseResponse';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(@Query() query) {
    const { page, limit } = query;
    return await this.usersService.findAll(parseInt(page), parseInt(limit));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post('auth')
  async findByCredentials(@Body() credentials: any, @Res() res) {
    console.log('Logging with credentials:', credentials);
    const baseResponse = newBaseResponse();
    try {
      baseResponse.data = await this.usersService.findOneByCredentials(
        credentials,
      );
      console.log('Base response', baseResponse);
      res.cookie('accessToken', 'a1m2a3n4d5a', {
        expires: new Date(new Date().getTime() + 30 * 1000),
        httpOnly: true,
      });
      res.set({
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type,Authorization',
      });
    } catch (error) {
      baseResponse.success = false;
      baseResponse.message = error.toString();
    } finally {
      res.send(baseResponse);
      return baseResponse;
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
