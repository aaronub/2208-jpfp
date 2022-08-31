import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import campusReducer from "../redux/CampusReducer";
import studentReducer from "../redux/StudentReducer";
import loggerMiddleWare from 'redux-logger';

const rootReducer = combineReducers({
    campuses: campusReducer,
    students: studentReducer,
})

function configureStore() {
    return createStore(rootReducer, applyMiddleware(thunk, loggerMiddleWare));
}

export default configureStore;