import React, { Component } from "react";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
// import { data } from "./firebase";

class App extends Component {
    render() {
        return (
            <div className="App-header">
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
export default App;

// data.once('value').then(function(snapshot) {
//     console.log(snapshot.val());
// })
// Check data from firebase
