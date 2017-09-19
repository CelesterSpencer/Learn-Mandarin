import React, {Component} from 'react';

class TabletMockup extends Component {
    render(props) {
        const {
            outerContainerStyle,
            phoneCaseStyle, 
            stripeStyle,
            screenStyle,
            buttonStyle,
            buttonIconStyle
        } = styles;

        return (
            <div style={outerContainerStyle}>
                <div style={phoneCaseStyle}>
                    <div style={stripeStyle} />
                    <div style={screenStyle}>
                        {this.props.children}
                    </div>
                    <div style={buttonStyle}>
                        <div style={buttonIconStyle} />
                    </div>
                </div>
            </div>
        )
    }
}

const SCALE = 3.5;
const styles = {
    outerContainerStyle: {
        width: '100%',
        height: '100%',
        background: 'linear-gradient(pink, purple)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    phoneCaseStyle: {
        width: 196.5 * SCALE+'px',
        height: 240 * SCALE+'px',
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
    }
};

export default TabletMockup;