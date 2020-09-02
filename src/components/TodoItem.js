import React, { Component } from "react";
import { connect } from "react-redux";

class TodoItem extends Component {
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
                                    href={"#collapseItem" + this.props.index}
                                    aria-expanded="true"
                                    aria-controls="section1ContentId"
                                >
                                    {this.props.title}
                                </a>
                                <div className="btn-group-sm">
                                    <button
                                        onClick={() =>
                                            this.props.handleFormStatus()
                                        }       
                                        className="btn"
                                    >
                                        Edit
                                    </button>
                                    <button className="btn">
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </h6>
                        </div>
                        <div
                            id={"collapseItem" + this.props.index}
                            className="collapse in"
                            role="tabpanel"
                            aria-labelledby="section1HeaderId"
                        >
                            {/* ≡ Fixed collapse for id item */}
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
        formStatus: state.dataState.formStatus,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleFormStatus: () => {
            dispatch({
                type: "FORM_STATUS",
            });
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
