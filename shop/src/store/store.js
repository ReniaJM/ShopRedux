import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "../reducer/reducer";

const logger = store => next => action => {
    console.log("dispatching", action);
    let result = next(action);
    console.log("next state", store.getState());
    return result;
};

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(logger,thunk))
);

export default store;
