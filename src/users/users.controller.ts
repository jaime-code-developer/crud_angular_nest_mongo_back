import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() user: User): Promise<User> {    
    return this.usersService.create(user);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':email')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('email') email: string): Promise<User> {
    return this.usersService.findOne(email);
  }

  @Get('byId/:id')
  @UseGuards(JwtAuthGuard)
  async findOneByID(@Param('id') id: string): Promise<User> {
    return this.usersService.findOneById(id);
  }


  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: string,
    @Body() user: Partial<User>,
  ): Promise<User> {
    return this.usersService.update(id, user);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: string): Promise<User> {
    return this.usersService.delete(id);
  }
}
