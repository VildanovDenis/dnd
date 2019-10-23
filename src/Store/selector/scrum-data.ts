import { createSelector } from 'reselect';

import { ScrumDataState } from '../Reducer/scrum-data/types';
import { DndContainerState } from '../../Containers/DndContainer/types';

import { StateSelector } from '../types';

export const getScrumDataReducer: StateSelector<ScrumDataState> = ({ scrumDataReducer }) =>
    scrumDataReducer;

export const getScrumData: StateSelector<DndContainerState> = createSelector(
    getScrumDataReducer,
    ({ data }) => data
);