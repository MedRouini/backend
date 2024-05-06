import { Class } from 'src/class/entities/class.entity';
import { Subject } from 'src/subjects/entities/subject.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TeachingAssignement {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Class, (classes) => classes.teachingAssignement)
  classes: Class[];

  @OneToMany(() => User, (teachers) => teachers.teachingAssignement)
  teachers: User;

  @OneToMany(() => Subject, (subjects) => subjects.teachingAssignement)
  subjects: Subject;
}
