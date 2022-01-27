import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  Task,
  TaskDeleteResponse,
  TaskFilter,
  TaskInput,
  TaskResponse,
} from '../graphql.schema';
import { TaskService } from './service';

@Resolver()
export class TaskResolver {
  constructor(private readonly TaskService: TaskService) {}
  @Mutation('addTask')
  async addTask(
    @Args('payload') payload: TaskInput,
  ): Promise<Task> {
    return this.TaskService.create(payload) as Task;
  }
  @Query('listTasks')
  async listTasks(
    @Args('where') where: TaskFilter,
    @Context() context,
  ): Promise<TaskResponse> {
    const queryObject: any = {};
    context.where = where;

    if (where) {
      queryObject.where = {};
      if (where.id) {
        if (where.id === undefined) {
          throw new Error('Only id comparison with equality is supported');
        }
        queryObject.where = { id: where.id };
      }
      if (where.name) {
        if (where.name === undefined) {
          throw new Error('Only name comparison with equality is supported');
        }
        queryObject.where = { name: where.name };
      }
    }
    return {
      edges: (await this.TaskService.findAll(queryObject)) as any,
    };
  }

  @Mutation('deleteTask')
  async deleteTask(
    @Args('where') where: TaskFilter,
  ): Promise<TaskDeleteResponse> {
    if (where) {
      if (where.id === undefined) {
        throw new Error('Only id comparison with equality is supported');
      }
    }
    return this.TaskService.delete({
      _id: where.id,
    });
  }

  
  @Mutation('updateTask')
  async updateTask(
    @Args('where') where: TaskFilter,
    @Args('payload') payload: TaskInput,
  ): Promise<TaskDeleteResponse> {
    if (where) {
      if (where.id === undefined) {
        throw new Error('Only id comparison with equality is supported');
      }
    }
    return this.TaskService.update({
      _id: where.id,
    },payload);
  }
}
