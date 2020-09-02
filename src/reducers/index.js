import { combineReducers } from "redux";
import * as actionTypes from "../actions/types";
import { data } from "../firebase";

const dataState = {
    formStatus: false,
};

const reducerData = (state = dataState, action) => {
    switch (action.type) {
        case actionTypes.ADD_DATA_TODOFROM_STORE:
            data.push(action.add_data_todofrom_store);
            // ≡ Push data Store to firebase

            // console.log( "add_data_todofrom_store Push firebase" + JSON.stringify(action.add_data_todofrom_store));
            // ≡ Add parameter "add_data_todofrom_store"
            return state;

        case actionTypes.FORM_STATUS:
            console.log(dataState, 'dataState in Store');
            return { ...state, formStatus: !state.formStatus };

        default:
            return state;
    }
};

const allReducers = combineReducers({
    dataState: reducerData,
});

export default allReducers;
// return [state.filter((value, i) => i !== action.index)];
