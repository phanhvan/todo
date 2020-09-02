import React, { Component } from "react";

class TodoItem extends Component {
    render() {
        return (
            <div className="col-3 mt-4">
                <div
                    id="accordianId"
                    role="tablist"
                    aria-multiselectable="true"
                >
                    <div className="card card-customize">
                        <div
                            className="card-header"
                            role="tab"
                            id="section1HeaderId"
                        >
                            <h6 className="mb-0 h6">
                                <a
                                    data-toggle="collapse"
                                    data-parent="#accordianId"
                                    href="#section1ContentId"
                                    aria-expanded="true"
                                    aria-controls="section1ContentId"
                                >
                                    {this.props.title}
                                </a>
                            </h6>
                        </div>
                        <div
                            id="section1ContentId"
                            className="collapse in"
                            role="tabpanel"
                            aria-labelledby="section1HeaderId"
                        >
                            <div className="card-body small">
                                {this.props.content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoItem;
