import React from "react";

export default class Header extends React.Component {
    render() {
        return (
            <header className="text-center">
                {this.props.schoolName}
            </header>
        );
    }
}
