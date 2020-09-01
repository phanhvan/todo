import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
// import News from "./components/News";
import { data } from "./firebase";

class App extends Component {
    addDataToFirebase = (item) => {
        data.push(item)
    };

    render() {
        {/* 
            data.once('value').then(function(snapshot) {
                console.log(snapshot.val());
            })
            // Check data from firebase
        */}
        return (
            <div className="App-header">
                {/* App: {this.props.data} */}
                <Navbar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-9 scrollbar">
                            <div className="row">
                                <TodoList />
                            </div>
                        </div>
                        <TodoForm
                            getData={(item) => this.addDataToFirebase(item)}
                        />
                    </div>
                </div>
                {/* <News /> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.editItem,
    };
};

export default connect(mapStateToProps)(App);
