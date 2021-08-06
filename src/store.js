import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunkMiddleware from 'redux-thunk'

const logMiddleware = ({ getState }) => (next) => (action) => {
    console.log(action.type, getState());
    return next(action);
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, logMiddleware));

const delayedActionCreator = (timeout) => (dispatch) => {
    setTimeout(() => {
        dispatch({
            type: 'DELAY_ACTION'
        })
    }, timeout);
}


store.dispatch(delayedActionCreator(2000));

export default store;