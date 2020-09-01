import * as actionTypes from "./types";

export const add_data = () => {
    return {
        type: actionTypes.ADD_DATA,
    };
};

export const changeStatus = () => {
    return {
        type: actionTypes.CHANGE_STATUS,
    };
};

export const add = () => {
    return {
        type: actionTypes.ADD_NEW,
        add: "laptop",
    };
};

export const deleted = () => {
    return {
        type: actionTypes.DELETE,
        index: 0,
    };
};
