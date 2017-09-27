import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import SlideGallery from '../components/SlideGallery';

const SLIDES = [
    {text: 'This is the first page', style: {background: 'red'}},
    {text: 'This is the second page', style: {background: 'orange'}},
    {text: 'This is the third page', style: {background: 'green'}},
    {text: 'This is the fourth page', style: {background: 'blue'}}
];

class WelcomeScreen extends Component {
    handlePress() {
        this.props.history.replace('.');
    }

    render() {
        const {containerStyle} = styles;

        return (
            <div style={containerStyle}>
                <SlideGallery 
                    slides={SLIDES}
                    onPress={this.handlePress.bind(this)} 
                />
            </div>
        );
    }
}

const styles = {
    containerStyle: {
        background: '#C00000',
        height: '100%'
    }
}

export default withRouter(WelcomeScreen);