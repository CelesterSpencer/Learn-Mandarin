import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import splashIcon from '../res/images/dragon_large.svg';

class SplashScreen extends Component {
    render() {
        const {containerStyle, iconStyle} = styles;

        return (
            <div style={containerStyle}>
                <img src={splashIcon} alt="" style={iconStyle} />
            </div>
        );
    }
    componentDidMount() {
        let history = this.props.history;
        const changeView = function() { history.replace('main'); };
        setTimeout(changeView, 1000);
    }
}

const styles = {
    containerStyle: {
        background: '#C00000',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconStyle: {
        width: '300px',
        height: '300px'
    }
}

export default withRouter(connect(null, { })(SplashScreen));