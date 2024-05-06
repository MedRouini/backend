import { Class } from 'src/class/entities/class.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Timetable {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Class, (classes) => classes.timetable)
  classes: Class;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  startDate: Date;

  @Column({ type: 'datetime' })
  endDate: Date;

  @Column()
  type: string;
}
