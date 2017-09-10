import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class TabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: props.defaultTab
        }
    }
    handlePress(tab, i) {
        this.setState({activeTab: tab.label});
        this.props.onTabChange(tab.label, i);
    }
    render() {
        const {containerStyle, tabActiveStyle, tabInactiveStyle, iconStyle} = styles;

        const tabs = this.props.tabs.map((tab,i) => {
            return(
                <div
                    onClick={this.handlePress.bind(this, tab, i)} 
                    style={(tab.label === this.state.activeTab)?tabActiveStyle:tabInactiveStyle}>
                    <img src={tab.icon} alt="" style={iconStyle} />
                </div>
            );
        });

        return (
            <div style={containerStyle}>
                {tabs}
            </div>
        );
    }
}

const styles = {
    containerStyle: {
        height: '50px',
        display: 'flex',
        flexDirection: 'row',
    },
    tabActiveStyle: {
        background: '#C00000',
        height: '100%',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabInactiveStyle: {
        background: '#fff',
        height: '100%',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconStyle: {
        width: '30px',
        height: '30px',
        color: 'blue'
    }
}

export default withRouter(TabBar);