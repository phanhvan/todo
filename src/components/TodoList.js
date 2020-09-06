import React, { Component } from "react";
import { data } from "../firebase";
import TodoItem from "./TodoItem";

class TodoList extends Component {
    state = {
        item: [],
        // ≡ Set "item" are empty Array
    };
    componentDidMount() {
        data.on("value", (items) => {
            var takeArrayItemFromFirebase = [];
            items.forEach((item) => {
                var idFromFirebase = item.key;
                var titleFromFirebase = item.val().title;
                var contentFromFirebase = item.val().content;

                takeArrayItemFromFirebase.push({
                    id: idFromFirebase,
                    title: titleFromFirebase,
                    content: contentFromFirebase,
                });
            });
            // ≡ Because takeArrayItemFromFirebase are object, so use forEach
            this.setState({
                item: takeArrayItemFromFirebase,
                // ≡ Push takeArrayItemFromFirebase to state.item
            });
        });
        // ≡ Take ArrayItemFromFirebase by "on" function
    }
    displayItem = () => {
        const item = this.state.item;
        if (item) {
            return item.map((value, i) => (
                <TodoItem
                    key={i}
                    id={i}
                    item={value}
                    title={value.title}
                    content={value.content}
                />
            ));
        }
    };
    render() {
        return <div className="row">{this.displayItem()}</div>;
    }
}
export default TodoList;
