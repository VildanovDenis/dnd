import { RouterDataState } from "./types";
import { RouterDataAction } from "../../action-types/router-data";
import { RouterDataActions } from '../../Action/router-data/types';

const initialData: RouterDataState = {
    isModalShow: false,
    route: '',
    backRoute: '',
    location: null
};

export const routerDataReducer = (
    state: RouterDataState = initialData,
    action: RouterDataActions
) => {
    switch (action.type) {
        case RouterDataAction.setRouterData: {
            return {...state, ...action.payload}
        }    
        default: {
            return state
        }
    }
}