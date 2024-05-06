import { Document } from 'src/document/entities/document.entity';
import { Field } from 'src/fields/entities/field.entity';
import { TeachingAssignement } from 'src/teachingAssignements/entities/teachingAssignements.entity';
import { Timetable } from 'src/timetables/entities/timetable.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Class {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
  @ManyToOne(() => Field, (field) => field.classes)
  field: Field;

  @ManyToOne(
    () => TeachingAssignement,
    (teachingAssignement) => teachingAssignement.classes,
  )
  teachingAssignement: TeachingAssignement;

  @OneToMany(() => Timetable, (timetable) => timetable.classes)
  timetable: Timetable;

  @OneToMany(() => Document, (documents) => documents.classes)
  documents: Document[];
}
