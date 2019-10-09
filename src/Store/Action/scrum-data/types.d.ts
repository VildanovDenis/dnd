import { ScrumDataAction } from "../action-types/scrum-data";
import { InitialData } from "../../Data/types";

export type SetScrumData = {
    type: ScrumDataAction.setScrumData;
    payload: InitialData;
};

export type SetScrumDataStatus = {
    type: ScrumDataAction.setScrumDataStatus,
    payload: string
}

export type ScrumDataActions = SetScrumData | setScrumDataStatus; // | SetScrumData1 | SetScrumData2 | SetScrumData3