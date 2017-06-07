import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import schoolData from '../../static/studentData.json';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            studentsList: []
        };
        this.selectClass = this.selectClass.bind(this);
    }

    selectClass (classInfo) {
        this.setState({
            studentsList: classInfo.students
        })
    }

    render() {
        return (
            <div>
                <Header schoolName={schoolData.name} />
                <div className="container">
                    <div className="row">
                        <Sidebar classList={schoolData.classList} selectClass={this.selectClass} />
                        <Dashboard description={schoolData.description} studentsList={this.state.studentsList} />
                    </div>
                </div>
            </div>
        );
    }
}
