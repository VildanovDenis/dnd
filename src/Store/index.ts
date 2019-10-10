import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { scrumDataReducer } from './Reducer/scrum-data';
import { State } from './types';
import { routerDataReducer } from './Reducer/router-data';

const allReducers = combineReducers<State>({
    routerDataReducer,
    scrumDataReducer
});


// const someActionsListener = (state: State, action: any) => {
//     // if () {}
//     // some logic here
//     // for example logout:
//     // if (action.type === 'LOGOUT) {
//         // const stateKiller = undefined;
//         // return allReducers(stateKiller, action);
//     // }

//     return allReducers(state, action);
// }

export const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(thunk))
)

// some selector here
export const getState = (reduxState: State) => reduxState.scrumDataReducer;