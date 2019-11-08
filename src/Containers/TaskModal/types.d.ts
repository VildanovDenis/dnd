import { DndContainerState } from '../DndContainer/types';
import { RouteComponentProps } from 'react-router';
import { ScrumDataState } from '../../Store/Reducer/scrum-data/types';

export type TaskModalState = {
    taskId: string
}

export type TaskModalDispatchProps = {
    scrumData: typeof ScrumDataState
}

export type RouteParams = {
    id: string
}

export type TaskModalProps = TaskModalDispatchProps & RouteComponentProps<RouteParams>;