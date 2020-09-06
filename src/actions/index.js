import * as actionTypes from "./types";

export const sendItemToStore = () => {
    return {
        type: actionTypes.SEND_ITEM_TO_STORE,
    };
};


export const pushItemReceivedToStore = () => {
    return {
        type: actionTypes.PUSH_ITEM_RECEIVED_TO_STORE,
    };
};

export const updateItemFromStoreToFirebase = () => {
    return {
        type: actionTypes.UPDATE_ITEM_FROM_STORE_TO_FIREBASE,
    };
};

export const deleteItem = () => {
    return {
        type: actionTypes.DELETE_ITEM,
    };
};

export const formStatus = () => {
    return {
        type: actionTypes.FORM_STATUS,
    };
};

export const handleIsAdd = () => {
    return {
        type: actionTypes.HANDLE_IS_ADD,
    };
};

export const alertStatusHandlerOn = () => {
    return {
        type: actionTypes.ALERT_STATUS_HANDLER_ON,
    };
};
export const alertStatusHandlerOff = () => {
    return {
        type: actionTypes.ALERT_STATUS_HANDLER_OFF,
    };
};
