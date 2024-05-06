import { Club } from 'src/clubs/entities/club.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ClubMembership {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => User, (users) => users.clubMembership)
  users: User[];

  @OneToMany(() => Club, (clubs) => clubs.clubMembership)
  clubs: Club[];

  @CreateDateColumn()
  joinedAt: Date;

  @Column({ type: 'datetime', nullable: true })
  leftAt: Date;
}
