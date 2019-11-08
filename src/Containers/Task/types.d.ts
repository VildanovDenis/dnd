import { ScrumDataState } from "../../Store/Reducer/scrum-data/types";
import { RouteComponentProps } from "react-router";
import { getScrumData } from "../../Store/Action/scrum-data";

export type TaskDispatchProps = {
    getScrumData: typeof getScrumData
}

export type TaskStateProps = {
    scrumData: ScrumDataState
}

export type TaskState = {
    taskId: string
}

export type RouteParams = {
    id: string
}

export type TaskProps = TaskStateProps & TaskDispatchProps & RouteComponentProps<RouteParams>