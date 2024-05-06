import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { BookBorrowings } from 'src/bookBorrowings/entities/book-borrowings.entity';

@Entity('fines')
export class Fine {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (student) => student.fines)
  student: User;

  @ManyToOne(() => BookBorrowings, (bookBorrowing) => bookBorrowing.fines)
  bookBorrowing: BookBorrowings;

  @Column({ type: 'int' })
  fineDuration: number; // in days

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fineImposedAt: Date;
}
