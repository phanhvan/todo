import { combineReducers } from "redux";
import * as actionTypes from "../actions/types";

const dataState = {
    testConnect: "testOfStore",
};
const reducerData = (state = dataState, action) => {
    switch (action.type) {
        case actionTypes.ADD_DATA:
            console.log("Success ADD_DATA" + action.add_dataToStore);
            // Add parameter "add_dataToStore" 
            return state;

        default:
            return state;
    }
};

const editStatus = true;
const reducerStatus = (state = editStatus, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_STATUS:
            return !state;

        default:
            return state;
    }
};

const editItem = ["screen", "mouse"];
const reducerItem = (state = editItem, action) => {
    switch (action.type) {
        case actionTypes.ADD_NEW:
            return [...state, action.add];

        case actionTypes.DELETE:
            return [state.filter((value, i) => i !== action.index)];

        default:
            return state;
    }
};

const allReducers = combineReducers({
    editStatus: reducerStatus,
    editItem: reducerItem,
    dataState: reducerData,
});

export default allReducers;
