import React, {Component} from 'react';
import Radium from 'radium';
import PhoneMockup from './PhoneMockup';
import TabletMockup from './TabletMockup';

@Radium
class Mockup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            device: 'phone'
        }
    }

    onClick(device) {
        console.log(device);
        this.setState({device});
    }

    renderOption(device) {
        const isActive = device === this.state.device;
        const {optionContainerActiveStyle, optionContainerInactiveStyle} = styles;
        const style = (isActive) ? optionContainerActiveStyle : optionContainerInactiveStyle;
    
        return (
            <div style={style} onClick={this.onClick.bind(this,device)}>
                {device}
            </div>
        );
    }

    renderElement() {
        switch(this.state.device) {
            case 'phone':
                return (
                    <PhoneMockup>
                        {this.props.children}
                    </PhoneMockup>
                );
            case 'tablet':
                return (
                    <TabletMockup>
                        {this.props.children}
                    </TabletMockup>
                );
            case 'tablet-rotated':
                return (
                    <TabletMockup isRotated={true}>
                        {this.props.children}
                    </TabletMockup>
                );
            default:
                return (
                    <PhoneMockup>
                        {this.props.children}
                    </PhoneMockup>
                );
        }
    }

    render() {
        const {
            outerContainerStyle,
            selectionContainerStyle
        } = styles;        

        return (
            <div style={outerContainerStyle}>
                <div style={selectionContainerStyle}>
                    {this.renderOption('phone')}
                    {this.renderOption('tablet')}
                    {this.renderOption('tablet-rotated')}
                </div>
                {this.renderElement()}
            </div>
        );
    }
}

const styles = {
    outerContainerStyle: {
        width: '100%',
        height: '100%',
        background: 'linear-gradient(pink, purple)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    selectionContainerStyle: {
        position: 'absolute',
        top: '5px',
        left: '5px',
        display: 'flex',
        flexDirection: 'row',
        background: 'white',
        borderRadius: '5px'
    },
    optionContainerActiveStyle: {
        padding: '10px',
        color: 'red'
    },
    optionContainerInactiveStyle: {
        padding: '10px',
        color: 'black',
        cursor: 'pointer'
    }
}

export default Mockup;