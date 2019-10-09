import { ScrumDataState } from './types';
import { ScrumDataActions } from '../../Action/types';
import { ScrumDataAction } from '../../action-types/scrum-data';
import { dataStatuses } from '../../../Data/dataStatuses';

const initialState: ScrumDataState = {
    dataStatus: dataStatuses.initial,
    data: {
        tasks: {},
        columns: {},
        columnOrder: []
    }
};

export const scrumDataReducer = (
    state: ScrumDataState = initialState,
    action: ScrumDataActions
) => {
    switch (action.type) {
        case ScrumDataAction.setScrumData: {
            const { payload } = action;

            return { ...state, data: payload }
        }
        case ScrumDataAction.setScrumDataStatus: {
            const { payload } = action;

            return { ...state, dataStatus: payload}
        }
        default: {
            return state
        }
    }
}