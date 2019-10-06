import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { scrumDataReducer } from './Reducer/scrumData';

const allReducers = combineReducers({
    scrumDataReducer
});

const someActionsListener = (state: any, action: any) => {
    // if () {}
    // some logic here
    // for example logout:
    // if (action.type === 'LOGOUT) {
        // const stateKiller = undefined;
        // return allReducers(stateKiller, action);
    // }

    return allReducers(state, action);
}

export const store = createStore(
    someActionsListener,
    composeWithDevTools(applyMiddleware(thunk))
)

// some selector here
// export const getState = (reduxState) => reduxState;