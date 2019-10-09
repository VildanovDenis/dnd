import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ScrumDataState } from './Reducer/scrum-data/types';

export type ReduxDispatch = Dispatch<AnyAction>;

export type State = {
    scrumDataReducer: ScrumDataState;
};

export type StateAction<T = void> = ThunkAction<
    T,
    State,
    void,
    AnyAction
>;