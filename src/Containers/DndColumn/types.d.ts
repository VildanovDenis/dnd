import { Task, Column } from '../../Data/types';

export type DndColumnState = {}

export type DndColumnProps = {
    column: Column,
    tasks: Array<Task>
}