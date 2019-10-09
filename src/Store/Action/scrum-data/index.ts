import { createSomeData } from "../../../Data/dndData";
import { ScrumDataAction } from '../../action-types/scrum-data';
import { SetScrumData, SetScrumDataStatus } from './types';
import { ReduxDispatch, StateAction } from "../../types";
import { InitialData } from "../../../Data/types";
import { dataStatuses } from "../../../Data/dataStatuses";

export const setScrumData = (data: InitialData): SetScrumData => ({
    type: ScrumDataAction.setScrumData,
    payload: data
});

export const setScrumDataStatus = (status: string): SetScrumDataStatus => ({
    type: ScrumDataAction.setScrumDataStatus,
    payload: status
});

export const getScrumData = (dataStatus: string): StateAction<Promise<123>> =>
    async (dispatch: ReduxDispatch) => {

        if (dataStatus === dataStatuses.initial) {
            dispatch(setScrumDataStatus(dataStatuses.fetching))
        } else {
            dispatch(setScrumDataStatus(dataStatuses.updating))
        }

        try {
            const pseudoFetchData: InitialData = await new Promise(function(resolve) {
                const data = createSomeData(21, 3);
                resolve(data);
            });

            dispatch(setScrumData(pseudoFetchData))
            setTimeout(() => dispatch(setScrumDataStatus(dataStatuses.success)), 500);

            // for example:
            // if (res.status === 200 && res.ok) {
            // dispatch success
            // dispatch data
            //} else {
            // dispatch error
            // throw new Error(`Res status: ${res.status}, res data: ${data})   
            //}
        } catch(err) {
            dispatch(setScrumDataStatus(dataStatuses.error))
            console.error(err)
        }

        return 123;
    }