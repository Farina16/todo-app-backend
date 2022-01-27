import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Task {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column('text')
  name: string;

  @Column('text')
  status: string;

  @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
  @UpdateDateColumn({ name: 'updated_at' }) 'updated_at': Date;
  static of(params: Partial<Task>): Task {
    const task = new Task();
    task.name = params.name.toUpperCase();
    Object.assign(task, params);
    return task;
  }
}
