import { Dictionary } from '../../types';
import { Task, Column } from '../../Data/types';
import { DropResult } from 'react-beautiful-dnd';
// TODO: Объеденить экшны в отдельные папки по неймспейсам
import { getScrumData, setScrumData } from '../../Store/Action/scrum-data';
// TODO: Объеденить редьсюеры в отдельные папки по неймспейсам
import { ScrumDataState } from '../../Store/Reducer/scrum-data/types';

export type DndContainerState = {
    columns: Dictionary<Column>;
    tasks: Dictionary<Task>;
    columnOrder: Array<string>;
};

export type DndContainerDispatchProps = {
    getScrumData: typeof getScrumData;
    setScrumData: typeof setScrumData;
};

export type DndContainerStateProps = {
    initialData: ScrumDataState;
};

export type DndContainerProps = DndContainerDispatchProps & DndContainerStateProps;