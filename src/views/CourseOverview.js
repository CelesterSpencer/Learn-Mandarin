import React, {Component} from 'react';
import Page from '../components/Page';
import HeaderBar from '../components/HeaderBar';
import ButtonComp from '../components/ButtonComp';
import MenuWidget from '../components/MenuWidget';
import PageContent from '../components/PageContent';
import backArrowIcon from '../res/images/backarrow.svg';
import addIcon from '../res/images/add.svg';

class CourseOverview extends Component {
    renderEmpty(shouldRender) {
        const {containerStyle} = styles;

        if(shouldRender) {
            return (
                <div style={containerStyle}>
                    <span>Course Overview</span>
                </div>
            );  
        }
    }
    render() {
        const {
            menuBarWidgetStyle, 
            listItemEven, 
            listItemOdd, 
            bigTextStyle,
            addItemButtonStyle
        } = styles;

        return (
            <Page>
                <HeaderBar>
                    <div style={menuBarWidgetStyle}>
                        <ButtonComp onClick={function(){ console.log('back'); }}>
                            <img alt="" src={backArrowIcon} />
                        </ButtonComp>
                    </div>
                    <MenuWidget 
                        items={['Option A', 'Option B']}
                        onSelect={function(item,i){ console.log(item); }}
                    /> 
                </HeaderBar>
                <PageContent>
                    <div>
                        <div style={listItemOdd}>
                            <div style={bigTextStyle}>Course 1</div>
                            <div>2/10</div>
                        </div>
                        <div style={listItemEven}>
                            <div style={bigTextStyle}>Course 2</div>
                            <div>0/20</div>
                        </div>
                        <div style={listItemOdd}>
                            <div style={bigTextStyle}>Course 3</div>
                            <div>10/10</div>
                        </div>
                    </div>
                    <button style={addItemButtonStyle}><img src={addIcon} alt="" /></button>
                    {this.renderEmpty(false)}
                </PageContent>
            </Page>
        );
    }
}

const styles = {
    containerStyle: {
        width: '100%',
        height: '100%',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuBarWidgetStyle: {
        width: 'auto',
        height: '50px',
        display: 'flex'
    },
    listItemEven: {
        padding: '5px',
        paddingLeft: '10px',
        background: 'gray',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItemOdd: {
        padding: '5px',
        paddingLeft: '10px',
        background: 'rgb(144, 144, 144)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bigTextStyle: {
        fontSize: '1.5em',
        fontWeight: 'bold'
    },
    addItemButtonStyle: {
        display: 'flex',
        position: 'absolute',
        right: '10px',
        bottom: '10px',
        padding: '20px',
        borderRadius: '100%',
        background: '#C00000',
        border: 'none',
        boxShadow: '0px 2px 5px black'
    }
}

export default CourseOverview;