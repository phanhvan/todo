import React, { Component } from "react";
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from "react-redux";

class AlertInfo extends Component {
    dismissHandler = () => {
        this.props.alertStatusHandlerOff();
    };
    render() {
        const { alertStatus, alertContent } = this.props;
        return (
            <div>
                {alertStatus && (
                    <AlertContainer>
                        <Alert
                            onDismiss={this.dismissHandler}
                            timeout={500}
                            type="success"
                        >
                            {alertContent}
                        </Alert>
                    </AlertContainer>
                )}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        alertStatus: state.dataStore.alertStatus,
        alertContent: state.dataStore.alertContent,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        alertStatusHandlerOff: () => {
            dispatch({
                type: "ALERT_STATUS_HANDLER_OFF",
            });
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo);
