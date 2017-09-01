import React, {Component} from 'react';

class TranslationComp extends Component {
    render() {
        const {containerStyle, indexStyle, translationStyle} = styles;

        return (
            <div style={containerStyle}>
                <div style={indexStyle}>
                    {this.props.idx}
                </div>
                <div style={translationStyle}>
                    {this.props.translation}
                </div>
            </div>
        )
    }
};

const styles = {
    containerStyle: {
        marginTop: '10px',
        marginBottom: '10px'
    },
    indexStyle: {
        color: 'red',
        fontSize: 'x-large',
        display: 'inline-block',
        width: '40px',
        height: '40px',
        marginRight: '4px',
        verticalAlign: 'top',
        textAlign: 'center'
    },
    translationStyle: {
        background: 'white',
        boxShadow: '0px 0px 0px 2px #000',
        display: 'inline-block',
        padding: '15px',
        width: 'calc(100% - 44px - 30px)',
        borderTopRightRadius: '15px',
        borderBottomRightRadius: '15px',
        borderBottomLeftRadius: '15px',
        fontSize: 'x-large',
    }
};

export default TranslationComp;