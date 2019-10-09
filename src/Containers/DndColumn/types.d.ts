import { Task, Column } from '../../Data/types';

export type DndColumnState = {
    columnTitle: string
}

export interface DeleteColumn {
    (columnId: string) : void
};

export interface DeleteTask {
    (taskId: string, columnId: string): void
}

export interface AddTask {
    (columnId: string, taskContent: string): void
}

export interface UpdateTitle {
    (columnId: string, title: string): void
}

export type DndColumnProps = {
    column: Column;
    tasks: Array<Task>;
    index: number;
    onDeleteColumnClick: DeleteColumn;
    onDeleteTaskClick: DeleteTask;
    onAddTaskClick: AddTask;
    onTitleUpdate: UpdateTitle
}