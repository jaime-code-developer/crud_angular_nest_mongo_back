// users.module.ts
import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    forwardRef(() => AuthModule),  // Usa forwardRef aquí también
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],  // Exporta UsersService para que AuthModule pueda usarlo
})
export class UsersModule {}