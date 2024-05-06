import { Document } from 'src/document/entities/document.entity';
import { TeachingAssignement } from 'src/teachingAssignements/entities/teachingAssignements.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  code: string;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(
    () => TeachingAssignement,
    (teachingAssignement) => teachingAssignement.subjects,
  )
  teachingAssignement: TeachingAssignement;

  @OneToMany(() => Document, (documents) => documents.subject)
  documents: Document[];
}
