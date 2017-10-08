import React, {Component} from 'react';
import arrowRightIcon from '../res/images/arrow-right.svg';
import arrowDownIcon from '../res/images/arrow-down.svg';

class Collapsible extends Component {
    static defaultProps = {
        renderGeneral: () => <div></div>,
        renderDetails: () => <div></div>
    }

    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        };
    }

    onPress = () => {
        this.setState({isExpanded: !this.state.isExpanded});
    }

    renderIcon = () => {
        if(this.state.isExpanded) {
            return <img src={arrowDownIcon} alt="" />
        } else {
            return <img src={arrowRightIcon} alt="" />
        }
    }

    renderDetails = (shouldRender) => {
        if(shouldRender) {
            return this.props.renderDetails();
        }
    }

    render() {
        const {generalRowStyle} = styles;

        return (
            <div>
                <div style={generalRowStyle} onClick={this.onPress}>
                    {this.props.renderGeneral()}
                    {this.renderIcon()}
                </div>
                {this.renderDetails(this.state.isExpanded)}
            </div>
        );
    }
}

const styles = {

    generalRowStyle: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        background: 'white'
    }
}

export default Collapsible;