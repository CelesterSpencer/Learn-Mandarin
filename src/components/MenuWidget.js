import React, {Component} from 'react';
import Radium from 'radium';
import WidgetIcon from '../res/images/plus.svg';

@Radium
class MenuWidget extends Component {
    static defaultProps = {
        onSelect: () => {},
        items: []
    }

    constructor() {
        super();
        this.state = {
            menuOpen: false
        }
    }

    onWidgetClick() {
        this.setState({menuOpen: !this.state.menuOpen});
    }
    handleSelect(item, i) {
        this.setState({menuOpen: !this.state.menuOpen});
        this.props.onSelect(item, i);
    }

    renderMenu(shouldRender) {
        if(shouldRender) {
            const {
                menuContainerStyle, 
                menuItemStyle,
                tipStyle,
                polygonStyle
            } = styles;

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
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" style={tipStyle}>
                        <polygon points="0,100 100,100 50,0" style={polygonStyle}/>
                    </svg>
                    {menuListItems}
                </div>
            );
        }
    }
    render() {
        const {
            WidgetIconStyle,
            widgetIconActiveStyle,
            menuWrapperStyle
        } = styles;

        const usedWidgetIconStyle = (this.state.menuOpen)?widgetIconActiveStyle:WidgetIconStyle;

        return (
            <div style={menuWrapperStyle}>
                <img 
                    src={WidgetIcon} 
                    alt="" 
                    onClick={this.onWidgetClick.bind(this)} 
                    style={usedWidgetIconStyle} 
                />
                {this.renderMenu(this.state.menuOpen)}
            </div>
        );
    }
}

const styles = {
    WidgetIconStyle: {
        width: '42px',
        height: '42px',
        padding: '4px',
        
    },
    widgetIconActiveStyle: {
        width: '42px',
        height: '42px',
        padding: '4px',
        background: 'rgb(126, 4, 4)'
    },
    menuWrapperStyle: {
        position: 'relative',
        display: 'flex'
    },
    menuContainerStyle: {
        display: 'inline-box',
        position: 'absolute',
        padding: '5px',
        width: 'auto',
        background: 'black',
        color: 'white',
        right: '5px',
        top: '55px',
        zIndex: 5
    },
    tipStyle: {
        position: 'absolute',
        margin: '0 auto',
        width: '20px',
        height: '10px',
        right: '10px',
        top: '-10px'
    },
    polygonStyle: {
        fill: 'black',
        stroke: 'none',
        strokeWidth: 2
    },
    menuItemStyle: {
        padding: '5px',
        whiteSpace: 'nowrap',
        ':hover': {
            background: '#C00000'
        }
    }
}

export default MenuWidget;