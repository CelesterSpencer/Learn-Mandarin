import React, {Component} from 'react';

class CardComp extends Component {
    render() {
        const {containerStyle} = styles;

        return (
            <div style={containerStyle}>
                {this.props.children}
            </div>
        );
    }
}

const styles = {
    containerStyle: {
        padding: '5px'
    }
}

export default CardComp;