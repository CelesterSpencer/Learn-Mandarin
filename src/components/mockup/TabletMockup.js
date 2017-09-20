import React, {Component} from 'react';

class TabletMockup extends Component {
    render(props) {
        const {
            phoneCaseStyle, 
            stripeStyle,
            screenStyle,
            buttonStyle,
            buttonIconStyle,
            phoneCaseRotatedStyle, 
            stripeRotatedStyle,
            screenRotatedStyle,
            buttonRotatedStyle,
            buttonIconRotatedStyle
        } = styles;

        const {isRotated} = this.props;
        const phoneCase = (!isRotated) ? phoneCaseStyle : phoneCaseRotatedStyle;
        const stripe = (!isRotated) ? stripeStyle : stripeRotatedStyle;
        const screen = (!isRotated) ? screenStyle : screenRotatedStyle;
        const button = (!isRotated) ? buttonStyle : buttonRotatedStyle;
        const buttonIcon = (!isRotated) ? buttonIconStyle : buttonIconRotatedStyle;

        return (
            <div style={phoneCase}>
                <div style={stripe} />
                <div style={screen}>
                    {this.props.children}
                </div>
                <div style={button}>
                    <div style={buttonIcon} />
                </div>
            </div>
        )
    }
}

const SCALE = 3.5;
const styles = {
    phoneCaseStyle: {
        width: 185.7 * SCALE+'px',
        height: 241.2 * SCALE+'px',
        borderRadius: '30px',
        background: 'black',
        position: 'relative'
    },
    stripeStyle: {
        width: '1.3%',
        height: '1%',
        borderRadius: '30px',
        background: '#3c3c3c',
        position: 'absolute',
        top: '3.6%',
        left: '50%',
    },
    screenStyle: {
        background: 'radial-gradient(lightblue, cornflowerblue)',
        overflow: 'hidden',
        position: 'absolute',
        top: '8%',
        left: '8%',
        right: '8%',
        bottom: '8%'
    },
    buttonStyle: {
        width: '5.5%',
        height: '4.2%',
        borderRadius: '100%',
        background: '#3c3c3c',
        position: 'absolute',
        left: '47%',
        bottom: '2%'
    },
    buttonIconStyle: {
        width: '35%',
        height: '35%',
        borderRadius: '5px',
        border: '2px solid white',
        position: 'absolute',
        left: '26.3%',
        bottom: '26.3%'
    },
    phoneCaseRotatedStyle: {
        height: 185.7 * SCALE+'px',
        width: 241.2 * SCALE+'px',
        borderRadius: '30px',
        background: 'black',
        position: 'relative'
    },
    stripeRotatedStyle: {
        height: '1.3%',
        width: '1%',
        borderRadius: '30px',
        background: '#3c3c3c',
        position: 'absolute',
        right: '3.6%',
        top: '50%',
    },
    screenRotatedStyle: {
        background: 'radial-gradient(lightblue, cornflowerblue)',
        overflow: 'hidden',
        position: 'absolute',
        top: '8%',
        left: '8%',
        right: '8%',
        bottom: '8%'
    },
    buttonRotatedStyle: {
        height: '5.5%',
        width: '4.2%',
        borderRadius: '100%',
        background: '#3c3c3c',
        position: 'absolute',
        bottom: '47%',
        left: '2%'
    },
    buttonIconRotatedStyle: {
        width: '35%',
        height: '35%',
        borderRadius: '5px',
        border: '2px solid white',
        position: 'absolute',
        bottom: '26.3%',
        left: '26.3%'
    }
};

export default TabletMockup;