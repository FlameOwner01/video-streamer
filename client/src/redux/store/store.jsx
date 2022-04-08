import { createStore, applyMiddleware } from "redux";
import rootReducer from "../Reducers.jsx";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const configureStore = (preloadedState) => {
    const store = createStore(
        rootReducer,
        composedEnhancer
        
    );
    return store;
};

export default configureStore();