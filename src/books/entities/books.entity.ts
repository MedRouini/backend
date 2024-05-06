import { BookBorrowings } from 'src/bookBorrowings/entities/book-borrowings.entity';
import { Favourite } from 'src/favourites/entities/favourites.entity';
import { Rating } from 'src/ratings/entities/ratings.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  isbn: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  description: string;

  @Column()
  publisher: string;

  @Column()
  publicationDate: Date;

  @Column()
  pages: number;

  @Column()
  genre: string;

  @Column()
  totalQuantity: number;

  @Column()
  availableQuantity: number;

  @Column()
  imageUrl: string;

  @OneToMany(() => BookBorrowings, (bookBorrowings) => bookBorrowings.book)
  bookBorrowings: BookBorrowings[];

  @OneToMany(() => Rating, (ratings) => ratings.book)
  ratings: Rating[];

  @OneToMany(() => Favourite, (favourites) => favourites.book)
  favourites: Favourite[];
}
