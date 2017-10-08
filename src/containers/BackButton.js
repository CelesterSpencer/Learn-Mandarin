import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import ButtonComp from '../components/ButtonComp';
import backArrowIcon from '../res/images/backarrow.svg';

class BackButton extends Component {
    static defaultProps = {
        onPress: () => {}
    }

    onBackPress() {
        this.props.onPress();
        this.props.history.goBack();
    }

    render() {
        return (
            <ButtonComp onClick={this.onBackPress.bind(this)}>
                <img alt="" src={backArrowIcon} />
            </ButtonComp>
        );
    }
}

export default withRouter(BackButton);