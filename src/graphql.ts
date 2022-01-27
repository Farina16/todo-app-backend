
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface TaskFilter {
    id?: Nullable<string>;
    name?: Nullable<string>;
}

export interface TaskInput {
    name?: Nullable<string>;
    status?: Nullable<string>;
}

export interface IMutation {
    addTask(payload: TaskInput): Nullable<Task> | Promise<Nullable<Task>>;
    deleteTask(where?: Nullable<TaskFilter>): Nullable<TaskDeleteResponse> | Promise<Nullable<TaskDeleteResponse>>;
    updateTask(payload: TaskInput, where?: Nullable<TaskFilter>): Nullable<TaskDeleteResponse> | Promise<Nullable<TaskDeleteResponse>>;
}

export interface IQuery {
    listTasks(where?: Nullable<TaskFilter>): Nullable<TaskResponse> | Promise<Nullable<TaskResponse>>;
}

export interface Task {
    _id?: Nullable<string>;
    name?: Nullable<string>;
    status?: Nullable<string>;
}

export interface TaskDeleteResponse {
    edges?: Nullable<Nullable<Task>[]>;
    modified?: Nullable<number>;
}

export interface TaskResponse {
    edges?: Nullable<Nullable<Task>[]>;
}

type Nullable<T> = T | null;
