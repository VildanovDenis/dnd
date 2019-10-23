import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ScrumDataState } from './Reducer/scrum-data/types';
import { RouterDataState } from './Reducer/router-data/types';
import { Selector } from 'reselect';

export type ReduxDispatch = Dispatch<AnyAction>;

export type State = {
    routerDataReducer: RouterDataState;
    scrumDataReducer: ScrumDataState;
};

export type StateAction<T = void> = ThunkAction<
    T,
    State,
    void,
    AnyAction
>;

export type StateSelector<SelectorResult> = Selector<State, SelectorResult>;