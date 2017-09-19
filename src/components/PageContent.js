import React, { Component } from 'react';

class PageContent extends Component {
    render() {
        const {pageContentStyle} = styles;

        return (
            <div style={pageContentStyle} id="app-content">
                {this.props.children}
            </div>
        );
    }
}

const styles = {
    pageContentStyle: {
        height: 'calc(100% - 50px)',
        background: '#cfcfcf',
        position: 'relative'
    }
}

export default PageContent;