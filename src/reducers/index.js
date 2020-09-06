import { combineReducers } from "redux";
import * as actionTypes from "../actions/types";
import { data } from "../firebase";

const dataStore = {
    itemStore: {},
    formStatus: false,
    isAdd: false,
    alertStatus: false,
    alertContent: "",
};
const reducerData = (state = dataStore, action) => {
    switch (action.type) {
        case actionTypes.SEND_ITEM_TO_STORE:
            data.push(action.send_item_to_store);
            // ≡ Push item from store to firebase
            // ≡≡ Add parameter "send_item_to_store"
            return state;

        case actionTypes.FORM_STATUS:
            return { ...state, formStatus: !state.formStatus };

        case actionTypes.PUSH_ITEM_RECEIVED_TO_STORE:
            return { ...state, itemStore: action.push_item_received_to_store };

        case actionTypes.UPDATE_ITEM_FROM_STORE_TO_FIREBASE:
            data.child(action.updateItem.id).update({
                title: action.updateItem.title,
                content: action.updateItem.content,
            });
            return { ...state, itemStore: {} };

        case actionTypes.DELETE_ITEM:
            data.child(action.delete_item).remove();
            return state;

        case actionTypes.HANDLE_IS_ADD:
            return { ...state, isAdd: !state.isAdd };

        case actionTypes.ALERT_STATUS_HANDLER_ON:
            return {
                ...state,
                alertStatus: true,
                alertContent: action.alertContent,
            };

        case actionTypes.ALERT_STATUS_HANDLER_OFF:
            return {
                ...state,
                alertStatus: false,
                alertContent: action.alertContent,
            };

        default:
            return state;
    }
};

const allReducers = combineReducers({
    dataStore: reducerData,
});

export default allReducers;
// return [state.filter((value, i) => i !== action.index)];
