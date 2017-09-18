import React, {Component} from 'react';
import Radium from 'radium';
import addIcon from '../res/images/add.svg';

@Radium
class AddButton extends Component {
    static defaultProps = {
        onPress: () => {console.log('Add button pressed!')}
    }

    handlePress() {
        this.props.onPress();
    }

    render() {
        const {addItemButtonStyle} = styles;

        return (
            <button 
                style={addItemButtonStyle}
                onClick={this.handlePress.bind(this)}
            >
                <img src={addIcon} alt="" />
            </button>
        );
    }
}

const styles = {
    addItemButtonStyle: {
        display: 'flex',
        position: 'absolute',
        right: '10px',
        bottom: '10px',
        padding: '20px',
        borderRadius: '100%',
        background: '#C00000',
        border: 'none',
        boxShadow: '0px 2px 5px black',

        ':active': {
            transform: 'translate(0px, 2px)',
            boxShadow: '0px 1px 2px black'
        }
    }
}

export default AddButton;