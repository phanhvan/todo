import React, { Component } from "react";
import { connect } from "react-redux";

class TodoForm extends Component {
    state = {
        cardTitle: "",
        cardContent: "",
    };

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (title, content) => {
        var item = {};
        item.cardTitle = title;
        item.cardContent = content;
        // console.log(item);
        this.props.addDataToStore(); // Use Reducer in Store and Dispatch ADD_DATA to Store
    }

    render() {
        const cardTitle = this.state.cardTitle;
        const cardContent = this.state.cardContent;
        return (
            <div className="col-3">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-8">
                        <form>
                            <h5 className="h5">Create Todo</h5>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="cardTitle"
                                    id="cardTitle"
                                    className="form-control"
                                    placeholder="Enter list title..."
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group form-group-customize">
                                <textarea
                                    type="text"
                                    name="cardContent"
                                    id="cardContent"
                                    className="form-control"
                                    placeholder="Enter a title for this card…"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <button onClick={() => this.handleSubmit(cardTitle, cardContent)} className="btn btn-primary" type="reset">
                                Add Card
                            </button>
                            {/* Use type "reset" clear value when submit, Arrow function to get the final value when inputted */}
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataState: state.testConnect,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addDataToStore: (add_dataToStore) => {
            dispatch({ type: "ADD_DATA" });
        },
        // Use parameter "add_dataToStore" from Store
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);