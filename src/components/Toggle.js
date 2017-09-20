import React, {Component} from 'react';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn: true
        }
    }

    handleClick() {
        this.setState({isOn: !this.state.isOn});
    }

    render() {
        const {
            containerOnStyle,
            containerOffStyle,
            sliderOnStyle,
            sliderOffStyle
        } = styles;

        const containerStyle = (this.state.isOn) ? containerOnStyle : containerOffStyle;
        const sliderStyle = (this.state.isOn) ? sliderOnStyle : sliderOffStyle;

        return (
            <div 
                style={containerStyle}
                onClick={this.handleClick.bind(this)}
            >
                <span style={sliderStyle}></span>
            </div>
        );
    }
}

const styles = {
    containerOnStyle: {
        position: 'relative',
        display: 'inline-block',
        width: '52px',
        height: '26px',
        borderRadius: '34px',
        background: '#2196F3',
        transition: '.4s'
    },
    containerOffStyle: {
        position: 'relative',
        display: 'inline-block',
        width: '52px',
        height: '26px',
        borderRadius: '34px',
        background: '#ccc',
        transition: '.4s'
    },
    sliderOnStyle: {
        display: 'inline-block',
        position: 'absolute',
        borderRadius: '50%',
        background: 'white',
        height: '18px',
        width:'18px',
        left: '30px',
        bottom: '4px',
        transition: '.4s'
    },
    sliderOffStyle: {
        display: 'inline-block',
        position: 'absolute',
        borderRadius: '50%',
        background: 'white',
        height: '18px',
        width:'18px',
        left: '4px',
        bottom: '4px',
        transition: '.4s'
    }
}

export default Toggle;