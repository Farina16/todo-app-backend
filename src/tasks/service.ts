import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, Repository } from 'typeorm';
import { TaskDeleteResponse, TaskInput } from '../graphql.schema';
import { Task } from './task.entity';
@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private TaskRepository: Repository<Task>,
  ) {}

  findAll(queryObject: any): Promise<Task[]> {
    return this.TaskRepository.find({
      ...queryObject,
    });
  }
  async getTotalCount(queryObject: any): Promise<number> {
    return await this.TaskRepository.count(queryObject);
  }
  findOne(id: string): Promise<Task> {
    return this.TaskRepository.findOne(id);
  }
  create(payload: TaskInput): Promise<Task> {
    const data = this.TaskRepository.create(Task.of(payload));
    return this.TaskRepository.save(data);
  }
  async update(
    queryObject: FindConditions<Task>,
    payload: TaskInput
  ): Promise<TaskDeleteResponse> {
    const result =  await this.TaskRepository.findOne(queryObject._id as string);
    await this.TaskRepository.update(queryObject._id as string, payload)
    return {
      modified: 1,
      edges: [result] as any,
    };
  }
  async delete(
    queryObject: FindConditions<Task>,
  ): Promise<TaskDeleteResponse> {
    const result =  await this.TaskRepository.findOne(queryObject._id as string);
    await this.TaskRepository.delete(queryObject._id as string)
    return {
      modified: 1,
      edges: [result] as any,
    };
  }
}
