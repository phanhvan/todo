import React, { Component } from "react";
import { data } from "../firebase";
import TodoItem from "./TodoItem";

class TodoList extends Component {
    state = {
        dataCurrent: [],
        // ≡ Set "dataCurrent" are empty Array
    };
    componentDidMount() {
        data.on("value", (items) => {
            var arrayDataFromFirebase = [];
            items.forEach((item) => {
                var idFromFirebase = item.key;
                var titleFromFirebase = item.val().cardTitle;
                var contentFromFirebase = item.val().cardContent;

                arrayDataFromFirebase.push({
                    idReceived: idFromFirebase,
                    titleReceived: titleFromFirebase,
                    contentReceived: contentFromFirebase,
                });
                // ≡ Push DataFromFirebase to "arrayDataFromFirebase empty"
            });
            // ≡ Because DataFromFirebase are Object, so use forEach
            this.setState({
                dataCurrent: arrayDataFromFirebase,
            });
        });
        // ≡ Get DataFromFirebase by "on" function
    }
    displayDataFromState = () => {
        const data = this.state.dataCurrent;
        if (data !== null) {
            return data.map((item, i) => (
                <TodoItem
                    key={i}
                    index={i}
                    title={item.titleReceived}
                    content={item.contentReceived}
                />
            ));
        }
    };
    render() {
        return <div className="row">{this.displayDataFromState()}</div>;
    }
}

export default TodoList;
