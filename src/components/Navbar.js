import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm">
                <a className="navbar-brand" href="index.html">
                    Todo
                </a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
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
            </nav>
        );
    }
}

export default Navbar;
