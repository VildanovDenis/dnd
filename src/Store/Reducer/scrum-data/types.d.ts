import { Dictionary } from "../../../types";
import { Task, Columns } from "../../../Data/types";
import { DndContainerState } from "../../../Containers/DndContainer/types";

export type ScrumDataState = {
    dataStatus: string;
    data: DndContainerState;
}