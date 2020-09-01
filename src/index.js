import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";

const store = createStore(allReducers);
store.subscribe(() => {
    // console.log('subscribe', JSON.stringify(store.getState()));
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
