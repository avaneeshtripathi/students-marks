import React from 'react';
import underscore from 'underscore';

export default class StudentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentsList: this.props.studentsList,
            orgStudentsList: this.props.studentsList
        };
        this.filterStudentList = this.filterStudentList.bind(this);
        this.selectStudent = this.selectStudent.bind(this);
    }

    componentWillReceiveProps (newProps) {
        if (!underscore.isEqual(this.state.orgStudentsList, newProps.studentsList)) {
            this.setState({
                studentsList: newProps.studentsList,
                orgStudentsList: newProps.studentsList
            })
            this.resetSelectedStudent();
            this.refs.studentFilterInput.value = '';
        }
    }

    filterStudentList () {
        let searchString = this.refs.studentFilterInput.value,
            filteredStudentsList = searchString
                ? underscore.filter(this.state.orgStudentsList, (student) => student.name && student.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1)
                : this.state.orgStudentsList;
        this.setState({
            studentsList: filteredStudentsList
        })
    }

    resetSelectedStudent () {
        if (document.querySelector('.active')) {
            document.querySelector('.active').classList.remove('active');
        }
    }

    selectStudent (studentInfo, key) {
        this.resetSelectedStudent();
        this.refs[`student-${key}`].classList.add('active');
        this.props.selectStudent(studentInfo);
    }

    render() {
        return (
            <div className="col-md-6">
                <div className="studentListWrapper text-center">
                    <div className="searchInputWrapper">
                        <input ref="studentFilterInput" type="text" placeholder="SEARCH" onChange={this.filterStudentList} />
                    </div>
                    <ul className="studentsList text-left">
                        {this.state.studentsList && this.state.studentsList.length
                            ? underscore.map(this.state.studentsList, (student, key) => {
                                  return (
                                      <li ref={`student-${key}`} className="cursorPointer" key={key} onClick={this.selectStudent.bind(this, student, key)}>{student.name}</li>
                                  );
                              })
                            : <li>No matching results found.</li>
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
