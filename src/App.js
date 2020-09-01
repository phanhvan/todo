import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import {data} from './firebase';

class App extends Component {
    render() {
        // data.once('value').then(function(snapshot) {
        //     console.log(snapshot.val());
        // })

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
                        <TodoForm />
                    </div>
                </div>
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
