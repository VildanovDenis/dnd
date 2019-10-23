import {WithRouterProps, RouteComponentProps} from 'react-router';

import { Task } from '../../Data/types';
import { setRouterData } from '../../Store/Action/router-data';

export type DndTaskState = {};

export interface DeleteTask {
    (taskId: string): void
}

export type DndTaskStateProps = {
    index: number,
    task: Task,
    onDeleteTaskClick: DeleteTask
}

// export type DndTaskDispatchProps = {
//     setRouterData: typeof setRouterData
// }

export type DndTaskProps = DndTaskStateProps & RouteComponentProps;