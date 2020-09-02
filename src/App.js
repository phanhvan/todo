import React, { Component } from "react";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
// import { data } from "./firebase";
import { connect } from "react-redux";

class App extends Component {
    render() {
        // const formStatus = this.props.formStatus;
        return (
            <div className="App-header">
                <Navbar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-9 scrollbar">
                            <TodoList />
                        </div>
                        <TodoForm />
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
export default connect(mapStateToProps, mapDispatchToProps)(App);

// data.once('value').then(function(snapshot) {
//     console.log(snapshot.val());
// })
// Check data from firebase
