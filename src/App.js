import React, { Component } from "react";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { connect } from "react-redux";
import AlertInfo from './components/AlertInfo'
// import { data } from "./firebase";

class App extends Component {
    render() {
        const { status } = this.props;
        return (
            <div className="App-header">
                <Navbar />
                <AlertInfo />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-9 scrollbar">
                            <TodoList />
                        </div>
                        {status && <TodoForm />}
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
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

// data.once('value').then(function(snapshot) {
//     console.log(snapshot.val());
// })
// Check data from firebase
