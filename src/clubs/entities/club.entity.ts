import { ClubMembership } from 'src/clubmembership/entities/club-membership.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Club {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  coverImage: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(
    () => User,
    (responsibleTeacher) => responsibleTeacher.clubResponsible,
  )
  @JoinColumn()
  responsibleTeacher: User;

  @OneToOne(() => User, (president) => president.clubPresidence)
  @JoinColumn()
  president: User;

  @ManyToOne(() => ClubMembership, (membership) => membership.clubs)
  clubMembership: ClubMembership;
}
