import React, {Component} from 'react';
import appIcon from '../res/images/dragon_small.svg';

class HeaderBar extends Component {
    render() {
        const {
            containerStyle,
            widgetContainerStyle,
            headerBarItemStyle,
            appInfoStyle,
            iconBigStyle
        } = styles;

        let headerBarItems = [];
        const children = this.props.children;
        if(children && children.map) {
            headerBarItems = children.map((item, i) =>
                <div key={'headerBarItem' + i} style={headerBarItemStyle}>
                    {item}
                </div>
            );
        } else if (children) {
            headerBarItems = [
                <div key={'headerBarItem0'} style={headerBarItemStyle}>
                    {children}
                </div>
            ];
        }

        return (
            <div style={containerStyle}>
                <span style={appInfoStyle}>
                    <img src={appIcon} alt="" style={iconBigStyle} />
                    <span>Learn Mandarin</span>
                </span>
                <div style={widgetContainerStyle}>
                    {headerBarItems}
                </div>
            </div>
        )
    }
}

const styles = {
    containerStyle: {
        width: '100%',
        height: '50px',
        background: '#C00000',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid black'
    },
    widgetContainerStyle: {
        width: 'auto',
        height: '50px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerBarItemStyle: {
        width: 'auto',
        height: '50px',
        display: 'flex'
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
    }
}

export default HeaderBar;