import React from 'react';
import underscore from 'underscore';
import ReactHighcharts from 'react-highcharts';
import { getChartConfig } from '../utils/chartConfig';
import { dateFormatter } from '../utils/dashboardUtils';

export default class StudentDetails extends React.Component {
    render() {
        let subjectsList = underscore.keys(this.props.studentInfo.marks),
            marksList = underscore.values(this.props.studentInfo.marks);
        return (
            <div className="col-md-6">
                <h2 className="detailsHeading text-center">{this.props.studentInfo.name} Details</h2>
                <ul className="studentDetails">
                    <li><span>Date of Birth: </span>{dateFormatter(this.props.studentInfo.dateOfBirth)}</li>
                    <li><span>Gender: </span>{this.props.studentInfo.gender}</li>
                    <li><span>Parents/Guardian: </span>{this.props.studentInfo.guardian}</li>
                </ul>
                <div className="marksDetails">
                    <ReactHighcharts config={getChartConfig(subjectsList, marksList)} />
                </div>
            </div>
        );
    }
}
