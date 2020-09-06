import React, { Component } from "react";
import { connect } from "react-redux";

class TodoItem extends Component {
    actionBtn = () => {
        const { item } = this.props;
        this.props.formStatus();
        // ≡ First Action change status form
        this.props.pushItemReceivedToStore(item);
        // ≡ Second Action push data from item to Store
    };
    deleteBtn = () => {
        const { item } = this.props;
        this.props.deleteItem(item.id);
        this.props.alertStatusHandlerOn('Remove success');
    };
    render() {
        return (
            <div className="col-3 mt-4">
                <div
                    id="accordianId"
                    role="tablist"
                    aria-multiselectable="true"
                >
                    <div className="card card-customize">
                        <div
                            className="card-header"
                            role="tab"
                            id="section1HeaderId"
                        >
                            <h6 className="mb-0 h6 d-flex justify-content-between align-items-center">
                                <a
                                    data-toggle="collapse"
                                    data-parent="#accordianId"
                                    href={"#collapseItem" + this.props.id}
                                    aria-expanded="true"
                                    aria-controls="section1ContentId"
                                >
                                    {this.props.title}
                                </a>
                                <div className="btn-group-sm">
                                    <button
                                        onClick={() => this.actionBtn()}
                                        className="btn"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => this.deleteBtn()}
                                        className="btn"
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </h6>
                        </div>
                        <div
                            id={"collapseItem" + this.props.id}
                            className="collapse in"
                            role="tabpanel"
                            aria-labelledby="section1HeaderId"
                        >
                            {/* ≡ Fix collapse for id item */}
                            <div className="card-body small">
                                {this.props.content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        status: state.dataStore.formStatus,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        formStatus: () => {
            dispatch({
                type: "FORM_STATUS",
            });
        },
        pushItemReceivedToStore: (push_item_received_to_store) => {
            dispatch({
                type: "PUSH_ITEM_RECEIVED_TO_STORE",
                push_item_received_to_store,
            });
        },
        deleteItem: (delete_item) => {
            dispatch({
                type: "DELETE_ITEM",
                delete_item,
            });
        },
        alertStatusHandlerOn: (alertContent) => {
            dispatch({
                type: "ALERT_STATUS_HANDLER_ON",
                alertContent,
            });
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
