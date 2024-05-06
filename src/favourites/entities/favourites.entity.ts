import { Book } from 'src/books/entities/books.entity';
import { User } from 'src/users/entities/user.entity';
import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Favourite {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (student) => student.favourites)
  student: User;

  @ManyToOne(() => Book, (book) => book.favourites)
  book: Book;

  @CreateDateColumn()
  addedAt: Date;
}
