import React, {Component} from 'react';
import appIcon from '../res/images/dragon_small.svg';
import settingsIcon from '../res/images/settings.svg';

class HeaderBar extends Component {
    render() {
        const {
            containerStyle,
            appInfoStyle,
            iconBigStyle,
            iconSmallStyle
        } = styles;

        return (
            <div style={containerStyle}>
                <span style={appInfoStyle}>
                    <img src={appIcon} alt="" style={iconBigStyle} />
                    <span>Learn Mandarin</span>
                </span>
                <img src={settingsIcon} alt="" style={iconSmallStyle} />
            </div>
        )
    }
}

const styles = {
    containerStyle: {
        width: '100%',
        height: '50px',
        background: '#C00000',
        boxShadow: '0px 5px 5px -3px black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 2,
        position: 'relative'
    },
    appInfoStyle: {
        verticalAlign: 'middle',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        color: '#FFEEA3'
    },
    iconBigStyle: {
        width: '42px',
        height: '42px',
        padding: '4px'
    },
    iconSmallStyle: {
        width: '34px',
        height: '34px',
        margin: '13px'
    }
}

export default HeaderBar;