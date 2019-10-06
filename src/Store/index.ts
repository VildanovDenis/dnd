import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

const allReducers = combineReducers({

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
    compose(
        applyMiddleware(thunk),
    )
)