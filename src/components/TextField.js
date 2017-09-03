import React, {Component} from 'react';

class TextField extends Component {
    render() {
        const {translationStyle} = styles;

        return (
            <div style={translationStyle}>
                {this.props.text}
            </div>
        )
    }
};

const styles = {
    translationStyle: {
        background: 'white',
        display: 'inline-block',
        padding: '15px',
        marginTop: '10px',
        marginBottom: '10px',
        width: 'calc(100% - 30px)',
        borderRadius: '15px',
        border: '1px black solid',
        fontSize: 'x-large',
        textAlign: 'center'
    }
};

export default TextField;