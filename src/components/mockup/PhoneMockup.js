import React, {Component} from 'react';

class PhoneMockup extends Component {
    render(props) {
        const {
            phoneCaseStyle, 
            stripeStyle,
            screenStyle,
            buttonStyle
        } = styles;

        return (
            <div style={phoneCaseStyle}>
                <div style={stripeStyle} />
                <div style={screenStyle} id="screen">
                    {this.props.children}
                </div>
                <div style={buttonStyle} />
            </div>
        )
    }
}

const styles = {
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
        overflow: 'hidden'
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