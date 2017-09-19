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
            const iconDimensions = tab.dimensions || iconStyle;

            return(
                <div
                    key={'tabBar'+i}
                    onClick={this.handlePress.bind(this, tab, i)} 
                    style={(tab.label === this.state.activeTab)?tabActiveStyle:tabInactiveStyle}>
                    <img src={tab.icon} alt="" style={iconDimensions} />
                </div>
            );
        });

        return (
            <div style={containerStyle}>
                {tabs}
            </div>
        );
    }
    componentDidMount() {
        this.props.onTabChange(this.props.defaultTab, null);
    }
}

const styles = {
    containerStyle: {
        height: '50px',
        display: 'flex',
        flexDirection: 'row',
        borderTop: '1px solid black'
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
        background: '#777777',
        height: '100%',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconStyle: {
        width: '30px',
        height: '30px'
    }
}

export default withRouter(TabBar);