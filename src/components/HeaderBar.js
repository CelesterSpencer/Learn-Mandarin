import React, {Component} from 'react';
import Radium from 'radium';
import appIcon from '../res/images/dragon_small.svg';
import settingsIcon from '../res/images/settings.svg';

@Radium
class MenuList extends Component {
    handleSelect(item, i) {
        if(this.props.onSelect) this.props.onSelect(item, i);
    }
    render() {
        const {menuContainerStyle, menuItemStyle} = styles;

        const menuListItems = this.props.items.map((item, i) => 
            <div 
                key={'menuItem'+i}
                onClick={this.handleSelect.bind(this,item,i)} 
                style={menuItemStyle}
            >
                {item}
            </div>
        );

        return (
            <div style={menuContainerStyle}>
                {menuListItems}
            </div>
        );
    }
}

@Radium
class HeaderBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    onSettingsClick() {
        this.setState({menuOpen: !this.state.menuOpen});
    }
    onMenuListItemClick(item, i) {
        this.setState({menuOpen: !this.state.menuOpen});
        if(this.props.onMenuItemClick) this.props.onMenuItemClick(item, i);
    }

    renderSettings(shouldRender) {
        const {
            settingsIconStyle,
            menuWrapperStyle
        } = styles;

        if(shouldRender) {
            return (
                <div style={menuWrapperStyle}>
                    <img 
                        src={settingsIcon} 
                        alt="" 
                        onClick={this.onSettingsClick.bind(this)} 
                        style={settingsIconStyle} 
                    />
                    {this.renderMenu(this.state.menuOpen)}
                </div>
            );
        }
    }
    renderMenu(shouldRender) {
        if(shouldRender) {
            return (
                <MenuList 
                    items={this.props.menuItems} 
                    onSelect={this.onMenuListItemClick.bind(this)}
                />
            );
        }
    }
    render() {
        const {
            containerStyle,
            appInfoStyle,
            iconBigStyle
        } = styles;

        const hasMenu = this.props.menuItems !== undefined;

        return (
            <div style={containerStyle}>
                <span style={appInfoStyle}>
                    <img src={appIcon} alt="" style={iconBigStyle} />
                    <span>Learn Mandarin</span>
                </span>
                {this.renderSettings(hasMenu)}
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
    settingsIconStyle: {
        width: '42px',
        height: '42px',
        padding: '4px',
        ':hover': {
            background: 'rgb(126, 4, 4)'
        }
    },
    menuWrapperStyle: {
        position: 'relative',
        display: 'flex'
    },
    menuContainerStyle: {
        display: 'inline-box',
        position: 'absolute',
        width: 'auto',
        background: 'black',
        color: 'white',
        right: '5px',
        top: '50px',
        zIndex: 5
    },
    menuItemStyle: {
        padding: '5px',
        whiteSpace: 'nowrap',
        ':hover': {
            background: '#C00000'
        }
    }
}

export default HeaderBar;