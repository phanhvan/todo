import React, { Component } from "react";
import { connect } from "react-redux";
// import { data } from "../firebase";

class TodoForm extends Component {
    state = {
        title: "",
        content: "",
        id: "",
    };
    componentDidMount() {
        const { getItem } = this.props;
        if (getItem) {
            this.setState({
                title: getItem.title,
                content: getItem.content,
                id: getItem.id,
            });
        }
    }
    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    };
    handleSubmit = (title, content) => {
        const state = this.state;
        if (state.id) {
            var updateItem = {};
            updateItem.id = state.id;
            updateItem.title = state.title;
            updateItem.content = state.content;
            this.props.updateItemFromStoreToFirebase(updateItem);
            this.props.formStatus();
            this.props.alertStatusHandlerOn('Update success');
        } else {
            var item = {};
            item.title = title;
            item.content = content;
            this.props.sendItemToStore(item);
            // ≡ Dispatch item to store
            this.props.formStatus();
            this.props.alertStatusHandlerOn('Create success');

            // data.push(item);
            // ≡ Live push item to firebase
        }
    };
    exportHeading = () => {
        const { addStatus } = this.props;
        if (addStatus) {
            return <h5 className="h5">Create Todo</h5>;
        } else {
            return <h5 className="h5">Update Todo</h5>;
        }
    };
    render() {
        const { title, content } = this.state;
        const { getItem } = this.props;
        return (
            <div className="col-3">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-8">
                        <form>
                            {this.exportHeading()}
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    className="form-control"
                                    placeholder="Enter list title..."
                                    onChange={this.handleChange}
                                    defaultValue={getItem.title}
                                />
                            </div>
                            <div className="form-group form-group-customize">
                                <textarea
                                    type="text"
                                    name="content"
                                    id="content"
                                    className="form-control"
                                    placeholder="Enter a title for this card…"
                                    onChange={this.handleChange}
                                    defaultValue={getItem.content}
                                />
                            </div>
                            <button
                                onClick={() =>
                                    this.handleSubmit(title, content)
                                }
                                className="btn btn-primary"
                                type="reset"
                            >
                                Add Card
                            </button>
                            {/* ≡ Use type "reset" clear value when submit, Arrow function to get the final value when inputted */}
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        getItem: state.dataStore.itemStore,
        addStatus: state.dataStore.isAdd,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        sendItemToStore: (send_item_to_store) => {
            dispatch({
                type: "SEND_ITEM_TO_STORE",
                send_item_to_store,
            });
        },
        updateItemFromStoreToFirebase: (updateItem) => {
            dispatch({
                type: "UPDATE_ITEM_FROM_STORE_TO_FIREBASE",
                updateItem,
            });
        },
        formStatus: () => {
            dispatch({
                type: "FORM_STATUS",
            });
        },
        alertStatusHandlerOn: (alertContent) => {
            dispatch({
                type: "ALERT_STATUS_HANDLER_ON",
                alertContent,
            });
        },
        // ≡ Use parameter "send_item_to_store" from Store
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
