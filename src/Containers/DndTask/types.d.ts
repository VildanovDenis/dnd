import { Task } from '../../Data/types';

export type DndTaskState = {};

export interface DeleteTask {
    (taskId: string): void
}

export type DndTaskProps = {
    index: number,
    task: Task,
    onDeleteTaskClick: DeleteTask
}