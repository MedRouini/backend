import { BookBorrowings } from 'src/bookBorrowings/entities/book-borrowings.entity';
import { ClubMembership } from 'src/clubmembership/entities/club-membership.entity';
import { Club } from 'src/clubs/entities/club.entity';
import { Document } from 'src/document/entities/document.entity';
import { Favourite } from 'src/favourites/entities/favourites.entity';
import { Fine } from 'src/fines/entities/fines.entity';
import { Rating } from 'src/ratings/entities/ratings.entity';
import { TeachingAssignement } from 'src/teachingAssignements/entities/teachingAssignements.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: 'STUDENT' })
  role: string;

  @Column({ nullable: true })
  profilePictureUrl: string;

  @Column({ nullable: true })
  identityNumber: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => BookBorrowings, (bookBorrowings) => bookBorrowings.student)
  bookBorrowings: BookBorrowings[];

  @OneToMany(() => Rating, (ratings) => ratings.student)
  ratings: Rating[];

  @OneToMany(() => Favourite, (favourites) => favourites.student)
  favourites: Favourite[];

  @OneToMany(() => Fine, (fines) => fines.student)
  fines: Fine[];

  @ManyToOne(
    () => TeachingAssignement,
    (teachingAssignement) => teachingAssignement.teachers,
  )
  teachingAssignement: TeachingAssignement;

  @OneToMany(() => Document, (documents) => documents.user)
  documents: Document[];

  @OneToOne(() => Club, (clubResponsible) => clubResponsible.responsibleTeacher)
  clubResponsible: Club;

  @OneToOne(() => Club, (clubPresidence) => clubPresidence.president)
  clubPresidence: Club;

  @ManyToOne(() => ClubMembership, (membership) => membership.users)
  clubMembership: ClubMembership;
}
