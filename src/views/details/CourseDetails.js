import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Page from '../../components/Page';
import PageContent from '../../components/PageContent';
import HeaderBar from '../../components/HeaderBar';
import ButtonComp from '../../components/ButtonComp';
import ListComp from '../../components/ListComp';
import backArrowIcon from '../../res/images/backarrow.svg';
import lectureIcon from '../../res/images/cards.svg';
import tickIcon from '../../res/images/tick.svg';

const course = {
    isCompleted: true,
    completionDate: null,
    blocks: [
        {
            isUnlocked: true,
            isCompleted: true,
            completionDate: 'Wed, 9 Jun 2010 22:20:00 UTC',
            lectures: [
                {
                    isCompleted: true,
                    icon: lectureIcon
                },
                {
                    isCompleted: true,
                    icon: lectureIcon
                },
                {
                    isCompleted: true,
                    icon: lectureIcon
                },
                {
                    isCompleted: true,
                    icon: lectureIcon
                }
            ]
        },
        {
            isUnlocked: true,
            isCompleted: true,
            completionDate: null,
            lectures: [
                {
                    isCompleted: true,
                    icon: lectureIcon
                },
                {
                    isCompleted: true,
                    icon: lectureIcon
                },
                {
                    isCompleted: true,
                    icon: lectureIcon
                },
                {
                    isCompleted: true,
                    icon: lectureIcon
                }
            ]
        },
        {
            isUnlocked: false,
            isCompleted: false,
            completionDate: null,
            lectures: [
                {
                    isCompleted: true,
                    icon: lectureIcon
                },
                {
                    isCompleted: true,
                    icon: lectureIcon
                },
                {
                    isCompleted: false,
                    icon: lectureIcon
                },
                {
                    isCompleted: false,
                    icon: lectureIcon
                }
            ]
        },
        {
            isUnlocked: false,
            isCompleted: false,
            completionDate: null,
            lectures: [
                {
                    isCompleted: false,
                    icon: lectureIcon
                },
                {
                    isCompleted: false,
                    icon: lectureIcon
                },
                {
                    isCompleted: false,
                    icon: lectureIcon
                },
                {
                    isCompleted: false,
                    icon: lectureIcon
                }
            ]
        }
    ]
}

class DeckDetails extends Component {
    onBackPress() {
        this.props.history.goBack();
    }

    renderTickIcon(shouldRender) {
        if(shouldRender) {
            const {tickIconStyle} = styles;

            return(
                <img style={tickIconStyle} alt="" src={tickIcon}/>
            );
        }
    }
    renderLecture(lecture) {
        const {lectureIconStyle, lectureContainerStyle} = styles;
        const {icon, isCompleted} = lecture;
        
        return (
            <div style={lectureContainerStyle}>
                {this.renderTickIcon(isCompleted)}
                <img style={lectureIconStyle} alt="" src={icon} />
            </div>
        );
    }

    renderBlock(block, i) {
        const {
            blockStyle, 
            blockTitleStyle,
            lectureRowStyle
        } = styles;
        const {lectures, isUnlocked, isCompleted} = block;
        const name = 'Block ' + i;

        let lectureComps = [];
        for(var l = 0; l < lectures.length/2; l++) {
            lectureComps.push(
                <div style={lectureRowStyle}>
                    {this.renderLecture(lectures[l*2])}
                    {this.renderLecture(lectures[l*2+1])}
                </div>
            );
        }
        if(lectures.length % 2 === 1) {
            lectureComps.push(
                <div style={lectureRowStyle}>
                    {this.renderLecture(lectures[lectures.length - 1])}
                </div>
            )
        }

        return (
            <div>
                <div style={blockTitleStyle}>
                    {name}
                    {this.renderTickIcon(isCompleted)}
                </div>
                <div style={blockStyle}>
                    {lectureComps}
                </div>
            </div>
        );
    }

    render() {
        const {
            menuBarWidgetStyle,
            containerStyle
        } = styles;

        return (
            <Page>
                <HeaderBar>
                    <div style={menuBarWidgetStyle}>
                        <ButtonComp onClick={this.onBackPress.bind(this)}>
                            <img alt="" src={backArrowIcon} />
                        </ButtonComp>
                    </div>
                </HeaderBar>
                <PageContent style={containerStyle}>
                    <ListComp
                        items={course.blocks}
                        renderItem={this.renderBlock.bind(this)}
                    />
                </PageContent>
            </Page>
        );
    }
}

const styles = {
    containerStyle: {
        overflowY: 'scroll'
    },
    menuBarWidgetStyle: {
        width: 'auto',
        height: '50px',
        display: 'flex'
    },
    blockStyle: {
        padding: '10px',
        marginBottom: '3px',
        background: 'rgb(215, 15, 15)'
    },
    blockTitleStyle: {
        padding: '5px',
        paddingLeft: '30px',
        marginTop: '5px',
        background: 'rgb(255, 127, 21)',
        borderTopRightRadius: '5px',
        borderTopLeftRadius: '5px',
        position: 'relative'
    },
    lectureRowStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    lectureContainerStyle: {
        width: '100px',
        height: '100px',
        margin: '5px',
        position: 'relative',
        background: 'white',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    lectureIconStyle: {
        width: '50px',
        height: '50px'
    },
    tickIconStyle: {
        width: '30px',
        height: '30px',
        position: 'absolute',
        left: '-5px',
        top: '-5px'
    }
}

export default withRouter(DeckDetails);