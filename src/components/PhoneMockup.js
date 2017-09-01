import React, {Component} from 'react';

class PhoneMockup extends Component {
    render(props) {
        const {
            outerContainerStyle,
            phoneCaseStyle, 
            stripeStyle,
            screenStyle,
            buttonStyle
        } = styles;

        return (
            <div style={outerContainerStyle}>
                <div style={phoneCaseStyle}>
                    <div style={stripeStyle} />
                    <div style={screenStyle}>
                        {this.props.children}
                    </div>
                    <div style={buttonStyle} />
                </div>
            </div>
        )
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
    phoneCaseStyle: {
        width: 400*1+'px',
        height: 767*1+'px',
        padding: '1%',
        borderRadius: '30px',
        background: 'black'
    },
    stripeStyle: {
        width: '20%',
        height: '1%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '7%',
        marginBottom: '7%',
        borderRadius: '30px',
        border: '4px white solid',
    },
    screenStyle: {
        width: '94%',
        height: '80%',
        background: 'radial-gradient(lightblue, cornflowerblue)',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    buttonStyle: {
        width: '14%',
        height: '7%',
        borderRadius: '100%',
        border: '4px white solid',
        marginTop: '4%',
        marginBottom: '4%',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
};

export default PhoneMockup;