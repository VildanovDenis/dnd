import { Dictionary } from "../types";

export type Task = {
    id: string;
    content: string;
};

export type Column = {
    id: string;
    title: string;
    tasksIds: string[];
    // tasksIds: Array<{key: string, value: number}>;
};

export type ColumnOrder = Array<string>

export type Tasks = {
    [id: string]: Task
};

export type Columns = Dictionary<Column>;

export type InitialData = {
    tasks: Tasks,
    columns: Columns,
    columnOrder: ColumnOrder
}