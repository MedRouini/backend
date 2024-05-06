import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { PasswordModule } from 'src/password/password.module';
import { UsersService } from './users.service';

@Module({
  controllers: [],
  providers: [UsersService],
  exports: [UsersService],
  imports: [TypeOrmModule.forFeature([User]), PasswordModule],
})
export class UsersModule {}
