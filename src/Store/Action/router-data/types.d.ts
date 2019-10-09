import { RouterDataAction } from "../../action-types/router-data"
import { RouterDataState } from "../../Reducer/router-data/types"

export type SetRouterData = {
    type: RouterDataAction.setRouterData,
    payload: RouterDataState
}
export type RouterDataActions = SetRouterData