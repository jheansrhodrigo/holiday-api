import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Holiday {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  name_weekday: string;

  @Column()
  number_weekday: number;

  @Column()
  date: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
