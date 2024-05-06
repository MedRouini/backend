import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PasswordModule } from './password/password.module';
import bcryptConfig from './config/bcrypt.config';
import jwtConfig from './config/jwt.config';
import { User } from './users/entities/user.entity';
import { BookBorrowings } from './bookBorrowings/entities/book-borrowings.entity';
import { Book } from './books/entities/books.entity';
import { Class } from './class/entities/class.entity';
import { ClubMembership } from './clubmembership/entities/club-membership.entity';
import { Club } from './clubs/entities/club.entity';
import { Document } from './document/entities/document.entity';
import { Favourite } from './favourites/entities/favourites.entity';
import { Field } from './fields/entities/field.entity';
import { News } from './news/entities/news.entity';
import { Fine } from './fines/entities/fines.entity';
import { Rating } from './ratings/entities/ratings.entity';
import { Subject } from './subjects/entities/subject.entity';
import { TeachingAssignement } from './teachingAssignements/entities/teachingAssignements.entity';
import { Timetable } from './timetables/entities/timetable.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      synchronize: true,
      autoLoadEntities: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [bcryptConfig, jwtConfig],
    }),
    AuthModule,
    UsersModule,
    PasswordModule,
    TypeOrmModule.forFeature([
      User,
      BookBorrowings,
      Book,
      Class,
      ClubMembership,
      Club,
      Document,
      Favourite,
      Field,
      News,
      Fine,
      Rating,
      Subject,
      TeachingAssignement,
      Timetable,
    ]),
    AuthModule,
  ],
})
export class AppModule {}
