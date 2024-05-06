import { Book } from 'src/books/entities/books.entity';
import { Fine } from 'src/fines/entities/fines.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class BookBorrowings {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (student) => student.bookBorrowings)
  student: User;

  @ManyToOne(() => Book, (book) => book.bookBorrowings)
  book: Book;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  borrowedAt: Date;

  @Column({ type: 'datetime', nullable: true })
  dueDate: Date;

  @Column({ type: 'datetime', nullable: true })
  returnAt: Date;

  @OneToMany(() => Fine, (fines) => fines.student)
  fines: Fine[];
}
