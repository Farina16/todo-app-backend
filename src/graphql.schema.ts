
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class TaskFilter {
    id?: Nullable<string>;
    name?: Nullable<string>;
}

export class TaskInput {
    name?: Nullable<string>;
    status?: Nullable<string>;
}

export class Task {
    __typename?: 'Task';
    _id?: Nullable<string>;
    name?: Nullable<string>;
    status?: Nullable<string>;
}

export class TaskResponse {
    __typename?: 'TaskResponse';
    edges?: Nullable<Nullable<Task>[]>;
}

export class TaskDeleteResponse {
    __typename?: 'TaskDeleteResponse';
    edges?: Nullable<Nullable<Task>[]>;
    modified?: Nullable<number>;
}

export abstract class IMutation {
    __typename?: 'IMutation';
    addTask?: Nullable<Task>;
    updateTask?: Nullable<TaskDeleteResponse>;
    deleteTask?: Nullable<TaskDeleteResponse>;
}

export abstract class IQuery {
    __typename?: 'IQuery';
    listTasks?: Nullable<TaskResponse>;
}

type Nullable<T> = T | null;
