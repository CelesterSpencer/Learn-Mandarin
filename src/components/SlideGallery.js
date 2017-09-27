import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
import ButtonComp from '../components/ButtonComp';
import './SlideGallery.css';

class SlideGallery extends Component {
    static defaultProps = {
        onPress: () => {console.log('Slidegallery button pressed');}
    }
    
    handlePress() {
        this.props.onPress();
    }

    render() {
        const {carouselStyle, slideStyle, buttonStyle} = styles;

        const renderButton = (shouldRender) => {
            if(shouldRender) {
                return (
                    <ButtonComp 
                        style={buttonStyle}
                        onClick={this.handlePress.bind(this)}
                    >
                        Continue
                    </ButtonComp>
                )
            }
        }
        const slides = this.props.slides.map((slide, i) => 
            <div 
                style={{...slideStyle, ...slide.style}}
            >
                {slide.text}
                {renderButton(i === this.props.slides.length-1)}
            </div>
        );

        return (
            <Carousel 
                fixedHeight={false}
                style={carouselStyle}
            >
                {slides}
            </Carousel>
        );
    }
}

const styles = {
    carouselStyle: {
        width: '100%',
        height: '100%',
        background: 'black'
    },
    slideStyle: {
        color: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: {
        background: 'gray',
        color: 'black',
        marginTop: '10px',

        ':hover': {
            background: '#606060',
            color: 'white',
        }
    }
}

export default SlideGallery;