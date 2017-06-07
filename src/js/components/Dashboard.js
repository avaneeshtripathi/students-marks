import React from 'react';
import underscore from 'underscore';
import StudentList from './StudentList';
import StudentDetails from './StudentDetails';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentInfo: null
        };
        this.selectStudent = this.selectStudent.bind(this);
    }

    componentWillReceiveProps (newProps) {
        if (!underscore.isEqual(this.props.studentsList, newProps.studentsList)) {
            this.setState({
                studentInfo: null
            })
        }
    }

    selectStudent (studentInfo) {
        this.setState({
            studentInfo: studentInfo
        });
    }

    render() {
        return (
            <div className="col-md-9">
                <div className="studentDetailsWrapper">
                    <div className="row">
                        {this.props.studentsList && this.props.studentsList.length
                            ? <StudentList studentsList={this.props.studentsList} selectStudent={this.selectStudent} />
                            : <div className="col-md-12">
                                  <p className="descriptionBlock">
                                      {this.props.description}
                                  </p>
                              </div>
                        }
                        {this.state.studentInfo
                            ? <StudentDetails studentInfo={this.state.studentInfo} />
                            : null
                        }
                    </div>
                </div>
            </div>
        );
    }
}
