import React, {Component} from 'react';

class SquareComp extends Component {
    render() {
        const {containerStyle} = styles;

        return (
            <div id="squareComp" style={containerStyle}>
                {this.props.children}
            </div>
        )   
    }
    componentDidMount() {
        let elem = document.getElementById('squareComp');
        let width = elem.clientWidth;
        elem.style.height = width+'px';
    }
}

const styles = {
    containerStyle: {
        width: '100%',
    }
};

export default SquareComp;