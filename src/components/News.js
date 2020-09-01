import React, { Component } from "react";
import { connect } from "react-redux";

class News extends Component {
    render() {
        const statusStore = this.props.status;
        const status = JSON.stringify(statusStore);

        return (
            {/* <button
                onClick={this.props.handleState}
                className="btn btn-primary"
            >
                Click + {status}
            </button> */}
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.editStatus,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleState: () => {
            dispatch({ type: "CHANGE_STATUS" });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
