import { AddTask } from "../DndColumn/types"

export type TaskAddState = {
    taskContent: string
}

export type TaskAddProps = {
    columnId: string,
    onAddTaskClick: AddTask
}