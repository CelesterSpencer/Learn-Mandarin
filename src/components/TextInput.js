import React, {Component} from 'react';

class TextInput extends Component {
    static defaultProps = {
        text: '',
        isInvalid: false,
        onChange: (value) => console.log('Typed ' + value)
    }

    onChange = (event) => {
        this.props.onChange(event.target.value);
    }
    
    render() {
        const {textInputStyle} = styles;
        const borderColor = (this.props.isInvalid) ? {borderColor: 'red'} : undefined;

        return (
            <input 
                type="text" 
                style={{...textInputStyle, ...this.props.style, borderColor}}
                value={this.props.text}
                onChange={this.onChange}
            />
        )
    }
};

const styles = {
    textInputStyle: {
        padding: '5px',
        marginTop: '10px',
        marginBottom: '10px',
        width: '100%',
        boxSizing: 'border-box'
    }
};

export default TextInput;