import React, {Component} from 'react';
import Radium from 'radium';

@Radium
class Selection extends Component {
    static defaultProps = {
        options: [],
        onChange: (option) => console.log('Selected option ' + option)
    }

    handleChange(event) {
        console.log(event.target);
        this.props.onChange(event.target.value);
    }

    render() {
        const {selectStyle} = styles;
        const options = this.props.options.map((option, i) =>
            <option 
                key={i} 
                value={option.value}
            >
                {option.text}
            </option>
        );

        return (
            <select 
                style={selectStyle}
                onChange={this.handleChange.bind(this)}
            >
                {options}
            </select>
        );
    }
}

const styles = {
    selectStyle: {
        background: '#cdcdcd',
        background: 'white',
        border: 'none',
        appearance: 'none',
        color: 'orangered',
        textAlign: 'right'
    }
}

export default Selection;