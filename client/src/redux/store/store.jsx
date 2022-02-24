import { createStore, applyMiddleware } from "redux";
import rootReducer from "../Reducers.jsx";
import { composeWithDevTools } from 'redux-devtools-extension'

const configureStore = (preloadedState) => {
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware())
    );
    return store;
};

export default configureStore();