import { Dictionary } from '../../types';
import { Task, Column } from '../../Data/types';
import { DropResult } from 'react-beautiful-dnd';

export type DndContainerState = {
    columns: Dictionary<Column>;
    tasks: Dictionary<Task>;
    columnOrder: Array<string>;
};
export type DndContainerProps = {};