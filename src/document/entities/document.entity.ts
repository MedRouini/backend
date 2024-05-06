import { Class } from 'src/class/entities/class.entity';
import { News } from 'src/news/entities/news.entity';
import { Subject } from 'src/subjects/entities/subject.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Document {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  path: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => News, (news) => news.documents)
  news: News;

  @ManyToOne(() => User, (user) => user.documents)
  user: User;

  @ManyToOne(() => Subject, (subject) => subject.documents)
  subject: Subject;

  @ManyToOne(() => Class, (classes) => classes.documents)
  classes: Class;
}
