import { RouterDataState } from "../../Reducer/router-data/types";
import { RouterDataAction } from '../../action-types/router-data';
import { SetRouterData } from "./types";

export const setRouterData = (data: RouterDataState): SetRouterData => ({
    type: RouterDataAction.setRouterData,
    payload: data
})