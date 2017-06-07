import React from "react";
import underscore from "underscore";

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.selectClass = this.selectClass.bind(this);
    }

    selectClass (classInfo) {
        this.props.selectClass(classInfo);
    }

    render() {
        return (
            <div className="col-md-3">
                <ul className="sidebarListing">
                    {underscore.map(this.props.classList, (classInfo, key) => {
                        return (
                            <li className="cursorPointer" key={key} onClick={this.selectClass.bind(this, classInfo)}>{classInfo.class}</li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
