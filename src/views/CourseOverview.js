import React, {Component} from 'react';

class CourseOverview extends Component {
    render() {
        const {containerStyle} = styles;

        return (
            <div style={containerStyle}>
                <span>Course Overview</span>
            </div>
        );
    }
}

const styles = {
    containerStyle: {
        width: '100%',
        height: '100%',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default CourseOverview;