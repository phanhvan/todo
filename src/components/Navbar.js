import React, { Component } from "react";
import { connect } from "react-redux";

class Navbar extends Component {
    diplayForm = (e) => {
        e.preventDefault();
        this.props.formStatus();
        this.props.handleIsAdd();
    };
    render() {
        return (
            <nav className="navbar navbar-expand-sm justify-content-between navbar-dark">
                <ul className="navbar-nav mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            Todo list
                        </a>
                    </li>
                </ul>
                <li className="navbar-brand">Todo</li>
                <ul className="navbar-nav mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            onClick={(e) => this.diplayForm(e)}
                            href="/"
                        >
                            Create Todo
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}
const mapStateToProps = (state) => {
    return {
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        formStatus: () => {
            dispatch({
                type: "FORM_STATUS",
            });
        },
        handleIsAdd: () => {
            dispatch({
                type: "HANDLE_IS_ADD",
            });
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
