import React, {Component} from 'react';

class TextInput extends Component {
    static defaultProps = {
        text: '',
        onChange: (value) => console.log('Typed ' + value)
    }

    onChange = (event) => {
        this.props.onChange(event.target.value);
    }
    
    render() {
        const {textInputStyle} = styles;

        return (
            <input 
                type="text" 
                style={{...textInputStyle, ...this.props.style}}
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