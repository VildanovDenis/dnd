import { DndContainerState } from '../DndContainer/types';
import { RouteComponentProps } from 'react-router';

export type TaskModalState = {
    taskId: string
}

export type TaskModalDispatchProps = {
    scrumData: typeof DndContainerState
}

export type RouteParams = {
    id: string
}

export type TaskModalProps = TaskModalDispatchProps & RouteComponentProps<RouteParams>;